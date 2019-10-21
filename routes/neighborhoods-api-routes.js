var db = require("../models");

module.exports = function(app) {
  // Get all neighborhoods
  //includes treats
  app.get("/api/neighborhoods", function(req, res) {
    db.Neighborhood.findAll({
      include: [db.Treats]
    }).then(function(dbNeighbors) {
      res.json(dbNeighbors);
    });
  });

  app.get("/api/neighborhoods/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Neighborhood
    db.Neighborhood.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Neighborhood]
    }).then(function(dbTreat) {
      res.json(dbTreat);
    });
  });

  // Create a new neighborhood
  app.post("/api/neighborhoods", function(req, res) {
    db.Neighborhood.create(req.body).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

  // Delete an neighborhood by id
  app.delete("/api/neighborhoods/:id", function(req, res) {
    db.Neighborhood.destroy({
      where: { id: req.params.id }
    }).then(function(dbNeighbors) {
      res.json(dbNeighbors);
    });
  });
};
