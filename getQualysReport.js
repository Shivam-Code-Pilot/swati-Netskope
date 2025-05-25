const axios = require('axios');

async function getQualysReport(apiBaseUrl, apiToken) {
  const response = await axios.get(`${apiBaseUrl}/api/2.0/fo/scan/`, {
    headers: {
      'X-Requested-With': 'Botpress',
      'Authorization': `Bearer ${apiToken}`
    }
  });
  return response.data;
}

async function run(bp, event, { apiBaseUrl, apiToken }) {
  const report = await getQualysReport(apiBaseUrl, apiToken);
  event.state.report = JSON.stringify(report, null, 2).substring(0, 1000);
}
return run;
