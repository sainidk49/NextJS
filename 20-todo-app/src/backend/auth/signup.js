import connectDB from '../../utils/db';
import User from '../models/User';
import { generateToken } from '../../utils/jwt';

const signup = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    const token = generateToken(newUser);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default signup;
