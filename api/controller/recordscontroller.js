const db = require("../models");
const Records = db.Records;
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
        description: req.body.description,
        part: req.body.part,
        type: req.body.type,
        date: req.body.date,
        bikeUuid: req.body.bikeUuid,
        userUuid: req.body.userUuid
    }

    // Save User in the database
    Records.create(part)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

};

exports.getRecords = (req, res) => Records.findAll({ include: [{ all: true, nested: true }] }).then(allRecords => res.send(allRecords)).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users."
    })
});


exports.getRecordsByUserUUID = (req, res) => {
    Records.findAll({
        where: {
            userUuid: req.body.belongsto,
        },
        include:
            [{ all: true, nested: true }
            ]
    }).then(record => {
        if (record) {
            res.status(200).send(record);
            //print(user.body);
        } else {
            res.status(404).send({
                message: " Error while trying to login a user"
            });
        }
    });
}