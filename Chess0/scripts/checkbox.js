const Checkbox = class Checkbox {
    constructor() {
        this.element = document.createElement('input');
        this.element.type = 'checkbox';
        this.element.id = 'Checkbox';
        this.element.classList.add('checkbox');

        this.element.addEventListener("click", function () {
            this.squares = Array.from({length: 64}, (elem, index) => {
                const fileNum = index % 8;
                const file = files[fileNum];
                const rank = 8 - Math.floor(index / 8); 
                const piece = map[index] ? "&#"+ (code + map[index]) +";" : "";

                let isCheked = document.getElementById('Checkbox').checked;

                document.getElementsByClassName('square')[index].innerHTML = isCheked ? `<span>${file}${rank}</span>${piece}`:`<span>&nbsp</span>${piece}`;
            });
        });
    }
}