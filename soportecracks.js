///////LIBRERIAS/////////////////////
const Discord = require("discord.js");
const  client = new Discord.Client();

const config = require("./config.json")
///////////////////STATUS///////////////////////////////
function presence(){
  client.user.setPresence({
      status:"dnd",
      activity: {
        name: "Bot en desarrollo || sc/help para ver mis comandos [BETA]."
        
      }
    })
  }
///////////ESTADO////////////////
client.on("ready", () => {
   console.log("Estoy listo!");
   presence();
});
///////VARIABLES////////////
let prefix = config.prefix;
///EVITAR BUCLE//////////
client.on("message", (message) => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
///COMANDOS GENERALES//////////
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 

  if(command === "hola"){
    message.channel.send("Hola que tal!")
 }
 if(command === "bien"){
  message.channel.send("Me alegro :) .")
}
 if(command === "adios"){
  message.channel.send("Hasta luego.")
}
if(command === "help"){
  message.channel.send("**Comando en programación...**")
}
if(command === "invite"){
  message.channel.send("Mi link de invitación a tu servidor: https://bit.ly/854u4894 .")
}
if(command === "support"){
  message.channel.send("Únete a mi servidor de Discord si quieres: https://discord.gg/AqPYZwQ .")
}
if(command === "discord"){
  message.channel.send("Únete a mi servidor de Discord y chatea con el mundo :): https://discord.gg/AqPYZwQ .")
}
if(command === "hungry"){
  message.channel.send("Mi creador no me da de comer :rage: !!!")
}
});
client.on("message", message =>{
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
///COMANDOS GENERALES//////////
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 

  /////EMBEDS//////////
  if(command === 'server'){
    const embed = new Discord.MessageEmbed()
    .setTitle('Información del servidor')
    .setColor(0x33FF9E)
    .setDescription('Información actual del servidor.')
    .addField('Nombre del servidor:', message.guild.name, true)
    .addField('Integrantes:', message.guild.memberCount, true)
    .setAuthor(message.member.displayName, message.author.avatarURL())
    .setThumbnail('https://media.giphy.com/media/dahnt6nqwan1S/giphy.gif')
    .setImage('https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?resize=1600,900')
    .setFooter('Bot hecho por Manucrack YT', message.author.avatarURL())
    .setTimestamp()
    .setURL('');
    message.channel.send(embed);
}

////IMÁGENES///////////
if(command === 'covid'){
  const img = new Discord.MessageAttachment('https://altiorem.com/wp-content/uploads/Infecci%C3%B3n-por-COVID-19-900x450.jpg')
  message.channel.send(img);
}
if(command === 'covid-19'){
  const img = new Discord.MessageAttachment('https://www.redaccionmedica.com/images/directos/coronavirus-ultimas-noticias-espana-confinamientos-test-y-contagios_620x368.jpg')
  message.channel.send(img);
}
if(command === 'hi'){
  const img = new Discord.MessageAttachment('https://media.giphy.com/media/l0FF56cexcW2JAXCJj/giphy.gif')
  message.channel.send(img);
}
if(command === 'hello'){
  const img = new Discord.MessageAttachment('https://media.giphy.com/media/l0FF56cexcW2JAXCJj/giphy.gif')
  message.channel.send(img);
}
if(command === 'goodbye'){
  const img = new Discord.MessageAttachment('https://media.giphy.com/media/fGXM0IgrGiicbPBqRD/giphy.gif')
  message.channel.send(img);
}
if(command === 'bye'){
  const img = new Discord.MessageAttachment('https://media.giphy.com/media/fGXM0IgrGiicbPBqRD/giphy.gif')
  message.channel.send(img);
}


});


client.login(config.token);      
