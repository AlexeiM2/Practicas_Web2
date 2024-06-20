const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Importar cors

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'datos.json');

app.use(bodyParser.json());
app.use(cors()); // Usar cors

app.get('/gastos', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/gastos', (req, res) => {
  const newGasto = req.body;
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
    } else {
      const gastos = JSON.parse(data);
      gastos.push(newGasto);
      fs.writeFile(DATA_FILE, JSON.stringify(gastos, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error writing data file');
        } else {
          res.status(200).send('Gasto added successfully');
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
