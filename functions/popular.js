exports.handler = async function () {
  const apiUrl = "https://cloud.umami.is/share/data/uMWnWOBHVuIVhfCZ/monumental-madeleine-1eeaaf.netlify.app";

  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log("📡 Response Status:", response.status);
  console.log("📄 JSON Data:", JSON.stringify(json));

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(json.pageviews) // Atau kirim semua: JSON.stringify(json)
  };
};
