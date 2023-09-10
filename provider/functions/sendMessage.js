import amqp from "amqplib";
import { v4 as transaction } from "uuid";

export default async function sendMessage(nameQueue, messageQueue ) {
  try {
    const connection = await amqp.connect(
      "amqp://fernando:1234546@192.168.1.153:5672"
    );

    const channel = await connection.createChannel();

    const queueName = nameQueue;

    const message = {
      id: transaction(),
      message: messageQueue,
    };

    console.log("Mensagem enviada", message);
    
    await channel.assertQueue(queueName);

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
}
