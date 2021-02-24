'use strict';

import pubSub from '../services/Pubsub.js';

const messageText = {
    'productOK' : 'El producto se ha creado correctamente',
    'expiredToken': 'Su sesión ha expirado, debe registrarse antes de continuar',
    'productDeletedOK' : 'Su producto se ha eliminado'


};

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
        let message = "";
        const queryParams = window.location.search.replace('?', '');               
        const queryParamsParts = queryParams.split("&");
        queryParamsParts.forEach(element => {
            const parameter = element.split('=');
            if(parameter[0] === 'mensaje') {
                message = parameter[1];                
                if(messageText[message])
                {
                    message = messageText[message];
                    this.publish(this.events.ADVISE, message);
                }                      
            }
        });        
    }
}