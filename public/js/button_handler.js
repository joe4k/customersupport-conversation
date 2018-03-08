function yesButton() {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest("yes",context)
}

function noButton() {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest("no",context);
}

