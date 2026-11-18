const magicLinks = document.querySelectorAll('.magic-navigation .list');

function activeMagicLink() {
    magicLinks.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

magicLinks.forEach((item) => item.addEventListener('click', activeMagicLink));