window.addEventListener('DOMContentLoaded', function () {
    let request = new XMLHttpRequest();
    request.open("GET", 'js/cars.json');

    let container = document.querySelector('.container'),
        germany = document.querySelector('.germany'),
        italian = document.querySelector('.italian'),
        france = document.querySelector('.france'),
        divs = [germany, italian, france],
        inputs = document.querySelectorAll('input');
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let cars = response.cars;
            let div = [];
            for (let i = 0; i < cars.length; i++) {
                div[i] = document.createElement('div');
                div[i].innerHTML = `
                <h2>${cars[i].name}</h2>
                <h4>${cars[i].description}</h4>
                <div><img src=${cars[i].img}></div>
                <p>Price: ${cars[i].price}</p>
                <p>Country: ${cars[i].category}</p>
                `;
                if (cars[i].category == 'germany') {
                    germany.appendChild(div[i]);
                    germany.style.display = 'none';
                } else if (cars[i].category == 'italian') {
                    italian.appendChild(div[i]);
                    italian.style.display = 'none';
                } else if (cars[i].category == 'france') {
                    france.appendChild(div[i]);
                    france.style.display = 'none';
                }
                console.log(div);
            }
            console.log(germany.className);
            inputs.forEach(function (elem) {
                elem.addEventListener('change', function () {
                    if (elem.checked) {
                        divs.forEach(function (e) {
                            if (e.classList.contains(elem.id)) {
                                e.style.display = '';
                            }
                        });
                    } else {
                        divs.forEach(function (e) {
                            if (e.classList.contains(elem.id)) {
                                e.style.display = 'none';
                            }
                        });
                    }
                });
            });
        }
    };
    request.send(null);
});