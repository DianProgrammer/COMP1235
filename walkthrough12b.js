//Step 1: Create function to declare vars
function Img(title, src, content){
    this.title = title;
    this.src = src;
    this.content = content;
}
//Step 2: makeMarkup
Img.prototype.makeMarkup = function(){
    return `<div><img src="${this.src}" title="${this.title}" content="${this.content}"></div>`
}
//Step 3: makeElement
Img.prototype.makeElement = function (){

    let ImgDiv = document.createElement("div");
    ImgDiv.innerHTML = this.makeMarkup();
    return ImgDiv;

}
//Step 4: load the section by addEventListener
document.addEventListener("DOMContentLoaded", function(){
    const bodyElement = document.querySelector("body");
    const i1 = new Img("this is title", "https://learn.georgebrown.ca/d2l/lp/navbars/6606/theme/viewimage/22739/view?v=20.25.3.18517", "this is content");
    bodyElement.appendChild(i1.makeElement()) ;
})