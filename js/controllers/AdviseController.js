'use strict';
import BaseController from './BaseController.js';
import { adviseView } from "../views/adviseView.js";

export default class AdviseController extends BaseController {

    constructor(element) {
        super(element);
        this.subscribe(this.events.ADVISE, (message) => {
            this.showAdvise(message);
        });
    }

    showAdvise(message) {
        this.element.innerHTML = adviseView(message);
        this.element.classList.remove('hidden');

        setTimeout( (event) => {            
                this.element.classList.add('hidden');
        }, 2000); 
        

        this.element.addEventListener(this.events.CLICK, (event) => {
            if (event.target == this.element || event.target.classList.contains('delete')) {
                this.element.classList.add('hidden');
            }
        })
    }
}