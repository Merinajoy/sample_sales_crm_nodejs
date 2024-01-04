// clinic.js

import { DataTypes } from 'sequelize';

const Clinic = (sequelize) => {
  const ClinicModel = sequelize.define(
    'Clinic',
    {
      ID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ACTIVE: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ADDRESS: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      BILLING: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      CHALLENGES: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      CITY: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      CLINIC_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      CREATED_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      DURATION_RELATIONSHIP: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      EMAIL: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      EMR_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      FRONTDESK_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      LAST_CONTACT: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      LAST_UPDATED: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      MARKETING_CAMPAIGN: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      OFFICE_MANAGER_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      OWNER: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      PHONE: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      PHYSICIAN_NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      SALES_PERSON: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      STATE: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      STATUS: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      USER_ID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      ZIP: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'clinic',
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
  ClinicModel.hasMany(sequelize.models.Notes, {
    foreignKey: 'ID',
    as: 'Notes',
  });

  return ClinicModel;
};

export default Clinic;
