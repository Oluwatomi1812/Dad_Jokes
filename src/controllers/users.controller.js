
options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  }
  
module.exports = {
    jokes : (req,res) =>{
      const asyncFn = async function(){ 
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }}
      asyncFn()
      res.send("Hi")
    },
       
    jokesBySearch : (req, res) =>{
        const {term} = req.query;
        res.status(200).json({
            status: "Sucessful!",
            message: "Search result found",
            data:{
                term
            }
        })
    }
}