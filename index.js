require("dotenv").config();

const express = require("express")
const cors = require("cors")
const builder = require("botbuilder")

const adapter = new builder.BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword
});

const app = express();

app.post("/", (req, res) => {
  adapter.processActivity(req, res, async turnContext => {
    if (turnContext.activity.type == "message") {
      const userInput = turnContext.activity.text;

      await turnContext.sendActivity(`Yes`)
    }
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})