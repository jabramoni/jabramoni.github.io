

    let diff = new Date().getTimezoneOffset()/60;

    var t13= a(13);
    var t16=a(16);
    var t18=a(18);
    var t19=a(19);
    var t22=a(22);


    var aa13 = document.querySelectorAll('[aa="13"]');
    for (var i = 0; i < aa13.length; i++)
      aa13[i].innerHTML = t13;

    var aa16 = document.querySelectorAll('[aa="16"]');
    for (var i = 0; i < aa16.length; i++)
      aa16[i].innerHTML = t16;

    var aa18 = document.querySelectorAll('[aa="18"]');
    for (var i = 0; i < aa18.length; i++)
      aa18[i].innerHTML = t18;

    var aa19 = document.querySelectorAll('[aa="19"]');
    for (var i = 0; i < aa19.length; i++)
      aa19[i].innerHTML = t19;

    var aa22 = document.querySelectorAll('[aa="22"]');
    for (var i = 0; i < aa22.length; i++)
      aa22[i].innerHTML = t22;


   function a(b){
      return (b-3-diff) +":00";
   }

