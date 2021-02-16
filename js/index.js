'use strict';
import LoaderController from './controllers/LoaderController.js';
import ProductListController from './controllers/ProductListController.js';
import ErrorController from './controllers/ErrorController.js';
import dataService from './services/DataService.js';
import {productView} from '../js/views/productView.js';

window.addEventListener('DOMContentLoaded', async (event) =>{
    
    const loader = document.querySelector(".content-loader");
    const loaderController = new LoaderController(loader);
    
    const productsList = document.querySelector('.products-list');
    const productsController = new ProductListController(productsList);
    productsController.loader = loaderController;
    productsController.loadProducts();

    const errorsElement = document.querySelector('.global-errors');
    const errorsController = new ErrorController(errorsElement);
    


})