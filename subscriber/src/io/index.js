const { Server } = require("socket.io");

const io = new Server();

io.listen(5000);

module.exports = io;
