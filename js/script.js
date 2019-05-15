$(document).ready(function(){
   var item = $('.food__item');
   var button = $('a');

 item.click(function(){
   if(!$(this).hasClass('food__item-disabled')){
     $(this).toggleClass('food__item-selected');
   }
  
 }) 
 button.click(function(){
  $(this).toggleClass('food__item-selected');
 }) 

});