const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../dbConfig");
const uuid = require("uuid");
const saltRounds = 10;
const secret = process.env.SECRET;

module.exports.login = (req, res, next) => {
  db.execute(
    "SELECT * FROM client WHERE email=?",
    [req.body.Email],
    function (err, user, fields) {
      if (err) {
        res.json({ status: "error", meassage: err });
        return;
      }
      if (user.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }

      bcrypt.compare(
        req.body.Password,
        user[0].password,
        function (err, isLogin) {
          if (isLogin) {
            email = user[0].email;
            var token = jwt.sign({ Email: email }, secret, {
              expiresIn: "1h",
            });

            res.json({ user, status: "ok", message: "login success", token });
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
};

module.exports.loginClinic = (req, res, next) => {
  db.execute(
    "SELECT * FROM clinic WHERE email=?",
    [req.body.Email],
    function (err, user, fields) {
      if (err) {
        res.json({ status: "error", meassage: err });
        return;
      }
      if (user.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      //เช็คpassword แบบไม่ถอดรหัส
      // if (req.body.Password === user[0].Password) {
      //   email = user[0].email;
      //   var token = jwt.sign({ Email: email }, secret, {
      //     expiresIn: "1h",
      //   });
      //   res.json({ user, status: "ok", message: "login success", token });
      // } else {
      //   res.json({ status: "error", message: "login failed" });
      // }
      bcrypt.compare(
        req.body.Password,
        user[0].Password,
        function (err, isLogin) {
          if (isLogin) {
            email = user[0].email;
            var token = jwt.sign({ Email: email }, secret, {
              expiresIn: "1h",
            });

            res.json({ user, status: "ok", message: "login success", token });
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
};

module.exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (err) {
    res.status(400).json({ status: "error", message: "Authentication failed" });
  }
};

module.exports.register = function (req, res, next) {
  const userid = uuid.v4().substring(0, 10);
  bcrypt.hash(req.body.Password, saltRounds, function (err, hash) {
    db.execute(
      "INSERT INTO client(uuid,Email,Password,fname,lname,Tel,IDline,Religion,Nationality,Occupation,DOB,Weight,Height,Address,allergy,idcard) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        userid,
        req.body.Email,
        hash,
        req.body.fname,
        req.body.lname,
        req.body.Tel,
        req.body.IDline,
        req.body.Religion,
        req.body.Nationality,
        req.body.Occupation,
        req.body.DOB,
        req.body.Weight,
        req.body.Height,
        req.body.Address,
        req.body.allergy,
        req.body.idcard,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" });
      }
    );
  });
};
