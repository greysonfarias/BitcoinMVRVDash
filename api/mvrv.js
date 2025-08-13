export default function handler(req, res) {
  // Aqui você pode puxar dados reais ou enviar mock
  res.status(200).json({
    current: 2.1,
    series: [
      { t: new Date().toISOString(), mvrv: 2.1 },
      { t: new Date(Date.now() - 86400000).toISOString(), mvrv: 2.0 }
    ]
  });
}
