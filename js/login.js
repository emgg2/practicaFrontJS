import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import AdviseController from './controllers/AdviseController.js';
import LoginFormController from './controllers/LoginFormController.js';

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loader);

    const errorsElement = document.querySelector('.global-info');
    new ErrorController(errorsElement);

    const adviseElement = document.querySelector('.global-info');
    new AdviseController(adviseElement);

    const formElement = document.querySelector('form');
    new LoginFormController(formElement);
});
