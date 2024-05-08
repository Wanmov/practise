class Receiver {
  execute() {
    console.log("接收者执行请求");
  }
}

class Command {
  // 命令对象
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.execute();
  }
}

class Invoker {
  constructor(command) {
    this.command = command;
  }
  run() {
    console.log("执行命令");
    this.command.execute();
  }
}
