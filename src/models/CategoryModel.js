import { extendObservable } from 'mobx';
import uuid from 'uuid';


class Category {
  constructor(title, parent = null, id = uuid.v4()) {
    extendObservable(this, {
      title,
      parent,
      opened: false
    });

    this.id = id;
    this.timestomp = Date.now();
  }
}

export default Category;
