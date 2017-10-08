import { extendObservable } from 'mobx';
import uuid from 'uuid';


export default class Todo {
  constructor(title, category, id = uuid.v4()) {
    extendObservable(this, {
      title,
      category,
      done: false,
      description: ''
    });

    this.id = id;
    this.timestomp = Date.now();
  }
}
