const config = require('dotenv').config();
const discord = require("discord.js");
const client = new discord.Client();
const Trello = require("trello");
const trello = new Trello(process.env.TRELLOAPPKEY,process.env.TRELLOTOKEN);
const token = process.env.TOKEN;

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let year = date_ob.getFullYear();

let hours = date_ob.getHours();

let minutes = date_ob.getMinutes();

let seconds = date_ob.getSeconds();

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setPresence({ activity: { name: 'Watching my habibis' }, status: 'online' })
});

const prefix = process.env.PREFIX;
const list = process.env.ID;
client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'blacklist') {
    if(!message.member.roles.cache.some(role => role.name === 'GeneralLPrince')) 
    return console.log("you have no powers")
    suspect = args[0]
    if (!suspect) {
       return message.channel.send({embed: {
                color: 9347131,
                description: "you forgot the format general you stupid moron...",
                author: {
                    "name": message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }}); 
    };
    let reason = args.slice(1).join(" ");
    if (!reason) {
       return message.channel.send({embed: {
                color: 9347131,
                description: "you forgot the reason faggot...",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }}); 
    };
      trello.addCard(suspect, reason, '5f2da19893617e609b509555',
      function (error, trelloCard) {
          if (error) {
              console.log("I am ready!");
              console.log("An error occured", error)
               return message.channel.send({embed: {
                color: 15406156,
                description: "An error occured. Please try again later. \n ERROR:" + error,
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }}); 
          }
          else {
              console.log('Added card:', trelloCard);
              return message.channel.send({embed: {
    color: 9347131,
    "type": "rich",
    author: {
      name: client.user.username,
      "icon_url" : message.author.displayAvatarURL,
    },
    "author" : {
		"name": "Played Blacklisted",
	   },  
      "description": "Don't worry General, I blacklisted that asshole.", 
  }
});
          }
      });
  }

else;
  if (command === 'whitelist') {
    if(!message.member.roles.cache.some(role => role.name === 'GeneralLPrince')) 
    return console.log("")
    suspect = args[0]
    if (!suspect) {
       return message.channel.send({embed: {
                color: 9347131,
                description: "",
                author: {
                    "name": message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }}); 
    };
      trello.addCard(suspect, "", '5f315f06df4ab60629defdcc',
      function (error, trelloCard) {
          if (error) {
              console.log("I am ready!");
              console.log("An error occured", error)
               return message.channel.send({embed: {
                color: 15406156,
                description: "An error occured. Please try again later. \n ERROR:" + error,
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }}); 
          }
          else {
              console.log('Added card:', trelloCard);
              return message.channel.send({embed: {
    color: 9347131,
    "type": "rich",
    author: {
      name: client.user.username,
      "icon_url" : message.author.displayAvatarURL,
    },
    "author" : {
		"name": "Game whitelisted.",
	   },  
      "description": "", 
  }
});
          }
      });
  }

  else;
  if (command === 'misc') {
     message.channel.send("My uptime is: `" + client.uptime + "ms` \nMy ping is: `" + client.ws.ping + "ms`");
   }

  else;
  if (command === 'dhhsvhsjfebhfuoiejna') {
     console.log("hi buster")
             return message.channel.send({
    embed: {
    color: 9347131,
    "type": "rich",
    "thumbnail" : {
		"url"	: "https://t1.rbxcdn.com/eef5356bab864dcdce761cd34da128d9"
		},
    author: {
      name: client.user.username,
      "icon_url" : message.author.displayAvatarURL,
    },
    "author" : {
		"name": "ROAD MAP",
	   },  
      "description": "**Weaponry:** \n \n**British:** \n + India Land Pattern Brown Bess \n  - Paget Carbine\n  + New Land Pattern Pistol\n - British Sabre\n  - Baker Rifle\n  **French:** \n - M1777 Charleville\n- French Sabre \n- An IX. Pistole \n- An XII. Carabine \n **Prussia:** \n - Blucher Säbel\n - M1809 Potzdam \n - M1801 Scharfschützegewehr\n - Potzdam Pistole \n \n **Artillery pieces:** \n + 6 pounder cannon \n - 12 pounder cannon \n\n **Misc:** \n - Whistle \n - Spyglass \n- Flag pole\n - Drums \n - Fife \n - Ammo boxes \n - Ammo Wagon \n  \n **Game User Interface:** \n + Compass UI \n + Healthbar UI \n - Loadout UI \n \n **Projectiles:** \n - Canister shot \n - Grape shot \n - Round shot \n - Chain shot\n \n **Equipment:** \n + Worm \n + Rammer \n + Linstock \n - Sponge", 
	    "footer": {
			"text": "Made By Bellum Gerere",
			"icon_url": ""
      }
  }
});         
          }
          });

//----//
const http = require('http');
const express = require('express');
const app = express();
/*global Set, Map*/
app.use(express.static('public'));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.repl.co`);
}, 280000);

client.login(token);
