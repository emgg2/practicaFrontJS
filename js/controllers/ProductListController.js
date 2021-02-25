'use strict';

import BaseController from "./BaseController.js";
import {productView} from '../views/productView.js'
import {noProductsAvailableView} from '../views/noProductsAvailableView.js';
import DataService from "../services/DataService.js";
import LoaderController from './LoaderController.js';
import DeleteButtonController from './DeleteButtonControler.js';

export default class ProductListController extends BaseController {

    constructor(element) {
        super(element);
        this.subscribe(this.events.PRODUCT_DELETED, ev => {            
            this.loadProducts();
        });
    }

    renderNoProductsAvailable() {
        this.element.innerHTML = "";
        const productPost = document.createElement('product');
        productPost.innerHTML = noProductsAvailableView();
        this.element.appendChild(productPost);
    }

    render (products) {
        this.element.innerHTML = '';
        for(const product of products) {
            const productPost = document.createElement('product');
            productPost.innerHTML = productView(product);
            const deleteButton = productPost.querySelector('.deleteButton');        
            if(deleteButton) {
                new DeleteButtonController(deleteButton, product);
            }            
            this.element.appendChild(productPost);
        }        
    }
   
    async loadProducts() {
        
        const isUserLogged = await  DataService.isUserLogged();
        if(!isUserLogged) {
            window.location.href="/login.html";
        }
        this.checkMessage();
        this.publish(this.events.START_LOADING);
        try { 
            const products = await DataService.getProducts();
            if (products !== "")
            {
                this.render(products);
            }else
            {
                this.renderNoProductsAvailable();
            }            
        } catch (error){              
            this.publish(this.events.ERROR, error);
        }finally {
            this.publish(this.events.FINISH_LOADING);
        }
     
    } 
}