const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')

router.use('/admin', admin)
router.get('/admin/restaurants', restController.getRestaurants)

module.exports = router
