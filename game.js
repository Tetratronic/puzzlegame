const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkMatch();
}

function checkMatch(){
    if(firstCard.firstElementChild.src == secondCard.firstElementChild.src){
        console.log('success');
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');   
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));

