const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/devkey')

const projectId = config.googleProjectId;
const sessionId = config.dialogFlowSessionId;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});

const textQuery = async(text, userId)=>{
    
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId); //+userId
    const request = {
        session: sessionPath,
        queryInput : {
            text: {
                text: text,
                languageCode: config.dialogFlowSessionLanguageCode,

            }
        }
    }

    try {
        const response = await sessionClient.detectIntent(request)
        //console.log(response.fulfillmentMessages)
        return response
    } catch(error) {
        console.log(error)
        return error
    }
    //connect with df api
    //detect the intent
    //filter out
    //send res
}

module.exports = {
    textQuery
}