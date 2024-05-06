function Play(){
  var audio = new Audio('Button.mp3');
audio.play();
    
    config();
  
}

function loadUrl(){
  window.location.href = "Teste.html";
}

function Resposta(botao){
    
    
var Resposta = document.getElementById(botao).innerHTML;
var Correto = document.querySelector('#my-span').textContent;
var valor = -1; // Inicialize como -1 para indicar que ainda não encontrou correspondência

for (let i = 0; i < hiraganaTranslations.length; i++) {
    if (hiraganaTranslations[i] == Resposta) {
        valor = i; // Encontrou a correspondência, armazena o índice e sai do loop
        break;
    }
}

if (valor !== -1 && valor < hiraganaAlphabet.length && Correto === hiraganaAlphabet[valor]) {
    
    config(); // Altera o texto do botão
    // Outras ações que você deseja executar quando a resposta estiver correta
}
    
}

function config(){
  const numeroPos = gerarNumeroAleatorio(0, 2);
    
  //document.getElementById("text").innerHTML=hiraganaAlphabet[numeros[numeroPos]];
  const numeros = gerarNumerosAleatorios(0, 45, 3);
  var display= hiraganaAlphabet[numeros[numeroPos]];
  document.querySelector('#my-span').textContent = display;    
  document.getElementById("button1").innerHTML=hiraganaTranslations[numeros[0]];
  document.getElementById("button2").innerHTML=hiraganaTranslations[numeros[1]];
  document.getElementById("button3").innerHTML=hiraganaTranslations[numeros[2]];
  
    
}


const hiraganaAlphabet = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'を', 'ん'
];

const hiraganaTranslations = [
  "A", "i", "u", "e", "o",
  "ka", "ki", "ku", "ke", "ko",
  "sa", "shi", "su", "se", "so",
  "ta", "chi", "tsu", "te", "to",
  "na", "ni", "nu", "ne", "no",
  "ha", "hi", "fu", "he", "ho",
  "ma", "mi", "mu", "me", "mo",
  "ya", "yu", "yo",
  "ra", "ri", "ru", "re", "ro",
  "wa", "wo", "n"
];

function gerarNumerosAleatorios(min, max, quantidade) {
  const numerosAleatorios = [];
  
  while (numerosAleatorios.length < quantidade) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numerosAleatorios.includes(numero)) {
      numerosAleatorios.push(numero);
    }
  }
  
  return numerosAleatorios;
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

