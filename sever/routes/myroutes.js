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
router.post("/fetchDent",clinic.fetchDent);
router.put("/dentEdit",clinic.edit);
router.post("/dataDent" , clinic.dataDent);
router.post("/timebook",book.timeBook);
router.post("/dataSheduling",clinic.dataSheduling);
router.post("/viewProfile",clinic.viewProfile);
router.post("/clientbookinghistory",clinic.clientbookinghistory);
router.post("/deleteDoc",clinic.deleteDoc);
router.put("/cancel",clinic.cancel);
router.put("/complete",clinic.complete);
module.exports = router;