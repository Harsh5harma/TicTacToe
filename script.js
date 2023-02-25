
const tictactoe = (()=>{
    const boardMaker = (function(){
        const board = document.querySelector('.board');
        for (let i =0;i<3;i++){
            for (let j=0;j<3;j++){
                let subdiv = document.createElement('div');
                subdiv.className="subdiv";
                board.appendChild(subdiv);
            
            }
        }
    });
    
    const startGame = (function(){
        let startStatus = false;
        let player1 = document.querySelector('#player1');
        let player2 = document.querySelector('#player2');
        const startButton = document.querySelector('.start');
        let restartButton = document.querySelector('.restart');
        const msgBoard = document.querySelector('.m2');

        let mark;
        let marks1D = [];
        let marks2D = [];
        let turn = false;
    
        let subDivHandler = (e)=>{
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
                   
                   marks1D=[];
                   marks2D = [];
                   subDivs.forEach(sd=>{
                        marks1D.push(sd.textContent);
                   })
                   while (marks1D.length) marks2D.push(marks1D.splice(0,3));
           }
        }
        
        let startHandler=()=>{
            if (player1.value!=""&&player2.value!=""){
             startStatus=true;
                mark='X';
                turn = true;
                msgBoard.innerHTML=`Game has started!<br>Player 1: ${player1.value}<br>Player 2: ${player2.value}`;
            }
            console.log(startStatus);
         }
    
         startButton.addEventListener('click',startHandler);
         let subDivs = document.querySelectorAll('.subdiv');
         
         subDivs.forEach(node=>{
             node.addEventListener('click',subDivHandler)}
         )
         restartButton.addEventListener('click',()=>{
            window.location.reload();
        })
        return {marks2D};
    });

    const boardFunctions = (function(myBoard){
        
        const isBoardFull = (myBoard)=>{
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

        const gameWin = ((myBoard)=>{
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
        });

        //Determines and displays the outcome of the game, along with returning the game verdict object
        const gameLogic = ((myBoard)=>{
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
        });

        return {gameLogic};
    });

    return {startGame,boardMaker,boardFunctions}
    
})();

tictactoe.boardMaker();
tictactoe.startGame();






