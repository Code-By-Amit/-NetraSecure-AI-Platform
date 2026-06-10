// Simple keyword-based dummy responses
const getReply = (userMessage) => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes('password') || msg.includes('login')) {
    return '🔐 Use strong, unique passwords and enable two-factor authentication (2FA) wherever possible.';
  } else if (msg.includes('phishing') || msg.includes('fake email')) {
    return '🎣 Never click suspicious links. Verify sender email addresses and look for grammatical errors.';
  } else if (msg.includes('malware') || msg.includes('virus')) {
    return '🛡️ Keep your antivirus updated, avoid downloading from untrusted sources, and scan files before opening.';
  } else if (msg.includes('network') || msg.includes('wifi')) {
    return '📡 Use a VPN on public Wi-Fi, enable firewall, and disable file sharing when on unsecured networks.';
  } else if (msg.includes('data breach') || msg.includes('leak')) {
    return '🔍 Monitor your accounts with breach checkers, change credentials immediately after a breach, and use a password manager.';
  } else if (msg.includes('deepfake')) {
    return '🤖 Deepfakes can be detected by analyzing inconsistencies in lighting, blinking, and audio lip-sync. Our AI can help!';
  } else {
    return '🤖 I am NetraSecure AI. Ask me about passwords, phishing, malware, network security, deepfakes, or data breaches. Stay safe online!';
  }
};

const chatResponse = (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid message.' });
  }

  const reply = getReply(message);
  res.status(200).json({
    reply,
    timestamp: new Date().toISOString(),
  });
};

module.exports = { chatResponse };