'use strict';

import BaseController from "./BaseController.js";
import {editProductView} from '../views/editProductView.js'
import DataService from "../services/DataService.js";
import LoaderController from './LoaderController.js';
import DeleteButtonController from './DeleteButtonControler.js';

const NEXT_URL = 'edit-product.html?id=';
export default class ProductListController extends BaseController {

    constructor(element, productId) {
        super(element);        
        this.productId = productId;
        this.subscribe(this.events.PRODUCT_DELETED, ev => {
            window.location.href = "/login.html";
        });
    }

    render (product) {
        this.element.innerHTML = '';
        
        const productDetail = document.createElement('product');
        productDetail.innerHTML = editProductView(product);

        // const deleteButton = productPost.querySelector('.deleteButton');        
        // if(deleteButton) {
        //     new DeleteButtonController(deleteButton, product);
        // }
        
        this.element.appendChild(productDetail);      
        
    }

    async loadProduct() {
        const isUserLogged = await  DataService.isUserLogged();
        if(!isUserLogged) {
            window.location.href="/login.html?mensaje=missingLogin&next="+NEXT_URL+this.productId;
        }
        this.publish(this.events.START_LOADING);
        try { 
            const product = await DataService.getProducts(null,this.productId);
            this.render(product);
        } catch (error){    
            const message = this.getMessageError(error, NEXT_URL+this.productId);          
            this.publish(this.events.ERROR, message);
        }finally {
            this.publish(this.events.FINISH_LOADING);
        }
     
    } 
}