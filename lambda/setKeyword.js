exports.handler = async (event, context) => {
    let lambda_response = {     
   "sessionAttributes": {
      "keyword": event.currentIntent.slots.symptom,
      "specialist": event.sessionAttributes.specialist,
      "location": event.sessionAttributes.location
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "I'm sorry to hear that. Where are you looking to get treatment for " + String(event.currentIntent.slots.symptom) + "?"
        },    
     } 
    }
    return lambda_response;
};