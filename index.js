"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();
const PORT = process.env.PORT || 3000

// Run server to listen on port 3000.
app.listen(PORT, () => {
  console.log('listening on ${ PORT }');
});

app.use(bodyParser.urlencoded({ extended: false } ));


app.post('/voice', (req, res) => {
    console.log("Inside B");
  // Generate a TwiML response
  let twiml = new twilio.twiml.VoiceResponse();
  // Talk in a robot voice over the phone.
  twiml.say('Call progress events are rad');
  // Set the response type as XML.
  res.header('Content-Type', 'text/xml');
  // Send the TwiML as the response.
  let to = req.body.to;
  let fromNumber = req.body.from;
  let callStatus = req.body.CallStatus;
  let callSid = req.body.callSid;

console.log(to, fromNumber, callStatus, callSid);

  res.send(twiml.toString());
});
app.get('/data',(req, res)=>{
    console.log("Inside C");
    res.send("App working")
});
app.get('/',(req, res)=>{
    console.log("Inside D");
    res.send("App working as local")
});

