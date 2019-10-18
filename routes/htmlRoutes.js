// var path = require("path");

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Treat.findAll({}).then(function(dbTreats) {
      res.render("index", {
        msg: "Welcome!",
        treats: dbTreats
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Treat.findOne({ where: { id: req.params.id } }).then(function(dbTreat) {
      res.render("treat", {
        example: dbTreat
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
