const input = document.querySelector("input");

const discount = document.querySelector(".discount");

const switchButton = document.querySelector(".switch");

const price = document.querySelector(".price");

const pageViews = document.querySelector(".pageviews");

let inputValue;

input.addEventListener("input", (e) => {
	inputValue = input.value;
	input.style.background = `linear-gradient(90deg, var(--Soft-Cyan) ${inputValue}%, var(--Lighter-Grayish-Blue) ${inputValue}%)`;

	switch (inputValue) {
		case "20":
			price.textContent = "$8.00";
			pageViews.textContent = "10K PAGEVIEWS";
			break;

		case "40":
			price.textContent = "$12.00";
			pageViews.textContent = "50K PAGEVIEWS";
			break;

		case "60":
			price.textContent = "$16.00";
			pageViews.textContent = "100K PAGEVIEWS";
			break;

		case "80":
			price.textContent = "$24.00";
			pageViews.textContent = "500K PAGEVIEWS";
			break;

		case "100":
			price.textContent = "$36.00";
			pageViews.textContent = "1M PAGEVIEWS";
			break;

		default:
			break;
	}
});

input.addEventListener("change", function (e) {
	const snapShot = [20, 40, 60, 80, 100];
	const newValue = snapShot.reduce((curr, prev) => {
		return Math.abs(curr - inputValue) < Math.abs(prev - inputValue) ? curr : prev;
	});
	this.value = newValue;
	this.style.background = `linear-gradient(90deg, var(--Soft-Cyan) ${newValue}%, var(--Lighter-Grayish-Blue) ${newValue}%)`;

	switch (newValue) {
		case 20:
			price.textContent = "$8.00";
			pageViews.textContent = "10K PAGEVIEWS";
			break;

		case 40:
			price.textContent = "$12.00";
			pageViews.textContent = "50K PAGEVIEWS";
			break;

		case 60:
			price.textContent = "$16.00";
			pageViews.textContent = "100K PAGEVIEWS";
			break;

		case 80:
			price.textContent = "$24.00";
			pageViews.textContent = "500K PAGEVIEWS";
			break;

		case 100:
			price.textContent = "$36.00";
			pageViews.textContent = "1M PAGEVIEWS";
			break;

		default:
			break;
	}
});

switchButton.addEventListener("click", (e) => {
	switchButton.classList.toggle("active");
});

window.addEventListener("resize", checkWindow);

function checkWindow() {
	if (this.innerWidth >= 745) {
		discount.textContent = "-25% discount";
	} else {
		discount.textContent = "-25%";
	}
}

checkWindow();
