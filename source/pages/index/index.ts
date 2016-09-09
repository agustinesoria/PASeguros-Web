//almacenar slides y botones en variables
var slides=$('.slides');
var siguiente = $('.btn-next');
var anterior=$('.btn-prev');
//mover ultima imagen al primer lugar
$('.slides section:last').insertBefore('.slides section:first');
//mostrar primer imagen con margen -50%
slides.css('margin-left', '-'+50+'%');

function moverD(){
  slides.animate({marginLeft:'-'+200+'%'},700,function(){
  $('.slides section:first').insertAfter('.slides section:last');
  slides.css('margin-left', '-'+50+'%');
  });
}

function moverI(){
  slides.animate({marginLeft:0},700,function(){
  $('.slides section:last').insertBefore('.slides section:first');
  slides.css('margin-left', '-'+50+'%');
  });
}

siguiente.on('click',function(){
  moverD();
});

anterior.on('click',function(){
  moverI();
});

function  autoplay(){
  interval = setInterval(function(){
    moverD();
  }, 5000);
}

autoplay();