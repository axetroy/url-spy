/**
 * Created by axetroy on 17-7-3.
 */

import EventEmitter from '@axetroy/event-emitter.js';

const VOID = 'undefined';

const global =
  typeof window !== VOID ? window : typeof global !== VOID ? global : this;

const historyPrototype = global.history.__proto__
  ? global.history.__proto__
  : global.history.prototype ? global.history.prototype : global.history;

const { replaceState, pushState } = historyPrototype;

class History extends EventEmitter {
  constructor() {
    super();
    const handler = () => {
      this.emit('urlchange', ...arguments);
    };
    this.on('hashchange', handler);
    this.on('pushstate', handler);
    this.on('repalcestate', handler);
    this.hook();
    this.listen();
  }

  hook() {
    const _this = this;
    Object.defineProperty(history, 'replaceState', {
      configurable: true,
      enumerable: true,
      value: function() {
        const oldLocation = { ...location };
        replaceState.call(this, ...arguments);
        const newLocation = { ...location };
        _this.emit('replacestate', oldLocation, newLocation, {
          hashChange: false
        });
      }
    });
    Object.defineProperty(history, 'pushState', {
      configurable: true,
      enumerable: true,
      value: function() {
        const oldLocation = { ...location };
        pushState.call(this, ...arguments);
        const newLocation = { ...location };
        _this.emit('pushstate', newLocation, oldLocation, {
          hashChange: false
        });
      }
    });
  }

  listen() {
    this.listenHashChange();
    this.listenUrlChange();
  }

  listenHashChange() {
    addEventListener(
      'hashchange',
      () => {
        let oldLocation, newLocation;
        oldLocation = newLocation = { ...location };
        this.emit('hashchange', oldLocation, newLocation, { hashChange: true });
      },
      false
    );
  }

  listenUrlChange() {}
}

export default new History();
