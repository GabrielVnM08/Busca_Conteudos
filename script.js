function performSearch(keyword) {
    const results = searchTree.search(keyword);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (results && results.length > 0) {
      const ul = document.createElement('ul');
      results.forEach(function(url) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = url;
        li.appendChild(a);
        ul.appendChild(li);
      });
      resultsDiv.appendChild(ul);
    } else {
      resultsDiv.textContent = 'Nenhum resultado encontrado para "' + keyword + '".';
    }
  }
  