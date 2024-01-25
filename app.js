const input = document.querySelector("input");

input.addEventListener("input", () => {
	const value = input.value;
	console.log(`The value is ${value}`);
});
