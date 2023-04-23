// ========================================================================================

// Бургер-меню
import burgerMenu from './functions/burger';
burgerMenu();


// ========================================================================================


// Модальное окно
import popup from './functions/popup'
const requestPopup = new popup();

// ========================================================================================


// Табы
// import tabs from "./functions/tabs";
// tabs();



// ========================================================================================


// Файл со слайдерами
import "./functions/sliders";


// ========================================================================================


import validateForms from './functions/validate-forms';
const feedbackFormRules = [{
        ruleSelector: '.feedback-form__input--name',
        rules: [{
                rule: 'minLength',
                value: 3,
                errorMessage: 'Имя должно состоять как минимум из :value символов'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните имя!'
            }
        ]
    },
    {
        ruleSelector: '.feedback-form__input--tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!'
        }]
    },
];
const requestFormRules = [{
        ruleSelector: '.request__label--name input',
        rules: [{
                rule: 'minLength',
                value: 3,
                errorMessage: 'Имя должно состоять как минимум из :value символов'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните имя!'
            }
        ]
    },
    {
        ruleSelector: '.request__label--tel input',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!'
        }]
    },
];


const afterForm = () => {
    console.log('Произошла отправка');
};
if (document.querySelector('.feedback-form')) {
    validateForms('.feedback-form', feedbackFormRules, afterForm);
}
if (document.querySelector('.request__body')) {
    validateForms('.request__body', requestFormRules, afterForm);
}



// ========================================================================================



// Спойлеры
import spollers from "./functions/spollers";
spollers();



// ========================================================================================



// Звёздный рейтинг 
// import formRating from "./functions/rating";
// formRating();



// ========================================================================================



// quantity
// import quantity from './functions/quantity'
// quantity();


// ========================================================================================


// Динамический адаптив
import "./functions/dynamic-adapt";


// ========================================================================================


// Фикс фулскрин-блоков
import './functions/fix-fullheight';


// ========================================================================================
