import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

const NEXT_URL = 'login.html';

export default class LoginFormController extends BaseController {
  constructor(element) {
    super(element);
    this.checkMessage();
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault(); 
      const user = {
        username: this.element.elements.email.value,
        password: this.element.elements.password.value,
      };
      
      this.publish(this.events.START_LOADING);
      try {
        const data = await dataService.login(user);
        dataService.saveToken(data.accessToken);        
        let next = '/';
        const queryParams = window.location.search.replace('?', '');  
        if(queryParams != "") {
          const queryParamsParts = queryParams.split('&');
          queryParamsParts.forEach(element => {
            const parameter = element.split('=');
            if (parameter[0] === 'next') {
              if(parameter[2])
              {
                next = parameter[1]+"="+parameter[2];                      
              }else
              {
                next = parameter[1]
              }              
            }          
        });
       }
        window.location.href = next;
      } catch (error) {
        const message = this.getMessageError(error, NEXT_URL);
        this.publish(this.events.ERROR, message);
      } finally {
        this.publish(this.events.FINISH_LOADING);
      }
    });

    this.element.querySelectorAll("input").forEach((input) => {
      const button = this.element.querySelector("button");
      input.addEventListener("keyup", (event) => {
        //Green if input value is OK, in red if it isn't
        if (input.validity.valid) {
          input.classList.add("is-success");
          input.classList.remove("is-danger");
        } else {
          input.classList.remove("is-success");
          input.classList.add("is-danger");
        }

        // enable button if data form is OK
        if (this.element.checkValidity()) {
          button.removeAttribute("disabled");          
        } else {
          button.setAttribute("disabled", true);
        }
      });
    });
  }
}
