/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

var questions = [
    {
        "Approximately how many cells does the body contain?": [
            "100,000,000,000,000",
            "100,000,000,000",
            "100,000,000",
            "100,000"
        ]
    },
    {
        "How many miles of blood vessels are in an adult body?": [
            "60,000",
            "6000",
            "600",
            "60"
        ]
    },
    {
        "Where is the strongest muscle located?": [
            "jaw",
            "back",
            "leg",
            "arm"
        ]
    },
    {
        "The eye can distinguish approximately how many different colors?": [
            "10,000,000",
            "1,000,000",
            "10,000",
            "1000"
        ]
    },
    {
        "How many bones are in an adult human body?": [
            "206",
            "200",
            "232",
            "192"
        ]
    },
    {
        "What of the following is not true about humans?": [
            "Adults have more bones than infants",
            "The strongest bone in the body is the femur, or thigh bone",
            "The smallest bone is located in the middle ear",
            "Bone marrow makes up 4 percent of a human body mass"
        ]
    },
    {
        "How many teeth does a typical adult have?": [
            "32",
            "36",
            "30",
            "26"
        ]
    },
    {
        "Humans have a variety of teeth. Which one doesn't belong?": [
            "fangs",
            "molars",
            "premolars",
            "canines",
            "incisors"
        ]
    },
    {
        "How many chambers are there in the heart?": [
            "4",
            "5",
            "3",
            "2"
        ]
    },
    {
        "What's the scientific name for the shin bone?": [
            "tibia",
            "fibula",
            "radius",
            "ulna"
        ]
    },
    {
        "How many bones make up the vertebral column?": [
            "33",
            "37",
            "26",
            "24"
        ]
    },
    {
        "In the human body, what bone is often referred to as the collar bone?": [
            "clavicle",
            "scapula",
            "humerus",
            "sternum"
        ]
    },
    {
        "Which of the following is not a component of a human cell?": [
            "kryptonite",
            "mitochondrion",
            "nucleus",
            "microvilli"
        ]
    },
    {
        "Approximately, what's the fastest speed ever recorded for a human being?": [
            "28 miles per hour",
            "31 miles per hour",
            "21 miles per hour",
            "18 miles per hour"
        ]
    },
    {
        "How fast do nerve impulses travel in the body?": [
            "over 249 miles per hour",
            "over 149 miles per hour",
            "over 49 miles per hour",
            "over 319 miles per hour"
        ]
    },
    {
        "The surface area of a lung is equal to:": [
            "a tennis court?",
            "a basketball court?",
            "a football field?",
            "a shuffleboard court?"
        ]
    },
    {
        "A taste bud has a life span of how long?": [
            "10 days",
            "30 days",
            "6 months",
            "1 year",
            "a lifetime"
        ]
    },
    {
        "How long does it take a red blood cell to circulate through the whole body?": [
            "20 seconds",
            "2 minutes",
            "20 minutes",
            "2 hours"
        ]
    },
    {
        "A full adult bladder is the size of:": [
            "a softball?",
            "a basketball?",
            "a golfball?",
            "a football?"
        ]
    },
    {
        "About how much do the ashes of a cremated person weigh?": [
            "9 pounds",
            "29 pounds",
            "9 ounces",
            "19 pounds"
        ]
    },
    {
        "Which part of the body is comprised of the bones of the metatarsals and phalanges?": [
            "the feet",
            "the hands",
            "the spine",
            "the skull"
        ]
    },
    {
        "The largest bone in the body is:": [
            "the femur",
            "the humerus",
            "the spine",
            "the ulna"
        ]
    },
    {
        "How many genes are there in the human genome?": [
            "80,000",
            "40,000",
            "8000",
            "4000"
        ]
    },
    {
        "Which organ produces bile?": [
            "the liver",
            "the pancreas",
            "the stomach",
            "the gallbladder"
        ]
    },
    {
        "What type of joint is the hip?": [
            "ball and socket",
            "gliding",
            "hinge",
            "saddle"
        ]
    },
    {
        "Which organ of the body secretes insulin?": [
            "the pancreas",
            "the liver",
            "the kidneys",
            "the stomach"
        ]
    },
    {
        "Where would you find the carotid arteries?": [
            "the neck",
            "the legs",
            "the forearms",
            "the eyes"
        ]
    },
    {
        "A bone is joined to a muscle by which structure?": [
            "a tendon",
            "a ligament",
            "cartilage",
            "capillaries"
        ]
    },
    {
        "What is the name of the chemicals produced by the endocrine glands to control body functions?": [
            "hormones",
            "hemoglobin",
            "saliva",
            "electrolytes"
        ]
    },
    {
        "Which organ removes excess water from the blood?": [
            "the kidney",
            "the bladder",
            "the pancreas",
            "the liver"
        ]
    },
    {
        "Which organ produces urine?": [
            "the kidney",
            "the bladder",
            "the liver",
            "the small intestines"
        ]
    },
    {
        "When might a person experience rapid eye movement or REM?": [
            "during sleep",
            "during sex",
            "while eating",
            "while exercising"
        ]
    },
    {
        "What are the two main veins in the neck that return blood from the brain to the heart?": [
            "jugular veins",
            "brachial veins",
            "axillary veins",
            "femoral veins"
        ]
    },
    {
        "What is the more common name for the tympanic membrane?": [
            "the ear drum",
            "the scrotum",
            "the voice box",
            "the skin"
        ]
    },
    {
        "What is the scientific name for the windpipe?": [
            "the trachea",
            "the esophagus",
            "the tympanic membrane",
            "the bronchial tube"
        ]
    },
    {
        "Where would you find the patella?": [
            "in the knee",
            "in the elbow",
            "in the foot",
            "in the wrist"
        ]
    },
    {
        "Which organ destroys old red blood cells?": [
            "the spleen",
            "the heart",
            "the kidney",
            "the liver"
        ]
    },
    {
        "There are three bones in the inner ear that are collectively known as the auditory ossicles.  Which one doesn't belong?": [
            "cleaver",
            "hammer",
            "anvil",
            "stirrup"
        ]
    },
    {
        "How many ribs make up the rib cage?": [
            "24",
            "26",
            "23",
            "22"
        ]
    },
    {
        "What part of the body has the thinnest skin?": [
            "the eyelid",
            "the earlobe",
            "the buttock",
            "the forehead"
        ]
    },
    {
        "Which part of the body ages most rapidly?": [
            "the hands",
            "the feet",
            "the face",
            "the heart"
        ]
    },
    {
        "What part of the body can expand 20 times its normal size?": [
            "the stomach",
            "the lungs",
            "the ego",
            "the bladder"
        ]
    },
    {
        "A deficiency of which vitamin can cause scurvy?": [
            "vitamin C",
            "vitamin E",
            "Vitamin D",
            "Vitamin K"
        ]
    },
    {
        "Which is the most acidic part of the digestive system?": [
            "the stomach",
            "the large intestines",
            "the small intestines",
            "the colon"
        ]
    },
    {
        "Where would you find the pisiform bone?": [
            "the wrist",
            "the ankle",
            "the foot",
            "the hand"
        ]
    },
    {
        "What is the large muscle that sits beneath the lungs?": [
            "the diaphragm",
            "the pectoralis major",
            "the gluteus maximus",
            "the bicep"
        ]
    },
    {
        "Besides humans, what is the only other species that has sex for pleasure?": [
            "dolphins",
            "dogs",
            "chipmunks",
            "rabbits"
        ]
    },
    {
        "What percent of their DNA do humans share with bananas?": [
            "50 percent",
            "25 percent",
            "5 percent",
            "none"
        ]
    },
    {
        "How much nose hair will a human being grow in a lifetime?": [
            "6 feet",
            "3 feet",
            "1 foot",
            "9 feet"
        ]
    },
    {
        "How much does the average brain weigh?": [
            "about 3 pounds",
            "about 7 pounds",
            "about 5 pounds",
            "about 1 pound"
        ]
    },
    {
        "How much does the average head weigh?": [
            "about 10 pounds",
            "about 15 pounds",
            "about 5 pounds",
            "about 20 pounds"
        ]
    },
    {
        "How many times per day does the average person fart each day?": [
            "14 times",
            "24 times",
            "4 times",
            "none, if they are female"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.3076d8ab-c84b-4391-9045-23908727e314") {
         context.fail("Invalid Application ID");
      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Human Body Quiz";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Human Body Quiz. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {

    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

