import * as s from "./simpleGrid.css";

import B from "./myButton.class";

export default class myDiv {
    private d: HTMLDivElement;
    constructor(message: string) {
        this.d = document.createElement("div");
        this.d.classList.add(s.container);
        this.d.appendChild(new B("Hello").button);
    }

    get div() {
        return this.d;
    }
}