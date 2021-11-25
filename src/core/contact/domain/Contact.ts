export class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthday: Date,
    public phone: string,
    public favorite: boolean,
    public message: string
  ) {}

  // validateProperties(): boolean {
  //   if (this.name.length < 3) {
  //     return false;
  //   }
  // }
}
