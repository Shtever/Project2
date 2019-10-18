module.exports = function(sequelize, DataTypes) {
  var Treat = sequelize.define("Treat", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Treat.associate = function(models) {
    // We're saying that a Treat should belong to an Author
    // A Treat can't be created without an Author due to the foreign key constraint
    Treat.belongsTo(models.Neighborhood, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Treat;
};
