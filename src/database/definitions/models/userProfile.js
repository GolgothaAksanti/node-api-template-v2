module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define(
    'UserProfile',
    {
      user_profile_id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'user_id',
        },
        onDelete: 'cascade',
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: 'user_profiles' }
  );

  UserProfile.associate = model => {
    UserProfile.belongsTo(model.User, {
      foreignKey: 'user_id',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    model.User.hasOne(UserProfile, {
      foreignKey: 'user_id',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return UserProfile;
};
