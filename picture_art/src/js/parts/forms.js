function forms() {
    function sendForm(classForm) {
        let form = document.querySelector(classForm),
            statusMessage = document.createElement('div');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); // создаем запрос к серверу
                    request.open('POST', 'server.php'); // выставляем настройки запроса
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let formData = new FormData(form); //получаем все данные с формы
                    let obj = {}; // создаем объект для формата JSON
                    for (let i = 0; i < formData.length; i++) {
                        obj[formData[i].getAttribute('name')] = formData[i].value;
                    }

                    request.send(formData); // отправляем данные на сервер

                    request.addEventListener('readystatechange', function () { // смотрим состояние запроса
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }

            // function clearInput() {
            //     for (let i = 0; i < input.length; i++) {
            //         input[i].value = '';
            //     }
            // }
            postData()
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/ajax-loader.gif\">';
                })
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/check.svg\">';
                })
                .catch(() => {
                    statusMessage.innerHTML = '<img src=\"img/warning.svg\">';
                });
        });
    }
    sendForm('.calculator-form-wrap');
    sendForm('.form-container-wrap');
    sendForm('.main-form');
    sendForm('.popup-design-form-wrap');

}

module.exports = forms;