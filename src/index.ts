export class Collection {
  private ready: boolean;

  constructor() {
    this.ready = false;
  }

  public isReady() {
    return this.ready;
  }

  public static show() {
    console.log('show');
  }

  public test = () => {
    const name: string = 'name';
    console.log('name:', name);
  };

  public async setReady(ready: boolean): Promise<void> {
    const callback = () => {
      for (const name of ['a', 'b', 'd']) {
        console.log(name);
      }
      console.log('callback');
    }
    callback();
    this.ready = ready;
    await Promise.resolve();
    return Promise.resolve();
  }
}


export const test = () => {
  console.log('test');
}

test();

new Collection().setReady(true);

const name = 'name';

export default name;
