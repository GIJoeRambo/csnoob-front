

const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (module === require.main) {

    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}


module.exports = app;
