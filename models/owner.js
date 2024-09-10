const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Owner = sequelize.define('Owner', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    otp_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

module.exports = Owner;
