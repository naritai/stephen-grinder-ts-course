import { HasId } from "../models/APISync";
import { Model } from "../models/Model";
 

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key:string]: Element } = {};

  constructor(
    public parent: Element,
    public model: T
  ) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key:string]: string } {
    return {};
  }

  eventsMap(): { [key:string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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

  mapRegions(templateElement: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = templateElement.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {};

  render(): void {
    this.parent.innerHTML = '';

    const templateElemennt = document.createElement('template');
    templateElemennt.innerHTML = this.template();

    this.bindEvents(templateElemennt.content);
    this.mapRegions(templateElemennt.content);
    this.onRender();

    this.parent.append(templateElemennt.content);
  }
}