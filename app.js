//TODO: Start working on creating a 9x9 TTT game...try creating a new js
//file for it. 
let board = document.getElementById("board-area");

class ticTacToe{
    turn = ['red', '#007eff'];
    index = 0;
    text_board = new Array(3);

    constructor(){
        this.growboard();
        this.makeSquares();
    }
    growboard(){
        for(let i = 0; i < this.text_board.length; i ++){
            this.text_board[i] = new Array(3);
        }
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
            let squareClone = square.cloneNode(true);
            square.parentNode.replaceChild(squareClone, square);
            squareClone.style.backgroundColor = this.turn[this.index];
            this.squareClass(square, this.turn[this.index]);
            this.checkWin(this.turn[this.index]);
            this.index = (this.index + 1)%2;

        });
        return square;
    }
    squareClass(square, color) {
        let boardNumber = square.classList[1];
        this.text_board[parseInt(boardNumber/3)][boardNumber%3] = color;
    }
    checkWin(color){
        let goalColor = color;
        for(let i = 0; i < this.text_board.length; i ++){
            let count = 0;
            for(let j = 0; j < this.text_board[i].length; j++){
                if(this.text_board[i][j] !== goalColor){
                    console.log(`No one won in row ${i}`);
                    count = 1;
                }
            }
            if(count == 0){
                console.log(`Winner in row ${i}`);
            }
        }
        for(let i = 0; i < this.text_board.length; i++){
            let count = 0;
            for(let j = 0; j < 3; j++){
                if(this.text_board[j][i] !== goalColor){
                    console.log(`No one won in column ${i}`);
                    count = 1;
                }
            }
            if(count == 0){
                console.log(`Winner in column ${i}`);
            }
        }
        let countMain = 0;
        let countOpp = 0;
        for(let i = 0; i < 3; i++){

            if(this.text_board[i][i] !== goalColor){
                console.log(`No one won on main diagonal`);
                countMain = 1;
            }

            if(this.text_board[i][2-i] !== goalColor){
                console.log(`No one won on opposite diagonal`);
                countOpp = 1;
            }

        }
        if(countMain === 0|| countOpp ===0){
            console.log(`Winner on a diagonal`);
        }
    }
}

let ticTac  = new ticTacToe();