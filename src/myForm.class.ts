export default class myForm {
    private f: HTMLFormElement
    constructor() {
        this.f = document.createElement("form")
        
    }

    get form() {
        return this.f;
    }

}