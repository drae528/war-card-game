export const load = async () => {
	const suits = ['heart', 'diamond', 'spade', 'club'];
	const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

	let deck = [];
	suits.forEach((suit) => {
		values.forEach((value) => {
			let card = {
				suit,
				value
			};
			deck.push(card);
		});
	});

	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}

	const half = deck.length / 2;
	let playerDeck = deck.slice(0, half);
	let enemyDeck = deck.slice(half);

	return {
		playerDeck,
		enemyDeck
	};
};
