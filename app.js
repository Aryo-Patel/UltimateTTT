let board = document.getElementById("board-area");

class ticTacToe{
    turn = ['red', 'blue'];
    index = 0;
    constructor(){
        this.makeSquares();
    }


    makeSquares(){

        for(let i = 0; i < 9; i++){
            let square = document.createElement('div');
            square.style.width = '50px';
            square.style.height = '50px';

            square.classList.add("square");
            square.classList.add(i + "");
            switch(i){
                case 0:
                    square.style.borderRight = '1px solid black';
                    square.style.borderBottom = '1px solid black';
                    break;
                case 1:
                    square.style.border = '1px solid black';
                    square.style.borderTop = 'none';
                    break;
                case 2:
                    square.style.borderLeft = '1px solid black';
                    square.style.borderBottom = '1px solid black';
                    break;
                case 3:
                    square.style.border = '1px solid black';
                    square.style.borderLeft = 'none';
                    break;  
                case 4:
                    square.style.border = '1px solid black';
                    break;
                case 5:
                    square.style.border = '1px solid black';
                    square.style.borderRight = 'none';
                    break;
                case 6:
                    square.style.borderTop = '1px solid black';
                    square.style.borderRight = '1px solid black';
                    break;
                case 7:
                    square.style.border = '1px solid black';
                    square.style.borderBottom = 'none';
                    break;
                case 8:
                    square.style.borderTop = '1px solid black';
                    square.style.borderLeft = '1px solid black';
                default:
                    break;
                
            }
            square = this.addHover(square);
            square = this.onClick(square);
            board.appendChild(square);
        }
    }
//Figure out how to make an explicit function still use square properties
    addHover(square){
        square.addEventListener('mouseover', e =>{
            square.classList.toggle("fade");
            square.style.backgroundColor = '#f39595';
        });
        square.addEventListener('mouseout', e =>{
            square.style.backgroundColor = 'white';
        });
        return square;
    }
    onClick(square){
        square.addEventListener('click', e =>{
            square.removeEventListener('mouseover', e=> {});
            square.removeEventListener('mouseout', e =>{});
            square.style.backgroundColor = this.turn[this.index];
            this.index = (this.index + 1)%2;
        });
        return square;
    }
}

let ticTac  = new ticTacToe();