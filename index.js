const Discord = require("discord.js")
const {
	MessageEmbed
} = require('discord.js');
const client = new Discord.Client()
const bottoken = process.env['bottoken']
const bot_auth = process.env['bot_auth']
const list = client.guilds.cache["899479806415106058"];
const fetch = require('node-fetch')
const fs = require('fs')
const http = require('http')
var prefix = "!"

const Database = require("@replit/database")
const db = new Database()


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





//ai
const {
	Configuration,
	OpenAIApi
} = require("openai");
const configuration = new Configuration({
	organization: "org-wRVyW02awfopPXKATNFMVp6x",
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);



//application has started
const activities = [
	"with fire",
	"with the developers console",
	"with knives",
	"with JavaScript",
	"with some code stuff",
	"with commands"
];

let spamtxt = 'test';
for (i = 0; i < 7; i++) {
	spamtxt += spamtxt + '\n';
}
//░░░░░░░░░░░░░░░░░░░░░░░░░░░░..,,,,,,,,,..░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
const dog = `

░░░░░░░░░░░░░░░░░░░░░.,;%%%%%%%%%%%%%%%%%%%%;,.░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░%%%%%%%%%%%%%%%%%%%%////%%%%%%,░.,;%%;,░░░░░░░░░░░░
░░░░░░░░░░░░.,;%/,%%%%%/////%%%%%%%%%%%%%%////%%%%,%%//%%%,░░░░░░░░░░░
░░░░░░░░.,;%%%%/,%%%///%%%%%%%%%%%%%%%%%%%%%%%%%%%%,////%%%%;,░░░░░░░░
░░░░░.,%%%%%%//,%%%%%%%%%%%%%%%%@@%a%%%%%%%%%%%%%%%%,%%/%%%%%%%;,░░░░░
░░░.,%//%%%%//,%%%%///////%%%%%%%@@@%%%%%%///////%%%%,%%//%%%%%%%%,░░░
░,%%%%%///%%//,%%//%%%%%///%%%%%@@@%%%%%////%%%%%%%%%,/%%%%%%%%%%%%%░░
.%%%%%%%%%////,%%%%%%%//%///%%%%@@@@%%%////%%/////%%%,/;%%%%%%%%/%%%░░
%/%%%%%%%/////,%%%%///%%////%%%@@@@@%%%///%%/%%%%%//%,////%%%%//%%%'░░
%//%%%%%//////,%/%a\`░░'a%///%%%@@@@@@%%////a\`░░'a%%%%,//%///%/%%%%%░
%///%%%%%%///,%%%%@@aa@@%//%%%@@@@S@@@%%///@@aa@@%%%%%,/%////%%%%%░░░░
%%//%%%%%%%//,%%%%%///////%%%@S@@@@SS@@@%%/////%%%%%%%,%////%%%%%'░░░░
%%//%%%%%%%//,%%%%/////%%@%@SS@@@@@@@S@@@@%%%%/////%%%,////%%%%%'░░░░░
\`%/%%%%//%%//,%%%///%%%%@@@S@@@@@@@@@@@@@@@S%%%%////%%,///%%%%%'░░░░░
░░%%%%//%%%%/,%%%%%%%%@@@@@@@@@@@@@@@@@@@@@SS@%%%%%%%%,//%%%%%'░░░░░░░
░░\`%%%//%%%%/,%%%%@%@@@@@@@@@@@@@@@@@@@@@@@@@S@@%%%%%,/////%%'░░░░░░░
░░░\`%%%//%%%/,%%%@@@SS@@SSs@@@@@@@@@@@@@sSS@@@@@@%%%,//%%//%'░░░░░░░░
░░░░\`%%%%%%/░░%%S@@SS@@@@@Ss\`░.,,.░░░░'sS@@@S@@@@%'░░///%/%'░░░░░░░░
░░░░░░\`%%%/░░░░%SS@@@@SSS@@S.░░░░░░░░░.S@@SSS@@@@'░░░░//%%'░░░░░░░░░░
░░░░░░░░░░░░░░░/\`S@@@@@@SSSSSs,░░░░░,sSSSSS@@@@@'░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░%%//\`@@@@@@@@@@@@@Ss,sS@@@@@@@@@@@'/░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░%%%%@@00\`@@@@@@@@@@@@@'@@@@@@@@@@@'//%%░░░░░░░░░░░░░░░░░░░
░░░░░░░%%%%%%a%@@@@000aaaaaaaaa00a00aaaaaaa00%@%%%%%░░░░░░░░░░░░░░░░░░
░░░░%%%%%%a%%@@@@@@@@@@000000000000000000@@@%@@%%%@%%%░░░░░░░░░░░░░░░░
░%%%%%%a%%@@@%@@@@@@@@@@@00000000000000@@@@@@@@@%@@%%@%%░░░░░░░░░░░░░░
%%%aa%@@@@@@@@@@@@@@0000000000000000000000@@@@@@@@%@@@%%%%░░░░░░░░░░░░
%%@@@@@@@@@@@@@@@00000000000000000000000000000@@@@@@@@@%%%%%░░░░░░░░░░
`

/*const animationFrames = [
	"",
	"▏",
	"▎",
	"▍",
	"▋",
	"▊",
	"▉",
	"▉▏",
	"▉▎",
	"▉▍",
	"▉▋",
	"▉▊",
	"▉▉",
	"▉▉▏",
	"▉▉▎",
	"▉▉▍",
	"▉▉▋",
	"▉▉▊",
	"▉▉▉",
	"▉▉▉▏",
	"▉▉▉▎",
	"▉▉▉▍",
	"▉▉▉▋",
	"▉▉▉▊",
	"▉▉▉▉"
] */
const animationFrames = [
	'⡿',
	'⣟',
	'⣯',
	'⣷',
	'⣾',
	'⣽',
	'⣻',
	'⢿'
];

const servers = {
	"test": ["1042654076032270426", {
		"botcmd": "1074851380252115014",
		"botcmd2":"1082072314855837817"
	}],
	"theSAM": ["1065073248460623893", {
		"general": "1065073249618247802",
		"random-quotes": "1065074622866927677",
		"birthdays": "1065163019061047357",
		"bots-you-guys-want": "1081799345659183124",
		"chat-gpt": "1081867753708851340",
		"bot-commands": "1081994598538281131",
		"applications-for-the-council": "1065105995304550540"
	}]
}

const comments = [
	["help", ["no", "nah", "you do it", "you're good", "with what?"], 6],
	["run with a purpose", ["run with a porpoise"], 1],
	["@fluffy", ["```" + dog + "```"], 1],
	[".*(purpose)([^ ]*).*", ["*porpoise$2"], 20],
	["(how do (?:you|I) .*)", ["https://letmegooglethat.com/?q=$1"], 5],
	["(do you know how to .*)", ["https://letmegooglethat.com/?q=$1"], 5],
	[".*<@899426743130128414>.*", ["mrphi05: \n yes\?"], 1],
	[".*", ["cool!", "nice", "that is nice", "ok"], 300],
	["you are (.*)", ["I know you are $1 but what am I?"], 100],
	["spam!", [spamtxt, "I'm good", "nah"], 1],
	[".*(<@1079233005962403951>).*", ["YOU HAVE PINGED THE GREAT $1, WHAT DO YOU WANT?", "hello?"], 1],
	[".*(<@\d+>).*", ["YOU HAVE PINGED THE GREAT $1, WHAT DO YOU WANT?", "yes?"], 50]
];

function log(input,username,server,channel) {
	const date = new Date();
	const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	const logFolder = `logs/${server}`
	const logFolder2 = logFolder+`/${channel}`;
  const logFileName = `${logFolder2}/log_${channel}_${formattedDate}.log`;

  console.log(username+'>'+input)

  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }
	if (!fs.existsSync(logFolder2)) {
    fs.mkdirSync(logFolder2);
  }

	if (!fs.existsSync(logFileName)) {
		fs.writeFileSync(logFileName, '');
	}
	fs.appendFileSync(logFileName, `${formattedTime}>${username}> ${input}\n`);
}

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

