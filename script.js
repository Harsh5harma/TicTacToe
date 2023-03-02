const tictactoe = (function(){
    //Using an IIFE here to immediately create the board.
    (function(){
        const board = document.querySelector('.board');
        for (let i =0;i<3;i++){
            for (let j=0;j<3;j++){
                let subdiv = document.createElement('div');
                subdiv.className="subdiv";
                board.appendChild(subdiv);
            }
        }
    })();
    
    //Responsible for converting the UI elements into a board array object
    const _ui2array = function(element){
        let children = element.children;
        let board1D=[];
        for (let i = 0;i<children.length;i++){
            let dakid = children[i];
            board1D.push(dakid.textContent);
        }
        let board2D = [];
        while (board1D.length) board2D.push(board1D.splice(0,3));
        return board2D;
    }
    
    const boardFunctions = (function(){

        const _isBoardFull = (myBoard)=>{
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
            //Any row has the same mark
            let verdict={};
            let rowFlag=false;
            for (let i =0;i<3;i++){
                if ((myBoard[i][0]===myBoard[i][1])&&(myBoard[i][0]!='')&&(myBoard[i][1]===myBoard[i][2])&&(myBoard[i][2]!='')){
                    return {outcome:true,mark:myBoard[i][0]};
                }
            }
            if(!rowFlag){
                verdict.outcome=false;
                verdict.mark='';
            }

            //Any col has the same mark
            let colFlag = false;
            for (let i =0;i<3;i++){
                if ((myBoard[0][i]===myBoard[1][i])&&(myBoard[0][i]!='')&&(myBoard[1][i]===myBoard[2][i])&&(myBoard[2][i]!='')){
                    return {outcome:true,mark:myBoard[0][i]};
                }
            }
            if (!colFlag){
                verdict.outcome=false;
                verdict.mark='';
            }

            //The major diagonal has the same mark
            if ((myBoard[0][0]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][2])&&(myBoard[0][0]!=''&&myBoard[1][1]!=''&&myBoard[2][2]!='')){
                return {outcome:true,mark:myBoard[1][1]};
            }

            //The minor diagonal has the same mark
            if ((myBoard[0][2]===myBoard[1][1])&&(myBoard[1][1]===myBoard[2][0])&&(myBoard[0][2]!=''&&myBoard[1][1]!=''&&myBoard[2][0]!='')){
                return {outcome:true,mark:myBoard[1][1]};
            }

            if(_isBoardFull(myBoard)){
                verdict.mark='Tie';
            }

            return verdict;
        }
        return {gameWin};
    })();
    const startGame = (function(){
        let startStatus = false;
        let player1 = document.querySelector('#player1');
        let player2 = document.querySelector('#player2');
        const startButton = document.querySelector('.start');
        let restartButton = document.querySelector('.restart');
        const msgBoard = document.querySelector('.m2');

        let mark;
        let turn = false;

        const gameUIWinCheck = function(msgBoard,startStatus){
            let myBoard = document.querySelector('.board');
            let verdict = boardFunctions.gameWin(_ui2array(myBoard));
            if (verdict.outcome===true){
                 msgBoard.textContent=`${verdict.mark} has won!`;
                 return false; //startStatus gets set to false as game is over
            }else{
                 if (verdict.mark==='Tie'){
                     msgBoard.textContent=`The game was a tie. Try again!`;
                     return startStatus;
                 }else{
                     return true;
                 }
            }
        }
        const subDivHandler = (e)=>{
            if  (startStatus===true){
                   if (mark===player1.value){
                       msgBoard.textContent="Player 1 played their turn";
                   }else{
                       msgBoard.textContent = "Player 2 played their turn";
                   }
                   if (turn===true){
                       e.target.textContent=mark;
                       mark = 'O';
                       turn = false;
                   }else{
                       e.target.textContent=mark;
                       mark='X';
                       turn = true;
                   }
                   e.target.removeEventListener('click',subDivHandler);
                   startStatus=gameUIWinCheck(msgBoard,startStatus);
           }
        }
        
        const startHandler=()=>{
            if (player1.value!=""&&player2.value!=""&&(player1.value=='X'&&player2.value=='O'||(player1.value==='O'&&player2.value==='X'))){
             startStatus=true;
                mark='X';
                turn = true;
                msgBoard.innerHTML=`Game has started!<br>Player 1: ${player1.value}<br>Player 2: ${player2.value}`;
            }
         }
    
         startButton.addEventListener('click',startHandler);
         let subDivs = document.querySelectorAll('.subdiv');
         
         subDivs.forEach(node=>{
             node.addEventListener('click',subDivHandler)}
         )
         restartButton.addEventListener('click',()=>{
            window.location.reload();
        })
    });
    return {startGame}
    
})();

tictactoe.startGame();
