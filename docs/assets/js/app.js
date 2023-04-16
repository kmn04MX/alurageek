import { transitionSearch } from "./transitionSearch.js";
import { changeClass } from "./changeClassSearch.js";
import { validaInput } from "./validaForm.js";
import { validaTextarea } from "./validaForm.js";
import { boton } from "./btnForm.js";

const transition = () =>{
    const pantallaNavegador = window.outerWidth;
    if(pantallaNavegador>0 && pantallaNavegador <768){
        transitionSearch();
    }

    
};


const changeClassSearch = () => {
    const screenResolution  = window.outerWidth;
    if(screenResolution >= 768){
        changeClass();
    }
};

const resizeScreen = () => {
    /* window.addEventListener('resize', () =>{
        location.reload();
    }); */
};

const validInput = () =>{
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) =>{
        input.addEventListener('blur', (event)=>{
            validaInput(event.target);
        });
    });
};


const validTextarea = () =>{
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea)=>{
        textarea.addEventListener('blur',(event)=>{
            validaTextarea(event.target);
        });
    });
};


resizeScreen();
changeClassSearch();
transition();
validInput();
validTextarea();
boton();

