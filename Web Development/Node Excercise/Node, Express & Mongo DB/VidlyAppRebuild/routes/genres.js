const Joi = require("joi");
const express = require("express");
const router = express.Router();
//List of Movie Gernres
const genres = [
    {
        id : 1,
        genreName : 'Comedy'
    },
    {
        id : 2,
        genreName : 'Romantic'
    },
    {
        id : 3,
        genreName : 'Drama'
    },
    {
        id : 4,
        genreName : 'Documentary'
    },
    {
        id : 5,
        genreName : 'Animation'
    }
];
//Get all genres
router.get('/', (req, res)=>{
    return res.status(200).send(genres);
})
//Get particular genre by id
router.get('/:id', (req, res)=>{
   const genre = findGenre(req.params.id);
    if(!genre)
        return res.status(404).send({error : `Genre having id ${req.params.id} not available`});
    return res.status(200).send(genre);
})
//Create a new Genre
router.post('/', (req, res)=>{
    //validate request body
    const {error} = validateGenre(req.body);
    if(error)
        return res.status(400).send({error : error.details[0].message});
    // Create new Id
    const newId = parseInt(genres[genres.length-1].id) + 1;
    const newGenre = {
        id : newId,
        genreName : req.body.genreName
    }
    //push to genre list and send new genre as response
    genres.push(newGenre);
    return res.status(201).send(newGenre);
})
//Update a genre
router.put('/:id', (req, res) => {
    //Look for the genre
    const genre = findGenre(req.params.id);
    if(!genre)
        return res.status(404).send({error : `Genre having id ${req.params.id} not available`});
    // validate the request body
    const {error} = validateGenre(req.body);
    if(error)
        return res.status(400).send({error : error.details[0].message});
    //Update the genre
    genre.genreName = req.body.genreName;
    return res.status(200).send(genre);
    
})
//Delete a Genre
router.delete('/:id', (req, res)=>{
    //Look for the genre
    const genre = findGenre(req.params.id);
    if(!genre)
        return res.status(404).send({error : `Genre having id ${req.params.id} not available`});
    //delete the genre
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    return res.status(200).send(genre);
})
//Method to find a genre from genre list
function findGenre(id){
    const genreId = parseInt(id);
    const genre = genres.find(g => g.id === genreId);
    return genre;
}
//Mehod to validate request body
function validateGenre(genre){
    const schema = {
        genreName : Joi.string().min(4).required()
    }

    const result = Joi.validate(genre, schema);
    return result;
}

module.exports = router;