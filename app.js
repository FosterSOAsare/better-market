// Form validation
(function () {
	let form = document.querySelector("form");
	let inputs = document.querySelectorAll("form input");
	let labels = document.querySelectorAll("form label");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		let formData = new FormData(form);
		let email = formData.get("email");
		let name = formData.get("name");
		let password = formData.get("password");

		// Checking for empty fields and display error
		let emptyFields = ["email", "name", "password"].filter((e) => !formData.get(e));
		if (emptyFields?.length) {
			emptyFields.forEach((emptyField) => {
				displayError(emptyField, "Field is empty");
			});
			return;
		}
		// Validate email
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			displayError("email", "Email is invalid");
			return;
		}
		// Validate name
		if (!/^[a-z ,.'-]+$/i.test(name)) {
			displayError("name", "Full name is invalid");
			return;
		}

		// Validate password
		if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
			displayError("password", "password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters");
			return;
		}

		// Do something with data here
		let data = formData.entries();
		let result = {};
		for (let value of data) {
			result[value[0]] = value[1];
		}

		alert(JSON.stringify(result));
	});

	// Clear Error on field focus
	inputs.forEach((input, index) => {
		input.addEventListener("focus", () => {
			inputs.forEach((e) => {
				e.style.borderBottomColor = "#343434";
			});
			labels.forEach((e) => {
				e.style.color = "black";
			});
		});
	});
})();

function displayError(selector, text) {
	let form = document.querySelector("form");
	let form_element = form.querySelector(`#${selector}`);
	let input = form_element.querySelector("input");
	let label = form_element.querySelector("label");
	input.style.borderBottomColor = "red";
	label.style.color = "red";
}
