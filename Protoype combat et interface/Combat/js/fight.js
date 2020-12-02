//les variables dont j'ai besoin pour les combats 
var playerMove;
var enemyMove;
var savedEnemyMove;
var playerHealth = 100;
var enemyHealth = 100;
var totRounds = 0;
var res;
var playByPlay = document.getElementById('announcements');
var playerHealthBar = document.getElementById('playerHealthBar');
var enemyHealthBar = document.getElementById('enemyHealthBar');
var attackButton = document.getElementById('enemyHealthBar');
var attackButton = document.getElementById('attack');
var counterButton = document.getElementById('counter');
var playagain = document.getElementById('playAgain');
//Activer les boutons 
function enableButtons () {
	attackButton.disabled = false;
	counterButton.disabled = false;
}
//Ajout de round à chaque fin de tour si il reste un des deux en vie  
function addRound() {
	totRounds += 1;
}
//L'historique des attaques ! 
function roundResults (res) {
	playByPlay.innerHTML += res + "<br>";
}
//Les barres de PV qui tombent quand on en perds 
function healthChange() {
	playerHealthBar.style.width = playerHealth + "%";
	enemyHealthBar.style.width =  enemyHealth + "%";
}

//Les contres
function counter(y, c) {
	var move = Math.floor((Math.random() * 5));
	if ( move >= 3 && y === 'attack') {
		res = 'Contre ennemi! Tu perds 10 PV';
		playerHealth -= 10;
	} else if(move >= 3 && y === 'counter') {
		res = 'Superbe contre! Ennemi perd 10 PV';
		enemyHealth -=10
	} else if (move < 3 && y === 'attack') {
		res = 'Echec du contre ennemi! Tu enlève 15 PV !';
		enemyHealth -= 15;
	} else if (move < 3 && y === 'counter') {
		res = 'Tu rate le contre! Tu perds 15 PV !';
		playerHealth -= 15;
	}
}
//Choix aléatoire de l'ennemi
function enemyMove(id) {
	var move = Math.floor((Math.random()*4)+1);
	if (move <= 3) {
		savedEnemyMove =  'attack';
	} else {
		savedEnemyMove = 'counter';
	};
	res = ('Tu choisis <span>'+ id + '</span> et ennemi choisit <span>' + savedEnemyMove + '</span> au tour ' + totRounds);
	damageStep(id, savedEnemyMove);
	roundResults(res);
}
//Les attaques par tour 
function damageStep(y, c) {
	if ( y === 'attack' && c === 'attack') {
		res = 'Vous vous blessez mutuellement';
		if (enemyHealth >= 10 && playerHealth >= 10) {
			enemyHealth -= 10;
			playerHealth -= 10;
		} else {
			enemyHealth = 0;
			playerHealth = 0;
		}
	} else if ( y === 'counter' && c === 'counter') {
		res = 'Defense en vain';
	} else if ( y === 'attack' && c === 'counter') {
		res = 'Ennemi contre';
		counter(y, c);
	} else if ( y === 'counter' && c === 'attack') {
		res = 'Tu contre';
		counter(y, c);
	}
}
//La fin du round 
function fight(id) {
	addRound();
	enemyMove(id);
	healthChange();
	gameOver();
}
//La loose 
function gameOver() {
	if (playerHealth === 0 || enemyHealth === 0) {
		res = 'gameOver!';
		roundResults(res);
		attackButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = true;
	}
}
//Demarrage 
window.onload=enableButtons();