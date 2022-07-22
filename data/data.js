import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;

export const phone = sequelize.define('phone', {
  phoneid: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  phone1: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
});
