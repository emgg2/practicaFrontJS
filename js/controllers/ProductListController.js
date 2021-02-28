'use strict';

import BaseController from "./BaseController.js";
import {productView} from '../views/productView.js'
import {noProductsAvailableView} from '../views/noProductsAvailableView.js';
import DataService from "../services/DataService.js";
import LoaderController from './LoaderController.js';
import DeleteButtonController from './DeleteButtonControler.js';

const NEXT_URL = '/';

export default class ProductListController extends BaseController {

    constructor(element) {
        super(element);
        this.subscribe(this.events.PRODUCT_DELETED, ev => {            
            this.loadProducts();
        });
        this.subscribe(this.events.SEARCH, query => {
            this.loadProducts(query);
        })
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
   
    async loadProducts(query = null) {        
        const isUserLogged = await  DataService.isUserLogged();
        if(!isUserLogged) {
            window.location.href="/login.html?mensaje=missingLogin&next="+NEXT_URL;
        }
        this.checkMessage();
        this.publish(this.events.START_LOADING);
        try { 
            const products = await DataService.getProducts(query);
            if (products !== "")
            {
                this.render(products);
            }else
            {
                this.renderNoProductsAvailable();
            }            
        } catch (error){
            const message = this.getMessageError(error);              
            this.publish(this.events.ERROR, message);
        }finally {
            this.publish(this.events.FINISH_LOADING);
        }
     
    } 
}