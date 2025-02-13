import connectDB from '../../utils/db';
import User from '../models/User';
import { generateToken } from '../../utils/jwt';

const login = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default login;
