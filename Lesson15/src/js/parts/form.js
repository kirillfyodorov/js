function form() {
    function sendForm(classForm) {
        let form = document.querySelector(classForm),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); // создаем запрос к серверу
                    request.open('POST', 'server.php'); // выставляем настройки запроса
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let formData = new FormData(form); //получаем все данные с формы
                    console.log(formData.length);
                    let obj = {}; // создаем объект для формата JSON
                    for (let i = 0; i < formData.length; i++) {
                        obj[formData[i].getAttribute('name')] = formData[i].value;
                        console.log(obj[formData[i].getAttribute('name')]);
                    }

                    request.send(obj); // отправляем данные на сервер

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

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData()
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/ajax-loader.gif\">';
                })
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/check.svg\">';
                })
                .catch(() => {
                    statusMessage.innerHTML = '<img src=\"img/warning.svg\">';
                })
                .then(() => clearInput());
        });
    }
    sendForm('.main-form');
    sendForm('.form-contact');
}

module.exports = form;