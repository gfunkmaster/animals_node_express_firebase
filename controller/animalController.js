'use strict'

const firebase = require('../db');
const Animal = require('../models/animal');
 
 const firestore = firebase.firestore();

//add one animal
 const addAnimal = async (req, res, next) => {
     try {
         const data = req.body
         await firestore.collection('animals').doc().set(data)
         res.send('Record saved succesfully')
         
     } catch (error) {
         req.status(400).send(error.message)
     }
 }


 //get all animals
 const getAllAnimals = async (req, res, next)=> {
     try {
         const animals = await firestore.collection('animals');
         const data = await animals.get();
         const animalsArray = [];
         if(!data){
             res.status(404).send('No animals in the zoo');
         } else{
             data.forEach(doc =>{
                 const animal = new Animal(
                     doc.id,
                     doc.data().name,
                     doc.data().color,
                     doc.data().height,
                     doc.data().weigth,
                     doc.data().continent

                 );
                 animalsArray.push(animal);
             });
             res.send(animalsArray)
         }

     } catch (error) {
        req.status(400).send(error.message)
     }
 }

 //get one animal
 const getAnimal = async (req,res, next) => {

    try {
        const id = req.params.id;
        const animal = await firestore.collection('animals').doc(id);
        const data = await animal.get();
        if(!data) {
            res.status(404).send('No animal with that id');
        } else{
            res.send(data.data())
        }

        
    } catch (error) {
        req.status(400).send(error.message)
    }

 }


 //update
 
 const updateAnimal = async (req, res, next) => {
     try {
         const id = req.params.id;
         const data = req.body;
        const animal =  await firestore.collection('animals').doc(id);
        await animal.update(data);
        res.send('Update successfull')
         
     } catch (error) {
        req.status(400).send(error.message)
     }
 }

 //delete

 const deleteAnimal = async (req, res, next) => {
     try {
        const id = req.params.id;
        await firestore.collection('animals').doc(id).delete();
        res.send('deleted successfully');

         
     } catch (error) {
        eq.status(400).send(error.message)
     }

 }




 module.exports = {
     addAnimal,
     getAllAnimals,
     getAnimal,
     updateAnimal,
     deleteAnimal,
 }