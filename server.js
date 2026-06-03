const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mdToPdf } = require('md-to-pdf');
const puppeteer = require('puppeteer');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.text());

app.get('/test', (req, res) => {
  res.send(puppeteer.executablePath());
});

app.post('/', async (req, res) => {
  try {
    const content = req.body;

    const pdf = await mdToPdf(
      { content },
      { dest: 'temp.pdf' }
    );

    if (!pdf) {
      return res.status(500).send('Failed to generate PDF');
    }

    res.download('temp.pdf', 'markdown.pdf');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});