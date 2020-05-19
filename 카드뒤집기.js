var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red','red','orange','orange','green','green','yellow','yellow','white','white','pink','pink'];
var 색깔후보 = 색깔들.slice();
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간;
function 셔플 (){
	for (var i =0; 색깔후보.length > 0; i++){
		색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random()*색깔후보.length),1));
	}
}
셔플();

function 카드세팅(가로, 세로) {
	클릭플래그 = false;
	for (var i =0; i < 가로*세로; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		var cardInner = document.createElement('div');
		cardInner.className = 'cardInner';
		var cardFront = document.createElement('div');
		cardFront.className = 'cardFront';
		var cardBack = document.createElement('div');
		cardBack.className = 'cardBack';
		cardBack.style.backgroundColor = 색깔[i];
		cardInner.appendChild(cardFront);
		cardInner.appendChild(cardBack);  // --> body > card > cardInner > cardFront + cardBack
		card.appendChild(cardInner);
		(function(c){
			c.addEventListener('click',function(){
				if (클릭플래그 && !완성카드.includes(c)){
					c.classList.toggle('flipped');
					클릭카드.push(c);
					if(클릭카드.length === 2){
						if(클릭카드[0].querySelector('.cardBack').style.backgroundColor ===
							클릭카드[1].querySelector('.cardBack').style.backgroundColor){
							완성카드.push(클릭카드[0]);
							완성카드.push(클릭카드[1]);
							클릭카드 = [];	
							if (완성카드.length === 가로*세로){
								var 끝시간 = new Date;
								var 타이머 = Math.abs((시작시간 - 끝시간) / 1000)
								alert('축하합니다 성공 !!'+ 타이머 + '초 걸렸습니다.');
								document.querySelector('#wrapper').innerHTML = '';
								색깔후보 = 색깔들.slice();
								색깔 = [];
								셔플();
								완성카드 = [];
								카드세팅(가로,세로);
							}
						}else {
							클릭플래그 = false;
							setTimeout(function(){
								클릭카드[0].classList.remove('flipped');
								클릭카드[1].classList.remove('flipped');
								클릭플래그 = true;
								클릭카드 = [];
							},1000);
						}
					}
				}
			});
		})(card);
		document.querySelector('#wrapper').appendChild(card);
	}

	document.querySelectorAll('.card').forEach(function(card,index){
		setTimeout(function(){
			card.classList.add('flipped');
		},1000 + 100 * index);
	});

	setTimeout(function(){
		document.querySelectorAll('.card').forEach(function(card,index){
			card.classList.remove('flipped');
		});
		클릭플래그 = true;
		시작시간 = new Date();
	},5000);
	
}

카드세팅(가로,세로);





























