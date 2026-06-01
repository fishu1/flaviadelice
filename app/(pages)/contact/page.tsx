export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Contact flaviadelice.ro
        </h1>

        <p className="text-gray-600 mb-6">
          Scrie-ne și îți răspundem cât mai repede.
        </p>

        {/* Info */}
        <div className="text-sm text-gray-700 mb-6 space-y-1">
          <p><span className="font-semibold">Email:</span> contact@flaviadelice.ro</p>
          <p><span className="font-semibold">Program:</span> Luni - Vineri, 09:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
}