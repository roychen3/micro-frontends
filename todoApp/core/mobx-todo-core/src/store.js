'use strict';

import { makeObservable, observable, action } from 'mobx';
import {
  fetchTodoListApi,
  addItemApi,
  updateItemApi,
  deleteItemApi,
} from 'todo-api';

class Store {
  list = [];
  loading = false;

  constructor() {
    console.log('TodoStore constructor');
    makeObservable(this, {
      list: observable,
      loading: observable,
      fetchTodoList: action,
      addItem: action,
      toggleItem: action,
      deleteItem: action,
    });
  }

  fetchTodoList() {
    this.loading = true;
    fetchTodoListApi()
      .then((response) => {
        this.list = response;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  addItem(title) {
    this.loading = true;

    addItemApi(title)
      .then((response) => {
        this.list.unshift(response);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  toggleItem(data) {
    this.loading = true;

    const postData = {
      ...data,
      completed: !data.completed,
    };
    updateItemApi(postData)
      .then((response) => {
        const index = this.list.findIndex((todo) => todo.id === response.id);
        if (index !== -1) {
          this.list.splice(index, 1, response);
        }
      })
      .finally(() => {
        this.loading = false;
      });
  }

  deleteItem(id) {
    this.loading = true;

    deleteItemApi(id)
      .then(() => {
        const newList = this.list.filter((item) => item.id !== id);
        this.list = newList;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

export const store = new Store();
