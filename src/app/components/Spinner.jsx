export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-black/50">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-700 border-t-transparent"></div>
    </div>
  );
}