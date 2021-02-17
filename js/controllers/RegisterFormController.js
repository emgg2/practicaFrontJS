import DataService from '../services/DataService.js';
import BaseController from './BaseController.js';

export default class RegisterFormController extends BaseController {

    constructor(element) {
        super(element);
        this.addEventListener();
    }

    async addNewUser(user) {
        await DataService.registerUser(user);
        alert("User created");
        window.location.href = './login.html';
    }

    addEventListener() {

        this.element.querySelectorAll('input').forEach(input => {
            const button = this.element.querySelector('button');
            input.addEventListener('keyup', event => {
                // if input value is OK turns to green color, in red one if value is  not correct
                if(input.validity.valid) {
                    input.classList.add('is-success');
                    input.classList.remove('is-danger');
                }else  {
                    input.classList.remove('is-success');
                    input.classList.add('is-danger');
                }

                // Check form data if it is correct in order to active / inactivate the button
                if(this.element.checkValidity()) {
                    button.removeAttribute('disabled');
                }else
                {
                    button.setAttribute('disabled',true);
                }
            });
        });

        this.element.addEventListener('submit', async(event) => {
            event.preventDefault();
            
            const newUser = {
                username: this.element.elements.email.value,
                password: this.element.elements.password.value
            }
            this.publish(this.events.START_LOADING);
            try {
                await this.addNewUser(newUser);
            }catch(error) {
                this.publish(this.events.ERROR, error);
            }finally {
                this.publish(this.events.FINISH_LOADING);
            }
        });

    }


}