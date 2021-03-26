# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Implementation Process

> Project 

## Functionality
```
E - commerce app (customer)
	-> Home page (Brading)
	-> listing of products 
	-> Add to cart 
	-> Login less or login based checkout 
	-> payment options 
	-> create orders 
	-> order processing state
	-> Notifications 
```

## Discovery
```
-> Design 
-> API’s 
```

## Implementation
```
-> HTML/CSS based components (Figured out good approach for maintaining components )
-> API Integration 
```


## Design 
```
Mockup tools (wireframe )

Adobe photoshop
Sketch
```

## API
```
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
```

## Implementation
```
Header Component 
Homepage Component
ProductsList Component
ProductDetail Component
Cart Component 
	-> LineItem Component 
Payment Component
Order Component 
OrderDetail Component 
Login Component 
UserInfo Component 
Registration Component 
```

## Angular Topics
```
20.TypeScript (2 Days)
21. Angular-CLI & project structure ( 1 Day)
22. Angular Exercise ( parallel on every day)
27. Angular Router (2 Days)
23. Angular Components (2 Days)
28. Angular Modules, directives and Pipes ( 2 Days) 
29.Angular Forms (4 Days)

24.Providers and Dependency Injection (4 Days)
25. Observables and RxJS (5 Days)
26.HttpClient ( 2 Days)
30.Advanced - State management with ngRx ( 5 Days) 
```