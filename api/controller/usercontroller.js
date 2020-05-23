const db = require("../models");
const Users = db.Users;
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
    const user = {
        name: req.body.name,
        password: req.body.password,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        id_doc: req.body.id_doc,
        phone: req.body.phone
    };

    // Save User in the database
    Users.create(user)
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

exports.login = (req, res) => {

    Users.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        }
    }).then(user => {
        if (user) {
            res.status(200).send(user);
            print(user.body);
        } else {
            res.status(404).send({
                message: " Error while trying to login a user"
            });
        }
    });

}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Users.findAll({
        where: condition
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Users."
        });
    });
};

// Get only users without the relations
exports.getOnlyUser = (req, res) => Users.findAll().then(allUsers => res.send(allUsers));

exports.getUsers = (req, res) => Users.findAll({ include: [{ all: true, nested: true }] }).then(allUsers => res.send(allUsers));

// Find a single User with all the realtions using a uuid
exports.findOne = (req, res) => {
    const uuid = req.body.uuid;

    Users.findByPk(uuid, {
        include:
            [{ all: true, nested: true }
            ]
    })
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

