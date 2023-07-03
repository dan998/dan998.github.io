function updateProgressBar() {
  const progressBar = document.getElementById('progress');
  const percentageText = document.getElementById('percentage');

  let percentage = 0;
  const increment = 5;
  const intervalTime = 400; // 100 milliseconds

  const interval = setInterval(() => {
    percentage += increment;
    progressBar.style.width = percentage + '%';
    percentageText.textContent = percentage + '%';

    if (percentage >= 100) {
      clearInterval(interval);
      // Redirect to another page
      setTimeout(() => {
        window.location.href = 'Word_search.html';
      }, 1000); // Delay the redirect for 1 second
    }
  }, intervalTime);
}

// Example usage: calling updateProgressBar function
updateProgressBar();
