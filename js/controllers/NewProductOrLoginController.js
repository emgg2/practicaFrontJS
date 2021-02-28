import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class NewProductOrLoginController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (userIsLogged) {
            const newTweetButton = this.element.querySelector('.new-product-button');
            newTweetButton.classList.remove('is-hidden');
        } else {
            const loginRegisterButtons = this.element.querySelector('.login-register-buttons');
            loginRegisterButtons.classList.remove('is-hidden');
        }
    }

}
