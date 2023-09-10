import amqp from "amqplib";

export default async function consumeMessage(nameQueue) {
  try {
    
    const queue = nameQueue

    const connection = await amqp.connect("amqp://fernando:1234546@192.168.1.153:5672");

    const channel = await connection.createChannel();

    const queueName = queue;

    await channel.assertQueue(queueName);

    console.log(`Aguardando mensagens da fila order...`);

    channel.consume(queueName, (message) => {
      if (message !== null) {
        console.log(`Mensagem recebida: ${message.content.toString()}`);
        channel.ack(message);
      }
    });

  } catch (error) {
    console.error('Erro ao consumir mensagem:', error);
  }
}
