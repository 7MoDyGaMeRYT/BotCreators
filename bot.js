const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";//حط هنا برفكس البوت حقك

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
.addField(':bookmark:``اسم البوت``' , ` **${client.user.tag} **` , true)
.addField(':id:``اي دي البوت``' , `** ${client.user.id} **` , true)
.addField(':robot:``السيرفرات التي يتواجد به البوت``',`**${client.guilds.size} سيرفر **`)
.addField(':busts_in_silhouette:``مجموع الاعضاء``',`** ${client.users.size}**`)
.addField(':bookmark_tabs:``مجموع الرومات``',`**${client.channels.size}**`) 
.addField(':ok_hand:``الامر الخاص بي``' , `**!**` , true)
.addField(':signal_strength:``بنق البوت``',`**${client.ping} ms**`) 
.addField(':signal_strength:``سرعة انشاء الرسالة``',`**${Date.now() - message.createdTimestamp} ms**`) 
.addField('``مساحة الرام المستخدمة``', `**${(process.memoryUsage().rss / 1048576).toFixed()}MB**`, true)
.addField('تاريخ صنع البوت', client.user.createdAt, true)
.addField('``مصممين , اصحاب البوت``',`**<@467305958062817301>**,`)
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '#';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("اكتب سبب ريبورت");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("رجاء كتب سبب الريبروت");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("**- Reported User :**", `${rUser}`)
        .addField("**- Reported By :**", `${message.author}`)
        .addField("**- Reported In :**", message.channel)
        .addField("**- Report Time :**", message.createdAt.toLocaleString(),true)
        .addField("**- Reason :**", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});


const devs = ['467710376352677890' , '373670599463272448' , '453986084804755469' , '467305958062817301'];
client.on('message', message => {
var prefix = "#";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'cn')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح**");
} else
if (message.content.startsWith(prefix + 'cp')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح `);

}
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
      var prefix = "#";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('اكتب الكلام الى تبيه يصير بالاموجي');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
  


client.on("message", message => {

            if (message.content.startsWith(prefix + "bconline")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` اعضاء اونلاين استلمتهم رسالتك`); 
 message.delete(); 
};     
});


client.on('message', message => {
	                  if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc ')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DragonBot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتبت شي لأرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
	


client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '#'; //تقدر تغير البرفكس
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});


client.on('message', msg => {
	var prefix = "#";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});




   client.on('message', message => {
     if (message.content === "#support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **Soon**")
     
     
  message.channel.sendEmbed(embed);
    }
});

    client.on('ready', function(){    
        var ms = 40000 ;    
        var setGame = [`on ${client.guilds.size} Server | ${client.users.size} User  `,'#help  For Helping Commands'];
    
        var i = -1;    
        var j = 0;    
        setInterval(function (){    
            if( i == -1 ){    
    j = 1;    
           }    
            if( i == (setGame.length)-1 ){    
                j = -1;    
          }    
           i = i+j;    
            client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
    }, ms);    
        
    });






client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "#";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'link')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite Links in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite Links in ${message.guild.name}`, `Invite Links:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});









client.login(process.env.BOT_TOKEN);//اكتب التوكن حقك بوتك هنا
