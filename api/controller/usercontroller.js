const db = require("../models");
const Users = db.Users;
const States = db.States;

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

exports.getOnlyUser = (req, res) => Users.findAll()
    .then(allUsers => res.send(allUsers));

exports.getUsers = (req, res) => Users.findAll(
    {include:
            [{ all:true, nested:true }
            ]
    }

<<<<<<< Updated upstream
)
    .then(allUsers => res.send(allUsers));
=======
// Get users with relations
exports.getUsers = (req, res) => Users.findAll({ include: [{ all: true, nested: true }] }).then(allUsers => res.send(allUsers)).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users."
    })
});
>>>>>>> Stashed changes

// Find a single User with an uuid
exports.findOne = (req, res) => {
<<<<<<< Updated upstream
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
=======
    Users.findOne({
        where: { uuid: req.params.uuid },
        include: [{ all: true, nested: true }
        ]
    })
    .then(data => res.send(data))
    .catch(err => console.log(err));
>>>>>>> Stashed changes
};

// Update a User by the uuid in the request
exports.update = (req, res) => {
    Users.update(
        {
            name: req.body.name,
            password: req.body.password,
            last_name: req.body.last_name,
            user_name: req.body.user_name,
            email: req.body.email,
            id_doc: req.body.id_doc,
            phone: req.body.phone
        },
        { where: { uuid: req.params.uuid } }
    )
        .then(data => res.send(data))
        .catch(err => console.log(err));
};

// Delete a User with the specified uuid in the request
exports.delete = (req, res) => {
    Users.findOne({ where: { uuid: req.params.uuid } })
        .then(
            data => {
                data.destroy();
                res.redirect('/api/users');
            }
        )
        .catch(err => {
            console.log(err)
        })
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    Users.destroy(
        { where: {} }
    )
        .then(res.send({ message: "All users have been deleted" }))
        .catch(err => {
            console.log(err)
        });
};

