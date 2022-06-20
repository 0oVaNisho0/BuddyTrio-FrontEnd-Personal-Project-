import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAcessToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        setLoading(true);
        const token = getAccessToken();

        if (token) {
          const resMe = await axios.get('/users/me');
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAcessToken();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  const register = async (input) => {
    await axios.post('/auth/register', input);
  };

  const login = async (userName, password) => {
    const res = await axios.post('/auth/login', { userName, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const logout = () => {
    removeAcessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ register, user, logout, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
