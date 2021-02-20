import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class DeleteButtonController extends BaseController {

    constructor( element, product) {
        super(element);
        this.addEventListener();
    }

    addEventListener() {
        this.element.addEventListener('click', async ev => {
            const deleteConfirmed = confirm("Está borrando el producto : " + product.name + "¿Desea continuar?");
            if(deleteConfirmed) {
                await dataService.deleteProduct(product);
                this.publish(this.events.PRODUCT_DELETED, product)
            }
        })
    }

}
