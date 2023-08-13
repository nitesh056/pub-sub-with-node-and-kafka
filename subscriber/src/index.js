const io = require("./io");
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "subscriber",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "phrases-group" });

(async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "phrases" });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      if (topic === "phrases") {
        const phraseObject = JSON.parse(message.value.toString());
        if (phraseObject.priority >= 7) {
          io.emit("phrases", phraseObject);
        }
      }
    },
  });
})();
