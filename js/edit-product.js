import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import EditProductController from './controllers/EditProductController.js';
import CloseSessionController from './controllers/CloseSessionController.js'

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.lds-ring');
    new LoaderController(loader);

    const errorsElement = document.querySelector('.global-errors');
    new ErrorController(errorsElement);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');

    const formElement = document.querySelector('.container');
    const editProductController = new EditProductController(formElement,productId);
    editProductController.loadProduct();

    const closeSession = document.querySelector('a[name="close-session"');
    new CloseSessionController(closeSession);
    
});