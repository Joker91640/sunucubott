
var mineflayer = require('mineflayer');
var sifre = ""; // Authme Giris Sifresini Yazin
var ayar = {
    host: "mc.trgamerlar.tk", // Sunucu ip
    port: 25565, //bunu ellemeyin standart portta kalsın
    username: "Guvenlik", // Servere Girililecek isim
   version: false // version false olarak kalırsa butun versionlara girer
};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
     }
    setInterval(intervalFunc,10000);
  console.log('Minecraft Sunucusuna Giris Yapildi');
  bot.chat('/login '+ sifre);
});

bindEvents(bot);
function bindEvents(bot) {


    bot.on('error', function(err) {
        console.log("Botta Bir Hata Olustu ");
    });

    bot.on('end', function() {
        console.log("Bot Bilinmeyen Nedenle Sunucudan Atıldı");
        setTimeout(relog, 10000);  
    });

    function relog() {
        console.log("Sunucuya Tekrardan Baglaniliyor...");
        bot = mineflayer.createBot(ayar);
   bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  console.log('Tekrardan Giris Yapildi');
  bot.chat('/login '+ sifre);
});
    
        bindEvents(bot);
    }
}

