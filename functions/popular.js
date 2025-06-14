exports.handler = async function(event) {
  const { start, end } = event.queryStringParameters || {};
  const token = process.env.UMAMI_API_KEY;
  
  console.log("🔐 API KEY dipakai:", token?.slice(0, 10) + "...");

  const apiUrl = `https://cloud.umami.is/api/websites/ac7c54ac-52e5-4d84-876e-d6002d4db25e/stats/pages?start=${start}&end=${end}`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};
