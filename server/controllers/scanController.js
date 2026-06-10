// Dummy URL scanning logic
const scanUrl = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required.' });
  }

  // Simple URL validation
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
  if (!urlPattern.test(url)) {
    return res.status(400).json({ error: 'Please provide a valid URL (e.g., https://example.com).' });
  }

  // Dummy threat assessment based on URL keywords (for demo)
  const lowerUrl = url.toLowerCase();
  let status, risk, message;

  if (lowerUrl.includes('malware') || lowerUrl.includes('phishing') || lowerUrl.includes('danger')) {
    status = 'dangerous';
    risk = 'high';
    message = '⚠️ Threat detected! Do not proceed. This URL may contain malware or phishing content.';
  } else if (lowerUrl.includes('suspicious') || lowerUrl.includes('untrusted')) {
    status = 'suspicious';
    risk = 'medium';
    message = '⚠️ Suspicious link. Proceed with caution. Further analysis recommended.';
  } else {
    status = 'safe';
    risk = 'low';
    message = '✅ This URL appears to be safe. No immediate threats detected.';
  }

  res.status(200).json({
    status,
    risk,
    message,
    scannedUrl: url,
    timestamp: new Date().toISOString(),
  });
};

module.exports = { scanUrl };