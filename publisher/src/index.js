const { Kafka, Partitioners } = require("kafkajs");

const { getPhrases } = require("./utils/phrase");
const { getRandomNumber } = require("./utils/number");
const { getTimestamp } = require("./utils/date");

const kafka = new Kafka({
  clientId: "publisher",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

(async () => {
  await producer.connect();
})();

setInterval(async () => {
  const messages = getPhrases().map((phrase) => {
    const message = {
      message: phrase,
      timestamp: getTimestamp(),
      priority: getRandomNumber(1, 10),
    };

    return { value: JSON.stringify(message) };
  });
  await producer.send({
    topic: "phrases",
    messages,
  });
}, 1000);
