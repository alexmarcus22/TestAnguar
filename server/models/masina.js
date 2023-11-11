module.exports = (sequelize, DataType) => {
  let model = sequelize.define('Masina', {
    brandname: {
      type: DataType.TEXT,
    },
    modelname: {
      type: DataType.TEXT,
    },
    year: {
      type: DataType.INTEGER
    },
    capacity: {
      type: DataType.INTEGER
    },
    tax: {
      type: DataType.STRING
    }
  }, {
    timestamps: true
  });
  return model;
};
