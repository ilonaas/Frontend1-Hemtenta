const result = document.querySelector("#resultat")

function random() {
    let first = Math.round(Math.random() * 10);
    let second = Math.round(Math.random() * 10);

    const förstaOL = document.createElement("ol");
    const andraOL = document.createElement("ol");

    for (i = 0; i < first; i++) {
        let li = document.createElement("li")
        let randomNum = Math.round(Math.random() * 100);
        li.innerText = randomNum;
        förstaOL.appendChild(li)
    }
    result.appendChild(förstaOL);

    for (i = 0; i < second; i++) {
        let li = document.createElement("li")
        let randomNum = Math.round(Math.random() * 100);
        li.innerText = randomNum;
        andraOL.appendChild(li)
    }
    result.appendChild(andraOL);
}