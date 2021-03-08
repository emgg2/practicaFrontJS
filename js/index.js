'use strict';
import LoaderController from './controllers/LoaderController.js';
import ProductListController from './controllers/ProductListController.js';
import ErrorController from './controllers/ErrorController.js';
import AdviseController from './controllers/AdviseController.js';
import NewProductOrLoginController from './controllers/NewProductOrLoginController.js';
import SearchController from './controllers/SearchController.js';
import CloseSessionController from './controllers/CloseSessionController.js';
import NavbarController from './controllers/NavbarController.js';


window.addEventListener('DOMContentLoaded', async (event) =>{
    
    const loader = document.querySelector(".content-loader");
    const loaderController = new LoaderController(loader);
    
    const productsList = document.querySelector('.products-list');
    const productsController = new ProductListController(productsList);    
    productsController.loadProducts();

    const errorsElement = document.querySelector('.global-info');
    new ErrorController(errorsElement);
    

    const adviseElement = document.querySelector('.global-info');
    new AdviseController(adviseElement);
    
    const newProductButtons = document.querySelector('.new-product');
    new NewProductOrLoginController(newProductButtons);

    const navbar = document.querySelector('.navbar');
    new NavbarController(navbar);
   
    const searchInput = document.querySelector('input[type="search"]');
    new SearchController(searchInput);
    
    const closeSession = document.querySelector('a[name="close-session"');
    new CloseSessionController(closeSession);
})