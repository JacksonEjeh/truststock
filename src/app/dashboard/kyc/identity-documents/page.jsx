'use client';

import { useState } from "react";
import axios from "axios";

export default function KycIdUpload({ uploadUrl = "/api/v1/kyc/upload-id", token }) {
  const [files, setFiles] = useState([]);
  const [docTypes, setDocTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles);
    setDocTypes(newFiles.map(() => "")); 
  };

  const handleDocTypeChange = (index, value) => {
    const updated = [...docTypes];
    updated[index] = value;
    setDocTypes(updated);
  };

  const submitDocs = async () => {
    if (files.length === 0) return alert("Please select at least one document");
    if (docTypes.some((t) => !t)) return alert("Please select document types for all uploads");

    setLoading(true);
    const form = new FormData();
    files.forEach((file) => form.append("idDocs", file));
    form.append("docTypes", JSON.stringify(docTypes));

    try {
      const res = await axios.post(uploadUrl, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message || "Documents uploaded successfully");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload ID Documents</h2>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept="image/*,.pdf"
        className="mb-4 block w-full text-white file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0 file:text-sm file:font-semibold
        file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
      />

      {files.length > 0 && (
        <div className="space-y-4 mb-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/10 p-3 rounded-lg shadow"
            >
              <span className="text-sm truncate max-w-xs">{file.name}</span>
              <select
                value={docTypes[index]}
                onChange={(e) => handleDocTypeChange(index, e.target.value)}
                className="ml-4 px-2 py-1 rounded-md text-black"
              >
                <option value="">Select type</option>
                <option value="passport">Passport</option>
                <option value="driverLicense">Driver's License</option>
                <option value="nationalId">National ID</option>
                <option value="ssn">SSN</option>
              </select>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={submitDocs}
        disabled={loading}
        className={`w-full px-4 py-2 rounded-lg shadow font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Uploading..." : "Upload Documents"}
      </button>
    </div>
  );
}
