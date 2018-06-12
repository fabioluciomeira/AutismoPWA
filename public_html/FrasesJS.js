/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var cont = 0; //Número de palavras inseridas pelo usuário
            var max = 3;  //Número máximo de palavras na frase
            var palavras = new Array (max); //Palavras que irão compor a frase
            var lista = ["EuQuero", "Brincar", "Comer", "Dormir", "Banho", "Parque", "Brinquedo","Casa", "Voce", "Nos", "Hora"];

            function buttonCharge (indice) {
                if (cont < max) {
                    palavras[cont] = (lista[indice] + ".png");
                    cont++;
                }
            }
            
            function buttonWrite() {
                var frase = document.getElementById("Frase");
                document.getElementById("Frase").innerHTML = "";
                for (x=0;x<cont;x++) {
                    var imagem = document.createElement("img");
                    imagem.className = "ImgFala";
                    imagem.src = "Imagens/" + palavras[x];
                    frase.appendChild(imagem);
                }
            }
            
            function buttonClear () {
                document.getElementById("Frase").innerHTML = "";
                for (x=0; x<max; x++)
                    palavras [x] = "";
                cont = 0;
            }
