const express = require('express');

const database = require('./data/helpers/projectModel');

const router = express.Router();

router.get('/api/:ID', (req, res) => {

    database.get(req.params.ID).then(data => {

        if (data === undefined)
            res.status(404).json({ error: 'The user with the specified ID does not exist.' });
        else
            res.status(200).json(data);

    }).catch(err => {

        console.log(err);
        res.status(500).json({ error: 'There was an error while saving the user to the database!' });

    });

});

router.post('/api/', (req, res) => {

    database.insert(req.body).then(result => {

        console.log(result);
        database.get(result.id).then(user => {
            res.status(201).json({ user });
        });

    }).catch(err => {

        console.log(err);
        res.status(500).json({ error: 'There was an error while saving the user to the database!' });

    })

});

router.delete('/api/:ID', (req, res) => {

    database.remove(req.params.ID).then(data => {

        if (data === undefined)
            res.status(404).json({ error: 'The user with the specified ID does not exist.' });
        else
            res.status(200).json(data);

    }).catch(err => {

        console.log(err);
        res.status(500).json({ error: 'The user could not be removed!' });

    });

});

router.put('/api/:ID', (req, res) => {

    database.update(req.params.ID, req.body).then(data => {

        if (data === undefined)
            res.status(404).json({ error: 'The user with the specified ID does not exist.' });
        else
            database.get(req.params.ID).then(user => res.status(200).json(user));

    }).catch(err => {

        console.log(err);
        res.status(500).json({ error: 'The user information could not be modified!' });

    });

});

module.exports = router;