function setActivity(activity, type, url) {
	client.user.setActivity(activity); //, { type: 'WATCHING', url:'https://example.com/' }
}

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
	console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
	// run every 10 seconds
	setInterval(() => {
		// generate random number between 1 and list length.
		const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
		const newActivity = activities[randomIndex];

		setActivity(newActivity);
	}, 5000);
	/*
	let i = 0;
	console.log(animationFrames.length);
	setInterval(() => {

		if (Math.floor(Math.random()*5) == 0){
			i++;
		i = i % animationFrames.length;
		setActivity("loading... " + animationFrames[i]);
		}
	
	}, 100) */
	/*
	setInterval(() => {
		setActivity(`try ${comments[Math.floor(Math.random()*comments.length)][0]}`)
	},10000)*/
	client.user.setPresence({
		status: 'online', // online, idle, invisible, dnd

	});
})
console.clear();


//remote START
function sendMessage(server, channel, message) {
  const serverId = servers[server][0];
  const channelId = servers[server][1][channel];
  const targetChannel = client.guilds.cache.get(serverId).channels.cache.get(channelId);
  targetChannel.send(message);
}

// middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// handle GET request to /runcmd
app.get('/runcmd', (req, res) => {
  // render a form for the user to input server, channel, and command information
  res.send(fs.readFileSync('remote.html', "utf8"));

	if (req.query) {
		
  const server = req.query.server;
  const channel = req.query.channel;
  const command = req.query.command;

  // send the command to the specified server and channel
  sendMessage(server, channel, command);
	console.log("sent message",server,channel,command);
	}
	
});

// handle POST request to /runcmd
app.post('/runcmd', (req, res) => {
  // get the server, channel, and command from the form data
  const query = url.parse(req.url, true).query;
  const server = query.server;
  const channel = query.channel;
  const command = query.command;

  // send the command to the specified server and channel
  sendMessage(server, channel, command);
	console.log("sent message",server,channel,command);

  // redirect the user back to the form
  res.redirect('/runcmd');
});
//remote END




