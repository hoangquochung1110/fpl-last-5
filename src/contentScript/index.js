console.info('contentScript is running')
fetch("https://fantasy.premierleague.com/api/element-summary/1/")
  .then(response => response.json())
  .then(data => {
    console.log(data["fixtures"][0]);
    // Process the retrieved data here
  })
  .catch(error => {
    console.error("Error:", error);
  });