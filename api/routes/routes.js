
const users = require("../controller/usercontroller");
const bikes = require("../controller/bikecontroller");
var router = require("express").Router();

// Create methods
router.post("/newuser", users.create);
router.post("/newbike", bikes.create);

// Retrieve all Tutorials
router.get("/users", users.findAll);
// Retrieve all Tutorials
router.get("/getusers", users.getUsers);

//
router.get('/test', (req, res) => res.send("tet"));


module.exports = router;