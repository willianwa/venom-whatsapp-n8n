const venom = require('venom-bot');
const axios = require('axios');

venom.create('session1').then((client) => {
  client.onMessage(async (message) => {
    if (!message.isGroupMsg) {
      console.log('Mensagem recebida de:', message.from, message.body);
      await axios.post('https://SEU_WEBHOOK_DO_N8N', {
        from: message.from,
        message: message.body
      });
      await client.sendText(message.from, 'Recebido! ✅');
    }
  });
});
