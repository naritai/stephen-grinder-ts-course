import { User } from '../models/User';

export class UserForm {
  constructor(
    public parent: HTMLElement,
    public model: User
  ) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key:string]: () => void } {
    return {
      'click:.set-age': this.onSetRandomAge.bind(this),
      'click:.set-name': this.onUpdateName.bind(this)
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

  template(): string {
    return `
      <div>
        <h1>USER FORM!</h1>
        <div>Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input class="name-input" />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [event, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((elem: Element) => {
        elem.addEventListener(event, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElemennt = document.createElement('template');
    templateElemennt.innerHTML = this.template();

    this.bindEvents(templateElemennt.content);
    this.parent.append(templateElemennt.content);
  }
}