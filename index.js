const server = require('./server.js');

const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
   console.log(`Shebang!! your server got up and running on port ${PORT}...`);
});