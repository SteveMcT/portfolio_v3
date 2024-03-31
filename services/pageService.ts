import { BehaviorSubject } from "rxjs";
import { singleton } from "tsyringe";

@singleton()
export class PageService {
  currentPage = new BehaviorSubject<null | string>(null);
  currentPageOpen = new BehaviorSubject(false);
}

export enum EPages {
  introduction = "06f8fdc5e6d041028bda2e6c994f5772",
  bigCountry = "2150487cf4f74646b62155c032c71236",
  centralPark = "cf92148a3e014bf0bb751ca830e71e1e",
  cae = "f416f9d6e3f64edc878d0929ea642bc5",
}
