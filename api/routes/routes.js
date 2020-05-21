
const users = require("../controller/usercontroller");
const bikes = require("../controller/bikecontroller");
const bikeparts = require("../controller/bikepartscontroller");
const frame = require("../controller/framecontroller");

var router = require("express").Router();

// Create methods
router.post("/newuser", users.create);
router.post("/newbike", bikes.create);
router.post("/newbikeparts", bikeparts.create);
router.post("/newframe", frame.create);

// Retrieve all Tutorials
router.get("/users", users.findAll);
// Retrieve all Tutorials
router.get("/getusers", users.getUsers);
router.get("/bikes", bikes.findAll);
router.get("/getbikes", bikes.getBikes);
router.get("/getbikeparts", bikeparts.getBikeparts);
router.get("/frame", frame.getFrame);

//
router.get('/test', (req, res) => res.send("tet"));



module.exports = router;