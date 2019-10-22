var db = require("../models");

module.exports = function(app) {
  // Get all treats
  //includes neighborhoods
  app.get("/api/treats", function(req, res) {
    db.Treat.findAll({
      include: [db.Neighborhood]
    }).then(function(dbTreats) {
      res.json(dbTreats);
    });
  });

  app.get("/api/treats/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Treat
    db.Treat.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Neighborhood]
    }).then(function(dbNeighbor) {
      res.json(dbNeighbor);
    });
  });

  // Create a new treat
  app.post("/api/treats", function(req, res) {
    console.log(req.body);  
    db.Treat.create(req.body, {include:db.Neighborhood}).then(function(dbTreat) {
      res.json(dbTreat);
    });
  });

  // Delete an treat by id
  app.delete("/api/treats/:id", function(req, res) {
    db.Treat.destroy({
      where: { id: req.params.id }
    }).then(function(dbTreats) {
      res.json(dbTreats);
    });
  });
};
