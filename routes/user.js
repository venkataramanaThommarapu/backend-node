var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const body = req.body;
  if(body.username == "admin" && body.password == "Password@123") {
    return res.send({role:"administrator"})
  }
  if (body.username == "guest" && body.password == "Password@123") {
    return res.send({ role :"guest" })
  }
  return res.status(422).send({message : "Unauthorized Access"})
});

module.exports = router
