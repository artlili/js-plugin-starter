// import dependencies
import { concat } from '../util/string';

// return App class
export class App{
    constructor(elem){
        this.elem = elem;

        this.initialized = false;
    }

    // initialize plugin
    init() {

        // set initialized to `true`
        this.initialized = true;
    }
}
