
var l_to_45 = Array(45).fill().map(function(요소,인덱스){
	return 인덱스 + 1;
})  //map 배열 1~45																																																															

var 셔플 = []; // 추첨 공
while (l_to_45.length > 0) {
	var slect = l_to_45.splice(Math.floor(Math.random() * l_to_45.length),1)[0]; //1~45의 숫자를 랜덤하게 빼내옴
	셔플.push(slect); //빼내온 숫자들을 셔플배열에 넣음.
}
console.log(셔플);
var bonus = 셔플[셔플.length -1]; //보너스 공
var 당첨숫자들 = 셔플.slice(0,6); 
console.log('보너스', bonus,"숫자들",당첨숫자들);

var 결과창 = document.getElementById('결과창');

function 공색칠하기(숫자){
	var 공 = document.createElement('div');
	공.textContent = 당첨숫자들[숫자];
	결과창.appendChild(공);
	공.style.display ='inline-block';
	공.style.border ='1px solid black';
	공.style.borderRadius = '10px';
	공.style.width = '20px';
	공.style.hight = '20px';
	공.style.textAlign = 'center';
	공.style.marginRight = '15px'
	var color;
	if (당첨숫자들[숫자] <= 10){
		color = 'red';
	}else if (당첨숫자들[숫자] <= 20){
		color = 'orange';
	}else if (당첨숫자들[숫자] <= 30){
		color = 'yellow';
	}else if(당첨숫자들[숫자] <= 40){
		color = 'blue';
	}else {
		color = 'green';
	}
	공.style.background = color;
}
for(var i = 0; i<당첨숫자들.length; i++){
	(function (j){
		setTimeout(function(){
		공색칠하기(j);
		}, (j+1) * 1000);
	})(i);
}
setTimeout(function(){
	var 보너스칸 = document.getElementsByClassName('bonus')[0];
	var 보너스공 = document.createElement('div');
	보너스공.textContent = bonus;
	보너스칸.appendChild(보너스공);
	보너스공.style.display ='inline-block';
	보너스공.style.border ='1px solid black';
	보너스공.style.borderRadius = '10px';
	보너스공.style.width = '20px';
	보너스공.style.hight = '20px';
	보너스공.style.textAlign = 'center';
},7000);









