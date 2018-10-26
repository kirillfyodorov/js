function softScrollModule() {
    let count = 0;
    let top, id;

    function softScroll() {
        let request = requestAnimationFrame(softScroll);
        count++;
        scrollBy(0, top / 20);
        if (count == 20) {
            count = 0;
            cancelAnimationFrame(request);
        }
    }

    let menu = document.querySelector('nav');
    menu.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.tagName == 'A') {
            e.preventDefault();
            id = target.href.slice(target.href.indexOf('#'), target.href.length);
            top = document.querySelector(id).getBoundingClientRect().top;
            console.log(top);
            softScroll();
        }
    });
}

export default softScrollModule;