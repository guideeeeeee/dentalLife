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
    "INSERT INTO scheduling VALUES(?,?,?)",
    [
      req.body.IDClinic,
      req.body.NameDent,
      req.body.date,
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
exports.fetchDent = function(req,res,next){
  db.execute("SELECT * FROM dentist where plab = ?",[req.body.plab],(err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
}
exports.edit = function (req, res, next) {
  db.execute(
    "UPDATE dentist SET fname = ?, lname = ?, tel = ?, IDLine = ?, tservice = ?, S_exper = ?, CenClinic = ?, language = ?, gYear1 = ?, gYear2 = ?, gYear3 = ?, gS_exper1 = ?, gS_exper2 = ?, gS_exper3 = ?, university1 = ?, university2 = ?, university3 = ?, wduration1 = ?, wduration2 = ?, wduration3 = ?, wduration4 = ?, wduration5 = ?, wS_exper1 = ?, wS_exper2 = ?, wS_exper3 = ?, wS_exper4 = ?, wS_exper5 = ?, wlocation1 = ?, wlocation2 = ?, wlocation3 = ?, wlocation4 = ?, wlocation5 = ?, gender = ? ,ImgDoc = ?   where plab = ?;",
    [
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
      req.body.plab
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

exports.clientbookinghistory = (req,res,next)=>{
  db.execute(
    "SELECT b.*, c.fname, c.lname, price, c.tel FROM booking b JOIN craft c2 ON b.craft = c2.nameOfcraft JOIN client c ON b.uuid = c.uuid WHERE   b.clinicID = ?   ORDER BY b.date desc;",
    [
      req.body.clinicuuid,
    ],
    (err,results)=>{
      if(err) console.log(err);
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

exports.cancel = (req, res, next) => {
  db.execute(
    "UPDATE booking SET status = 'Cancel' WHERE date = ? AND time = ? and uuid = ?;",
    [
      req.body.date,
      req.body.time,
      req.body.uuid
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      console.log(req.body.plab);
      res.json({ status: "Cancel Complete" });
    }
  )
}

exports.complete = (req, res, next) => {
  db.execute(
    "UPDATE booking SET status = 'Complete' WHERE date = ? AND time = ? and uuid = ?;",
    [
      req.body.date,
      req.body.time,
      req.body.uuid
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "Cancel Complete" });
    }
  )
}