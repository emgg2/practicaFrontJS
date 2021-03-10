class KcPopup extends HTMLElement {
    static get observedAttributes() {
        return ['open'];
    }
    constructor () {
        super();
        this.close = this.close.bind(this);
    }

    connectedCallback() {
        console.log('ConnectedCallback');
        const template = document.getElementById('plantilla');
        const node = document.importNode(template.content, true);
        this.appendChild(node);

        this.querySelector('.close').addEventListener('click', this.close);

    }

    get open() {
        return this.hasAttribute('open');
    }

    set open(isOpen) {
        this.querySelector('.wrapper').classList.toggle('open', isOpen);
        if(isOpen) {
            this.setAttribute('open', true);

        }else {
            this.removeAttribute('open');
        }
    }

    close() {
        debugger;
        if(this.open !== false) {
            this.open = false;
        }

    }

}

if(!customElements.get('kc-popup')) {
    customElements.define('kc-popup',KcPopup);
}