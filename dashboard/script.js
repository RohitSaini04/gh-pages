fetch('../metrics/history.json')
  .then(res => res.json())
  .then(data => {
    const labels = data.map(d => new Date(d.timestamp).toLocaleString());
    const passed = data.map(d => d.passed);
    const failed = data.map(d => d.failed);

    const ctx = document.getElementById('metricsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Passed',
            data: passed,
            borderColor: 'green',
            fill: false
          },
          {
            label: 'Failed',
            data: failed,
            borderColor: 'red',
            fill: false
          }
        ]
      }
    });
  });
