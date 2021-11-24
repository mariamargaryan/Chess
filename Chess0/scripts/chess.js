const  files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const map = [
    9, 11, 10, 8, 7, 10, 11, 9,
    12, 12, 12, 12, 12, 12, 12, 12,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,   
    6, 6, 6, 6, 6, 6, 6, 6,
    3, 5, 4, 2, 1, 4, 5, 3,
  ];
const code = 9811;

const Board = class Board {
    constructor({selector, size}) {
        this.size = size;
        this.element = document.querySelector(selector);
        this.element.classList.add('board');

        this.init();
    }

    init() {
            if (this.size) {
                this.element.style.width = this.size;
                this.element.style.height = this.size;
            } else {
                const size = '90vmin';
                
                this.element.style.width = size;
                this.element.style.height = size;
            }

            this.squares = Array.from({length: 64}, (elem, index) => {
                const fileNum = index % 8;
                const file = files[fileNum];
                const rank = 8 - Math.floor(index / 8);
                const isWhite = (rank % 2 === fileNum % 2);
                const piece = map[index] ? "&#"+ (code + map[index]) +";" : "";
                const square = new Square({
                    isWhite,
                    rank,
                    file,
                    piece
                });

            this.element.appendChild(square.element);

            return square;
        });
    }
}