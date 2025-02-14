"use client";

import { useAuth } from '../../context/AuthContext';

export default function ProtectedPage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
