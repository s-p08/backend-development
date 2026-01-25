// const express = require('express');
import express from "express";
const app = express();
app.use(express.static('dist'))
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
app.get('/api/jokes',(req,res)=>{
const jokes = [
    {
        id : 1,
        title:'A Joke',
        content:'This is a joke'
    },
     {
        id : 2,
        title:'Another Joke',
        content:'This is another joke'
    },
     {
        id : 3,
        title:'A third Joke',
        content:'This is another joke'
    },
     {
        id : 4,
        title:'A Fourth joke',
        content:'This is another joke'
    },
     {
        id : 5,
        title:'A fifth joke',
        content:'This is a  last joke'
    }
];
res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
