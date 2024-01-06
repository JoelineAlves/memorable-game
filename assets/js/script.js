document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            name: 'bicycle',
            img: 'assets/images/bicyle.jpg',
        },
        {
            name: 'ramp',
            img: 'assets/images/ramp.png',
        },
        {
            name: 'round',
            img: 'assets/images/round.jpg',
        },
        {
            name: ' school', img: ' assets/images/school.png',
        },
        {
            name: ' stop', img: ' assets/images/stop.png',
        },
        {
            name: 'table',
            img: 'assets/images/table.jpg',
        },
        {
            name: 'bicycle',
            img: 'assets/images/bicycle.jpg',
        },
        {
            name: 'ramp',
            img: 'assets/images/ramp.png',
        },
        {
            name: 'round',
            img: 'assets/images/round.jpg',
        },
        {
            name: 'school',
            img: 'assets/images/school.png',
        },
        {
            name: 'stop',
            img: 'assets/images/stop.png',
        },
        {
            name: 'table',
            img: 'assets/images/table.jpg',
        }
    ]; //shuffle all the cards;
    cards.sort(() => 0.5 - Math.random());
    //load html elements into script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = []; // chosen cards
    let cardsChosenId = []; // id of chosen cards
    let cardsWon = []; // combined cards

    //combination checking
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //check if you choose the same image
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/table.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/images/table.jpg');
            alert('You choose the same image');
        }
        //check combination if click on different images
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'assets/images/check.png');
            cards[optionTwoId].setAttribute('src', 'assets/images/check.png');
            /    /remove the flip card action;
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            alert('you find the combination');

        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/table.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/images/table.jpg');
            alert('Wrong chose, try again');
        }

    }

    //create the card table
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'assets/images/school.png');
            card.setAttribute('data-id', i); // to know the id of each card
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }

    }
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
        //make sure it matches
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch(), 500);
        }

    }
    createBoard();

});