function carregar(){
  // Nome da função carregar()

  /*Criamos variáveis que irão manipular elementos do nosso documento Html*/

  // Utilizei o método por Id, para selecionar tais elementos.


  var msg = document.getElementById("msg")
  var imagem = document.getElementById("imagens")
  var data = new Date() // data atual
  var hora = data.getHours() // hora atual conforme a data. 
  var titulo = document.getElementById("titulo")
  var rodape = document.getElementsByClassName("rodape")[0]

  msg.innerHTML = `São exatamente ${hora} horas`
  /* Utilizei esse método de concatenar póis é mais prático. Usamos Placeholder /*
  
  

    /*Estruturas de condição aninhada, juntamente com operadores lógicos e relacionais*/ 

  if( hora >= 0 && hora <12){
    // Bom dia 
    imagem.src = "./assets/manha.png"
    titulo.style.color ="black"
    document.body.style.background = "#8b2f18"

  }else if( hora >= 12 && hora <18){
    // Boa tarde
    imagem.src = "./assets/2.png"
    titulo.style.color = "#fff"
    document.body.style.background = "#ffd101"
    rodape.style.color = "#fff"
    
  }else{
    //Boa noite
    imagem.src = "./assets/3.png"
    titulo.style.color = "#fff"
    document.body.style.background = "#181a33"
    rodape.style.color = "#fff"


  }
}// fim 