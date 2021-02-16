'use strict';

import BaseController from "./BaseController.js";
import {productView} from '../views/productView.js'
import DataService from "../services/DataService.js";
import LoaderController from './LoaderController.js';

export default class ProductListController extends BaseController {

    render (products) {
        for(const product of products) {
            const productPost = document.createElement('product');
            productPost.innerHTML = productView(product);
            this.element.appendChild(productPost);
        }
        
    }

    async loadProducts() {
        this.publish(this.events.START_LOADING, {});
        try { 
            const products = await DataService.getProducts();
            this.render(products);
        } catch (error){              
            this.publish(this.events.ERROR, error);
        }finally {
            this.publish(this.events.FINISH_LOADING, {});
        }
     
    } 
}