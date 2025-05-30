$(document).ready(function () {

  // ==================== Swiper Slider Initialization ====================
  const swiper = new Swiper('.testimonial-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: false,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // ==================== Multi-Step Form Handling ====================

  // Show only the first form initially
  $('.sc-form').removeClass('active');
  $('.sc-form').first().addClass('active');

  // Dummy list of registered emails
  const registeredEmails = ["admin@gmail.com"];

  // Handle first form submission (email verification)
  $('.sc-form').first().find('form').on('submit', function (e) {
    e.preventDefault();

    const emailInput = $(this).find('input[type="email"]').val().trim().toLowerCase();

    if (!emailInput) {
      alert("Please enter your email.");
      return;
    }

    if (registeredEmails.includes(emailInput)) {
      // If email is registered, show login form
      showLoginForm(emailInput);
    } else {
      // If email is not registered, show new user form
      showNewUserForm(emailInput);
    }
  });

  // Handle "Change Email" link click - return to first form
  $(document).on('click', '.sc-form a.change-email', function (e) {
    e.preventDefault();
    $('.sc-form').removeClass('active');
    $('.sc-form').first().addClass('active');
  });

  // Handle "Create Account" link click - show create account form
  $(document).on('click', '.sc-form .create-account-link', function (e) {
    e.preventDefault();
    $('.sc-form').removeClass('active');
    $('.sc-form.create-account').addClass('active');
  });

  // === Helper Functions for Form Flow ===

  function showLoginForm(email) {
    $('.sc-form').removeClass('active');
    const loginForm = $('.sc-form.login');
    loginForm.find('p.email-text').html(`${email} <a href="#" class="change-email">Change</a>`);
    loginForm.addClass('active');
  }

  function showNewUserForm(email) {
    $('.sc-form').removeClass('active');
    const newUserForm = $('.sc-form.new-user');
    newUserForm.find('p.email-text').html(`${email} <a href="#" class="change-email">Change</a>`);
    newUserForm.addClass('active');
  }

  // ==================== Mobile Sidebar Toggle ====================

  const toggleBtn = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  // Toggle sidebar visibility on mobile
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }

});
