import axios from "axios";

export default class myButton {
    private b: HTMLButtonElement;

    constructor(message: string) {
        this.b = document.createElement("button");
        this.b.name = message;
        this.b.innerText = message;
        this.b.type = "button"
        this.b.onclick = this.customOnClick;
    }

    get button() {
        return this.b;
    }

    customOnClick() {
        // Requires service to be running on port 12111
        axios({
            method: "get",
            url: "http://localhost:12111/service/todo/list"
        })
        .then(function (response) {
            console.log(response.data)
        });
    }

}
