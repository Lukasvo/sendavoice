// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler({ body }, context) {
  console.log(body);

  try {
    const response = await axios.get("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } });
    const data = response.data;
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
