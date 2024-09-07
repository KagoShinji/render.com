const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.get('/firstname', (req, res) => {
    res.send('JOHNJOSFIR'.toUpperCase()); 
});

app.get('/lastname', (req, res) => {
    res.send('ROCA'.toUpperCase()); 
});

app.get('/age', (req, res) => {
    res.send('21'); 
});

app.get('/schoolemail', (req, res) => {
    res.send('jobe.roca.swu@phinmaed.com'); 
});

app.get('/mydata', (req, res) => {
    const myData = {
        first_name: 'JOHNJOSFIR'.toUpperCase(), 
        last_name: 'ROCA'.toUpperCase(),    
        age: 21,                      
        school_email: 'jobe.roca.swu@phinmaed.com' 
    };
    res.json(myData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
