const db = require("../dbConfig");

module.exports.clinic = function (req, res, next) {
  db.query("SELECT * FROM clinic", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

module.exports.craft = function (req, res, next) {
  db.query("SELECT * FROM craft", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

module.exports.scheduling = function (req, res, next) {
  db.execute(
    "INSERT INTO scheduling VALUES(?,?,?,?,?)",
    [
      req.body.IDClinic,
      req.body.NameDent,
      req.body.craft,
      req.body.date,
      req.body.time,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "Scheduling Complete" });
    }
  );
};

exports.viewProfile = function (req, res, next) {
  db.execute("select ??? from ", [req.body.uuid], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};
exports.regisDent = function (req, res, next) {
  db.execute(
    "INSERT INTO dentist VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.plab,
      req.body.fname,
      req.body.lname,
      req.body.tel,
      req.body.IDLine,
      req.body.tservice,
      req.body.S_exper,
      req.body.CenClinic,
      req.body.language,
      req.body.gYear1,
      req.body.gYear2,
      req.body.gYear3,
      req.body.gS_exper1,
      req.body.gS_exper2,
      req.body.gS_exper3,
      req.body.university1,
      req.body.university2,
      req.body.university3,
      req.body.wduration1,
      req.body.wduration2,
      req.body.wduration3,
      req.body.wduration4,
      req.body.wduration5,
      req.body.wS_exper1,
      req.body.wS_exper2,
      req.body.wS_exper3,
      req.body.wS_exper4,
      req.body.wS_exper5,
      req.body.wlocation1,
      req.body.wlocation2,
      req.body.wlocation3,
      req.body.wlocation4,
      req.body.wlocation5,
      req.body.gender,
      req.body.ImgDoc,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "register Complete" });
    }
  );
};

exports.edit = function (req, res, next) {
  db.execute(
    "UPDATE dentist SET VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.plab,
      req.body.fname,
      req.body.lname,
      req.body.tel,
      req.body.IDLine,
      req.body.tservice,
      req.body.S_exper,
      req.body.CenClinic,
      req.body.language,
      req.body.gYear1,
      req.body.gYear2,
      req.body.gYear3,
      req.body.gS_exper1,
      req.body.gS_exper2,
      req.body.gS_exper3,
      req.body.university1,
      req.body.university2,
      req.body.university3,
      req.body.wduration1,
      req.body.wduration2,
      req.body.wduration3,
      req.body.wduration4,
      req.body.wduration5,
      req.body.wS_exper1,
      req.body.wS_exper2,
      req.body.wS_exper3,
      req.body.wS_exper4,
      req.body.wS_exper5,
      req.body.wlocation1,
      req.body.wlocation2,
      req.body.wlocation3,
      req.body.wlocation4,
      req.body.wlocation5,
      req.body.gender,
      req.body.ImgDoc,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "UPDATE Complete" });
    }
  );
};

exports.dataDent = (req, res, next) => {
  db.execute(
    "SELECT ImgDoc, CONCAT(fname,' ',lname) as Fullname, tservice, plab FROM dentist WHERE CenClinic = ?",
    [req.body.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.dataSheduling = (req, res, next) => {
  db.execute(
    "SELECT TimeOfScheduling FROM scheduling WHERE DateOfScheduling = ? and IDClinicForScheduling =?",
    [req.body.date, req.body.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.clientbookinghistory = (req, res, next) => {
  db.execute(
    "SELECT date, time, NameOfClinic, status, craft ,fname , lname, price,uuid FROM booking JOIN clinic ON booking.clinicID = clinic.ID_ClinicJOIN dentist ON booking.dentist = dentist.plabJOIN craft ON booking.craft = craft.nameOfcraft where uuid = ? ORDER BY date DESC;",
    [req.body.clientuuid],
    (err, results) => {
      if (err) console.log(err);
      else res.send(results);
    }
  )
}

exports.deleteDoc = (req, res, next) => {
  db.execute(
    "DELETE FROM dentist where plab = ?;",
    [req.body.plab],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      console.log(req.body.plab);
      res.json({ status: "Delete Complete" });
    }
  )
}
