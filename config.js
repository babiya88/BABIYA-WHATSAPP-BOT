const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "ALIVE PHOTO එකට ඕනි URL එක මෙතන්ට දෙන්න",
ALIVE_MSG: process.env.ALIVE_MSG ||  "Hello, I am King Babiya whatsapp user bot i am alive now",
};
