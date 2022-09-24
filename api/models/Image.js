const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Image',{
        url:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
    )
}