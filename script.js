const tictactoe = (()=>{
    const boardMaker = (()=>{
        let board = [
        ['X','X','O'],
        ['','O','X'],
        ['O','O','X']];
        let printBoard = ()=> console.log(board);
        return {board,printBoard};
    })();

    let myBoard = boardMaker.board;

    const boardFunctions = (function(){
        
        const isBoardFull = ()=>{
            let flag = true;
            for (let i = 0;i<3;i++){
                for (let j=0;j<3;j++){
                    if (myBoard[i][j]===''){
                        flag = false;
                        break;
                    }
                }
                if (!flag) break;
            }
            return flag;
        }

        const gameWin = (myBoard)=>{
            //4 conditions of winning.
            //Any column has the same mark
            for (let i =0;i<3;i++){
                if ((myBoard[i][0]===myBoard[i][1])&&(myBoard[i][1]===myBoard[i][2])){
                    return {outcome:true,mark:myBoard[i][0]};
                }
            }

            //Any row has the same mark
            for (let i =0;i<3;i++){
                if ((myBoard[0][i]===myBoard[1][i])&&(myBoard[1][i]===myBoard[2][i])){
                    return {outcome:true,mark:myBoard[0][i]};
                }
            }

            //The major diagonal has the same mark
            if ((myBoard[0][0]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][2])){
                return {outcome:true,mark:myBoard[1][1]};
            }

            //The minor diagonal has the same mark
            if ((myBoard[0][2]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][0])){
                return {outcome:true,mark:myBoard[1][1]};
            }

            //default outcome
            return {outcome:false,mark:''};
        }

        //Determines and displays the outcome of the game, along with returning the game verdict object
        const gameLogic = (myBoard)=>{
            let verdict=gameWin(myBoard);
            while(!isBoardFull(myBoard)){
                verdict = gameWin(myBoard);
                if (verdict.outcome===true){
                    console.log(`${verdict.mark} has won`);
                    return verdict;
                }
            }
            if (verdict.outcome===true){
                console.log(`${verdict.mark} has won`);
            }else{
                console.log("No one won. The game was a draw.");
            }
            return verdict;
        }

        return {gameLogic};
    })();

    return {boardMaker,boardFunctions}
    
})();

tictactoe.boardMaker.printBoard();
tictactoe.boardFunctions.gameLogic(tictactoe.boardMaker.board)


let button = document.querySelector('.restart');
const board = document.querySelector('.board');
for (let i =0;i<3;i++){
    for (let j=0;j<3;j++){
        let subdiv = document.createElement('div');
        subdiv.className="subdiv";
        subdiv.textContent="X";
        board.appendChild(subdiv);
    }
}
