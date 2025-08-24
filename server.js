const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Serve frontend static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route serves the main frontend HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: Get statistics (sample data)
app.get('/api/statistics', (req, res) => {
  res.json({
    totalSims: 12470,
    threatsBlocked: 8920,
    fraudSavedCrores: 147,
    successRate: 98.5,
  });
});

// API: Start transaction (simulation)
app.post('/api/start-transaction', (req, res) => {
  // Payload example: { scenarioId, amount, eveAttackEnabled }
  // Process input if needed
  setTimeout(() => {
    res.json({
      success: true,
      message: 'Transaction processed successfully with BB84 Quantum Key Distribution.',
    });
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
