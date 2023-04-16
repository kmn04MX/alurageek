

export function transitionSearch(){
    const search = document.querySelector('.header__search');
    const headerContainer = document.querySelector('.header__container');
    const input = document.querySelector('.header__input');
    const iconX = document.querySelector('.header__icon');
    const button = document.querySelector('.btnlink--header__button')
    const iconSearch = document.querySelector('.header__icon__search');
    iconX.addEventListener('click', () => {
        headerContainer.classList.toggle('header__container--activate');
        headerContainer.classList.toggle('header__container');
        search.classList.toggle('header__search--active');
        search.classList.toggle('header__search');
        search.classList.toggle('active');
        input.classList.toggle('header__input--active');
        input.classList.toggle('header__input');
        iconX.classList.toggle('header__icon--active');
        iconX.classList.toggle('header__icon');
        iconX.classList.toggle('fa-x');
        iconX.classList.toggle('fa-magnifying-glass');

        button.classList.toggle('btnlink--header__button__activate');
        button.classList.toggle('btnlink--header__button');

        iconSearch.classList.toggle('header__icon__search');
        iconSearch.classList.toggle('header__icon__search--activate');

        input.value="";

        
    });
    
    
}

const searchActivate = document.querySelector(".header__icon__search");
        searchActivate.addEventListener('click', () =>{
            alert("Diste click al search");
        });



