import express from 'express';
import contacts from './public/contacts.json';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index', {
    content: 'Hello'
  });
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
