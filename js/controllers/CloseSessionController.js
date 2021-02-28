import BaseController from "./BaseController.js";
import dataService from '../services/DataService.js'

export default class CloseSessionController extends BaseController {
    constructor(element){
        super(element);      
        this.closeSession();
    }    

    closeSession() {    
        this.element.addEventListener ('click', () => {
            dataService.removeToken();
            window.location.href = "/login.html?mensaje=seeYouSoon";
        })    
        
    }    

}