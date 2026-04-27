export default async function handler(req, res) {
  const TARGET_BASE = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");
  
  if (!TARGET_BASE) {
    return res.status(500).send("Misconfigured");
  }

  res.status(200).send("relay works: " + req.url);
}
