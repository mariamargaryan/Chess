const Square = class Square {
    constructor({rank, file, isWhite, piece}) {
        this.rank = rank;
        this.file = file;
        this.piece = piece;
        this.element = document.createElement('div'); 
        this.element.innerHTML = `<span>&nbsp</span>${piece}`;
        this.element.classList.add('square');
        this.element.classList.add(isWhite? 'white' : 'black');
 }
}