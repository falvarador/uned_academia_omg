export default class SerializeForm {
  constructor(form: HTMLFormElement) {
    if (!(form instanceof HTMLFormElement)) throw new TypeError("Serialize expected an HTMLFormElement.");

    this.data = new FormData(form);
  }

  private data: FormData;

  string(): string {
    return new URLSearchParams(String(this.data)).toString();
  }

  array(): Array<any> {
    const pairs = [];

    for (const [name, value] of this.data) {
      pairs.push({ name, value });
    }

    return pairs;
  }

  object(): object {
    const pairs: { [index: string]: any } = {};

    for (const [name, value] of this.data) {
      pairs[name] = value;
    }

    return pairs;
  }

  json(): string {
    return JSON.stringify(this.object());
  }
}
