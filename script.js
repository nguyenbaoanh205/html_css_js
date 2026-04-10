document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const dropdownParents = document.querySelectorAll('.has-dropdown > a');

    // Toggle Mobile Menu
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // ✅ FIX: Không đóng menu khi click dropdown cha (mobile)
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const parent = item.parentElement;

            // Nếu là dropdown → không đóng menu
            if (parent.classList.contains('has-dropdown') && window.innerWidth < 768) {
                e.preventDefault();
                // Đóng tất cả dropdown khác
                document.querySelectorAll('.has-dropdown').forEach(i => {
                    if (i !== parent) i.classList.remove('open');
                });

                // Toggle cái đang click
                parent.classList.toggle('open');
                return;
            }

            // Nếu là link bình thường → đóng menu
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Header shadow khi scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Form Submission (Mock)
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ lại sớm nhất.');
            leadForm.reset();
        });
    }

    // ✅ FIX: Smooth scroll không phá dropdown
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#' || this.parentElement.classList.contains('has-dropdown')) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mặc định mobile 1 ảnh
    spaceBetween: 30,
    loop: true, // Chạy vô tận
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Khi màn hình >= 768px (máy tính bảng)
        768: {
            slidesPerView: 3,
        },
        // Khi màn hình >= 1024px (máy tính)
        1024: {
            slidesPerView: 4,
        },
    },
});

var successSwiper = new Swiper(".successSwiper", {
    loop: true,
    speed: 700,
    spaceBetween: 16,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".successSwiper .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.15,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 2.2,
            spaceBetween: 14,
        },
        768: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 4.2,
            spaceBetween: 16,
        },
        1400: {
            slidesPerView: 5.3,
            spaceBetween: 20,
        },
    },
});

const destinationSwiper = new Swiper(".destinationSwiper", {
    loop: true,
    speed: 800,
    spaceBetween: 20,
    slidesPerView: 4.3, // số lẻ để lòi item cuối
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4
      },
      576: {
        slidesPerView: 2.2
      },
      768: {
        slidesPerView: 3.2
      },
      992: {
        slidesPerView: 4.3
      }
    }
  });
