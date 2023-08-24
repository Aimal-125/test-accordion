let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let div = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let btn3 = document.querySelector("#btn3");
let div3 = document.querySelector(".div3");

btn.addEventListener("click", () => {
	let divExpansion = div.classList;
	let btnMovement = btn.classList;
	let divExpansion2 = div2.classList;
	let btnMovement2 = btn2.classList;
	let divExpansion3 = div3.classList;
	let btnMovement3 = btn3.classList;
	divExpansion.toggle("divExpand");
	btnMovement.toggle("btnMove");
	if(divExpansion) {
		divExpansion2.remove("divExpand2");
		btnMovement2.remove("btnMove2");
		divExpansion3.remove("divExpand3");
		btnMovement3.remove("btnMove3");
	}
});

btn2.addEventListener("click", () => {
	let divExpansion = div.classList;
	let btnMovement = btn.classList;
	let divExpansion2 = div2.classList;
	let btnMovement2 = btn2.classList;
	let divExpansion3 = div3.classList;
	let btnMovement3 = btn3.classList;
	divExpansion2.toggle("divExpand2");
	btnMovement2.toggle("btnMove2");
	if(divExpansion2) {
		divExpansion.remove("divExpand");
		btnMovement.remove("btnMove");
		divExpansion3.remove("divExpand3");
		btnMovement3.remove("btnMove3");
	}
});

btn3.addEventListener("click", () => {
	let divExpansion = div.classList;
	let btnMovement = btn.classList;
	let divExpansion2 = div2.classList;
	let btnMovement2 = btn2.classList;
	let divExpansion3 = div3.classList;
	let btnMovement3 = btn3.classList;
	divExpansion3.toggle("divExpand3");
	btnMovement3.toggle("btnMove3");
	if(divExpansion3) {
		divExpansion.remove("divExpand");
		btnMovement.remove("btnMove");
		divExpansion2.remove("divExpand2");
		btnMovement2.remove("btnMove2");
	}
});