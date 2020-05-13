import { parallel } from './undertaker';

export function condition(taskName: string, conditional: () => boolean | Promise<boolean>) {
  return async function (done: any) {
    if (await conditional()) {
      parallel(taskName)(done);
    } else {
      done();
    }
  };
}
