//here we will create all routes for our api
//we need express
const express = require('express');

//router
//we need express router
const router = express.Router();
const Ninja = require('../models/ninja');

//route /ninjas
//get a list of ninjas from the db
router.get('/ninjas', async function(req,res,next){
  try {
    const ninjas = await Ninja.find();
    return res.status(200).json({ ninjas, error: null });

  } catch (error) {
    return res.status(500).json({ ninjas: null, error });
  }
});

//add a ninja to db
router.post('/ninjas', function(req,res,next){
  /*var ninja = new Ninja(req.body);
  ninja.save();*/
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});
/*  res.send({
    Type: 'POST',
    Name: req.body.name,
    Age: req.body.age });
});*/

//update a ninja on db
router.put('/ninjas/:id', function(req,res,next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja); 
    })
  })
});

//delete a ninja from db
router.delete('/ninjas/:id', function(req,res,next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  });
});

//bech najmou nessta3mlou el router fi file ekher lezem nexportiweh et nimportiweh fil file lekher
module.exports = router;
