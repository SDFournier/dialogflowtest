const {textQuery} = require('../chatbot/chatbot')

module.exports = app => {

    app.post('/text_query', async (req, res)=>{
        //console.log(req.body)
        
        const { text, userId} = req.body;
        const resultQuery = await textQuery(text, userId)//function in chatbot js
        //console.log(resultQuery[0].queryResult.fulfillmentMessages[0].payload.fields.opciones.listValue.values)
        const arrayObjectsOptions = resultQuery[0].queryResult.fulfillmentMessages[0].payload.fields.opciones.listValue.values;
        console.log(arrayObjectsOptions);
        const arrayOptions = arrayObjectsOptions.map((objt)=>{
            return objt.stringValue;
        })
        console.log(arrayOptions);
        console.log("------------->anduvo")
        res.send("resultQuery")
        
    })
    // app.post('/text_query', (req, res)=>{
    //     console.log(req)
    //     res.send("Text Query")

    // })

}