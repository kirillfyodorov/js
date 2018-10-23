let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
let request;

inputRub.addEventListener('input', () => {
    request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {
        function sendData() {
            return new Promise(function (resolve, reject) {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            });
        }
        sendData()
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => {
                inputUsd.value = "Что-то пошло не так!";
            });
    });
        
});