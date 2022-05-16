//テーブルの列見出し
let lineName = ['参照のみ'];
//テーブルの行見出し　※空の場合全指定
let columnName = [];
//チェックボックスのTrue/False設定
let checkboxStatus = true;

let cellsTable = document.querySelectorAll('table');
cellsTable.forEach(function(cTlltable){
	let cellsTr = cTlltable.querySelectorAll('tr');
	cellsTr.forEach(function(cellTr){
		if(columnName.length != 0){
			columnName.forEach(function(colu){
				if(cellTr.firstElementChild.innerText == colu){
					console.log('部分チェック');
					console.log('★行見出し：'+cellTr.firstElementChild.innerText);
					checkLogic(cellTr);
				}
			});
		}else{
			console.log('全チェック');
			checkLogic(cellTr);
		}
	});
});

function checkLogic(cellTr){
	let cellsTd = cellTr.querySelectorAll('td');
	cellsTd.forEach(function(cellTd){
		if(cellTd.getElementsByTagName('input').length > 0) {
			lineName.forEach(function(ln){
				if(cellTd.firstElementChild.type == 'checkbox' && ~cellTd.firstElementChild.title.indexOf(ln)) {
					cellTd.firstElementChild.checked = checkboxStatus;
				}
			});
		}
	});
}