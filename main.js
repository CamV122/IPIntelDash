import './map.js';
import './charts.js';

fetch('https://ipapi.co/json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('info').innerHTML = \`
      <strong>IP:</strong> \${data.ip} <br>
      <strong>City:</strong> \${data.city} <br>
      <strong>Region:</strong> \${data.region} <br>
      <strong>Country:</strong> \${data.country_name} <br>
      <strong>ISP:</strong> \${data.org}
    \`;

    window.renderMap(data.latitude, data.longitude);
    window.updateChart(data.country_name);
  });
