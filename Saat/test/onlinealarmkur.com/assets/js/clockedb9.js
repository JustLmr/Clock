( () => {
    var e = {
        425: () => {
            ({
                tabs: document.querySelectorAll(".tab"),
                init: function() {
                    var e = this;
                    this.originalHash = window.location.hash,
                    this.originalHash && history.replaceState(null, "", window.location.pathname + window.location.search),
                    this.bindEvents(),
                    this.handleInitialTab(),
                    this.originalHash && setTimeout((function() {
                        e.updateHash(e.findTabByHash(e.originalHash))
                    }
                    ), 0)
                },
                hideAll: function() {
                    var e = this;
                    this.tabs.forEach((function(t) {
                        var n;
                        t.classList.remove("tab-active"),
                        null === (n = e.getTarget(t)) || void 0 === n || n.classList.add("hidden")
                    }
                    ))
                },
                getHash: function(e) {
                    return e.getAttribute("href")
                },
                getTarget: function(e) {
                    return document.querySelector(this.getHash(e))
                },
                showTab: function(e) {
                    var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e.classList.add("tab-active"),
                    null === (t = this.getTarget(e)) || void 0 === t || t.classList.remove("hidden"),
                    n && this.updateHash(e)
                },
                updateHash: function(e) {
                    var t = this.getHash(e);
                    history.replaceState ? history.replaceState(null, "", t) : window.location.hash = t
                },
                findTabByHash: function(e) {
                    var t = this;
                    return Array.from(this.tabs).find((function(n) {
                        return t.getHash(n) === e
                    }
                    ))
                },
                handleInitialTab: function() {
                    var e = this.originalHash ? this.findTabByHash(this.originalHash) : this.tabs[0];
                    e && (this.hideAll(),
                    this.showTab(e, !1))
                },
                bindEvents: function() {
                    var e = this;
                    this.tabs.forEach((function(t) {
                        t.addEventListener("click", (function(n) {
                            n.preventDefault(),
                            e.hideAll(),
                            e.showTab(t)
                        }
                        ))
                    }
                    )),
                    window.addEventListener("popstate", (function() {
                        var t = window.location.hash
                          , n = e.findTabByHash(t);
                        n && (e.hideAll(),
                        e.showTab(n, !1))
                    }
                    ))
                }
            }).init()
        }
        ,
        4927: e => {
            function t(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, a, s = [], u = !0, d = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                u = !1
                            } else
                                for (; !(u = (r = i.call(n)).done) && (s.push(r.value),
                                s.length !== t); u = !0)
                                    ;
                        } catch (e) {
                            d = !0,
                            o = e
                        } finally {
                            try {
                                if (!u && null != n.return && (a = n.return(),
                                Object(a) !== a))
                                    return
                            } finally {
                                if (d)
                                    throw o
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return n(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name),
                        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var r = function(e) {
                return ("00" + e).slice(-(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2))
            };
            e.exports = {
                addZero: function(e) {
                    return (e = parseInt(e)) < 10 ? "0" + e.toString() : e.toString()
                },
                createTable: function(e, t) {
                    return t.forEach((function(t, n) {
                        var r = t.pop();
                        e += '<tr id="' + r + '"><td class="bg-base-200">' + (n + 1) + "</td>",
                        t.forEach((function(t) {
                            e += '<td class="bg-base-200">' + t + "</td>"
                        }
                        )),
                        e += "</tr>"
                    }
                    )),
                    e
                },
                getAjax: function(e, t) {
                    var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    return n.open("GET", e),
                    n.onreadystatechange = function() {
                        n.readyState > 3 && 200 === n.status && t(n.responseText)
                    }
                    ,
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.send(),
                    n
                },
                getRandomId: function() {
                    return "row-" + Math.random().toString(36).slice(2, 7)
                },
                getTimeDiff: function(e, n) {
                    var r = Math.abs(n - e) / 1e3
                      , o = e > n ? -1 : 1;
                    return [["days", 86400], ["hours", 3600], ["minutes", 60], ["seconds", 1]].reduce((function(e, n) {
                        var i = t(n, 2)
                          , a = i[0]
                          , s = i[1];
                        return e[a] = Math.floor(r / s) * o,
                        r -= e[a] * o * s,
                        e
                    }
                    ), {})
                },
                isNormalInteger: function(e) {
                    var t = Math.floor(Number(e));
                    return t !== 1 / 0 && String(t) === e && t >= 0
                },
                isValidatedTime: function(e) {
                    return /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(e)
                },
                pad: r,
                secondsToTime: function(e) {
                    return [r(Math.floor(e / 3600).toString()), r(Math.floor(e % 3600 / 60).toString()), r(Math.floor(e % 60).toString())]
                }
            }
        }
        ,
        7576: function(e) {
            /*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
            var t;
            t = function() {
                return function() {
                    var e = {
                        686: function(e, t, n) {
                            "use strict";
                            n.d(t, {
                                default: function() {
                                    return b
                                }
                            });
                            var r = n(279)
                              , o = n.n(r)
                              , i = n(370)
                              , a = n.n(i)
                              , s = n(817)
                              , u = n.n(s);
                            function d(e) {
                                try {
                                    return document.execCommand(e)
                                } catch (e) {
                                    return !1
                                }
                            }
                            var l = function(e) {
                                var t = u()(e);
                                return d("cut"),
                                t
                            }
                              , _ = function(e, t) {
                                var n = function(e) {
                                    var t = "rtl" === document.documentElement.getAttribute("dir")
                                      , n = document.createElement("textarea");
                                    n.style.fontSize = "12pt",
                                    n.style.border = "0",
                                    n.style.padding = "0",
                                    n.style.margin = "0",
                                    n.style.position = "absolute",
                                    n.style[t ? "right" : "left"] = "-9999px";
                                    var r = window.pageYOffset || document.documentElement.scrollTop;
                                    return n.style.top = "".concat(r, "px"),
                                    n.setAttribute("readonly", ""),
                                    n.value = e,
                                    n
                                }(e);
                                t.container.appendChild(n);
                                var r = u()(n);
                                return d("copy"),
                                n.remove(),
                                r
                            }
                              , c = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    container: document.body
                                }
                                  , n = "";
                                return "string" == typeof e ? n = _(e, t) : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == e ? void 0 : e.type) ? n = _(e.value, t) : (n = u()(e),
                                d("copy")),
                                n
                            };
                            function m(e) {
                                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                }
                                : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                ,
                                m(e)
                            }
                            var f = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = e.action
                                  , n = void 0 === t ? "copy" : t
                                  , r = e.container
                                  , o = e.target
                                  , i = e.text;
                                if ("copy" !== n && "cut" !== n)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                if (void 0 !== o) {
                                    if (!o || "object" !== m(o) || 1 !== o.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === n && o.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === n && (o.hasAttribute("readonly") || o.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                                }
                                return i ? c(i, {
                                    container: r
                                }) : o ? "cut" === n ? l(o) : c(o, {
                                    container: r
                                }) : void 0
                            };
                            function h(e) {
                                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                }
                                : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                ,
                                h(e)
                            }
                            function M(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }
                            function p(e, t) {
                                return p = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t,
                                    e
                                }
                                ,
                                p(e, t)
                            }
                            function Y(e) {
                                var t = function() {
                                    if ("undefined" == typeof Reflect || !Reflect.construct)
                                        return !1;
                                    if (Reflect.construct.sham)
                                        return !1;
                                    if ("function" == typeof Proxy)
                                        return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                                        ))),
                                        !0
                                    } catch (e) {
                                        return !1
                                    }
                                }();
                                return function() {
                                    var n, r, o, i = y(e);
                                    if (t) {
                                        var a = y(this).constructor;
                                        n = Reflect.construct(i, arguments, a)
                                    } else
                                        n = i.apply(this, arguments);
                                    return r = this,
                                    !(o = n) || "object" !== h(o) && "function" != typeof o ? function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(r) : o
                                }
                            }
                            function y(e) {
                                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                }
                                ,
                                y(e)
                            }
                            function g(e, t) {
                                var n = "data-clipboard-".concat(e);
                                if (t.hasAttribute(n))
                                    return t.getAttribute(n)
                            }
                            var v = function(e) {
                                !function(e, t) {
                                    if ("function" != typeof t && null !== t)
                                        throw new TypeError("Super expression must either be null or a function");
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }),
                                    t && p(e, t)
                                }(i, e);
                                var t, n, r, o = Y(i);
                                function i(e, t) {
                                    var n;
                                    return function(e, t) {
                                        if (!(e instanceof t))
                                            throw new TypeError("Cannot call a class as a function")
                                    }(this, i),
                                    (n = o.call(this)).resolveOptions(t),
                                    n.listenClick(e),
                                    n
                                }
                                return t = i,
                                n = [{
                                    key: "resolveOptions",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                                        this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                                        this.text = "function" == typeof e.text ? e.text : this.defaultText,
                                        this.container = "object" === h(e.container) ? e.container : document.body
                                    }
                                }, {
                                    key: "listenClick",
                                    value: function(e) {
                                        var t = this;
                                        this.listener = a()(e, "click", (function(e) {
                                            return t.onClick(e)
                                        }
                                        ))
                                    }
                                }, {
                                    key: "onClick",
                                    value: function(e) {
                                        var t = e.delegateTarget || e.currentTarget
                                          , n = this.action(t) || "copy"
                                          , r = f({
                                            action: n,
                                            container: this.container,
                                            target: this.target(t),
                                            text: this.text(t)
                                        });
                                        this.emit(r ? "success" : "error", {
                                            action: n,
                                            text: r,
                                            trigger: t,
                                            clearSelection: function() {
                                                t && t.focus(),
                                                window.getSelection().removeAllRanges()
                                            }
                                        })
                                    }
                                }, {
                                    key: "defaultAction",
                                    value: function(e) {
                                        return g("action", e)
                                    }
                                }, {
                                    key: "defaultTarget",
                                    value: function(e) {
                                        var t = g("target", e);
                                        if (t)
                                            return document.querySelector(t)
                                    }
                                }, {
                                    key: "defaultText",
                                    value: function(e) {
                                        return g("text", e)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.listener.destroy()
                                    }
                                }],
                                r = [{
                                    key: "copy",
                                    value: function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                            container: document.body
                                        };
                                        return c(e, t)
                                    }
                                }, {
                                    key: "cut",
                                    value: function(e) {
                                        return l(e)
                                    }
                                }, {
                                    key: "isSupported",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                          , t = "string" == typeof e ? [e] : e
                                          , n = !!document.queryCommandSupported;
                                        return t.forEach((function(e) {
                                            n = n && !!document.queryCommandSupported(e)
                                        }
                                        )),
                                        n
                                    }
                                }],
                                n && M(t.prototype, n),
                                r && M(t, r),
                                i
                            }(o())
                              , b = v
                        },
                        828: function(e) {
                            if ("undefined" != typeof Element && !Element.prototype.matches) {
                                var t = Element.prototype;
                                t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                            }
                            e.exports = function(e, t) {
                                for (; e && 9 !== e.nodeType; ) {
                                    if ("function" == typeof e.matches && e.matches(t))
                                        return e;
                                    e = e.parentNode
                                }
                            }
                        },
                        438: function(e, t, n) {
                            var r = n(828);
                            function o(e, t, n, r, o) {
                                var a = i.apply(this, arguments);
                                return e.addEventListener(n, a, o),
                                {
                                    destroy: function() {
                                        e.removeEventListener(n, a, o)
                                    }
                                }
                            }
                            function i(e, t, n, o) {
                                return function(n) {
                                    n.delegateTarget = r(n.target, t),
                                    n.delegateTarget && o.call(e, n)
                                }
                            }
                            e.exports = function(e, t, n, r, i) {
                                return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                                Array.prototype.map.call(e, (function(e) {
                                    return o(e, t, n, r, i)
                                }
                                )))
                            }
                        },
                        879: function(e, t) {
                            t.node = function(e) {
                                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                            }
                            ,
                            t.nodeList = function(e) {
                                var n = Object.prototype.toString.call(e);
                                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
                            }
                            ,
                            t.string = function(e) {
                                return "string" == typeof e || e instanceof String
                            }
                            ,
                            t.fn = function(e) {
                                return "[object Function]" === Object.prototype.toString.call(e)
                            }
                        },
                        370: function(e, t, n) {
                            var r = n(879)
                              , o = n(438);
                            e.exports = function(e, t, n) {
                                if (!e && !t && !n)
                                    throw new Error("Missing required arguments");
                                if (!r.string(t))
                                    throw new TypeError("Second argument must be a String");
                                if (!r.fn(n))
                                    throw new TypeError("Third argument must be a Function");
                                if (r.node(e))
                                    return function(e, t, n) {
                                        return e.addEventListener(t, n),
                                        {
                                            destroy: function() {
                                                e.removeEventListener(t, n)
                                            }
                                        }
                                    }(e, t, n);
                                if (r.nodeList(e))
                                    return function(e, t, n) {
                                        return Array.prototype.forEach.call(e, (function(e) {
                                            e.addEventListener(t, n)
                                        }
                                        )),
                                        {
                                            destroy: function() {
                                                Array.prototype.forEach.call(e, (function(e) {
                                                    e.removeEventListener(t, n)
                                                }
                                                ))
                                            }
                                        }
                                    }(e, t, n);
                                if (r.string(e))
                                    return function(e, t, n) {
                                        return o(document.body, e, t, n)
                                    }(e, t, n);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                            }
                        },
                        817: function(e) {
                            e.exports = function(e) {
                                var t;
                                if ("SELECT" === e.nodeName)
                                    e.focus(),
                                    t = e.value;
                                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                                    var n = e.hasAttribute("readonly");
                                    n || e.setAttribute("readonly", ""),
                                    e.select(),
                                    e.setSelectionRange(0, e.value.length),
                                    n || e.removeAttribute("readonly"),
                                    t = e.value
                                } else {
                                    e.hasAttribute("contenteditable") && e.focus();
                                    var r = window.getSelection()
                                      , o = document.createRange();
                                    o.selectNodeContents(e),
                                    r.removeAllRanges(),
                                    r.addRange(o),
                                    t = r.toString()
                                }
                                return t
                            }
                        },
                        279: function(e) {
                            function t() {}
                            t.prototype = {
                                on: function(e, t, n) {
                                    var r = this.e || (this.e = {});
                                    return (r[e] || (r[e] = [])).push({
                                        fn: t,
                                        ctx: n
                                    }),
                                    this
                                },
                                once: function(e, t, n) {
                                    var r = this;
                                    function o() {
                                        r.off(e, o),
                                        t.apply(n, arguments)
                                    }
                                    return o._ = t,
                                    this.on(e, o, n)
                                },
                                emit: function(e) {
                                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++)
                                        n[r].fn.apply(n[r].ctx, t);
                                    return this
                                },
                                off: function(e, t) {
                                    var n = this.e || (this.e = {})
                                      , r = n[e]
                                      , o = [];
                                    if (r && t)
                                        for (var i = 0, a = r.length; i < a; i++)
                                            r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                                    return o.length ? n[e] = o : delete n[e],
                                    this
                                }
                            },
                            e.exports = t,
                            e.exports.TinyEmitter = t
                        }
                    }
                      , t = {};
                    function n(r) {
                        if (t[r])
                            return t[r].exports;
                        var o = t[r] = {
                            exports: {}
                        };
                        return e[r](o, o.exports, n),
                        o.exports
                    }
                    return n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, {
                            a: t
                        }),
                        t
                    }
                    ,
                    n.d = function(e, t) {
                        for (var r in t)
                            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: t[r]
                            })
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n(686)
                }().default
            }
            ,
            e.exports = t()
        },
        4353: function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3
                  , t = 6e4
                  , n = 36e5
                  , r = "millisecond"
                  , o = "second"
                  , i = "minute"
                  , a = "hour"
                  , s = "day"
                  , u = "week"
                  , d = "month"
                  , l = "quarter"
                  , _ = "year"
                  , c = "date"
                  , m = "Invalid Date"
                  , f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
                  , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
                  , M = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(e) {
                        var t = ["th", "st", "nd", "rd"]
                          , n = e % 100;
                        return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                    }
                }
                  , p = function(e, t, n) {
                    var r = String(e);
                    return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                }
                  , Y = {
                    s: p,
                    z: function(e) {
                        var t = -e.utcOffset()
                          , n = Math.abs(t)
                          , r = Math.floor(n / 60)
                          , o = n % 60;
                        return (t <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(o, 2, "0")
                    },
                    m: function e(t, n) {
                        if (t.date() < n.date())
                            return -e(n, t);
                        var r = 12 * (n.year() - t.year()) + (n.month() - t.month())
                          , o = t.clone().add(r, d)
                          , i = n - o < 0
                          , a = t.clone().add(r + (i ? -1 : 1), d);
                        return +(-(r + (n - o) / (i ? o - a : a - o)) || 0)
                    },
                    a: function(e) {
                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                    },
                    p: function(e) {
                        return {
                            M: d,
                            y: _,
                            w: u,
                            d: s,
                            D: c,
                            h: a,
                            m: i,
                            s: o,
                            ms: r,
                            Q: l
                        }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(e) {
                        return void 0 === e
                    }
                }
                  , y = "en"
                  , g = {};
                g[y] = M;
                var v = "$isDayjsObject"
                  , b = function(e) {
                    return e instanceof S || !(!e || !e[v])
                }
                  , L = function e(t, n, r) {
                    var o;
                    if (!t)
                        return y;
                    if ("string" == typeof t) {
                        var i = t.toLowerCase();
                        g[i] && (o = i),
                        n && (g[i] = n,
                        o = i);
                        var a = t.split("-");
                        if (!o && a.length > 1)
                            return e(a[0])
                    } else {
                        var s = t.name;
                        g[s] = t,
                        o = s
                    }
                    return !r && o && (y = o),
                    o || !r && y
                }
                  , k = function(e, t) {
                    if (b(e))
                        return e.clone();
                    var n = "object" == typeof t ? t : {};
                    return n.date = e,
                    n.args = arguments,
                    new S(n)
                }
                  , w = Y;
                w.l = L,
                w.i = b,
                w.w = function(e, t) {
                    return k(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                }
                ;
                var S = function() {
                    function M(e) {
                        this.$L = L(e.locale, null, !0),
                        this.parse(e),
                        this.$x = this.$x || e.x || {},
                        this[v] = !0
                    }
                    var p = M.prototype;
                    return p.parse = function(e) {
                        this.$d = function(e) {
                            var t = e.date
                              , n = e.utc;
                            if (null === t)
                                return new Date(NaN);
                            if (w.u(t))
                                return new Date;
                            if (t instanceof Date)
                                return new Date(t);
                            if ("string" == typeof t && !/Z$/i.test(t)) {
                                var r = t.match(f);
                                if (r) {
                                    var o = r[2] - 1 || 0
                                      , i = (r[7] || "0").substring(0, 3);
                                    return n ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1],o,r[3] || 1,r[4] || 0,r[5] || 0,r[6] || 0,i)
                                }
                            }
                            return new Date(t)
                        }(e),
                        this.init()
                    }
                    ,
                    p.init = function() {
                        var e = this.$d;
                        this.$y = e.getFullYear(),
                        this.$M = e.getMonth(),
                        this.$D = e.getDate(),
                        this.$W = e.getDay(),
                        this.$H = e.getHours(),
                        this.$m = e.getMinutes(),
                        this.$s = e.getSeconds(),
                        this.$ms = e.getMilliseconds()
                    }
                    ,
                    p.$utils = function() {
                        return w
                    }
                    ,
                    p.isValid = function() {
                        return !(this.$d.toString() === m)
                    }
                    ,
                    p.isSame = function(e, t) {
                        var n = k(e);
                        return this.startOf(t) <= n && n <= this.endOf(t)
                    }
                    ,
                    p.isAfter = function(e, t) {
                        return k(e) < this.startOf(t)
                    }
                    ,
                    p.isBefore = function(e, t) {
                        return this.endOf(t) < k(e)
                    }
                    ,
                    p.$g = function(e, t, n) {
                        return w.u(e) ? this[t] : this.set(n, e)
                    }
                    ,
                    p.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }
                    ,
                    p.valueOf = function() {
                        return this.$d.getTime()
                    }
                    ,
                    p.startOf = function(e, t) {
                        var n = this
                          , r = !!w.u(t) || t
                          , l = w.p(e)
                          , m = function(e, t) {
                            var o = w.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y,t,e), n);
                            return r ? o : o.endOf(s)
                        }
                          , f = function(e, t) {
                            return w.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                        }
                          , h = this.$W
                          , M = this.$M
                          , p = this.$D
                          , Y = "set" + (this.$u ? "UTC" : "");
                        switch (l) {
                        case _:
                            return r ? m(1, 0) : m(31, 11);
                        case d:
                            return r ? m(1, M) : m(0, M + 1);
                        case u:
                            var y = this.$locale().weekStart || 0
                              , g = (h < y ? h + 7 : h) - y;
                            return m(r ? p - g : p + (6 - g), M);
                        case s:
                        case c:
                            return f(Y + "Hours", 0);
                        case a:
                            return f(Y + "Minutes", 1);
                        case i:
                            return f(Y + "Seconds", 2);
                        case o:
                            return f(Y + "Milliseconds", 3);
                        default:
                            return this.clone()
                        }
                    }
                    ,
                    p.endOf = function(e) {
                        return this.startOf(e, !1)
                    }
                    ,
                    p.$set = function(e, t) {
                        var n, u = w.p(e), l = "set" + (this.$u ? "UTC" : ""), m = (n = {},
                        n[s] = l + "Date",
                        n[c] = l + "Date",
                        n[d] = l + "Month",
                        n[_] = l + "FullYear",
                        n[a] = l + "Hours",
                        n[i] = l + "Minutes",
                        n[o] = l + "Seconds",
                        n[r] = l + "Milliseconds",
                        n)[u], f = u === s ? this.$D + (t - this.$W) : t;
                        if (u === d || u === _) {
                            var h = this.clone().set(c, 1);
                            h.$d[m](f),
                            h.init(),
                            this.$d = h.set(c, Math.min(this.$D, h.daysInMonth())).$d
                        } else
                            m && this.$d[m](f);
                        return this.init(),
                        this
                    }
                    ,
                    p.set = function(e, t) {
                        return this.clone().$set(e, t)
                    }
                    ,
                    p.get = function(e) {
                        return this[w.p(e)]()
                    }
                    ,
                    p.add = function(r, l) {
                        var c, m = this;
                        r = Number(r);
                        var f = w.p(l)
                          , h = function(e) {
                            var t = k(m);
                            return w.w(t.date(t.date() + Math.round(e * r)), m)
                        };
                        if (f === d)
                            return this.set(d, this.$M + r);
                        if (f === _)
                            return this.set(_, this.$y + r);
                        if (f === s)
                            return h(1);
                        if (f === u)
                            return h(7);
                        var M = (c = {},
                        c[i] = t,
                        c[a] = n,
                        c[o] = e,
                        c)[f] || 1
                          , p = this.$d.getTime() + r * M;
                        return w.w(p, this)
                    }
                    ,
                    p.subtract = function(e, t) {
                        return this.add(-1 * e, t)
                    }
                    ,
                    p.format = function(e) {
                        var t = this
                          , n = this.$locale();
                        if (!this.isValid())
                            return n.invalidDate || m;
                        var r = e || "YYYY-MM-DDTHH:mm:ssZ"
                          , o = w.z(this)
                          , i = this.$H
                          , a = this.$m
                          , s = this.$M
                          , u = n.weekdays
                          , d = n.months
                          , l = n.meridiem
                          , _ = function(e, n, o, i) {
                            return e && (e[n] || e(t, r)) || o[n].slice(0, i)
                        }
                          , c = function(e) {
                            return w.s(i % 12 || 12, e, "0")
                        }
                          , f = l || function(e, t, n) {
                            var r = e < 12 ? "AM" : "PM";
                            return n ? r.toLowerCase() : r
                        }
                        ;
                        return r.replace(h, (function(e, r) {
                            return r || function(e) {
                                switch (e) {
                                case "YY":
                                    return String(t.$y).slice(-2);
                                case "YYYY":
                                    return w.s(t.$y, 4, "0");
                                case "M":
                                    return s + 1;
                                case "MM":
                                    return w.s(s + 1, 2, "0");
                                case "MMM":
                                    return _(n.monthsShort, s, d, 3);
                                case "MMMM":
                                    return _(d, s);
                                case "D":
                                    return t.$D;
                                case "DD":
                                    return w.s(t.$D, 2, "0");
                                case "d":
                                    return String(t.$W);
                                case "dd":
                                    return _(n.weekdaysMin, t.$W, u, 2);
                                case "ddd":
                                    return _(n.weekdaysShort, t.$W, u, 3);
                                case "dddd":
                                    return u[t.$W];
                                case "H":
                                    return String(i);
                                case "HH":
                                    return w.s(i, 2, "0");
                                case "h":
                                    return c(1);
                                case "hh":
                                    return c(2);
                                case "a":
                                    return f(i, a, !0);
                                case "A":
                                    return f(i, a, !1);
                                case "m":
                                    return String(a);
                                case "mm":
                                    return w.s(a, 2, "0");
                                case "s":
                                    return String(t.$s);
                                case "ss":
                                    return w.s(t.$s, 2, "0");
                                case "SSS":
                                    return w.s(t.$ms, 3, "0");
                                case "Z":
                                    return o
                                }
                                return null
                            }(e) || o.replace(":", "")
                        }
                        ))
                    }
                    ,
                    p.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }
                    ,
                    p.diff = function(r, c, m) {
                        var f, h = this, M = w.p(c), p = k(r), Y = (p.utcOffset() - this.utcOffset()) * t, y = this - p, g = function() {
                            return w.m(h, p)
                        };
                        switch (M) {
                        case _:
                            f = g() / 12;
                            break;
                        case d:
                            f = g();
                            break;
                        case l:
                            f = g() / 3;
                            break;
                        case u:
                            f = (y - Y) / 6048e5;
                            break;
                        case s:
                            f = (y - Y) / 864e5;
                            break;
                        case a:
                            f = y / n;
                            break;
                        case i:
                            f = y / t;
                            break;
                        case o:
                            f = y / e;
                            break;
                        default:
                            f = y
                        }
                        return m ? f : w.a(f)
                    }
                    ,
                    p.daysInMonth = function() {
                        return this.endOf(d).$D
                    }
                    ,
                    p.$locale = function() {
                        return g[this.$L]
                    }
                    ,
                    p.locale = function(e, t) {
                        if (!e)
                            return this.$L;
                        var n = this.clone()
                          , r = L(e, t, !0);
                        return r && (n.$L = r),
                        n
                    }
                    ,
                    p.clone = function() {
                        return w.w(this.$d, this)
                    }
                    ,
                    p.toDate = function() {
                        return new Date(this.valueOf())
                    }
                    ,
                    p.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }
                    ,
                    p.toISOString = function() {
                        return this.$d.toISOString()
                    }
                    ,
                    p.toString = function() {
                        return this.$d.toUTCString()
                    }
                    ,
                    M
                }()
                  , D = S.prototype;
                return k.prototype = D,
                [["$ms", r], ["$s", o], ["$m", i], ["$H", a], ["$W", s], ["$M", d], ["$y", _], ["$D", c]].forEach((function(e) {
                    D[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                }
                )),
                k.extend = function(e, t) {
                    return e.$i || (e(t, S, k),
                    e.$i = !0),
                    k
                }
                ,
                k.locale = L,
                k.isDayjs = b,
                k.unix = function(e) {
                    return k(1e3 * e)
                }
                ,
                k.en = g[y],
                k.Ls = g,
                k.p = {},
                k
            }()
        },
        2338: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_")
                  , o = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                }
                  , i = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }
                  , a = {
                    name: "ar",
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    months: r,
                    monthsShort: r,
                    weekStart: 6,
                    meridiem: function(e) {
                        return e > 12 ? "م" : "ص"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: "ثانية واحدة",
                        m: "دقيقة واحدة",
                        mm: "%d دقائق",
                        h: "ساعة واحدة",
                        hh: "%d ساعات",
                        d: "يوم واحد",
                        dd: "%d أيام",
                        M: "شهر واحد",
                        MM: "%d أشهر",
                        y: "عام واحد",
                        yy: "%d أعوام"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                            return i[e]
                        }
                        )).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return o[e]
                        }
                        )).replace(/,/g, "،")
                    },
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    }
                };
                return n.default.locale(a, null, !0),
                a
            }(n(4353))
        },
        9990: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "bg",
                    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                    weekStart: 1,
                    ordinal: function(e) {
                        var t = e % 100;
                        if (t > 10 && t < 20)
                            return e + "-ти";
                        var n = e % 10;
                        return 1 === n ? e + "-ви" : 2 === n ? e + "-ри" : 7 === n || 8 === n ? e + "-ми" : e + "-ти"
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    relativeTime: {
                        future: "след %s",
                        past: "преди %s",
                        s: "няколко секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дена",
                        M: "месец",
                        MM: "%d месеца",
                        y: "година",
                        yy: "%d години"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        9751: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e);
                function r(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }
                function o(e, t, n, o) {
                    var i = e + " ";
                    switch (n) {
                    case "s":
                        return t || o ? "pár sekund" : "pár sekundami";
                    case "m":
                        return t ? "minuta" : o ? "minutu" : "minutou";
                    case "mm":
                        return t || o ? i + (r(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return t ? "hodina" : o ? "hodinu" : "hodinou";
                    case "hh":
                        return t || o ? i + (r(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return t || o ? "den" : "dnem";
                    case "dd":
                        return t || o ? i + (r(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return t || o ? "měsíc" : "měsícem";
                    case "MM":
                        return t || o ? i + (r(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return t || o ? "rok" : "rokem";
                    case "yy":
                        return t || o ? i + (r(e) ? "roky" : "let") : i + "lety"
                    }
                }
                var i = {
                    name: "cs",
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                    monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        return e + "."
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: o,
                        m: o,
                        mm: o,
                        h: o,
                        hh: o,
                        d: o,
                        dd: o,
                        M: o,
                        MM: o,
                        y: o,
                        yy: o
                    }
                };
                return n.default.locale(i, null, !0),
                i
            }(n(4353))
        },
        2706: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "da",
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"),
                    weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"),
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        return e + "."
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "få sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "et år",
                        yy: "%d år"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        494: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    s: "ein paar Sekunden",
                    m: ["eine Minute", "einer Minute"],
                    mm: "%d Minuten",
                    h: ["eine Stunde", "einer Stunde"],
                    hh: "%d Stunden",
                    d: ["ein Tag", "einem Tag"],
                    dd: ["%d Tage", "%d Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: ["%d Monate", "%d Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: ["%d Jahre", "%d Jahren"]
                };
                function o(e, t, n) {
                    var o = r[n];
                    return Array.isArray(o) && (o = o[t ? 0 : 1]),
                    o.replace("%d", e)
                }
                var i = {
                    name: "de",
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                    ordinal: function(e) {
                        return e + "."
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LTS: "HH:mm:ss",
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: o,
                        m: o,
                        mm: o,
                        h: o,
                        hh: o,
                        d: o,
                        dd: o,
                        M: o,
                        MM: o,
                        y: o,
                        yy: o
                    }
                };
                return n.default.locale(i, null, !0),
                i
            }(n(4353))
        },
        4072: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "el",
                    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                    months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "σε %s",
                        past: "πριν %s",
                        s: "μερικά δευτερόλεπτα",
                        m: "ένα λεπτό",
                        mm: "%d λεπτά",
                        h: "μία ώρα",
                        hh: "%d ώρες",
                        d: "μία μέρα",
                        dd: "%d μέρες",
                        M: "ένα μήνα",
                        MM: "%d μήνες",
                        y: "ένα χρόνο",
                        yy: "%d χρόνια"
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        7317: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "es",
                    monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinal: function(e) {
                        return e + "º"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        9964: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e);
                function r(e, t, n, r) {
                    var o = {
                        s: "muutama sekunti",
                        m: "minuutti",
                        mm: "%d minuuttia",
                        h: "tunti",
                        hh: "%d tuntia",
                        d: "päivä",
                        dd: "%d päivää",
                        M: "kuukausi",
                        MM: "%d kuukautta",
                        y: "vuosi",
                        yy: "%d vuotta",
                        numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")
                    }
                      , i = {
                        s: "muutaman sekunnin",
                        m: "minuutin",
                        mm: "%d minuutin",
                        h: "tunnin",
                        hh: "%d tunnin",
                        d: "päivän",
                        dd: "%d päivän",
                        M: "kuukauden",
                        MM: "%d kuukauden",
                        y: "vuoden",
                        yy: "%d vuoden",
                        numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")
                    }
                      , a = r && !t ? i : o
                      , s = a[n];
                    return e < 10 ? s.replace("%d", a.numbers[e]) : s.replace("%d", e)
                }
                var o = {
                    name: "fi",
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                    ordinal: function(e) {
                        return e + "."
                    },
                    weekStart: 1,
                    yearStart: 4,
                    relativeTime: {
                        future: "%s päästä",
                        past: "%s sitten",
                        s: r,
                        m: r,
                        mm: r,
                        h: r,
                        hh: r,
                        d: r,
                        dd: r,
                        M: r,
                        MM: r,
                        y: r,
                        yy: r
                    },
                    formats: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM[ta] YYYY",
                        LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "D. MMM YYYY",
                        lll: "D. MMM YYYY, [klo] HH.mm",
                        llll: "ddd, D. MMM YYYY, [klo] HH.mm"
                    }
                };
                return n.default.locale(o, null, !0),
                o
            }(n(4353))
        },
        813: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "fr",
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinal: function(e) {
                        return e + (1 === e ? "er" : "")
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        2010: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: "%d שעות",
                    hh2: "שעתיים",
                    d: "יום",
                    dd: "%d ימים",
                    dd2: "יומיים",
                    M: "חודש",
                    MM: "%d חודשים",
                    MM2: "חודשיים",
                    y: "שנה",
                    yy: "%d שנים",
                    yy2: "שנתיים"
                };
                function o(e, t, n) {
                    return (r[n + (2 === e ? "2" : "")] || r[n]).replace("%d", e)
                }
                var i = {
                    name: "he",
                    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                    weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),
                    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                    monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),
                    relativeTime: {
                        future: "בעוד %s",
                        past: "לפני %s",
                        s: o,
                        m: o,
                        mm: o,
                        h: o,
                        hh: o,
                        d: o,
                        dd: o,
                        M: o,
                        MM: o,
                        y: o,
                        yy: o
                    },
                    ordinal: function(e) {
                        return e
                    },
                    format: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY HH:mm",
                        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY HH:mm",
                        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    }
                };
                return n.default.locale(i, null, !0),
                i
            }(n(4353))
        },
        5811: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_")
                  , o = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                  , i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/
                  , a = function(e, t) {
                    return i.test(t) ? r[e.month()] : o[e.month()]
                };
                a.s = o,
                a.f = r;
                var s = {
                    name: "hr",
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    months: a,
                    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "sekunda",
                        m: "minuta",
                        mm: "%d minuta",
                        h: "sat",
                        hh: "%d sati",
                        d: "dan",
                        dd: "%d dana",
                        M: "mjesec",
                        MM: "%d mjeseci",
                        y: "godina",
                        yy: "%d godine"
                    },
                    ordinal: function(e) {
                        return e + "."
                    }
                };
                return n.default.locale(s, null, !0),
                s
            }(n(4353))
        },
        8298: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "hu",
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                    ordinal: function(e) {
                        return e + "."
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: function(e, t, n, r) {
                            return "néhány másodperc" + (r || t ? "" : "e")
                        },
                        m: function(e, t, n, r) {
                            return "egy perc" + (r || t ? "" : "e")
                        },
                        mm: function(e, t, n, r) {
                            return e + " perc" + (r || t ? "" : "e")
                        },
                        h: function(e, t, n, r) {
                            return "egy " + (r || t ? "óra" : "órája")
                        },
                        hh: function(e, t, n, r) {
                            return e + " " + (r || t ? "óra" : "órája")
                        },
                        d: function(e, t, n, r) {
                            return "egy " + (r || t ? "nap" : "napja")
                        },
                        dd: function(e, t, n, r) {
                            return e + " " + (r || t ? "nap" : "napja")
                        },
                        M: function(e, t, n, r) {
                            return "egy " + (r || t ? "hónap" : "hónapja")
                        },
                        MM: function(e, t, n, r) {
                            return e + " " + (r || t ? "hónap" : "hónapja")
                        },
                        y: function(e, t, n, r) {
                            return "egy " + (r || t ? "év" : "éve")
                        },
                        yy: function(e, t, n, r) {
                            return e + " " + (r || t ? "év" : "éve")
                        }
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        7420: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "id",
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    ordinal: function(e) {
                        return e + "."
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        3900: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "it",
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    weekStart: 1,
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "tra %s",
                        past: "%s fa",
                        s: "qualche secondo",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un' ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinal: function(e) {
                        return e + "º"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        952: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "ja",
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    ordinal: function(e) {
                        return e + "日"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日(ddd) HH:mm"
                    },
                    meridiem: function(e) {
                        return e < 12 ? "午前" : "午後"
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "数秒",
                        m: "1分",
                        mm: "%d分",
                        h: "1時間",
                        hh: "%d時間",
                        d: "1日",
                        dd: "%d日",
                        M: "1ヶ月",
                        MM: "%dヶ月",
                        y: "1年",
                        yy: "%d年"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        8003: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "ko",
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    ordinal: function(e) {
                        return e + "일"
                    },
                    formats: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY년 MMMM D일",
                        LLL: "YYYY년 MMMM D일 A h:mm",
                        LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY년 MMMM D일",
                        lll: "YYYY년 MMMM D일 A h:mm",
                        llll: "YYYY년 MMMM D일 dddd A h:mm"
                    },
                    meridiem: function(e) {
                        return e < 12 ? "오전" : "오후"
                    },
                    relativeTime: {
                        future: "%s 후",
                        past: "%s 전",
                        s: "몇 초",
                        m: "1분",
                        mm: "%d분",
                        h: "한 시간",
                        hh: "%d시간",
                        d: "하루",
                        dd: "%d일",
                        M: "한 달",
                        MM: "%d달",
                        y: "일 년",
                        yy: "%d년"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        7205: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "nb",
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    ordinal: function(e) {
                        return e + "."
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "ett år",
                        yy: "%d år"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        9423: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "nl",
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    ordinal: function(e) {
                        return "[" + e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") + "]"
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "een minuut",
                        mm: "%d minuten",
                        h: "een uur",
                        hh: "%d uur",
                        d: "een dag",
                        dd: "%d dagen",
                        M: "een maand",
                        MM: "%d maanden",
                        y: "een jaar",
                        yy: "%d jaar"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        3225: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e);
                function r(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
                }
                function o(e, t, n) {
                    var o = e + " ";
                    switch (n) {
                    case "m":
                        return t ? "minuta" : "minutę";
                    case "mm":
                        return o + (r(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzinę";
                    case "hh":
                        return o + (r(e) ? "godziny" : "godzin");
                    case "MM":
                        return o + (r(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return o + (r(e) ? "lata" : "lat")
                    }
                }
                var i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
                  , a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
                  , s = /D MMMM/
                  , u = function(e, t) {
                    return s.test(t) ? i[e.month()] : a[e.month()]
                };
                u.s = a,
                u.f = i;
                var d = {
                    name: "pl",
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    months: u,
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    ordinal: function(e) {
                        return e + "."
                    },
                    weekStart: 1,
                    yearStart: 4,
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: o,
                        mm: o,
                        h: o,
                        hh: o,
                        d: "1 dzień",
                        dd: "%d dni",
                        M: "miesiąc",
                        MM: o,
                        y: "rok",
                        yy: o
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    }
                };
                return n.default.locale(d, null, !0),
                d
            }(n(4353))
        },
        2369: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "pt",
                    weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
                    weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
                    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    ordinal: function(e) {
                        return e + "º"
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "há %s",
                        s: "alguns segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        4334: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "ro",
                    weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                    months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
                    monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "acum %s",
                        s: "câteva secunde",
                        m: "un minut",
                        mm: "%d minute",
                        h: "o oră",
                        hh: "%d ore",
                        d: "o zi",
                        dd: "%d zile",
                        M: "o lună",
                        MM: "%d luni",
                        y: "un an",
                        yy: "%d ani"
                    },
                    ordinal: function(e) {
                        return e
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        2796: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                  , o = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                  , i = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_")
                  , a = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                  , s = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
                function u(e, t, n) {
                    var r, o;
                    return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e,
                    o = {
                        mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                        hh: "час_часа_часов",
                        dd: "день_дня_дней",
                        MM: "месяц_месяца_месяцев",
                        yy: "год_года_лет"
                    }[n].split("_"),
                    r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2])
                }
                var d = function(e, t) {
                    return s.test(t) ? r[e.month()] : o[e.month()]
                };
                d.s = o,
                d.f = r;
                var l = function(e, t) {
                    return s.test(t) ? i[e.month()] : a[e.month()]
                };
                l.s = a,
                l.f = i;
                var _ = {
                    name: "ru",
                    weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    months: d,
                    monthsShort: l,
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., H:mm",
                        LLLL: "dddd, D MMMM YYYY г., H:mm"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        m: u,
                        mm: u,
                        h: "час",
                        hh: u,
                        d: "день",
                        dd: u,
                        M: "месяц",
                        MM: u,
                        y: "год",
                        yy: u
                    },
                    ordinal: function(e) {
                        return e
                    },
                    meridiem: function(e) {
                        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                    }
                };
                return n.default.locale(_, null, !0),
                _
            }(n(4353))
        },
        6847: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e);
                function r(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }
                function o(e, t, n, o) {
                    var i = e + " ";
                    switch (n) {
                    case "s":
                        return t || o ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return t ? "minúta" : o ? "minútu" : "minútou";
                    case "mm":
                        return t || o ? i + (r(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return t ? "hodina" : o ? "hodinu" : "hodinou";
                    case "hh":
                        return t || o ? i + (r(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return t || o ? "deň" : "dňom";
                    case "dd":
                        return t || o ? i + (r(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return t || o ? "mesiac" : "mesiacom";
                    case "MM":
                        return t || o ? i + (r(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return t || o ? "rok" : "rokom";
                    case "yy":
                        return t || o ? i + (r(e) ? "roky" : "rokov") : i + "rokmi"
                    }
                }
                var i = {
                    name: "sk",
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        return e + "."
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: o,
                        m: o,
                        mm: o,
                        h: o,
                        hh: o,
                        d: o,
                        dd: o,
                        M: o,
                        MM: o,
                        y: o,
                        yy: o
                    }
                };
                return n.default.locale(i, null, !0),
                i
            }(n(4353))
        },
        5616: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    words: {
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["%d minut", "%d minuta", "%d minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["%d sat", "%d sata", "%d sati"],
                        d: ["jedan dan", "jednog dana"],
                        dd: ["%d dan", "%d dana", "%d dana"],
                        M: ["jedan mesec", "jednog meseca"],
                        MM: ["%d mesec", "%d meseca", "%d meseci"],
                        y: ["jednu godinu", "jedne godine"],
                        yy: ["%d godinu", "%d godine", "%d godina"]
                    },
                    correctGrammarCase: function(e, t) {
                        return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
                    },
                    relativeTimeFormatter: function(e, t, n, o) {
                        var i = r.words[n];
                        if (1 === n.length)
                            return "y" === n && t ? "jedna godina" : o || t ? i[0] : i[1];
                        var a = r.correctGrammarCase(e, i);
                        return "yy" === n && t && "%d godinu" === a ? e + " godina" : a.replace("%d", e)
                    }
                }
                  , o = {
                    name: "sr",
                    weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),
                    weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),
                    monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),
                    weekStart: 1,
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        m: r.relativeTimeFormatter,
                        mm: r.relativeTimeFormatter,
                        h: r.relativeTimeFormatter,
                        hh: r.relativeTimeFormatter,
                        d: r.relativeTimeFormatter,
                        dd: r.relativeTimeFormatter,
                        M: r.relativeTimeFormatter,
                        MM: r.relativeTimeFormatter,
                        y: r.relativeTimeFormatter,
                        yy: r.relativeTimeFormatter
                    },
                    ordinal: function(e) {
                        return e + "."
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D. M. YYYY.",
                        LL: "D. MMMM YYYY.",
                        LLL: "D. MMMM YYYY. H:mm",
                        LLLL: "dddd, D. MMMM YYYY. H:mm"
                    }
                };
                return n.default.locale(o, null, !0),
                o
            }(n(4353))
        },
        1340: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "sv",
                    weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                    weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                    weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        var t = e % 10;
                        return "[" + e + (1 === t || 2 === t ? "a" : "e") + "]"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd D MMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "för %s sedan",
                        s: "några sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en månad",
                        MM: "%d månader",
                        y: "ett år",
                        yy: "%d år"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        7081: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "th",
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา H:mm",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    },
                    ordinal: function(e) {
                        return e + "."
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        4895: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "tr",
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e) {
                        return e + "."
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        4173: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
                  , o = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                  , i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
                function a(e, t, n) {
                    var r, o;
                    return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e,
                    o = {
                        ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                        mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                        hh: t ? "година_години_годин" : "годину_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    }[n].split("_"),
                    r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2])
                }
                var s = function(e, t) {
                    return i.test(t) ? r[e.month()] : o[e.month()]
                };
                s.s = o,
                s.f = r;
                var u = {
                    name: "uk",
                    weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    months: s,
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekStart: 1,
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: "день",
                        dd: a,
                        M: "місяць",
                        MM: a,
                        y: "рік",
                        yy: a
                    },
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., HH:mm",
                        LLLL: "dddd, D MMMM YYYY р., HH:mm"
                    }
                };
                return n.default.locale(u, null, !0),
                u
            }(n(4353))
        },
        860: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "vi",
                    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                    weekStart: 1,
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [năm] YYYY",
                        LLL: "D MMMM [năm] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    relativeTime: {
                        future: "%s tới",
                        past: "%s trước",
                        s: "vài giây",
                        m: "một phút",
                        mm: "%d phút",
                        h: "một giờ",
                        hh: "%d giờ",
                        d: "một ngày",
                        dd: "%d ngày",
                        M: "một tháng",
                        MM: "%d tháng",
                        y: "một năm",
                        yy: "%d năm"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        6033: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "zh-cn",
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    ordinal: function(e, t) {
                        return "W" === t ? e + "周" : e + "日"
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日Ah点mm分",
                        LLLL: "YYYY年M月D日ddddAh点mm分",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    relativeTime: {
                        future: "%s内",
                        past: "%s前",
                        s: "几秒",
                        m: "1 分钟",
                        mm: "%d 分钟",
                        h: "1 小时",
                        hh: "%d 小时",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 个月",
                        MM: "%d 个月",
                        y: "1 年",
                        yy: "%d 年"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        1349: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                function t(e) {
                    return e && "object" == typeof e && "default"in e ? e : {
                        default: e
                    }
                }
                var n = t(e)
                  , r = {
                    name: "zh-tw",
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    ordinal: function(e, t) {
                        return "W" === t ? e + "週" : e + "日"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    relativeTime: {
                        future: "%s內",
                        past: "%s前",
                        s: "幾秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上"
                    }
                };
                return n.default.locale(r, null, !0),
                r
            }(n(4353))
        },
        7381: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, t) {
                    var n = t.prototype
                      , r = n.format;
                    n.format = function(e) {
                        var t = this
                          , n = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/(\[[^\]]+])|BBBB|BB/g, (function(e, n) {
                            var r, o = String(t.$y + 543), i = "BB" === e ? [o.slice(-2), 2] : [o, 4];
                            return n || (r = t.$utils()).s.apply(r, i.concat(["0"]))
                        }
                        ));
                        return r.bind(this)(n)
                    }
                }
            }()
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        "use strict";
        var e = n(4353)
          , t = n.n(e);
        n(2338),
        n(9990),
        n(9751),
        n(2706),
        n(494),
        n(4072),
        n(7317),
        n(9964),
        n(813),
        n(2010),
        n(5811),
        n(8298),
        n(7420),
        n(4895),
        n(3900),
        n(952),
        n(8003),
        n(9423),
        n(7205),
        n(3225),
        n(2369),
        n(4334),
        n(2796),
        n(6847),
        n(5616),
        n(1340),
        n(7081),
        n(4173),
        n(860),
        n(6033),
        n(1349);
        const r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]]
          , o = ( () => {
            if ("undefined" == typeof document)
                return !1;
            const e = r[0]
              , t = {};
            for (const n of r) {
                const r = n?.[1];
                if (r in document) {
                    for (const [r,o] of n.entries())
                        t[e[r]] = o;
                    return t
                }
            }
            return !1
        }
        )()
          , i = {
            change: o.fullscreenchange,
            error: o.fullscreenerror
        };
        let a = {
            request: (e=document.documentElement, t) => new Promise(( (n, r) => {
                const i = () => {
                    a.off("change", i),
                    n()
                }
                ;
                a.on("change", i);
                const s = e[o.requestFullscreen](t);
                s instanceof Promise && s.then(i).catch(r)
            }
            )),
            exit: () => new Promise(( (e, t) => {
                if (!a.isFullscreen)
                    return void e();
                const n = () => {
                    a.off("change", n),
                    e()
                }
                ;
                a.on("change", n);
                const r = document[o.exitFullscreen]();
                r instanceof Promise && r.then(n).catch(t)
            }
            )),
            toggle: (e, t) => a.isFullscreen ? a.exit() : a.request(e, t),
            onchange(e) {
                a.on("change", e)
            },
            onerror(e) {
                a.on("error", e)
            },
            on(e, t) {
                const n = i[e];
                n && document.addEventListener(n, t, !1)
            },
            off(e, t) {
                const n = i[e];
                n && document.removeEventListener(n, t, !1)
            },
            raw: o
        };
        Object.defineProperties(a, {
            isFullscreen: {
                get: () => Boolean(document[o.fullscreenElement])
            },
            element: {
                enumerable: !0,
                get: () => document[o.fullscreenElement] ?? void 0
            },
            isEnabled: {
                enumerable: !0,
                get: () => Boolean(document[o.fullscreenEnabled])
            }
        }),
        o || (a = {
            isEnabled: !1
        });
        const s = a;
        var u = function(e) {
            s.isEnabled && s.request(e)
        };
        const d = function() {
            var e = document.getElementById("fullscreen")
              , t = document.querySelector(".fullscreen");
            e && e.addEventListener("click", (function() {
                u(t)
            }
            ))
        };
        var l = document.querySelectorAll(".tab");
        const _ = function() {
            if (-1 !== window.location.href.indexOf("#")) {
                var e = window.location.hash;
                l.forEach((function(t) {
                    t.getAttribute("href") === e && t.click()
                }
                ))
            }
        }
          , c = function() {
            window.addEventListener("hashchange", (function() {
                var e = window.location.hash;
                l.forEach((function(t) {
                    t.getAttribute("href") === e && (t.click(),
                    document.querySelector(e).scrollIntoView())
                }
                ))
            }
            ), !1)
        };
        var m = window.CustomEvent;
        function f(e, t) {
            var n = "on" + t.type.toLowerCase();
            return "function" == typeof e[n] && e[n](t),
            e.dispatchEvent(t)
        }
        function h(e) {
            for (; e; ) {
                if ("dialog" === e.localName)
                    return e;
                e = e.parentElement ? e.parentElement : e.parentNode ? e.parentNode.host : null
            }
            return null
        }
        function M(e) {
            for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
                e = e.shadowRoot.activeElement;
            e && e.blur && e !== document.body && e.blur()
        }
        function p(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] === t)
                    return !0;
            return !1
        }
        function Y(e) {
            return !(!e || !e.hasAttribute("method")) && "dialog" === e.getAttribute("method").toLowerCase()
        }
        function y(e) {
            var t = ["button", "input", "keygen", "select", "textarea"].map((function(e) {
                return e + ":not([disabled])"
            }
            ));
            t.push('[tabindex]:not([disabled]):not([tabindex=""])');
            var n = e.querySelector(t.join(", "));
            if (!n && "attachShadow"in Element.prototype)
                for (var r = e.querySelectorAll("*"), o = 0; o < r.length && !(r[o].tagName && r[o].shadowRoot && (n = y(r[o].shadowRoot))); o++)
                    ;
            return n
        }
        function g(e) {
            return e.isConnected || document.body.contains(e)
        }
        function v(e) {
            if (e.submitter)
                return e.submitter;
            var t = e.target;
            if (!(t instanceof HTMLFormElement))
                return null;
            var n = k.formSubmitter;
            if (!n) {
                var r = e.target;
                n = ("getRootNode"in r && r.getRootNode() || document).activeElement
            }
            return n && n.form === t ? n : null
        }
        function b(e) {
            if (!e.defaultPrevented) {
                var t = e.target
                  , n = k.imagemapUseValue
                  , r = v(e);
                null === n && r && (n = r.value);
                var o = h(t);
                if (o)
                    "dialog" === (r && r.getAttribute("formmethod") || t.getAttribute("method")) && (e.preventDefault(),
                    null != n ? o.close(n) : o.close())
            }
        }
        function L(e) {
            if (this.dialog_ = e,
            this.replacedStyleTop_ = !1,
            this.openAsModal_ = !1,
            e.hasAttribute("role") || e.setAttribute("role", "dialog"),
            e.show = this.show.bind(this),
            e.showModal = this.showModal.bind(this),
            e.close = this.close.bind(this),
            e.addEventListener("submit", b, !1),
            "returnValue"in e || (e.returnValue = ""),
            "MutationObserver"in window) {
                new MutationObserver(this.maybeHideModal.bind(this)).observe(e, {
                    attributes: !0,
                    attributeFilter: ["open"]
                })
            } else {
                var t, n = !1, r = function() {
                    n ? this.downgradeModal() : this.maybeHideModal(),
                    n = !1
                }
                .bind(this), o = function(o) {
                    if (o.target === e) {
                        var i = "DOMNodeRemoved";
                        n |= o.type.substr(0, 14) === i,
                        window.clearTimeout(t),
                        t = window.setTimeout(r, 0)
                    }
                };
                ["DOMAttrModified", "DOMNodeRemoved", "DOMNodeRemovedFromDocument"].forEach((function(t) {
                    e.addEventListener(t, o)
                }
                ))
            }
            Object.defineProperty(e, "open", {
                set: this.setOpen.bind(this),
                get: e.hasAttribute.bind(e, "open")
            }),
            this.backdrop_ = document.createElement("div"),
            this.backdrop_.className = "backdrop",
            this.backdrop_.addEventListener("mouseup", this.backdropMouseEvent_.bind(this)),
            this.backdrop_.addEventListener("mousedown", this.backdropMouseEvent_.bind(this)),
            this.backdrop_.addEventListener("click", this.backdropMouseEvent_.bind(this))
        }
        m && "object" != typeof m || ((m = function(e, t) {
            t = t || {};
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, !!t.bubbles, !!t.cancelable, t.detail || null),
            n
        }
        ).prototype = window.Event.prototype),
        L.prototype = {
            get dialog() {
                return this.dialog_
            },
            maybeHideModal: function() {
                this.dialog_.hasAttribute("open") && g(this.dialog_) || this.downgradeModal()
            },
            downgradeModal: function() {
                this.openAsModal_ && (this.openAsModal_ = !1,
                this.dialog_.style.zIndex = "",
                this.replacedStyleTop_ && (this.dialog_.style.top = "",
                this.replacedStyleTop_ = !1),
                this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_),
                k.dm.removeDialog(this))
            },
            setOpen: function(e) {
                e ? this.dialog_.hasAttribute("open") || this.dialog_.setAttribute("open", "") : (this.dialog_.removeAttribute("open"),
                this.maybeHideModal())
            },
            backdropMouseEvent_: function(e) {
                if (this.dialog_.hasAttribute("tabindex"))
                    this.dialog_.focus();
                else {
                    var t = document.createElement("div");
                    this.dialog_.insertBefore(t, this.dialog_.firstChild),
                    t.tabIndex = -1,
                    t.focus(),
                    this.dialog_.removeChild(t)
                }
                var n = document.createEvent("MouseEvents");
                n.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget),
                this.dialog_.dispatchEvent(n),
                e.stopPropagation()
            },
            focus_: function() {
                var e = this.dialog_.querySelector("[autofocus]:not([disabled])");
                !e && this.dialog_.tabIndex >= 0 && (e = this.dialog_),
                e || (e = y(this.dialog_)),
                M(document.activeElement),
                e && e.focus()
            },
            updateZIndex: function(e, t) {
                if (e < t)
                    throw new Error("dialogZ should never be < backdropZ");
                this.dialog_.style.zIndex = e,
                this.backdrop_.style.zIndex = t
            },
            show: function() {
                this.dialog_.open || (this.setOpen(!0),
                this.focus_())
            },
            showModal: function() {
                if (this.dialog_.hasAttribute("open"))
                    throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
                if (!g(this.dialog_))
                    throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
                if (!k.dm.pushDialog(this))
                    throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
                (function(e) {
                    for (; e && e !== document.body; ) {
                        var t = window.getComputedStyle(e)
                          , n = function(e, n) {
                            return !(void 0 === t[e] || t[e] === n)
                        };
                        if (t.opacity < 1 || n("zIndex", "auto") || n("transform", "none") || n("mixBlendMode", "normal") || n("filter", "none") || n("perspective", "none") || "isolate" === t.isolation || "fixed" === t.position || "touch" === t.webkitOverflowScrolling)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }
                )(this.dialog_.parentElement) && console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),
                this.setOpen(!0),
                this.openAsModal_ = !0,
                k.needsCentering(this.dialog_) ? (k.reposition(this.dialog_),
                this.replacedStyleTop_ = !0) : this.replacedStyleTop_ = !1,
                this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling),
                this.focus_()
            },
            close: function(e) {
                if (!this.dialog_.hasAttribute("open"))
                    throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
                this.setOpen(!1),
                void 0 !== e && (this.dialog_.returnValue = e);
                var t = new m("close",{
                    bubbles: !1,
                    cancelable: !1
                });
                f(this.dialog_, t)
            }
        };
        var k = {
            reposition: function(e) {
                var t = document.body.scrollTop || document.documentElement.scrollTop
                  , n = t + (window.innerHeight - e.offsetHeight) / 2;
                e.style.top = Math.max(t, n) + "px"
            },
            isInlinePositionSetByStylesheet: function(e) {
                for (var t = 0; t < document.styleSheets.length; ++t) {
                    var n = document.styleSheets[t]
                      , r = null;
                    try {
                        r = n.cssRules
                    } catch (e) {}
                    if (r)
                        for (var o = 0; o < r.length; ++o) {
                            var i = r[o]
                              , a = null;
                            try {
                                a = document.querySelectorAll(i.selectorText)
                            } catch (e) {}
                            if (a && p(a, e)) {
                                var s = i.style.getPropertyValue("top")
                                  , u = i.style.getPropertyValue("bottom");
                                if (s && "auto" !== s || u && "auto" !== u)
                                    return !0
                            }
                        }
                }
                return !1
            },
            needsCentering: function(e) {
                return "absolute" === window.getComputedStyle(e).position && (!("auto" !== e.style.top && "" !== e.style.top || "auto" !== e.style.bottom && "" !== e.style.bottom) && !k.isInlinePositionSetByStylesheet(e))
            },
            forceRegisterDialog: function(e) {
                if ((window.HTMLDialogElement || e.showModal) && console.warn("This browser already supports <dialog>, the polyfill may not work correctly", e),
                "dialog" !== e.localName)
                    throw new Error("Failed to register dialog: The element is not a dialog.");
                new L(e)
            },
            registerDialog: function(e) {
                e.showModal || k.forceRegisterDialog(e)
            },
            DialogManager: function() {
                this.pendingDialogStack = [];
                var e = this.checkDOM_.bind(this);
                this.overlay = document.createElement("div"),
                this.overlay.className = "_dialog_overlay",
                this.overlay.addEventListener("click", function(t) {
                    this.forwardTab_ = void 0,
                    t.stopPropagation(),
                    e([])
                }
                .bind(this)),
                this.handleKey_ = this.handleKey_.bind(this),
                this.handleFocus_ = this.handleFocus_.bind(this),
                this.zIndexLow_ = 1e5,
                this.zIndexHigh_ = 100150,
                this.forwardTab_ = void 0,
                "MutationObserver"in window && (this.mo_ = new MutationObserver((function(t) {
                    var n = [];
                    t.forEach((function(e) {
                        for (var t, r = 0; t = e.removedNodes[r]; ++r)
                            t instanceof Element && ("dialog" === t.localName && n.push(t),
                            n = n.concat(t.querySelectorAll("dialog")))
                    }
                    )),
                    n.length && e(n)
                }
                )))
            }
        };
        if (k.DialogManager.prototype.blockDocument = function() {
            document.documentElement.addEventListener("focus", this.handleFocus_, !0),
            document.addEventListener("keydown", this.handleKey_),
            this.mo_ && this.mo_.observe(document, {
                childList: !0,
                subtree: !0
            })
        }
        ,
        k.DialogManager.prototype.unblockDocument = function() {
            document.documentElement.removeEventListener("focus", this.handleFocus_, !0),
            document.removeEventListener("keydown", this.handleKey_),
            this.mo_ && this.mo_.disconnect()
        }
        ,
        k.DialogManager.prototype.updateStacking = function() {
            for (var e, t = this.zIndexHigh_, n = 0; e = this.pendingDialogStack[n]; ++n)
                e.updateZIndex(--t, --t),
                0 === n && (this.overlay.style.zIndex = --t);
            var r = this.pendingDialogStack[0];
            r ? (r.dialog.parentNode || document.body).appendChild(this.overlay) : this.overlay.parentNode && this.overlay.parentNode.removeChild(this.overlay)
        }
        ,
        k.DialogManager.prototype.containedByTopDialog_ = function(e) {
            for (; e = h(e); ) {
                for (var t, n = 0; t = this.pendingDialogStack[n]; ++n)
                    if (t.dialog === e)
                        return 0 === n;
                e = e.parentElement
            }
            return !1
        }
        ,
        k.DialogManager.prototype.handleFocus_ = function(e) {
            var t = e.composedPath ? e.composedPath()[0] : e.target;
            if (!this.containedByTopDialog_(t) && document.activeElement !== document.documentElement && (e.preventDefault(),
            e.stopPropagation(),
            M(t),
            void 0 !== this.forwardTab_)) {
                var n = this.pendingDialogStack[0];
                return n.dialog.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING && (this.forwardTab_ ? n.focus_() : t !== document.documentElement && document.documentElement.focus()),
                !1
            }
        }
        ,
        k.DialogManager.prototype.handleKey_ = function(e) {
            if (this.forwardTab_ = void 0,
            27 === e.keyCode) {
                e.preventDefault(),
                e.stopPropagation();
                var t = new m("cancel",{
                    bubbles: !1,
                    cancelable: !0
                })
                  , n = this.pendingDialogStack[0];
                n && f(n.dialog, t) && n.dialog.close()
            } else
                9 === e.keyCode && (this.forwardTab_ = !e.shiftKey)
        }
        ,
        k.DialogManager.prototype.checkDOM_ = function(e) {
            this.pendingDialogStack.slice().forEach((function(t) {
                -1 !== e.indexOf(t.dialog) ? t.downgradeModal() : t.maybeHideModal()
            }
            ))
        }
        ,
        k.DialogManager.prototype.pushDialog = function(e) {
            var t = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
            return !(this.pendingDialogStack.length >= t) && (1 === this.pendingDialogStack.unshift(e) && this.blockDocument(),
            this.updateStacking(),
            !0)
        }
        ,
        k.DialogManager.prototype.removeDialog = function(e) {
            var t = this.pendingDialogStack.indexOf(e);
            -1 !== t && (this.pendingDialogStack.splice(t, 1),
            0 === this.pendingDialogStack.length && this.unblockDocument(),
            this.updateStacking())
        }
        ,
        k.dm = new k.DialogManager,
        k.formSubmitter = null,
        k.imagemapUseValue = null,
        void 0 === window.HTMLDialogElement) {
            var w = document.createElement("form");
            if (w.setAttribute("method", "dialog"),
            "dialog" !== w.method) {
                var S = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "method");
                if (S) {
                    var D = S.get;
                    S.get = function() {
                        return Y(this) ? "dialog" : D.call(this)
                    }
                    ;
                    var H = S.set;
                    S.set = function(e) {
                        return "string" == typeof e && "dialog" === e.toLowerCase() ? this.setAttribute("method", e) : H.call(this, e)
                    }
                    ,
                    Object.defineProperty(HTMLFormElement.prototype, "method", S)
                }
            }
            document.addEventListener("click", (function(e) {
                if (k.formSubmitter = null,
                k.imagemapUseValue = null,
                !e.defaultPrevented) {
                    var t = e.target;
                    if ("composedPath"in e)
                        t = e.composedPath().shift() || t;
                    if (t && Y(t.form)) {
                        if (!("submit" === t.type && ["button", "input"].indexOf(t.localName) > -1)) {
                            if ("input" !== t.localName || "image" !== t.type)
                                return;
                            k.imagemapUseValue = e.offsetX + "," + e.offsetY
                        }
                        h(t) && (k.formSubmitter = t)
                    }
                }
            }
            ), !1),
            document.addEventListener("submit", (function(e) {
                var t = e.target;
                if (!h(t)) {
                    var n = v(e);
                    "dialog" === (n && n.getAttribute("formmethod") || t.getAttribute("method")) && e.preventDefault()
                }
            }
            ));
            var T = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                if (!Y(this))
                    return T.call(this);
                var e = h(this);
                e && e.close()
            }
        }
        const j = k;
        const E = function(e, t, n) {
            try {
                var r = document.getElementById(e)
                  , o = document.getElementById(t)
                  , i = document.getElementById(n);
                return !!(r && o && i) && ("function" != typeof HTMLDialogElement && j.registerDialog(r),
                o.addEventListener("click", (function() {
                    return r.showModal()
                }
                )),
                i.addEventListener("click", (function() {
                    return r.close()
                }
                )),
                !0)
            } catch (e) {
                return console.error("Error occurred:", e),
                !1
            }
        };
        var x = document.getElementById("dark-mode")
          , A = document.documentElement
          , I = function() {
            x.checked = !0,
            localStorage.setItem("theme", "dark"),
            A.setAttribute("data-theme", "night")
        }
          , z = function() {
            x.checked = !1,
            localStorage.setItem("theme", "light"),
            A.setAttribute("data-theme", "winter")
        }
          , O = function() {
            x.checked ? I() : z()
        }
          , $ = document.getElementById("show-date")
          , F = document.getElementById("show-seconds")
          , C = document.getElementById("twenty-four")
          , N = "show-date-key"
          , B = "show-seconds-key"
          , P = "twenty-four-key"
          , R = document.documentElement.lang
          , q = function(e, t) {
            null !== localStorage.getItem(t) && e && (e.checked = function(e) {
                return "true" === localStorage.getItem(e)
            }(t))
        }
          , J = function() {
            document.getElementById("date").classList.toggle("hidden", !$.checked),
            document.getElementById("analog-clock-date").classList.toggle("hidden", !$.checked);
            var e = document.getElementById("clock")
              , t = e.getAttribute("data-format-original")
              , n = t.includes(":") ? ":" : "."
              , r = t;
            F.checked ? (r.includes("".concat(n, "ss")) || (r = r.replace(new RegExp("\\".concat(n, "mm")), "$&".concat(n, "ss"))),
            document.getElementById("analog-clock-second").classList.remove("hidden")) : (r = r.replace("".concat(n, "ss"), ""),
            document.getElementById("analog-clock-second").classList.add("hidden")),
            "en" === R && C && (C.checked ? r = r.replace(/h(?=:|\.)/, "H").replace(/(\s)?A/, "") : (r = r.replace(/H(?=:|\.)/, "h")).includes(" A") || (r = r.replace(/(h(?=:|\.))/, "$1 A"))),
            e.setAttribute("data-format", r),
            localStorage.setItem(N, $.checked),
            localStorage.setItem(B, F.checked),
            C && localStorage.setItem(P, C.checked)
        }
          , V = function(e, t) {
            e && e.addEventListener("change", t)
        };
        const U = function() {
            x.addEventListener("change", O),
            "theme"in localStorage && "light" === localStorage.getItem("theme") ? z() : I(),
            E("settings-modal", "settings-open", "settings-close"),
            q($, N),
            q(F, B),
            q(C, P),
            J(),
            V($, J),
            V(F, J),
            "en" === R && C && V(C, J)
        };
        var Z = n(4927)
          , K = n.n(Z)
          , X = (new (n(7576))(".clipboard"),
        document.getElementById("embed-open"))
          , W = document.getElementById("embed-iframe")
          , G = document.getElementById("embed-code")
          , Q = document.getElementById("embed-height")
          , ee = document.getElementById("embed-width")
          , te = document.getElementById("embed-timezone")
          , ne = document.getElementById("embed-year")
          , re = document.getElementById("embed-month")
          , oe = document.getElementById("embed-day")
          , ie = document.getElementById("embed-hour")
          , ae = document.getElementById("embed-minute")
          , se = document.getElementById("embed-second")
          , ue = function() {
            var e = document.getElementById("online-alarm-kur-iframe")
              , t = e.getAttribute("src").split("#")[0]
              , n = encodeURIComponent(te.value);
            ne && (n = ne.value + "-" + K().addZero(re.value) + "-" + K().addZero(oe.value) + "T" + K().addZero(ie.value) + ":" + K().addZero(ae.value) + ":" + K().addZero(se.value) + "@" + encodeURIComponent(te.value)),
            e.setAttribute("src", t + "#" + n)
        }
          , de = function() {
            G.value = document.getElementById("online-alarm-kur-iframe").outerHTML
        };
        E("embed-modal", "embed-open", "embed-close") && X.addEventListener("click", (function() {
            var e, t;
            (e = document.createElement("iframe")).setAttribute("id", "online-alarm-kur-iframe"),
            e.setAttribute("src", X.getAttribute("data-url")),
            e.setAttribute("width", ee.value),
            e.setAttribute("height", Q.value),
            e.style.cssText = "display: block; margin: 0 auto; border: 0;",
            W.innerHTML = "",
            W.appendChild(e),
            t = document.getElementById("online-alarm-kur-iframe"),
            ee.oninput = function() {
                t.setAttribute("width", ee.value),
                de()
            }
            ,
            Q.oninput = function() {
                t.setAttribute("height", Q.value),
                de()
            }
            ,
            te.oninput = function() {
                ue(),
                de()
            }
            ,
            ne && [ne, re, oe, ie, ae, se].forEach((function(e) {
                e.oninput = function() {
                    ue(),
                    de()
                }
            }
            )),
            function() {
                if (0 === te.options.length) {
                    var e = new XMLHttpRequest;
                    e.overrideMimeType("application/json"),
                    e.open("GET", "https://embed-assets.onlinealarmkur.com/timezones.json", !0),
                    e.onload = function() {
                        for (var t = JSON.parse(e.responseText), n = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/London", r = 0; r < t.length; r++) {
                            var o = t[r]
                              , i = document.createElement("option");
                            i.value = o.value,
                            i.appendChild(document.createTextNode(o.name)),
                            te.appendChild(i)
                        }
                        te.value = n,
                        ue(),
                        de()
                    }
                    ,
                    e.send(null)
                }
            }()
        }
        ));
        n(425);
        var le = n(7381)
          , _e = document.documentElement.lang;
        t().extend(le),
        t().locale(_e.replace("no", "nb"));
        var ce = document.getElementById("clock")
          , me = document.getElementById("date")
          , fe = document.getElementById("analog-clock-hour")
          , he = document.getElementById("analog-clock-minute")
          , Me = document.getElementById("analog-clock-second")
          , pe = document.getElementById("analog-clock-date")
          , Ye = me.getAttribute("data-format")
          , ye = document.title
          , ge = function() {
            var e = ce.getAttribute("data-format")
              , n = t()();
            ce.innerText = n.format(e),
            me.innerText = n.format(Ye),
            function(e) {
                var t = e.hour()
                  , n = e.minute()
                  , r = e.second();
                fe.style.transform = "translateX(-50%) rotate(" + (30 * t + .5 * n + .5 * r / 60) + "deg)",
                he.style.transform = "translateX(-50%) rotate(" + (6 * n + .1 * r) + "deg)",
                Me.style.transform = "translateX(-50%) rotate(" + 6 * r + "deg)",
                pe.innerText = e.date()
            }(n),
            document.hasFocus() ? document.title = ye : document.title = n.format(e) + " - " + ye
        };
        ge(),
        setInterval((function() {
            ge()
        }
        ), 1e3),
        U(),
        _(),
        c(),
        d()
    }
    )()
}
)();
