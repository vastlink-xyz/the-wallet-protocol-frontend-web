import { j as W } from "./vendor-radix-J-HUYjfF.js";
import { c as xe, d as Re, r as ge } from "./vendor-react-BG344YhI.js";
import { B as _e, g as be, j as Oe } from "./main-CUT_4fhD.js";
import { B as me } from "./vendor-utils-C0Sc_Wei.js";
import { k as Se } from "./vendor-web3-CB7u4wt6.js";
var Ce = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(ie, le) {
  (function(oe, v) {
    ie.exports = v();
  })(xe, function oe() {
    var v = typeof self < "u" ? self : typeof window < "u" ? window : v !== void 0 ? v : {}, X = !v.document && !!v.postMessage, ne = v.IS_PAPA_WORKER || !1, O = {}, Q = 0, h = { parse: function(t, e) {
      var r = (e = e || {}).dynamicTyping || !1;
      if (p(r) && (e.dynamicTypingFunction = r, r = {}), e.dynamicTyping = r, e.transform = !!p(e.transform) && e.transform, e.worker && h.WORKERS_SUPPORTED) {
        var i = function() {
          if (!h.WORKERS_SUPPORTED) return !1;
          var f = (A = v.URL || v.webkitURL || null, E = oe.toString(), h.BLOB_URL || (h.BLOB_URL = A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", E, ")();"], { type: "text/javascript" })))), l = new v.Worker(f), A, E;
          return l.onmessage = we, l.id = Q++, O[l.id] = l;
        }();
        return i.userStep = e.step, i.userChunk = e.chunk, i.userComplete = e.complete, i.userError = e.error, e.step = p(e.step), e.chunk = p(e.chunk), e.complete = p(e.complete), e.error = p(e.error), delete e.worker, void i.postMessage({ input: t, config: e, workerId: i.id });
      }
      var s = null;
      return h.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(f) {
        return f.charCodeAt(0) === 65279 ? f.slice(1) : f;
      }(t), s = e.download ? new H(e) : new se(e)) : t.readable === !0 && p(t.read) && p(t.on) ? s = new he(e) : (v.File && t instanceof File || t instanceof Object) && (s = new ue(e)), s.stream(t);
    }, unparse: function(t, e) {
      var r = !1, i = !0, s = ",", f = `\r
`, l = '"', A = l + l, E = !1, a = null, C = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || h.BAD_DELIMITERS.filter(function(n) {
            return e.delimiter.indexOf(n) !== -1;
          }).length || (s = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (E = e.skipEmptyLines), typeof e.newline == "string" && (f = e.newline), typeof e.quoteChar == "string" && (l = e.quoteChar), typeof e.header == "boolean" && (i = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            a = e.columns;
          }
          e.escapeChar !== void 0 && (A = e.escapeChar + l), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (C = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var u = new RegExp(ae(l), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return U(null, t, E);
        if (typeof t[0] == "object") return U(a || Object.keys(t[0]), t, E);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || a), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), U(t.fields || [], t.data || [], E);
      throw new Error("Unable to serialize unrecognized input");
      function U(n, m, F) {
        var b = "";
        typeof n == "string" && (n = JSON.parse(n)), typeof m == "string" && (m = JSON.parse(m));
        var T = Array.isArray(n) && 0 < n.length, I = !Array.isArray(m[0]);
        if (T && i) {
          for (var D = 0; D < n.length; D++) 0 < D && (b += s), b += L(n[D], D);
          0 < m.length && (b += f);
        }
        for (var o = 0; o < m.length; o++) {
          var d = T ? n.length : m[o].length, y = !1, S = T ? Object.keys(m[o]).length === 0 : m[o].length === 0;
          if (F && !T && (y = F === "greedy" ? m[o].join("").trim() === "" : m[o].length === 1 && m[o][0].length === 0), F === "greedy" && T) {
            for (var g = [], j = 0; j < d; j++) {
              var w = I ? n[j] : j;
              g.push(m[o][w]);
            }
            y = g.join("").trim() === "";
          }
          if (!y) {
            for (var _ = 0; _ < d; _++) {
              0 < _ && !S && (b += s);
              var B = T && I ? n[_] : _;
              b += L(m[o][B], _);
            }
            o < m.length - 1 && (!F || 0 < d && !S) && (b += f);
          }
        }
        return b;
      }
      function L(n, m) {
        if (n == null) return "";
        if (n.constructor === Date) return JSON.stringify(n).slice(1, 25);
        var F = !1;
        C && typeof n == "string" && C.test(n) && (n = "'" + n, F = !0);
        var b = n.toString().replace(u, A);
        return (F = F || r === !0 || typeof r == "function" && r(n, m) || Array.isArray(r) && r[m] || function(T, I) {
          for (var D = 0; D < I.length; D++) if (-1 < T.indexOf(I[D])) return !0;
          return !1;
        }(b, h.BAD_DELIMITERS) || -1 < b.indexOf(s) || b.charAt(0) === " " || b.charAt(b.length - 1) === " ") ? l + b + l : b;
      }
    } };
    if (h.RECORD_SEP = "", h.UNIT_SEP = "", h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !X && !!v.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = de, h.ParserHandle = ve, h.NetworkStreamer = H, h.FileStreamer = ue, h.StringStreamer = se, h.ReadableStreamStreamer = he, v.jQuery) {
      var z = v.jQuery;
      z.fn.parse = function(t) {
        var e = t.config || {}, r = [];
        return this.each(function(f) {
          if (!(z(this).prop("tagName").toUpperCase() === "INPUT" && z(this).attr("type").toLowerCase() === "file" && v.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var l = 0; l < this.files.length; l++) r.push({ file: this.files[l], inputElem: this, instanceConfig: z.extend({}, e) });
        }), i(), this;
        function i() {
          if (r.length !== 0) {
            var f, l, A, E, a = r[0];
            if (p(t.before)) {
              var C = t.before(a.file, a.inputElem);
              if (typeof C == "object") {
                if (C.action === "abort") return f = "AbortError", l = a.file, A = a.inputElem, E = C.reason, void (p(t.error) && t.error({ name: f }, l, A, E));
                if (C.action === "skip") return void s();
                typeof C.config == "object" && (a.instanceConfig = z.extend(a.instanceConfig, C.config));
              } else if (C === "skip") return void s();
            }
            var u = a.instanceConfig.complete;
            a.instanceConfig.complete = function(U) {
              p(u) && u(U, a.file, a.inputElem), s();
            }, h.parse(a.file, a.instanceConfig);
          } else p(t.complete) && t.complete();
        }
        function s() {
          r.splice(0, 1), i();
        }
      };
    }
    function x(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var r = ce(e);
        r.chunkSize = parseInt(r.chunkSize), e.step || e.chunk || (r.chunkSize = null), this._handle = new ve(r), (this._handle.streamer = this)._config = r;
      }).call(this, t), this.parseChunk = function(e, r) {
        if (this.isFirstChunk && p(this._config.beforeFirstChunk)) {
          var i = this._config.beforeFirstChunk(e);
          i !== void 0 && (e = i);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var s = this._partialLine + e;
        this._partialLine = "";
        var f = this._handle.parse(s, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var l = f.meta.cursor;
          this._finished || (this._partialLine = s.substring(l - this._baseIndex), this._baseIndex = l), f && f.data && (this._rowCount += f.data.length);
          var A = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (ne) v.postMessage({ results: f, workerId: h.WORKER_ID, finished: A });
          else if (p(this._config.chunk) && !r) {
            if (this._config.chunk(f, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            f = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(f.data), this._completeResults.errors = this._completeResults.errors.concat(f.errors), this._completeResults.meta = f.meta), this._completed || !A || !p(this._config.complete) || f && f.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), A || f && f.meta.paused || this._nextChunk(), f;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        p(this._config.error) ? this._config.error(e) : ne && this._config.error && v.postMessage({ workerId: h.WORKER_ID, error: e, finished: !1 });
      };
    }
    function H(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = h.RemoteChunkSize), x.call(this, t), this._nextChunk = X ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), X || (e.onload = J(this._chunkLoaded, this), e.onerror = J(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !X), this._config.downloadRequestHeaders) {
            var r = this._config.downloadRequestHeaders;
            for (var i in r) e.setRequestHeader(i, r[i]);
          }
          if (this._config.chunkSize) {
            var s = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + s);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (f) {
            this._chunkError(f.message);
          }
          X && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(r) {
          var i = r.getResponseHeader("Content-Range");
          return i === null ? -1 : parseInt(i.substring(i.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(r) {
        var i = e.statusText || r;
        this._sendError(new Error(i));
      };
    }
    function ue(t) {
      var e, r;
      (t = t || {}).chunkSize || (t.chunkSize = h.LocalChunkSize), x.call(this, t);
      var i = typeof FileReader < "u";
      this.stream = function(s) {
        this._input = s, r = s.slice || s.webkitSlice || s.mozSlice, i ? ((e = new FileReader()).onload = J(this._chunkLoaded, this), e.onerror = J(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var s = this._input;
        if (this._config.chunkSize) {
          var f = Math.min(this._start + this._config.chunkSize, this._input.size);
          s = r.call(s, this._start, f);
        }
        var l = e.readAsText(s, this._config.encoding);
        i || this._chunkLoaded({ target: { result: l } });
      }, this._chunkLoaded = function(s) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function se(t) {
      var e;
      x.call(this, t = t || {}), this.stream = function(r) {
        return e = r, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var r, i = this._config.chunkSize;
          return i ? (r = e.substring(0, i), e = e.substring(i)) : (r = e, e = ""), this._finished = !e, this.parseChunk(r);
        }
      };
    }
    function he(t) {
      x.call(this, t = t || {});
      var e = [], r = !0, i = !1;
      this.pause = function() {
        x.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        x.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(s) {
        this._input = s, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        i && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : r = !0;
      }, this._streamData = J(function(s) {
        try {
          e.push(typeof s == "string" ? s : s.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (f) {
          this._streamError(f);
        }
      }, this), this._streamError = J(function(s) {
        this._streamCleanUp(), this._sendError(s);
      }, this), this._streamEnd = J(function() {
        this._streamCleanUp(), i = !0, this._streamData("");
      }, this), this._streamCleanUp = J(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function ve(t) {
      var e, r, i, s = Math.pow(2, 53), f = -s, l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, A = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, E = this, a = 0, C = 0, u = !1, U = !1, L = [], n = { data: [], errors: [], meta: {} };
      if (p(t.step)) {
        var m = t.step;
        t.step = function(o) {
          if (n = o, T()) b();
          else {
            if (b(), n.data.length === 0) return;
            a += o.data.length, t.preview && a > t.preview ? r.abort() : (n.data = n.data[0], m(n, E));
          }
        };
      }
      function F(o) {
        return t.skipEmptyLines === "greedy" ? o.join("").trim() === "" : o.length === 1 && o[0].length === 0;
      }
      function b() {
        return n && i && (D("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), i = !1), t.skipEmptyLines && (n.data = n.data.filter(function(o) {
          return !F(o);
        })), T() && function() {
          if (!n) return;
          function o(y, S) {
            p(t.transformHeader) && (y = t.transformHeader(y, S)), L.push(y);
          }
          if (Array.isArray(n.data[0])) {
            for (var d = 0; T() && d < n.data.length; d++) n.data[d].forEach(o);
            n.data.splice(0, 1);
          } else n.data.forEach(o);
        }(), function() {
          if (!n || !t.header && !t.dynamicTyping && !t.transform) return n;
          function o(y, S) {
            var g, j = t.header ? {} : [];
            for (g = 0; g < y.length; g++) {
              var w = g, _ = y[g];
              t.header && (w = g >= L.length ? "__parsed_extra" : L[g]), t.transform && (_ = t.transform(_, w)), _ = I(w, _), w === "__parsed_extra" ? (j[w] = j[w] || [], j[w].push(_)) : j[w] = _;
            }
            return t.header && (g > L.length ? D("FieldMismatch", "TooManyFields", "Too many fields: expected " + L.length + " fields but parsed " + g, C + S) : g < L.length && D("FieldMismatch", "TooFewFields", "Too few fields: expected " + L.length + " fields but parsed " + g, C + S)), j;
          }
          var d = 1;
          return !n.data.length || Array.isArray(n.data[0]) ? (n.data = n.data.map(o), d = n.data.length) : n.data = o(n.data, 0), t.header && n.meta && (n.meta.fields = L), C += d, n;
        }();
      }
      function T() {
        return t.header && L.length === 0;
      }
      function I(o, d) {
        return y = o, t.dynamicTypingFunction && t.dynamicTyping[y] === void 0 && (t.dynamicTyping[y] = t.dynamicTypingFunction(y)), (t.dynamicTyping[y] || t.dynamicTyping) === !0 ? d === "true" || d === "TRUE" || d !== "false" && d !== "FALSE" && (function(S) {
          if (l.test(S)) {
            var g = parseFloat(S);
            if (f < g && g < s) return !0;
          }
          return !1;
        }(d) ? parseFloat(d) : A.test(d) ? new Date(d) : d === "" ? null : d) : d;
        var y;
      }
      function D(o, d, y, S) {
        var g = { type: o, code: d, message: y };
        S !== void 0 && (g.row = S), n.errors.push(g);
      }
      this.parse = function(o, d, y) {
        var S = t.quoteChar || '"';
        if (t.newline || (t.newline = function(w, _) {
          w = w.substring(0, 1048576);
          var B = new RegExp(ae(_) + "([^]*?)" + ae(_), "gm"), M = (w = w.replace(B, "")).split("\r"), K = w.split(`
`), V = 1 < K.length && K[0].length < M[0].length;
          if (M.length === 1 || V) return `
`;
          for (var q = 0, k = 0; k < M.length; k++) M[k][0] === `
` && q++;
          return q >= M.length / 2 ? `\r
` : "\r";
        }(o, S)), i = !1, t.delimiter) p(t.delimiter) && (t.delimiter = t.delimiter(o), n.meta.delimiter = t.delimiter);
        else {
          var g = function(w, _, B, M, K) {
            var V, q, k, R;
            K = K || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
            for (var ee = 0; ee < K.length; ee++) {
              var c = K[ee], re = 0, $ = 0, te = 0;
              k = void 0;
              for (var G = new de({ comments: M, delimiter: c, newline: _, preview: 10 }).parse(w), Z = 0; Z < G.data.length; Z++) if (B && F(G.data[Z])) te++;
              else {
                var Y = G.data[Z].length;
                $ += Y, k !== void 0 ? 0 < Y && (re += Math.abs(Y - k), k = Y) : k = Y;
              }
              0 < G.data.length && ($ /= G.data.length - te), (q === void 0 || re <= q) && (R === void 0 || R < $) && 1.99 < $ && (q = re, V = c, R = $);
            }
            return { successful: !!(t.delimiter = V), bestDelimiter: V };
          }(o, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          g.successful ? t.delimiter = g.bestDelimiter : (i = !0, t.delimiter = h.DefaultDelimiter), n.meta.delimiter = t.delimiter;
        }
        var j = ce(t);
        return t.preview && t.header && j.preview++, e = o, r = new de(j), n = r.parse(e, d, y), b(), u ? { meta: { paused: !0 } } : n || { meta: { paused: !1 } };
      }, this.paused = function() {
        return u;
      }, this.pause = function() {
        u = !0, r.abort(), e = p(t.chunk) ? "" : e.substring(r.getCharIndex());
      }, this.resume = function() {
        E.streamer._halted ? (u = !1, E.streamer.parseChunk(e, !0)) : setTimeout(E.resume, 3);
      }, this.aborted = function() {
        return U;
      }, this.abort = function() {
        U = !0, r.abort(), n.meta.aborted = !0, p(t.complete) && t.complete(n), e = "";
      };
    }
    function ae(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function de(t) {
      var e, r = (t = t || {}).delimiter, i = t.newline, s = t.comments, f = t.step, l = t.preview, A = t.fastMode, E = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (E = t.escapeChar), (typeof r != "string" || -1 < h.BAD_DELIMITERS.indexOf(r)) && (r = ","), s === r) throw new Error("Comment character same as delimiter");
      s === !0 ? s = "#" : (typeof s != "string" || -1 < h.BAD_DELIMITERS.indexOf(s)) && (s = !1), i !== `
` && i !== "\r" && i !== `\r
` && (i = `
`);
      var a = 0, C = !1;
      this.parse = function(u, U, L) {
        if (typeof u != "string") throw new Error("Input must be a string");
        var n = u.length, m = r.length, F = i.length, b = s.length, T = p(f), I = [], D = [], o = [], d = a = 0;
        if (!u) return P();
        if (t.header && !U) {
          var y = u.split(i)[0].split(r), S = [], g = {}, j = !1;
          for (var w in y) {
            var _ = y[w];
            p(t.transformHeader) && (_ = t.transformHeader(_, w));
            var B = _, M = g[_] || 0;
            for (0 < M && (j = !0, B = _ + "_" + M), g[_] = M + 1; S.includes(B); ) B = B + "_" + M;
            S.push(B);
          }
          if (j) {
            var K = u.split(i);
            K[0] = S.join(r), u = K.join(i);
          }
        }
        if (A || A !== !1 && u.indexOf(e) === -1) {
          for (var V = u.split(i), q = 0; q < V.length; q++) {
            if (o = V[q], a += o.length, q !== V.length - 1) a += i.length;
            else if (L) return P();
            if (!s || o.substring(0, b) !== s) {
              if (T) {
                if (I = [], te(o.split(r)), fe(), C) return P();
              } else te(o.split(r));
              if (l && l <= q) return I = I.slice(0, l), P(!0);
            }
          }
          return P();
        }
        for (var k = u.indexOf(r, a), R = u.indexOf(i, a), ee = new RegExp(ae(E) + ae(e), "g"), c = u.indexOf(e, a); ; ) if (u[a] !== e) if (s && o.length === 0 && u.substring(a, a + b) === s) {
          if (R === -1) return P();
          a = R + F, R = u.indexOf(i, a), k = u.indexOf(r, a);
        } else if (k !== -1 && (k < R || R === -1)) o.push(u.substring(a, k)), a = k + m, k = u.indexOf(r, a);
        else {
          if (R === -1) break;
          if (o.push(u.substring(a, R)), Y(R + F), T && (fe(), C)) return P();
          if (l && I.length >= l) return P(!0);
        }
        else for (c = a, a++; ; ) {
          if ((c = u.indexOf(e, c + 1)) === -1) return L || D.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: I.length, index: a }), Z();
          if (c === n - 1) return Z(u.substring(a, c).replace(ee, e));
          if (e !== E || u[c + 1] !== E) {
            if (e === E || c === 0 || u[c - 1] !== E) {
              k !== -1 && k < c + 1 && (k = u.indexOf(r, c + 1)), R !== -1 && R < c + 1 && (R = u.indexOf(i, c + 1));
              var re = G(R === -1 ? k : Math.min(k, R));
              if (u.substr(c + 1 + re, m) === r) {
                o.push(u.substring(a, c).replace(ee, e)), u[a = c + 1 + re + m] !== e && (c = u.indexOf(e, a)), k = u.indexOf(r, a), R = u.indexOf(i, a);
                break;
              }
              var $ = G(R);
              if (u.substring(c + 1 + $, c + 1 + $ + F) === i) {
                if (o.push(u.substring(a, c).replace(ee, e)), Y(c + 1 + $ + F), k = u.indexOf(r, a), c = u.indexOf(e, a), T && (fe(), C)) return P();
                if (l && I.length >= l) return P(!0);
                break;
              }
              D.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: I.length, index: a }), c++;
            }
          } else c++;
        }
        return Z();
        function te(N) {
          I.push(N), d = a;
        }
        function G(N) {
          var Ee = 0;
          if (N !== -1) {
            var pe = u.substring(c + 1, N);
            pe && pe.trim() === "" && (Ee = pe.length);
          }
          return Ee;
        }
        function Z(N) {
          return L || (N === void 0 && (N = u.substring(a)), o.push(N), a = n, te(o), T && fe()), P();
        }
        function Y(N) {
          a = N, te(o), o = [], R = u.indexOf(i, a);
        }
        function P(N) {
          return { data: I, errors: D, meta: { delimiter: r, linebreak: i, aborted: C, truncated: !!N, cursor: d + (U || 0) } };
        }
        function fe() {
          f(P()), I = [], D = [];
        }
      }, this.abort = function() {
        C = !0;
      }, this.getCharIndex = function() {
        return a;
      };
    }
    function we(t) {
      var e = t.data, r = O[e.workerId], i = !1;
      if (e.error) r.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var s = { abort: function() {
          i = !0, ye(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ke, resume: ke };
        if (p(r.userStep)) {
          for (var f = 0; f < e.results.data.length && (r.userStep({ data: e.results.data[f], errors: e.results.errors, meta: e.results.meta }, s), !i); f++) ;
          delete e.results;
        } else p(r.userChunk) && (r.userChunk(e.results, s, e.file), delete e.results);
      }
      e.finished && !i && ye(e.workerId, e.results);
    }
    function ye(t, e) {
      var r = O[t];
      p(r.userComplete) && r.userComplete(e), r.terminate(), delete O[t];
    }
    function ke() {
      throw new Error("Not implemented.");
    }
    function ce(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var r in t) e[r] = ce(t[r]);
      return e;
    }
    function J(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function p(t) {
      return typeof t == "function";
    }
    return ne && (v.onmessage = function(t) {
      var e = t.data;
      if (h.WORKER_ID === void 0 && e && (h.WORKER_ID = e.workerId), typeof e.input == "string") v.postMessage({ workerId: h.WORKER_ID, results: h.parse(e.input, e.config), finished: !0 });
      else if (v.File && e.input instanceof File || e.input instanceof Object) {
        var r = h.parse(e.input, e.config);
        r && v.postMessage({ workerId: h.WORKER_ID, results: r, finished: !0 });
      }
    }), (H.prototype = Object.create(x.prototype)).constructor = H, (ue.prototype = Object.create(x.prototype)).constructor = ue, (se.prototype = Object.create(se.prototype)).constructor = se, (he.prototype = Object.create(x.prototype)).constructor = he, h;
  });
})(Ce);
var Ie = Ce.exports;
const De = /* @__PURE__ */ Re(Ie);
function ze() {
  const [ie, le] = ge.useState([]);
  ge.useState(!1), ge.useState([]);
  const oe = (O) => {
    if (!O.length)
      return { isValid: !1, error: "CSV file is empty" };
    const Q = ["to", "amount", "note"], h = Object.keys(O[0]), z = Q.filter((x) => !h.includes(x));
    if (z.length)
      return {
        isValid: !1,
        error: `Missing required columns: ${z.join(", ")}`
      };
    for (let x = 0; x < O.length; x++) {
      const H = O[x];
      if (!(Se(H.to) || Oe.test(H.to)))
        return {
          isValid: !1,
          error: `Invalid to format at row ${x + 1}`
        };
      if (!H.amount || isNaN(Number(H.amount)) || Number(H.amount) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${x + 1}`
        };
    }
    return { isValid: !0 };
  }, v = (O) => {
    var h;
    const Q = (h = O.target.files) == null ? void 0 : h[0];
    Q && De.parse(Q, {
      header: !0,
      complete: (z) => {
        const x = oe(z.data);
        if (!x.isValid) {
          me.error(x.error), le([]), O.target.value = "";
          return;
        }
        le(z.data), me.success("CSV file uploaded successfully");
      },
      error: (z) => {
        me.error(`Error parsing CSV: ${z.message}`);
      }
    });
  }, X = () => {
    ie.forEach((O) => {
      be("transaction", O);
    });
  }, ne = () => {
    be("send transactions", ie);
  };
  return /* @__PURE__ */ W.jsxs("div", { children: [
    /* @__PURE__ */ W.jsxs("div", { children: [
      /* @__PURE__ */ W.jsx(
        _e,
        {
          variant: "outline",
          onClick: () => {
            const O = document.querySelector('input[type="file"]');
            O && O.click();
          },
          children: /* @__PURE__ */ W.jsx("span", { children: "Import CSV" })
        }
      ),
      /* @__PURE__ */ W.jsx(
        "input",
        {
          className: "hidden",
          type: "file",
          accept: ".csv",
          onChange: v
        }
      )
    ] }),
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx(_e, { onClick: X, children: "Log CSV Data" }) }),
    /* @__PURE__ */ W.jsx("ul", { children: ie.map((O, Q) => /* @__PURE__ */ W.jsx("li", { children: JSON.stringify(O) }, Q)) }),
    /* @__PURE__ */ W.jsx(_e, { onClick: ne, children: "Send" })
  ] });
}
export {
  ze as default
};
