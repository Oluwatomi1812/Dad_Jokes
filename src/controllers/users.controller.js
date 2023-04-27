const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};
  
module.exports = {
 jokes : (req, res) =>{
  const asyncFn = async function(){
  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(404).send('Error fetching joke from API');
  }}
  asyncFn()
  }
}