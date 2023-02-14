const tictactoe = (()=>{
    const boardMaker = (()=>{
        let board = [
        ['X','X','O'],
        ['X','O','X'],
        ['X','','X']];
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
                    console.log(`${myBoard[i][0]} wins!`);
                    return true;
                }
            }

            //Any row has the same mark
            for (let i =0;i<3;i++){
                if ((myBoard[0][i]===myBoard[1][i])&&(myBoard[1][i]===myBoard[2][i])){
                    console.log(`${myBoard[0][i]} wins!`);
                    return true;
                }
            }

            //The major diagonal has the same mark
            if ((myBoard[0][0]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][2])){
                console.log(`${myBoard[0][0]} wins!`);
                return true;
            }

            //The minor diagonal has the same mark
            if ((myBoard[0][2]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][0])){
                console.log(`${myBoard[1][1]} wins!`);
                return true;
            }

            return false;
        }

        const gameLogic = (myBoard)=>{
            while(!isBoardFull(myBoard)){
                let outcome = gameWin(myBoard);
                if (outcome){

                }
            }

        
        }

        return {gameWin};
    })();

    return {boardMaker,boardFunctions}
    
})();

tictactoe.boardMaker.printBoard();
tictactoe.boardFunctions.gameWin(tictactoe.boardMaker.board)


