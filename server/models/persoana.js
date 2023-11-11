
module.exports = (sequelize, DataType) => {
  let model = sequelize.define('Persoana', {
    firstname: {
      type: DataType.TEXT,
    },
    lastname: {
      type: DataType.TEXT,
    },
    cnp: {
      type: DataType.TEXT,
      unique: true,
      allowNull: false
    },
    age: {
      type: DataType.INTEGER
    },
    cars: {
      type: DataType.TEXT
    }
  }, {
    timestamps: true
  });
  model.belongsTo(sequelize.models.Masina, { foreignKey: 'idMasina', onDelete: 'set null' });
  return model;
};
