const db = require("../models");
const Bikes = db.Bikes;
const Op = db.Sequelize.Op;

//Create and Save a new bike
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const bike = {
        frameid: req.body.frameid,
        name: req.body.name,
        userUuid: req.body.userUuid,
        modelId: req.body.modelId,
        stateId: req.body.stateId,
    };

    // Save User in the database
    Bikes.create(bike)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the bike."
            });
        });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Users.findAll({ where: condition })
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

exports.getBikes = (req, res) => Bikes.findAll({
    include: [
        { all: true, nested: true }
    ]
}
).then(allBikes => res.send(allBikes));

// Find a single User with an uuid
exports.findOne = (req, res) => {
    const uuid = req.params.uuid;

    Tutorial.findByPk(uuid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + uuid
            });
        });
};

// Update a User by the uuid in the request
exports.update = (req, res) => {

};

// Delete a User with the specified uuid in the request
exports.delete = (req, res) => {

};

// Delete all users from the database.
exports.deleteAll = (req, res) => {

};

