//alert("Заказать металл по телефону: +3 8 (095) 946-59-33");
//var myName = prompt("Пожалуйста, укажите ваше имя?","");
      
  //alert("Здравствуйте, " + myName + "!" + " Спасибо за ваш визит! Мы с радостью ответим на все ваши вопросы по //тел: + 3 8 (095) 946 - 59 - 33" );

var object = document.querySelector("[data-mouseover]");

    object.addEventListener("mouseover", mouseOver);
 
function mouseOver()
	{
	 object.innerHTML="<h1>телефон: +3 8 095 946 59 33</h1>"
	}

