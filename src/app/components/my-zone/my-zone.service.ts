import { Injectable } from '@angular/core';
import { IAsideSections, IMenuItems } from './my-zone.interface';
import { asideSections, asideItems } from "./aside-items";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyZoneService {


  _asideSections: IAsideSections[] = asideSections;
  _itemSelected: IMenuItems = undefined;
  _lastItemCode: string;
  _nameLastItem: string;
  _urlMain = new BehaviorSubject<string>('');

  constructor() { }


  get asideSections() {
    return this._asideSections;
  }

  get itemSelected() {
    return this._itemSelected;
  }

  get lastItem() {
    return this._lastItemCode;
  }
  set lastItem(item: string) {
    this._lastItemCode = item;
  }

  get nameLastItem() {
    return this._nameLastItem;
  }
  set nameLastItem(name: string) {
    this._nameLastItem = name;
  }

  get urlMain() {
    return this._urlMain.getValue();
  }

  set urlMain(url: string) {
    this._urlMain.next(url);
  }

}
