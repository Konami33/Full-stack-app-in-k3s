const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});