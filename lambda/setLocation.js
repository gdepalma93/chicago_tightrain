exports.handler = async (event, context) => {
    let lambda_response = {     
   "sessionAttributes": {
      "specialist": event.sessionAttributes.specialist,
      "keyword": event.sessionAttributes.keyword,
      "location": event.currentIntent.slots.Location
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "Okay, and are you planning on using insurance?"
        },    
     } 
    }
    return lambda_response;
};