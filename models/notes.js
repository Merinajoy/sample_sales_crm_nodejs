// notes.js

import { DataTypes } from 'sequelize';

const Notes = (sequelize) => {
  const NotesModel = sequelize.define(
    'Notes',
    {
      ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      CLINIC_ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      CREATED_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      MASTER_ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      NOTE: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'notes',
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

  return NotesModel;
};

export default Notes;
