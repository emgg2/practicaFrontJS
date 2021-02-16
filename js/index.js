'use strict';
import LoaderController from './controllers/LoaderController.js';
import ProductListController from './controllers/ProductListController.js';
import dataService from './services/DataService.js';
import {productView} from './view.js';

window.addEventListener('DOMContentLoaded', async (event) =>{
    
    const loader = document.querySelector(".content-loader");
    const loaderController = new LoaderController(loader);
    
    const productsList = document.querySelector('.products-list');
    const productsController = new ProductListController(productsList);
    productsController.loader = loaderController;
    productsController.loadProducts();
    
    

    // for(const product of products) {
        
    //     const productElement = document.createElement('article');
    //     const productHTML = productView(product);
    //     productElement.innerHTML = productHTML;
    //     productsList.appendChild(productElement);
    // }

})