//TODO: Start working on creating a 9x9 TTT game...try creating a new js
//file for it. 
let board = document.getElementById("board-area");

class ticTacToe{
    turn = ['red', '#007eff'];
    index = 0;
    text_board = new Array(3);
    squares = new Array(3);
    container;
    won = false;
    constructor(){
        this.growSquares();
        this.growboard();
        this.makeSquares();
    }
    growboard(){
        for(let i = 0; i < this.text_board.length; i ++){
            this.text_board[i] = new Array(3);
        }
    }
    growSquares(){
        for(let i = 0; i < this.squares.length; i ++){
            this.squares[i] = new Array(3);
        }
    }

    makeSquares(){
        this.container = document.createElement('div');
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
                    break;
                default:
                    break;
                
            }
            this.squares[parseInt(i/3)][i%3] = square;
            square = this.addHover(square);
            square = this.onClick(square);

            this.container.appendChild(square);
            this.container.classList.add('container-class');
            board.appendChild(this.container);
        }
    }

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
            let index = square.classList[1];
            let squareClone = square.cloneNode(true);
            square.parentNode.replaceChild(squareClone, square);
            squareClone.style.backgroundColor = this.turn[this.index];
            this.squares[parseInt(index/3)][index%3] = squareClone;
            this.squareClass(square, this.turn[this.index]);
            if(this.checkWin(this.turn[this.index])){
                for(let i = 0; i < this.squares.length; i++){
                    for(let j= 0; j < this.squares[i].length; j++){
                        this.won = true;
                        let squareClone = this.squares[i][j].cloneNode(true);
                        this.squares[i][j].parentNode.replaceChild(squareClone, this.squares[i][j]);
                        squareClone.style.backgroundColor = this.turn[this.index];
                    }
                }
            }
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

                    count = 1;
                }
            }
            if(count == 0){
                return true;
            }
        }
        for(let i = 0; i < this.text_board.length; i++){
            let count = 0;
            for(let j = 0; j < 3; j++){
                if(this.text_board[j][i] !== goalColor){
                    count = 1;
                }
            }
            if(count == 0){
                return true;
            }
        }
        let countMain = 0;
        let countOpp = 0;
        for(let i = 0; i < 3; i++){

            if(this.text_board[i][i] !== goalColor){
                countMain = 1;
            }

            if(this.text_board[i][2-i] !== goalColor){
                countOpp = 1;
            }

        }
        if(countMain === 0|| countOpp ===0){
            return true;
        }
        return false;
    }
}




