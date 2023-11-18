const db = require("../dbConfig");

module.exports.booking = function (req, res, next) {
  db.execute(
    "INSERT INTO booking VALUES(?,?,?,?,?,?,?)",
    [
      req.body.idclinic,
      req.body.craft,
      req.body.name,
      req.body.date,
      req.body.time,
      req.body.status,
      req.body.userid
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "Booking Complete" });
    }
  );
};

module.exports.databooking = function (req, res, next) {
  db.query(
    "SELECT * FROM booking WHERE uuid=?",
    [req.body.uuid],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.timeBook = (req, res, next)=>{
  db.execute(
    "SELECT time,status,uuid FROM booking WHERE date = ?",
    [req.body.date],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  )
}
