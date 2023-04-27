$(document).ready(function(){
  $('.carousel').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
      centerPadding: '60px',
      pauseOnHover: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      dots: true,
      pauseOnHover: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
          },
          {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          }
      ]
  });
});

$(document).ready(function onDocumentReady() {
  var URL_FINAL = '#';
  var nome = ['Luciana Oliveira', 'Marcia Araújo', 'Carolina Dias', 'Martha', 'Aline Campos', 'Luciane R Freire', 'Simone Z', 'Laura Campos', 'Carla Dias', 'Mariana Ruas', 'Jessica Ribeiro', 'Karol Lia'];
  nome.sort(() => Math.random() - 0.5);
  var i = 0, qtd = nome.length;
  setInterval(function doThis() {
  if (i == 11) return; // somente 11 eventos serão disparados
  if (i == 1 || i == 8 || i == 10) {
  toastr.info('<a href="' + URL_FINAL + '">Clique e Reserve sua vaga também!</a> ' + (qtd + (i * 3)) + ' novas alunas compraram nos últimos 30min.', {
  timeOut: 5000,
  positionClass: "toast-bottom-right",
  });
  }
  toastr.success('<a href="' + URL_FINAL + '">Clique e Reserve sua vaga também!</a> ' + nome[i++] + ' acabou de reservar a vaga dela.', {
  timeOut: 5000,
  positionClass: "toast-bottom-right",
  })
  }, 10 * 1000); // a cada 10 segundos
  });
  
  document.addEventListener("keydown", function (e) {
if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) { // Prevent F12
e.preventDefault()
}
}, true);
document.addEventListener('contextmenu', function (e) {
e.preventDefault()
}, true);
