# Queue-RabbitMQ

> Back-end - Projeto para validar o conceito e funcionamento de filas.

### Conceito

Esse repositório não é um padrão de utilização de producer e consumer de filas.

O objetivo é verificar o limite para processamento de alto volume de mensagens e entender seu funcionamento.

Pontos desenvolvidos/construídos nessa validação:

- [x] Criado filas de processamento de mensagens;
- [x] Criado tópicos para esse fila para distribuição pelo do broker;
- [x] Criado workers para fazerem o consumo das filas;

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do `Docker`
- Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Instalando Queue-RabbitMQ

Para instalar o RabbitMQ, siga estas etapas:

Linux e macOS:

```

git clone https://github.com/fernando-ss-soares/Queue-RabbitMQ.git

```

Windows:

```

git clone https://github.com/fernando-ss-soares/Queue-RabbitMQ.git

```

## ☕ Usando Queue (RabbitMQ)

Dentro do repositório clonado execute o comando abaixo:

```

docker-compose up -d

```

Após a execução o sistema vai subir uma instância do RabbitMQ.

- Para enviar um mensagem a fila vá no diretório `provider` e execute o comando abaixo:

```

npm run server

```

- Para consumir a mensagem da fila vá no diretório `consumer` e execute o comando abaixo:

```

npm run server

```

## 📫 Contribuindo para Queue-RabbitMQ

Para contribuir com Taskify, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="https://avatars.githubusercontent.com/u/116040735?v=4" width="100px;" alt="Foto do Fernando Soares no GitHub"/><br>
        <sub>
          <b>Fernando Soares</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
