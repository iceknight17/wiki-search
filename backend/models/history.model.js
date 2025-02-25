module.exports = (sequelize, Sequelize) => {
  const History = sequelize.define("history", {
    query: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    results: {
      type: Sequelize.JSON,
      allowNull: false,
    }
  }, {
    tableName: 'histories'
  });

  return History;
};
