{

}

const express = require('express');

const app = express()

const PORT = 3002;

// web server : 
app.use(express.static("frontend"));

app.listen(PORT, function() {
    console.log("sucessfully running at http://localhost:"+PORT);
})

