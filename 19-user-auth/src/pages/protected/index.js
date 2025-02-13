// src/pages/protected/index.js
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login'); // If the user is not authenticated, redirect them to login page
    return null;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
