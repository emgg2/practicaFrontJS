'use strict';
import BaseController from './BaseController.js';
import { navbarView } from '../views/navbarView.js';

export default class NavbarController extends BaseController {

    constructor(element) {
        super(element);
        this.render();
        
    }
    render(){

        debugger;
        this.element.innerHTML = navbarView();
        
    }

   
}