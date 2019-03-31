exports.handler = async (event, context) => {
    var result = {
            "geometry": {
                "location": {
                    "lat": 41.7383093,
                    "lng": -87.60453969999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 41.73965647989272,
                        "lng": -87.60332577010728
                    },
                    "southwest": {
                        "lat": 41.73695682010727,
                        "lng": -87.60602542989271
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
            "id": "02039661526f80741b156d5b58b8e28b69df7748",
            "name": "Johnny D. Parker, DPM",
            "place_id": "ChIJ5Tc72KYoDogRZRPe0_qh3co",
            "plus_code": {
                "compound_code": "P9QW+85 Chicago, Illinois, USA",
                "global_code": "86HJP9QW+85"
            },
            "rating": 4,
            "reference": "ChIJ5Tc72KYoDogRZRPe0_qh3co",
            "scope": "GOOGLE",
            "types": [
                "doctor",
                "health",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 5,
            "vicinity": "8601 S Cottage Grove Ave, Chicago"
        };
    let lambda_response = {     
   "sessionAttributes": {
      "specialist": event.sessionAttributes.specialist,
      "keyword": event.sessionAttributes.keyword,
      "location": event.sessionAttributes.location,
      "insurance": event.currentIntent.slots.networkt
      
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "I found " + result.name + " located at " + result.vicinity + ", he has a " + result.rating + " star rating."
        },    
     } 
    }
    return lambda_response;
};