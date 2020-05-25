
const users = require("../controller/usercontroller");
const bikes = require("../controller/bikecontroller");
const bikeparts = require("../controller/bikepartscontroller");
const frame = require("../controller/framecontroller");
const fork = require("../controller/forkcontroller");
const battery = require("../controller/batterycontroller");
const fwheel = require("../controller/fwheelcontroller");
const rwheel = require("../controller/rwheelcontroller");
const motor = require("../controller/motorcontroller");
const warranty = require("../controller/warrantycontroller");
const brand = require("../controller/brandcontroller");
const model = require("../controller/modelcontroller");
const state = require("../controller/statecontroller");
const provider = require("../controller/providercontroller");

var router = require("express").Router();

// Create methods
router.post("/newuser", users.create);
router.post("/newbike", bikes.create);
router.post("/newbikeparts", bikeparts.create);
router.post("/newframe", frame.create);
router.post("/newfork", fork.create);
router.post("/newbattery", battery.create);
router.post("/newfwheel", fwheel.create);
router.post("/newrwheel", rwheel.create);
router.post("/newmotor", motor.create);
router.post("/newwarranty", warranty.create);
router.post("/newbrand", brand.create);
router.post("/newmodel", model.create);
router.post("/newstate", state.create);
router.post("/newprovider", provider.create);

// Retrieve Methdods
router.get("/users", users.findAll); // this one only retrieve the users without the nestes models 
router.get("/getusers", users.getUsers); // all users with include all
router.post("/findone", users.findOne);

router.get("/bikes", bikes.findAll);
router.get("/getbikes", bikes.getBikes);

//router.get("/getbikeparts", bikeparts.getBikeparts);
router.get("/frame", frame.getFrame);
router.get("/brands", brand.getBrands);
router.get("/providers", provider.findAll);
router.get("/states", state.findAll);
router.get("/warranties", warranty.findAll);
//
router.get('/test', (req, res) => res.send("tet"));

// Login
router.post('/login', users.login);


module.exports = router;