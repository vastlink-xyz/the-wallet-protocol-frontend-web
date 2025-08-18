// Shim to handle Node.js modules in the Lit Action environment

// Define Node.js modules
const util = {
  inspect: (obj) => JSON.stringify(obj),
  debuglog: () => () => {},
  inherits: (ctor, superCtor) => {
    if (!ctor || !superCtor) return;
    ctor.super_ = superCtor;
    if (superCtor.prototype) {
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: { value: ctor, enumerable: false, writable: true, configurable: true }
      });
    }
  }
};

const events = {
  EventEmitter: class EventEmitter {
    constructor() { this.events = {}; }
    on(event, listener) { (this.events[event] = this.events[event] || []).push(listener); return this; }
    emit(event, ...args) { (this.events[event] || []).forEach(fn => fn(...args)); return this; }
    removeListener() { return this; }
    once() { return this; }
  }
};

const buffer = {
  Buffer: globalThis.Buffer || class Buffer extends Uint8Array {
    static from(data) { return new Uint8Array(data); }
    static alloc(size) { return new Uint8Array(size); }
  }
};

const stream = {
  Readable: class Readable {
    constructor() { this.readable = true; }
    read() { return null; }
    pipe() { return this; }
    on() { return this; }
    once() { return this; }
    emit() { return this; }
  },
  Writable: class Writable {
    constructor() { this.writable = true; }
    write() { return true; }
    on() { return this; }
    once() { return this; }
    emit() { return this; }
  },
  Transform: class Transform {
    constructor() { this.readable = true; this.writable = true; }
    on() { return this; }
    once() { return this; }
    emit() { return this; }
  }
};

const crypto = {
  createHash: () => ({
    update: () => {},
    digest: () => new Uint8Array(32)
  }),
  randomBytes: (size) => new Uint8Array(size)
};

const path = {
  join: (...args) => args.join('/'),
  resolve: (...args) => args.join('/'),
  basename: (p) => p.split('/').pop(),
  dirname: (p) => p.split('/').slice(0, -1).join('/'),
  extname: (p) => {
    const parts = p.split('.');
    return parts.length > 1 ? '.' + parts.pop() : '';
  }
};

globalThis.require = (name) => {
  if (name === "ethers") {
    return ethers;
  }
  if (name === "util") {
    return util;
  }
  if (name === "events") {
    return events;
  }
  if (name === "buffer") {
    return buffer;
  }
  if (name === "stream") {
    return stream;
  }
  if (name === "crypto") {
    return crypto;
  }
  if (name === "path") {
    return path;
  }
  throw new Error("unknown module " + name);
};
