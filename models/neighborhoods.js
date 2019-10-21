module.exports = function(sequelize, DataTypes) {
  var Neighborhood = sequelize.define("Neighborhood", {
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  Neighborhood.associate = function(models) {
    // Associating Neighborhood with Treats
    // When an Neighborhood is deleted, also delete any associated Treats
    Neighborhood.hasMany(models.Treat, {
      onDelete: "cascade"
    });
  };
  return Neighborhood;
};
