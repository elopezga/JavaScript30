function minuteView(){
    let htmlElement = document.querySelector(".minute-hand");
    return Object.assign({}, clockHandView(htmlElement));
}