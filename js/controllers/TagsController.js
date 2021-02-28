'use strict';

import BaseController from "./BaseController.js";
import {tagView} from '../views/tagView.js'
import DataService from "../services/DataService.js";


export default class TagsController extends BaseController {

    render (tags) {
        for(const tag of tags) {
            const tagOption = document.createElement('option');
            tagOption.innerHTML = tagView(tag);
            this.element.appendChild(tagOption);
        }        
    }

    async loadTags() {        
        this.publish(this.events.START_LOADING);
        try { 
            const tags = await DataService.getTags();
            this.render(tags);
        } catch (error){              
            this.publish(this.events.ERROR, error);
        }finally {
            this.publish(this.events.FINISH_LOADING);
        }
     
    } 
}