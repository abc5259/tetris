var 스크린 = document.querySelector('#screen');

var 상태 = {

};
var 시작시간; //스코프로인해 여기에 변수 설정
var 끝시간;
var 기록 = [];
var 타임아웃;

스크린.addEventListener('click', function(e){  //id가 screen인 div태그 클릭시 이벤트
	if(스크린.classList.contains('waiting')) { //class가 waiting인 태그 클릭시 
		스크린.classList.remove('waiting'); //waiting  class 삭제
		스크린.classList.add('ready');      // ready class 추가
		스크린.textContent = '초록색이 되면클릭하세요.';

		타임아웃 = setTimeout(function(){ //자동으로 클릭해주는 이벤트(?)
			시작시간 = new Date();  //자동클릭후 시간측정
			스크린.click();
		}, Math.floor(Math.random()*1000) + 2000); //2000 ~ 3000 수
	}
	else if(스크린.classList.contains('ready')) { //class가 ready인 태그 클릭시 
		if(!시작시간){ //부정클릭 방지
			clearTimeout(타임아웃);
			스크린.classList.remove('ready'); //now class 삭제
			스크린.classList.add('waiting');      // waiting class 추가
			스크린.textContent = '너무 성급하시군요! 다시클릭해서 시작해 보세요.'
		}else {
			스크린.classList.remove('ready'); //ready  class 삭제
			스크린.classList.add('now');      // now class 추가
			스크린.textContent = '클릭하세요!'
		}
	}
	else if(스크린.classList.contains('now')) { //class가 now인 태그 클릭시 
		끝시간 = new Date();
		console.log('반응속도',(끝시간 - 시작시간)/1000,'ms');
		기록.push((끝시간 - 시작시간)/1000);
		시작시간 = null;
		끝시간 = null;
		스크린.classList.remove('now'); //now class 삭제
		스크린.classList.add('waiting');      // waiting class 추가
		스크린.textContent = '클릭해서 시작해 보세요.'
	}
});