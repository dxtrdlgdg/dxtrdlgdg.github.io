document.addEventListener("DOMContentLoaded", () => {
    const username = "your-github-username"; // Replace with your GitHub username
  
    fetch(`https://api.github.com/users/dextercdalogdog/repos?per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        const languageCounts = {};
        
        data.forEach((repo) => {
          const language = repo.language;
          if (language) {
            if (languageCounts[language]) {
              languageCounts[language]++;
            } else {
              languageCounts[language] = 1;
            }
          }
        });
  
        const languageList = document.getElementById("languageList");
        for (const language in languageCounts) {
          const listItem = document.createElement("li");
          listItem.textContent = `${language}: ${languageCounts[language]}`;
          languageList.appendChild(listItem);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  