const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Category',{
        description:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
    )
}