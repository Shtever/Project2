module.exports = function(sequelize, DataTypes) {
  var Treat = sequelize.define("Treat", {
    candy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1]
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
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
