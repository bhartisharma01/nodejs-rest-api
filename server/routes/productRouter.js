const productController = require('../controllers/productController.js')
const {checkToken} = require('../auth/tokenValidation.js');

// router
const router = require('express').Router()


// use routers
router.post('/data', checkToken, productController.addProduct)

router.get('/data',checkToken ,productController.getAllProducts)

// router.get('/published', checkToken, productController.getPublishedProduct)


// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id',  productController.deleteProduct)




module.exports = router