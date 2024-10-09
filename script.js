let scoreH2 = document.getElementById('score');
let timeLeftH2 = document.getElementById('timeLeft');
let startNewGameButton = document.getElementById('startNewGame');
let pauseGameButton = document.getElementById('pauseGame');
let squares = document.querySelectorAll('.square');
let gameMusic = new Audio(`assets/Assets_gameMusic.mp3`);
let hitMusic = new Audio(`assets/hitMusic.mp3`);
let score = 0;
let timeLeft = 0;
let hitPosition = null;
let timerId = null;
let randomMoleId =null;

//randomly place mole
function randomMole(){
  squares.forEach(squares => {
    squares.classList.remove('mole');
   })

   let randomSquare = squares[Math.floor(Math.random()*squares.length)];// 0 to 8
   randomSquare.classList.add('mole');
hitPosition = randomSquare.id;
  }


 function countDown(){

    timeLeft--;
    timeLeftH2.innerHTML = `Time Left:${timeLeft}`;
    if(timeLeft=== 0){
       clearInterval(timerId);
       clearInterval(randomMoleId);
      
    }
  }
randomMole();
squares.forEach(square => {
  square.addEventListener('mousedown', () =>{
    if(timerId !== null ){

    }
   
    if(square.id === hitPosition){
      hitMusic.play();
      setTimeout(() => { hitMusic.pause()},1000);
      
      score++;  
      scoreH2.innerHTML =`Your Score ${score}
      `;
      hitPosition = null;
    }

  } )
}
   
)

randomMole();

function startGame(){
 
  score = 0;
  timeLeft  = 60;
  scoreH2.innerHTML = `Your Score:0`;
  timeLeftH2.innerHTML  = `Time Left:60`;
 
  setInterval(randomMole, 1000);
}

function pauseResumeGame(){
  if(pauseGameButton.textContent ===`Pause`){
    gameMusic.pause();
    clearInterval(timerId);
    clearInterval(randomMoleId);
    timerId = null;
    randomMoleId = null; 
    pauseGameButton.textContent = `Resume`;
  }else{
    gameMusic.play();
      timerId = setInterval(randomMole, 1000);
    randomMoleId = setInterval(countDown,1000);
    pauseGameButton.textContent = `Pause`;

  }
}

startNewGameButton.addEventListener(' click',startGame);


function startGame(){
 
  score = 0;
  timeLeft  = 60;
  gameMusic.play();
  //callbackfunction
  //set interval callunction at regular interval
  
  pauseGameButton.innerHTML = `Pause`;
  pauseGameButton.style.display =`inline-block`;
 timerId = setInterval(randomMole, 1000);
randomMoleId = setInterval(countDown,1000);



}

startNewGameButton.addEventListener('click', startGame);
pauseGameButton.addEventListener('click', pauseResumeGame);
