'use strict';

import pubSub from '../services/Pubsub.js';

export default class BaseController {
    constructor (element){
        this.element = element;
        this.pubSub = pubSub;
        this.events = {
            START_LOADING: 'startLoading',
            FINISH_LOADING: 'finishLoading',
            ERROR: 'error',
            CLICK: 'click',
            PRODUCT_DELETED: 'productDeleted',
            ADVISE: 'advise'
        }
    }

    subscribe (eventName, eventHandler) {
        this.pubSub.subscribe(eventName, eventHandler);
    }

    publish (eventName, eventHandler) {
        this.pubSub.publish(eventName, eventHandler);
    }

    checkMessage() {
        debugger;
        let message = "";
        const queryParams = window.location.search.replace('?', '');
        const queryParamsParts = queryParams.split('=');
        if (queryParamsParts.length >= 2 && queryParamsParts[0] === 'mensaje') {
            message = queryParamsParts[1];
            switch (message)
            {
                case 'productOK':
                    message = "El producto se ha creado correctamente";
                    break;
                case 'expiredToken':
                    message = "Su sesión ha expirado, debe registrarse antes de continuar"
                    break;
            }
          }
        this.publish(this.events.ADVISE, message);
    }
}