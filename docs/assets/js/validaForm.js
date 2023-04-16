export function validaInput(input){

    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){ 
        input.parentElement.classList.remove("form__inputs--invalid");
        input.parentElement.querySelector(".form__input__message__error").innerHTML="";
    }else{
        input.parentElement.classList.add("form__inputs--invalid");
        input.parentElement.querySelector(".form__input__message__error").innerHTML=mostrarMensajeDeError(tipoDeInput, input);
    }
}

export function validaTextarea(textarea){

    const textareaDeTipo = textarea.dataset.tipo;
    if(textarea.validity.valid){ 
        textarea.parentElement.classList.remove("form__textareas--invalid");
        textarea.parentElement.querySelector(".form__textarea__message__error").innerHTML="";
    }else{
        textarea.parentElement.classList.add("form__textareas--invalid");
        textarea.parentElement.querySelector(".form__textarea__message__error").innerHTML=mostrarMensajeDeError(textareaDeTipo, textarea);
    }
} 

const tipoDeErrores =[
    "typeMismatch",
    "valueMissing",
    "patternMismatch",

];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio",
    },
    mensaje: {
        valueMissing: "Este campo mensaje no puede estar vacio",
    },
    password: {
        valueMissing: "Este campo contrseña no puede estar vacio",
        /* patternMismatch: "Al menos 6 caracteres, máximo 12, debe conteer una letra minúscula, una letra mayúscula, un número y no puede conetener caracteres especiales", */
    },
    imagen:{
        valueMissing: "El campo imagen no puede estar vacio",
    },
    categoria:{
        valueMissing: "El campo categoria no puede estar vacio",
    },
    producto:{
        valueMissing: "El campo producto no puede estar vacio",
    },
    precio:{
        valueMissing: "El campo precio no puede estar vacio",
    },
    descripcion:{
        valueMissing: "El campo descripcion no puede estar vacio",
    }
};

function mostrarMensajeDeError (tipoDeElemento, elemento){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(elemento.validity[error]){
            mensaje = mensajesDeError[tipoDeElemento][error];
        }
    })
    return mensaje;
}