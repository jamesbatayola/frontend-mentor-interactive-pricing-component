const input = document.querySelector("input");

const switchButton = document.querySelector(".switch");

input.addEventListener("input", () => {
	const value = input.value;
	console.log(`The value is ${value}`);
});

switchButton.addEventListener("click", () => {
	switchButton.classList.toggle("active");
});
