exports.handler = async function(event) {
  const { start, end } = event.queryStringParameters || {};

  const apiUrl = `https://cloud.umami.is/share/uMWnWOBHVuIVhfCZ/monumental-madeleine-1eeaaf.netlify.app/pages?start=${start}&end=${end}`;

  const response = await fetch(apiUrl);
  const text = await response.text();

  console.log("📡 Response Status:", response.status);
  console.log("📄 Response Text:", text);

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: text
  };
};
