var 컴퓨터 = 0;
var dictionary = {
	가위 : -210,
	바위 : 0,
	보 : -105,
}

function 컴퓨터선택(컴퓨터){
	return Object.entries(dictionary).find(function(v){
			return v[1] === 컴퓨터;
})[0];
}
var 인터벌;
function 인터벌메이커(){
	 인터벌 = setInterval(function(){
	if (컴퓨터 === dictionary.바위){
		컴퓨터 = dictionary.보;
	}else if (컴퓨터 === dictionary.보){
		컴퓨터 = dictionary.가위;
	}else {
		컴퓨터 = dictionary.바위;
	}
	document.querySelector('#computer').style.backgroundPosition = 컴퓨터 + 'px';
}, 100);
}
인터벌메이커();

var 점수판 = {
	가위 : 1,
	바위 : 0,
	보 : -1,
}
console.log(점수판['가위']);
document.querySelectorAll('.btn').forEach(function(btn){
	btn.addEventListener('click',function(){
		clearInterval(인터벌);
		setTimeout(function(){
			인터벌메이커();
			
		},1000);
		console.log(점수판.가위);
		if(점수판[this.textContent] - 점수판[컴퓨터선택(컴퓨터)] === 0){
			console.log('비겼습니다.');
		}else if ([-1,2].includes(점수판[this.textContent] - 점수판[컴퓨터선택(컴퓨터)])){
			console.log('이겼습니다!');
		}else {
			console.log('졌습니다 ㅜㅜ.');
		}
	});
});
	

















