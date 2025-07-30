
import express from 'express';
import 'dotenv';

const app = express();
const PORT = 5000; // or any port you want

app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
