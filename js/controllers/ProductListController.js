'use strict';

import BaseController from "./BaseController.js";
import {productView} from '../view.js'
import DataService from "../services/DataService.js";

export default class ProductListController extends BaseController {

    render (products) {
        for(const product of products) {
            const productPost = document.createElement('product');
            product.innerHTML = productView(product);
            this.element.appendChild(productPost);
        }
        
    }

    async loadProducts() {
        this.loader.showLoading()
        try { 
            const products = await DataService.getProducts();
            this.render(products);
        } catch (error){
            console.error(error);
        }finally {
            this.loader.hideLoading();
        }
     
    } 
}