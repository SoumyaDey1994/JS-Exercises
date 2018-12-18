const rp = require("request-promise");
const listId = 'c37e2714-ed77-4c90-a4d7-af252eb31c30';
// API parameters to get department wise user count
function apiParametersToGetDepartmentWiseUserCount(){
    let options = { 
        method: 'GET',
        url: 'https://apiqa.app.itcinfotech.com/sayso/isurvey/api/GetSurveyDepartmentResponseInfo/'+listId,
        headers: { 
            'Content-Type' : 'application/json'
            } 
        };
      return options;
}
//display department statistics
function getUserCounts(response){
    let countSummary = [];
    let countData = {};
    for(let data of response){
        if(data.Department === null)
            countData.detartment = "UNKNOWN"
        else
            countData.detartment = data.Department.toUpperCase()

        countData.totalNoOfUsersToRespond = data.TotalNoOfSurveyUser;
        countData.noOfUsersReesponded = data.Responded;
        countSummary.push(countData);
        countData= {};
    }

    console.log(countSummary);
}
async function getAPIResponse(){
    let options = apiParametersToGetDepartmentWiseUserCount();
    try{
      const response = JSON.parse(await(rp(options)));
      getUserCounts(response);
    }catch(err){
      console.log(`Error while fetching data: ${err}`)
    }
}
//API Parameters to get each queries of survey
function apiParametersToGetAllResponseGivenByUsers(){
    let options = { 
        method: 'GET',
        url: 'https://apiqa.app.itcinfotech.com/sayso/isurvey/api/GetSurveyResponseById/'+listId,
        headers: { 
            'Content-Type' : 'application/json'
            } 
        };
      return options;
}
// Categorize All the responses based on their type( choice, boolean, ...)
function categoriseResponsesForEachResponseType(response){
    // Get all response and question set as array
    let questionsObj = response.Questions;
    let responseObj = response.Response;
    // Filter Questions w.r.t their response type
    let choiceTypeQueries = questionsObj.filter((obj) => obj.Type==="Choice");
    let booleanTypeQueries = questionsObj.filter((obj) => obj.Type==="Boolean");
    let multiChoiceTypeQueries = questionsObj.filter((obj) => obj.Type==="MultiChoice");
    let gridChoiceTypeQueries = questionsObj.filter((obj) => obj.Type==="GridChoice");
    // Filter Responses w.r.t their response type
    let choiceTypeQueryResponses = responseObj.filter((obj) => obj.responseType==="Choice");
    let booleanTypeQueryResponses = responseObj.filter((obj) => obj.responseType==="Boolean");
    let multiChoiceTypeQueryResponses = responseObj.filter((obj) => obj.responseType==="MultiChoice");
    let gridChoiceTypeQueryResponses = responseObj.filter((obj) => obj.responseType==="GridChoice");
    //Get Schema/Structure of target response object for each query type( choice, boolean, ...)
    let choiceTypeQuerySchema = getSchemaOfSurveyStat(choiceTypeQueries);
    let booleanTypeQuerySchema = getSchemaOfSurveyStat(booleanTypeQueries);
    let multiChoiceTypeQuerySchema = getSchemaOfSurveyStat(multiChoiceTypeQueries);
    let gridChoiceTypeQuerySchema = getSchemaOfSurveyStat(gridChoiceTypeQueries);
    //Preapre the final object for every response type with count of user's responses
    let choiceTypeQueryResponseSummary = assignResponseCountToChoiceTypeQueryResults(choiceTypeQuerySchema, choiceTypeQueryResponses);
    let booleanTypeQueryResponseSummary = assignResponseCountToBooleanTypeQueryResults(booleanTypeQuerySchema, booleanTypeQueryResponses);
    let multiChoiceTypeQueryResponseSummary = assignResponseCountToMultiChoiceTypeQueryResults(multiChoiceTypeQuerySchema, multiChoiceTypeQueryResponses);
    let gridchoiceTypeQueryResponseSummary = assignResponseCountToGridChoiceTypeQueryResults(gridChoiceTypeQuerySchema, gridChoiceTypeQueryResponses);
    //Display final object for each response type
    console.log(`Choice Response Summary: \n${JSON.stringify(choiceTypeQueryResponseSummary)}`);
    console.log(`Boolean Response Summary: \n${JSON.stringify(booleanTypeQueryResponseSummary)}`);
    console.log(`MultiChoice Response Summary: \n${JSON.stringify(multiChoiceTypeQueryResponseSummary)}`);
    console.log(`GridChoice Response Summary: \n${JSON.stringify(gridchoiceTypeQueryResponseSummary)}`);
}
//Schmea Structure for Response
function getSchemaOfSurveyStat(queryObj){
    let queryResponseArray = [];
    let responeObjStructure = {};

    for(let qsObj of queryObj){
        responeObjStructure.staticName = qsObj.StaticName;
        responeObjStructure.query = qsObj.DisplayName;
        responeObjStructure.answer = {};
        queryResponseArray.push(responeObjStructure);
        responeObjStructure = {};
    }

    return queryResponseArray;
}
//Complete Object Schema by getting count of users for each option type/question for choice type queries
function assignResponseCountToChoiceTypeQueryResults(choiceTypeQuerySchema, choiceTypeQueryResponses){

    for(let response of choiceTypeQueryResponses){
        let indexOfQuery = choiceTypeQuerySchema.findIndex(obj => obj.staticName === response.staticName);
        let targetQueryObj = choiceTypeQuerySchema[indexOfQuery];
        let answerOfQuery = response.answer;
        if(targetQueryObj.answer.hasOwnProperty(answerOfQuery))
            targetQueryObj.answer[answerOfQuery]+= 1;
        else
            targetQueryObj.answer[answerOfQuery]= 1;
    }

    return choiceTypeQuerySchema;
}
//Complete Object Schema by getting count of users for each option type/question for boolean type queries
function assignResponseCountToBooleanTypeQueryResults(booleanTypeQuerySchema, booleanTypeQueryResponses){

    for(let response of booleanTypeQueryResponses){
        let indexOfQuery = booleanTypeQuerySchema.findIndex(obj => obj.staticName === response.staticName);
        let targetQueryObj = booleanTypeQuerySchema[indexOfQuery];
        let answerOfQuery = response.answer;
        if(targetQueryObj.answer.hasOwnProperty(answerOfQuery))
            targetQueryObj.answer[answerOfQuery]+= 1;
        else
            targetQueryObj.answer[answerOfQuery] = 1;
    }

    return booleanTypeQuerySchema;
}
//Complete Object Schema by getting count of users for each option type/question for multichoice type queries
function assignResponseCountToMultiChoiceTypeQueryResults(multiChoiceTypeQuerySchema, multiChoiceTypeQueryResponses){
    for(let response of multiChoiceTypeQueryResponses){
        let indexOfQuery = multiChoiceTypeQuerySchema.findIndex(obj => obj.staticName === response.staticName);
        let targetQueryObj = multiChoiceTypeQuerySchema[indexOfQuery];
        let answersOfQuery = response.answer.split(',');
        for(let i of answersOfQuery){
            if(targetQueryObj.answer.hasOwnProperty(i))
                targetQueryObj.answer[i]+= 1;
            else
                targetQueryObj.answer[i]= 1;
        }
    }

    return multiChoiceTypeQuerySchema;
}
//Complete Object Schema by getting count of users for each option type/question for gridchoice type queries
function assignResponseCountToGridChoiceTypeQueryResults(gridchoiceTypeQuerySchema, gridChoiceTypeQueryResponses){
    
    for(let response of gridChoiceTypeQueryResponses){
        let indexOfQuery = gridchoiceTypeQuerySchema.findIndex(obj => obj.staticName === response.staticName);
        let targetQueryObj = gridchoiceTypeQuerySchema[indexOfQuery];
        let parameters = getAllParametersForRating(response);
        let values = getAllRatingValues(response);
        for(let index in parameters){
            if(targetQueryObj.answer.hasOwnProperty(parameters[index])){
                if(targetQueryObj.answer[parameters[index]].hasOwnProperty(values[index]))
                    targetQueryObj.answer[parameters[index]][values[index]] += 1;
                else
                    targetQueryObj.answer[parameters[index]][values[index]] = 1;
            }else
                targetQueryObj.answer[parameters[index]] = {};
        }
    }
    return gridchoiceTypeQuerySchema;
}
//Get all subqueries/Parameters of GridChoice type questions
function getAllParametersForRating(responseObj){
    let parameters = responseObj.answer.split(/;#[\d]#/gim);    // Get ratting parameters
    parameters.splice((parameters.length -1), 1);     //Remove blank element from the end of array
    
    return parameters;
}
//Get ratings of subqueries/Parameters of GridChoice type questions
function getAllRatingValues(responseObj){
    let items = responseObj.answer.split(/(\w+)/gim);
    let values = items.filter(item => !(isNaN(item) || item =='' || item == ' '))
    return values;
}
// Get all user responses and analyze them
async function getAllResponseAndAnalyze(){
    let options = apiParametersToGetAllResponseGivenByUsers();
    try{
      const response = JSON.parse(await(rp(options)));
      categoriseResponsesForEachResponseType(response);
    }catch(err){
      console.log(`Error while fetching data: ${err}`)
    }
}


getAPIResponse();
getAllResponseAndAnalyze();