class nineBynine{
    borderBigBoard = '2px solid grey';
    turn = ['red', '#007eff'];
    index = 0;
    bigTextBoard = new Array(3);
    allTicTacBoards = new Array(3);
    lastMove = -1;
    constructor(){
        this.growBigTextBoard();
        this.growAllTicTacBoards();
        this.makeBoard();
    }
    growBigTextBoard(){
        for(let i = 0; i < 3; i++){
            this.bigTextBoard[i] = new Array(3);
        }
    }
    growAllTicTacBoards(){
        for(let i = 0; i < 3; i++){
            this.allTicTacBoards[i] = new Array(3);
        }
    }
    makeBoard(){
        for(let i = 0; i < 9; i++){
            let miniBoard = new ticTacToe();
            miniBoard.container.classList.add(""+ i);

            this.bigTextBoard[parseInt(i/3)][i%3] = miniBoard.text_board;
            this.allTicTacBoards[parseInt(i/3)][i%3] = miniBoard;
            switch(i){
                case 0:
                    miniBoard.container.style.borderRight = this.borderBigBoard;
                    miniBoard.container.style.borderBottom = this.borderBigBoard;
                    break;
                case 1:
                    miniBoard.container.style.border = this.borderBigBoard;
                    miniBoard.container.style.borderTop = 'none';
                    break;
                case 2:
                    miniBoard.container.style.borderLeft = this.borderBigBoard;
                    miniBoard.container.style.borderBottom = this.borderBigBoard;
                    break;
                case 3:
                    miniBoard.container.style.border = this.borderBigBoard;
                    miniBoard.container.style.borderLeft = 'none';
                    break;  
                case 4:
                    miniBoard.container.style.border = this.borderBigBoard;
                    break;
                case 5:
                    miniBoard.container.style.border = this.borderBigBoard;
                    miniBoard.container.style.borderRight = 'none';
                    break;
                case 6:
                    miniBoard.container.style.borderTop = this.borderBigBoard;
                    miniBoard.container.style.borderRight = this.borderBigBoard;
                    break;
                case 7:
                    miniBoard.container.style.border = this.borderBigBoard;
                    miniBoard.container.style.borderBottom = 'none';
                    break;
                case 8:
                    miniBoard.container.style.borderTop = this.borderBigBoard;
                    miniBoard.container.style.borderLeft = this.borderBigBoard;
                    break;
                default:
                    break;
                
            }
            miniBoard.container = this.onClick(miniBoard.container);
            
        }
    }
    onClick(container){
        container.addEventListener('click', e => {
            console.log(container);
            if(e.target.classList[0] === 'square' && e.target.style.backgroundColor === 'rgb(243, 149, 149)'){
                if(container.classList[1] === this.lastMove || this.lastMove === -1){
                    let containerIndex = container.classList[1];
                    this.lastMove = e.target.classList[1];
                    for(let i = 0; i < this.allTicTacBoards.length; i++){
                        for(let j = 0; j < this.allTicTacBoards[i].length; j++){
                            if(i === parseInt(containerIndex/3) && j === containerIndex%3){
                            }
                            else{
                                this.allTicTacBoards[i][j].index = (this.allTicTacBoards[i][j].index + 1)%2;
                            }
                        }
                    }
                    if(this.allTicTacBoards[parseInt(this.lastMove/3)][this.lastMove%3].won === true){
                        this.lastMove = -1;
                    }
                    let allSmallBoards = document.querySelectorAll('.container-class');
                    allSmallBoards = Array.from(allSmallBoards);
                    console.log(this.lastMove);
                    allSmallBoards.forEach(smallBoard =>{
                        if(this.lastMove !== -1 && smallBoard.classList[1] !== this.lastMove){
                            smallBoard.classList.add('freezeBehavior');
                        }
                        else{
                            smallBoard.classList.remove('freezeBehavior');
                        }
                    })
                    setTimeout(() => {if(this.checkWin()){
                        alert("Winner!");
                    }}, 50);
                    
                }
            }
        });
    }

    text_boardUpdated(containerIndex){
        return new Promise((resolve, reject) =>{
            let board = this.allTicTacBoards[parseInt(containerIndex/3)][containerIndex%3].board_text; 
            console.log(board);
        });
    }
    checkWin(){
        for(let i = 0; i < this.allTicTacBoards.length; i++){
            let count = 0
            for(let j = 0; j < this.allTicTacBoards[i].length; j++){
                if(this.allTicTacBoards[i][j].won !== true){
                    count = 1;
                }
            }
            if(count === 0){
                return true;
            }
        }
        for(let i = 0; i < 3; i++){
            let count = 0
            for(let j = 0; j < 3; j++){
                if(this.allTicTacBoards[j][i].won !== true){
                    count = 1;
                }
            }
            if(count === 0){
                return true;
            }
        }
        let countMain = 0
        for(let i = 0; i < 3; i++){
            if(this.allTicTacBoards[i][i].won !== true){
                countMain = 1;
            }
        }
        if(countMain === 0){
            return true;
        }
        let countOpp = 0
        for(let i = 0; i < 3; i++){
            if(this.allTicTacBoards[2-i][i].won !== true){
                countOpp = 1;
            }
        }
        if(countOpp == 0){
            return true;
        }
        return false;
    }
}

let ticTac = new nineBynine();