

//Verificaciones
const formulario = document.getElementById("contact-form");
const inputs = document.querySelectorAll("#contact-form input");

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar tildes.
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	mailSender: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (event) => {
    //identifico que input se modifica y doy instrucciones en función de eso
    switch (event.target.name) {
		case "name":
            //si la expresión regular se cumple...
			if(expresiones.name.test(event.target.value)){
                //cambio color
                document.getElementById("contact-form__name").classList.remove("contact-form__item-incorrecto")
                document.getElementById("contact-form__name").classList.add("contact-form__item-correcto")
                //cambio ícono
                document.querySelector("#contact-form__name i").classList.remove("fa-times-circle")
                document.querySelector("#contact-form__name i").classList.add("fa-check-circle")
                //saco mensaje de error
                document.querySelector("#contact-form__name .formulario__input_error").classList.remove("formulario__input_error-activo")
            } else {
                //si es incorrecto, le agrego la clase de css con dichos estilos
                document.getElementById("contact-form__name").classList.add("contact-form__item-incorrecto")
                document.getElementById("contact-form__name").classList.remove("contact-form__item-correcto")
                document.querySelector("#contact-form__name i").classList.add("fa-times-circle")
                document.querySelector("#contact-form__name i").classList.remove("fa-check-circle")
                document.querySelector("#contact-form__name .formulario__input_error").classList.add("formulario__input_error-activo") //ME CORRE EL ICONO. CORREGIR
            }
		break;
		case "lastName":
            //me di cuenta de que en lastName y capaz en los demás casos, voy a tener q hacer un if else muy parecido asiq próximamente voy a hacer una función con eso y referenciarla en cada case
		break;
		case "mailSender":

		break;
		case "phone":

		break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario); //cuando levanta la tecla
    input.addEventListener("blur", validarFormulario); //cuando hace click afuera
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

});




//Envío de formulario por mail
const $form = document.querySelector("#contact-form");
const $buttonMailto = document.querySelector("#mailReceiver");

$form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault(); //Deshabilito la recarga de la pág que ocurría predeterminadamente al presionar submit
    const form = new FormData(this); //De donde extraigo la data (this refiere al elemento que está llamando a la función)
    
    let formName = form.get("name");
    let formLastName = form.get("lastName");
    let formMailSender = form.get("mailSender");
    let formPhone = form.get("phone");
    let formMessage = form.get("message");

    $buttonMailto.setAttribute("href", `mailto:alejfernandez1999@gmail.com?subject=Nuevo Contacto desde pág web! &body=nombre:${formName} ${formLastName}\nMail:${formMailSender}\nTeléfono:${formPhone}\nMensaje:${formMessage}`);
    $buttonMailto.click();
}