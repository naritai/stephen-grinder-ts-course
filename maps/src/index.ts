import { Company } from "./company";
import { CustomMap } from "./CustomMap";
import { User } from "./user";

const customMap = new CustomMap({
  selector: '#map',
  options: {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7,
  }
});

declare global {
  interface Window {
    X: any;
  }
}

const user = new User();
const company = new Company();


customMap.addMarker(user);
customMap.addMarker(company);
