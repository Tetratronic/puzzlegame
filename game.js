const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let locked = false;
let matchSound = new Audio('./assets/match.mp3');
let win = 10;

function flipCard(){
    if(locked) return;
    if(this === firstCard) return;
    this.classList.add('flip'); 
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkMatch();
}

function checkMatch(){
    if(firstCard.firstElementChild.src == secondCard.firstElementChild.src){
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    reset();
    setTimeout(()=>{
        matchSound.play();
    },250)
    win--;
    setTimeout(()=>{
        checkWin();
    },300)
}

function unflipCards(){
    locked = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');   

        reset();
    }, 1500);

}

function reset(){
    [hasFlippedCard, locked] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkWin(){
    if (win === 0){
        alert('CONGRATULATIONS');
    }
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 20);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));

