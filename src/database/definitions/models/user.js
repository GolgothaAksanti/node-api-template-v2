module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 1,
      },
      is_subscribed: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          'this field show if the user has paid the app subscription(1USD)',
      },
      is_verified: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          'this field show if the user docs are verified or not :1 = verified, 0 = not verified',
      },
      is_number: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          'this field show if the user number is verified or not :1 = verified, 0 = not verified',
      },
      is_email: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          'this field show if the user email is verified or not :1 = verified, 0 = not verified',
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: 'users' }
  );

  return User;
};
