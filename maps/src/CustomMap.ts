import Ymaps from 'yandex-maps';
import ymaps from 'ymaps';
import { Mappable } from './types';

type CustomMapOptions = {
  selector: string;
  options: Ymaps.IMapState;
}

export class CustomMap {
  private yandexMap: Ymaps.Map;
  private options: CustomMapOptions;
  private ymapsAPI: typeof Ymaps;

  defaultOptions: CustomMapOptions = {
    selector: '',
    options: {
      center: [55.76, 37.64],
      zoom: 7,
    }
  }

  constructor(opts = {}) {
    const resolvedOptions = { ...this.defaultOptions, ...opts, };
    const { selector, options } = resolvedOptions;

    ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=fc3cb2d6-e780-42a4-8cd0-b2bf2d6e25a1&lang=ru_RU')
      .then((maps: typeof Ymaps) => {
        this.ymapsAPI = maps;
        const mapElem = document.querySelector(selector);
        this.yandexMap = new maps.Map(mapElem as HTMLElement, options);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  addMarker(mappable: Mappable) {
    const { location: {lat, lng } } = mappable;
    const coords = [lat, lng];

    

    const placemark = new this.ymapsAPI.Placemark({
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'test!'
    }, {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '50'
    });
    
    this.yandexMap.geoObjects.add(placemark);
  }
}