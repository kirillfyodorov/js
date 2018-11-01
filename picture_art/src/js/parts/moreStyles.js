function moreStyles() {
    let hiddenStyles = document.querySelectorAll('.styles-2'),
        btnStyles = document.querySelector('.button-styles');

    btnStyles.addEventListener('click', function() {
        btnStyles.style.display = 'none';
        hiddenStyles.forEach(function(e) {
            e.classList.remove("hidden-lg");
            e.classList.remove("hidden-md");
            e.classList.remove("hidden-sm");
            e.classList.remove("hidden-xs");
            e.classList.add("col-sm-3");
            e.classList.add("col-sm-offset-0");
            e.classList.add("col-xs-10");
            e.classList.add("col-xs-offset-1");
        });
    });
}

module.exports = moreStyles;