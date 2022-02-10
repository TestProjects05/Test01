# Test01
Product Review Sample Test Project

Time Spent : 4 hrs


Assumptions 
-	Using the file-systems as in memory database storage.
-	Working along the JSON data representations.
-	All files existing/new present inside the product-review-db-data folder.
-	Product details added in products.json file.
-	User details added in users.json file.
-	Which products users buying can be found in users-products.json file.
-	Ignored input and duplicate validations on the server side.
-	Not thinking of any front end/backend cache mechanism to retrieve images during review details.


Utilities.js 
-	In this file, all database interactions related code present in.

App.js
-	It has server configuration code.
-	It has API’s interface for both posting reviews and retrieving review details. 

Test

  Server Startup 
  -	Download the code from here: https://github.com/TestProjects05/Test01.git
  -	Open terminal and switch to product-review directory
  -	Please run this command to install the dependency: npm install express
  -	Run node app.js 
  -	You will see something like this: Server start up is successful
  -	![image](https://user-images.githubusercontent.com/99424096/153466179-28f489f4-b59b-49f4-aa67-aa6385507650.png)

 Submit Review API call
  -	You will need to add new user, product and user-product details in case interested to post the review for different user and product. Please help check this files for an        existing format to follow and add the details (users.json, products.json, users-products.json)
  -	Had added details for (taken from documentation) Adidas product and Marc/Rezwan users in those files so tested this in the following fashion.
  -	![image](https://user-images.githubusercontent.com/99424096/153466259-a240bf7c-da4c-470c-9fb0-e157edb6c75c.png)
  -	Here User id for Marc: 11 and Product id for Adidas: 1 
  -	Please help add another user and product id necessary to submit the review details for them.
  -	All reviews will be stored in users-products-reviews.json file.
  -	Sample response is being shown.
 
 
 Retrieve Review Details API Call
  - Here also you need to provide the product id for which you need the review details.
  - ![image](https://user-images.githubusercontent.com/99424096/153466373-c22e2b71-8fd6-4527-ae24-c53701271ac5.png)
  -	Here product id: 1 and you can retrieve all the reviews submitted for that product.
  -	Please provide other product id in case you want have different product reviews to be soon.

 
  API Idempotent
    -	To avoid creating the resources twice, will need a way to identify the request is kind of already served.
    -	For this we will need both front end and back end agreement.
    -	From front end, we can pass some header key.
    -	From back end, we can store the response in cache to see if this request passing this header already served.
    -	Whenever request comes in, we can look into cache to see if request header along with response is present. If yes, no need to serve that request just return back the     proper response codes and messages to the end user.
  

