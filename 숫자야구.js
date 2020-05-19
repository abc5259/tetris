



var 결과 = document.createElement('h1');
document.body.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'text';
폼.append(입력창);
입력창.maxLength = 4; 
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

function t() {
	var 숫자후보 = [1,2,3,4,5,6,7,8,9];
	 숫자배열 = [];
	for (var i = 0; i < 4; i += 1) {
		var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
			숫자배열.push(뽑은것);
		}
	}
	t();
console.log(숫자배열);


폼.addEventListener('submit',function(event){
	event.preventDefault();
	var 답 = 입력창.value;
	if (답 === 숫자배열.join('')){
		결과.textContent = "홈런";
		입력창.textContent = '';
		입력창.focus();
		t();
	} else {
		var 답배열 = 답.split('');
		var 스트라이크 = 0;
		var 볼 = 0;
		var 아웃 = 0;
		for (var i = 0; i<4; i +=1){
			if(Number(답배열[i]) === 숫자배열[i]){
				스트라이크 ++;
			}
			else if(숫자배열.indexOf(Number(답배열[i])) > -1 ){
				볼++;
			}
			else {
				아웃++
			}
		}
		결과.textContent = 스트라이크 + '스트라이크' + 볼 + '볼' + 아웃 + '아웃';
		입력창.textContent = '';
		입력창.focus();
	}
});


//답배열[i] === 숫자배열[0] || 답배열[i] === 숫자배열[1] || 답배열[i] === 숫자배열[2] || 답배열[i] === 숫자배열[3]














































