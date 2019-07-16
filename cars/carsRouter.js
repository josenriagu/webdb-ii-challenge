const express = require('express');

const Cars = require('./carsDb');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const cars = await Cars.get();
      res.status(200).json(cars);
   } catch (error) {
      res.status(500).json('Oops! The aliens crushed the cables! Help us fix the mess from your side, while we work from over here')
   }
})

router.get('/:id', validateId, (req, res) => {
   try {
      res.status(200).json(req.car);
   } catch (error) {
      res.status(500).json('Oops! The aliens crushed the cables! Help us fix the mess from your side, while we work from over here')
   }
})

router.post('/', validateCar, async (req, res) => {
   try {
      const newCar = await Cars.insert(req.body);
      res.status(201).json(newCar);
   } catch (error) {
      res.status(500).json('Oops! The aliens crushed the cables! Help us fix the mess from your side, while we work from over here')
   }
})

router.put('/:id', validateCar, validateId, async (req, res) => {
   try {
      await Cars.update(req.params.id, req.body);
      const car = await Cars.getById(req.params.id);
      res.status(200).json(car);
   } catch (error) {
      res.status(500).json('Oops! The aliens crushed the cables! Help us fix the mess from your side, while we work from over here')
   }
})

router.delete('/:id', validateId, async (req, res) => {
   try {
      await Cars.remove(req.params.id)
      const cars = await Cars.get();
      res.status(200).json(cars)
   } catch (error) {
      res.status(500).json('Oops! The aliens crushed the cables! Help us fix the mess from your side, while we work from over here')
   }
})

// middleware
async function validateId(req, res, next) {
   const id = Number(req.params.id);
   if (Number.isInteger(id)) {
      const car = await Cars.getById(id);
      if (car.length !== 0) {
         req.car = car;
         next();
      } else {
         res.status(400).json("Aww, the car with that id might have gone into the BlackHole")
      }
   } else {
      res.status(400).json("That id doesn't look legit!")
   }
}

async function validateCar(req, res, next) {
   if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
      if (req.body.name && req.body.budget) {
         next();
      } else {
         res.status(400).json({ message: "Oh no! the required name and budget fields gone missing" })
      }
   } else {
      res.status(400).json({ message: "hmm! no car data for real?" })
   }
}

module.exports = router;