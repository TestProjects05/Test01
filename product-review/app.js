const utilities = require('./utilities.js')
const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// Submit Review Details
app.post('/review/:userId/:productId', function(req, res) {

	const userId = req.params['userId']
	const productId = req.params['productId']

	const reviewRating = req.body.reviewRating
	const reviewMessage = req.body.reviewMessage
	const reviewSubmitDate = req.body.reviewSubmitDate

	utilities.saveUserProductReview(userId, productId, reviewRating, reviewMessage, reviewSubmitDate)

	const response = {
    		message: 'Your Review is posted!'
  	}


	return res.status(201).json(response)

})

// Retrieve Review Details
app.get('/review/:productId', function(req, res) {

	const productId = req.params['productId']

	const productReviews = utilities.getProductReviewDetails(productId)

	return res.status(200).json(productReviews)

})

app.listen(3000,() => {
		console.log("Server Listening on Port 3000");
})


