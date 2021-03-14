export class BaseElement extends HTMLElement {
    constructor() {
        super();

        if(this.constructor.observedAttributes) {
            this.constructor.observedAttributes.forEach(element => {
               Object.defineProperty(this, element, {
                   get() {
                       return this.getAttribute(element);
                   },
                   set(value) {
                       if(value) {
                           this.setAttribute(element, value);
                       }else {
                           this.removeAttribute(element);
                       }
                    }
                
               }) ;
            }); 
        } else {
            console.log("No tiene atributos observando");
        }
    }

    
}