// var path = require("path");

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "welcome!"
    });
  });

  // Load post page
  app.get("/post", function(req, res) {
    db.Neighborhood.findAll({}).then(function(dbNeighbor) {
      res.render("post", {
        msg: "neighborhoods!",
        neighborhoods: dbNeighbor
      });
    });
  });

  // Load search page
  app.get("/search", function(req, res) {
    db.Treat.findAll({}).then(function(dbTreats) {
      res.render("search", {
        msg: "treats!",
        treats: dbTreats
      });
    });
  });

  // Load treat page and pass in an example by id
  app.get("/treats/:id", function(req, res) {
    db.Treat.findOne({ where: { id: req.params.id } }).then(function(dbTreat) {
      res.render("treat", {
        treat: dbTreat
      });
    });
  });

  // Load Neigbhborhood page and pass in an example by id
  app.get("/neighborhoods/:id", function(req, res) {
    db.Neighborhood.findOne({ where: { id: req.params.id } }).then(function(
      dbNeighbor
    ) {
      res.render("neighborhood", {
        neighborhood: dbNeighbor
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
