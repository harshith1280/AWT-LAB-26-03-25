import { Component } from '@angular/core';

  id: number;
  name: string;
  age: number;
  branch: string;


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  items = [
    { id: 1, name: 'Harshith', age: 21, branch: 'IT' },
    { id: 2, name: 'Priya', age: 21, branch: 'CSE' },
    { id: 3, name: 'Tanish', age: 21, branch: 'EEE' }
  ];

  newItem = { id: 0, name: '', age: null, branch: '' };
  editItem = null;

  createItem() {
    if (this.newItem.name && this.newItem.age && this.newItem.branch) {
      this.newItem.id = this.items.length + 1; // Simple ID assignment
      this.items.push({thisnewItem });
      this.newItem = { id: 0, name: '', age: null, branch: '' }; // Reset newItem
    }
  }

  edit(item) {
    this.editItem = { ...item };
  }

  updateItem() {
    if (this.editItem) {
      const index = this.items.findIndex(item => item.id === this.editItem.id);
      if (index !== -1) {
        this.items[index] = { ...this.editItem };
        this.editItem = null;
      }
    }
  }

  deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
