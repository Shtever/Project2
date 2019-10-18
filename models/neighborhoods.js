module.exports = function(sequelize, DataTypes) {
  var Neighborhood = sequelize.define("Neighborhood", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  Neighborhood.associate = function(models) {
    // Associating Neighborhood with Posts
    // When an Neighborhood is deleted, also delete any associated Posts
    Neighborhood.hasMany(models.Treat, {
      onDelete: "cascade"
    });
  };
  return Neighborhood;
};
