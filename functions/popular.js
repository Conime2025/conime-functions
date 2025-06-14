export async function handler(event) {
  const apiKey = process.env.UMAMI_API_KEY;
  console.log("🔑 UMAMI_API_KEY:", apiKey);  // 🔍 debug

  const { start, end } = event.queryStringParameters || {};
  const apiUrl = `https://cloud.umami.is/api/websites/ac1250c2-e2aa-48a1-9b97-205d83de250e/stats/pages?start=${start}&end=${end}`;
  const response = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });

  console.log("🌐 Fetch status:", response.status);  // 🔍 debug

  const data = await response.json();

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}
