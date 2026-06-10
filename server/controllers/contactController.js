// Temporary in-memory storage (for demo)
let contactSubmissions = [];

const submitContact = (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Basic validation
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Email format validation (simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const newSubmission = {
    id: Date.now(),
    fullName,
    email,
    subject,
    message,
    submittedAt: new Date().toISOString(),
  };

  contactSubmissions.push(newSubmission);
  console.log('New contact submission:', newSubmission);

  res.status(201).json({
    success: true,
    message: 'Your message has been received. We will get back to you soon.',
  });
};

module.exports = { submitContact };