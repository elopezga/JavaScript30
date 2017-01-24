function secondView(){
    let htmlElement = document.querySelector(".second-hand");
    return Object.assign({}, clockHandView(htmlElement));
}
