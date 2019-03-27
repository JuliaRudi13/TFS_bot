const Telegraf = require('telegraf')

const bot = new Telegraf('807177629:AAHtH5tgegM33_HZg8H0NxaK2G28BQAlFmw')
bot.start((ctx) => ctx.reply('Привет'))
bot.help((ctx) => ctx.reply('Никакой помощи от бога помощи'))
bot.on('message', (ctx) => ctx.reply(ctx.message.text))
bot.launch()
