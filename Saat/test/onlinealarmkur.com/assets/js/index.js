const pElement = document.getElementById("my-paragraph");
const messages = [
  "Online saat, 'Şu an saat kaç?' sorusuna cevap bulabileceğiniz, zamanı saat, dakika ve saniye cinsinden gösteren bir canlı saat uygulamasıdır.",
  "Dünya saati sayfasını kontrol edin. Ardından, saatin saat dilimini değiştirmek için şehirler listesinden herhangi bir şehre tıklayın. İnternet saati buna göre yeni zamanla güncellenecektir. Sıfırlamak için saatin altındaki seçili şehre tıklayın.",
  "Online saat oldukça akıllıdır ve bulunduğunuz yerdeki geçerli saati size göstermek için bilgisayarınızın veya telefonunuzun bilgilerini kullanır. Bilgisayarınız veya telefonunuz yanlış saat dilimine ayarlanmışsa, online saat de zamanı yanlış gösterebilir. Cihazınızın doğru zaman dilimine ayarlandığından ve/veya doğru saate sahip olduğundan emin olarak bunu düzeltebilirsiniz.",
  "Bu tam ekran saat, özellikle sınıfta öğrencilere zamanı göstermek veya evde egzersiz yapmak için size yardımcı olabilir. Bu saati kullanarak zamandan tasarruf edebilir ve her türlü işleriniz için zaman takibi yapmak adına faydalı olabilir.",
];
var messages1 = [
    "Birinci: Genelde Pratisyen hekimler tarafından aile sağlığı merkzlerinde ayakta verilen tedavidir",
    "Bulaşıcı: bağışıklama Bulaşıcı hastalıklardan korunmada çok önemli bir rol oynar aşılar vucüdün hastalıklara karşı dirncç kazanmasını sağlar ve bağışıklık sistemini güçlendirir bu sayede vücuda girmeden tanır ve yok edilir",
    "Ergen: erkeklerde= Boy kilo artış. Kemiklerde İrişleşme",
    "Ergen: kadınkarda= Boy kütle erkeklere göre az olur",
    "Ergen: kadınkarda= kalçalar büyür kemikler genişler",

    "Fiziksel aktivetenin: Sosyal aktivitenin geliştirir bireyin kendini iyi hisetmesini sağlar iletişimi gelişir",
    "Obez: Sigara alkol kullanımı \n Eğitim Düzeyi \n yetersiz etkinlik \n Genetik Etmenler \n Gelir durumu",

    "Zihin dugyusal: sosyoekonomik durum yangın salgın deprem  terör gibi olaylar zihinsel duygusal ve sosyal sağlıgı olumsuz etkiler",
    "Birey stres: Mükemelletçiyelik \n sınavlar \nyüksek beklenti \nkıyaslama\n Aile sorunları",
    "Madde: İç organların tümünün zarar görmesini ve buna bağlı hastalıklar neden olabilir \n kişide zamanla kaygı korku düşmanlık ve paronaya meydana gelir",
    "Teknoloji: Teknolojik ürünlerin uzun süreli kullanımı bulanık görme göz yorgunlugu vb \n araba süreken kaza riski artması",
    "İlk yardım Hasta: Yaşamsal tehlikenin ortadan kalkması  \n iyileşme kolaylaşmatırlması",

];


let messageIndex = 0;
let messageIndex2 = 0;

function displayMessage1() {
    pElement.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(displayMessage2, 10000); 
}
function displayMessage2() {
    pElement.textContent = messages1[messageIndex2];
    messageIndex2 = (messageIndex2 + 1) % messages1.length;
    setTimeout(displayMessage1, 7000); 
}


displayMessage1();
