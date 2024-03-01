import express from 'express';
import fs from 'fs';
const app = express();

const PORT = 5137;

app.use(express.json());

app.get('/', async (req, res) => {
  res
    .status(500)
    .json({error: 'Wystąpił błąd podczas pobierania danych owoców'});

  req.on('error', (error) => {
    console.error('Błąd żądania: ', error);
  });
  req.end();
});

app.get('/fruits', (req, res) => {
  fs.readFile('fruits.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('Błąd podczas odczytywania pliku:', err);
      res.status(500).send('Błąd serwera');
      return;
    }

    res.json(JSON.parse(data));
  });
});
app.get('send-cookie', (req, res) => {
  res.cookie('secure cookie', 'wartość ciasteczka', {secure: true});
  res.send('Ciasteczko zostało ustawione');
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie: ${PORT}`);
});
