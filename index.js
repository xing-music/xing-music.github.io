if (typeof window !== 'undefined') {
    function scrollFunction() {
        var el = document.getElementById('navbar')
        if (el) {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                el.classList.add('smaller');
            } else {
                el.classList.remove('smaller');
            }
        }
    }
    window.addEventListener('scroll', scrollFunction);
}

function mobileButtonClick() {
    document.getElementById('mobile-navbar').classList.toggle('hidden');
    var links = document.getElementsByClassName("m");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle('hidden');
    }
}