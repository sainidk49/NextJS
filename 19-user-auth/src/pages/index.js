"use client"; // Important for ensuring this code is executed only on the client-side

import { useAuth } from '../context/AuthContext';

export default function ProtectedPage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Welcome Page</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
