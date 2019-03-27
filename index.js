const Telegraf = require('telegraf')

const bot = new Telegraf('тут был мой токен')
bot.start((ctx) => ctx.reply('Привет'))
bot.help((ctx) => ctx.reply('Никакой помощи от бога помощи'))
bot.on('message', (ctx) => ctx.reply(ctx.message.text))
bot.launch()
