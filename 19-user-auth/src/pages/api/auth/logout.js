export default async function handler(req, res) {
    // Logout is handled by clearing the token from localStorage on the client-side
    res.status(200).json({ message: 'Logged out successfully' });
  }
  