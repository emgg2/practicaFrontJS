'use strict';
import dataService from './services/DataService.js';
import {productView} from './view.js';

window.addEventListener('DOMContentLoaded', async (event) =>{
    
    setTimeout(() => {
        const loader = document.querySelector('.lds-ripple');
        loader.classList.add('hidden');
    },2000)
    

    const products = await dataService.getProducts();
    const productsList = document.querySelector('.products-list');

    for(const product of products) {
        
        const productElement = document.createElement('article');
        const productHTML = productView(product);
        productElement.innerHTML = productHTML;
        productsList.appendChild(productElement);
    }

})