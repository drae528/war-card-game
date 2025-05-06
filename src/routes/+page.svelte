<script>
	import CardElement from '$lib/components/CardElement.svelte';

	let { data } = $props();

	let playerDeck = $state(data.playerDeck);
	let pCard = $derived(() => playerDeck[0]);

	let enemyDeck = $state(data.enemyDeck);
	let eCard = $derived(() => enemyDeck[0]);

	let winState = $derived.by(() => {
		if (!pCard || !eCard) return 'error';
		if (eCard.value > pCard.value) return 'enemy';
		if (eCard.value < pCard.value) return 'player';
		return 'draw';
	});
	let warState = $state('');

	function flipCard() {
		if (winState === 'enemy') {
			let currentCard = eCard;
			enemyDeck = [...enemyDeck.slice(1), currentCard, pCard];
			playerDeck = playerDeck.slice(1);
		} else if (winState === 'player') {
			let currentCard = pCard;
			playerDeck = [...playerDeck.slice(1), currentCard, eCard];
			enemyDeck = enemyDeck.slice(1);
		} else if (winState === 'draw') {
			if (enemyDeck.length > 4 && playerDeck.length > 4) {
				const pWarCards = playerDeck.slice(0, 4);
				const eWarCards = enemyDeck.slice(0, 4);

				const pWarCard = pWarCards[3];
				const eWarCard = eWarCards[3];

				if (pWarCard.value > eWarCard.value) {
					playerDeck = [...playerDeck.slice(4), ...pWarCards, ...eWarCards];
					enemyDeck = enemyDeck.slice(4);
					warState = 'WAR WON!';
				} else if (pWarCard.value < eWarCard.value) {
					enemyDeck = [...enemyDeck.slice(4), ...eWarCards, ...pWarCards];
					playerDeck = playerDeck.slice(4);
					warState = 'WAR LOST!';
				} else {
					playerDeck = playerDeck.slice(4);
					enemyDeck = enemyDeck.slice(4);
					warState = 'WAR DRAW!';
				}
			} else {
				if (playerDeck.length > enemyDeck.length) {
					playerDeck = [...playerDeck, ...enemyDeck];
					enemyDeck = [];
				} else if (playerDeck.length < enemyDeck.length) {
					enemyDeck = [...enemyDeck, ...playerDeck];
					playerDeck = [];
				}
			}
		}

		pCard = playerDeck[0];
		eCard = enemyDeck[0];

		console.log('PLAYER ' + playerDeck.length);
		console.log('ENEMY ' + enemyDeck.length);
	}
</script>

<div class="transform scale-y-[-1]">
	<CardElement value={eCard.value} suit={eCard.suit} />
</div>
{#if winState === 'enemy'}
	<p>YOU LOSE!</p>
{:else if winState === 'player'}
	<p>YOU WIN!</p>
{:else if winState === 'draw'}
	<p>DRAW!</p>
	<p>{warState}</p>
{:else}
	<p>ERROR</p>
{/if}
<CardElement value={pCard.value} suit={pCard.suit} />

<div class="absolute bottom-4 right-8">
	<button class="hover:cursor-pointer" onclick={() => flipCard()}>FLIP</button>
</div>
