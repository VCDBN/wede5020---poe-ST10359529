var validate = function(e) {
  var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        
          if (fields[i].nextElementSibling.classList.contains('error')) {
            removeSpan = fields[i].nextElementSibling;
            par = fields[i].parentNode;
            par.removeChild(removeSpan);
            fields[i].nextElementSibling.innerHTML = "Hmmmm " + fields[i].placeholder + " is required?";
            fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
            check = false;
            errArr.push(fields[i]);
          }
          fields[i].nextElementSibling.innerHTML = "Hmmmm " + fields[i].placeholder + " is required?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
      } else {


        
          if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
              val = isValidChar(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Invalid phone number";
                fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                fields[i].style.boxShadow = "none";
                check = true;
              }
          }
        
          
      }

      
  }

  if(check === false) {
    var count = 0;
    var toErr = setInterval(function() {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if(count < pos) {
        count ++;
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }
  
  return check


  
};

