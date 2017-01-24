function hourView(){
    let htmlElement = document.querySelector(".hour-hand");
    return Object.assign({}, clockHandView(htmlElement));
}
