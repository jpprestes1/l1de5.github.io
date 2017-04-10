  var tabela = document.querySelector("#table");
  var divi = document.querySelector('#inteira');
  var divm = document.querySelector('#meia');
  var divs = document.querySelector('#sub');
  var divs1 = document.querySelector('#subt')
  var divt = document.querySelector('#total');
  var vingr = document.querySelector('#valor');
  var qntm = 0, qnti = 0, tipo = "", back = '', back1 = '', td;
  tabela.onclick = function (event) {
      tipo = event.target.tagName.toLowerCase();
      if(tipo === "td" || tipo === "img")
      {
          if(tipo === "img")
              td = event.target.parentElement;
          else
              td = event.target;
          if(td.hasChildNodes()){
            if(td.style.background === ''){
              td.style.background = 'rgb(255, 222, 0)';
              back = td.style.background;
              qnti++
            }
            else {
              if(td.style.background === back)
              {
                td.style.background = '';
                qnti--
              }
            }
          }
          divi.innerHTML = qnti;
          divs.innerHTML = qnti + 'xR$ ' + vingr.value.toString() + '=R$ ' + (qnti*vingr.value).toString();
          divt.innerHTML = (qntm*(vingr.value/2)) + qnti*vingr.value;
          divs1.innerHTML = qntm + 'xR$ ' + (vingr.value/2).toString() + '=R$ ' + (qntm*(vingr.value/2)).toString();
          divt.innerHTML = 'R$ ' + ((qntm*(vingr.value/2)) + qnti*vingr.value).toString()
      }
  }
  tabela.oncontextmenu = function (event) {
      tipo = event.target.tagName.toLowerCase();
      if(tipo === "td" || tipo === "img")
      {
          if(tipo === "img")
              td = event.target.parentElement;
          else
              td = event.target;
          if(td.hasChildNodes()){
            if(td.style.background === ''){
              td.style.background = 'rgb(0, 236, 222)';
              back1 = td.style.background;
              qntm++
            }
            else {
              if(td.style.background === back1)
              {
                td.style.background = '';
                qntm--
              }
            }
          }
          divm.innerHTML = qntm;
          divs.innerHTML = qnti + 'xR$ ' + vingr.value.toString() + '=R$ ' + (qnti*vingr.value).toString();
          divt.innerHTML = (qntm*(vingr.value/2)) + qnti*vingr.value;
          divs1.innerHTML = qntm + 'xR$ ' +   (vingr.value/2).toString() + '=R$ ' + (qntm*(vingr.value/2)).toString();
          divt.innerHTML = 'R$ ' + ((qntm*(vingr.value/2)) + qnti*vingr.value).toString();
          event.preventDefault();
      }
  }
  vingr.onkeyup = function (){
    vingr = document.querySelector('#valor');
    divs.innerHTML = qnti + 'xR$' + vingr.value.toString() + '=R$' + (qnti*vingr.value).toString();
    divt.innerHTML = (qntm*(vingr.value/2)) + qnti*vingr.value;
    divs1.innerHTML = qntm + 'xR$' + (vingr.value/2).toString() + '=R$' + (qntm*(vingr.value/2)).toString();
    divt.innerHTML = 'R$ ' + ((qntm*(vingr.value/2)) + qnti*vingr.value).toString()
  }
