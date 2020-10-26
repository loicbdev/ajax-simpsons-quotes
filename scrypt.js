function fetchSimpsonsJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        const simpsonsHtml = `
            <h2>${simpsons[0].character}</h2>
            <p>${simpsons[0].quote}</p>
            <img src="${simpsons[0].image}"/>
            `;
        document.querySelector('#simpsons-quote').innerHTML = simpsonsHtml;
      });
  }
  
  fetchSimpsonsJSON();
  
  document.getElementById('reload').addEventListener("click", function (){
    fetchSimpsonsJSON()
  });