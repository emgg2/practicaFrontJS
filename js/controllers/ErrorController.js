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
        this.element.classList.remove('hidden');
        this.element.addEventListener(this.events.CLICK, (event) => {
            if (event.target == this.element || event.target.classList.contains('delete')) {
                this.element.classList.add('hidden');
            }
        })
    }
}