var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

Fancybox.bind("[data-fancybox]", {
    // Настройки
});

const openModal = document.querySelectorAll('.openModal');

openModal.forEach(header => {
    header.addEventListener('click', () => {
        document.getElementById('modal').style.display = 'grid';
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
