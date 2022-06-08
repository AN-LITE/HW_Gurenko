'use strict'

void function (){

    const formSelect = '#form';
    const form = document.querySelector(formSelect);

    const submitHandler = e => {

        e.preventDefault();

        const inputs = e.target.querySelectorAll('input, textarea , select')
        const data = {}

        for (const input of inputs){

            data[input.name] = input.value
        }
        
        localStorage
            .setItem(formSelect ,
            JSON.stringify(data)
        );

        window.location.replace('./form.html');
    }

    form.addEventListener('submit', submitHandler);
}();
