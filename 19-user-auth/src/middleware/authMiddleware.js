import { verifyToken } from '../lib/auth';

export const authMiddleware = (handler) => {
  return async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};
