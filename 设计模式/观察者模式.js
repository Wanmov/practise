class Subject {
  constructor() {
    this.observers = [];
  }
  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }
  // 移除观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }
  // 通知更新
  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer{
    update(data){
        console.log(`接收数据：${data} 并更新`)
    }
}