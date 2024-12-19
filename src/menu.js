document.getElementById('start-btn').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the game page
  });
  
  document.getElementById('leaderboard-btn').addEventListener('click', () => {
    alert('Leaderboards:\n\n1. HINLO - 10 Wins\n2. FELISILDA - 8 Wins\n3. ALCAREZ - 5 Wins');
  });
  
  document.getElementById('exit-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to exit?')) {
      window.close(); // Attempts to close the tab (may not work in all browsers)
    }
  });
  