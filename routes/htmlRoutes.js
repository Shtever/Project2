var path = require("path");

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "welcome!"
    });
  });

  // Load post page
  app.get("/homeowner", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homeowner.html"));
  });

  // Load search page
  app.get("/tot", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tot.html"));
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
