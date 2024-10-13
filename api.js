const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let userLinks = {}; // Temporary storage for user links. Replace this with a proper database in production.

app.post('/api/biolink', (req, res) => {
    const { userId, links } = req.body;

    // Store links for the user
    if (!userLinks[userId]) {
        userLinks[userId] = [];
    }
    userLinks[userId].push(...links);

    res.status(200).json({ message: 'Links saved successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});