'use strict';
import BaseController from './BaseController.js';
import { errorView } from "../views/errorView.js";

export default class ErrorController extends BaseController {

    constructor(element) {
        super(element);
        this.subscribe(this.events.ERROR, (error) => {
            this.showError(error);
        })
    }

    showError(errorMessage) {    

        this.element.innerHTML = errorView(errorMessage);       
        const mipopup = document.getElementById('error-popup');                
        mipopup.setAttribute('open', true);  
       
    }
}