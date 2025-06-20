window.updateChart = (country) => {
  const ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Your Country'],
      datasets: [{
        label: 'Location Confidence',
        data: [100],
        backgroundColor: ['#36a2eb']
      }]
    }
  });
};
