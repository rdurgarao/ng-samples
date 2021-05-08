```
Angular 

> Project 

Functionality
E - commerce app (customer)
	-> Home page (Brading)
	-> listing of products 
	-> Add to cart 
	-> Login less or login based checkout 
	-> payment options 
	-> create orders 
	-> order processing state
	-> Notifications 



Discovery
-> Design 
-> API’s 

Implementation
-> HTML/CSS based components (Figured out good approach for maintaining components )
-> API Integration 




Design 
Mockup tools (wireframe )

Adobe photoshop
Sketch

API
[GET]	dev.example.com/products				{products: [{name: ‘’, description: ‘’}]}
[GET]	/products/:id	

[POST]	/cart					
[PUT]	/browserId/cart
[GET]	/browserId/cart

[POST]	/login
[POST]	/loginless
[POST]	/register

[POST]	/payments
[GET]	/orders
[PUT]	/order


Implementation
Header Component - X
Homepage Component - X
ProductsList Component - N
ProductDetail Component - N
Cart Component  - X
	-> LineItem Component - X
Payment Component - X
Order Component 
	- Create Order - X
	- Order list - X
	- OrderDetail Component  - X
Login Component - X
UserInfo Component - N
Registration Component - N 


Angular Topics
20.TypeScript (2 Days) 21. Angular-CLI & project structure ( 1 Day) 22. Angular Exercise ( parallel on every day) - e-commence 
27. Angular Router (2 Days) 23. Angular Components (2 Days) - child components
28. Angular Modules, directives and Pipes ( 2 Days) - N - E-commerce ( payments module, orders module, catalogue module)
29.Angular Forms (4 Days)

24.Providers and Dependency Injection (4 Days) 25. Observables and RxJS (5 Days) 
26.HttpClient ( 2 Days)
Postman  30.Advanced - State/Store management with ngRx ( 5 Days) 

Module creations
- Angular.module.ts 
- Payments.module.ts 
- Orders.module.ts

- How do you create hosting in cloud services?
	Heroku 

JS exercises for beginners
raod1989r@gmail.com
```