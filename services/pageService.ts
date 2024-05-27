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
  finalAct = "1a8eed1dcac04fb4a88fa530e225791b",
  feedback = "1db0959a01f0415583120c9b1d918a86",
  usa = "8c0222e3c29041f5882c445b6ac2aa43",
}
