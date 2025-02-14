import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const publicPages = ['/login', '/register', '/forgot'];

    if (!token && !publicPages.includes(router.pathname)) {
      router.push('/login');
      return;
    }

    if (token && publicPages.includes(router.pathname)) {
      router.push('/');
      return;
    }
  
    setUser({ token });
  }, [router.pathname]);

  ///////////// login /////////////
  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      setUser({ token });
      router.push('/'); 
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };


  ///////////// logout /////////////
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login'); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
