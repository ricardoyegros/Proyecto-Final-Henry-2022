const { Product } = require("../db/models/Product.js");
// const { Router } = require("express");
// const router = Router();


const getProducts = async (req, res) => {

    try {
        const todosProduct = await Product.findAll()
        console.log(todosProduct);
        res.send(todosProduct);
    } catch (error) {
        console.log(error)
        res.send('failed!')
    }
};


const postProduct = async (req, res) => {
    const { name, cantidad, marca } = req.body;
    
    try{

        if (!name || !cantidad || !marca) {
            return res.send('need more data!')
        };

        const todosProduct = await Product.findAll()
        const aProduct = todosProduct.find(e => e.name === name)

        if (aProduct){
            return res.send('the product exist!')
        }
        const newProduct = await Product.create({
            name,
            cantidad,
            marca
        })
        console.log(newProduct)
        res.send(newProduct)
        return ;

    }catch(err){
        console.log(err)
        res.send(err)
    } 
    
}

module.exports = { getProducts, postProduct };
