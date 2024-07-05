/**
 * responsible for handling user input and updating the model and view accordingly.
 * act as intermediaries b/w the user interface and model
 * processing user requests and sending updates back to the view 
 */

const db = require('../models')


// create main Model
const Product = db.products


// main work

// 1. create product

/**
 * 
 *The function first creates an object called info that contains the product 
 information received from the client-side. 

 *It then uses the create() method of the Sequelize model Product to create 
 a new product with the given information and saves it to the database. 

 *The create() method returns a Promise that resolves with the created product object.

 *After the product is created, the function sends a response back to 
 the client-side with the status code 200 and the created product object. 

 *Finally, the function logs the created product object to the console.
 */

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}



// 2. get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// 3. get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id //is an object in Node.js that contains the parameters passed to a route URL with a dynamic segment.
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}

// 4. update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}

// 5. delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}




module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    

    
}