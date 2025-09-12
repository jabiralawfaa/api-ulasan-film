const express = require('express');
const app = express();
const port = 3300;

app.use(express.json());

let reviews = [
    {
        id: 1,
        film_id: "86e544fd-79de-4e04-be62-5be67d8dd92e", //Nausicaä of the Valley of the Wind
        user: "Andi",
        rating: 5,
        comment: "Film animasi terbaik sepanjang masa!"
    }
];

app.get('/', (req,res) => {
   res.send('Selamat Datang diserver Node.js')
    });

   app.get('/reviews', (req, res) => {
    res.json(reviews);
 });


 app.get('/reviews/:id', (req, res) => {
     const review = reviews.find(r => r.id === parseInt(req.params.id));
     if (review) {
         res.json(review);
     } else {
         res.status(404).send('Film not found');
     }
 });

 app.listen(port, () => {
     console.log(`Server Running on ${port}`);
 });
