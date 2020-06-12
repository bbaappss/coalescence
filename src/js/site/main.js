AOS.init();

var x, i;
x = document.querySelectorAll(".click48mindbodylink");
for (i = 0; i < x.length; i++) {
  x[i].addEventListener('click', function () {
    document.querySelector("#healCode48container a").click();
  });
}
