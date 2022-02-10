const fs = require('fs')

const getProducts = function () {
	try {
			const productsBuffer = fs.readFileSync('product-review-db-data/products.json')
			const productsBufferJSON = productsBuffer.toString()
			return JSON.parse(productsBufferJSON)
	} catch (e) {
			return []
	}
}

const getUsers = function () {
	try {
			const usersBuffer = fs.readFileSync('product-review-db-data/users.json')
			const usersBufferJSON = usersBuffer.toString()
			return JSON.parse(usersBufferJSON)
	} catch (e) {
			return []
	}
}


const getUsersProducts = function () {
	try {
			const usersProductsBuffer = fs.readFileSync('product-review-db-data/users-products.json')
			const usersProductsBufferJSON = usersProductsBuffer.toString()
			return JSON.parse(usersProductsBufferJSON)
	} catch (e) {
			return []
	}
}


const saveUserProductReview = function (userId, productId, reviewRating, reviewMessage, reviewSubmissionDate) {
		const reviews = loadUserProductReviews()

		reviews.push({
			userId: userId,
			productId: productId,
			reviewRating: reviewRating,
			reviewMessage: reviewMessage,
			reviewSubmissionDate: reviewSubmissionDate
		})

		const userProductReview = JSON.stringify(reviews)
		fs.writeFileSync('product-review-db-data/users-products-reviews.json', userProductReview)


}

const getProductReviewDetails = function (productId) {
		const productReviews = []
		
		const allReviews = loadUserProductReviews()
		allReviews.forEach((review) => {
			if(review.productId === productId) {
				productReviews.push(review)
			}
		})


		const users = getUsers()
		const products = getProducts()
		const usersProducts = getUsersProducts()

		productReviews.forEach((review) => {

				const user = users.find((user) => user.userId === review.userId)
				if(user) {
					review['userName'] = user.userName 	
				} else {
					review['userName'] = 'Anonymous'
				}


				const product = products.find((product) => product.productId === review.productId)
				if(product) {
					review['productUrl'] = product.productUrl	
				} else {
					review['productUrl'] = 'https://flip.com/products3/random.png'
				}	

				const userProduct = usersProducts.find((userProduct) => userProduct.userId === review.userId 
																			&& userProduct.productId === review.productId)

				if(userProduct) {
					review['purchaseDate'] = userProduct.purchaseDate	
				} else {
					review['purchaseDate'] = '12/12/2099'		
				}
		})


		return productReviews	
}

const loadUserProductReviews = function () {
	try {
			const reviewBuffer = fs.readFileSync('product-review-db-data/users-products-reviews.json')
			const reviewBufferJSON = reviewBuffer.toString()
			return JSON.parse(reviewBufferJSON)
	} catch (e) {
			return []
	}
}

module.exports = {
	getProducts : getProducts,
	getUsers : getUsers,
	getUsersProducts : getUsersProducts,
	saveUserProductReview : saveUserProductReview,
	getProductReviewDetails : getProductReviewDetails
}