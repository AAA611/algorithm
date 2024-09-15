// 主题对象 Subject Class

class Subject {
  constructor() {
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notify(data) {
    this.observers.forEach(observer => observer.update?.(data))
  }
}

// 观察者 Observer Class

class Observer {
  constructor(name) {
    this.name = name
  }

  update(data) {
    console.log(`${this.name} update!`, data);
  }
}

// test case

const subject = new Subject()

const ob1 = new Observer('ob1')
const ob2 = new Observer('ob2')

subject.addObserver(ob1)
subject.addObserver(ob2)

subject.notify('666')

