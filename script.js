function addWord() {
  const english = document.getElementById('englishWord').value.trim();
  const translation = document.getElementById('translation').value.trim();
  if (english && translation) {
    const li = document.createElement('li');
    li.textContent = `${english} — ${translation}`;
    document.getElementById('wordList').appendChild(li);

    // Sözləri təmizlə
    document.getElementById('englishWord').value = '';
    document.getElementById('translation').value = '';
  }
}