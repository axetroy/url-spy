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
    this.on('hashchange', (...argv) => {
      this.emit('urlchange', ...argv);
    });
    this.on('pushstate', (...argv) => {
      this.emit('urlchange', ...argv);
    });
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
        _this.emit('replacestate', oldLocation, newLocation);
      }
    });
    Object.defineProperty(history, 'pushState', {
      configurable: true,
      enumerable: true,
      value: function() {
        const oldLocation = { ...location };
        pushState.call(this, ...arguments);
        const newLocation = { ...location };
        _this.emit('pushstate', newLocation, oldLocation);
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
        this.emit('hashchange', { ...location });
      },
      false
    );
  }

  listenUrlChange() {
    addEventListener(
      'pushstate',
      () => {
        this.emit('pushstate', { ...location });
      },
      false
    );
  }
}

window.urlWatcher = new History();

// Object.defineProperty(window, 'history', {
//   value: new History(),
//   configurable: true,
//   enumerable: true
// });
