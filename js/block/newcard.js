var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');


$newCardContent.addEventListener('input', function(){
   $error = document.querySelector('.error');

   if($error != null) {
      $error.remove();
   }
});


$newCard.addEventListener('submit', function(event){
   event.preventDefault();

   if($newCardContent.value == '' ){

      if(document.querySelector('.error') == null ){
         var $error = document.createElement('span');
         $error.classList.add('error');
         $error.textContent = 'Por favor, preencha o campo acima';

         $newCard.insertBefore($error, $newCardAction);
      };

   } else {

   }

});
