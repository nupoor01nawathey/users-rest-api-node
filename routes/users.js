// include lib
const express = require('express'),
      router  = express.Router(),
      User    = require('../models/user');

// get all users
router.get('/users', (req, res) => {
    // User.find({})
    // .then(user => {
    //     res.send(user);
    // })
    // .catch( err => {
    //     res.send(err);
    // });
    User.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
       })
       .then(users => {
           res.send(users);
       })
       .catch(err => {
           res.status(500).send(err);
       }) ;
});

// add new user
router.post('/users', (req, res, next) => {
    User.create(req.body)
    .then((user) => {
        res.send({ user });    
    })
    .catch(err => {
        res.status(400).send({ 
            message: err.message
        });
    });
});

// update  existing user
router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate({ _id: id}, req.body)
    .then(user => {
        User.findOne({ _id: id})
        .then( user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    })
    .catch( err => {
        res.status(500).send(err);
    });
});

// delete existing user
router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove({ _id: id})
    .then(user => {
        res.send( { id: id + " has been deleted" } );
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;