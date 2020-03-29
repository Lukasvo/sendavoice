const { TWILIO_SID, TWILIO_AUTH_TOKEN, PHONE_NUMBERS, FROM_NUMBER } = process.env;

const client = require('twilio')(TWILIO_SID, TWILIO_AUTH_TOKEN);
const VoiceResponse = require('twilio').twiml.VoiceResponse;

// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

const twiml = (audio) => {
  const response = new VoiceResponse();
  response.say('Hallo daar! Iemand liet een bericht achter via send a voice om jou een hart onder de riem te steken. Luister goed.', { voice: 'woman', language: 'nl-NL' });

  return response.toString();
};

export async function handler({ body }, context) {
  const phoneNumbers = JSON.parse(PHONE_NUMBERS);
  const to = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];

  try {
    const call = await client.calls
      .create({
        twiml: twiml(body),
        to,
        from: FROM_NUMBER
      });

    console.log(call.sid);
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: 200 })
    }
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
