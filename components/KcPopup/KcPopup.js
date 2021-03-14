import { BaseElement } from "../base-element.js";
import { kcPopupHtml } from "./KcPopup-html.js";
import { KcPopupStyles } from "./KcPopup-styles.js";

class KcPopup extends BaseElement {
    static get observedAttributes() {
        return ['open', 'title'];
    }
    get html() {
        return `${KcPopupStyles}${kcPopupHtml(this)}`;
    }
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        this.close = this.close.bind(this);
    }

    connectedCallback() {
        console.log('ConnectedCallback');
        this.shadowRoot.innerHTML = this.html;
    }
    
    disconnectedCallback() {


    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("changing value attribule");
        if(newValue !== oldValue){
            this[attrName] = this.hasAttribute(attrName);
            switch(attrName) {
                case 'open':
                    this.openDialog(newValue);
                    break;
                default:
                    break;
            }
        }
    }

    openDialog(isOpen) {
        this.shadowRoot.querySelector('.wrapper').classList.toggle('open', isOpen);
        if(isOpen) {
            this.setAttribute('open', true);
            this.shadowRoot.querySelector('.close').addEventListener('click', this.close);

        }else {
            this.removeAttribute('open');
        }
    }

    close() {
        if(this.open !== false) {
            this.open = false;
        }

    }

}

if(!customElements.get('kc-popup')) {
    customElements.define('kc-popup',KcPopup);
}