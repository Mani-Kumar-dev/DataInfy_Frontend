/*--Inspect elements-*/
// document.addEventListener('contextmenu',function(event){
//   alert("Design and Developed by Aptsol Global Tech Pvt Ltd");
//   event.preventDefault();
// })

// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });
  document.addEventListener("DOMContentLoaded", function() {
    fetch('scripts.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('scripts').innerHTML = data;
      });
  });
/*--Navbar starts-*/
window.addEventListener('scroll',function (){
    let navbar =this.document.querySelector('.navbar');
    if(this.window.scrollY > 140){
      navbar.classList.add('scrolled');
    }
    else{
      navbar.classList.remove('scrolled');
    }
  })
  /*--Navbar ends-*/
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/*--contact Validation starts---*/
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
          form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              } else {
                  event.preventDefault(); // Prevent default form submission
                  Swal.fire({
                      title: 'Sent!',
                      text: 'Your message has been sent. We will get back to you soon!',
                      icon: 'success'
                  }).then(() => {
                      form.submit(); // Submit the form programmatically
                  });
              }

              form.classList.add('was-validated')
          }, false)
      })
})()


/*--contact Validation ends---*/
