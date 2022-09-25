const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define(
        'Brand',
        {

        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
        },
    { timestamps: false }
    )
};