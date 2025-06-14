exports.handler = async function () {
  const apiUrl = "https://cloud.umami.is/share/uMWnWOBHVuIVhfCZ/monumental-madeleine-1eeaaf.netlify.app/pages";

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
