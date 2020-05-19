var table = document.createElement('table');
document.body.append(table);
var trs = [];   //줄들
var tds = [];   // 칸들
var turn = 'X'; //턴 x,o
var wt_trs;
var wt_tds;
function 결과체크(몇줄 ,몇칸){
		var full = false;
		//가로줄 검사
		if(tds[몇줄][0].textContent === turn && 
			tds[몇줄][1].textContent === turn && 
			tds[몇줄][2].textContent === turn){
			full = true;
		}
		// 세로줄 검사
		if(tds[0][몇칸].textContent === turn && 
			tds[1][몇칸].textContent === turn && 
			tds[2][몇칸].textContent === turn ){
			full = true;
		}
		//대각선 검사
		if(몇칸 - 몇줄 === 0){ //대각선 검사 필요한 경우
			if(tds[0][0].textContent === turn &&
				tds[1][1].textContent === turn &&
				tds[2][2].textContent === turn){
				full = true;
			}
		}
		if(Math.abs(몇칸 - 몇줄) === 2){
			if(tds[2][0].textContent === turn &&
				tds[0][2].textContent === turn &&
				tds[1][1].textContent === turn){
				full = true;
			}
		}
		return full;
}
function 초기화(누구){
	setTimeout(function(){
			alert(누구 + '승리!')
			//초기화
			turn = 'X';
			tds.forEach(function (tr){
			tr.forEach(function(td){
			td.textContent = '';
		});
	});

	},1000);
} 

var callback = function(event){   
	if (turn === 'O'){ //컴퓨터의 턴일때 내가 클릭하지않도록 
		return;
	}
	wt_trs = trs.indexOf(event.target.parentNode);
	wt_tds = tds[wt_trs].indexOf(event.target);
	if (tds[wt_trs][wt_tds].textContent !== ''){ //칸이 이미 채워져 있는가?
		console.log('빈칸이아닙니다.');
	}else {
		console.log('빈칸입니다.');
		tds[wt_trs][wt_tds].textContent = turn;
			//세 칸 다 채웠나?
		var full = 결과체크(wt_trs,wt_tds);
		if(full){
			초기화('나의');
		}else { 
		if (turn === 'X'){
		 	turn = "O";
		 }
		 setTimeout(function(event){
		 	console.log('컴퓨터의 턴입니다.')
		 	//빈칸중 하나를 고른다.
		 	var 후보칸 = [];
		 	tds.forEach(function(줄){
		 		줄.forEach(function(칸){
		 			후보칸.push(칸);
		 		});
		 	});
		 	후보칸 = 후보칸.filter(function(td){return td.textContent ===''; });
		 	var 선택칸 = 후보칸[Math.floor(Math.random()*후보칸.length)];
		 	if (!선택칸){
				alert('무승부!')
				turn = 'X';
				tds.forEach(function (tr){
					tr.forEach(function(td){
						td.textContent = '';
					});
				});
			}else{
				선택칸.textContent = turn;
				var cu_trs = trs.indexOf(선택칸.parentNode);
				console.log('몇줄?', cu_trs);
				var cu_tds = tds[cu_trs].indexOf(선택칸);
				console.log('몇칸?', cu_tds);

			 	//컴퓨터가 승리했는지 체크
			 	console.log(cu_tds);
				var full = 결과체크(cu_trs,cu_tds);
				console.log(full);
				//다찼으면
				if (full){
					초기화('컴퓨터의');
				}
			 	//턴을 나한테 넘긴다.
			 	turn = 'X';
				}
		 },1000);
		}  
	}
};

for (i=0; i<3; i++){
	var tr = document.createElement('tr');
	table.appendChild(tr);
	trs.push(tr);
	tds.push([]);
	for (var j = 0; j < 3; j++){
		var td = document.createElement('td');
		tr.appendChild(td);
		td.addEventListener('click',callback);
		tds[i].push(td);
	}
}















