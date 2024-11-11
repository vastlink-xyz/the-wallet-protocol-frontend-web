import { j as r, L as ne, T as ae, C as re, d as ye } from "./vendor-radix-CtBTfL6E.js";
import { c as R, a as z, d as Me, h as Re } from "./main-BiNWeoEw.js";
import { C as D } from "./index-DRdeb2zN.js";
import { a as je, f as O } from "./index-DZmehw99.js";
import { D as Ae, a as Se, b as Te, c as Ie, S as Pe } from "./SendModal-CJ4L05nS.js";
import { r as M, R as y, b as Be, L as Q } from "./vendor-react-lU71vM3H.js";
import { B as Le } from "./button-ClT0lWkU.js";
import { u as oe, B as Oe } from "./vendor-utils-CKvC_yGz.js";
import { X as ke, R as ze } from "./vendor-ui-utils-i3zS6aVb.js";
import { T as H } from "./TokenService-BJInqoec.js";
import { C as De } from "./card-D6TGDRO7.js";
import { u as Fe, L as Ue } from "./index-BjYMiP7I.js";
const _e = ye, ie = M.forwardRef(({ className: c, ...i }, o) => /* @__PURE__ */ r.jsx(
  ne,
  {
    ref: o,
    className: R(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      c
    ),
    ...i
  }
));
ie.displayName = ne.displayName;
const $ = M.forwardRef(({ className: c, ...i }, o) => /* @__PURE__ */ r.jsx(
  ae,
  {
    ref: o,
    className: R(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      c
    ),
    ...i
  }
));
$.displayName = ae.displayName;
const V = M.forwardRef(({ className: c, ...i }, o) => /* @__PURE__ */ r.jsx(
  re,
  {
    ref: o,
    className: R(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      c
    ),
    ...i
  }
));
V.displayName = re.displayName;
var Qe = Object.defineProperty, F = Object.getOwnPropertySymbols, le = Object.prototype.hasOwnProperty, ce = Object.prototype.propertyIsEnumerable, te = (c, i, o) => i in c ? Qe(c, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : c[i] = o, G = (c, i) => {
  for (var o in i || (i = {}))
    le.call(i, o) && te(c, o, i[o]);
  if (F)
    for (var o of F(i))
      ce.call(i, o) && te(c, o, i[o]);
  return c;
}, Y = (c, i) => {
  var o = {};
  for (var u in c)
    le.call(c, u) && i.indexOf(u) < 0 && (o[u] = c[u]);
  if (c != null && F)
    for (var u of F(c))
      i.indexOf(u) < 0 && ce.call(c, u) && (o[u] = c[u]);
  return o;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var I;
((c) => {
  const i = class x {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(e, s, t, n) {
      if (this.version = e, this.errorCorrectionLevel = s, this.modules = [], this.isFunction = [], e < x.MIN_VERSION || e > x.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (n < -1 || n > 7)
        throw new RangeError("Mask value out of range");
      this.size = e * 4 + 17;
      let a = [];
      for (let l = 0; l < this.size; l++)
        a.push(!1);
      for (let l = 0; l < this.size; l++)
        this.modules.push(a.slice()), this.isFunction.push(a.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(t);
      if (this.drawCodewords(h), n == -1) {
        let l = 1e9;
        for (let f = 0; f < 8; f++) {
          this.applyMask(f), this.drawFormatBits(f);
          const d = this.getPenaltyScore();
          d < l && (n = f, l = d), this.applyMask(f);
        }
      }
      g(0 <= n && n <= 7), this.mask = n, this.applyMask(n), this.drawFormatBits(n), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(e, s) {
      const t = c.QrSegment.makeSegments(e);
      return x.encodeSegments(t, s);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(e, s) {
      const t = c.QrSegment.makeBytes(e);
      return x.encodeSegments([t], s);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(e, s, t = 1, n = 40, a = -1, h = !0) {
      if (!(x.MIN_VERSION <= t && t <= n && n <= x.MAX_VERSION) || a < -1 || a > 7)
        throw new RangeError("Invalid value");
      let l, f;
      for (l = t; ; l++) {
        const p = x.getNumDataCodewords(l, s) * 8, N = v.getTotalBits(e, l);
        if (N <= p) {
          f = N;
          break;
        }
        if (l >= n)
          throw new RangeError("Data too long");
      }
      for (const p of [x.Ecc.MEDIUM, x.Ecc.QUARTILE, x.Ecc.HIGH])
        h && f <= x.getNumDataCodewords(l, p) * 8 && (s = p);
      let d = [];
      for (const p of e) {
        o(p.mode.modeBits, 4, d), o(p.numChars, p.mode.numCharCountBits(l), d);
        for (const N of p.getData())
          d.push(N);
      }
      g(d.length == f);
      const w = x.getNumDataCodewords(l, s) * 8;
      g(d.length <= w), o(0, Math.min(4, w - d.length), d), o(0, (8 - d.length % 8) % 8, d), g(d.length % 8 == 0);
      for (let p = 236; d.length < w; p ^= 253)
        o(p, 8, d);
      let E = [];
      for (; E.length * 8 < d.length; )
        E.push(0);
      return d.forEach((p, N) => E[N >>> 3] |= p << 7 - (N & 7)), new x(l, s, E, a);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(e, s) {
      return 0 <= e && e < this.size && 0 <= s && s < this.size && this.modules[s][e];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let t = 0; t < this.size; t++)
        this.setFunctionModule(6, t, t % 2 == 0), this.setFunctionModule(t, 6, t % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const e = this.getAlignmentPatternPositions(), s = e.length;
      for (let t = 0; t < s; t++)
        for (let n = 0; n < s; n++)
          t == 0 && n == 0 || t == 0 && n == s - 1 || t == s - 1 && n == 0 || this.drawAlignmentPattern(e[t], e[n]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(e) {
      const s = this.errorCorrectionLevel.formatBits << 3 | e;
      let t = s;
      for (let a = 0; a < 10; a++)
        t = t << 1 ^ (t >>> 9) * 1335;
      const n = (s << 10 | t) ^ 21522;
      g(n >>> 15 == 0);
      for (let a = 0; a <= 5; a++)
        this.setFunctionModule(8, a, u(n, a));
      this.setFunctionModule(8, 7, u(n, 6)), this.setFunctionModule(8, 8, u(n, 7)), this.setFunctionModule(7, 8, u(n, 8));
      for (let a = 9; a < 15; a++)
        this.setFunctionModule(14 - a, 8, u(n, a));
      for (let a = 0; a < 8; a++)
        this.setFunctionModule(this.size - 1 - a, 8, u(n, a));
      for (let a = 8; a < 15; a++)
        this.setFunctionModule(8, this.size - 15 + a, u(n, a));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let e = this.version;
      for (let t = 0; t < 12; t++)
        e = e << 1 ^ (e >>> 11) * 7973;
      const s = this.version << 12 | e;
      g(s >>> 18 == 0);
      for (let t = 0; t < 18; t++) {
        const n = u(s, t), a = this.size - 11 + t % 3, h = Math.floor(t / 3);
        this.setFunctionModule(a, h, n), this.setFunctionModule(h, a, n);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(e, s) {
      for (let t = -4; t <= 4; t++)
        for (let n = -4; n <= 4; n++) {
          const a = Math.max(Math.abs(n), Math.abs(t)), h = e + n, l = s + t;
          0 <= h && h < this.size && 0 <= l && l < this.size && this.setFunctionModule(h, l, a != 2 && a != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(e, s) {
      for (let t = -2; t <= 2; t++)
        for (let n = -2; n <= 2; n++)
          this.setFunctionModule(e + n, s + t, Math.max(Math.abs(n), Math.abs(t)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(e, s, t) {
      this.modules[s][e] = t, this.isFunction[s][e] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(e) {
      const s = this.version, t = this.errorCorrectionLevel;
      if (e.length != x.getNumDataCodewords(s, t))
        throw new RangeError("Invalid argument");
      const n = x.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][s], a = x.ECC_CODEWORDS_PER_BLOCK[t.ordinal][s], h = Math.floor(x.getNumRawDataModules(s) / 8), l = n - h % n, f = Math.floor(h / n);
      let d = [];
      const w = x.reedSolomonComputeDivisor(a);
      for (let p = 0, N = 0; p < n; p++) {
        let j = e.slice(N, N + f - a + (p < l ? 0 : 1));
        N += j.length;
        const k = x.reedSolomonComputeRemainder(j, w);
        p < l && j.push(0), d.push(j.concat(k));
      }
      let E = [];
      for (let p = 0; p < d[0].length; p++)
        d.forEach((N, j) => {
          (p != f - a || j >= l) && E.push(N[p]);
        });
      return g(E.length == h), E;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(e) {
      if (e.length != Math.floor(x.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let s = 0;
      for (let t = this.size - 1; t >= 1; t -= 2) {
        t == 6 && (t = 5);
        for (let n = 0; n < this.size; n++)
          for (let a = 0; a < 2; a++) {
            const h = t - a, f = (t + 1 & 2) == 0 ? this.size - 1 - n : n;
            !this.isFunction[f][h] && s < e.length * 8 && (this.modules[f][h] = u(e[s >>> 3], 7 - (s & 7)), s++);
          }
      }
      g(s == e.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(e) {
      if (e < 0 || e > 7)
        throw new RangeError("Mask value out of range");
      for (let s = 0; s < this.size; s++)
        for (let t = 0; t < this.size; t++) {
          let n;
          switch (e) {
            case 0:
              n = (t + s) % 2 == 0;
              break;
            case 1:
              n = s % 2 == 0;
              break;
            case 2:
              n = t % 3 == 0;
              break;
            case 3:
              n = (t + s) % 3 == 0;
              break;
            case 4:
              n = (Math.floor(t / 3) + Math.floor(s / 2)) % 2 == 0;
              break;
            case 5:
              n = t * s % 2 + t * s % 3 == 0;
              break;
            case 6:
              n = (t * s % 2 + t * s % 3) % 2 == 0;
              break;
            case 7:
              n = ((t + s) % 2 + t * s % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[s][t] && n && (this.modules[s][t] = !this.modules[s][t]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let e = 0;
      for (let a = 0; a < this.size; a++) {
        let h = !1, l = 0, f = [0, 0, 0, 0, 0, 0, 0];
        for (let d = 0; d < this.size; d++)
          this.modules[a][d] == h ? (l++, l == 5 ? e += x.PENALTY_N1 : l > 5 && e++) : (this.finderPenaltyAddHistory(l, f), h || (e += this.finderPenaltyCountPatterns(f) * x.PENALTY_N3), h = this.modules[a][d], l = 1);
        e += this.finderPenaltyTerminateAndCount(h, l, f) * x.PENALTY_N3;
      }
      for (let a = 0; a < this.size; a++) {
        let h = !1, l = 0, f = [0, 0, 0, 0, 0, 0, 0];
        for (let d = 0; d < this.size; d++)
          this.modules[d][a] == h ? (l++, l == 5 ? e += x.PENALTY_N1 : l > 5 && e++) : (this.finderPenaltyAddHistory(l, f), h || (e += this.finderPenaltyCountPatterns(f) * x.PENALTY_N3), h = this.modules[d][a], l = 1);
        e += this.finderPenaltyTerminateAndCount(h, l, f) * x.PENALTY_N3;
      }
      for (let a = 0; a < this.size - 1; a++)
        for (let h = 0; h < this.size - 1; h++) {
          const l = this.modules[a][h];
          l == this.modules[a][h + 1] && l == this.modules[a + 1][h] && l == this.modules[a + 1][h + 1] && (e += x.PENALTY_N2);
        }
      let s = 0;
      for (const a of this.modules)
        s = a.reduce((h, l) => h + (l ? 1 : 0), s);
      const t = this.size * this.size, n = Math.ceil(Math.abs(s * 20 - t * 10) / t) - 1;
      return g(0 <= n && n <= 9), e += n * x.PENALTY_N4, g(0 <= e && e <= 2568888), e;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const e = Math.floor(this.version / 7) + 2, s = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2;
        let t = [6];
        for (let n = this.size - 7; t.length < e; n -= s)
          t.splice(1, 0, n);
        return t;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(e) {
      if (e < x.MIN_VERSION || e > x.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let s = (16 * e + 128) * e + 64;
      if (e >= 2) {
        const t = Math.floor(e / 7) + 2;
        s -= (25 * t - 10) * t - 55, e >= 7 && (s -= 36);
      }
      return g(208 <= s && s <= 29648), s;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(e, s) {
      return Math.floor(x.getNumRawDataModules(e) / 8) - x.ECC_CODEWORDS_PER_BLOCK[s.ordinal][e] * x.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][e];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(e) {
      if (e < 1 || e > 255)
        throw new RangeError("Degree out of range");
      let s = [];
      for (let n = 0; n < e - 1; n++)
        s.push(0);
      s.push(1);
      let t = 1;
      for (let n = 0; n < e; n++) {
        for (let a = 0; a < s.length; a++)
          s[a] = x.reedSolomonMultiply(s[a], t), a + 1 < s.length && (s[a] ^= s[a + 1]);
        t = x.reedSolomonMultiply(t, 2);
      }
      return s;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(e, s) {
      let t = s.map((n) => 0);
      for (const n of e) {
        const a = n ^ t.shift();
        t.push(0), s.forEach((h, l) => t[l] ^= x.reedSolomonMultiply(h, a));
      }
      return t;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(e, s) {
      if (e >>> 8 || s >>> 8)
        throw new RangeError("Byte out of range");
      let t = 0;
      for (let n = 7; n >= 0; n--)
        t = t << 1 ^ (t >>> 7) * 285, t ^= (s >>> n & 1) * e;
      return g(t >>> 8 == 0), t;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(e) {
      const s = e[1];
      g(s <= this.size * 3);
      const t = s > 0 && e[2] == s && e[3] == s * 3 && e[4] == s && e[5] == s;
      return (t && e[0] >= s * 4 && e[6] >= s ? 1 : 0) + (t && e[6] >= s * 4 && e[0] >= s ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(e, s, t) {
      return e && (this.finderPenaltyAddHistory(s, t), s = 0), s += this.size, this.finderPenaltyAddHistory(s, t), this.finderPenaltyCountPatterns(t);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(e, s) {
      s[0] == 0 && (e += this.size), s.pop(), s.unshift(e);
    }
  };
  i.MIN_VERSION = 1, i.MAX_VERSION = 40, i.PENALTY_N1 = 3, i.PENALTY_N2 = 3, i.PENALTY_N3 = 40, i.PENALTY_N4 = 10, i.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ], i.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ], c.QrCode = i;
  function o(b, e, s) {
    if (e < 0 || e > 31 || b >>> e)
      throw new RangeError("Value out of range");
    for (let t = e - 1; t >= 0; t--)
      s.push(b >>> t & 1);
  }
  function u(b, e) {
    return (b >>> e & 1) != 0;
  }
  function g(b) {
    if (!b)
      throw new Error("Assertion error");
  }
  const m = class C {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(e, s, t) {
      if (this.mode = e, this.numChars = s, this.bitData = t, s < 0)
        throw new RangeError("Invalid argument");
      this.bitData = t.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(e) {
      let s = [];
      for (const t of e)
        o(t, 8, s);
      return new C(C.Mode.BYTE, e.length, s);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(e) {
      if (!C.isNumeric(e))
        throw new RangeError("String contains non-numeric characters");
      let s = [];
      for (let t = 0; t < e.length; ) {
        const n = Math.min(e.length - t, 3);
        o(parseInt(e.substring(t, t + n), 10), n * 3 + 1, s), t += n;
      }
      return new C(C.Mode.NUMERIC, e.length, s);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(e) {
      if (!C.isAlphanumeric(e))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let s = [], t;
      for (t = 0; t + 2 <= e.length; t += 2) {
        let n = C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)) * 45;
        n += C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1)), o(n, 11, s);
      }
      return t < e.length && o(C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, s), new C(C.Mode.ALPHANUMERIC, e.length, s);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(e) {
      return e == "" ? [] : C.isNumeric(e) ? [C.makeNumeric(e)] : C.isAlphanumeric(e) ? [C.makeAlphanumeric(e)] : [C.makeBytes(C.toUtf8ByteArray(e))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(e) {
      let s = [];
      if (e < 0)
        throw new RangeError("ECI assignment value out of range");
      if (e < 128)
        o(e, 8, s);
      else if (e < 16384)
        o(2, 2, s), o(e, 14, s);
      else if (e < 1e6)
        o(6, 3, s), o(e, 21, s);
      else
        throw new RangeError("ECI assignment value out of range");
      return new C(C.Mode.ECI, 0, s);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(e) {
      return C.NUMERIC_REGEX.test(e);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(e) {
      return C.ALPHANUMERIC_REGEX.test(e);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(e, s) {
      let t = 0;
      for (const n of e) {
        const a = n.mode.numCharCountBits(s);
        if (n.numChars >= 1 << a)
          return 1 / 0;
        t += 4 + a + n.bitData.length;
      }
      return t;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(e) {
      e = encodeURI(e);
      let s = [];
      for (let t = 0; t < e.length; t++)
        e.charAt(t) != "%" ? s.push(e.charCodeAt(t)) : (s.push(parseInt(e.substring(t + 1, t + 3), 16)), t += 2);
      return s;
    }
  };
  m.NUMERIC_REGEX = /^[0-9]*$/, m.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, m.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let v = m;
  c.QrSegment = m;
})(I || (I = {}));
((c) => {
  ((i) => {
    const o = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(g, m) {
        this.ordinal = g, this.formatBits = m;
      }
    };
    o.LOW = new o(0, 1), o.MEDIUM = new o(1, 0), o.QUARTILE = new o(2, 3), o.HIGH = new o(3, 2), i.Ecc = o;
  })(c.QrCode || (c.QrCode = {}));
})(I || (I = {}));
((c) => {
  ((i) => {
    const o = class {
      /*-- Constructor and fields --*/
      constructor(g, m) {
        this.modeBits = g, this.numBitsCharCount = m;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(g) {
        return this.numBitsCharCount[Math.floor((g + 7) / 17)];
      }
    };
    o.NUMERIC = new o(1, [10, 12, 14]), o.ALPHANUMERIC = new o(2, [9, 11, 13]), o.BYTE = new o(4, [8, 16, 16]), o.KANJI = new o(8, [8, 10, 12]), o.ECI = new o(7, [0, 0, 0]), i.Mode = o;
  })(c.QrSegment || (c.QrSegment = {}));
})(I || (I = {}));
var P = I;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var He = {
  L: P.QrCode.Ecc.LOW,
  M: P.QrCode.Ecc.MEDIUM,
  Q: P.QrCode.Ecc.QUARTILE,
  H: P.QrCode.Ecc.HIGH
}, de = 128, ue = "L", he = "#FFFFFF", fe = "#000000", me = !1, ge = 1, $e = 4, Ve = 0, Ge = 0.1;
function pe(c, i = 0) {
  const o = [];
  return c.forEach(function(u, g) {
    let m = null;
    u.forEach(function(v, b) {
      if (!v && m !== null) {
        o.push(
          `M${m + i} ${g + i}h${b - m}v1H${m + i}z`
        ), m = null;
        return;
      }
      if (b === u.length - 1) {
        if (!v)
          return;
        m === null ? o.push(`M${b + i},${g + i} h1v1H${b + i}z`) : o.push(
          `M${m + i},${g + i} h${b + 1 - m}v1H${m + i}z`
        );
        return;
      }
      v && m === null && (m = b);
    });
  }), o.join("");
}
function xe(c, i) {
  return c.slice().map((o, u) => u < i.y || u >= i.y + i.h ? o : o.map((g, m) => m < i.x || m >= i.x + i.w ? g : !1));
}
function Ye(c, i, o, u) {
  if (u == null)
    return null;
  const g = c.length + o * 2, m = Math.floor(i * Ge), v = g / i, b = (u.width || m) * v, e = (u.height || m) * v, s = u.x == null ? c.length / 2 - b / 2 : u.x * v, t = u.y == null ? c.length / 2 - e / 2 : u.y * v, n = u.opacity == null ? 1 : u.opacity;
  let a = null;
  if (u.excavate) {
    let l = Math.floor(s), f = Math.floor(t), d = Math.ceil(b + s - l), w = Math.ceil(e + t - f);
    a = { x: l, y: f, w: d, h: w };
  }
  const h = u.crossOrigin;
  return { x: s, y: t, h: e, w: b, excavation: a, opacity: n, crossOrigin: h };
}
function We(c, i) {
  return i != null ? Math.max(Math.floor(i), 0) : c ? $e : Ve;
}
function be({
  value: c,
  level: i,
  minVersion: o,
  includeMargin: u,
  marginSize: g,
  imageSettings: m,
  size: v,
  boostLevel: b
}) {
  let e = y.useMemo(() => {
    const l = (Array.isArray(c) ? c : [c]).reduce((f, d) => (f.push(...P.QrSegment.makeSegments(d)), f), []);
    return P.QrCode.encodeSegments(
      l,
      He[i],
      o,
      void 0,
      void 0,
      b
    );
  }, [c, i, o, b]);
  const { cells: s, margin: t, numCells: n, calculatedImageSettings: a } = y.useMemo(() => {
    let h = e.getModules();
    const l = We(u, g), f = h.length + l * 2, d = Ye(
      h,
      v,
      l,
      m
    );
    return {
      cells: h,
      margin: l,
      numCells: f,
      calculatedImageSettings: d
    };
  }, [e, v, m, u, g]);
  return {
    qrcode: e,
    margin: t,
    cells: s,
    numCells: n,
    calculatedImageSettings: a
  };
}
var Xe = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), Ke = y.forwardRef(
  function(i, o) {
    const u = i, {
      value: g,
      size: m = de,
      level: v = ue,
      bgColor: b = he,
      fgColor: e = fe,
      includeMargin: s = me,
      minVersion: t = ge,
      boostLevel: n,
      marginSize: a,
      imageSettings: h
    } = u, f = Y(u, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]), { style: d } = f, w = Y(f, ["style"]), E = h == null ? void 0 : h.src, p = y.useRef(null), N = y.useRef(null), j = y.useCallback(
      (T) => {
        p.current = T, typeof o == "function" ? o(T) : o && (o.current = T);
      },
      [o]
    ), [k, X] = y.useState(!1), { margin: B, cells: U, numCells: _, calculatedImageSettings: A } = be({
      value: g,
      level: v,
      minVersion: t,
      boostLevel: n,
      includeMargin: s,
      marginSize: a,
      imageSettings: h,
      size: m
    });
    y.useEffect(() => {
      if (p.current != null) {
        const T = p.current, S = T.getContext("2d");
        if (!S)
          return;
        let Z = U;
        const L = N.current, J = A != null && L !== null && L.complete && L.naturalHeight !== 0 && L.naturalWidth !== 0;
        J && A.excavation != null && (Z = xe(
          U,
          A.excavation
        ));
        const q = window.devicePixelRatio || 1;
        T.height = T.width = m * q;
        const ee = m / _ * q;
        S.scale(ee, ee), S.fillStyle = b, S.fillRect(0, 0, _, _), S.fillStyle = e, Xe ? S.fill(new Path2D(pe(Z, B))) : U.forEach(function(ve, Ee) {
          ve.forEach(function(Ce, Ne) {
            Ce && S.fillRect(Ne + B, Ee + B, 1, 1);
          });
        }), A && (S.globalAlpha = A.opacity), J && S.drawImage(
          L,
          A.x + B,
          A.y + B,
          A.w,
          A.h
        );
      }
    }), y.useEffect(() => {
      X(!1);
    }, [E]);
    const we = G({ height: m, width: m }, d);
    let K = null;
    return E != null && (K = /* @__PURE__ */ y.createElement(
      "img",
      {
        src: E,
        key: E,
        style: { display: "none" },
        onLoad: () => {
          X(!0);
        },
        ref: N,
        crossOrigin: A == null ? void 0 : A.crossOrigin
      }
    )), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(
      "canvas",
      G({
        style: we,
        height: m,
        width: m,
        ref: j,
        role: "img"
      }, w)
    ), K);
  }
);
Ke.displayName = "QRCodeCanvas";
var W = y.forwardRef(
  function(i, o) {
    const u = i, {
      value: g,
      size: m = de,
      level: v = ue,
      bgColor: b = he,
      fgColor: e = fe,
      includeMargin: s = me,
      minVersion: t = ge,
      boostLevel: n,
      title: a,
      marginSize: h,
      imageSettings: l
    } = u, f = Y(u, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]), { margin: d, cells: w, numCells: E, calculatedImageSettings: p } = be({
      value: g,
      level: v,
      minVersion: t,
      boostLevel: n,
      includeMargin: s,
      marginSize: h,
      imageSettings: l,
      size: m
    });
    let N = w, j = null;
    l != null && p != null && (p.excavation != null && (N = xe(
      w,
      p.excavation
    )), j = /* @__PURE__ */ y.createElement(
      "image",
      {
        href: l.src,
        height: p.h,
        width: p.w,
        x: p.x + d,
        y: p.y + d,
        preserveAspectRatio: "none",
        opacity: p.opacity,
        crossOrigin: p.crossOrigin
      }
    ));
    const k = pe(N, d);
    return /* @__PURE__ */ y.createElement(
      "svg",
      G({
        height: m,
        width: m,
        viewBox: `0 0 ${E} ${E}`,
        ref: o,
        role: "img"
      }, f),
      !!a && /* @__PURE__ */ y.createElement("title", null, a),
      /* @__PURE__ */ y.createElement(
        "path",
        {
          fill: b,
          d: `M0,0 h${E}v${E}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ y.createElement("path", { fill: e, d: k, shapeRendering: "crispEdges" }),
      j
    );
  }
);
W.displayName = "QRCodeSVG";
function Ze({
  address: c,
  open: i,
  setOpen: o,
  onClose: u
}) {
  const { t: g } = oe(), [m, v] = M.useState("");
  M.useEffect(() => {
    const { username: e } = z.all();
    v(e);
  }, []);
  const b = i ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ r.jsx("div", { className: R(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ r.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ r.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ r.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => u(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ r.jsx(ke, {})
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ r.jsxs(_e, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ r.jsxs(ie, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ r.jsx(
            $,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: g("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ r.jsx(
            $,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: g("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs(V, { value: "crypto", children: [
          /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ r.jsx(D, { address: c, iconSize: 14 }) }),
          /* @__PURE__ */ r.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ r.jsx(
            W,
            {
              value: c,
              size: 320,
              level: "H",
              fgColor: "#000",
              bgColor: "#fff",
              imageSettings: {
                src: "/static/imgs/logos/vastlink.png",
                height: 60,
                width: 60,
                excavate: !0
              },
              style: { width: "196px", height: "196px" }
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsxs(V, { value: "email", children: [
          /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ r.jsx(D, { address: m, iconSize: 14 }) }),
          /* @__PURE__ */ r.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ r.jsx(
            W,
            {
              value: m,
              size: 320,
              level: "H",
              fgColor: "#000",
              bgColor: "#fff",
              imageSettings: {
                src: "/static/imgs/logos/vastlink.png",
                height: 60,
                width: 60,
                excavate: !0
              },
              style: { width: "196px", height: "196px" }
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ r.jsx(
        Le,
        {
          onClick: () => u(!1),
          children: "Share QR code"
        }
      ) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return Be.createPortal(
      b,
      document.body
    );
}
const se = [
  {
    name: "ETH",
    icon: "/imgs/logos/eth.png"
  },
  {
    name: "MATIC",
    icon: "/imgs/logos/matic.png"
  },
  {
    name: "TVWT",
    icon: "/imgs/logos/tvwt.png"
  }
];
function Je() {
  const c = z.getUserRandomAvatar(), { address: i } = z.all(), [o, u] = M.useState(!1), [g, m] = M.useState(!1), [v, b] = M.useState("ETH"), [e, s] = M.useState(""), [t, n] = M.useState(!0);
  M.useEffect(() => {
    l(v), a();
  }, []);
  const a = async () => {
    const f = await Me.get("/user-assets/total-assets", {
      params: {
        address: i
      }
    }), d = je(f.data.totalAssets, 2);
    s(d);
  }, h = () => {
    var f;
    return (f = se.find((d) => d.name === v)) == null ? void 0 : f.icon;
  }, l = async (f) => {
    b(f);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: R(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: R(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${c})`
            }
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: R(
          "relative z-10",
          "tablet:flex tablet:flex-wrap tablet:justify-between",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("div", { className: R(
              'text-white font-bold leading-tight font-["Asap"]',
              "text-lg tablet:text-[32px]",
              "mb-[25px] tablet:mb-[50px]"
            ), children: "Total asset" }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: c,
                  alt: "avatar",
                  className: R(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ r.jsx("div", { className: R(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ r.jsxs("div", { className: R(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: [
                  /* @__PURE__ */ r.jsx("span", { className: "flex items-center", children: t ? "******" : `$${e} USD` }),
                  /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: t ? "/imgs/icons/close_eye.svg" : "/imgs/icons/open_eye.svg",
                      alt: "",
                      className: R(
                        "w-[30px] h-[30px]",
                        "cursor-pointer"
                      ),
                      onClick: () => n(!t)
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: R(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ r.jsxs("div", { className: R(
              "flex items-center gap-3 mb-[28px]",
              "justify-center tablet:justify-end"
            ), children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: " bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => u(!0),
                  children: [
                    /* @__PURE__ */ r.jsx("img", { src: "/imgs/icons/send.svg", alt: "" }),
                    /* @__PURE__ */ r.jsx("span", { className: "text-black text-xs font-bold", children: "Send" })
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => m(!0),
                  children: [
                    /* @__PURE__ */ r.jsx("img", { src: "/imgs/icons/receive.svg", alt: "" }),
                    /* @__PURE__ */ r.jsx("span", { className: "text-black text-xs font-bold", children: "Receive" })
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(Ae, { children: [
                /* @__PURE__ */ r.jsxs(Se, { className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: h(),
                      className: "w-[16px] h-[16px]",
                      alt: ""
                    }
                  ),
                  /* @__PURE__ */ r.jsx("img", { src: "/imgs/icons/arrow_down.svg", alt: "" })
                ] }),
                /* @__PURE__ */ r.jsx(Te, { className: "bg-white", children: se.map((f) => /* @__PURE__ */ r.jsx(
                  Ie,
                  {
                    onClick: () => l(f.name),
                    children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ r.jsx(
                        "img",
                        {
                          src: f.icon,
                          className: "w-[16px] h-[16px]",
                          alt: ""
                        }
                      ),
                      /* @__PURE__ */ r.jsx("span", { className: R(
                        v === f.name ? "text-brand-foreground" : "text-black"
                      ), children: f.name }),
                      v === f.name && /* @__PURE__ */ r.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
                    ] })
                  },
                  f.name
                )) })
              ] })
            ] }),
            /* @__PURE__ */ r.jsx(
              D,
              {
                address: i,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          Pe,
          {
            open: o,
            setOpen: u,
            address: i,
            tokenType: v,
            onClose: () => u(!1)
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ze,
          {
            address: i,
            open: g,
            setOpen: m,
            onClose: () => m(!1)
          }
        )
      ]
    }
  );
}
function qe() {
  const [c, i] = M.useState(""), [o, u] = M.useState(""), [g, m] = M.useState(""), [v, b] = M.useState(""), [e, s] = M.useState(!1), { logoPath: t } = Fe(), { t: n } = oe();
  M.useEffect(() => {
    a();
  }, []);
  const a = async () => {
    const d = z.all().address;
    i(d), s(!0);
    try {
      const [w, E, p] = await Promise.all([
        l(d),
        h(d),
        f(d)
      ]);
      u(w), m(E), b(p);
    } catch (w) {
      const E = Re(w);
      Oe.error(E.message);
    } finally {
      s(!1);
    }
  }, h = async (d) => {
    let w = await H.getInstance().createToken("ETH").getBalance(d);
    return w = O(w), w;
  }, l = async (d) => {
    let w = await H.getInstance().createToken("MATIC").getBalance(d);
    return w = O(w), w;
  }, f = async (d) => {
    let w = await H.getInstance().createToken("TVWT").getBalance(d);
    return w = O(w), w;
  };
  return /* @__PURE__ */ r.jsxs(De, { className: "p-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ r.jsx(D, { address: c }),
      /* @__PURE__ */ r.jsx("div", { title: n("/dashboard.userWallet.syncTitle"), className: "text-brand-foreground ml-4", children: /* @__PURE__ */ r.jsx(
        ze,
        {
          size: 18,
          className: "cursor-pointer ml-2 hover:scale-125 hover:rotate-180 transition duration-300",
          onClick: () => a()
        }
      ) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "w-full mt-4 flex justify-between", children: /* @__PURE__ */ r.jsx(r.Fragment, { children: e ? /* @__PURE__ */ r.jsx("div", { className: "text-brand-foreground text-center w-full h-16 flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Ue, { type: "breathe" }) }) : /* @__PURE__ */ r.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ r.jsxs(
        Q,
        {
          to: "/dashboard/eth",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ r.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: "/imgs/logos/eth.png",
                  alt: ""
                }
              ),
              /* @__PURE__ */ r.jsx("p", { className: "ml-2 text-xl text-primary", children: "ETH" })
            ] }),
            /* @__PURE__ */ r.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: O(g) })
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Q,
        {
          to: "/dashboard/matic",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ r.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: "https://amoy.polygonscan.com/assets/poly/images/svg/logos/token-light.svg?v=24.7.3.0",
                  alt: ""
                }
              ),
              /* @__PURE__ */ r.jsx("p", { className: "ml-2 text-xl text-primary", children: "MATIC" })
            ] }),
            /* @__PURE__ */ r.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: O(o) })
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        Q,
        {
          to: "/dashboard/tvwt",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ r.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: t,
                  alt: ""
                }
              ),
              /* @__PURE__ */ r.jsx("p", { className: "ml-2 text-xl text-primary", children: "TVWT" })
            ] }),
            /* @__PURE__ */ r.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: v })
          ]
        }
      )
    ] }) }) })
  ] });
}
function mt() {
  return /* @__PURE__ */ r.jsxs("div", { className: "", children: [
    /* @__PURE__ */ r.jsx(Je, {}),
    /* @__PURE__ */ r.jsx("div", { className: R(
      "mt-[40px] mobile:mt-[100px]",
      "w-[342px] tablet:w-[716px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ) }),
    /* @__PURE__ */ r.jsx(qe, {})
  ] });
}
export {
  mt as default
};
