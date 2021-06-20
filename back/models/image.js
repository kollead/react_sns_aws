module.exports = (sequelize, DataTypes) => {
    const Imaage = sequelize.define('Imaage', {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },{
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    Imaage.associate = (db) => {
      db.Image.belongsTo(db.Post)
    };
    return Imaage;
  }