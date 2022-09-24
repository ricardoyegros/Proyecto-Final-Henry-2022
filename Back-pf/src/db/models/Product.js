const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define (
        "product",
        {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },{
        timestamps: false
    });
};