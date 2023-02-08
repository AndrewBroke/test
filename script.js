let login = document.querySelector("#login")
let password = document.querySelector("#password")
let button = document.querySelector("#button")

function onSubmit(event){
	event.preventDefault() // Предотвращает отправку данных
	let loginValue = login.value
	let passwordValue = password.value
	console.log("Логин: " + loginValue)
	console.log("Пароль: " + passwordValue)
	// Здесь может быть какая-нибудь отправка данных куда-нибудь (на почту, сервер и т.д.)
	alert("Ошибка отправки данных, пожалуйста, попробуйте еще раз. Если не получится, то выключите компьютер")
	window.location.replace("https://google.com")
}

button.addEventListener("click", onSubmit)