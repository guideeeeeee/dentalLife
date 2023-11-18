const express = require("express"); 
const router = express.Router();
const book = require("../controllers/Booking");
const clinic = require("../controllers/clinic")

router.post("/booking", book.booking);
router.post("/clinic",clinic.clinic );
router.get("/craft",clinic.craft );
router.get("/databooking", book.databooking);
router.post("/scheduling",clinic.scheduling);
router.post("/regisDent",clinic.regisDent);
router.put("/dentEdit",clinic.edit);
router.post("/dataDent" , clinic.dataDent);
router.post("/timebook",book.timeBook);
router.post("/dataSheduling",clinic.dataSheduling)
module.exports = router;