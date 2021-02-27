import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
const NEXT_URL = '/';

export default class DeleteButtonController extends BaseController {

    constructor( element, product) {
        super(element);
        this.product = product;
        this.addEventListener();
    }

    addEventListener() {
        this.element.addEventListener('click', async ev => {   
        

            const isUserLogged = await  dataService.isUserLogged();
             
            if(!isUserLogged) {
                window.location.href="/login.html?mensaje=missingLogin&next="+NEXT_URL;
            }else 
            {
                const deleteConfirmed = confirm("Desea borrar?");            
                if(deleteConfirmed) {
                    await dataService.deleteProduct(this.product);
                    this.publish(this.events.PRODUCT_DELETED, this.product)
                    window.location.href="/?mensaje=productDeletedOK";
                    
                }
            }           
        
        })
    }

}
