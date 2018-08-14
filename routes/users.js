// include lib
const express = require('express'),
      router  = express.Router(),
      User    = require('../models/user');

// get all users
router.get('/users', (req, res) => {
    res.send({ type: 'GET '});
});

// add new user
router.post('/users', (req, res) => {
    //console.log(req.body);
    // const user = new User(req.body);
    // user.save();
    // res.send({ data: data});

    User.create(req.body)
    .then((user) => {
        res.send({ user });    
    })
    .catch( err => {
        res.send(err);
    });

});

// update  existing user
router.put('/users/:id', (req, res) => {
    res.send({ type: 'PUT'});
});

// delete existing user
router.delete('/users/:id', (req, res) => {
    res.send({ type: 'DELETE'});
});

module.exports = router;