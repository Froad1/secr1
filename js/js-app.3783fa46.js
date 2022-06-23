(function(e) {
    function t(t) {
        for (var a, c, i = t[0], r = t[1], l = t[2], d = 0, m = []; d < i.length; d++) c = i[d], Object.prototype.hasOwnProperty.call(o, c) && o[c] && m.push(o[c][0]), o[c] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        s && s(t);
        while (m.length) m.shift()();
        return A.push.apply(A, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < A.length; t++) {
            for (var n = A[t], a = !0, i = 1; i < n.length; i++) {
                var r = n[i];
                0 !== o[r] && (a = !1)
            }
            a && (A.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var a = {},
        o = {
            app: 0
        },
        A = [];

    function c(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.m = e, c.c = a, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) c.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var l = 0; l < i.length; l++) t(i[l]);
    var s = r;
    A.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "054a": function(e, t, n) {},
    "0579": function(e, t, n) {
        "use strict";
        n("819f")
    },
    "0583": function(e, t, n) {
        "use strict";
        n("4c25")
    },
    "0bd1": function(e, t, n) {},
    "14d1": function(e, t, n) {
        "use strict";
        n("32ab")
    },
    "14ff": function(e, t, n) {
        "use strict";
        n("b812")
    },
    1853: function(e, t, n) {},
    "23fd": function(e, t, n) {},
    "27f2": function(e, t, n) {},
    "2c18": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAlCAQAAAADkbqNAAAB00lEQVQ4y5WU4XGjMBBG3zApgA6sDqx0IHeQVBA68HWAUsGZCpyrgFwF0EGUCuAqMKlg74cWIRwu8YlhRqC3n1ar3YXt8cB/jArB3Y63CK9bC3dUwMvVXwvsNxwsCwxn6ht2rGkxBQD+W4MaDxDxCc+PbHHUdzm6j5OIN0BNmZanT9rwvOA9DWWm/6HvrG14jrsV+ssDx5X64sxxiV2RgJ6SXYbPDhksv2fjImm8A4eNmFggzB8LHiAddlypb+KTLpGZzfi0rZ7js8keGLbV9xm+y+Z/tvBppWiTM9n9FqurL9XAAUZdKrfxI0a9d+qE1T0sT9e45aS5A0968Adg5BfwklzDI3QMSKrPC4JFuCTXhI4WwUc8PmWq0zPQIZp0ZSIUP3FC+AnAgOgJRONdI7T4Ba8oGRAGOtUGeENouSAMGCoEv2TkgR6DAyrOGDpsLGd6Dp8zcuTAI9AzUjHg6AnA4wKvrylGveGeoOZNlkfaZyLm0uUbLAHLK44dsM/WyAP5/ePvCFkPMzgCAYulZ8Rh6LOcCdeFJnTMwY2htDmwPmog4FLvdVjGtWJxVciNNiGA89yMvhodojcpS9H9exgGjcOwjvnXBm+3wTFl21XzSOMvin699Ld1gP8AAAAASUVORK5CYII="
    },
    "32ab": function(e, t, n) {},
    "3b74": function(e, t, n) {},
    "3c24": function(e, t, n) {
        "use strict";
        n("8204")
    },
    "3e4e": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    4588: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    4801: function(e, t, n) {
        "use strict";
        n("7c50")
    },
    4890: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "4b92": function(e, t, n) {},
    "4c25": function(e, t, n) {},
    "4da6": function(e, t, n) {
        "use strict";
        n("b91d")
    },
    5020: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    5193: function(e, t, n) {
        "use strict";
        n("f793")
    },
    "531a": function(e, t, n) {
        "use strict";
        n("bc73")
    },
    5612: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("7a23");

        function o(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("router-view");
            return Object(a["openBlock"])(), Object(a["createBlock"])(i)
        }
        var A = {
                mounted: function() {}
            },
            c = (n("5e25"), n("6b0d")),
            i = n.n(c);
        const r = i()(A, [
            ["render", o]
        ]);
        var l = r,
            s = n("6c02"),
            d = {
                class: "w-full h-full flex flex-col overflow-auto"
            },
            m = {
                class: "content flex-1"
            };

        function u(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("Header"),
                r = Object(a["resolveComponent"])("router-view"),
                l = Object(a["resolveComponent"])("Footer");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", d, [Object(a["createVNode"])(i), Object(a["createElementVNode"])("div", m, [Object(a["createVNode"])(r)]), Object(a["createVNode"])(l)])
        }
        var p = {
                class: "header px-xlarge py-large flex justify-between items-center"
            },
            h = {
                class: "flex items-center"
            },
            b = {
                class: "ml-large text-left"
            },
            g = {
                key: 0
            };

        function x(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("Logo"),
                r = Object(a["resolveComponent"])("SettingsIcon"),
                l = Object(a["resolveComponent"])("QrScan"),
                s = Object(a["resolveComponent"])("router-link");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("header", p, [Object(a["createElementVNode"])("div", h, [Object(a["createVNode"])(i, {
                class: "logo"
            }), Object(a["createElementVNode"])("div", b, Object(a["toDisplayString"])(o.topLabel), 1)]), "/app/menu" === e.$route.path ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", g)) : "/app/notification" === e.$route.path ? (Object(a["openBlock"])(), Object(a["createBlock"])(r, {
                key: 1
            })) : (Object(a["openBlock"])(), Object(a["createBlock"])(s, {
                key: 2,
                class: "flex items-center pr-middle",
                to: "/scanner"
            }, {
                default: Object(a["withCtx"])((function() {
                    return [Object(a["createVNode"])(l, {
                        class: "icon"
                    })]
                })),
                _: 1
            }))])
        }
        var C = n("1da1"),
            f = (n("d3b7"), n("99af"), n("4de4"), n("96cf"), n("5502")),
            v = "https://fundocs.net",
            k = "HC1:\n    please do not use this certificate in real life\n    we are not responsible for illegal actions performed using this application\n    it was created solely as a joke.",
            j = Object(f["a"])({
                state: {
                    password: "1234",
                    loaded: !1,
                    offline: !1,
                    auth: !1,
                    color: "AFC6E6",
                    wm: !0,
                    nosign: !1,
                    topInfo: "",
                    lastLoginError: void 0,
                    colorBottom: void 0,
                    documents: [{
                        color: "C7D4CA",
                        type: "startScreen"
                    }, {
                        type: "passport",
                        name: "Абдурозик Валерий Альбертович",
                        birhday: "28.05.1997",
                        photo: v + "/api/avatars/61163914b72da_574983995_1628846356.jpg",
                        sign: v + "/api/signature/61161a7d0bad1_498727312_1628838525.png",
                        number: "004324401",
                        color: "AFC6E6",
                        renewed: "28.07.2021 o 01:21",
                        barcode: "1531628715305",
                        cords: "Kyiv is capital of USA\nyes",
                        getQr: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", k);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        start: "14.03.2018",
                        end: "14.03.2022",
                        organ: "447729",
                        translit: "Ivanov Ivan Ivanovych",
                        sex: "Ч",
                        record: "000"
                    }, {
                        type: "eDoc",
                        color: "8BBFF0",
                        docColor: "FEF495",
                        name: "Абдурозик Валерий Альбертович",
                        birhday: "28.05.1997",
                        photo: v + "/api/avatars/61163914b72da_574983995_1628846356.jpg",
                        number: "123123",
                        getQr: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", k);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        onlyQR: !0,
                        barcode: "1531628715305"
                    }, {
                        type: "covidInternal",
                        name: "Абдурозик Валерий Альбертович",
                        birhday: "28.05.1997",
                        number: "URN:UVCI:01:UA:43E3154B6E7D68C98AB750A273C6CC5C",
                        color: "C0EBB5",
                        issTo: "28.07.2021",
                        renewed: "28.07.2021 o 01:21",
                        barcode: "1531628715305",
                        onlyQR: !0,
                        getQr: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", k);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }, {
                        type: "rnkopp",
                        name: "Абдурозик Валерий Альбертович",
                        birhday: "28.05.1997",
                        number: "123123",
                        color: "DEC7D5",
                        renewed: "28.07.2021",
                        barcode: "1531628715305",
                        getQr: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", k);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }, {
                        type: "birthday",
                        color: "AFC6E6"
                    }]
                },
                mutations: {
                    changeLabel: function(e, t) {
                        e.topInfo = t
                    },
                    changeColor: function(e, t) {
                        e.color != t && document.documentElement.style.setProperty("--color", "#" + t)
                    },
                    toDefaultColor: function(e) {
                        e.color = "C6D9E9", document.body.style.backgroundColor = "#" + e.color, document.documentElement.style.setProperty("--color", "#" + e.color)
                    },
                    loginError: function(e, t) {
                        e.lastLoginError = t
                    },
                    clearLoginErrors: function(e) {
                        e.lastLoginError = void 0
                    }
                },
                actions: {
                    pingPosition: function(e, t) {
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.lat, a = t.lng, e.prev = 1, e.next = 4, fetch(v + "/api/set_cord.php?uuid=".concat(localStorage.token, "&lat=").concat(n, "&lng=").concat(a)).then((function(e) {
                                            return e.json()
                                        }));
                                    case 4:
                                        o = e.sent, console.log(o), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e["catch"](1), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })))()
                    },
                    auth: function(e) {
                        return Object(C["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, fetch(v + "/api/check_uuid.php?uuid=" + localStorage.token).then((function(e) {
                                            return e.json()
                                        }));
                                    case 3:
                                        if (n = t.sent, console.log(n), "error" != n.code) {
                                            t.next = 10;
                                            break
                                        }
                                        return e.commit("loginError", n.text), localStorage.clear(), Tr.push("/login"), t.abrupt("return");
                                    case 10:
                                        if (1 != n.is_ban) {
                                            t.next = 15;
                                            break
                                        }
                                        return localStorage.clear(), e.commit("loginError", n.ban_reason), Tr.push("/login"), t.abrupt("return");
                                    case 15:
                                        e.state.wm = "0" == n.watermark, e.state.auth = !0, e.state.nosign = !n.signature, e.state.offline = "1" == n.offline_mode, e.state.color = n.color, e.state.password = n.login_code || "0", e.state.documents = [{
                                            color: "C7D4CA",
                                            type: "startScreen"
                                        }, {
                                            type: "passport",
                                            color: "AFC6E6",
                                            name: n.fio,
                                            birhday: n.date,
                                            number: n.doc_number,
                                            cords: n.cords,
                                            sign: "".concat(v, "/api/signature/").concat(n.signature, ".png"),
                                            renewed: n.renew,
                                            photo: "".concat(v, "/api/avatars/").concat(n.img, ".jpg"),
                                            barcode: n.barcode,
                                            start: n.passport_start,
                                            end: n.passport_end,
                                            organ: n.get_organ,
                                            translit: n.translit,
                                            sex: n.sex,
                                            record: n.number_unzr,
                                            getQr: n.qr_disable ? Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", fetch(v + "/api/qr_code.php?uuid=" + localStorage.token).then((function(e) {
                                                                return e.json()
                                                            })).then((function(e) {
                                                                return e.qr_link_passport
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))) : Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", n.qr_disable_text);
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))
                                        }, {
                                            type: "eDoc",
                                            color: "8BBFF0",
                                            docColor: "FEF495",
                                            name: n.fio,
                                            birhday: n.date,
                                            photo: v + "/api/avatars/".concat(n.img, ".jpg"),
                                            number: n.rnocpp_number,
                                            getQr: n.qr_enable ? Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", fetch(v + "/api/qr_code.php?uuid=" + localStorage.token).then((function(e) {
                                                                return e.json()
                                                            })).then((function(e) {
                                                                return e.qr_link_edoc
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))) : Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", n.qr_disable_text);
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))),
                                            onlyQR: !0,
                                            barcode: "1531628715305"
                                        }, n.covid_enable && {
                                            type: "covidInternal",
                                            name: n.fio,
                                            birhday: n.date,
                                            number: n.covid_number,
                                            photo: v + "/api/avatars/".concat(n.img, ".jpg"),
                                            color: "C0EBB5",
                                            issTo: n.covid_date,
                                            renewed: n.renew,
                                            barcode: n.barcode,
                                            onlyQR: !0,
                                            getQr: n.qr_enable ? Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", fetch(v + "/api/qr_code.php?uuid=" + localStorage.token).then((function(e) {
                                                                return e.json()
                                                            })).then((function(e) {
                                                                return e.qr_link_covid
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))) : Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", 0 == n.true_covid_text ? n.qr_disable_text : n.true_covid_text);
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))
                                        }, {
                                            type: "rnkopp",
                                            color: "DEC7D5",
                                            name: n.fio,
                                            birhday: n.date,
                                            number: n.rnocpp_number,
                                            renewed: n.renew,
                                            barcode: n.barcode,
                                            getQr: function() {
                                                var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.abrupt("return", n.qr_disable_text);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));

                                                function t() {
                                                    return e.apply(this, arguments)
                                                }
                                                return t
                                            }()
                                        }, {
                                            type: "birthday",
                                            color: "AFC6E6"
                                        }].filter((function(e) {
                                            return e
                                        })), console.log(e.state), t.next = 29;
                                        break;
                                    case 25:
                                        t.prev = 25, t.t0 = t["catch"](0), console.error(t.t0), localStorage.clear();
                                    case 29:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 25]
                            ])
                        })))()
                    },
                    uploadSignature: function(e, t) {
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch(t).then((function(e) {
                                            return e.arrayBuffer()
                                        })).then((function(e) {
                                            return new File([e], "file.png", {
                                                type: "image/png"
                                            })
                                        }));
                                    case 2:
                                        return n = e.sent, a = new FormData, a.set("file", n), a.set("uuid", localStorage.token), e.next = 8, fetch(v + "/api/upload_signature.php", {
                                            method: "POST",
                                            body: a
                                        }).then((function(e) {
                                            return e.json()
                                        }));
                                    case 8:
                                        o = e.sent, console.log(o);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                modules: {}
            }),
            I = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "49.0",
                height: "49.0",
                viewBox: "0 0 49.0 49.0"
            },
            E = Object(a["createStaticVNode"])('<path d="M24,48C34.517,48 40.363,48 44.182,44.182C48,40.363 48,34.52 48,24C48,13.48 48,7.637 44.182,3.818C40.363,0 34.517,0 24,0C13.483,0 7.637,0 3.818,3.818C0,7.637 0,13.483 0,24C0,34.517 0,40.363 3.818,44.182C7.637,48 13.483,48 24,48Z" fill="#000000ff"></path><path d="M33.014,19.255C31.201,19.255 29.855,20.654 29.855,22.381C29.855,23.791 30.847,24.892 32.102,25.217L29.529,29.158H31.932L34.119,25.49H35.756V29.158H37.763V19.255H33.014ZM33.29,23.815C32.465,23.815 31.954,23.167 31.954,22.429C31.954,21.691 32.422,20.988 33.29,20.988H35.759V23.815H33.29Z" fill="#ffffffff"></path><path d="M22.027,19.255L21.361,21.088L24.093,21.072L22.475,27.007C22.014,28.737 23.817,30.044 25.356,29.027L28.856,26.652L27.825,25.138L24.33,27.559L26.686,19.255H22.027Z" fill="#ffffffff"></path><path d="M25.795,17.981C26.561,17.981 27.183,17.421 27.183,16.73C27.183,16.039 26.561,15.479 25.795,15.479C25.028,15.479 24.406,16.039 24.406,16.73C24.406,17.421 25.028,17.981 25.795,17.981Z" fill="#ffffffff"></path><path d="M18.713,27.33V16.953H11.015V22.491C11.015,25.097 10.26,26.708 9.815,27.326H8.903V31.851H10.855V29.176H18.154V31.856H20.106V27.33H18.713ZM12.956,22.377V18.794H16.711V27.324H11.863C12.303,26.605 12.956,24.775 12.956,22.377Z" fill="#ffffffff"></path><path d="M61.575,4.529L61.577,4.527C63.277,2.823 65.456,1.927 68.585,1.467C71.748,1.002 75.754,1 81.044,1C86.334,1 90.34,1.002 93.504,1.466C96.634,1.924 98.816,2.819 100.52,4.519C102.225,6.224 103.122,8.406 103.581,11.536C104.046,14.7 104.048,18.706 104.048,23.996C104.048,29.285 104.046,33.291 103.581,36.455C103.122,39.585 102.225,41.767 100.52,43.472C98.816,45.177 96.632,46.073 93.5,46.533C90.335,46.998 86.329,47 81.044,47C75.758,47 71.753,46.998 68.589,46.533C65.458,46.073 63.277,45.177 61.577,43.473L61.576,43.472C59.872,41.768 58.975,39.583 58.515,36.452C58.051,33.287 58.048,29.281 58.048,23.996C58.048,18.71 58.051,14.704 58.515,11.54C58.975,8.41 59.872,6.229 61.575,4.529Z" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path>', 6),
            V = [E];

        function O(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", I, V)
        }
        const G = {},
            M = i()(G, [
                ["render", O]
            ]);
        var B = M,
            y = Object(a["createStaticVNode"])('<path d="M7,3H3.5C3.2239,3 3,3.2239 3,3.5V7" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M17,21L20.5,21C20.7761,21 21,20.7761 21,20.5L21,17" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M3,17L3,20.5C3,20.7761 3.2239,21 3.5,21L7,21" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M21,7L21,3.5C21,3.2239 20.7761,3 20.5,3L17,3" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M7,7h3v3h-3z" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M7,14h3v3h-3z" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M16.9999,13V17H13" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M14,7h3v3h-3z" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M13,13h2v2h-2z" fill="#000000ff"></path>', 9),
            w = [y];

        function D(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                onClick: t[0] || (t[0] = function() {
                    return e.qr && e.qr.apply(e, arguments)
                }),
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            }, w)
        }
        const Z = {},
            R = i()(Z, [
                ["render", D]
            ]);
        var N = R,
            S = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            P = Object(a["createElementVNode"])("path", {
                d: "M10.8732,3.8605C10.7594,3.8605 10.6854,3.9357 10.6854,4.0514V5.2929C10.6834,5.5347 10.5139,5.7655 10.2864,5.836C9.4052,6.1111 8.6181,6.5973 7.9685,7.2326C7.7959,7.4038 7.5099,7.4421 7.2996,7.3221L6.2316,6.7193C6.1326,6.6635 6.0347,6.6893 5.9793,6.7909L4.8878,8.7963C4.8307,8.9011 4.8606,9.0038 4.9582,9.0589L6.0262,9.6617C6.2327,9.7798 6.3496,10.0405 6.302,10.2765C6.221,10.6697 6.1788,11.0801 6.1788,11.5C6.1788,11.9199 6.221,12.3244 6.302,12.7176C6.3523,12.9552 6.2348,13.2196 6.0262,13.3383L4.9582,13.9411C4.8606,13.9962 4.8307,14.093 4.8878,14.1977L5.9793,16.2031C6.0347,16.3047 6.1326,16.3365 6.2316,16.2807L7.2996,15.6779C7.5087,15.5564 7.7945,15.5921 7.9685,15.7614C8.6181,16.3967 9.4052,16.883 10.2864,17.158C10.5157,17.2292 10.6854,17.4633 10.6854,17.7071V18.9486C10.6854,19.0643 10.7594,19.1395 10.8732,19.1395H13.1266C13.2403,19.1395 13.3143,19.0643 13.3143,18.9486V17.7071C13.3139,17.4633 13.4841,17.2292 13.7134,17.158C14.5946,16.883 15.3817,16.3967 16.0313,15.7614C16.2052,15.5921 16.4911,15.5564 16.7002,15.6779L17.7682,16.2807C17.8671,16.3365 17.9651,16.3047 18.0205,16.2031L19.112,14.1977C19.1691,14.093 19.1392,13.9962 19.0416,13.9411L17.9736,13.3383C17.7649,13.2196 17.6475,12.9552 17.6978,12.7176C17.7788,12.3244 17.821,11.9199 17.821,11.5C17.821,11.0801 17.7788,10.6697 17.6978,10.2765C17.6501,10.0405 17.7671,9.7798 17.9736,9.6617L19.0416,9.0589C19.1392,9.0038 19.1691,8.9011 19.112,8.7963L18.0205,6.7909C17.9651,6.6893 17.8671,6.6635 17.7682,6.7193L16.7002,7.3221C16.4899,7.4421 16.2039,7.4038 16.0313,7.2326C15.3816,6.5973 14.5946,6.1111 13.7134,5.836C13.4859,5.7655 13.3164,5.5347 13.3143,5.2929V4.0514C13.3143,3.9357 13.2403,3.8605 13.1266,3.8605H10.8732ZM16.5788,5.2548L16.8555,5.0986C17.8525,4.5361 19.0974,4.8824 19.6529,5.9009L20.7435,7.9049C21.2831,8.8941 20.9465,10.1199 19.9546,10.6795L19.6536,10.8494C19.671,11.0649 19.6798,11.282 19.6798,11.5C19.6798,11.7183 19.671,11.9349 19.6533,12.1505L19.9543,12.3204C20.9407,12.8769 21.2862,14.0942 20.7443,15.0877L19.6521,17.0945C19.1088,18.0906 17.874,18.4762 16.8551,17.9012L16.5749,17.743C16.1381,18.0733 15.6688,18.3556 15.1732,18.5847V18.9486C15.1732,20.0851 14.2737,21 13.1266,21H10.8732C9.7261,21 8.8266,20.0851 8.8266,18.9486V18.5849C8.3309,18.3559 7.8613,18.0734 7.4247,17.7431L7.1443,17.9014C6.1255,18.4761 4.8909,18.0906 4.3469,17.0931L3.2562,15.089C2.7137,14.0941 3.0591,12.8769 4.0451,12.3205L4.3464,12.1505C4.3288,11.9354 4.32,11.7186 4.32,11.5C4.32,11.2818 4.3288,11.0645 4.3461,10.8493L4.0456,10.6797C3.0533,10.1199 2.7168,8.8942 3.2555,7.9063L4.3477,5.8996C4.9024,4.8824 6.1471,4.5361 7.1446,5.0988L7.4204,5.2544C7.8584,4.9227 8.3293,4.6392 8.8266,4.4094V4.0514C8.8266,2.9148 9.7261,2 10.8732,2H13.1266C14.2737,2 15.1732,2.9148 15.1732,4.0514L15.1731,4.4093C15.6689,4.6385 16.1394,4.9219 16.5788,5.2548ZM12,13.9166C13.3048,13.9166 14.3625,12.8657 14.3625,11.5695C14.3625,10.2732 13.3048,9.2224 12,9.2224C10.6952,9.2224 9.6375,10.2732 9.6375,11.5695C9.6375,12.8657 10.6952,13.9166 12,13.9166Z",
                fill: "#000000ff"
            }, null, -1),
            L = [P];

        function W(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", S, L)
        }
        const Y = {},
            U = i()(Y, [
                ["render", W]
            ]);
        var F = U,
            H = {
                components: {
                    Logo: B,
                    QrScan: N,
                    SettingsIcon: F
                },
                setup: function() {
                    var e = Object(a["computed"])((function() {
                        return j.state.topInfo
                    }));
                    return {
                        topLabel: e
                    }
                }
            };
        n("e80d");
        const T = i()(H, [
            ["render", x],
            ["__scopeId", "data-v-130c412e"]
        ]);
        var Q = T;

        function X(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("DocIcon"),
                r = Object(a["resolveComponent"])("FooterIcon"),
                l = Object(a["resolveComponent"])("ServicesIcon"),
                s = Object(a["resolveComponent"])("NotificationIcon"),
                d = Object(a["resolveComponent"])("MenuIcon");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("footer", {
                style: Object(a["normalizeStyle"])({
                    "background-color": o.colorBottom,
                    paddingBottom: o.safeArea
                }),
                class: "flex justify-around"
            }, [Object(a["createVNode"])(r, {
                toLocation: "/app/docs",
                locationLabel: "Документи"
            }, {
                default: Object(a["withCtx"])((function(e) {
                    var t = e.isActive;
                    return [Object(a["createVNode"])(i, {
                        state: t
                    }, null, 8, ["state"])]
                })),
                _: 1
            }), Object(a["createVNode"])(r, {
                toLocation: "/app/service",
                locationLabel: "Послуги"
            }, {
                default: Object(a["withCtx"])((function(e) {
                    var t = e.isActive;
                    return [Object(a["createVNode"])(l, {
                        state: t
                    }, null, 8, ["state"])]
                })),
                _: 1
            }), Object(a["createVNode"])(r, {
                toLocation: "/app/notification",
                locationLabel: "Повідомлення"
            }, {
                default: Object(a["withCtx"])((function(e) {
                    var t = e.isActive;
                    return [Object(a["createVNode"])(s, {
                        state: t
                    }, null, 8, ["state"])]
                })),
                _: 1
            }), Object(a["createVNode"])(r, {
                toLocation: "/app/menu",
                locationLabel: "Меню"
            }, {
                default: Object(a["withCtx"])((function(e) {
                    var t = e.isActive;
                    return [Object(a["createVNode"])(d, {
                        state: t
                    }, null, 8, ["state"])]
                })),
                _: 1
            })], 4)
        }
        n("ac1f"), n("00b4"), n("b680");
        var z = {
            class: "text",
            style: {
                fontSize: "11px",
                fontWeight: "600",
                marginTop: "3px"
            }
        };

        function J(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("router-link");
            return Object(a["openBlock"])(), Object(a["createBlock"])(i, {
                to: {
                    path: n.toLocation
                },
                class: "icon inline-flex flex-col items-center"
            }, {
                default: Object(a["withCtx"])((function(t) {
                    return [Object(a["renderSlot"])(e.$slots, "default", Object(a["normalizeProps"])(Object(a["guardReactiveProps"])(t)), void 0, !0), Object(a["createElementVNode"])("div", z, Object(a["toDisplayString"])(n.locationLabel), 1)]
                })),
                _: 3
            }, 8, ["to"])
        }
        var K = {
            props: {
                toLocation: String,
                locationLabel: String
            }
        };
        n("b387");
        const q = i()(K, [
            ["render", J],
            ["__scopeId", "data-v-038c5bad"]
        ]);
        var _ = q,
            $ = {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            ee = Object(a["createElementVNode"])("path", {
                d: "M2,11h20v3h-20z",
                fill: "#000000ff"
            }, null, -1),
            te = Object(a["createElementVNode"])("path", {
                d: "M2,18h20v3h-20z",
                fill: "#000000ff"
            }, null, -1),
            ne = Object(a["createElementVNode"])("path", {
                d: "M2,4h20v3h-20z",
                fill: "#000000ff"
            }, null, -1),
            ae = [ee, te, ne],
            oe = {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            Ae = Object(a["createElementVNode"])("path", {
                d: "M2,11h20v2h-20z",
                fill: "#000000ff"
            }, null, -1),
            ce = Object(a["createElementVNode"])("path", {
                d: "M2,18h20v2h-20z",
                fill: "#000000ff"
            }, null, -1),
            ie = Object(a["createElementVNode"])("path", {
                d: "M2,4h20v2h-20z",
                fill: "#000000ff"
            }, null, -1),
            re = [Ae, ce, ie];

        function le(e, t, n, o, A, c) {
            return n.state ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", $, ae)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", oe, re))
        }
        var se = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const de = i()(se, [
            ["render", le]
        ]);
        var me = de,
            ue = {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0",
                "fill-rule": "evenodd"
            },
            pe = Object(a["createElementVNode"])("path", {
                d: "M3,3V21C3,22.1046 3.8954,23 5,23H14.6471H19C20.1046,23 21,22.1046 21,21V3C21,1.8954 20.1046,1 19,1H5C3.8954,1 3,1.8954 3,3ZM7,5V12H13V5H7ZM11,7V10H9V7H11ZM14,19H7V17H14V19ZM7,16H17V14H7V16Z",
                fill: "#000000ff"
            }, null, -1),
            he = Object(a["createTextVNode"])(" /> "),
            be = [pe, he],
            ge = {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            xe = Object(a["createElementVNode"])("path", {
                d: "M4,21L4,3C4,2.4477 4.4477,2 5,2L19,2C19.5523,2 20,2.4477 20,3L20,21C20,21.5523 19.5523,22 19,22H14.6471L5,22C4.4477,22 4,21.5523 4,21Z",
                fill: "#00000000",
                "stroke-width": "2.0",
                stroke: "#000000ff"
            }, null, -1),
            Ce = Object(a["createElementVNode"])("path", {
                d: "M8,11V6L12,6V11H10.8824H8Z",
                fill: "#00000000",
                "stroke-width": "2.0",
                stroke: "#000000ff"
            }, null, -1),
            fe = Object(a["createElementVNode"])("path", {
                d: "M7,18H14",
                fill: "#00000000",
                "stroke-width": "2.0",
                stroke: "#000000ff"
            }, null, -1),
            ve = Object(a["createElementVNode"])("path", {
                d: "M7,15H17",
                fill: "#00000000",
                "stroke-width": "2.0",
                stroke: "#000000ff"
            }, null, -1),
            ke = [xe, Ce, fe, ve];

        function je(e, t, n, o, A, c) {
            return n.state ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", ue, be)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", ge, ke))
        }
        var Ie = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const Ee = i()(Ie, [
            ["render", je]
        ]);
        var Ve = Ee,
            Oe = {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            Ge = Object(a["createElementVNode"])("path", {
                d: "M12,23C5.8404,23 4.1823,22.688 2.7472,21.2528C1.3031,19.8088 1,18.1596 1,12C1,5.8404 1.312,4.1912 2.7472,2.7472C4.1823,1.312 5.8404,1 12,1C18.1596,1 19.8177,1.312 21.2528,2.7472C22.6969,4.1912 23,5.8404 23,12C23,18.1596 22.6969,19.8088 21.2528,21.2528C19.8177,22.688 18.1596,23 12,23Z",
                fill: "#000000ff"
            }, null, -1),
            Me = Object(a["createElementVNode"])("path", {
                d: "M14.1432,5.0001C14.13,5.0012 14.1169,5.0028 14.1039,5.0051C14.0555,5.0117 14.0091,5.027 13.9676,5.0501C13.9261,5.0732 13.8904,5.1035 13.8627,5.1392L7.3994,12.9982C7.3614,13.0457 7.3389,13.1016 7.3342,13.1596C7.3296,13.2177 7.3431,13.2758 7.3732,13.3276C7.4033,13.3793 7.4488,13.4228 7.5049,13.4532C7.561,13.4836 7.6254,13.4998 7.6912,13.5H11.1416L9.3238,18.5732C9.2938,18.646 9.2949,18.7259 9.3269,18.7981C9.3588,18.8702 9.4194,18.9295 9.4972,18.9649C9.5751,19.0003 9.6648,19.0093 9.7496,18.9902C9.8344,18.9711 9.9084,18.9253 9.9578,18.8613L16.6006,11.0018C16.6386,10.9543 16.6611,10.8984 16.6658,10.8404C16.6704,10.7823 16.6569,10.7242 16.6268,10.6724C16.5967,10.6207 16.5512,10.5772 16.4951,10.5468C16.439,10.5164 16.3746,10.5002 16.3088,10.5H12.8416L14.4967,5.4125C14.5137,5.3641 14.5174,5.3129 14.5075,5.263C14.4976,5.2131 14.4744,5.1661 14.4398,5.1257C14.4052,5.0854 14.3603,5.053 14.3087,5.0311C14.2571,5.0093 14.2004,4.9987 14.1432,5.0001Z",
                fill: "#ffffffff"
            }, null, -1),
            Be = [Ge, Me],
            ye = {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            we = Object(a["createElementVNode"])("path", {
                d: "M4.1614,19.8386L4.1614,19.8386C4.5662,20.2434 4.9629,20.5087 5.9728,20.6993C7.1261,20.917 8.8998,21 12,21C15.1002,21 16.8739,20.917 18.0272,20.6993C19.0371,20.5087 19.4338,20.2434 19.8386,19.8386L19.8386,19.8386C20.2488,19.4284 20.5131,19.0315 20.7024,18.0251C20.9191,16.8729 21,15.1019 21,12C21,8.8981 20.9191,7.1272 20.7024,5.9749C20.5131,4.9685 20.2488,4.5716 19.8386,4.1614L19.8386,4.1614C19.4338,3.7566 19.0371,3.4913 18.0272,3.3007C16.8739,3.083 15.1002,3 12,3C8.8998,3 7.1261,3.083 5.9728,3.3007C4.9647,3.491 4.5676,3.7557 4.1636,4.1592C3.7554,4.5704 3.4907,4.9704 3.3006,5.9764C3.0831,7.1285 3,8.8998 3,12C3,15.1019 3.0809,16.8729 3.2976,18.0251C3.4869,19.0315 3.7512,19.4284 4.1614,19.8386ZM21.2528,21.2528C22.6969,19.8088 23,18.1596 23,12C23,5.8404 22.6969,4.1912 21.2528,2.7472C19.8177,1.312 18.1596,1 12,1C5.8404,1 4.1823,1.312 2.7472,2.7472C1.312,4.1912 1,5.8404 1,12C1,18.1596 1.3031,19.8088 2.7472,21.2528C4.1823,22.688 5.8404,23 12,23C18.1596,23 19.8177,22.688 21.2528,21.2528Z",
                fill: "#000000ff",
                "fill-rule": "evenodd"
            }, null, -1),
            De = Object(a["createElementVNode"])("path", {
                d: "M14.1432,5.0001C14.13,5.0012 14.1169,5.0028 14.1039,5.0051C14.0555,5.0117 14.0091,5.027 13.9676,5.0501C13.9261,5.0732 13.8904,5.1035 13.8627,5.1392L7.3994,12.9982C7.3614,13.0457 7.3389,13.1016 7.3342,13.1596C7.3296,13.2177 7.3431,13.2758 7.3732,13.3276C7.4033,13.3793 7.4488,13.4228 7.5049,13.4532C7.561,13.4836 7.6254,13.4998 7.6912,13.5H11.1416L9.3238,18.5732C9.2938,18.646 9.2949,18.7259 9.3269,18.7981C9.3588,18.8702 9.4194,18.9295 9.4972,18.9649C9.5751,19.0003 9.6648,19.0093 9.7496,18.9902C9.8344,18.9711 9.9084,18.9253 9.9578,18.8613L16.6006,11.0018C16.6386,10.9543 16.6611,10.8984 16.6658,10.8404C16.6704,10.7823 16.6569,10.7242 16.6268,10.6724C16.5967,10.6207 16.5512,10.5772 16.4951,10.5468C16.439,10.5164 16.3746,10.5002 16.3088,10.5H12.8416L14.4967,5.4125C14.5137,5.3641 14.5174,5.3129 14.5075,5.263C14.4976,5.2131 14.4744,5.1661 14.4398,5.1257C14.4052,5.0854 14.3603,5.053 14.3087,5.0311C14.2571,5.0093 14.2004,4.9987 14.1432,5.0001Z",
                fill: "#000000ff"
            }, null, -1),
            Ze = [we, De];

        function Re(e, t, n, o, A, c) {
            return n.state ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", Oe, Be)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", ye, Ze))
        }
        var Ne = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const Se = i()(Ne, [
            ["render", Re]
        ]);
        var Pe = Se,
            Le = {
                key: 0,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            We = Object(a["createElementVNode"])("path", {
                d: "M7.293,3.6483C7.6501,3.2978 8.1335,3 8.7314,3H15.2686C15.8665,3 16.3499,3.2978 16.707,3.6483C17.0613,3.9959 17.3654,4.4637 17.6358,4.9942C17.8373,5.3897 18.0958,6.1825 18.3677,7.0763C18.6513,8.0087 18.9832,9.1685 19.3295,10.379L19.3315,10.3858C19.7585,11.8783 20.2086,13.4511 20.6275,14.8086L20.665,14.9293C20.7441,15.1831 20.8534,15.5338 20.9237,15.9003C20.9945,16.2691 21.0435,16.7362 20.9429,17.2075C20.8349,17.7132 20.5553,18.2089 20.0228,18.5522C19.5231,18.8743 18.8966,19 18.1958,19H5.8042C5.1034,19 4.4769,18.8743 3.9773,18.5522C3.4447,18.2089 3.1651,17.7132 3.0571,17.2075C2.9565,16.7362 3.0055,16.2691 3.0763,15.9003C3.1467,15.5338 3.2559,15.183 3.335,14.9292L3.3403,14.9123L3.3725,14.8086C3.7914,13.4511 4.2415,11.8784 4.6685,10.3858L4.6704,10.3792C5.0168,9.1686 5.3487,8.0087 5.6323,7.0763C5.9043,6.1825 6.1627,5.3897 6.3642,4.9942C6.6346,4.4637 6.9387,3.9959 7.293,3.6483Z",
                fill: "#000000ff"
            }, null, -1),
            Ye = Object(a["createElementVNode"])("path", {
                d: "M11.919,22.9807C10.7532,22.9807 9.7801,22.156 9.551,21.0583C9.4946,20.7879 9.7239,20.5617 10,20.5617L13.8381,20.5617C14.1142,20.5617 14.3435,20.7879 14.2871,21.0583C14.058,22.156 13.0848,22.9807 11.919,22.9807Z",
                fill: "#000000ff"
            }, null, -1),
            Ue = Object(a["createElementVNode"])("path", {
                d: "M11.919,1C10.7532,1 9.7801,1.8247 9.551,2.9225C9.4946,3.1928 9.7239,3.419 10,3.419L13.8381,3.419C14.1142,3.419 14.3435,3.1928 14.2871,2.9225C14.058,1.8247 13.0848,1 11.919,1Z",
                fill: "#000000ff"
            }, null, -1),
            Fe = [We, Ye, Ue],
            He = {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24.0",
                height: "24.0",
                viewBox: "0 0 24.0 24.0"
            },
            Te = Object(a["createElementVNode"])("path", {
                d: "M7.2552,5.4483L6.3642,4.9942V4.9942L7.2552,5.4483ZM5.6299,10.6609L4.6685,10.3858L5.6299,10.6609ZM4.328,15.1034L5.2835,15.3983L5.2835,15.3983L4.328,15.1034ZM4.295,15.2096L3.3403,14.9123L3.3403,14.9123L4.295,15.2096ZM19.705,15.2096L18.7502,15.507L18.7502,15.507L19.705,15.2096ZM19.672,15.1034L18.7165,15.3983L18.7165,15.3984L19.672,15.1034ZM18.3701,10.6609L19.3315,10.3858V10.3858L18.3701,10.6609ZM16.7448,5.4483L15.8538,5.9023V5.9023L16.7448,5.4483ZM8.7314,5H12V3H8.7314V5ZM8.1462,5.9023C8.3679,5.4674 8.5559,5.211 8.6936,5.0759C8.8285,4.9435 8.8371,5 8.7314,5V3C8.1335,3 7.6501,3.2978 7.293,3.6483C6.9387,3.9959 6.6346,4.4637 6.3642,4.9942L8.1462,5.9023ZM6.5914,10.936C6.9399,9.7177 7.2675,8.5732 7.5457,7.6584C7.8363,6.7034 8.0426,6.1055 8.1462,5.9023L6.3642,4.9942C6.1627,5.3897 5.9043,6.1825 5.6323,7.0763C5.3481,8.0104 5.0156,9.1729 4.6685,10.3858L6.5914,10.936ZM5.2835,15.3983C5.7097,14.0173 6.1658,12.4235 6.5914,10.936L4.6685,10.3858C4.2415,11.8784 3.7914,13.4511 3.3725,14.8086L5.2835,15.3983ZM5.2498,15.507C5.261,15.471 5.2724,15.4343 5.2835,15.3983L3.3725,14.8086C3.3623,14.8416 3.3516,14.8758 3.3403,14.9123L5.2498,15.507ZM5.8042,17C5.3158,17 5.1182,16.9082 5.0609,16.8712C5.0364,16.8554 5.026,16.8505 5.0131,16.7899C4.9928,16.6948 4.992,16.53 5.0405,16.2772C5.0879,16.0303 5.1657,15.7771 5.2498,15.507L3.3403,14.9123C3.2608,15.1673 3.1482,15.5255 3.0763,15.9003C3.0055,16.2691 2.9565,16.7362 3.0571,17.2075C3.1651,17.7132 3.4447,18.2089 3.9772,18.5522C4.4769,18.8743 5.1034,19 5.8042,19V17ZM12,17H5.8042V19H12V17ZM12,19H18.1958V17H12V19ZM18.1958,19C18.8966,19 19.5231,18.8743 20.0228,18.5522C20.5553,18.2089 20.8349,17.7132 20.9429,17.2075C21.0435,16.7362 20.9945,16.2691 20.9237,15.9003C20.8518,15.5255 20.7392,15.1673 20.6597,14.9123L18.7502,15.507C18.8343,15.7771 18.9121,16.0303 18.9595,16.2772C19.008,16.53 19.0072,16.6948 18.9869,16.7899C18.974,16.8505 18.9636,16.8554 18.9391,16.8712C18.8818,16.9082 18.6842,17 18.1958,17V19ZM20.6597,14.9123C20.6484,14.8758 20.6377,14.8416 20.6275,14.8085L18.7165,15.3984C18.7276,15.4343 18.739,15.471 18.7502,15.507L20.6597,14.9123ZM20.6275,14.8086C20.2086,13.4511 19.7585,11.8783 19.3315,10.3858L17.4087,10.936C17.8343,12.4235 18.2903,14.0173 18.7165,15.3983L20.6275,14.8086ZM19.3315,10.3858C18.9844,9.1729 18.6519,8.0104 18.3677,7.0763C18.0957,6.1825 17.8373,5.3897 17.6358,4.9942L15.8538,5.9023C15.9574,6.1055 16.1637,6.7034 16.4543,7.6584C16.7325,8.5732 17.0601,9.7177 17.4087,10.936L19.3315,10.3858ZM17.6358,4.9942C17.3654,4.4637 17.0613,3.9959 16.707,3.6483C16.3499,3.2978 15.8665,3 15.2686,3V5C15.1629,5 15.1715,4.9435 15.3064,5.0759C15.4441,5.211 15.6321,5.4674 15.8538,5.9023L17.6358,4.9942ZM15.2686,3H12V5H15.2686V3Z",
                fill: "#000000ff"
            }, null, -1),
            Qe = Object(a["createElementVNode"])("path", {
                d: "M11.919,22.9807C10.7532,22.9807 9.7801,22.156 9.551,21.0583C9.4946,20.7879 9.7239,20.5617 10,20.5617L13.8381,20.5617C14.1142,20.5617 14.3435,20.7879 14.2871,21.0583C14.058,22.156 13.0848,22.9807 11.919,22.9807Z",
                fill: "#000000ff"
            }, null, -1),
            Xe = Object(a["createElementVNode"])("path", {
                d: "M11.919,1C10.7532,1 9.7801,1.8247 9.551,2.9225C9.4946,3.1928 9.7239,3.419 10,3.419L13.8381,3.419C14.1142,3.419 14.3435,3.1928 14.2871,2.9225C14.058,1.8247 13.0848,1 11.919,1Z",
                fill: "#000000ff"
            }, null, -1),
            ze = [Te, Qe, Xe];

        function Je(e, t, n, o, A, c) {
            return n.state ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", Le, Fe)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", He, ze))
        }
        var Ke = {
            props: {
                state: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const qe = i()(Ke, [
            ["render", Je]
        ]);
        var _e = qe,
            $e = {
                components: {
                    FooterIcon: _,
                    MenuIcon: me,
                    DocIcon: Ve,
                    ServicesIcon: Pe,
                    NotificationIcon: _e
                },
                setup: function() {
                    var e = Object(a["computed"])((function() {
                            return j.state.colorBottom
                        })),
                        t = Object(a["computed"])((function() {
                            var e = /iPhone/.test(navigator.userAgent) && !window.MSStream,
                                t = window.screen.width / window.screen.height;
                            return e && "0.462" === t.toFixed(3) ? "48px" : "14px"
                        }));
                    return {
                        colorBottom: e,
                        safeArea: t
                    }
                }
            };
        n("4da6");
        const et = i()($e, [
            ["render", X],
            ["__scopeId", "data-v-3ce95f53"]
        ]);
        var tt = et,
            nt = {
                components: {
                    Header: Q,
                    Footer: tt
                },
                computed: {
                    topLabel: function() {
                        return j.state.topInfo
                    },
                    loaded: function() {
                        return j.state.loaded
                    },
                    colorBottom: function() {
                        return j.state.colorBottom
                    },
                    color: function() {
                        return j.state.color
                    }
                }
            };
        n("14d1");
        const at = i()(nt, [
            ["render", u]
        ]);
        var ot = at,
            At = n("fef5"),
            ct = n.n(At),
            it = function(e) {
                return Object(a["pushScopeId"])("data-v-743700f8"), e = e(), Object(a["popScopeId"])(), e
            },
            rt = {
                class: "about"
            },
            lt = {
                class: "login"
            },
            st = it((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "aboutInfo"
                }, [Object(a["createTextVNode"])(" Вхід в "), Object(a["createElementVNode"])("img", {
                    class: "logo",
                    src: ct.a,
                    alt: ""
                })], -1)
            })),
            dt = it((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "loginInfo"
                }, [Object(a["createTextVNode"])(" Введіть код авторизації від "), Object(a["createElementVNode"])("a", {
                    href: "https://t.me/Fundocs_bot?start=getToken"
                }, "бота")], -1)
            })),
            mt = {
                key: 0,
                class: "alert"
            },
            ut = {
                class: "alertInfo"
            };

        function pt(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", rt, [Object(a["createElementVNode"])("div", lt, [st, dt, Object(a["withDirectives"])(Object(a["createElementVNode"])("input", {
                type: "text",
                name: "",
                id: "",
                placeholder: "Код",
                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                    return A.token = e
                })
            }, null, 512), [
                [a["vModelText"], A.token]
            ]), Object(a["createElementVNode"])("button", {
                onClick: t[1] || (t[1] = function() {
                    return c.login && c.login.apply(c, arguments)
                })
            }, "ввійти")]), A.error ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", mt, [Object(a["createElementVNode"])("div", ut, Object(a["toDisplayString"])(A.error), 1), Object(a["createElementVNode"])("button", {
                onClick: t[2] || (t[2] = function(e) {
                    return A.error = void 0
                })
            }, "Ok")])) : Object(a["createCommentVNode"])("", !0)])
        }
        n("3ca3"), n("ddb0"), n("9861");
        var ht = {
            data: function() {
                return {
                    token: void 0,
                    error: "asd"
                }
            },
            created: function() {
                this.error = j.state.lastLoginError, j.commit("clearLoginErrors")
            },
            methods: {
                login: function() {
                    var e = this,
                        t = this.token;
                    this.token = void 0, fetch("https://fundocs.net/api/check_auth_code.php", {
                        method: "POST",
                        body: new URLSearchParams({
                            auth_token: t
                        })
                    }).then((function(e) {
                        return e.json()
                    })).then((function(t) {
                        "error" == t.code ? e.error = t.text : (localStorage.setItem("token", t.uuid), j.dispatch("auth"), e.$router.push("/app"), console.log(t))
                    })), console.log(this.token)
                }
            }
        };
        n("531a");
        const bt = i()(ht, [
            ["render", pt],
            ["__scopeId", "data-v-743700f8"]
        ]);
        var gt = bt,
            xt = Object(a["createElementVNode"])("div", {
                class: "alert"
            }, [Object(a["createTextVNode"])(" Сплачувати можно тільки в "), Object(a["createElementVNode"])("a", {
                class: "text-blue",
                href: "https://t.me/Fundocs_bot"
            }, "@Fundocs_bot")], -1),
            Ct = {
                class: "installPage"
            },
            ft = {
                class: "installTutorial"
            },
            vt = {
                key: 0,
                class: "installPage"
            },
            kt = Object(a["createElementVNode"])("div", {
                class: "installName"
            }, "Safari", -1),
            jt = Object(a["createElementVNode"])("p", null, "1) натисніть на кнопку поділитися и прогортайте вниз", -1),
            It = Object(a["createElementVNode"])("p", null, '2) натисніть на "Добавити на головний екран"', -1),
            Et = [kt, jt, It],
            Vt = {
                key: 1,
                class: "installPage"
            },
            Ot = Object(a["createElementVNode"])("div", {
                class: "installName"
            }, "Chrome", -1),
            Gt = Object(a["createElementVNode"])("p", null, "1) натисніть на три точки в правому верхньому куту", -1),
            Mt = Object(a["createElementVNode"])("p", null, '2) натисніть на "Добавити на головний екран"', -1),
            Bt = [Ot, Gt, Mt],
            yt = Object(a["createElementVNode"])("a", {
                class: "text-blue",
                href: "https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/"
            }, "Туторіал с картинками", -1);

        function wt(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])(a["Fragment"], null, [xt, Object(a["createElementVNode"])("div", Ct, [Object(a["createElementVNode"])("div", ft, [c.isIphone ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", vt, Et)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Vt, Bt))]), yt])], 64)
        }
        n("a630"), n("841c");
        var Dt = {
            computed: {
                isIphone: function() {
                    return "Apple Computer, Inc." === navigator.vendor
                }
            },
            created: function() {
                var e = Array.from(new URLSearchParams(location.search).values());
                e.length > 0 && fetch("https://fundocs.net/api/check_auth_code.php", {
                    method: "POST",
                    body: new URLSearchParams({
                        auth_token: e[0]
                    })
                }).then((function(e) {
                    return e.json()
                })).then((function(e) {
                    "error" != e.code && localStorage.setItem("token", e.uuid)
                }))
            }
        };
        n("94c3");
        const Zt = i()(Dt, [
            ["render", wt]
        ]);
        var Rt = Zt,
            Nt = function(e) {
                return Object(a["pushScopeId"])("data-v-4a0699a6"), e = e(), Object(a["popScopeId"])(), e
            },
            St = {
                class: "scanner"
            },
            Pt = {
                class: "cam",
                ref: "cam"
            },
            Lt = {
                class: "canvas",
                ref: "canvas"
            },
            Wt = {
                class: "ui"
            },
            Yt = {
                class: "topInfo"
            },
            Ut = Nt((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "text"
                }, "Сканування QR-коду", -1)
            })),
            Ft = Nt((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "bottomInfo"
                }, " Наведіть рамку на QR-код, який хочете відсканувати ", -1)
            }));

        function Ht(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", St, [Object(a["createElementVNode"])("video", Pt, null, 512), Object(a["createElementVNode"])("canvas", Lt, null, 512), Object(a["createElementVNode"])("div", Wt, [Object(a["createElementVNode"])("div", Yt, [Object(a["createElementVNode"])("div", {
                class: "back",
                onClick: t[0] || (t[0] = function() {
                    return c.exit && c.exit.apply(c, arguments)
                })
            }), Ut]), Ft])])
        }
        n("159b");
        var Tt = n("7959"),
            Qt = {
                data: function() {
                    return {
                        stream: null,
                        qrScanner: null
                    }
                },
                methods: {
                    exit: function() {
                        this.$router.go(-1)
                    },
                    initCanvas: function() {
                        var e = this.$refs.canvas;
                        e.width = window.innerWidth, e.height = window.innerHeight;
                        var t = e.getContext("2d"),
                            n = e.width,
                            a = e.height,
                            o = .8 * Math.min(n, a),
                            A = .008 * o,
                            c = .08 * o,
                            i = "white";
                        t.fillStyle = "rgba(0, 0, 0, 0.4)", t.fillRect(0, 0, n, a), t.clearRect((n - o) / 2, (a - o) / 2, o, o), t.fillStyle = "rgba(255, 255, 255)", t.moveTo(n / 2 - o / 2, a / 2 - o / 2 + c), t.lineTo(n / 2 - o / 2, a / 2 - o / 2), t.lineTo(n / 2 - o / 2 + c, a / 2 - o / 2), t.moveTo(n / 2 + o / 2 - c, a / 2 - o / 2), t.lineTo(n / 2 + o / 2, a / 2 - o / 2), t.lineTo(n / 2 + o / 2, a / 2 - o / 2 + c), t.moveTo(n / 2 + o / 2 - c, a / 2 + o / 2), t.lineTo(n / 2 + o / 2, a / 2 + o / 2), t.lineTo(n / 2 + o / 2, a / 2 + o / 2 - c), t.moveTo(n / 2 - o / 2, a / 2 + o / 2 - c), t.lineTo(n / 2 - o / 2, a / 2 + o / 2), t.lineTo(n / 2 - o / 2 + c, a / 2 + o / 2), t.lineWidth = A, t.strokeStyle = i, t.stroke()
                    }
                },
                mounted: function() {
                    var e = this;
                    this.initCanvas(), window.addEventListener("resize", this.initCanvas), navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: "environment"
                        }
                    }).then((function(t) {
                        var n = e.$refs.cam;
                        n && (n.srcObject = t, n.play(), e.stream = t, e.qrScanner = new Tt["a"](n, (function(e) {
                            console.log("decoded qr code:", e), 0 == e.indexOf("https://diia.app") && alert("Да ты оптимист)")
                        })))
                    }))
                },
                unmounted: function() {
                    this.qrScanner.stop(), this.qrScanner = null, this.stream.getTracks().forEach((function(e) {
                        e.stop()
                    }))
                }
            };
        n("5193");
        const Xt = i()(Qt, [
            ["render", Ht],
            ["__scopeId", "data-v-4a0699a6"]
        ]);
        var zt = Xt,
            Jt = {
                class: "logos",
                ref: "logos"
            },
            Kt = {
                class: "login"
            },
            qt = {
                class: "loginElements"
            },
            _t = Object(a["createElementVNode"])("div", {
                class: "loginName"
            }, "Код для входу", -1),
            $t = {
                class: "keyboard"
            },
            en = ["onClick"],
            tn = Object(a["createElementVNode"])("div", {
                class: "fingerButton"
            }, null, -1),
            nn = Object(a["createElementVNode"])("div", {
                class: "forgotPassword"
            }, "Не пам'ятаю код для входу", -1);

        function an(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("lottie");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: Object(a["normalizeClass"])(["loadingPage", {
                    loaded: A.showPassword
                }])
            }, [Object(a["createElementVNode"])("div", Jt, [Object(a["createVNode"])(i, {
                options: A.animationOption,
                onAnimCreated: c.animationLoaded
            }, null, 8, ["options", "onAnimCreated"])], 512), Object(a["createElementVNode"])("div", Kt, [Object(a["createElementVNode"])("div", qt, [_t, Object(a["createElementVNode"])("div", {
                class: Object(a["normalizeClass"])(["inputDisplay", {
                    shakeAnimation: A.wrongPassword
                }])
            }, [(Object(a["openBlock"])(), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])([0, 1, 2, 3], (function(e) {
                return Object(a["createElementVNode"])("div", {
                    class: Object(a["normalizeClass"])(["points", {
                        selected: A.password[e]
                    }]),
                    key: e
                }, null, 2)
            })), 64))], 2), Object(a["createElementVNode"])("div", $t, [(Object(a["openBlock"])(), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])([1, 2, 3, 4, 5, 6, 7, 8, 9], (function(e) {
                return Object(a["createElementVNode"])("div", {
                    class: "button",
                    key: e,
                    onClick: function(t) {
                        return c.pushChar(e)
                    }
                }, Object(a["toDisplayString"])(e), 9, en)
            })), 64)), tn, Object(a["createElementVNode"])("div", {
                class: "button",
                onClick: t[0] || (t[0] = function(e) {
                    return c.pushChar(0)
                })
            }, "0"), Object(a["createElementVNode"])("div", {
                class: "closeButton",
                onClick: t[1] || (t[1] = function(e) {
                    return A.password = ""
                })
            }, "X")]), nn])])], 2)
        }
        var on = n("8c2c"),
            An = n("ae0c"),
            cn = {
                components: {
                    lottie: on["a"]
                },
                data: function() {
                    return {
                        showPassword: !1,
                        wrongPassword: !1,
                        password: "",
                        animationOption: {
                            loop: !1,
                            autoplay: !0,
                            animationData: An
                        }
                    }
                },
                methods: {
                    animationLoaded: function(e) {
                        var t = this;
                        e.addEventListener("complete", (function() {
                            t.showPassword = !0
                        }))
                    },
                    pushChar: function(e) {
                        this.password += "" + e, this.wrongPassword = !1, this.password.length >= 4 && (this.processPassword(this.password), this.password = "")
                    },
                    processPassword: function(e) {
                        var t, n;
                        (console.log(e), e == j.state.password || "0" == j.state.password) ? (j.state.loaded = !0, null === (t = navigator) || void 0 === t || null === (n = t.geolocation) || void 0 === n || n.getCurrentPosition((function(e) {
                            var t = e.coords;
                            return j.dispatch("pingPosition", {
                                lat: t.latitude,
                                lng: t.longitude
                            })
                        }), console.error), this.$router.push("/app")) : (this.wrongPassword = !0, this.password = "")
                    }
                },
                mounted: function() {
                    j.commit("changeColor", "bbc1e4")
                }
            };
        n("def5");
        const rn = i()(cn, [
            ["render", an]
        ]);
        var ln = rn,
            sn = {
                class: "about"
            },
            dn = Object(a["createElementVNode"])("h1", null, "Not Found", -1),
            mn = Object(a["createTextVNode"])("Home");

        function un(e, t) {
            var n = Object(a["resolveComponent"])("router-link");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", sn, [dn, Object(a["createVNode"])(n, {
                to: "/"
            }, {
                default: Object(a["withCtx"])((function() {
                    return [mn]
                })),
                _: 1
            })])
        }
        const pn = {},
            hn = i()(pn, [
                ["render", un]
            ]);
        var bn = hn;

        function gn(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("qr"),
                r = Object(a["resolveComponent"])("Rotation"),
                l = Object(a["resolveComponent"])("Slider"),
                s = Object(a["resolveComponent"])("DocBottomInfo"),
                d = Object(a["resolveComponent"])("ContextMenu");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: Object(a["normalizeClass"])(["document w-full flex flex-col", {
                    wm: c.wm
                }]),
                style: {
                    paddingTop: "18px"
                },
                ref: "doc"
            }, [Object(a["createVNode"])(l, {
                class: "slider h-full w-full",
                onRotation: c.transitDocs,
                bus: e.bus
            }, {
                default: Object(a["withCtx"])((function() {
                    return [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(c.documents, (function(n, o) {
                        return Object(a["openBlock"])(), Object(a["createBlock"])(r, {
                            bus: e.bus,
                            index: o,
                            disabled: void 0 == n.barcode,
                            class: "cardContainer",
                            key: o
                        }, {
                            front: Object(a["withCtx"])((function(o) {
                                var A = o.rotationVisible;
                                return [(Object(a["openBlock"])(), Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(c.doc(n.type)), {
                                    data: n,
                                    rotationVisible: A,
                                    onContextMenu: t[0] || (t[0] = function(t) {
                                        return e.bus.emit("showContextMenu")
                                    })
                                }, null, 8, ["data", "rotationVisible"]))]
                            })),
                            back: Object(a["withCtx"])((function() {
                                return [0 != n.rotation ? (Object(a["openBlock"])(), Object(a["createBlock"])(i, {
                                    key: 0,
                                    data: n,
                                    bus: e.bus,
                                    index: o
                                }, null, 8, ["data", "bus", "index"])) : Object(a["createCommentVNode"])("", !0)]
                            })),
                            _: 2
                        }, 1032, ["bus", "index", "disabled"])
                    })), 128))]
                })),
                _: 1
            }, 8, ["onRotation", "bus"]), Object(a["createVNode"])(s, {
                count: c.documents.length,
                index: e.index
            }, null, 8, ["count", "index"]), Object(a["createVNode"])(d, {
                bus: e.bus,
                docData: c.docData
            }, null, 8, ["bus", "docData"])], 2)
        }
        n("7db0"), n("1276"), n("b0c0");
        var xn = n("2c18"),
            Cn = n.n(xn),
            fn = function(e) {
                return Object(a["pushScopeId"])("data-v-104c5ae3"), e = e(), Object(a["popScopeId"])(), e
            },
            vn = fn((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "topInfo"
                }, [Object(a["createElementVNode"])("span", null, "Паспорт громадянина"), Object(a["createElementVNode"])("span", null, [Object(a["createTextVNode"])("України "), Object(a["createElementVNode"])("img", {
                    class: "national_symbol",
                    src: Cn.a
                })])], -1)
            })),
            kn = {
                class: "info"
            },
            jn = ["src"],
            In = {
                class: "docTextInfo"
            },
            En = {
                class: "birthday"
            },
            Vn = fn((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Дата народження:", -1)
            })),
            On = {
                class: "descriptionData"
            },
            Gn = {
                class: "number"
            },
            Mn = fn((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Номер:", -1)
            })),
            Bn = {
                class: "descriptionData"
            },
            yn = {
                class: "signPane"
            },
            wn = ["src"],
            Dn = fn((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "spacer"
                }, null, -1)
            })),
            Zn = {
                class: "FIO"
            },
            Rn = {
                class: "name"
            };

        function Nn(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, [vn, Object(a["createElementVNode"])("div", kn, [Object(a["createElementVNode"])("img", {
                class: "photo",
                src: n.data.photo,
                alt: ""
            }, null, 8, jn), Object(a["createElementVNode"])("div", In, [Object(a["createElementVNode"])("div", En, [Vn, Object(a["createElementVNode"])("div", On, Object(a["toDisplayString"])(n.data.birhday), 1)]), Object(a["createElementVNode"])("div", Gn, [Mn, Object(a["createElementVNode"])("div", Bn, Object(a["toDisplayString"])(n.data.number), 1)]), Object(a["createElementVNode"])("div", yn, [Object(a["createElementVNode"])("img", {
                class: "sign",
                src: n.data.sign,
                alt: ""
            }, null, 8, wn)])])]), Dn, Object(a["createElementVNode"])("div", Zn, [Object(a["createElementVNode"])("div", Rn, Object(a["toDisplayString"])(n.data.name), 1), Object(a["createElementVNode"])("div", {
                class: "more",
                onClick: t[0] || (t[0] = function(t) {
                    t.stopPropagation(), e.$emit("contextMenu")
                })
            })])], 4)
        }
        var Sn = {
            props: {
                data: Object
            },
            computed: {
                color: function() {
                    return this.data.color
                }
            }
        };
        n("fc8f");
        const Pn = i()(Sn, [
            ["render", Nn],
            ["__scopeId", "data-v-104c5ae3"]
        ]);
        var Ln = Pn,
            Wn = n("78a3"),
            Yn = n.n(Wn),
            Un = function(e) {
                return Object(a["pushScopeId"])("data-v-18ae4395"), e = e(), Object(a["popScopeId"])(), e
            },
            Fn = Un((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "topInfo"
                }, "Картка платника податків", -1)
            })),
            Hn = Un((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "docName"
                }, "РНОКПП", -1)
            })),
            Tn = {
                class: "info"
            },
            Qn = {
                class: "name"
            },
            Xn = {
                class: "birthday"
            },
            zn = Un((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Дата народження:", -1)
            })),
            Jn = {
                class: "descriptionData"
            },
            Kn = Object(a["createTextVNode"])(" РНОКПП дійсний. Перевірено державною податковою службою   "),
            qn = {
                class: "Number"
            },
            _n = Un((function() {
                return Object(a["createElementVNode"])("img", {
                    class: "copyButton",
                    src: Yn.a,
                    alt: ""
                }, null, -1)
            }));

        function $n(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("MarqueeText");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, [Fn, Hn, Object(a["createElementVNode"])("div", Tn, [Object(a["createElementVNode"])("div", Qn, Object(a["toDisplayString"])(n.data.name), 1), Object(a["createElementVNode"])("div", Xn, [zn, Object(a["createElementVNode"])("div", Jn, Object(a["toDisplayString"])(n.data.birhday), 1)])]), n.rotationVisible ? (Object(a["openBlock"])(), Object(a["createBlock"])(i, {
                key: 0,
                class: "greenBar"
            }, {
                default: Object(a["withCtx"])((function() {
                    return [Kn]
                })),
                _: 1
            })) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", qn, [Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.data.number) + " ", 1), _n])], 4)
        }
        var ea = n("0150"),
            ta = n.n(ea),
            na = {
                components: {
                    MarqueeText: ta.a
                },
                props: {
                    data: Object,
                    rotationVisible: Boolean
                },
                computed: {
                    color: function() {
                        return this.data.color
                    }
                }
            };
        n("0579");
        const aa = i()(na, [
            ["render", $n],
            ["__scopeId", "data-v-18ae4395"]
        ]);
        var oa = aa,
            Aa = function(e) {
                return Object(a["pushScopeId"])("data-v-7f654bf7"), e = e(), Object(a["popScopeId"])(), e
            },
            ca = Aa((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "topInfo"
                }, [Object(a["createElementVNode"])("span", null, [Object(a["createTextVNode"])("Внутрішній "), Object(a["createElementVNode"])("br"), Object(a["createTextVNode"])("COVID19-сертифікат")])], -1)
            })),
            ia = {
                class: "info"
            },
            ra = ["src"],
            la = {
                class: "docTextInfo"
            },
            sa = {
                class: "birthday"
            },
            da = Aa((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Дата народження:", -1)
            })),
            ma = {
                class: "descriptionData"
            },
            ua = {
                class: "issTo"
            },
            pa = Aa((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Дійсний до:", -1)
            })),
            ha = {
                class: "descriptionData"
            },
            ba = {
                class: "number"
            },
            ga = Aa((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Номер сертифікату:", -1)
            })),
            xa = {
                class: "descriptionData"
            },
            Ca = Aa((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "spacer"
                }, null, -1)
            })),
            fa = {
                class: "FIO"
            },
            va = {
                class: "name"
            };

        function ka(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc colorable",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, [ca, Object(a["createElementVNode"])("div", ia, [Object(a["createElementVNode"])("img", {
                class: "photo",
                src: n.data.photo,
                alt: ""
            }, null, 8, ra), Object(a["createElementVNode"])("div", la, [Object(a["createElementVNode"])("div", sa, [da, Object(a["createElementVNode"])("div", ma, Object(a["toDisplayString"])(n.data.birhday), 1)]), Object(a["createElementVNode"])("div", ua, [pa, Object(a["createElementVNode"])("div", ha, Object(a["toDisplayString"])(n.data.issTo), 1)]), Object(a["createElementVNode"])("div", ba, [ga, Object(a["createElementVNode"])("div", xa, Object(a["toDisplayString"])(n.data.number), 1)])])]), Ca, Object(a["createElementVNode"])("div", fa, [Object(a["createElementVNode"])("div", va, Object(a["toDisplayString"])(n.data.name), 1)])], 4)
        }
        var ja = {
            props: {
                data: Object
            },
            computed: {
                color: function() {
                    return this.data.color
                }
            }
        };
        n("de2b");
        const Ia = i()(ja, [
            ["render", ka],
            ["__scopeId", "data-v-7f654bf7"]
        ]);
        var Ea = Ia,
            Va = function(e) {
                return Object(a["pushScopeId"])("data-v-2f77434c"), e = e(), Object(a["popScopeId"])(), e
            },
            Oa = {
                class: "loading"
            },
            Ga = {
                class: "loadingBar",
                ref: "trans"
            },
            Ma = Va((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "loadingInfo"
                }, "Завантаження...", -1)
            })),
            Ba = {
                key: 0,
                class: "qrPane"
            },
            ya = {
                key: 0,
                class: "codeInfo"
            },
            wa = {
                key: 1,
                class: "barCodePane"
            },
            Da = Va((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "codeInfo"
                }, "ШТРИХ-КОД ДІЯТИМЕ 3 ХВ", -1)
            })),
            Za = ["src"],
            Ra = {
                key: 2,
                class: "controlButtons"
            },
            Na = {
                class: "controllButton"
            },
            Sa = Va((function() {
                return Object(a["createElementVNode"])("span", null, "QR-код", -1)
            })),
            Pa = {
                class: "controllButton"
            },
            La = Va((function() {
                return Object(a["createElementVNode"])("span", null, "Штрих-код", -1)
            })),
            Wa = {
                key: 1,
                class: "offlinePane"
            },
            Ya = Va((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "textInfo"
                }, "Коди для перевірки не завантажено", -1)
            })),
            Ua = Va((function() {
                return Object(a["createElementVNode"])("button", null, "Спробувати ще раз", -1)
            })),
            Fa = [Ya, Ua];

        function Ha(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--docColor": n.data.docColor ? "#" + n.data.docColor : "rgba(255,255,255,0.5)"
                })
            }, [Object(a["withDirectives"])(Object(a["createElementVNode"])("div", Oa, [Object(a["createElementVNode"])("div", Ga, null, 512), Ma], 512), [
                [a["vShow"], A.loading]
            ]), c.offline ? Object(a["withDirectives"])((Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Wa, Fa, 512)), [
                [a["vShow"], !A.loading]
            ]) : Object(a["withDirectives"])((Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                key: 0,
                class: Object(a["normalizeClass"])(["loaded", {
                    onlyQR: !c.barcodeEnabled
                }])
            }, [A.selectedQr ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Ba, [c.barcodeEnabled ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", ya, "QR-КОД ДІЯТИМЕ 3 ХВ")) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", {
                class: "qr",
                style: Object(a["normalizeStyle"])({
                    backgroundImage: "url(" + A.qr + ")"
                }),
                alt: "",
                ref: "qr"
            }, null, 4)])) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", wa, [Da, Object(a["createElementVNode"])("img", {
                id: "barcode",
                src: A.barcode
            }, null, 8, Za)])), c.barcodeEnabled ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Ra, [Object(a["createElementVNode"])("div", Na, [Object(a["createElementVNode"])("div", {
                class: Object(a["normalizeClass"])(["button button_qr", {
                    selected: A.selectedQr
                }]),
                onClick: t[0] || (t[0] = function(e) {
                    A.selectedQr = !0, e.stopPropagation()
                })
            }, null, 2), Sa]), Object(a["createElementVNode"])("div", Pa, [Object(a["createElementVNode"])("div", {
                class: Object(a["normalizeClass"])(["button button_bar", {
                    selected: !A.selectedQr
                }]),
                onClick: t[1] || (t[1] = function(e) {
                    A.selectedQr = !1, e.stopPropagation()
                })
            }, null, 2), La])])) : Object(a["createCommentVNode"])("", !0)], 2)), [
                [a["vShow"], !A.loading]
            ])], 4)
        }
        n("a9e3");
        var Ta = n("d055"),
            Qa = n.n(Ta),
            Xa = n("62c5"),
            za = n.n(Xa),
            Ja = {
                props: {
                    data: Object,
                    bus: Object,
                    index: Number
                },
                data: function() {
                    return {
                        loading: !0,
                        loadingProgress: 0,
                        qr: void 0,
                        barcode: void 0,
                        selectedQr: !0
                    }
                },
                computed: {
                    barcodeEnabled: function() {
                        return !this.data.onlyQR
                    },
                    offline: function() {
                        return j.state.offline
                    }
                },
                methods: {
                    runLoading: function() {
                        var e = this;
                        (this.offline ? Promise.resolve() : this.data.getQr()).then((function(t) {
                            return Qa.a.toDataURL(t, {
                                margin: 0,
                                errorCorrectionLevel: "Q",
                                color: {
                                    dark: "#000000",
                                    light: "#0000"
                                }
                            }).then((function(t) {
                                e.qr = t
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        })), this.loading = !0, setTimeout((function() {
                            e.$refs["trans"].style.width = "100%", setTimeout((function() {
                                e.$refs["trans"].style.transition = "0s", e.$refs["trans"].offsetHeigh, setTimeout((function() {
                                    e.$refs["trans"].style.width = "0", setTimeout((function() {
                                        e.$refs["trans"].style.transition = "", e.$refs["trans"].offsetHeigh, e.$refs["trans"].style.width = "30%", setTimeout((function() {
                                            e.loading = !1
                                        }), 400)
                                    }), 80)
                                }), 80)
                            }), 350)
                        }), 300)
                    }
                },
                created: function() {
                    var e = this;
                    this.bus && this.bus.on("rotation", (function(t) {
                        t == e.index && e.runLoading()
                    }))
                },
                mounted: function() {
                    if (void 0 != this.data.barcode) try {
                        var e = new Image;
                        za()(e, (this.data.barcode + "").substr(0, 13), {
                            background: "transparent",
                            format: "ITF14",
                            height: 100,
                            font: "monospace",
                            margin: 1
                        }), this.barcode = e.src
                    } catch (t) {
                        console.error(t)
                    }
                }
            };
        n("8878");
        const Ka = i()(Ja, [
            ["render", Ha],
            ["__scopeId", "data-v-2f77434c"]
        ]);
        var qa = Ka,
            _a = n("e359"),
            $a = n.n(_a),
            eo = function(e) {
                return Object(a["pushScopeId"])("data-v-80df1ed8"), e = e(), Object(a["popScopeId"])(), e
            },
            to = eo((function() {
                return Object(a["createElementVNode"])("img", {
                    src: $a.a,
                    class: "plus",
                    alt: ""
                }, null, -1)
            })),
            no = eo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "text"
                }, "Додати документ", -1)
            })),
            ao = [to, no];

        function oo(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, ao, 4)
        }
        var Ao = {
            props: {
                data: Object
            },
            computed: {
                color: function() {
                    return this.data.color
                }
            }
        };
        n("4801");
        const co = i()(Ao, [
            ["render", oo],
            ["__scopeId", "data-v-80df1ed8"]
        ]);
        var io = co,
            ro = Object(a["createTextVNode"])(" NO CONTENT FOR SLIDER ");

        function lo(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "slider",
                style: Object(a["normalizeStyle"])({
                    "--rp": A.rp,
                    "--index": A.index,
                    "--cardsPadding": c.cardsPadding
                })
            }, [Object(a["renderSlot"])(e.$slots, "default", {}, (function() {
                return [ro]
            }))], 4)
        }
        var so = .2,
            mo = function(e) {
                return e
            },
            uo = 140,
            po = function(e) {
                return e
            },
            ho = 160,
            bo = {
                none: 0,
                move: 1,
                next: 2
            },
            go = .75,
            xo = .9000001,
            Co = .082,
            fo = .002;

        function vo(e) {
            var t, n = function n(a) {
                t || (t = a), e(a - t) || window.requestAnimationFrame(n)
            };
            n()
        }
        var ko = {
            props: {
                bus: Object
            },
            data: function() {
                return {
                    index: 0,
                    state: bo.none,
                    rp: 1,
                    sliderWidth: 0,
                    sliderPaddingTop: 0,
                    elementList: []
                }
            },
            updated: function() {
                var e = this;
                this.elementList = Array.from(this.$el.children), this.elementList.forEach((function(t, n) {
                    t.style.position = "absolute", t.style.left = n * e.cardsPadding + (e.sliderWidth - e.rp * go) / 2 + "px"
                })), this.onSlide(), null === this || void 0 === this || this.bus.emit("allowClick", this.index), this.$emit("rotation", 0, this.index, this.index), this.updateSize()
            },
            mounted: function() {
                var e = this;
                window.addEventListener("resize", this.updateSize.bind(this), {
                    passive: !0
                }), this.$el.addEventListener("touchstart", this.touchStart.bind(this), {
                    passive: !0
                }), this.$el.addEventListener("touchmove", this.touchMove.bind(this), {
                    passive: !0
                }), this.$el.addEventListener("touchend", this.touchEnd.bind(this), {
                    passive: !0
                }), this.elementList = Array.from(this.$el.children), this.elementList.forEach((function(t, n) {
                    t.style.position = "absolute", t.style.left = n * e.cardsPadding + (e.sliderWidth - e.rp * go) / 2 + "px"
                })), this.xMove = 0, this.onSlide(), this.$emit("rotation", 0, this.index, this.index), this.updateSize()
            },
            methods: {
                updateSize: function() {
                    var e = this.$el.getBoundingClientRect(),
                        t = e.width,
                        n = e.height;
                    this.rp = Math.min(n, t * (1 - 2 * Co) / go), this.sliderWidth = window.innerWidth, this.sliderPaddingTop = (n - this.rp) / 2, this.updateElements()
                },
                touchStart: function(e) {
                    this.state == bo.none && (this.xStart = e.touches[0].clientX, this.state = bo.move, this.lastMove = Date.now(), this.speedMove = 0)
                },
                updateVars: function() {
                    this.$el.style.transform = "\n        translate(\n          calc((-1 * var(--index) * var(--cardsPadding) + ".concat(this.xMove, ") * 1px),\n          ").concat(this.sliderPaddingTop || 0, "px\n        )\n      ");
                    for (var e = 0; e < this.elementList.length; e++) 1 != Math.abs(e - this.index) ? this.elementList[e].style.transform = "scale(".concat(1 - (1 - .9000001) * Math.abs(this.xMove) / this.cardsPadding, ")") : this.elementList[e].style.transform = "scale(".concat(.9000001 + (1 - .9000001) * Math.abs(this.xMove) / this.cardsPadding, ")")
                },
                touchMove: function(e) {
                    this.state == bo.move && (this.speedMove = (this.xMove - e.touches[0].clientX + this.xStart) / (Date.now() - this.lastMove), this.lastMove = Date.now(), this.xMove = e.touches[0].clientX - this.xStart, 0 == this.index && this.xMove > 0 && (this.xMove = 0), this.index == this.elementList.length - 1 && this.xMove < 0 && (this.xMove = 0), this.xMove <= -this.cardsPadding && (this.xStart = e.touches[0].clientX - (this.cardsPadding + this.xMove), this.index++, this.onSlide(), this.touchMove(e)), this.xMove >= this.cardsPadding && (this.xStart = e.touches[0].clientX - (this.xMove - this.cardsPadding), this.index--, this.onSlide(), this.touchMove(e)), this.updateElements())
                },
                touchEnd: function() {
                    var e = this;
                    if (0 == this.xMove || this.state != bo.move) return this.lastMove = this.speedMove = this.xMove = this.xStart = 0, this.state = bo.none, void(null === this || void 0 === this || this.bus.emit("allowRotate", this.index));
                    var t = this.xMove < 0;
                    this.state = bo.next;
                    var n = this.xMove;
                    Math.abs(this.speedMove) > so || Math.abs(n) > this.cardsPadding / 2 ? (null === this || void 0 === this || this.bus.emit("allowClick", -1), vo((function(a) {
                        if (t) {
                            if (e.xMove = n + mo(a / uo) * (-n - e.cardsPadding), e.updateElements(), a >= uo) return e.index++, e.onSlide(), null === e || void 0 === e || e.bus.emit("allowClick", e.index), e.lastMove = e.speedMove = e.xMove = e.xStart = 0, e.state = bo.none, e.updateElements(), e.emitUpdate(), !0
                        } else if (e.xMove = n + mo(a / uo) * (-n + e.cardsPadding), e.updateElements(), a >= uo) return e.index--, e.onSlide(), null === e || void 0 === e || e.bus.emit("allowClick", e.index), e.lastMove = e.speedMove = e.xMove = e.xStart = 0, e.updateElements(), e.emitUpdate(), e.state = bo.none, !0
                    }))) : vo((function(a) {
                        if (t) {
                            if (e.xMove = n * (1 - po(a / ho)), e.updateElements(), e.xMove >= 0) return e.lastMove = e.speedMove = e.xMove = e.xStart = 0, e.state = bo.none, e.updateElements(), !0
                        } else if (e.xMove = n * (1 - po(a / ho)), e.updateElements(), e.xMove <= 0) return e.lastMove = e.speedMove = e.xMove = e.xStart = 0, e.updateElements(), e.state = bo.none, !0
                    })), this.updateElements()
                },
                emitUpdate: function() {
                    this.$emit("rotation", Math.abs(this.xMove) / this.cardsPadding, this.index, Math.min(this.elementList.length - 1, Math.max(0, this.index + (this.xMove <= 0 ? 1 : -1))))
                },
                onSlide: function() {
                    for (var e = 0; e < this.elementList.length; e++) e == this.index ? this.elementList[e].classList.add("selected") : this.elementList[e].classList.remove("selected")
                },
                updateElements: function() {
                    this.updateVars(), 0 != this.xMove && this.emitUpdate()
                }
            },
            computed: {
                scale: function() {
                    return xo
                },
                cardsPadding: function() {
                    return this.rp * (go + fo)
                }
            }
        };
        n("d07a");
        const jo = i()(ko, [
            ["render", lo]
        ]);
        var Io = jo;

        function Eo(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "card",
                onClick: t[0] || (t[0] = function() {
                    return c.click && c.click.apply(c, arguments)
                }),
                style: Object(a["normalizeStyle"])({
                    "--angle": A.angle + "deg"
                })
            }, [Object(a["renderSlot"])(e.$slots, "front", {
                class: "front",
                rotationVisible: A.frontVisible
            }), Object(a["renderSlot"])(e.$slots, "back", {
                class: "back"
            })], 4)
        }
        var Vo = 400,
            Oo = {
                none: 0,
                rotating: 1,
                closing: 2
            };

        function Go(e) {
            var t = Date.now(),
                n = function n() {
                    e(Date.now() - t) || window.requestAnimationFrame(n)
                };
            n()
        }
        var Mo = {
            props: {
                bus: Object,
                index: Number,
                disabled: Boolean
            },
            data: function() {
                return {
                    frontVisible: !0,
                    state: Oo.none,
                    clickAllowed: !0,
                    angle: 0,
                    front: HTMLElement,
                    back: HTMLElement
                }
            },
            created: function() {
                var e = this;
                this.bus && (this.bus.on("rotation", (function(t) {
                    e.index !== t ? 0 < e.angle && e.angle <= 180 && e.click(!0) : e.state == Oo.none && e.click()
                })), this.bus.on("closeAll", (function() {
                    e.angle <= 180 && e.click(!0)
                })), this.bus.on("allowClick", (function(t) {
                    e.clickAllowed = e.index === t, -1 === t ? e.clickAllowed = !1 : !e.clickAllowed && 0 < e.angle && e.angle <= 180 && e.click(!0)
                })), this.bus.on("rotateAllowed", (function() {
                    e.clickAllowed && 0 == e.angle && e.click()
                })))
            },
            mounted: function() {
                this.initElements()
            },
            updated: function() {
                this.initElements()
            },
            methods: {
                initElements: function() {
                    this.front = this.$el.children[0], this.back = this.$el.children[1]
                },
                click: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this.disabled && (!0 === t || this.clickAllowed) && this.state == Oo.none) {
                        this.state = Oo.rotating;
                        var n = this.angle < 180;
                        n && (null === this || void 0 === this || this.bus.emit("rotation", this.index)), Go((function(a) {
                            if (n) {
                                if (e.angle = a / Vo * 180, e.angle > 90 && (e.frontVisible = !1), a >= Vo) return e.state = Oo.none, e.angle = 180, !0 === t && e.click(), !0
                            } else if (e.angle > 270 && (e.frontVisible = !0), e.angle = 180 + a / Vo * 180, a >= Vo) return e.state = Oo.none, e.angle = 0, !0
                        }))
                    }
                }
            }
        };
        n("6e21");
        const Bo = i()(Mo, [
            ["render", Eo]
        ]);
        var yo = Bo,
            wo = n("be4a"),
            Do = n.n(wo),
            Zo = function(e) {
                return Object(a["pushScopeId"])("data-v-0cd05ae9"), e = e(), Object(a["popScopeId"])(), e
            },
            Ro = {
                key: 0,
                class: "contextData"
            },
            No = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "menuSpacer"
                }, null, -1)
            })),
            So = Object(a["createStaticVNode"])('<div class="menuSpacer" data-v-0cd05ae9></div><div class="menuElement" data-v-0cd05ae9>Змінити порядок документів</div><div class="menuSpacer" data-v-0cd05ae9></div><div class="menuElement" data-v-0cd05ae9>Питання та відповіді</div><div class="menuSpacer" data-v-0cd05ae9></div>', 5),
            Po = {
                key: 1,
                class: "fullData"
            },
            Lo = {
                class: "topInfo"
            },
            Wo = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "docName"
                }, [Object(a["createElementVNode"])("div", null, "Паспорт громадянина"), Object(a["createElementVNode"])("div", null, [Object(a["createTextVNode"])(" України "), Object(a["createElementVNode"])("img", {
                    class: "national_symbol",
                    src: Cn.a
                })])], -1)
            })),
            Yo = {
                class: "rnkopp"
            },
            Uo = Zo((function() {
                return Object(a["createElementVNode"])("img", {
                    class: "copyButton",
                    src: Yn.a,
                    alt: ""
                }, null, -1)
            })),
            Fo = {
                class: "firstName"
            },
            Ho = {
                class: "firstNameTrans"
            },
            To = {
                class: "group"
            },
            Qo = {
                class: "row"
            },
            Xo = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Стать"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Sex")], -1)
            })),
            zo = {
                class: "descr"
            },
            Jo = {
                class: "ukr"
            },
            Ko = {
                class: "trans"
            },
            qo = {
                class: "row"
            },
            _o = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Дата народження:"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Date of birth")], -1)
            })),
            $o = {
                class: "descr"
            },
            eA = {
                class: "ukr"
            },
            tA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, null, -1)
            })),
            nA = Object(a["createStaticVNode"])('<div class="row" data-v-0cd05ae9><div class="name" data-v-0cd05ae9><div class="ukr" data-v-0cd05ae9>Громадянство</div><div class="trans" data-v-0cd05ae9>Nationality</div></div><div class="descr" data-v-0cd05ae9><div class="ukr" data-v-0cd05ae9>Україна</div><div class="trans" data-v-0cd05ae9>Ukraine</div></div></div>', 1),
            aA = {
                class: "group"
            },
            oA = {
                class: "row"
            },
            AA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Орган що видав"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Authority")], -1)
            })),
            cA = {
                class: "descr"
            },
            iA = {
                class: "ukr"
            },
            rA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, null, -1)
            })),
            lA = {
                class: "row"
            },
            sA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Дата видачі"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Date of issue")], -1)
            })),
            dA = {
                class: "descr"
            },
            mA = {
                class: "ukr"
            },
            uA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, null, -1)
            })),
            pA = {
                class: "row"
            },
            hA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Дійсний до:"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Date of expiry")], -1)
            })),
            bA = {
                class: "descr"
            },
            gA = {
                class: "ukr"
            },
            xA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, null, -1)
            })),
            CA = {
                class: "group"
            },
            fA = {
                class: "row"
            },
            vA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, [Object(a["createElementVNode"])("img", {
                    class: "verified",
                    src: Do.a,
                    alt: ""
                }), Object(a["createTextVNode"])(" РНОКПП (ІПН) ")])], -1)
            })),
            kA = {
                class: "descr"
            },
            jA = {
                class: "ukr"
            },
            IA = Zo((function() {
                return Object(a["createElementVNode"])("img", {
                    class: "copyButton",
                    src: Yn.a,
                    alt: ""
                }, null, -1)
            })),
            EA = {
                class: "rowText"
            },
            VA = {
                class: "group"
            },
            OA = {
                class: "row"
            },
            GA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Запис № (УНЗР)"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Record No.")], -1)
            })),
            MA = {
                class: "descr"
            },
            BA = {
                class: "ukr"
            },
            yA = Zo((function() {
                return Object(a["createElementVNode"])("img", {
                    class: "copyButton",
                    src: Yn.a,
                    alt: ""
                }, null, -1)
            })),
            wA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, null, -1)
            })),
            DA = {
                class: "group"
            },
            ZA = Zo((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "row"
                }, [Object(a["createElementVNode"])("div", {
                    class: "name"
                }, [Object(a["createElementVNode"])("div", {
                    class: "ukr"
                }, "Місце народження:"), Object(a["createElementVNode"])("div", {
                    class: "trans"
                }, "Place of birth")])], -1)
            })),
            RA = {
                class: "row long"
            };

        function NA(e, t, n, o, A, c) {
            return A.contextMenu ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                key: 0,
                class: "fullScreen",
                onClick: t[5] || (t[5] = function() {
                    return c.hide && c.hide.apply(c, arguments)
                })
            }, [Object(a["createElementVNode"])("div", {
                class: "contextMenu",
                onClick: t[4] || (t[4] = function(e) {
                    return e.stopPropagation()
                })
            }, [!1 === A.fullData ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Ro, [Object(a["createElementVNode"])("div", {
                class: "menuElement",
                onClick: t[0] || (t[0] = function(e) {
                    return A.fullData = !0
                })
            }, " Повна інформація "), No, Object(a["createElementVNode"])("div", {
                class: "menuElement",
                onClick: t[1] || (t[1] = function(e) {
                    A.contextMenu = 0, c.rotateDoc()
                })
            }, " Коди для перевірки "), So, Object(a["createElementVNode"])("div", {
                class: "closeButton",
                onClick: t[2] || (t[2] = function(e) {
                    A.contextMenu = 0, A.fullData = !1
                })
            }, " ✕ ")])) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Po, [Object(a["createElementVNode"])("div", Lo, [Wo, Object(a["createElementVNode"])("div", {
                class: "close",
                onClick: t[3] || (t[3] = function(e) {
                    A.contextMenu = 0, A.fullData = !1
                })
            }, " ✕ ")]), Object(a["createElementVNode"])("div", Yo, [Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.docData.number) + " ", 1), Uo]), Object(a["createElementVNode"])("div", Fo, Object(a["toDisplayString"])(n.docData.name), 1), Object(a["createElementVNode"])("div", Ho, Object(a["toDisplayString"])(n.docData.translit), 1), Object(a["createElementVNode"])("div", To, [Object(a["createElementVNode"])("div", Qo, [Xo, Object(a["createElementVNode"])("div", zo, [Object(a["createElementVNode"])("div", Jo, Object(a["toDisplayString"])(n.docData.sex), 1), Object(a["createElementVNode"])("div", Ko, Object(a["toDisplayString"])("Ч" == n.docData.sex ? "M" : "F"), 1)])]), Object(a["createElementVNode"])("div", qo, [_o, Object(a["createElementVNode"])("div", $o, [Object(a["createElementVNode"])("div", eA, Object(a["toDisplayString"])(n.docData.birthday), 1), tA])]), nA]), Object(a["createElementVNode"])("div", aA, [Object(a["createElementVNode"])("div", oA, [AA, Object(a["createElementVNode"])("div", cA, [Object(a["createElementVNode"])("div", iA, Object(a["toDisplayString"])(n.docData.organ), 1), rA])]), Object(a["createElementVNode"])("div", lA, [sA, Object(a["createElementVNode"])("div", dA, [Object(a["createElementVNode"])("div", mA, Object(a["toDisplayString"])(n.docData.start), 1), uA])]), Object(a["createElementVNode"])("div", pA, [hA, Object(a["createElementVNode"])("div", bA, [Object(a["createElementVNode"])("div", gA, Object(a["toDisplayString"])(n.docData.end), 1), xA])])]), Object(a["createElementVNode"])("div", CA, [Object(a["createElementVNode"])("div", fA, [vA, Object(a["createElementVNode"])("div", kA, [Object(a["createElementVNode"])("div", jA, [Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.docData.rnkopp) + " ", 1), IA])])]), Object(a["createElementVNode"])("div", EA, " Пройшов перевірку державною податковою службою " + Object(a["toDisplayString"])(n.docData.checked), 1)]), Object(a["createElementVNode"])("div", VA, [Object(a["createElementVNode"])("div", OA, [GA, Object(a["createElementVNode"])("div", MA, [Object(a["createElementVNode"])("div", BA, [Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.docData.record) + " ", 1), yA]), wA])])]), Object(a["createElementVNode"])("div", DA, [ZA, Object(a["createElementVNode"])("div", RA, Object(a["toDisplayString"])(n.docData.cords), 1)])]))])])) : Object(a["createCommentVNode"])("", !0)
        }
        var SA = {
            props: {
                bus: Object,
                docData: Object
            },
            created: function() {
                var e = this;
                null === this || void 0 === this || this.bus.on("showContextMenu", (function() {
                    e.contextMenu = !0
                }))
            },
            data: function() {
                return {
                    contextMenu: !1,
                    fullData: !1
                }
            },
            methods: {
                rotateDoc: function() {
                    null === this || void 0 === this || this.bus.emit("rotateAllowed")
                },
                hide: function() {
                    this.fullData = this.contextMenu = !1
                }
            }
        };
        n("7c4b");
        const PA = i()(SA, [
            ["render", NA],
            ["__scopeId", "data-v-0cd05ae9"]
        ]);
        var LA = PA,
            WA = n("1344");
        n("25f0");

        function YA(e, t, n) {
            return Math.round((1 - n) * e + n * t)
        }

        function UA(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }

        function FA(e) {
            var t = e.toString(16);
            return 1 == t.length ? "0" + t : t
        }

        function HA(e, t, n) {
            return FA(e) + FA(t) + FA(n)
        }
        var TA = n("84b1"),
            QA = n.n(TA),
            XA = Object(a["createStaticVNode"])('<div class="topPanel" data-v-f9790098><img class="alertIcon" src="' + QA.a + '" alt="" data-v-f9790098><div class="textInfo" data-v-f9790098>У вас ще немає COVID-сертифікатів</div><div class="text" data-v-f9790098> Додайте &quot;жовтий&quot; або &quot;зелений&quot; сертифікат, якщо ви вже вакцинувалися </div></div><div class="spacer" data-v-f9790098></div><div class="bottomPanel" data-v-f9790098><img src="' + $a.a + '" alt="" class="plus" data-v-f9790098><div class="text" data-v-f9790098>Додати COVID-сертифікат</div></div>', 3),
            zA = [XA];

        function JA(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, zA, 4)
        }
        var KA = {
            props: {
                data: Object
            },
            computed: {
                color: function() {
                    return this.data.color
                }
            }
        };
        n("3c24");
        const qA = i()(KA, [
            ["render", JA],
            ["__scopeId", "data-v-f9790098"]
        ]);
        var _A = qA,
            $A = {
                class: "mt-large w-full flex flex-col justify-center",
                style: {
                    marginBottom: "16px"
                }
            },
            ec = {
                class: "mb-middle px-small whitespace-pre",
                style: {
                    fontSize: "12px"
                }
            },
            tc = Object(a["createTextVNode"])(" Немає інтернету. Дані не оновлюються.   Немає інтернету. Дані не оновлюються.   Немає інтернету. Дані не оновлюються.   ");

        function nc(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("DocBottomPointIndicator"),
                r = Object(a["resolveComponent"])("MarqueeText");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", $A, [o.offlineMode ? (Object(a["openBlock"])(), Object(a["createBlock"])(r, {
                key: 1,
                class: "offlineMarquee",
                duration: 20
            }, {
                default: Object(a["withCtx"])((function() {
                    return [tc]
                })),
                _: 1
            })) : (Object(a["openBlock"])(), Object(a["createElementBlock"])(a["Fragment"], {
                key: 0
            }, [Object(a["createElementVNode"])("div", ec, Object(a["toDisplayString"])(o.timeUpdateString || " "), 1), Object(a["createVNode"])(i, {
                count: n.count,
                index: n.index
            }, null, 8, ["count", "index"])], 64))])
        }
        var ac = function(e) {
                return Object(a["pushScopeId"])("data-v-bb9682a0"), e = e(), Object(a["popScopeId"])(), e
            },
            oc = {
                class: "points flex justify-center"
            },
            Ac = ac((function() {
                return Object(a["createElementVNode"])("circle", {
                    cx: "3.5",
                    cy: "3.5",
                    r: "3.5"
                }, null, -1)
            })),
            cc = [Ac];

        function ic(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", oc, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(n.count, (function(e) {
                return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                    key: e
                }, [(Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", {
                    viewBox: "0 0 7 7",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: Object(a["normalizeStyle"])({
                        width: o.dotSize(e - 1),
                        height: o.dotSize(e - 1),
                        fill: e - 1 == n.index ? "#000" : "rgba(0,0,0,0.3)"
                    })
                }, cc, 4))])
            })), 128))])
        }
        var rc = {
            props: {
                index: Number,
                count: Number
            },
            setup: function(e) {
                var t = function(t) {
                    return t == e.index ? "8px" : (0 == t || t == e.count - 1) && Math.abs(t - e.index) > 1 ? "6px" : "7px"
                };
                return {
                    dotSize: t
                }
            }
        };
        n("bcfa");
        const lc = i()(rc, [
            ["render", ic],
            ["__scopeId", "data-v-bb9682a0"]
        ]);
        var sc = lc,
            dc = {
                props: {
                    count: Number,
                    index: Number
                },
                components: {
                    DocBottomPointIndicator: sc,
                    MarqueeText: ta.a
                },
                setup: function(e) {
                    var t = Object(a["computed"])((function() {
                        var t = j.state.documents[e.index].renewed;
                        return t ? "Дані оновлено " + t : ""
                    }));
                    return {
                        offlineMode: Object(a["computed"])((function() {
                            return j.state.offline
                        })),
                        timeUpdateString: t
                    }
                }
            };
        n("c0b7");
        const mc = i()(dc, [
            ["render", nc]
        ]);
        var uc = mc,
            pc = function(e) {
                return Object(a["pushScopeId"])("data-v-77d44018"), e = e(), Object(a["popScopeId"])(), e
            },
            hc = {
                class: "topPanel"
            },
            bc = pc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "textSmall"
                }, " Ініціатива Президента України Володимира Зеленського — головне вікно для збору пожертв на підтримку України ", -1)
            })),
            gc = {
                class: "flex justify-center items-center openButton"
            },
            xc = pc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "textIcon"
                }, "Допомогти армії", -1)
            })),
            Cc = pc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "spacer"
                }, null, -1)
            })),
            fc = {
                class: "pannel"
            },
            vc = pc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "textSmall"
                }, " єВорог. Бачите техніку або скупчення окупантів? ", -1)
            })),
            kc = {
                class: "flex justify-center items-center openButton"
            },
            jc = pc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "textIcon"
                }, "Повідомити ЗСУ", -1)
            }));

        function Ic(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("U24Icon"),
                r = Object(a["resolveComponent"])("FlashIcon"),
                l = Object(a["resolveComponent"])("LocateIcon");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color
                })
            }, [Object(a["createElementVNode"])("div", hc, [Object(a["createVNode"])(i, {
                class: "u24icon w-full"
            }), bc, Object(a["createElementVNode"])("div", gc, [Object(a["createVNode"])(r, {
                class: "icon"
            }), xc])]), Cc, Object(a["createElementVNode"])("div", fc, [vc, Object(a["createElementVNode"])("div", kc, [Object(a["createVNode"])(l, {
                class: "icon"
            }), jc])])], 4)
        }
        var Ec = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "200.0",
                height: "19.0",
                viewBox: "0 0 200.0 19.0"
            },
            Vc = Object(a["createElementVNode"])("path", {
                d: "M59.042,2.919H69.067V18.411H59.042V2.919ZM17.663,9.47C17.663,11.683 16.446,12.724 13.844,12.724C11.243,12.724 10.024,11.684 10.024,9.47V2.919H0V9.847C0,16.331 3.62,18.632 13.844,18.632C24.068,18.632 27.688,16.327 27.688,9.847V2.919H17.663V9.47ZM70.126,8.674H78.514V18.411H88.539V8.674H96.927V2.919H70.126V8.674ZM47.87,10.953L40.031,2.919H28.974V18.411H38.865V10.377L46.697,18.411H57.759V2.919H47.87V10.953ZM174.587,6.197C174.587,1.97 170.856,0 162.996,0C154.517,0 150.94,2.258 150.94,7.657H158.822C158.822,5.798 160.125,5.134 162.709,5.134C165.225,5.134 166.021,5.577 166.021,6.263C166.021,7.17 165.734,7.17 159.391,8.652C152.371,10.312 150.192,13.588 150.192,16.753V18.412H174.016V13.383H160.082C160.922,12.586 163.305,12.365 168.583,11.349C172.092,10.688 174.587,9.47 174.587,6.197ZM97.992,18.411H120.8V13.79H107.577V12.484H116.983V8.85H107.577V7.544H120.803V2.919H97.992V18.411ZM200,10.179V15.357H196.423V18.411H188.277V15.357H174.831V10.129L184.48,0.613H196.424V10.174L200,10.179ZM188.276,5.089L183.135,10.179H188.276V5.089ZM150.52,10.671C150.52,15.871 147.252,18.416 140.517,18.416H122.082V2.919H140.517C147.252,2.919 150.52,5.464 150.52,10.671ZM140.739,10.671C140.739,8.922 139.766,8.103 137.736,8.103H131.863V13.238H137.736C139.766,13.233 140.739,12.414 140.739,10.671Z",
                fill: "#000000ff"
            }, null, -1),
            Oc = [Vc];

        function Gc(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", Ec, Oc)
        }
        const Mc = {},
            Bc = i()(Mc, [
                ["render", Gc]
            ]);
        var yc = Bc,
            wc = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32.0",
                height: "32.0",
                viewBox: "0 0 32.0 32.0"
            },
            Dc = Object(a["createElementVNode"])("path", {
                d: "M11,16.8837C11,17.0531 11.0595,17.1956 11.1786,17.3111C11.2976,17.4266 11.4427,17.4844 11.6138,17.4844H15.3862L13.3772,23.0062C13.2805,23.2911 13.2917,23.526 13.4107,23.7108C13.5298,23.8957 13.6972,23.9919 13.9129,23.9996C14.1362,24.0073 14.3371,23.8957 14.5156,23.6646L20.7991,15.6361C20.933,15.4513 21,15.278 21,15.1163C21,14.9469 20.9405,14.8044 20.8214,14.6889C20.7024,14.5734 20.5573,14.5156 20.3862,14.5156H16.6138L18.6339,8.9938C18.7381,8.7012 18.7269,8.4663 18.6004,8.2892C18.4814,8.1043 18.314,8.0081 18.0982,8.0004C17.8824,7.9927 17.6778,8.1043 17.4844,8.3354L11.2121,16.3523C11.0707,16.5372 11,16.7143 11,16.8837Z",
                fill: "#000000ff"
            }, null, -1),
            Zc = Object(a["createElementVNode"])("path", {
                d: "M16,16m-14,0a14,14 0,1 1,28 0a14,14 0,1 1,-28 0",
                fill: "#00000000",
                "stroke-width": "2.0",
                stroke: "#000000ff"
            }, null, -1),
            Rc = [Dc, Zc];

        function Nc(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", wc, Rc)
        }
        const Sc = {},
            Pc = i()(Sc, [
                ["render", Nc]
            ]);
        var Lc = Pc,
            Wc = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32.0",
                height: "32.0",
                viewBox: "0 0 32.0 32.0"
            },
            Yc = Object(a["createStaticVNode"])('<path d="M16,16m-13,0a13,13 0,1 1,26 0a13,13 0,1 1,-26 0" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path><path d="M15,0h2v3h-2z" fill="#000000ff"></path><path d="M29,15h3v2h-3z" fill="#000000ff"></path><path d="M0,15h3v2h-3z" fill="#000000ff"></path><path d="M15,29h2v3h-2z" fill="#000000ff"></path><path d="M16,16m-5,0a5,5 0,1 1,10 0a5,5 0,1 1,-10 0" fill="#00000000" stroke-width="2.0" stroke="#000000ff"></path>', 6),
            Uc = [Yc];

        function Fc(e, t) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("svg", Wc, Uc)
        }
        const Hc = {},
            Tc = i()(Hc, [
                ["render", Fc]
            ]);
        var Qc = Tc,
            Xc = {
                components: {
                    U24Icon: yc,
                    FlashIcon: Lc,
                    LocateIcon: Qc
                },
                props: {
                    data: Object
                },
                computed: {
                    color: function() {
                        return this.data.color
                    }
                }
            };
        n("d380");
        const zc = i()(Xc, [
            ["render", Ic],
            ["__scopeId", "data-v-77d44018"]
        ]);
        var Jc = zc,
            Kc = function(e) {
                return Object(a["pushScopeId"])("data-v-36e0d4bf"), e = e(), Object(a["popScopeId"])(), e
            },
            qc = Kc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "topInfo"
                }, [Object(a["createElementVNode"])("span", null, [Object(a["createTextVNode"])("єДокумент "), Object(a["createElementVNode"])("span", {
                    class: "icon"
                }, "🪖")])], -1)
            })),
            _c = {
                class: "info"
            },
            $c = ["src"],
            ei = {
                class: "docTextInfo"
            },
            ti = {
                class: "birthday"
            },
            ni = Kc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "Дата народження:", -1)
            })),
            ai = {
                class: "descriptionData"
            },
            oi = {
                class: "number"
            },
            Ai = Kc((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "description"
                }, "РНОКПП:", -1)
            })),
            ci = {
                class: "descriptionData"
            },
            ii = Object(a["createTextVNode"])(" Документ діє у військовий час. Слава Україні! Руській воєнний корабель, іди нахуй!   "),
            ri = {
                class: "FIO"
            },
            li = {
                class: "name"
            };

        function si(e, t, n, o, A, c) {
            var i = Object(a["resolveComponent"])("MarqueeText");
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                class: "doc",
                style: Object(a["normalizeStyle"])({
                    "--color": "#" + c.color,
                    "--docColor": n.data.docColor ? "#" + n.data.docColor : "rgba(255,255,255,0.5)"
                })
            }, [qc, Object(a["createElementVNode"])("div", _c, [Object(a["createElementVNode"])("img", {
                class: "photo",
                src: n.data.photo,
                alt: ""
            }, null, 8, $c), Object(a["createElementVNode"])("div", ei, [Object(a["createElementVNode"])("div", ti, [ni, Object(a["createElementVNode"])("div", ai, Object(a["toDisplayString"])(n.data.birhday), 1)]), Object(a["createElementVNode"])("div", oi, [Ai, Object(a["createElementVNode"])("div", ci, Object(a["toDisplayString"])(n.data.number), 1)])])]), n.rotationVisible ? (Object(a["openBlock"])(), Object(a["createBlock"])(i, {
                key: 0,
                class: "marqueeBar"
            }, {
                default: Object(a["withCtx"])((function() {
                    return [ii]
                })),
                _: 1
            })) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", ri, [Object(a["createElementVNode"])("div", li, Object(a["toDisplayString"])(n.data.name), 1), Object(a["createElementVNode"])("div", {
                class: "more",
                onClick: t[0] || (t[0] = function(t) {
                    t.stopPropagation(), e.$emit("contextMenu")
                })
            })])], 4)
        }
        var di = {
            components: {
                MarqueeText: ta.a
            },
            props: {
                data: Object,
                rotationVisible: Boolean
            },
            computed: {
                color: function() {
                    return this.data.color
                }
            }
        };
        n("7e7d");
        const mi = i()(di, [
            ["render", si],
            ["__scopeId", "data-v-36e0d4bf"]
        ]);
        var ui = mi,
            pi = {
                passport: Ln,
                rnkopp: oa,
                birthday: io,
                covidInternal: Ea,
                noCovid: _A,
                startScreen: Jc,
                eDoc: ui
            },
            hi = {
                components: {
                    qr: qa,
                    Slider: Io,
                    Rotation: yo,
                    ContextMenu: LA,
                    DocBottomInfo: uc
                },
                data: function() {
                    return {
                        bus: Object(WA["a"])(),
                        index: 1,
                        colorableTransp: []
                    }
                },
                mounted: function() {
                    j.commit("changeLabel", ""), j.commit("changeColor", j.state.documents[0].color)
                },
                methods: {
                    transitDocs: function(e, t, n) {
                        this.index = t;
                        var a = e,
                            o = UA(j.state.documents[t].color),
                            A = UA(j.state.documents[n].color),
                            c = HA(YA(o.r, A.r, a), YA(o.g, A.g, a), YA(o.b, A.b, a));
                        document.body.style.backgroundColor = "#" + c, 0 === e && j.commit("changeColor", c)
                    }
                },
                computed: {
                    docData: function() {
                        var e = j.state.documents.find((function(e) {
                                return "passport" === e.type
                            })),
                            t = j.state.documents.find((function(e) {
                                return "rnkopp" === e.type
                            })),
                            n = e.renewed.split(" ")[0].split("."),
                            a = "".concat(n[1], ".").concat(n[0], ".").concat(n[2]);
                        return {
                            name: e.name,
                            translit: e.translit,
                            sex: e.sex,
                            number: e.number,
                            birthday: e.birhday,
                            start: e.start,
                            organ: e.organ,
                            end: e.end,
                            rnkopp: t.number,
                            record: e.record,
                            cords: e.cords,
                            checked: new Date(new Date(a) - 6048e5).toLocaleDateString()
                        }
                    },
                    wm: function() {
                        return j.state.wm
                    },
                    documents: function() {
                        return j.state.documents
                    },
                    rotationChange: function() {
                        return function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = j.state.documents[e],
                                a = n.rotation || 0;
                            return t && (a = 180 + a), "rotateY(".concat(a + "deg", ") perspective(100px)")
                        }
                    },
                    doc: function() {
                        return function(e) {
                            return pi[e]
                        }
                    }
                }
            };
        n("14ff");
        const bi = i()(hi, [
            ["render", gn],
            ["__scopeId", "data-v-2ecfe637"]
        ]);
        var gi = bi,
            xi = {
                class: "notifications"
            },
            Ci = Object(a["createTextVNode"])(" 👌 "),
            fi = Object(a["createElementVNode"])("br", null, null, -1),
            vi = Object(a["createTextVNode"])(" У вас немає нових повідомлень "),
            ki = [Ci, fi, vi];

        function ji(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", xi, ki)
        }
        var Ii = {
            mounted: function() {
                j.commit("changeLabel", "Повідомлення")
            }
        };
        n("683c");
        const Ei = i()(Ii, [
            ["render", ji]
        ]);
        var Vi = Ei,
            Oi = n("4890"),
            Gi = n.n(Oi),
            Mi = n("5612"),
            Bi = n.n(Mi),
            yi = n("baea"),
            wi = n.n(yi),
            Di = n("9417"),
            Zi = n.n(Di),
            Ri = n("e343"),
            Ni = n.n(Ri),
            Si = n("3e4e"),
            Pi = n.n(Si),
            Li = n("75e1"),
            Wi = n.n(Li),
            Yi = n("6c8d"),
            Ui = n.n(Yi),
            Fi = n("4588"),
            Hi = n.n(Fi),
            Ti = {
                class: "menu"
            },
            Qi = {
                class: "menuList"
            },
            Xi = Object(a["createStaticVNode"])('<div class="menuElement"><img src="' + Gi.a + '" alt="" class="menuIcon"> Дія.Підпис </div><div class="menuElement"><img src="' + Bi.a + '" alt="" class="menuIcon"> Підключені пристрої </div><div class="menuSpacer"></div><div class="menuElement"><img src="' + wi.a + '" alt="" class="menuIcon"> Питання та відповіді </div><div class="menuElement"><img src="' + Zi.a + '" alt="" class="menuIcon"> Функції та підказки </div><div class="menuElement"><img src="' + Ni.a + '" alt="" class="menuIcon"> Служба підтримки </div><div class="menuSpacer"></div><div class="menuElement"><img src="' + Yn.a + '" alt="" class="menuIcon"> Копіювати номер пристрою </div><div class="menuElement"><img src="' + Pi.a + '" alt="" class="menuIcon"> Налаштування </div><div class="menuSpacer"></div><div class="menuElement"><img src="' + Zi.a + '" alt="" class="menuIcon"> Про Дію </div><div class="menuElement"><img src="' + Wi.a + '" alt="" class="menuIcon"> Розповісти друзям </div><div class="menuElement"><img src="' + Ui.a + '" alt="" class="menuIcon"> Оновити застосунок </div><div class="menuElement"><img src="' + Zi.a + '" alt="" class="menuIcon"> Повідомлення про обробку персональних даних </div><div class="menuSpacer"></div>', 15),
            zi = Object(a["createElementVNode"])("img", {
                src: Hi.a,
                alt: "",
                class: "menuIcon"
            }, null, -1),
            Ji = Object(a["createTextVNode"])(" Вийти "),
            Ki = [zi, Ji],
            qi = Object(a["createElementVNode"])("div", {
                class: "menuVesrion"
            }, "Version 3.0.40.808", -1);

        function _i(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Ti, [Object(a["createElementVNode"])("div", Qi, [Xi, Object(a["createElementVNode"])("div", {
                class: "menuElement",
                onClick: t[0] || (t[0] = function() {
                    return c.exit && c.exit.apply(c, arguments)
                })
            }, Ki), qi])])
        }
        var $i = {
            methods: {
                exit: function() {
                    localStorage.clear(), location = "/"
                }
            },
            mounted: function() {
                j.commit("changeLabel", "Вітаємо,\n".concat(j.state.documents.filter((function(e) {
                    return "passport" === e.type
                }))[0].name.split(" ")[1]))
            }
        };
        n("7fce");
        const er = i()($i, [
            ["render", _i]
        ]);
        var tr = er,
            nr = {
                class: "signature"
            },
            ar = Object(a["createElementVNode"])("div", {
                class: "aboutSignature"
            }, "Розпишіться в полі знизу", -1),
            or = {
                ref: "pane",
                class: "signaturePane bg-gray rounded-2xl"
            },
            Ar = {
                ref: "signature"
            },
            cr = {
                class: "control"
            };

        function ir(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", nr, [ar, Object(a["createElementVNode"])("div", or, [Object(a["createElementVNode"])("canvas", Ar, null, 512)], 512), Object(a["createElementVNode"])("div", cr, [Object(a["createElementVNode"])("button", {
                class: "w-1/3 clear bg-gray-light border-2 rounded-lg",
                onClick: t[0] || (t[0] = function() {
                    return c.clear && c.clear.apply(c, arguments)
                })
            }, " Знову "), Object(a["createElementVNode"])("button", {
                class: "w-1/3 save bg-gray-light border-2 rounded-lg",
                onClick: t[1] || (t[1] = function() {
                    return c.save && c.save.apply(c, arguments)
                })
            }, " Далі ")])])
        }
        var rr = n("90e2"),
            lr = {
                data: function() {
                    return {
                        signaturePad: void 0
                    }
                },
                mounted: function() {
                    var e = this.$refs["signature"];
                    e.width = .85 * window.innerWidth, e.height = e.width / 2, this.signaturePad = new rr["a"](e), window.s = this.signaturePad
                },
                methods: {
                    clear: function() {
                        this.signaturePad.clear()
                    },
                    save: function() {
                        var e = this;
                        if (!this.signaturePad.isEmpty()) {
                            console.log(this.signaturePad);
                            var t = this.signaturePad.toDataURL("image/png");
                            j.dispatch("uploadSignature", t).then((function() {
                                return j.dispatch("auth")
                            })).then((function() {
                                return e.$router.push("/app")
                            }))
                        }
                    }
                }
            };
        n("0583");
        const sr = i()(lr, [
            ["render", ir]
        ]);
        var dr = sr,
            mr = n("858e"),
            ur = n.n(mr),
            pr = n("8f79"),
            hr = n.n(pr),
            br = n("5020"),
            gr = n.n(br),
            xr = function(e) {
                return Object(a["pushScopeId"])("data-v-1575a1b4"), e = e(), Object(a["popScopeId"])(), e
            },
            Cr = {
                class: "service w-full flex flex-col"
            },
            fr = {
                class: "categoryChoose"
            },
            vr = {
                class: "mb-large label"
            },
            kr = Object(a["createTextVNode"])(" Категорії "),
            jr = xr((function() {
                return Object(a["createElementVNode"])("img", {
                    src: ur.a,
                    alt: "",
                    class: "icon"
                }, null, -1)
            })),
            Ir = Object(a["createTextVNode"])(" Плитками "),
            Er = [jr, Ir],
            Vr = xr((function() {
                return Object(a["createElementVNode"])("img", {
                    src: hr.a,
                    alt: "",
                    class: "icon"
                }, null, -1)
            })),
            Or = Object(a["createTextVNode"])(" Списком "),
            Gr = [Vr, Or],
            Mr = xr((function() {
                return Object(a["createElementVNode"])("div", {
                    class: "search"
                }, [Object(a["createElementVNode"])("img", {
                    src: gr.a,
                    alt: "",
                    class: "icon"
                }), Object(a["createTextVNode"])(" Пошук послуги ")], -1)
            })),
            Br = {
                class: "category"
            },
            yr = {
                key: 0,
                class: "categoryList grid grid-cols-1 divide-y-2 divide-dblue"
            },
            wr = {
                key: 0,
                class: "iconText"
            },
            Dr = {
                key: 1,
                class: "categoryGrid"
            },
            Zr = {
                key: 0,
                class: "iconText"
            },
            Rr = {
                class: "text"
            };

        function Nr(e, t, n, o, A, c) {
            return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Cr, [Object(a["createElementVNode"])("div", fr, [Object(a["createElementVNode"])("div", vr, [kr, A.column ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                key: 0,
                class: "type",
                onClick: t[0] || (t[0] = function() {
                    return c.switchView && c.switchView.apply(c, arguments)
                })
            }, Er)) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                key: 1,
                class: "type",
                onClick: t[1] || (t[1] = function() {
                    return c.switchView && c.switchView.apply(c, arguments)
                })
            }, Gr))]), Mr]), Object(a["createElementVNode"])("div", Br, [A.column ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", yr, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(A.data, (function(e) {
                return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                    class: "row",
                    key: e
                }, [e.iconText ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", wr, Object(a["toDisplayString"])(e.iconText), 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createTextVNode"])(" " + Object(a["toDisplayString"])(e.name), 1)])
            })), 128))])) : (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Dr, [(Object(a["openBlock"])(!0), Object(a["createElementBlock"])(a["Fragment"], null, Object(a["renderList"])(A.data, (function(e) {
                return Object(a["openBlock"])(), Object(a["createElementBlock"])("div", {
                    class: "item",
                    key: e
                }, [e.iconText ? (Object(a["openBlock"])(), Object(a["createElementBlock"])("div", Zr, Object(a["toDisplayString"])(e.iconText), 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createElementVNode"])("div", Rr, Object(a["toDisplayString"])(e.name), 1)])
            })), 128))]))])])
        }
        var Sr = {
            data: function() {
                return {
                    column: !0,
                    data: [{
                        iconText: "🏠",
                        name: "Допомога армії"
                    }, {
                        iconText: "😷",
                        name: "COVID-сертифікати"
                    }, {
                        iconText: "💬",
                        name: "Опитування"
                    }, {
                        iconText: "🏚",
                        name: "Пошкоджене майно"
                    }, {
                        iconText: "😇",
                        name: "єПідтримка"
                    }, { 
                        iconText: "📦",
                        name: "Оформлення допомоги для ВПО"
                    }, { 
                        iconText: "💼",
                        name: "Допомога по безробіттю"
                    }, {
                        iconText: "📺",
                        name: "Дія TV"
                    }, {
                        iconText: "📻",
                        name: "Дія Радіо"
                    }, {
                        iconText: "💼",
                        name: "Податки ФОП"
                    }, {
                        iconText: "📋",
                        name: "Довідки"
                    }, {
                        iconText: "🏛️",
                        name: "Виконавчі провадження"
                    }]
                }
            },
            methods: {
                switchView: function() {
                    this.column = !this.column
                }
            },
            mounted: function() {
                j.commit("changeLabel", "Послуги")
            }
        };
        n("7496");
        const Pr = i()(Sr, [
            ["render", Nr],
            ["__scopeId", "data-v-1575a1b4"]
        ]);
        var Lr = Pr,
            Wr = !1;

        function Yr(e, t, n) {
            j.commit("toDefaultColor"), j.state.colorBottom = "#e2ecf5", n()
        }

        function Ur(e, t, n) {
            Wr ? n() : window.matchMedia("(display-mode: standalone)").matches ? localStorage.getItem("token") ? j.state.auth ? n() : j.dispatch("auth").then((function() {
                n()
            })).catch((function(e) {
                console.log(e), n("/login")
            })) : n("/login") : n("/")
        }
        var Fr = [{
                path: "/",
                name: "Home",
                component: Rt,
                beforeEnter: function(e, t, n) {
                    window.matchMedia("(display-mode: standalone)").matches ? n("/app") : n()
                }
            }, {
                path: "/clearData",
                name: "Clear",
                beforeEnter: function(e, t, n) {
                    localStorage.clear(), n("/app")
                }
            }, {
                path: "/app",
                name: "App",
                component: ot,
                redirect: "/app/docs",
                beforeEnter: function(e, t, n) {
                    Ur(e, t, n)
                },
                children: [{
                    path: "docs",
                    component: gi,
                    beforeEnter: function(e, t, n) {
                        if (j.state.colorBottom = void 0, !Wr) return j.state.nosign ? (console.log("signature"), void n("/app/signature")) : void(0 != j.state.loaded ? n() : n("/loading"));
                        n()
                    }
                }, {
                    path: "service",
                    component: Lr,
                    beforeEnter: Yr
                }, {
                    path: "notification",
                    component: Vi,
                    beforeEnter: Yr
                }, {
                    path: "menu",
                    component: tr,
                    beforeEnter: Yr
                }, {
                    path: "signature",
                    component: dr,
                    beforeEnter: Yr
                }]
            }, {
                path: "/login",
                name: "Login",
                component: gt,
                beforeEnter: function(e, t, n) {
                    Wr ? n() : window.matchMedia("(display-mode: standalone)").matches ? localStorage.getItem("token") ? n("/app") : n() : n("/")
                }
            }, {
                path: "/loading",
                component: ln,
                beforeEnter: function(e, t, n) {
                    j.state.loaded ? n("/app/") : n()
                }
            }, {
                path: "/scanner",
                component: zt
            }, {
                path: "/:pathMatch(.*)*",
                component: bn
            }],
            Hr = Object(s["a"])({
                history: Object(s["b"])("/"),
                mode: "history",
                routes: Fr
            }),
            Tr = Hr,
            Qr = (n("a766"), n("9483"));
        Object(Qr["a"])("".concat("/", "service-worker.js"), {
            ready: function() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function() {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                console.log("New content is available; please refresh."), window.location.reload(!0)
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        var Xr = Object(a["createApp"])(l);
        Xr.config.performance = !0, Xr.use(Tr), Xr.mount("#app")
    },
    "5e25": function(e, t, n) {
        "use strict";
        n("67c5")
    },
    "67c5": function(e, t, n) {},
    "683c": function(e, t, n) {
        "use strict";
        n("4b92")
    },
    "6c8d": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "6d09": function(e, t, n) {},
    "6e21": function(e, t, n) {
        "use strict";
        n("cc44")
    },
    7496: function(e, t, n) {
        "use strict";
        n("a771")
    },
    "75e1": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "78a3": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "7c4b": function(e, t, n) {
        "use strict";
        n("27f2")
    },
    "7c50": function(e, t, n) {},
    "7e7d": function(e, t, n) {
        "use strict";
        n("a251")
    },
    "7eed": function(e, t, n) {},
    "7fce": function(e, t, n) {
        "use strict";
        n("6d09")
    },
    "819f": function(e, t, n) {},
    8204: function(e, t, n) {},
    "84b1": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA6CAYAAADvEjRHAAAAAXNSR0IArs4c6QAAAMRlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAATAAAAZodpAAQAAAABAAAAegAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciBQcm8gMi4zAAAABJAEAAIAAAAUAAAAsKABAAMAAAABAAEAAKACAAQAAAABAAAAQaADAAQAAAABAAAAOgAAAAAyMDIxOjExOjI3IDE4OjA1OjA4AE7sEpIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAOuaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj42NTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMTEtMjdUMTg6MTE6NDkrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTExLTI3VDE4OjA1OjA4KzAyOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIFBybyAyLjM8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cm4PaLAAAAeKSURBVGgF5VrNb9xEFJ+xvZvsuk2TcADaIiSaBKQKWtqom236QUuvgNreoFK5IsEBcWgPoHJAQghR8U/0zD/QG/3IpgGpoEqorUBILfTSNs3uJs1mbfOe7XHG3nlee9frRMRS4pk37+P3nt+OZ56Hsw26Fn8+MqYXrftgftyH8MRq6ROjR689zRuSlrdBYU8fsi5Be1zXWgz/3LZHEyy53XluliRDz+YqkzrX7jiMFcpDT9yR5dVxBmDWLMfeu2Omdk9iH3hzQzJB49r3GICCvsI03nb/sI00HBu41xEDuQehPl89Dhg+YOBy0WgGcLw2hAHGfJ5gbNCNXIPgOJjx7DI6VTSWGed24B+2keZfl31e0R/oPdcg1G/NnIcEOMC5JTscOOgFxsIkOeDyBiODbeQ2MToLB8sNq3gX3Nk1XFhihv5c6VnbGmbP10Zw7OE2vTXFp38J0kMpkAExt0xo2MULgHeXpq2RAUB/MDjIg7y+DLYHeuWSCc1rszudgn0Ppr1yqfgU1gWuk6Rjll1gK60xnECW+Zo2aR65/g/JnMFALplgFexvMQCGvto1AOgTBgl5UQZlM/AzVsXAM6F5c+aArfEFmO04Low0mBSTXLajM1xAMcYdzXamzercr0nkeuExehFKIwMBwFciLxq4MPICMDT9J2utuWuCkKpigbPVhddcGvKiTKtd5rbOfwDiiRBzhp2B/hyWatXTgPU4ZzYrSAuj8rA6AaN0lEFZ+F284+vK0PV1VQMLArwS4bmy79BUsYDOrD/58rDabJSOMiiLF+pCnW4n439qNBkYaVqFT0HNJO4NcF8gX+USkQkKuthfoC5fp6wqk/ZAgvDsRnUcVshfIcKhQqMDqKlwFpkoutCBOlF3h8I+CQMJgqY5lwDXmFQrCMGMpr0YpOiSnjFftxDJ5J55EJZqh6Y4558gOvEEo0ijE6AYp+iyLtSNNoRMFvfMg8C5EaoVqEBST5yiow4xt8D0WkAbKr290jINQn1u9gRznPejtYIoOOqJU3QhH9QcwIZrSwz0ec8sCLD/1xi3cVEDixx4JUq1gihGagKk6ELeqzn4hRiw5doUg33cMwtCvXb4POB426sVhF+JUXzlktosRZflcRWJNtCWb1Me7qmtRpNS1aPbb5lcc75BsSF3Zbi+MFKpotKeood1OL4NWECBTbQdHk/fyyQI5op5ARZ3O73dn7pYIkOjJkCKLstiG2sO7nYcbLq2owwp+30HYflGdRfn7Au0WzQ6F0YqPNQTp+gqHcIW2kYMKp6ktL6D0NZZqloBAqMmQIquckauOSAGFU9SWl9BaM5VDsIu4Jz3SkyWBQiMSnuKTjnjZYNbwj6HWCi+bvS+gmBzraNW0M0gjqfZQMXpEzUH4OE+ljh2cqznINTnZ86A1mP47pZrBaQlaYB64hRdEu1oujUHb01yzMfUwdON0FMQnDt7i1At82oFbuEj/pUYBUFNgBQ9Ki/33ZqD+1oGKmBysckMCdo9BaHZ2I61ggmxnk9gJ8RCOUvRQ8KKjlRzmPCxKbhoUuogwA7uBZiKvkSV1C6RNueNmMSKkaJ304fjAgtiQ4xJZARP6iBwZlwCYbJWIBTH3aknTtHjdIkxuebgYxRDXe+pgrB0a/Z1+OHF1gq6WgQGao9A0ZPoRB6RDYjRw5pMMlUQNNvGfbwh/QaTWYlwUU+cokfEya40Rxk+VpJXHkgcBNixnYR3wHsQZXerLCtJ26acpehp9IuaA2JFzElkE318wX17Y96GhRHvWitIYrRgwIvt9p4krKl5RM2h1d4Gsg7WHA7C/mL9IIRCY6JMqNeqH0MA9iWpFShs5E6Sag77PezxENQfACQZ3K+bz008SPVy3LkCSWRTNKVzDv82h5uTL+37bf1sUARh10wwV8oXMQBJawUR/RvWDWoOgN33gcQSmwnLc5XdsDG5C5NMKcm5AtLKBg1I5xxWNMeeKs/UHqigxGZCm3GsFZSkqKp09ES7+/caO/P5IzZy+C/3D9tIy/IS2Ys+oC+UbjITmrXZaZvZ8zDDpjpXQBmS6ehs5aMHbLEenrRHt2usdmU3m3o1u++uoXMOTDtkVq7DWYnwRWYCBKCnWkFYvbp38cfHHQFATgwKjmV5hWoOnk8d6pVBqM8dPgucR3upFXRYUBCu1uiSfNyYQlUiklRzOOr7FpLrCIK7H+dOz7WCkPZN0gnVHMC3aM2hIwjN5o7PAPseaR2euSunKiVSZ9wYKZRgQNrv7PF9DKRCEyPuwznX78P2YLRUXITavnsEP2DOqpHnxChjtuwiHA0cxdX/ouNYEyOVeXcCCmUCZ/rXGABpby7ryKyNsz++BU6fNNl2U3P/sJ31myEKOPALfHR99RmCTFhaqL4Bn/h+B7rhHbVrR3X8L/q2Y/hHA1kbTgm+OTJ9848gEzSLZVIr2OyRkuY6w/cZD4Ux1pivvgtbzqtYKzCHHsd+Vt/sTibB5zgaa65iGZKDr+yUjrWC1sNXfgLKi1iQMPTBTIZJwOXFwzkspOHCiRKu/bxRq34IpCvY26oXlOIc/Ii4ulUDsMV938KPXeX6f7cZbH/DMFJEAAAAAElFTkSuQmCC"
    },
    "858e": function(e, t, n) {
        e.exports = n.p + "img/grid_service.d733889e.png"
    },
    8878: function(e, t, n) {
        "use strict";
        n("c83d")
    },
    "89b9": function(e, t, n) {},
    "8eb4": function(e, t, n) {},
    "8f79": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    9417: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "94c3": function(e, t, n) {
        "use strict";
        n("054a")
    },
    a251: function(e, t, n) {},
    a766: function(e, t, n) {},
    a771: function(e, t, n) {},
    ae0c: function(e) {
        e.exports = JSON.parse('{"v":"5.6.0","fr":57.6439971923828,"ip":0,"op":171.999991622543,"w":750,"h":1334,"nm":"Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[897,667,0],"to":[-53,0,0],"ti":[53,0,0]},{"t":111.999994544911,"s":[579,667,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[576.383,221.906],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.945097979377,0.352940996955,0.141176006841,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.698038976333,0.282353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-106.809,-8.047],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"logo.mincifra Outlines","cl":"mincifra","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":88,"s":[96.5,667,0],"to":[45.667,0,0],"ti":[-45.667,0,0]},{"t":111.999994544911,"s":[370.5,667,0]}],"ix":2},"a":{"a":0,"k":[546,120,0],"ix":1},"s":{"a":0,"k":[69.048,69.048,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[120,118.866],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[120,120],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.832,-16.318],[-8.16,7.181],[-8.16,-16.318],[-14.622,-16.318],[-14.622,16.319],[-7.831,16.319],[8.16,-7.397],[8.16,16.319],[14.622,16.319],[14.622,-16.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[520.532,208.232],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.996,-16.318],[7.996,-3.263],[-7.996,-3.263],[-7.996,-16.318],[-14.567,-16.318],[-14.567,16.319],[-7.996,16.319],[-7.996,2.611],[7.996,2.611],[7.996,16.319],[14.567,16.319],[14.567,-16.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[481.047,208.232],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.286,21.867],[3.286,-10.771],[-3.285,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.082,-15.34],[9.201,-15.34],[9.201,-21.867],[2.082,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.201,-15.34],[-2.082,-15.34],[-2.082,-21.867],[-9.201,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[452.35,202.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":5,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.039,0],[0,3.046],[-4.162,0.654],[-1.205,0.761],[0,0]],"o":[[-3.395,0],[0,-4.243],[3.177,-0.544],[0,0],[0,4.134]],"v":[[-3.615,11.531],[-8.981,6.854],[-0.548,1.305],[5.805,-0.326],[5.805,3.917]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.886,0],[3.833,-3.59],[0,0],[-3.724,0],[0,-2.611],[4.928,-0.653],[0,-8.05],[-6.462,0],[-2.3,3.372],[-4.052,0],[-0.329,0.109],[0,0]],"o":[[-1.424,0],[0,0],[0,-6.745],[-5.695,0],[0,0],[2.629,-2.719],[4.162,0],[0,2.502],[-6.353,0.979],[0,5.658],[4.819,0],[0.438,3.807],[1.096,0],[0,0],[0,0]],"v":[[14.239,10.661],[12.158,8.594],[12.158,-6.092],[-0.548,-16.863],[-14.786,-11.314],[-10.734,-7.072],[-0.876,-11.423],[6.024,-7.072],[-1.314,-3.482],[-15.444,7.288],[-4.71,16.863],[6.791,11.314],[13.143,16.536],[15.444,16.318],[15.444,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[425.735,208.231],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.852],[-5.805,0],[0,-6.855]],"o":[[-5.805,0],[0,-6.855],[5.805,0],[0,6.852]],"v":[[-0.219,6.147],[-9.748,-5.166],[-0.219,-16.482],[9.2,-5.166]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.007]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.434,0],[0,-10.228]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.799],[1.533,11.695],[15.882,-5.166]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[390.138,213.399],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0.979],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.053,0],[0,0],[0,0]],"o":[[-0.985,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,3.916],[0,0],[0,0],[0,0]],"v":[[13.089,15.992],[11.446,14.36],[11.446,2.392],[5.421,2.392],[13.746,-10.879],[6.736,-10.879],[-1.041,2.067],[-7.722,2.067],[-7.722,-21.758],[-14.294,-21.758],[-14.294,21.758],[-7.722,21.758],[-7.722,8.05],[4.983,8.05],[4.983,15.775],[11.336,21.758],[14.293,21.758],[14.293,15.992]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[352.295,202.792],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.738,0],[0,2.612],[-0.767,0.87],[0,0],[0,0]],"o":[[-2.629,0],[0,-1.195],[0,0],[0,0],[-1.315,3.372]],"v":[[-4.381,15.176],[-8.653,10.823],[-7.448,7.67],[2.191,7.67],[1.315,10.172]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-3.482],[-6.243,0],[-2.519,6.854],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-2.628,1.958],[0,5.984],[5.805,0],[0,0],[0,0]],"v":[[12.158,-20.942],[4.053,2.447],[0.657,2.447],[-11.719,-20.942],[-19.496,-20.942],[-6.462,2.447],[-10.953,2.447],[-15.005,10.933],[-4.6,20.942],[7.886,10.498],[19.496,-20.942]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[311.496,204.152],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.29,21.867],[3.29,21.867],[3.29,-10.771],[-3.29,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.08,-15.34],[9.2,-15.34],[9.2,-21.867],[2.08,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.2,-15.34],[-2.08,-15.34],[-2.08,-21.867],[-9.2,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1082.8,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":5,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.285,21.867],[3.285,-10.771],[-3.285,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.835,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":4,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.21,6.745],[12.21,-20.127],[5.64,-20.127],[5.64,6.745],[-9.91,6.745],[-9.91,-20.127],[-16.48,-20.127],[-16.48,12.511],[10.24,12.511],[10.24,20.127],[16.48,20.127],[16.48,6.745]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1037.29,128.488],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.038,0],[0,3.047],[-4.161,0.653],[-1.21,0.762],[0,0]],"o":[[-3.396,0],[0,-4.242],[3.175,-0.544],[0,0],[0,4.135]],"v":[[-3.615,11.531],[-8.982,6.854],[-0.55,1.305],[5.805,-0.327],[5.805,3.916]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.885,0],[3.833,-3.591],[0,0],[-3.724,0],[0,-2.611],[4.929,-0.652],[0,-8.051],[-6.463,0],[-2.299,3.372],[-4.06,0],[-0.331,0.109],[0,0]],"o":[[-1.42,0],[0,0],[0,-6.745],[-5.694,0],[0,0],[2.629,-2.719],[4.161,0],[0,2.503],[-6.353,0.98],[0,5.657],[4.82,0],[0.441,3.808],[1.09,0],[0,0],[0,0]],"v":[[14.235,10.661],[12.155,8.594],[12.155,-6.093],[-0.55,-16.863],[-14.787,-11.314],[-10.735,-7.072],[-0.877,-11.423],[6.025,-7.072],[-1.315,-3.482],[-15.445,7.29],[-4.711,16.863],[6.784,11.314],[13.145,16.536],[15.445,16.318],[15.445,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[998.025,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[19.386,-16.319],[9.419,-16.319],[0.109,9.03],[-9.311,-16.319],[-19.387,-16.319],[-19.387,16.319],[-13.035,16.319],[-13.035,-9.465],[-3.507,16.319],[3.504,16.319],[13.032,-9.465],[13.032,16.319],[19.386,16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[955.856,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.806,0],[0,-6.854]],"o":[[-5.806,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.652,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.52,3.155],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.187,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.311,22.03],[-9.311,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[912.701,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.023,0],[0,6.853],[-6.024,0],[0,-6.854]],"o":[[-6.024,0],[0,-6.854],[6.023,0],[0,6.853]],"v":[[0.001,11.314],[-9.966,0.001],[0.001,-11.314],[9.968,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.076,0],[0,-10.009]],"o":[[9.856,0],[0,-10.227],[-9.858,0],[0,10.226]],"v":[[0.001,16.863],[16.648,0.001],[0.001,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[872.284,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":4,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.819,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.819,0],[0,6.853]],"v":[[10.899,11.314],[2.903,0.001],[10.899,-11.314],[18.894,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.82,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.82,0],[0,6.853]],"v":[[-10.898,11.314],[-18.893,0.001],[-10.898,-11.314],[-3.012,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[7.886,0],[2.19,-2.937],[0,0],[0,0],[0,0],[3.834,0],[0,-10.009],[-7.887,0],[-2.191,2.938],[0,0],[0,0],[0,0],[-3.944,0],[0,10.008]],"o":[[-3.833,0],[0,0],[0,0],[0,0],[-2.191,-2.829],[-7.667,0],[0,10.117],[3.834,0],[0,0],[0,0],[0,0],[2.19,2.829],[7.557,0],[0,-10.118]],"v":[[12.542,-16.645],[3.232,-12.185],[3.232,-27.198],[-3.34,-27.198],[-3.34,-12.402],[-12.54,-16.645],[-25.575,0.001],[-12.54,16.646],[-3.34,12.185],[-3.34,27.198],[3.232,27.198],[3.232,12.294],[12.542,16.646],[25.575,0.001]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[824.694,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":5,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.863,6.201],[0,0],[3.943,0],[0,6.853],[-6.023,0],[-1.424,-3.808],[0,0],[7.119,0],[0,-10.009]],"o":[[7.011,0],[0,0],[-1.424,3.808],[-6.023,0],[0,-6.854],[4.053,0],[0,0],[-1.863,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.554,7.072],[9.311,5.114],[0.876,11.314],[-8.872,0.001],[0.876,-11.314],[9.311,-5.113],[15.554,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[779.514,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.995,-16.319],[7.995,-3.264],[-7.997,-3.264],[-7.997,-16.319],[-14.567,-16.319],[-14.567,16.319],[-7.997,16.319],[-7.997,2.611],[7.995,2.611],[7.995,16.319],[14.566,16.319],[14.566,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[741.507,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"bm":0,"ix":19,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.039,0],[0,3.047],[-4.162,0.653],[-1.205,0.762],[0,0]],"o":[[-3.395,0],[0,-4.242],[3.176,-0.544],[0,0],[0,4.135]],"v":[[-3.614,11.531],[-8.981,6.854],[-0.547,1.305],[5.806,-0.327],[5.806,3.916]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,1.415],[0,0],[7.886,0],[3.834,-3.591],[0,0],[-3.724,0],[0,-2.611],[4.929,-0.652],[0,-8.051],[-6.462,0],[-2.301,3.372],[-4.052,0],[-0.328,0.109],[0,0]],"o":[[-1.424,0],[0,0],[0,-6.745],[-5.695,0],[0,0],[2.629,-2.719],[4.163,0],[0,2.503],[-6.352,0.98],[0,5.657],[4.819,0],[0.438,3.808],[1.096,0],[0,0],[0,0]],"v":[[14.24,10.661],[12.158,8.594],[12.158,-6.093],[-0.547,-16.863],[-14.786,-11.314],[-10.733,-7.072],[-0.876,-11.423],[6.025,-7.072],[-1.314,-3.482],[-15.443,7.29],[-4.709,16.863],[6.792,11.314],[13.144,16.536],[15.444,16.318],[15.444,10.661]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[704.157,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":4,"cix":2,"bm":0,"ix":20,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.71,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.435,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[668.561,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":4,"cix":2,"bm":0,"ix":21,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.286,-10.553],[-3.286,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[631.321,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"bm":0,"ix":22,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.286,21.867],[3.284,21.867],[3.284,-10.771],[-3.286,-10.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.081,-15.34],[9.201,-15.34],[9.201,-21.867],[2.081,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.201,-15.34],[-2.081,-15.34],[-2.081,-21.867],[-9.201,-21.867]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[588.604,119.132],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":5,"cix":2,"bm":0,"ix":23,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.023,0],[0,6.853],[-6.025,0],[0,-6.854]],"o":[[-6.025,0],[0,-6.854],[6.023,0],[0,6.853]],"v":[[0.001,11.314],[-9.968,0.001],[0.001,-11.314],[9.968,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.075,0],[0,-10.009]],"o":[[9.856,0],[0,-10.227],[-9.858,0],[0,10.226]],"v":[[0.001,16.863],[16.648,0.001],[0.001,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[560.236,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":4,"cix":2,"bm":0,"ix":24,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.504,0],[0,0],[0,0],[0,0],[0,-2.829]],"o":[[0,0],[0,0],[0,0],[3.724,0],[0,2.827]],"v":[[1.589,11.097],[-7.284,11.097],[-7.284,2.068],[1.149,2.068],[7.064,6.637]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-2.611],[3.724,0],[0,0]],"o":[[0,0],[3.067,0],[0,3.045],[0,0],[0,0]],"v":[[-7.284,-11.096],[1.368,-11.096],[6.297,-7.071],[1.04,-2.829],[-7.284,-2.829]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[3.614,1.304],[0,3.59],[7.229,0],[0,0],[0,0],[0,0],[0,5.875]],"o":[[2.957,-1.306],[0,-5.875],[0,0],[0,0],[0,0],[7.119,0],[0,-3.916]],"v":[[8.05,-0.434],[12.759,-7.832],[1.04,-16.319],[-13.637,-16.319],[-13.637,16.319],[2.245,16.319],[13.636,7.398]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[524.476,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":5,"cix":2,"bm":0,"ix":25,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.025,0],[0,6.853],[-6.024,0],[0,-6.854]],"o":[[-6.024,0],[0,-6.854],[6.025,0],[0,6.853]],"v":[[0,11.314],[-9.967,0.001],[0,-11.314],[9.967,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.076,0],[0,10.008],[10.077,0],[0,-10.009]],"o":[[9.858,0],[0,-10.227],[-9.857,0],[0,10.226]],"v":[[0,16.863],[16.648,0.001],[0,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[486.305,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":4,"cix":2,"bm":0,"ix":26,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.853],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.853]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.629,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.49,0],[0,10.008]],"o":[[-4.709,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.155],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.8],[1.533,11.695],[15.882,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[448.298,129.848],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":4,"cix":2,"bm":0,"ix":27,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.819,0],[0,6.853],[-4.929,0],[0,-6.854]],"o":[[-4.929,0],[0,-6.854],[4.819,0],[0,6.853]],"v":[[10.898,11.314],[2.902,0.001],[10.898,-11.314],[18.893,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.82,0],[0,6.853],[-4.928,0],[0,-6.854]],"o":[[-4.928,0],[0,-6.854],[4.82,0],[0,6.853]],"v":[[-10.899,11.314],[-18.894,0.001],[-10.899,-11.314],[-3.012,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[7.886,0],[2.19,-2.937],[0,0],[0,0],[0,0],[3.833,0],[0,-10.009],[-7.887,0],[-2.191,2.938],[0,0],[0,0],[0,0],[-3.943,0],[0,10.008]],"o":[[-3.834,0],[0,0],[0,0],[0,0],[-2.191,-2.829],[-7.667,0],[0,10.117],[3.833,0],[0,0],[0,0],[0,0],[2.19,2.829],[7.557,0],[0,-10.118]],"v":[[12.541,-16.645],[3.231,-12.185],[3.231,-27.198],[-3.341,-27.198],[-3.341,-12.402],[-12.541,-16.645],[-25.575,0.001],[-12.541,16.646],[-3.341,12.185],[-3.341,27.198],[3.231,27.198],[3.231,12.294],[12.541,16.646],[25.575,0.001]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[399.065,124.681],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":5,"cix":2,"bm":0,"ix":28,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.832,-16.319],[-8.16,7.182],[-8.16,-16.319],[-14.622,-16.319],[-14.622,16.319],[-7.832,16.319],[8.159,-7.398],[8.159,16.319],[14.622,16.319],[14.622,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[350.981,124.68],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"bm":0,"ix":29,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.213,6.745],[12.213,-20.127],[5.641,-20.127],[5.641,6.745],[-9.912,6.745],[-9.912,-20.127],[-16.484,-20.127],[-16.484,12.511],[10.241,12.511],[10.241,20.127],[16.484,20.127],[16.484,6.745]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[312.646,128.488],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"bm":0,"ix":30,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.024,0],[0,6.854],[-6.023,0],[0,-6.854]],"o":[[-6.023,0],[0,-6.854],[6.024,0],[0,6.854]],"v":[[0,11.314],[-9.968,0.001],[0,-11.314],[9.967,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.077,0],[0,10.008],[10.077,0],[0,-10.009]],"o":[[9.858,0],[0,-10.227],[-9.857,0],[0,10.226]],"v":[[0,16.863],[16.647,0.001],[0,-16.863],[-16.648,0.001]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[690.138,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":4,"cix":2,"bm":0,"ix":31,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.505,0],[0,0],[0,0],[0,0],[0,-2.829]],"o":[[0,0],[0,0],[0,0],[3.723,0],[0,2.828]],"v":[[1.589,11.096],[-7.283,11.096],[-7.283,2.066],[1.152,2.066],[7.066,6.637]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-2.611],[3.724,0],[0,0]],"o":[[0,0],[3.067,0],[0,3.046],[0,0],[0,0]],"v":[[-7.283,-11.096],[1.37,-11.096],[6.299,-7.072],[1.041,-2.828],[-7.283,-2.828]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[3.615,1.306],[0,3.591],[7.23,0],[0,0],[0,0],[0,0],[0,5.875]],"o":[[2.957,-1.305],[0,-5.874],[0,0],[0,0],[0,0],[7.12,0],[0,-3.916]],"v":[[8.051,-0.436],[12.761,-7.833],[1.041,-16.318],[-13.636,-16.318],[-13.636,16.318],[2.246,16.318],[13.637,7.398]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[654.376,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":5,"cix":2,"bm":0,"ix":32,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.286,-10.553],[-3.286,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[619.382,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"bm":0,"ix":33,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.862,6.201],[0,0],[3.943,0],[0,6.854],[-6.024,0],[-1.424,-3.807],[0,0],[7.12,0],[0,-10.009]],"o":[[7.01,0],[0,0],[-1.424,3.808],[-6.024,0],[0,-6.854],[4.053,0],[0,0],[-1.862,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.553,7.072],[9.31,5.114],[0.876,11.315],[-8.872,0.001],[0.876,-11.314],[9.31,-5.114],[15.553,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[586.414,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"bm":0,"ix":34,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[5.805,0],[0,6.854],[-5.805,0],[0,-6.854]],"o":[[-5.805,0],[0,-6.854],[5.805,0],[0,6.854]],"v":[[-0.219,6.147],[-9.748,-5.167],[-0.219,-16.481],[9.2,-5.167]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.653,0],[2.628,-3.59],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.491,0],[0,10.008]],"o":[[-4.71,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.519,3.156],[8.434,0],[0,-10.227]],"v":[[1.533,-22.03],[-9.748,-16.373],[-10.186,-21.486],[-15.882,-21.486],[-15.882,22.03],[-9.31,22.03],[-9.31,6.799],[1.533,11.695],[15.881,-5.167]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[549.503,46.297],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":4,"cix":2,"bm":0,"ix":35,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.148,0],[-0.877,-5.33],[0,0]],"o":[[4.929,0],[0,0],[0.986,-5.221]],"v":[[0.164,-11.423],[9.365,-2.938],[-9.365,-2.938]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.766,5.657],[0,0],[0,0.762],[9.639,0],[0,-10.009],[-10.843,0],[-2.739,3.263],[0,0],[4.819,0]],"o":[[0,0],[0.219,-0.761],[0,-10.226],[-9.638,0],[0,9.682],[6.9,0],[0,0],[-1.862,2.394],[-5.805,0]],"v":[[-9.474,2.067],[15.827,2.067],[16.046,0],[0.164,-16.862],[-16.046,0],[0.712,16.862],[14.951,10.988],[10.46,7.071],[0.712,11.314]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[509.908,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 36","np":4,"cix":2,"bm":0,"ix":36,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[15.115,-16.319],[-15.115,-16.319],[-15.115,-10.553],[-3.285,-10.553],[-3.285,16.319],[3.286,16.319],[3.286,-10.553],[15.115,-10.553]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[476.556,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 37","np":2,"cix":2,"bm":0,"ix":37,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.748,0],[-1.862,6.201],[0,0],[3.943,0],[0,6.854],[-6.024,0],[-1.424,-3.807],[0,0],[7.12,0],[0,-10.009]],"o":[[7.01,0],[0,0],[-1.424,3.808],[-6.024,0],[0,-6.854],[4.053,0],[0,0],[-1.862,-6.201],[-9.748,0],[0,10.008]],"v":[[0.876,16.863],[15.553,7.072],[9.31,5.114],[0.876,11.315],[-8.872,0.001],[0.876,-11.314],[9.31,-5.114],[15.553,-7.072],[0.876,-16.863],[-15.553,0.001]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[443.588,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 38","np":2,"cix":2,"bm":0,"ix":38,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.285,21.867],[3.286,21.867],[3.286,-10.77],[-3.285,-10.77]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[416.315,35.582],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 39","np":4,"cix":2,"bm":0,"ix":39,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[7.996,-16.319],[7.996,-3.264],[-7.996,-3.264],[-7.996,-16.319],[-14.568,-16.319],[-14.568,16.319],[-7.996,16.319],[-7.996,2.611],[7.996,2.611],[7.996,16.319],[14.568,16.319],[14.568,-16.319]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[387.619,41.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 40","np":2,"cix":2,"bm":0,"ix":40,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.287,21.867],[3.285,21.867],[3.285,-10.77],[-3.287,-10.77]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.615,-15.34],[3.615,-15.34],[3.615,-21.867],[-3.615,-21.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[358.923,35.582],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 41","np":4,"cix":2,"bm":0,"ix":41,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[23.22,-20.67],[12.705,-20.67],[0.109,12.62],[-12.596,-20.67],[-23.221,-20.67],[-23.221,20.67],[-16.539,20.67],[-16.539,-12.837],[-3.834,20.67],[3.833,20.67],[16.538,-12.837],[16.538,20.67],[23.22,20.67]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[320.478,36.778],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 42","np":2,"cix":2,"bm":0,"ix":42,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Logo diia Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[375,667,0],"to":[-16.667,0,0],"ti":[16.667,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":45,"s":[275,667,0],"to":[0,0,0],"ti":[0,0,0]},{"t":59.9999970776311,"s":[275,667,0]}],"ix":2},"a":{"a":0,"k":[1354.061,540,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":88,"s":[25.692,25.692,100]},{"t":94.9999953729159,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-13.432,0],[0,11.852],[13.169,0],[0,-12.378]],"o":[[13.433,0],[0,-12.378],[-13.168,0],[0,11.852]],"v":[[37.531,-81.119],[56.493,-97.974],[37.531,-115.357],[18.568,-97.974]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-16.855,0],[-5.794,3.686],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.214,15.275],[5.268,0],[0,0],[0,0],[0,0]],"v":[[19.094,55.834],[16.724,54.255],[48.065,-55.834],[-15.408,-55.834],[-22.255,-31.341],[14.617,-31.604],[-9.349,52.411],[13.563,81.908],[29.892,76.904],[73.086,47.67],[59.917,28.18]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[8.164,-12.114],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,34.501],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-62.024,-87.177],[-169.479,-87.177],[-169.479,-19.49],[-183.701,53.99],[-196.607,53.99],[-196.607,115.356],[-170.005,115.356],[-170.005,79.01],[-69.399,79.01],[-69.399,115.356],[-42.797,115.356],[-42.797,53.99],[-62.024,53.99]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,33.448],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[7.11,-12.378]],"v":[[-142.615,-20.544],[-142.615,-61.102],[-89.942,-61.102],[-89.942,53.99],[-156.047,53.99]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-25.021],[-17.909,-5.266],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[-26.601,0],[0,19.752],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[196.606,-55.834],[133.925,-55.834],[89.151,-13.432],[118.385,26.599],[84.147,78.748],[114.434,78.748],[145.25,31.341],[169.479,31.341],[169.479,78.748],[196.606,78.748]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,12.115],[-12.379,0],[0,0],[0,0]],"o":[[-12.379,0],[0,-11.852],[0,0],[0,0],[0,0]],"v":[[137.085,7.901],[116.542,-12.378],[137.085,-32.395],[169.479,-32.395],[169.479,7.901]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1344.447,531.836],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":8,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[181.989,0],[42.402,42.403],[0,181.989],[-42.403,42.666],[-181.989,0],[-42.402,-42.403],[0,-181.989],[42.666,-42.666]],"o":[[-181.989,0],[-42.667,-42.666],[0,-181.989],[42.402,-42.403],[181.989,0],[42.666,42.666],[0,181.989],[-42.402,42.403]],"v":[[0,325],[-273.379,273.379],[-325,0],[-273.379,-273.379],[0,-325],[273.379,-273.379],[325,0],[273.379,273.379]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1354.061,540],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"coat in arms Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[375.091,667.103,0],"to":[16.667,0,0],"ti":[-16.667,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"t":45,"s":[475.091,667.103,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":88,"s":[475.091,667.103,0],"to":[-64.5,0,0],"ti":[64.5,0,0]},{"t":111.999994544911,"s":[88.091,667.103,0]}],"ix":2},"a":{"a":0,"k":[1500,1500,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[36.459,0],[13.238,-13.241],[0,-36.46],[-13.239,-13.24],[-36.462,0],[-13.241,13.239],[0,36.462],[13.236,13.236]],"o":[[-36.462,0],[-13.239,13.236],[0,36.462],[13.238,13.239],[36.459,0],[13.236,-13.24],[0,-36.46],[-13.241,-13.241]],"v":[[0,-83.207],[-69.967,-69.966],[-83.206,-0.001],[-69.967,69.968],[0,83.207],[69.97,69.968],[83.206,-0.001],[69.97,-69.966]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-35.883,0],[-12.474,-12.471],[0,-35.881],[12.475,-12.474],[35.883,0],[12.471,12.472],[0,35.883],[-12.476,12.476]],"o":[[35.883,0],[12.475,12.476],[0,35.883],[-12.474,12.472],[-35.883,0],[-12.476,-12.474],[0,-35.881],[12.471,-12.471]],"v":[[0,-80.595],[68.121,-68.124],[80.596,-0.001],[68.121,68.122],[0,80.594],[-68.12,68.122],[-80.596,-0.001],[-68.12,-68.124]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1499.909,1499.897],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.632,-6.107],[0,0],[-0.843,-3.157]],"o":[[0,0],[-3.789,4.423],[0,0],[2.948,1.686],[0,0]],"v":[[29.267,5.683],[29.267,-37.477],[22.107,-21.475],[19.791,-1.897],[25.898,5.683]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[4,-1.26],[0,0],[0,-2.947]],"o":[[0,0],[0,0],[-1.052,4.002],[0,0],[0.629,2.734],[0,0]],"v":[[29.267,29.053],[29.267,11.578],[25.898,11.578],[17.687,19.998],[14.951,20.633],[16.002,29.053]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-1.052,4.633],[0,0],[0,0]],"o":[[0,0],[0,0],[3.159,-3.582]],"v":[[9.474,34.947],[2.948,34.947],[2.948,47.371]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0.632,2.314],[0,-3.579]],"o":[[0,-2.527],[-3.577,0.419],[0,0]],"v":[[10.316,29.053],[9.264,21.896],[2.948,29.053]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-2.526,0.63],[1.473,5.055],[2.525,-4.634],[-1.686,-1.895]],"o":[[-2.526,-4.634],[-1.474,5.055],[2.525,0.63],[1.685,-1.895]],"v":[[6.317,16.632],[0.002,2.103],[-6.314,16.632],[0.002,20.842]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-3.159,-3.582]],"o":[[0,0],[1.052,4.633],[0,0]],"v":[[-2.945,34.947],[-9.474,34.947],[-2.945,47.371]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[3.581,0.419],[0,-2.527]],"o":[[0,-3.579],[-0.63,2.314],[0,0]],"v":[[-2.945,29.053],[-9.263,21.896],[-10.316,29.053]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[-0.632,2.734],[0,0],[1.052,4.002],[0,0],[0,0]],"o":[[0,-2.947],[0,0],[-4,-1.26],[0,0],[0,0],[0,0]],"v":[[-16,29.053],[-14.948,20.633],[-17.684,19.998],[-25.893,11.578],[-29.264,11.578],[-29.264,29.053]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[-2.947,1.686],[0,0],[3.791,4.423],[0,0]],"o":[[0.841,-3.157],[0,0],[-0.844,-6.107],[0,0],[0,0]],"v":[[-25.893,5.683],[-19.789,-1.897],[-22.104,-21.475],[-29.264,-37.477],[-29.264,5.683]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[1.473,1.051],[1.474,8.002],[0,0],[0,0],[-0.843,-12],[0,0],[0,0],[0,-2.947],[-2.737,-0.632],[0,0],[0,10.737],[0.211,9.894],[-2.738,3.159],[0,-4.423],[0,-9.686],[-5.894,-11.158],[0,0],[0,2.739],[3.158,0],[0,0],[0,0],[-10.525,5.264],[0,0],[0,0],[6.316,-4.423],[0.841,-1.685]],"o":[[-6.107,-4.632],[0,0],[0,0],[10.528,5.264],[0,0],[0,0],[-3.157,0],[0,2.739],[0,0],[5.895,-11.158],[0,-9.686],[0,-4.423],[2.737,3.159],[0,9.894],[0,10.737],[0,0],[2.737,-0.632],[0,-2.947],[0,0],[0,0],[1.473,-12],[0,0],[0,0],[-1.473,8.002],[-1.473,1.051],[-0.842,-1.685]],"v":[[-3.578,54.529],[-15.579,34.947],[-35.159,34.947],[-35.159,-49.689],[-16.209,-20.845],[-13.261,2.949],[-14.736,2.737],[-20.631,8.63],[-15.788,14.315],[-12.209,15.158],[-2.945,-17.686],[-4.42,-46.95],[0.002,-58.529],[4.422,-46.95],[2.948,-17.686],[12.211,15.158],[15.791,14.315],[20.634,8.63],[14.74,2.737],[13.266,2.949],[16.214,-20.845],[35.16,-49.689],[35.16,34.947],[15.58,34.947],[3.58,54.529],[0.002,58.529]],"c":true},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1500.777,1502.708],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":12,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":951.999953631747,"st":0,"bm":0}],"markers":[]}')
    },
    b387: function(e, t, n) {
        "use strict";
        n("bfe0")
    },
    b812: function(e, t, n) {},
    b91d: function(e, t, n) {},
    baea: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    bc73: function(e, t, n) {},
    bcfa: function(e, t, n) {
        "use strict";
        n("1853")
    },
    be4a: function(e, t, n) {
        e.exports = n.p + "img/verify.cd1063c1.png"
    },
    bfe0: function(e, t, n) {},
    c0b7: function(e, t, n) {
        "use strict";
        n("3b74")
    },
    c83d: function(e, t, n) {},
    cc44: function(e, t, n) {},
    d07a: function(e, t, n) {
        "use strict";
        n("0bd1")
    },
    d179: function(e, t, n) {},
    d380: function(e, t, n) {
        "use strict";
        n("8eb4")
    },
    de2b: function(e, t, n) {
        "use strict";
        n("89b9")
    },
    def5: function(e, t, n) {
        "use strict";
        n("23fd")
    },
    e343: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    e359: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAAAXNSR0IArs4c6QAAAMRlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAATAAAAZodpAAQAAAABAAAAegAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciBQcm8gMi4zAAAABJAEAAIAAAAUAAAAsKABAAMAAAABAAEAAKACAAQAAAABAAAAQqADAAQAAAABAAAAQQAAAAAyMDIxOjExOjI3IDE3OjU1OjExAAeSqDwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAOuaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj42NTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj42NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMTEtMjdUMTc6NTc6NDIrMDI6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTExLTI3VDE3OjU1OjExKzAyOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIFBybyAyLjM8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CsHkgRoAAAaHSURBVHgB5ZprqFRVFMfTNE2tqKSS0EyJyqSHZdJLBIMiC6wQsgcEBZUFkfTFHl+ksj5IIfQwKLI3UR+ioigqCjNDzYp7g0p8ZEioPbSrpWX1+1/uf1iMM3Nnzpx9Zu74h//sffZjrbXX2WedvfeZQQcVh1GomgKnwpPhoXA4HAr/grthD+yGK2EX3AcLwaCEWsYg+yqogYunwMGwXuyi4Roop4jvQjlswGAalr4E98L/cuQ2ZC2Ex8HckdeM0PSeA++E51axUtO8G66Ca+EOqDv8NxwOR8LR8BwoZ46DlSAHvwIfhV9XatCqshkoXg8r3f1PKZdzzoeKCY1Aj9Zs+DDcACvJf4tytWsphqF9MfwXRiP/5PpZeCbMCwcj6Gq4HEZdym+HikUtgaK/ono06heu74Ga3imhwKtHQ49a1P8M13ozFYb5aCoPhO9QVvQUnY7OTTA6Yx3XijHJsQANUXEP17ck11pdwRFUvQijTTu5rhawq0tqoObuMoUruJ7YQP+UTeci/Ddoh/xK/owUChX5rUTpB1CvvHbCJIzZCm2n8qfmaeC8IFxKPoaNvgrztKeWLL2pNBvsjC3kc5m1WtjE6Kx1gRY+7QzFB8UJO+M78k3NXq0Tvg0CPyd/GBwIuAgjd0E745FmjF4UBMnD45oR1oK+Nwf7/yE/JYsNehersz3ayldkFvvd58Mwhq/ID3FFPekhNOqCdoKE5bU5q0d/nm0mICw+Ilr51g3dfTvhD/Lj6+7ZeMMH6SIdSlNhPoI9Hu12614Ba2vrjlpEpcQehEuX0lQYjODV0GO6rx5FF4YOPeS1hE0JG6c0Ja5BuHVpfyLn1MTL1LrD0pot86m0rtSOUNyLq85Ztcw/lkpPVRl2eq3GOdUV5QiZq7WE9elApyoUUd1QByBFwPqUpoaW2j5E0tJgbDWFn1Bhw66v1ijncusrwhEy/X1onXfEsThoKD0rVHwU8p2U1QGSUXGlqe2qPaUdW1GwzqJmhPYg1qmVZgmeEVpSG3rndio0eDt9EvlhHuiB5gitYtf1DV7fYiYfqI7QuNd68KSluOgZMSFUfhPynZiNX8f0ePTCjhjhAtKdId+JWX1/MUrjtiPiGaS+VGWBdpBxZeroXCuNemq1q1QnXVl2repnlIKlC6xonwsypApEllNUKp2N4lo62D7trXrhGWEH6FrfGbNgCZ32ZumYsY90SWej0NvC2M/eeIpTem7cOmHqO6O0KNyGIut90ko9I2JcSH0GYd2tSkcFxbudtyO+dwFpEdvvoK7wbOmViebN1m5HxEXGFFd2aFpxO2FHfBkGXVpthbJOySr+aYMp6GwiToDeQs0CB5AfekuK+bHOooLlBWGcXXGInhEq1J+6BJ3kHN6b67yfio+FhmlH6H3a3TdufcyZ2ZfvtETnEUbV44YHaOGp+p5bJ06tr4hHQ4fTuuHWeVq1sZ1AhVaYaqhAciJMDRulNDXuRYH19Xs4rTM9N16U2rKgK7UjtG34Meib29/YrgiNfyYf1+X99c1S791q3BFmkdNfn9k08A3WuPTBpybkuc3QnW6s2br5Sm2jtYPMsp1uRLtO5T0mxcK6cD+t3Gkb+dF19WrfRnoMPJ6aH3bKh6BNycbQubRnL284AK6PwcbtYSyPN2rzJaGzvHl5owLapP3rYRwbyesmN4xl9PCUUtwYaKvNOcF+jeNimAlH0UsR1s54k/yQTJKK73QSKhXfbPvSZk0o9+qrCNSbpZ0xEeN+gnaC1g+5zOaHglAJfw5qP9KOGI9Rm6Cd0EP+PJgbHkOShSt9IjfJ+Qkai6gN0HbuIj8D5grNgKehlSh9DR4J2wHTMGI9tH06g80cHPsbkLbsLwRlUqpncSZsFYaieCHUQslO0F8IL4VJoUCpx8JKlWqnuhju99WIspTQIewaGG3ZwfVlKZWWy9bmbCuMRnRzfR3UXUoJnStoFmj6R/3aT4yDhUMGvQ2jMcrrcVkAtQ7JEzpmex7ugVGnHHIXbPmbbB5G6DUVjVNeUfspeCUcAxuFYpKm/01wBSyXr+vVUG2aRl5ePBpLboW3w2qD3kzdSvgF7IJynr406dB4eB+PJ50KdffPhtX2Bp9RtwS+AXWq1nZQfLgB6jtJpTvYTJneBsugHJQ78poRlQybTuEsOA3qDo+EjWILHTT9l0M5QQE6CVI6Ihqs1+5kKKeIiu4j+jiEVAFQd/x3qK9PGvwqKEcUgv8Bzq9AraJHJ6oAAAAASUVORK5CYII="
    },
    e80d: function(e, t, n) {
        "use strict";
        n("7eed")
    },
    f793: function(e, t, n) {},
    fc8f: function(e, t, n) {
        "use strict";
        n("d179")
    },
    fef5: function(e, t, n) {
        e.exports = n.p + "img/fundocs.dc3f8852.jpg"
    }
});
