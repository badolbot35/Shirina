module.exports.config = {
    name: "👉👌",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "BADOL-KHAN",
    usePrefix: false,
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    commandCategory: "nsfw",
    usages: " please @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি কাকে চুদতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🌺𝐁𝐀𝐃𝐎𝐋🍁𝐕𝐀𝐈🍀𝐀𝐑🎭 চুদা লো");
setTimeout(() => {a({body: "খাংকির পোলা তর মারে চুদি 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি বোন রে চুদি 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "মাদারচোদ তর আম্মু পম পম খাংকির পো 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি ভুদায় ভুদায় কামর দিমু  💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "খাংকি মাগির পোলা কথা ক কম কম তর আম্মু রে চুদে বানামু আইটেম বোম " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "তর আম্মু রে আচার এর লোভ দেখি চুদি মাগির পোলা🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "বান্দির পোলা তর কচি বোনের ভুদা ফাক কর থুতু দিয়ে ভুদায় দন ডুকামু 🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "বান্দি মাগির পোলা তর আম্মু রে চুদি তর দুলা ভাই এর কান্দে ফেলে  🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "উফফফ খাদ্দামা মাগির পোলা তর আম্মুর কালা ভুদায় আমার মাল আউট তর কচি বোন রে উপ্তা করে এবার চুদবো  💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "অনলাইনে গালি বাজ হয়ে গেছত মাগির পোলা এমন চুদা দিমু লাইফ টাইম মনে রাখবি 𝐁𝐀𝐃𝐎𝐋 তর বাপ মাগির ছেলে 😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "বাতিজা শুন তর আম্মু রে চুদলে রাগ করবি না তো আচ্ছা জা রাগ করিস না তর আম্মুর কালা ভুদায় আর চুদলাম না তো বোন এর জামা টা খুলে দে  ✋" + " " + name, mentions: arraytag})},31000);
