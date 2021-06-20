module.exports = (sequelize, DataTypes) => {
    const Imaage = sequelize.define('Imaage', {
      src: {},
    },{
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    Imaage.associate = (db) => {};
    return Imaage;
  }