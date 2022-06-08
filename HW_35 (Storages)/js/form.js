'use strict'

void function (){

    const loadHandler = () => {

        if(!localStorage.getItem('#form')){

            alert('Data not filled')
        
        }else {
            const data = JSON.parse(localStorage.getItem('#form'))
            const formInfo = document.querySelector('.form-info');
            const ulList = document.createElement('ul')
           

            for (const item in data){
                const li = document.createElement('li');
                
                li.innerHTML = `${item} : ${data[item]}`;
                ulList.append(li);

            }
            formInfo.append(ulList);
        }  
    }

   document.addEventListener('DOMContentLoaded' , loadHandler)
}();


