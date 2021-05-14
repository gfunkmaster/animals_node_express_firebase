const express = require('express');
const {addAnimal,
     getAllAnimals,
     getAnimal,
     updateAnimal,
     deleteAnimal} = require ('../controller/animalController');

const router = express.Router();

router.post('/animal', addAnimal);
router.get('/animals', getAllAnimals);
router.get('/animal/:id', getAnimal);
router.put('/animal/:id', updateAnimal);
router.delete('/animal/:id', deleteAnimal);


module.exports = {
    routes: router
}