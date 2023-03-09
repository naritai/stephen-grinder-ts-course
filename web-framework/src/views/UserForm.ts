import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key:string]: () => void } {
    return {
      'click:.set-age': this.onSetRandomAge.bind(this),
      'click:.set-name': this.onUpdateName.bind(this),
      'click:.save-user': this.onSaveUser.bind(this)
    }
  }

  onSetRandomAge(): void {
    this.model.setRandomAge();
  }

  onUpdateName(): void {
    const inputName = this.parent.querySelector('.name-input') as HTMLInputElement;
    const { value } = inputName;

    if (value !== '') {
      this.model.set({ name: value.trim() });
    }
  }

  onSaveUser(): void {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input class="name-input" placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-user">Save User</button>
      </div>
    `;
  }  
}