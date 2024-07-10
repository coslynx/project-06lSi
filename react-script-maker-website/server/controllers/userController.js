import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Check if user already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getUserDetails: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select('-password');
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateUserDetails: async (req, res) => {
    try {
      const { username, email } = req.body;

      await User.findByIdAndUpdate(req.userId, { username, email });

      res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

export default userController;