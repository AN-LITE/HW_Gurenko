'use strict'

void function () {

    const tab = document.createElement('table');
    let step = 1;

    for(let i = 0; i < 10 ; i++){
        const row = document.createElement('tr')

        for(let j = 0; j < 10; j++){
            const col = document.createElement('td')

            col.innerHTML = step++
            row.append(col)
        }

        tab.append(row)
    }

    document.body.append(tab)

}();