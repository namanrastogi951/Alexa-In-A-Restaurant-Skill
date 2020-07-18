// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello, Welcome to Naman Restaurant and Bar, How can i help you?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const FoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FoodIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aloo Tikki,Mango Chutney,Samosas,Raita,Momos,Pakora/Bhaji,Palak Paneer/Saag Paneer,Chana Dal,Aloo Gobi,Tandoori Chicken,Chicken Tikka Masala.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DirectionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DirectionIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        const direction=handlerInput.requestEnvelope.request.intent.slots.direct.value;
        switch(direction)
                {
            case 'bathroom':
                speechText+="Go left and then straight";
                break;
            case 'counter':
                speechText+="Go towards the right of the kitchen";
                break;
            case 'kitchen':
                speechText+="It's left from the end of the corridor";
                break;
            case 'bar':
                speechText+="Just besides the front door of the restaurant";
                break;
            case 'managers office':
                    speechText+="Go start and take a right";
                break;    
                default:
                    speechText="i didn't get this";
                 break;
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DishMadeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DishMadeIntent';
    },
    handle(handlerInput) {
    let speechText = '';
        const made=handlerInput.requestEnvelope.request.intent.slots.xyz.value;
        switch(made)
        {
            case 'Matar':
                speechText+="The BEST, home-style Punjabi matar paneer recipe. Instructions included for restaurant style mutter paneer masala. It’s incredibly flavorful thanks to the vibrant, spicy onion-tomato gravy. And who can resist that soft, succulent paneer cubes with perfectly cooked, soft green peas? A must try recipe for paneer lover!";
                break;
            case 'paratha':
                speechText+="Plain Paratha Recipe – This the simple, BASIC, EASY to make and most popular paratha recipe from India. It is made from whole wheat flour only unlike other breads made with all purpose flour.";
                break;
            case 'butter chicken':
                speechText+="Do you want to make Restaurant style paneer butter masala at home? YES PLEASE !!! and yes, it came out incredibly delicious + creamy, buttery. I bet you can’t stop eating it.";
                break;
                default:
                break;
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ManagerIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ManagerIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Manager is in his office.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PriceIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PriceIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        const dishprice=handlerInput.requestEnvelope.request.intent.slots.x.value;
        switch(dishprice)
        {
                    case 'what is the price of butter chicken':
                        speechText+="The price of plate of butter chicken is Rs.350";
                        break;
                    case 'what is the price of paratha':
                        speechText+="The price of a plate of paratha is Rs.50";
                        break;
                    case 'what is the price of Matar Panner':
                        speechText+="The price of a plate of matar panner is Rs.350";
                        break;
                    case 'what is the price of chicken biryani':
                        speechText+="The price of chicken biryani is Rs.400";
                        break;
                        default:
                        break;
        }
         return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MusicIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Yes sir, Which type of music would you like to listen?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SpecialtyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SpecialtyIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aloo Tikki,Mango Chutney,Samosas,Raita,Momos,Pakora/Bhaji,Palak Paneer/Saag Paneer';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const TodaySpecialtyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SpecialtyIntent';
    },
    handle(handlerInput) {
    let speechText = '';
        const today=handlerInput.requestEnvelope.request.intent.slots.day.value;
        switch(today)
        {
            case 'monday':
                 speechText+="Today's specialty is Aloo Chat";
                break;
            case 'tuesday':
                speechText+="Today's specialty is butter chicken";
                break;
            case 'wednesday':
                speechText+="Today's specialty is Mixed Veg Paratha";
                break;
            case 'thursday':
                speechText+="Today's specialty is Mutton biryani";
                break;
            case 'friday':
                speechText+="Today's specialty is matar panner";
                break;
            case 'saturday':
                speechText+="Today's specialty is palak panner";
                break;
            case 'sunday':
                speechText+="Today's specialty is veg chowmein";
                break;
                default:
                 break;
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ComplainIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComplainIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can talk about your complain with our Manager, Thank you!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const OwnerIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OwnerIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Owner of this Restaurant and bar is Naman Rastogi';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NameIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The name of the restaurant is Namans Restaurant';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EventIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EventIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can organize an event of maximum 200 guest with Rs.500 per person for a veg meal including beverages and Rs.800 per person for a nonveg. meal including beverages.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const StartersSnacksIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartersnacksIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Samosa, Aloo and Dal ki Tikki, Cheese Balls, Chicken Satay, Bhuna Masala Chicken Wings, Tangri Kebabs.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AboutRestIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AboutrestIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'This restaurant was established in 1990 with only two seats inside and had only 4 works in the initail stage. The founder of this restaurant is Nain Rastogi and this restaurant was inherited by his son Naman Rastogi ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        FoodIntentHandler,
        DirectionIntentHandler,
        DishMadeIntentHandler,
        ManagerIntentHandler,
        PriceIntentHandler,
        MusicIntentHandler,
        SpecialtyIntentHandler,
        TodaySpecialtyIntentHandler,
        ComplainIntentHandler,
        OwnerIntentHandler,
        NameIntentHandler,
        EventIntentHandler,
        StartersSnacksIntentHandler,
        AboutRestIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler,)
    .lambda();
