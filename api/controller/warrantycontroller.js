const db = require("../models");
const Warranties = db.Warranties;
const Op = db.Sequelize.Op;

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
    Warranties.create(part)
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
exports.getWarranty = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Warranties.findAll({ where: condition })
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

// Find a single warranty with an uuid
exports.findOne = (req, res) => {
    RWheels.findOne({
        where: { uuid: req.params.uuid }
    })
        .then(data => res.send(data))
        .catch(err => console.log(err));
};

// Update a User by the uuid in the request
exports.update = (req, res) => {
    Brands.update(
        {
            name: req.body.name,
            bikeUuid: req.body.bikeUuid
        },
        { where: { uuid: req.params.uuid } }
    )
    .then(data => res.send(data))
    .catch(err => console.log(err));
};

// Delete a User with the specified uuid in the request
exports.delete = (req, res) => {
    Warranties.findOne({where: {uuid: req.params.uuid}})
    .then(
        data => {
            data.destroy();
            res.redirect('/api/bikes');
        }
    )
    .catch(err => {
        console.log(err)
    })
};


