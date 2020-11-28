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

function mobileClick() {
    document.getElementById('navbar').classList.toggle('hidden');
}