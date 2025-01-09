const pElement = document.getElementById("my-paragraph");
const messages = [
  "Online saat, 'Şu an saat kaç?' sorusuna cevap bulabileceğiniz, zamanı saat, dakika ve saniye cinsinden gösteren bir canlı saat uygulamasıdır.",
  "Dünya saati sayfasını kontrol edin. Ardından, saatin saat dilimini değiştirmek için şehirler listesinden herhangi bir şehre tıklayın. İnternet saati buna göre yeni zamanla güncellenecektir. Sıfırlamak için saatin altındaki seçili şehre tıklayın.",
  "Online saat oldukça akıllıdır ve bulunduğunuz yerdeki geçerli saati size göstermek için bilgisayarınızın veya telefonunuzun bilgilerini kullanır. Bilgisayarınız veya telefonunuz yanlış saat dilimine ayarlanmışsa, online saat de zamanı yanlış gösterebilir. Cihazınızın doğru zaman dilimine ayarlandığından ve/veya doğru saate sahip olduğundan emin olarak bunu düzeltebilirsiniz.",
  "Bu tam ekran saat, özellikle sınıfta öğrencilere zamanı göstermek veya evde egzersiz yapmak için size yardımcı olabilir. Bu saati kullanarak zamandan tasarruf edebilir ve her türlü işleriniz için zaman takibi yapmak adına faydalı olabilir.",
];
var messages1 = [
    "Yazı 1",
    "Yazı 2",
    "Yazı 3",
];


let messageIndex = 0;
let messageIndex2 = 0;

function displayMessage1() {
    pElement.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(displayMessage2, 5000); 
}
function displayMessage2() {
    pElement.textContent = messages1[messageIndex2];
    messageIndex2 = (messageIndex2 + 1) % messages1.length;
    setTimeout(displayMessage1, 1000); 
}


displayMessage1();