//og code START
client.on("message", async function(msg) {
	
	
	//if (msg.author.bot) return;
	let prompt = msg.content;
	let promptl = prompt.toLowerCase();
	log(prompt,msg.author.username,msg.guild.name,msg.channel.name);
	let HP = false;
	if (msg.member.roles.cache.some(role => role.name === 'sniper') || msg.member.id == "1079233005962403951") {
		HP = true
	}

	//webhook
	if (prompt.startsWith('botme')) {
    const text = prompt.slice(6).trim();
    if (!text) return msg.reply('You need to provide some text!');
    const webhook = await msg.channel.createWebhook(msg.author.username, {
      avatar: msg.author.displayAvatarURL({ dynamic: true })
    });
    await webhook.send(text, {
      username: msg.author.username,
      avatarURL: msg.author.displayAvatarURL({ dynamic: true })
    });
    await webhook.delete();
    await msg.delete();
  }
	if (prompt === 'webh' && HP) {
		console.log("making webhook")
		const webhook = await msg.channel.createWebhook(msg.member.id + ":" + msg.member.user.tag);
		const url = webhook.url;
		const hook = makeHook(webhook)
		console.log(webhook)
		msg.author.send(`Here's your new webhook: ${webhook.url}`);
	}

	//snipe
	if (prompt.substring(0, 6).toLowerCase() === prefix + "snipe" && HP) {
		let regexp = new RegExp("snipe (?<server>.*?) (?<channel>.*?) (?<message>.*)", "gmi");
		//!snipe test botcmd testing testing 123

		let inf = regexp.exec(prompt);
		console.log(inf);
		server = servers[inf.groups.server][0];
		channel = servers[inf.groups.server][1][inf.groups.channel];
		mesg = inf.groups.message;


		try {
			setTimeout(() =>{client.guilds.cache.get(server).channels.cache.get(channel).send(mesg)},1000);
		} catch (err) {
			console.log("Could not send message to " + guild.name);
		}

	}


	//ascii
	if (prompt.substring(0, 5).toLowerCase() === "ascii") {
		console.log("ascii art")
		let url = "https://asciified.thelicato.io/api?text=ASCII&font=DOS%20Rebel";
		const txt = prompt.substring(6, prompt.length);
		const font ="ANSI Shadow"; //"3D-ASCII";
		const toget = "https://asciified.thelicato.io/api?text=" + txt + "&font=" + font;
		fetch(toget).then(function(response) {
			response.text().then(function(text) {
				msg.channel.send('\n```' + text + "```");
				return;
			});
		});
	}

	//all mssages
	if (promptl === "quote") {
		const channel = client.guilds.cache.get("1065073248460623893").channels.cache.get("1065074622866927677");

		channel.messages.fetch({
			limit: 200
		}).then(messages => {
			console.log(`Received ${messages.size} messages`);
			//Iterate through the messages here with the variable "messages".
			quotes = [];

			messages.forEach((message) => {
				if (message.content.includes("-")) {
					quotes.push(message.content);
				}
			})
			let toSend = quotes[Math.floor(Math.random() * quotes.length)];
			//console.log(msg.channel)
			//console.log(client.guilds.cache.get("1065073248460623893").channels.cache.get("1065074622866927677"))
			if (msg.channel !== client.guilds.cache.get("1065073248460623893").channels.cache.get("1065074622866927677")) {
				console.log("sending", toSend);
				msg.channel.send(toSend);
				msg.delete({
					timeout: 500
				});
			} else {
				msg.channel.send("cannot send quotes here");
				msg.delete({
					timeout: 500
				});
			}
		})
	}


	//auto comments
	for (i = 0; i < comments.length; i++) {
		let ansNum = Math.floor(Math.random() * comments[i][1].length);
		let regexp = new RegExp(comments[i][0], "gmi");

		let response = prompt.replace(regexp, comments[i][1][ansNum]);
		if (response.substring(0, 8) == "https://") {
			response = response.replaceAll(" ", "+");
		}

		if (response !== prompt && Math.floor(Math.random() * comments[i][2]) == 0) {
			console.log(response);
			msg.channel.send(response);
			console.log(prompt.match);
			break;
		}
	}



});
client.on('message', msg => {
	if (msg.author.bot) return;
	if (prompt.includes(prefix)) {
		//	msg.delete({ timeout: 5000 });
	}
});
//og code END



//DO NOT EDIT BELOW IDIOT
client.login(bottoken)

function requestListener(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// declare CORS policies and type of data
	if (req.headers["access-control-request-method"])
		res.setHeader('Access-Control-Allow-Methods', req.headers["access-control-request-method"]);
	if (req.headers['access-control-request-headers'])
		res.setHeader("Access-Control-Allow-Headers", req.headers['access-control-request-headers']);
	if (req.method.toLowerCase() === "options") {
		res.writeHead(200, "OK");
		res.end();
		return;
	}
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});

	res.write(fs.readFileSync('remote.html', "utf8"))
	//console.log(`${req.method} request recieved to site!`)
	res.end();
};
(function() {
	app.listen(process.env.PORT, () => console.log("Discord bot - Web Server Initialized"));
})();
