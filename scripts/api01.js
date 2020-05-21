const path = require('path')
const ENV_PATH = path.join(__dirname, '/../.env');
require('dotenv').config({ path: ENV_PATH });
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();


// /*
//
//
//
//
//
//
// const axios = require('axios')
// const api = axios.create({
//   baseURL: 'https://slack.com/api',
//   headers: {
//     Authorization: `Bearer ${process.env.SLACK_TOKEN}`
//   }
// })
//
// api.post(`/chat.postMessage`, {
//   text: 'API でもメッセージを送信したい! ',
//   channel: "general"
// }).then(res => {
//   console.log(res.data) // レスポンスを表示
// })
// */
