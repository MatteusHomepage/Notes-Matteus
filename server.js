
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static(__dirname)); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

setInterval(() => {
    const host = process.env.RENDER_EXTERNAL_HOSTNAME;
    if (host) fetch(`https://${host}`).catch(() => {});
}, 300000);
