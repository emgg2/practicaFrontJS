'use strict';
import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NewProductFormController from './controllers/NewProductFormController.js';
import TagsController from './controllers/TagsController.js';
import SearchController from './controllers/SearchController.js';
import CloseSessionController from './controllers/CloseSessionController.js';
import NavbarController from './controllers/NavbarController.js';



window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.lds-ring');
    new LoaderController(loader);

    const errorsElement = document.querySelector('.global-errors');
    new ErrorController(errorsElement);

    const tagsElement = document.querySelector("select[name='tags'");
    const tagsController = new TagsController(tagsElement);
    tagsController.loadTags();

    const formElement = document.querySelector('form');
    new NewProductFormController(formElement, tagsElement);

    const navbar = document.querySelector('.navbar');
    new NavbarController(navbar);
   
    const searchInput = document.querySelector('input[type="search"]');
    new SearchController(searchInput);
    
    const closeSession = document.querySelector('a[name="close-session"');
    new CloseSessionController(closeSession);
});