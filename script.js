//your JS code here. If required.
let elem = document.querySelector("p")
function addCount(){
	let count = parseInt(elem.textContent)+1
	count=count+"";
	elem.textContent=count;
}