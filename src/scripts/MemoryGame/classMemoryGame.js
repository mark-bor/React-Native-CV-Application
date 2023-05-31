class MemoryGame {
	constructor() {
        this.flippedCards = [];
        this.setFlip = [];
		this.delay = 1000;
	}

	rearrangeCards() {
		this.cards.forEach(card => {
			const randomNumber = Math.floor(Math.random() * this.cards.length) + 1;
			card.classList.remove('has-match');
			setTimeout(() => {
				card.style.order = `${randomNumber}`;
			}, 400);
		})
	}

	validateCards() {
        const [firstCard, secondCard] = this.flippedCards;
        const [firstFlip, secondFlip] = this.setFlip;
		if (firstCard === secondCard) {
            firstFlip({front: 180.0, back: 0.0});
            secondFlip({front: 180.0, back: 0.0});
            this.flippedCards = [];
            this.setFlip = [];
            // setTimeout(() => {
            //     const allHaveMatches = this.cards.every(card => (
            //         card.classList.contains('has-match')
            //     ));
            //     this.cardsContainer.classList.remove('no-event');
            //     if (allHaveMatches) {
            //         this.rearrangeCards();
            //     }
            // }, this.delay);
		}
		else {
            setTimeout(() => {
                firstFlip({front: 0, back: 180});
                secondFlip({front: 0, back: 180});
                this.flippedCards = [];
                this.setFlip = [];
			}, this.delay);
		}
	}

	flip(card, setRotate) {
        if (this.flippedCards.length < 2) {
            setRotate({front: 180, back: 0})
            this.flippedCards.push(card);
            this.setFlip.push(setRotate);
            if (this.flippedCards.length === 2) {
                this.validateCards();
            }
        }
	}
}

export const classMemoryGame = new MemoryGame();
