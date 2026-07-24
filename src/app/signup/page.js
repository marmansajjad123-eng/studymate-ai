export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
          Create Account
        </button>
      </div>
    </main>
  );
}