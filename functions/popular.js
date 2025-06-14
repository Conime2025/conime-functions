const fetch = require("node-fetch");

exports.handler = async function(event) {
  const { start, end } = event.queryStringParameters || {};

  const apiUrl = `https://cloud.umami.is/api/websites/ac1250c2-e2aa-48a1-9b97-205d83de250e/stats/pages?start=${start}&end=${end}`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.UMAMI_API_KEY}`
    }
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};
