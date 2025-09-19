'use client';

import React, { useRef, useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function LiveKycCapture({ uploadUrl = "/api/v1/kyc/upload-selfies", token }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [stage, setStage] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [captures, setCaptures] = useState([]);
  const [loading, setLoading] = useState(false);

  const steps = [
    { label: "front", instruction: "Look straight into the camera" },
    { label: "left", instruction: "Turn your head to the left" },
    { label: "right", instruction: "Turn your head to the right" },
    { label: "neutral", instruction: "Keep a neutral face" },
    { label: "smile", instruction: "Smile naturally" },
  ];

  // Start camera
  useEffect(() => {
    async function startCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        setStream(s);
        if (videoRef.current) videoRef.current.srcObject = s;
      } catch (err) {
        console.error("Camera error", err);
        alert("Cannot access camera: " + err.message);
      }
    }
    startCamera();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // Countdown
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (countdown === 0 && stage < steps.length) {
      captureImage(steps[stage].label);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const startStage = (index) => {
    setStage(index);
    setCountdown(10); // give 10s prep
  };

  const captureImage = (label) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const newCap = { label, blob, capturedAt: new Date() };
      setCaptures((prev) => [...prev, newCap]);

      setTimeout(() => {
        const next = stage + 1;
        if (next < steps.length) {
          setStage(next);
          setCountdown(10);
        } else {
          setStage(steps.length);
        }
      }, 500);
    }, "image/jpeg", 0.9);
  };

  const submitAll = async () => {
    if (captures.length === 0) return alert("No captures to upload");
    setLoading(true);

    const form = new FormData();
    const labels = captures.map((c) => c.label);
    captures.forEach((c, i) => {
      form.append("selfies", c.blob, `${labels[i]}-${Date.now()}.jpg`);
    });
    form.append("labels", JSON.stringify(labels));

    try {
      // API CALL using Axios
      const res = await axios.post(uploadUrl, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded successfully ✅");
      console.log("Server response:", res.data);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Generate safe preview URLs
  const previews = useMemo(
    () =>
      captures.map((c) => ({
        ...c,
        url: URL.createObjectURL(c.blob),
      })),
    [captures]
  );

  // Clean up preview URLs
  useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Live KYC Capture
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Camera Feed */}
        <div className="flex flex-col items-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="rounded-lg border-4 border-white shadow-md w-80 h-60 bg-black"
          />
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>

        {/* Instructions */}
        <div className="flex-1">
          {stage < steps.length ? (
            <div className="space-y-4">
              <p className="text-lg">
                <strong>
                  Step {stage + 1}/{steps.length}:
                </strong>{" "}
                {steps[stage].instruction}
              </p>
              <div className="text-5xl font-bold text-center text-yellow-300">
                {countdown > 0 ? countdown : ""}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => startStage(stage)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg shadow"
                >
                  Start / Retry
                </button>
                <button
                  onClick={() => {
                    setStage(0);
                    setCaptures([]);
                    setCountdown(null);
                  }}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg shadow"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                All captures completed ({captures.length})
              </p>
              <div className="flex flex-wrap gap-3">
                {previews.map((c, idx) => (
                  <img
                    key={idx}
                    src={c.url}
                    alt={c.label}
                    width={100}
                    className="rounded-md border-2 border-white shadow"
                  />
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={submitAll}
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg shadow ${
                    loading
                      ? "bg-gray-400"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {loading ? "Uploading..." : "Upload Captures"}
                </button>
                <button
                  onClick={() => {
                    setStage(0);
                    setCaptures([]);
                  }}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow"
                >
                  Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
