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

let sequenceID = 2;

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

 app.post('/reviews', (req, res) => {
    const {film_id, user, rating, comment} = req.body;

    if (!film_id || !user || !rating || !comment) {
        return res.status(400).send('Semua field harus diisi!');
    }

    const newReview = {
        id: sequenceID++,
        film_id,
        user,
        rating,
        comment
    };

    app.put('/reviews/:id', (req,res) =>{
        const id = parseInt(req.params.id);
        const reviewIndex = reviews.findIndex(r => r.id === id);
        if (reviewIndex===-1) {
            return res.status(404).json({error: 'Review tidak ditemukan'});
        }
        const { film_id, user, rating, comment} = req.body || {};
        const updateReview = {id, film_id, user, rating, comment};
        reviews[reviewIndex] = updateReview;
        res.json(updateReview);
    })

    reviews.push(newReview);
    res.status(201).json(newReview);
 });

 app.listen(port, () => {
     console.log(`Server Running on ${port}`);
 });
