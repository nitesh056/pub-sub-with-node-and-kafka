const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.listen(5000);

module.exports = io;
