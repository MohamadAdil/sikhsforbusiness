$(document).ready(function () {
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
});
$(document).ready(function () {
  // Show only first form initially
  $('.sc-form').removeClass('active');
  $('.sc-form').first().addClass('active');

  // Sample registered emails
  const registeredEmails = [
    "admin@gmail.com"
  ];

  // When first form is submitted
  $('.sc-form').first().find('form').on('submit', function (e) {
    e.preventDefault();

    const emailInput = $(this).find('input[type="email"]').val().trim().toLowerCase();

    if (!emailInput) {
      alert("Please enter your email.");
      return;
    }

    if (registeredEmails.includes(emailInput)) {
      // Show Login form with email filled and change link visible
      showLoginForm(emailInput);
    } else {
      // Show new user form with email filled and option to create account
      showNewUserForm(emailInput);
    }
  });

  // Handle "Change" email click - goes back to first form
  $(document).on('click', '.sc-form a.change-email', function (e) {
    e.preventDefault();
    $('.sc-form').removeClass('active');
    $('.sc-form').first().addClass('active');
  });

  // Handle "Let’s create an account using your mobile number" click
  $(document).on('click', '.sc-form .create-account-link', function (e) {
    e.preventDefault();
    $('.sc-form').removeClass('active');
    $('.sc-form.create-account').addClass('active');
  });

  // Helper functions
  function showLoginForm(email) {
    $('.sc-form').removeClass('active');

    // Update login form email text and add change link if not present
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
});
