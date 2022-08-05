// Sample action, sends the whole event object (⚠️ including secrets!) to a webhook address, such us mockbin, pipedream, etc.
// Required Secrets: 
// - DESTINATION_URL: URL where the `event` object will be sent

const axios = require("axios")
exports.onExecutePostUserRegistration = async (event) => {
  await axios.post(`${event.secrets.DESTINATION_URL}`, 
    event)
}
