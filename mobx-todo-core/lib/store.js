'use strict';

import { makeObservable, observable, action } from 'mobx';

class Store {
  list = [];

  constructor() {
    console.log('TodoStore constructor');
    makeObservable(this, {
      list: observable,
      addItem: action,
      toggleItem: action,
      deleteItem: action,
    });
  }

  addItem(content) {
    const data = {
      id: new Date().getTime(),
      content,
      isDone: false,
    };
    this.list.push(data);
  }

  toggleItem(id) {
    const newList = this.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    this.list = newList;
  }

  deleteItem(id) {
    const newList = this.list.filter((item) => item.id !== id);
    this.list = newList;
  }
}

export const store = new Store();
