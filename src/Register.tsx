import React, { useState } from "react";

export interface RegisterProps {
  onRegister: (email: string, password: string) => void;
  onBackToLogin: () => void;
  error: string;
  message: string;
}

const Register: React.FC<RegisterProps> = ({
  onRegister,
  onBackToLogin,
  error,
  message,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegister(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <div>{error}</div>
          <div>{message}</div>
        </form>
        <button
          onClick={onBackToLogin}
          className="mt-4 text-blue-500 hover:underline w-full text-center"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Register;
