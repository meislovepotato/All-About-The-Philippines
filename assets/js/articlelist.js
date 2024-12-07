const searchButton = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input[type="text"]');
const articles = document.querySelectorAll('.article-list li');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.toLowerCase();
  for (let i = 0; i < articles.length; i++) {
    const title = articles[i].querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      articles[i].style.display = 'block';
    } else {
      articles[i].style.display = 'none';
    }
  }
});

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
