// 2+distanciakm*1.4+tempo*0.26 formula da corrida

distanciakm = prompt("Qual a distância percorrida? (km)");

tempo = prompt("Quanto tempo levou a corrida?");

valorCorrida = 2 + (distanciakm * 1.4) + (tempo * 0.26);
document.querySelector('.result').innerHTML = valorCorrida.toFixed(2);

//alert = ('sua corrida deu o valor de R$: ' + valorCorrida.toFixed(2));