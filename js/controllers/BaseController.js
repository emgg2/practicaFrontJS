'use strict';

import pubSub from '../services/Pubsub.js';
import { messageText } from '../../data/messageText.js';

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
            ADVISE: 'advise',
            SEARCH: 'search'
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

    getMessageError(error,nextText) { 
        let messageKey = "";
        switch (error.message)
        {
            case "Not Found" : 
                messageKey = 'notFound';
                break;
            case "Wrong access token":
                window.location.href = '/login.html?mensaje=expiredToken&next='+nextText;
                break;      
            case "Username is taken":
                messageKey = 'userTaken';
                break;    
            case "Wrong username/password":
                messageKey = 'wrongUsernamePass';
                break; 
            default:
                 messageKey= 'genericError';
        }  
        return messageText[messageKey];
               
    }
}