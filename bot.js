const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";//حط هنا برفكس البوت حقك

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!help`,"http://twitch.tv/S-F")//حط حالة الي تريد بوتك يكون عليها مكان !help
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



//حط الاكواد تحت هذه الجملة

client.on("message", message => {
    const prefix = "#"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', message => {
var prefix = "#";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
				
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});

client.on('message', message => {
var prefix = "#";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have ADMINISTRATOR Permission ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**تم اخفاء الروم بنجاح ! ✅**')

 }
});

client.on('message', message => {
var prefix = "#";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have ADMINISTRATOR Permission ❌');
	  message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**تم اظهار الروم بنجاح ! ✅  **')
 }
});

client.on('message', iimr7modyx => {
  if (iimr7modyx.content === "#time") {
         if (!iimr7modyx.channel.guild) return iimr7modyx.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 2 ,
            hours2 = currentTime.getHours() + 1 ,
            hours3 = currentTime.getHours() + 0 ,
            hours4 = currentTime.getHours() + 1 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

const embed = new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "**『التاريخ  والوقت』**")
                .setColor('RANDOM')
                .setFooter(iimr7modyx.author.username, iimr7modyx.author.avatarURL)
                .addField('**:flag_ae:  الامارات  العربية المتحدة**',
                "**『"+ hours + ":" + minutes +":"+ seconds + "』**")
                 .addField('**:flag_sa: المملكة العربية السعودية **',
                "**『"+ hours2 + ":" + minutes +":"+ seconds  + "』**") 
                .addField(' **:flag_eg: جمهورية  مصر العربية** ',
                "**『"+ hours3 + ":" + minutes +":"+ seconds  + "』**") 
                
                .addField('**Date :clock1030: **',
                "**『"+ Day + "-" + Month + "-" + Year +  "』**")


  iimr7modyx.channel.sendEmbed(embed);
   }
});





        client.on('message', message => {
            if (message.content.startsWith(prefix + "bot-info")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .setColor('RANDOM')
.setTitle('**DragonBot Info**')
.addField(':robot:``السيرفرات التي يتواجد به البوت``',`**${client.guilds.size} سيرفر **`)
.addField(':busts_in_silhouette:``مجموع الاعضاء``',`** ${client.users.size}**`)
.addField(':bookmark_tabs:``مجموع الرومات``',`**${client.channels.size}**`) 
.addField(':ok_hand:``الامر الخاص بي``' , `**!**` , true)
.addField(':signal_strength:``بنق البوت``',`**${client.ping} ms**`) 
.addField(':signal_strength:``سرعة انشاء الرسالة``',`**${Date.now() - message.createdTimestamp} ms**`) 
.addField('``مصممين , اصحاب البوت``',`**<@467305958062817301>**,`)
  message.channel.sendEmbed(embed);
    }
});







client.login(process.env.BOT_TOKEN);//اكتب التوكن حقك بوتك هنا
