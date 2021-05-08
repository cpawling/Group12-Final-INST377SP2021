export default (sequelize, DataTypes) => {
  const TeamInfo = sequelize.define(
    'team_info',
    {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      team_name: {
        type: DataTypes.STRING
      },
      team_location: {
        type: DataTypes.STRING
      },
      year_founded: {
        type: DataTypes.STRING
      },
      player_amount: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  TeamInfo.associate = (models) => {
    // TeamInfo.hasOne(models.Macros, {
    //   foreignKey: 'meal_id'
    // });
    TeamInfo.hasMany(models.PlayerInfo, {
      foreignKey: 'team_id'
    });
  };

  return TeamInfo;
}