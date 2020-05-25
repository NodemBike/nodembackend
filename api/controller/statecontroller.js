const db = require("../models");
const States = db.States;
const Users = db.Users;

//Create and Save a new User
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const part = {
        name: req.body.name,
        bikeUuid: req.body.bikeUuid
    };

    // Save User in the database
    States.create(part)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

};

// Retrieve all Users from the database.
exports.getRwheel = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    States.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

// Find a single model with an uuid
exports.findOne = (req, res) => {
    States.findOne({
        where: { id: req.params.id },
        include: [{ all: true, nested: true }
        ]
    })
        .then(data => res.send(data))
        .catch(err => console.log(err));
};


// Update a User by the uuid in the request
exports.update = (req, res) => {
    States.update(
        {
            name: req.body.name
        },
        { where: { id: req.params.id } }
    )
        .then(data => res.send(data))
        .catch(err => console.log(err));
};

// Delete a User with the specified uuid in the request
exports.delete = (req, res) => {
    States.findOne({ where: { id: req.params.id } })
        .then(
            data => {
                data.destroy();
                res.redirect('/api/states');
            }
        )
        .catch(err => {
            console.log(err)
        })
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    States.destroy(
        { where: {} }
    )
        .then(res.send({ message: "All states have been deleted" }))
        .catch(err => {
            console.log(err)
        });
};
