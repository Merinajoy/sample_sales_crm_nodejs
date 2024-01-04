// users.js

import { DataTypes } from 'sequelize';

const User = (sequelize) => {
  const UserModel = sequelize.define(
    'User',
    {
      ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ACTIVE: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CREATED_DATE: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      FIRST_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      LAST_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      MIDDLE_NAME: {
        type: DataTypes.STRING(255),
        defaultValue: null,
      },
      PASSWORD: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      UPDATED_DATE: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      USER_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'ID' }],
        },
      ],
    }
  );

  // Define associations here
  UserModel.hasMany(sequelize.models.Clinic, {
    foreignKey: 'ID',
    as: 'Clinic',
  });

  return UserModel;
};

export default User;
