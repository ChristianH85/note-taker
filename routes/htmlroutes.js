  
var path = require("path")

module.exports = function(app) {
    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

// return the `notes.html` file.
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
};