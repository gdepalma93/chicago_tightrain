exports.handler = async (event, context) => {
    let lambda_response = {     
   "sessionAttributes": {
      "specialist": event.currentIntent.slots.specialist,
      "keyword": event.sessionAttributes.keyword,
      "location": event.sessionAttributes.location
      
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "What area would you like to find a " + String(event.currentIntent.slots.specialist) + "?"
        },    
     } 
    }
    return lambda_response;
};
