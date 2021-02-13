'use strict';

import BaseController from "./BaseController.js";

export default class LoaderController extends BaseController {
    showLoader () {
        this.element.classList.remove('hidden');
    }

    hideLoader () {
        this.element.classList.add('hidden');
    }
}