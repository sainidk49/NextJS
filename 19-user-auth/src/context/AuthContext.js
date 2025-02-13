import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if the user is authenticated (hydration)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally, validate the token or fetch user details here
      setUser({ token });  // You can decode the token if you want to store user info
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      setUser({ token });
      router.push('/protected'); // Redirect to a protected page after successful login
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
