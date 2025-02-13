import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1d' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
