export class Product {
  constructor(sku: string, name: string, description: string, unitPrice: number, imageUrl: string, active: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date) {
    this._sku = sku;
    this._name = name;
    this._description = description;
    this._unitPrice = unitPrice;
    this._imageUrl = imageUrl;
    this._active = active;
    this._unitsInStock = unitsInStock;
    this._dateCreated = dateCreated;
    this._lastUpdated = lastUpdated;
  }
  private _sku: string;
  private _name: string;
  private _description: string;
  private _unitPrice: number;
  private _imageUrl: string;
  private _active: boolean;
  private _unitsInStock: number;
  private _dateCreated: Date;
  private _lastUpdated: Date;

  set sku(value: string) {
    this._sku = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set unitPrice(value: number) {
    this._unitPrice = value;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  set active(value: boolean) {
    this._active = value;
  }

  set unitsInStock(value: number) {
    this._unitsInStock = value;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  set lastUpdated(value: Date) {
    this._lastUpdated = value;
  }

  get sku(): string {
    return this._sku;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get active(): boolean {
    return this._active;
  }

  get unitsInStock(): number {
    return this._unitsInStock;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  get lastUpdated(): Date {
    return this._lastUpdated;
  }


}
