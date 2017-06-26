var one = document.getElementById('pierwsza');
var two = document.getElementById('druga');
var wynik = document.getElementById('wynik');


function add(){
	var l1 = parseFloat(one.value) || 0;
	var l2 = parseFloat(two.value) || 0;

	wynik.innerHTML = (l1+l2);
}

one.addEventListener('input',add);
two.addEventListener('input',add);