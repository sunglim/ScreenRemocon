for (var g = true, o = null, r = false, aa = ["\u1100", "\u1101", "\u1100\u1109", "\u1102", "\u1102\u110c", "\u1102\u1112", "\u1103", "\u1105", "\u1105\u1100", "\u1105\u1106", "\u1105\u1107", "\u1105\u1109", "\u1105\u1110", "\u1105\u1111", "\u1105\u1112", "\u1106", "\u1107", "\u1107\u1109", "\u1109", "\u110a", "\u110b", "\u110c", "\u110e", "\u110f", "\u1110", "\u1111", "\u1112", "\u1100\u1105"], ba = {}, ca = 0; ca < aa.length; ca++)
    ba[aa[ca]] = String.fromCharCode(4520 + ca);
var da = {"\u1169\u1161": "\u116a","\u1169\u1162": "\u116b","\u1169\u1175": "\u116c","\u116e\u1165": "\u116f","\u116e\u1166": "\u1170","\u116e\u1175": "\u1171","\u1173\u1175": "\u1174"}, ea = /[\u11a8-\u11c3]/g, fa = /\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175/g, ga = /[\uac00-\ud7af]/g, ha = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g, ia = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])"), ja = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))"), 
ka = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))"), la = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))"), ma = function(c) {
    c = c.charCodeAt(0) - 44032;
    var l = 4449 + c % 588 / 28, p = 4519 + c % 28;
    return String.fromCharCode(4352 + c / 588) + String.fromCharCode(l) + (p == 4519 ? "" : String.fromCharCode(p))
}, na = function(c) {
    return c.replace(ea, function(l) {
        return aa[l.charCodeAt(0) - 4519 - 1]
    })
}, oa = function(c) {
    return c.replace(fa, function(l) {
        return da[l]
    })
}, pa = function(c) {
    var l = 
    c.charCodeAt(0) - 4352, p = c.charCodeAt(1) - 4449;
    c = c.length >= 3 ? c.charCodeAt(2) - 4519 : 0;
    return String.fromCharCode((l * 21 + p) * 28 + c + 44032)
}, ra = function(c, l, p, e) {
    return l + ba[p] + e
};
var z = typeof unsafeWindow == "undefined" ? window : unsafeWindow, E, G, N;
function sa(c) {
    return document.getElementById(c)
}
function ta(c) {
    return document.all[c]
}
var O = document.getElementById ? sa : ta, P;
function ua(c, l) {
    for (var p = l || document, e = p.childNodes, k = 0; k < e.length; k++) {
        var t = e[k];
        if (t === c) {
            p.removeChild(c);
            return g
        }
    }
    for (k = 0; k < e.length; k++)
        if ((t = e[k]) && ua(c, t))
            return g;
    return r
}
function va(c) {
    if (!c)
        return -1;
    var l = c.clip;
    return c.offsetHeight || (l ? l.height : -1)
}
var Q = 0, wa = 0, xa = 0, ya = 0;
if (z.tc) {
    Q = Event.jb;
    wa = Event.sc;
    xa = Event.jb;
    ya = Event.vc
}
var za = Q | wa | xa, Aa = {en: "",fr: "",de: ""}, Ga, Ha, R = navigator.userAgent.toLowerCase(), Ia = R.indexOf("msie") > 0 && !window.opera, Ja = R.indexOf("firefox") >= 0, Ka;
if (Ka = Ja) {
    var La = R.match(/firefox\/(\d+)/);
    Ka = La && La.length == 2 && La[1] <= 2
}
var Ma = Ka;
Ia && R.match(/msie (\d+)/);
var Na = R.indexOf("applewebkit") > -1, Oa = R.indexOf("windows") > -1, Pa = function(c, l, p) {
    function e(d) {
        var h = i != d;
        i = d;
        h && a.V();
        return h
    }
    function k() {
        for (var d = 0; d < arguments.length; d++)
            f.push(arguments[d])
    }
    function t(d) {
        d && k('<td style="width:', d, 'px"/>')
    }
    function u(d) {
        k('<table style="margin-left:auto;margin-right:auto;empty-cells:show;border-collapse:collapse" border="0" cellspacing="0" cellpadding="1px"><tr align="center">');
        d && t(d)
    }
    function b(d) {
        t(d);
        k("</tr></table>\n")
    }
    function v(d, h, A, D, T) {
        D = T || "";
        d = d.charCodeAt(0);
        a.z[d] = undefined;
        d = "K" + d;
        k('<td style="');
        k("margin:0;");
        k("width:", A, 'px">');
        if (h) {
            A = a.O + " " + D + " ";
            k("<input type=button");
            k(' class="', A, '"');
            k(' id="', d, '"');
            k(' name="', d, '"');
            if (h != "\u0000") {
                k(' value="');
                A = k;
                d = [];
                for (D = 0; D < h.length; D++) {
                    T = h.charAt(D);
                    var qa = h.charCodeAt(D);
                    d.push("\\'\"".indexOf(T) >= 0 || qa > 127 || qa < 33 ? "&#" + qa + ";" : T)
                }
                h = d.join("");
                A(h);
                k('"')
            }
            S.F && k(' dir="rtl"');
            k("/>")
        } else {
            k("<button");
            k(" name=", d);
            k(" type=button");
            k(' class="', a.O, ' goog-button-icon-c"');
            k(">");
            k("<span");
            k(' class="goog-button-icon ', D, '"');
            k(' id="BG', d, '"');
            k(">&nbsp");
            k("</span>");
            k("</button>")
        }
        k("</td>")
    }
    function J(d, h) {
        for (var A = 0; A < d.length; A++) {
            var D = d.charAt(A);
            v(D, D, (h && A == d.length - 1 ? h : 1) * 24)
        }
    }
    function L() {
        a.a && a.a.mb()
    }
    function x(d) {
        return function(h) {
            d(this);
            h && !h.type && B(this)
        }
    }
    function j(d) {
        return (d = a.z[d]) && d.length ? d[0] : d
    }
    function n(d, h) {
        if (d && d.className) {
            d.className = d.className.replace(/ goog-button-active/g, "");
            if (h)
                d.className += " goog-button-active"
        }
    }
    function m(d) {
        if (d == 
        ((i & 1) == 1))
            return g;
        e(i & -2 | (d ? 1 : 0));
        S.e();
        return r
    }
    function q(d) {
        e(d || (i & 12) != 12 ? i | 12 : i & -13);
        S.e()
    }
    function y(d) {
        d = d.which || d.keyCode || d.charCode;
        var h = cb[a.p];
        if (h)
            d = h[String.fromCharCode(d)] || d;
        return db[d] || d
    }
    function w(d) {
        return function(h) {
            h = h || z.event;
            return h.returnValue = d(h)
        }
    }
    function K() {
        if (P)
            return S && S.Qa();
        return S && S.Qb()
    }
    function C(d, h, A) {
        H = g;
        I = h;
        F || m(h == 16 || d.shiftKey || !!(d.i & ya));
        F = r;
        if (d = j(h)) {
            h = z._kbdSI;
            A && h && a.O != A.className && h(A);
            S.e();
            d.onclick(g)
        } else {
            s = r;
            L()
        }
        return !d
    }
    function B(d) {
        var h = 
        d.className;
        n(d, g);
        d.Ia = d.Ia || function() {
            d.className = h
        };
        z.setTimeout(d.Ia, 250)
    }
    var a = this, f = [], i = 0;
    a.Bc = function() {
        return i
    };
    var s = r, F = r, H = r, I = -1;
    a.T = "";
    var M = p;
    a.o = [];
    a.Ec = c;
    a.$ = 1;
    a.Ua = 1;
    a.z = {};
    a.p = "en";
    a.Ub = 0;
    a.Wb = 0;
    a.Vb = 0;
    a.Ya = 0;
    a.T = M ? M.id : "??";
    var eb = ["\u00c01234567890m=", "QWERTYUIOP\u00db\u00dd\u00dc", "ASDFGHJKL;\u00de", "ZXCVBNM\u00bc\u00be\u00bf", ""], fb = ["\u00c01234567890m=", "QWERTYUIOP\u00db\u00dd", "ASDFGHJKL;\u00de\u00dc", "\u00e2ZXCVBNM\u00bc\u00be\u00bf", ""], Ba = {"~": 192,_: 109,"+": 61,"|": 220,
        ":": 59,"<": 188,">": 190,"?": 191}, cb = {de: {Y: 90,Z: 89,"\u00dc": 192,"\u00db": 109,"\u00dd": 61,";": 219,"=": 221,"\u00bf": 220,"\u00cc": 59,m: 191},fr: {Q: 65,A: 81,Z: 87,W: 90,"\u00dd": 219,"\u00ba": 221,M: 59,"\u00c0": 222,"\u00de": 192,"\u00bc": 77,"\u00be": 188,"\u00bf": 190,"\u00df": 191,"\u00db": 109}}, db = {189: 109,187: 61,107: 61,186: 59};
    a.Jc = e;
    a.ic = function(d) {
        a.p = d;
        a.ba();
        S.J()
    };
    a.za = function() {
        return S.Db && S.b && S.b.tagName == "TEXTAREA"
    };
    a.vb = function() {
        var d = a.a.w ? fb : eb;
        a.ia = "";
        f = ['<form style="margin-bottom:0" action="">'];
        u();
        J(d[0]);
        v("\u0008", "", 48);
        u(36);
        if (a.a.w) {
            J(d[1]);
            a.za() ? v("\n", "", 36) : b(36)
        } else
            J(d[1], 1.5);
        u();
        v("\u0014", "", 48);
        J(d[2]);
        if (a.a.w)
            a.za() ? v("\n", "", 24, 1, "short") : b(24);
        else
            a.za() ? v("\n", "", 48, 1, "long") : b(48);
        u();
        a.a.w ? v("\u0010", "", 36, 1, "shortleft") : v("\u0010", "", 60, 1, "left");
        J(d[3]);
        v("\u0010", "", 60, 1, "right");
        if (S.Fb) {
            u();
            v("\u0111", "Alt+Ctrl", 72);
            v(" ", "&nbsp", 236);
            v("\u0111", "Alt+Ctrl", 72)
        }
        k("</form>");
        a.ia = f.join("")
    };
    a.hc = function() {
        return "endefr".indexOf(a.p) + a.o.join("")
    };
    a.sb = function(d) {
        if (d) {
            var h = 
            d.charCodeAt(0) - 48;
            d = d.substring(d.length - 2);
            a.p = "endefr".substring(h, h + 2);
            a.l(d)
        } else
            a.l(M ? M.n() : "??")
    };
    a.Cc = function() {
        return function(d) {
            S.l(d.id)
        }
    };
    a.qa = function(d) {
        M = d
    };
    a.l = function(d) {
        var h;
        if (d) {
            h = l[d] || l[d.toUpperCase()] || l[d.substring(0, 2).toUpperCase()];
            a.T = d
        }
        if (h)
            a.a && a.a.n() == d || h.Xb() && S.K(h);
        else {
            a.T = M ? M.n() : "??";
            S.K(M)
        }
    };
    a.ba = function() {
        var d = a.p == "en" ? "" : Aa[a.p];
        a.a ? S.cb(a.a.la(), a.a.Bb(), d) : S.cb("(loading...)", "(loading...)", d)
    };
    a.K = function(d) {
        if (a.a != d) {
            L();
            a.a = d;
            a.ba();
            a.V();
            d = d.n();
            for (var h = 0; h < a.o.length; h++)
                a.o[h] == d && a.o.splice(h, 1);
            a.o.push(d);
            a.o.length > S.Kb && a.o.shift()
        }
    };
    a.wb = function() {
        a.ba();
        S.ab(a.ia)
    };
    a.O = "goog-button goog-button-fixed";
    R.indexOf("linux");
    var Ca = R.indexOf("mac") > -1;
    a.ya = function(d) {
        return a.a && a.a.Ra ? a.a.ya(d) : {ha: d}
    };
    var gb = {back: 1,ha: ""}, hb = {K8: function() {
            L();
            a.Ya++;
            S.X(gb)
        },K10: function() {
            S.bc();
            L()
        },K16: function() {
            F = !F;
            m((i & 1) != 1)
        },K20: function() {
            e(i ^ 2);
            S.e()
        },K273: function() {
            q()
        }};
    a.lb = function(d) {
        d = a.ya(d.value);
        a.Ya++;
        S.X(d);
        m(r);
        e(i & -13)
    };
    a.ta = function() {
        for (var d in a.z) {
            var h = "K" + d;
            if (d.charCodeAt(0) < 58) {
                var A = document.getElementsByName(h);
                a.z[d] = A;
                for (var D = 0; D < A.length; D++) {
                    var T = A[D];
                    if (T)
                        T.onclick = x(hb[h] || a.lb)
                }
            }
        }
    };
    a.dc = function(d) {
        if (d < 0)
            return r;
        a.$ = d;
        a.vb();
        S.ab(a.ia);
        a.V();
        S.ec(d / a.Ua);
        return g
    };
    a.ib = function(d) {
        if (S) {
            var h = S.Ab();
            return d || h < 5 && (h > a.$ * 1.1 || h < a.$) && h > 0.3 ? a.dc(h) : r
        }
    };
    a.Ac = function() {
        return a.a && a.a.Da ? a.a.Da[(i & 2) == 2 ? "l" : ""] : ""
    };
    a.V = function() {
        if (a.a) {
            var d = a.a.yb(((i & 1) == 1 ? "s" : "") + ((i & 12) == 12 ? 
            "c" : "") + ((i & 2) == 2 ? "l" : "")), h = j(20);
            h && n(h, (i & 2) == 2);
            if (h = a.z[16]) {
                n(h[0], (i & 1) == 1);
                n(h[1], (i & 1) == 1)
            }
            if (h = a.z[273]) {
                n(h[0], (i & 12) == 12);
                n(h[1], (i & 12) == 12)
            }
            if (d)
                for (var A in d) {
                    h = d[A];
                    if (typeof h === "string") {
                        var D = j(A.charCodeAt(0));
                        if (D)
                            D.value = h ? h : "\u00a0"
                    }
                }
        }
    };
    var ib = {" ": function() {
            S.gb()
        },Q: function() {
            S.Xa()
        }}, Da = w(function(d) {
        d && (d.keyCode == 17 || !d.ctrlKey || d.i & wa) && e(i & -5);
        if (!K())
            return g;
        a.Wb++;
        var h = y(d);
        m(h != 16 && (h == 16 || d.shiftKey || !!(d.i & ya)));
        F = s = r;
        h == 18 || d && (d.altKey || d.i & xa) || e(i & -9);
        if (h == 
        224 || i & 16) {
            e(i & -17);
            return g
        }
        if (d.ctrlKey && !d.altKey || d.i & za) {
            d.i & Q && q(r);
            return g
        }
        H = r;
        if (h == 20) {
            e(i ^ 2);
            S.e()
        }
        return r
    }), Ea = w(function(d) {
        var h = y(d);
        if (i & 4 && !(i & 8) && h > 20) {
            if (i != 4)
                h = r;
            else {
                h = String.fromCharCode(h);
                if (h = ib[h]) {
                    h();
                    h = g
                } else
                    h = r
            }
            return d.returnValue = !h
        }
        d && (d.keyCode == 17 || d.ctrlKey || d.i & wa) && e(i | 4);
        if (!K())
            return d.returnValue = g;
        a.Ub++;
        s = g;
        var A = d.target || d.srcElement;
        if (A)
            try {
                A.onfocus()
            } catch (D) {
            }
        if (h == 20)
            return d.returnValue = g;
        if (h == 224 || i & 16) {
            e(i | 16);
            return d.returnValue = g
        }
        if (d.i & 
        Q) {
            q(!!(d.i & Q));
            return d.returnValue = g
        }
        (h == 18 || d && (d.altKey || d.i & xa)) && e(i | 8);
        if (h == 16)
            return d.returnValue = m(g);
        if (h == 13)
            h = 10;
        if (Ca && Ja) {
            I = h;
            if (I == 107)
                I = 0;
            else if (I == 13 || I == 10)
                I = 10;
            if (I == 0)
                return d.returnValue = r
        }
        return d.returnValue = C(d, h, A)
    }), Fa = w(function(d) {
        if (!K())
            return g;
        a.Vb++;
        if (Ca && Ja) {
            var h = d.target || d.srcElement;
            if (h)
                try {
                    h.onfocus()
                } catch (A) {
                }
            if (I == 0) {
                var D = String.fromCharCode(y(d));
                if (D in Ba)
                    return d.returnValue = C(d, Ba[D], h);
                else
                    S.X(D)
            }
        }
        if (i & 16)
            return g;
        if (i == 4)
            return g;
        if (s || !H)
            return s = 
            r;
        if (K() && I != 20)
            if (d = j(I)) {
                if (H)
                    L();
                else {
                    d.onclick(g);
                    H = r
                }
                return r
            }
        L();
        s = r;
        return g
    });
    a.aa = function() {
        if (E.onkeyup != Da)
            E.onkeyup = Da;
        if (E.onkeydown != Ea)
            E.onkeydown = Ea;
        if (E.onkeypress != Fa)
            E.onkeypress = Fa
    }
};
var Qa = function(c, l) {
    var p = document.createElement("div");
    p.className = "kbd-button kbd-button-out";
    p.id = c;
    p.appendChild(document.createTextNode(""));
    if (l)
        p.onclick = l;
    p.onmouseover = function() {
        p.className = "kbd-button kbd-button-over"
    };
    p.onmouseout = function() {
        p.className = "kbd-button kbd-button-out"
    };
    return p
}, Ra = function(c, l) {
    l.className = "select-dialog";
    c.className = "trigger";
    c.onmouseover = function() {
        c.className = "trigger trigger-over"
    };
    c.onmouseout = function() {
        c.className = "trigger"
    };
    var p = this, e = Qa("close", 
    function() {
        p.H();
        S.e()
    }), k = document.createElement("table"), t = document.createElement("tbody");
    k.cellSpacing = "0";
    k.cellPadding = "0";
    k.appendChild(t);
    k.className = "select-dialog";
    var u = c.parentNode.clientWidth || c.parentNode.width, b = e.clientWidth || e.width;
    if (u) {
        k.style.width = Math.max(u - 5, 0);
        if (b)
            l.style.width = Math.max(u - b - 20, 0)
    }
    u = document.createElement("tr");
    t.appendChild(u);
    t = document.createElement("td");
    u.appendChild(t);
    b = document.createElement("td");
    u.appendChild(b);
    t.appendChild(l);
    b.appendChild(e);
    this.P = k;
    var v = l.onchange;
    l.onchange = function() {
        p.H();
        v && v()
    };
    c.onclick = function() {
        p.va()
    };
    this.P.style.display = "none";
    this.hb = c;
    c.parentNode.insertBefore(this.P, c)
};
Ra.prototype.va = function() {
    this.hb.style.display = "none";
    this.P.style.display = ""
};
Ra.prototype.H = function() {
    this.P.style.display = "none";
    this.hb.style.display = ""
};
function Sa() {
    return function() {
        return g
    }
}
var Ta = function(c, l) {
    return l == c ? c : c.indexOf("<abbr") >= 0 ? c : ['<abbr style="border-style:none" title="', l, '">', c, "</abbr>"].join("")
}, Ua = function(c) {
    function l(j) {
        var n = e.w ? "\u00c01234567890m=QWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL;\u00de\u00e2ZXCVBNM\u00bc\u00be\u00bf" : "\u00c01234567890m=QWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL;\u00deZXCVBNM\u00bc\u00be\u00bf", m;
        for (m in j) {
            var q = j[m], y = m.split(/,/);
            y.join(",") != m && y.push("");
            var w = {};
            if (q) {
                for (var K in q)
                    if (K != "") {
                        var C = q[K];
                        if (typeof C == "string")
                            if (K.length == 
                            1)
                                w[K.charAt(0)] = C;
                            else
                                for (var B = 0; B < K.length; B++)
                                    w[K.charAt(B)] = C.charAt(B)
                    }
                q = q[""];
                for (C = B = 0; q && B < q.length; ) {
                    var a = q.indexOf("{{", B);
                    a = a == -1 ? q.length : a;
                    for (B = B; B < a; B++)
                        w[n.charAt(C++)] = q.charAt(B);
                    if (a < q.length) {
                        B = a + 2;
                        a = q.indexOf("}}", B);
                        w[n.charAt(C++)] = q.slice(B, a)
                    }
                    B = a + 2
                }
            }
            for (B = 0; B < y.length; B++) {
                q = y[B];
                if (q == "-")
                    q = "";
                q = v[q];
                for (C = 0; C < n.length; C++) {
                    a = n.charAt(C);
                    q[a] = w[a] ? w[a] : ""
                }
            }
        }
    }
    var p = ["", "s", "l", "c", "sc", "sl", "cl", "scl"], e = this;
    e.w = r;
    e.oa = c.title ? c.title : c.name;
    e.Ra = r;
    e.zb = function(j) {
        if (j) {
            var n = 
            [], m = [], q = 1, y;
            for (y in j) {
                n[q] = [RegExp(y + "$"), j[y]];
                m.push("(" + y + "$)");
                var w = RegExp(y + "|.*").exec("").length;
                q += w
            }
            j = m.join("|");
            return [RegExp(j), n]
        }
    };
    e.t = "\u001d";
    e.Aa = 10;
    var k = c.titleProvider, t = c.tooltip, u = "??", b = "??", v = {}, J = e.zb(c.transform);
    e.Ib = RegExp("(" + c.historyPruneRegex + ")$");
    var L = {};
    e.mc = c.shortTitle;
    for (var x = 0; x < p.length; x++)
        v[p[x]] = {};
    e.la = function() {
        return k ? k() : b
    };
    e.rc = function() {
        var j = {};
        return function() {
            var n = [Ta("&nbsp;" + e.oa, t)], m;
            for (m in j) {
                var q = j[m];
                if (typeof q === "string" && 
                u != m) {
                    n.length > 0 && n.push("&nbsp;&nbsp;");
                    n.push(['<a style="text-decoration:none;cursor:pointer;font-size:80%;color:', S.linkColor, '" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" ', "s2" + m ? 'id="' + ("s2" + m) + '" ' : "", "_kbdS2('" + m + "');" ? 'onclick="' + ("_kbdS2('" + m + "');") + '"' : "", ">", q, "</a>"].join(""))
                }
            }
            return n.join("")
        }
    };
    e.Bb = function() {
        return e.mc || e.la()
    };
    e.n = function() {
        return u
    };
    e.Pa = function(j) {
        if (j.is102Keyboard)
            e.w = g;
        if (j.mappings) {
            l(j.mappings);
            if (j.capslock)
                e.Da = j.capslock;
            if (j.view2char)
                L = j.view2char;
            e.Na();
            e.Pa = e.Xb = Sa();
            e.Ra = g;
            e.Tb = function() {
                return j.direction == "rtl"
            }
        }
    };
    e.yb = function(j) {
        return v[j]
    };
    e.ya = function(j) {
        if (L[j])
            j = L[j];
        if (!J)
            return j;
        return e.Mb(j)
    };
    e.Na = function() {
        e.c = [{g: "",h: -1,r: "",D: 0,d: ""}]
    };
    e.Mb = function(j) {
        for (var n = 0; n < e.c.length; n++)
            e.c[n].r += j;
        var m;
        for (n = 0; n < e.c.length; n++) {
            m = e.c[n];
            var q = m.g;
            if (m.h > -1)
                q = q.slice(0, m.h) + e.t + q.slice(m.h);
            m = e.cc(q, m.r);
            if (m.back > -1)
                break
        }
        if (n == e.c.length) {
            for (n = 0; n < e.c.length; n++)
                e.c[n].d += 
                j;
            m = e.c[e.c.length - 1];
            e.Ma({g: m.g + j,h: m.h,r: "",D: 0,d: ""});
            return j
        } else
            j = e.c[n];
        if (m.back > j.D)
            m.back = j.d.length + m.back - j.D;
        else {
            q = j.g.length - m.back;
            m.B = j.g.slice(j.g.length - j.D, q) + m.B;
            m.back = j.d.length
        }
        for (n = 0; n < e.c.length; n++) {
            j = e.c[n];
            if (m.back > j.d.length) {
                j.D += m.back - j.d.length;
                j.d = m.B
            } else {
                q = j.d.length - m.back;
                j.d = j.d.slice(0, q);
                j.d += m.B
            }
        }
        n = m.ka.indexOf(e.t);
        j = m.ka.replace(e.t, "");
        e.Ma({g: j,h: n,r: "",D: 0,d: ""});
        return {back: m.back,ha: m.B}
    };
    e.Ma = function(j) {
        e.c.push(j);
        e.Jb();
        e.Lb()
    };
    e.Jb = function() {
        for (var j = 
        0; j < e.c.length - 1; j++)
            if (e.Ib.exec(e.c[j].r))
                break;
        e.c.splice(0, j)
    };
    e.Lb = function() {
        for (var j = 0; j < e.c.length; j++) {
            var n = e.c[j];
            if (!(n.r.length + n.g.length < e.Aa)) {
                var m = n.g.length + n.r.length - e.Aa;
                n.h -= m;
                if (n.h < 0)
                    n.h = -1;
                n.g = n.g.substr(m)
            }
        }
    };
    e.cc = function(j, n) {
        var m = j + n, q = J[0].exec(m);
        if (q) {
            for (var y = J[1], w = 1; w < q.length && !q[w]; w++)
                ;
            w = w;
            q = y[w][0];
            var K = y[w][1];
            y = q.exec(m);
            w = m.slice(y.index);
            var C = w.search(e.t) > -1 ? 1 : 0;
            w = w.length - C - n.length;
            m = m.replace(q, K);
            q = m.slice(y.index);
            m = m.replace(e.t, "") + e.t;
            m = {back: w,
                B: q,ka: m}
        } else
            m = {back: -1,B: n,ka: m};
        return m
    };
    e.mb = function() {
        e.Na()
    };
    (function(j) {
        if (j.indexOf(":") > 0) {
            var n = j.split(/:/);
            j = n[0].split(/,/);
            var m = n[1];
            e.oa = n[n.length > 2 ? 2 : 1]
        } else
            j = j.split(/,/);
        e.id = j[0];
        u = j.length > 1 ? j[1] : e.id;
        b = Ta(e.oa, m)
    })(c.id);
    c.mappings && e.Pa(c)
};
var U = {en: "QWERTY",fr: "AZERTY",de: "QWERTZ"}, S = new function() {
    function c() {
        var a = E.createElement("div");
        a.style.visibility = "hidden";
        a.innerHTML = '<div dir="ltr" id="kbda"><div id="kbd_0"/></div>';
        a.setAttribute("id", "kbd");
        a.className = "outerbox";
        N.appendChild(a);
        return a
    }
    function l() {
        var a = O("kbd_t");
        if (a) {
            b.bb(a);
            O("kbd_ta").onclick = function(f) {
                if (!t()) {
                    if (V) {
                        var i = V();
                        if (i) {
                            i.na = r;
                            i.R() && u("v")
                        }
                    } else
                        u("v");
                    f && (f.stopPropagation ? f.stopPropagation() : f.cancelBubble = g)
                }
            };
            k()
        }
        return a
    }
    function p() {
        var a = 
        l();
        if (a && (b.Gb || B > 1)) {
            a.innerHTML = b.Cb();
            a = O("kbd_oem");
            if (Oa && a && S.ma)
                a.innerHTML = U[x.p]
        }
    }
    function e() {
        var a = O("kbd_minmax");
        if (!(a.childNodes.length > 0)) {
            var f;
            f = S.ja ? Qa(b.f == "v" ? "max" : "min", function() {
                b.gb()
            }) : Qa("close", function() {
                b.H()
            });
            a.appendChild(f)
        }
    }
    function k() {
        if (Oa && S.ma) {
            var a = O("kbd_oem");
            a.title = "Click to setup the physical keyboard layout.";
            if (a.parentNode.childNodes.length == 1) {
                var f = document.createElement("select");
                if (Na) {
                    var i = document.createElement("optgroup");
                    i.label = "Native Layout";
                    for (var s in U)
                        i.appendChild(new Option(U[s], s));
                    f.appendChild(i)
                } else
                    for (s in U)
                        f.options.add(new Option(U[s], s));
                f.selectedIndex = 0;
                f.onchange = function() {
                    x.ic(f.value);
                    b.e()
                };
                if (Na) {
                    f.onfocus = function() {
                        S.pa = g
                    };
                    f.onblur = function() {
                        S.pa = r
                    }
                }
                new Ra(a, f)
            }
        }
    }
    function t() {
        return "vM".indexOf(b.f) >= 0
    }
    function u(a) {
        b.wa(a);
        b.J()
    }
    var b = this, v, J, L, x, j = r, n = {}, m = 1, q = 1, y = 1;
    b.pa = r;
    b.Rb = function() {
        return b.pa
    };
    b.s = -1;
    var w = b.G = -1, K = -1;
    b.scrollX = 0;
    b.scrollY = 0;
    b.Ca = g;
    b.Lc = "left";
    b.k = 0;
    b.q = 0;
    b.Fa = "h";
    b.f = "h";
    b.Hb = 
    "h";
    b.U = {};
    var C = [], B = 0;
    b.Kb = 1;
    b.Kc = "black";
    b.linkColor = "blue";
    b.bgColor = "#ebeef8";
    b.zc = "#bbccff";
    b.Wa = "";
    b.Va = "";
    b.scale = 1;
    b.ac = Ia ? "absolute" : "fixed";
    b.Gb = g;
    b.$a = r;
    b.eb = "";
    b.Fb = g;
    b.Db = g;
    b.Zb = "http://www.google.com/webelements/images/gwe_transparent_130x20.png";
    b.$b = "http://www.google.com/webelements";
    b.La = "http://code.google.com/apis/language/virtualkeyboard/overview.html";
    b.ma = g;
    b.ja = g;
    b.Ha = g;
    b.pb = function(a) {
        for (var f in a) {
            var i = f.charAt(0) == "_" ? f.substring(1) : f;
            if (a.hasOwnProperty(f) && typeof b[i] != 
            "undefined")
                b[i] = a[f]
        }
    };
    b.ua = [function() {
            function a() {
                Ga();
                f && f()
            }
            v = c();
            if (!x)
                x = b.S = new Pa(n, b.U, L);
            b.S.Ua = b.scale;
            J = v.style;
            J.position = b.ac;
            Ga = function() {
                b.Sa() ? b.Ka() : b.C()
            };
            var f = z.onresize;
            if (a != f)
                z.onresize = a;
            x.wb();
            b.K(L, g);
            b.J = function() {
                var s = E, F = x.hc() + "-", H;
                H = Math.floor(2E3 * b.k) * 4804 + Math.floor(1200 * b.q) * 4 + "vMmh".indexOf(b.f);
                var I = [];
                if (H <= 0)
                    H = "0";
                else {
                    for (; H > 0; ) {
                        var M = H % 62;
                        I.push(String.fromCharCode(M + (M < 10 ? 48 : M < 36 ? 55 : 61)));
                        H = Math.floor(H / 62)
                    }
                    H = I.reverse().join("")
                }
                s.cookie = "KBD=" + (F + 
                H) + ";expires=July 19, 2051"
            };
            if (J.position == "absolute") {
                Ha = function() {
                    b.scrollX = G && G.scrollLeft;
                    if (!b.scrollX)
                        b.scrollX = N.scrollLeft;
                    b.scrollY = G && G.scrollTop;
                    if (!b.scrollY)
                        b.scrollY = N.scrollTop;
                    b.I(b.s, b.G)
                };
                var i = z.onscroll;
                if (i != z.onscroll)
                    z.onscroll = function() {
                        z.onscroll = function() {
                            Ha();
                            i && i()
                        }
                    }
            }
        }];
    b.lc = function() {
        for (var a = 0; a < b.ua.length; a++)
            b.ua[a](b)
    };
    b.Ab = function() {
        var a = O("kbd_tx");
        return a ? va(a) / 20 : -1
    };
    b.left = function() {
        return v.offsetLeft
    };
    b.top = function() {
        return v.offsetTop
    };
    b.nb = function() {
        return G.clientHeight || 
        z.innerHeight || N.clientHeight
    };
    b.ob = function() {
        return G.clientWidth || z.innerWidth || N.clientWidth
    };
    b.j = function() {
        b.height = va(v);
        var a = b, f;
        a: if (v) {
            f = v.clip;
            f = v.offsetWidth || (f ? f.width : -1);
            if (v.currentStyle) {
                var i = v.currentStyle.minWidth;
                if (i) {
                    i = i.replace("px", "");
                    if (i > f) {
                        f = i;
                        break a
                    }
                }
            }
            f = f
        } else
            f = -1;
        a.width = f;
        m = b.ob() - b.width;
        q = b.F ? 0 : m;
        y = b.nb() - b.height;
        w = Math.floor(m * (b.F ? b.k : 1 - b.k) + 0.5);
        K = Math.floor(y * (1 - b.q) + 0.5)
    };
    b.J = function() {
    };
    b.ra = function(a, f) {
        if (a) {
            var i = a.onfocus;
            if (i) {
                if (i.toString().indexOf(f) < 
                0)
                    a.onfocus = function() {
                        z[f](a);
                        i()
                    }
            } else
                a.onfocus = function() {
                    z[f](a)
                }
        }
    };
    b.kc = function() {
        var a = window.onblur;
        if (a) {
            if (a.toString().indexOf("_kbdWB") < 0)
                window.onblur = function() {
                    z._kbdWB();
                    a()
                }
        } else
            window.onblur = function() {
                z._kbdWB()
            }
    };
    b.Oa = function(a) {
        for (var f = r, i = 0; i < a.length; i++)
            f = b.Pb(a[i]) || f;
        return f
    };
    b.Pb = function(a) {
        if (!a)
            return r;
        var f = r, i = a.nodeName.toLowerCase(), s = a.type.toLowerCase();
        if (i == "textarea" || i == "input" && (s == "text" || s == "password")) {
            f = g;
            if (!a.Eb) {
                b.ra(a, "_kbdSI");
                a.Eb = g
            }
        }
        return f
    };
    b.Nb = function(a) {
        a && a.nodeName.toLowerCase() == "iframe" && b.ra(a, "_kbdIF")
    };
    b.Ob = function(a) {
        for (var f = 0; f < a.length; f++)
            b.Nb(a[f])
    };
    b.fc = function() {
        function a() {
            if (F == 0) {
                var H = S.Oa(E.getElementsByTagName("textarea")), I = S.Oa(E.getElementsByTagName("input"));
                if (!(H || I))
                    return r;
                if (Ia)
                    b.Ob(E.getElementsByTagName("iframe"));
                else if (!Ma) {
                    b.ra(window, "_kbdWF");
                    b.kc()
                }
            }
            F = (F + 1) % 10;
            if (!s) {
                b.lc();
                b.nc();
                x.sb();
                s = g
            }
            return x.ib()
        }
        function f() {
            z.setTimeout(f, a() ? 130 : 1300)
        }
        E = z.document;
        G = E.documentElement;
        N = E.body;
        var i = O("kbd");
        i && ua(i, E);
        var s = r, F = 0;
        f();
        a()
    };
    b.Ba = function(a, f) {
        f.Dc = a;
        if (!b.U[f.n()]) {
            B++;
            var i = f.n();
            C.push(i);
            b.U[i] = f;
            n[a] = n[a] || [];
            n[a].push(f)
        }
        return f
    };
    b.xb = function() {
        B = 0;
        C = [];
        b.U = {};
        n["-"] = [];
        b.xa();
        x = o
    };
    b.wc = function(a) {
        for (var f in a)
            for (var i = f, s = a[f], F = 0; F < s.length; F++)
                b.Ba(i, new Ua(s[F]))
    };
    b.qa = function(a) {
        x && a && x.qa(a);
        L = a
    };
    b.K = function(a, f) {
        if (x && a) {
            b.a = a.n();
            x.K(a);
            b.F = a.Tb();
            b.j();
            f || b.J()
        }
    };
    b.l = function(a) {
        if (j) {
            x.l(a);
            u(b.f);
            if (b.b) {
                b.b.lang = a;
                b.e()
            }
        }
    };
    b.Xa = function() {
        var a, 
        f;
        if (!a)
            a = x.T;
        f || (f = 1);
        for (var i = C[0], s = 0; s < C.length; s++)
            if (C[s] == a)
                i = C[(s + C.length + f) % C.length];
        b.l(i);
        S.Ta && S.Ta(i)
    };
    b.e = function() {
        try {
            var a = b.b;
            if (a && a.style) {
                var f = a.style.visibility;
                if (!f || f == "visible")
                    a.focus()
            }
        } catch (i) {
            delete b.b
        }
    };
    b.bc = function() {
        b.b && b.b.tagName === "TEXTAREA" && b.X("\n")
    };
    b.gc = function() {
        var a = b.b;
        if (window.uc) {
            var f = document.createEvent("KeyEvents");
            f.Fc("keyup", g, g, window, r, r, g, r, 16, 0);
            a.dispatchEvent(f)
        } else if (document.createEvent) {
            f = document.createEvent("UIEvents");
            f.initUIEvent("keyup", g, g, window, 1);
            f.keyCode = 16;
            a.dispatchEvent(f)
        } else if (document.createEventObject && a.fireEvent) {
            f = document.createEventObject();
            f.bubbles = g;
            f.cancelable = g;
            f.view = window;
            f.ctrlKey = r;
            f.altKey = r;
            f.shiftKey = g;
            f.metaKey = r;
            f.keyCode = 16;
            a.fireEvent("onkeyup", f)
        }
    };
    b.X = function(a) {
        var f = 0, i = a;
        if (typeof a != "string") {
            f = a.back;
            i = a.ha
        }
        a = b.b;
        if (!(!a || Ia && !a.isContentEditable)) {
            b.e();
            var s = a.value || "", F = a.selectionStart;
            if (E.selection) {
                s = E.selection.createRange();
                if (s.parentElement() == a) {
                    s.moveStart("character", 
                    -f);
                    s.text = i
                }
                s.collapse(r);
                s.select()
            } else if (F || F == "0") {
                var H = a.selectionEnd, I = F > f ? s.substring(0, F - f) : "";
                a.value = I + i + s.substring(H, s.length);
                a.selectionEnd = a.selectionStart = F + i.length - f
            } else
                a.value = s.length < f ? i : s.substring(0, s.length - f) + i;
            b.$a && b.gc()
        }
    };
    b.bb = function() {
    };
    b.cb = function(a, f) {
        b.qc = t() ? a : '<span style="color:#676767">' + (b.eb || f) + "</span>";
        p()
    };
    b.Cb = function() {
        return b.qc
    };
    b.ta = function() {
        x.ta()
    };
    b.db = function(a) {
        if (C.length == 2 || a && C.length > 1) {
            a = O("kbd-loop");
            var f = Qa("loop", function() {
                b.Xa()
            });
            b.Hc = f;
            a.appendChild(f)
        }
    };
    b.kb = function(a) {
        var f = "";
        if (S.Ha)
            f = '<td id="kbd-logo-cell"><a href="' + S.$b + '" target=_blank><img id="kbd-logo" src="' + S.Zb + '"/></a></td>';
        var i = "";
        if (S.Ea)
            i = '<td><a  id="kbd-cfg" class="kbd-button" target="_blank" href="' + b.Ea + '"/></td>';
        return ['<center style="margin: 0 0;font-family:arial,sans-serif;"><table id="kbdt" border="0" style="border:0 none;" cellspacing="1px" cellpadding="0px"><tr><td style="padding: 0"><table dir=', S.F ? "rtl" : "ltr", ' id="kbd_ta" width=100% cellpadding="0" cellspacing="0" border="0"><tr class="kbd-title-row">', 
            f, '<td id="kbd_t" align=', S.F ? "right" : "left", ' style="', b.fb ? "cursor:" + b.fb + ";" : "", '"></td><td><span id="kbd_tx" style="visibility:hidden;margin:0px;display:inline-block;padding:0px">I</span></td><td align="right" style="display:', b.f == "v" ? "block" : "none", '"><span id="kbd_oem" style=" font-size: xx-small;"></span></td><td id="kbd-loop"></td>', i, '<td><a  id="kbd-help" class="kbd-button" target="_blank" href="', b.La, '"/></td><td align="right" id="kbd_minmax"></td></tr></table></td></tr><tr valign="top"><td align="center"><div id="kbd_mka" style="display:', 
            b.f == "v" ? "block" : "none", '"><table border="0" cellspacing="0" cellpadding="0" style="border:none;background-color:', b.bgColor, '"><tr><td align="center">', a, "</td></tr></table></div></td></tr></table></center>"].join("")
    };
    b.ab = function(a) {
        b.Mc = "" + Math.floor(12 * b.scale) + "px";
        var f = O("kbd_0");
        if (f) {
            f.innerHTML = b.kb(a);
            e();
            b.db(g);
            p();
            b.ta()
        }
    };
    b.Za = function() {
        b.j();
        var a = b.k, f = b.q;
        b.k = Math.min(1, (b.F ? b.s : m - b.s) / m);
        b.q = Math.min(1, 1 - b.G / y);
        a != b.k && f != b.q && b.J()
    };
    b.I = function(a, f) {
        b.s = Math.min(m, Math.max(0, 
        a));
        b.G = Math.min(y, Math.max(0, f));
        J.right = "" + Math.floor(m - b.s - b.scrollX) + "px";
        J.bottom = "" + Math.floor(y - b.G - b.scrollY) + "px"
    };
    b.C = function() {
        b.j();
        for (var a = 3; a-- > 0 && (w != b.s || K != b.G); ) {
            b.I(w, K);
            b.j()
        }
    };
    b.ec = function() {
        b.f != "h" && b.C()
    };
    b.Sa = function() {
        b.j();
        return Math.abs(q - b.s) + Math.abs(y - b.G) < 90
    };
    b.Ka = function() {
        b.k = b.q = 0;
        b.j();
        b.I(q, y);
        b.C();
        b.Za()
    };
    b.gb = function() {
        if (t())
            b.H();
        else if (b.f == "M")
            if (V) {
                var a = V();
                if (a) {
                    a.na = g;
                    a.R() && u("m")
                }
            } else
                u("m");
        else
            b.va()
    };
    b.ea = "v";
    b.Qa = t;
    b.xa = function() {
        j = 
        r
    };
    b.aa = function() {
        if (!j && t()) {
            x.aa();
            j = g
        }
    };
    b.Qb = function() {
        return j
    };
    b.Ic = function() {
    };
    b.wa = function(a) {
        if (x) {
            if ("hm".indexOf(a || b.f) >= 0) {
                b.f = a;
                b.xa();
                b.e();
                if (b.f == "h") {
                    J.visibility = "hidden";
                    return
                }
            } else
                x.V();
            if (a == "M" && !b.Ca)
                a = "v";
            b.f = a;
            x.ba();
            var f = O("kbd_mka");
            if (f) {
                f.style.display = a == "v" ? "block" : "none";
                b.C();
                b.aa();
                x.$ = 1;
                x.ib(g);
                b.e();
                J.visibility = "visible"
            }
        }
    };
    b.nc = function() {
        b.wa(b.Fa)
    };
    b.v = function() {
        u(b.ja ? "m" : "h")
    };
    b.H = function() {
        b.v();
        O("kbd_ta").onclick = o;
        b.ea = t();
        S.ga && S.ga()
    };
    b.pc = 
    function() {
        if (V) {
            var a = V();
            a && a.na ? u("m") : u("v")
        } else
            u("v")
    };
    b.va = function() {
        u("v");
        b.ea = t();
        S.ga && S.ga()
    }
};
z._kbdHide = function() {
    S.v()
};
S.Yb = function(c) {
    var l = S.Ba("-", new Ua(c));
    l.la = l.rc();
    S.qa(l);
    S.pb({Ca: r,Fa: "v",Hb: "h",Wa: c.Wa || "\u25b2",Va: c.Va || "\u25bc",eb: void 0})
};
z._kbdS2 = function(c) {
    S.l(c)
};
S.xc = g;
S.u = r;
S.fb = "move";
S.bb = function(c) {
    var l = this;
    c.onmousedown = function(p) {
        l.ub(p || z.event);
        return r
    };
    c.onblur = function() {
        l.Ga()
    }
};
S.yc = function(c) {
    this.q = Math.floor(c % 1201) / 1200;
    this.k = Math.floor(c / 1201) / 2E3;
    this.C();
    this.Sa() && this.Ka()
};
S.Ga = function() {
    if (this.u) {
        this.Za();
        this.aa();
        this.u = r
    }
};
S.ub = function(c) {
    this.qb = c.clientX - this.left();
    this.rb = c.clientY - this.top();
    this.u = g
};
S.tb = function(c) {
    this.u && this.I(c.clientX - this.qb - this.scrollX, c.clientY - this.rb - this.scrollY);
    return !this.u
};
S.ua.push(function(c) {
    c.u = r;
    E.onmousemove = function(l) {
        return c.tb(l || z.event)
    };
    E.onmouseup = function() {
        c.Ga();
        return r
    }
});
var W = g, Xa = function(c) {
    if (c in Va || Wa[c]) {
        if (c == c.toUpperCase())
            c = Va[c];
        return c
    } else
        throw c + " is not a supported layout.";
}, X = [], Y = {}, Ya = [], $a = function(c) {
    var l = Y[c];
    if (l)
        typeof l == "object" && Za(l);
    else {
        Y[c] = "loading";
        c = "http://www.google.com/uds/modules/elements/keyboard/" + c + ".js";
        l = document.createElement("script");
        l.src = c;
        document.body.appendChild(l)
    }
}, ab = function(c, l) {
    for (var p = 0; p < c.length; p++)
        if (c[p] == l) {
            c[p] = c[c.length - 1];
            c.pop();
            return g
        }
    return r
}, Z = function(c, l) {
    this.na = r;
    this.a = "";
    this.Gc = 
    c;
    this.N = [];
    this.L = [];
    this.oc = 0;
    var p = [];
    bb = "";
    P = o;
    c.length > 0 && S.xb();
    if (typeof c[0] == "object") {
        p = c;
        c = [];
        for (var e = 0; e < p.length; e++)
            c.push(p[e].id)
    } else
        for (e in c) {
            var k = Xa(c[e]);
            $a(k)
        }
    if (!l || l.length == 0) {
        P = this;
        if (!S.b)
            S.b = document.activeElement
    }
    for (e in l) {
        a: {
            k = l[e];
            if (typeof k == "string")
                k = document.getElementById(k);
            if (k && k.id) {
                var t = k.nodeName.toLowerCase();
                if (t == "textarea" || t == "input" && k.type.toLowerCase() == "text") {
                    k = k.id;
                    break a
                }
            }
            k = o
        }
        if (k) {
            this.N.push(k);
            if (X[k]) {
                t = X[k];
                ab(t.N, k);
                t.N.length == 
                0 && ab(Ya, t)
            }
            X[k] = this;
            if (!S.b) {
                if (t = document.activeElement) {
                    var u = t.nodeName.toLowerCase();
                    if (u == "textarea" || u == "input" && t.type.toLowerCase() == "text")
                        if (t.id != k)
                            continue
                }
                S.b = document.getElementById(k)
            }
        }
    }
    Ya.push(this);
    for (e = 0; e < p.length; e++)
        Za(p[e]);
    c.length > 0 && this.sa(c[0])
}, bb = "", Za = function(c) {
    var l = c.id;
    Y[l] = c;
    S.Yb(c);
    bb || S.fc();
    for (var p in Ya) {
        c = Ya[p];
        for (var e = l, k = c.L.length - 1; k >= 0; k--)
            if (c.L[k] == e) {
                c.a = e;
                var t;
                a: if (P)
                    t = g;
                else {
                    if (t = S.b)
                        for (var u = 0; u < c.N.length; u++)
                            if (t.id == c.N[u]) {
                                t = g;
                                break a
                            }
                    t = 
                    r
                }
                t && jb(c, e);
                c.L = c.L.slice(k + 1);
                break
            }
    }
    S.db();
    bb = l
}, jb = function(c, l) {
    var p = c.R();
    S.wa("v");
    S.l(l);
    kb(c, p)
};
Z.prototype.Ja = function() {
    return P ? S.a || bb : this.a || S.a || bb
};
Z.prototype.sa = function(c) {
    c = Xa(c);
    if (c in Y && typeof Y[c] == "object") {
        this.a = c;
        jb(this, c)
    } else {
        this.L.push(c);
        $a(c)
    }
};
Z.prototype.R = function() {
    return S.Qa()
};
Z.prototype.Sb = function() {
    return !!S.S
};
Z.prototype.jc = function(c) {
    S.ea = c;
    kb(this, c)
};
var kb = function(c, l) {
    if (l) {
        c.oc++;
        S.pc()
    } else
        S.v()
};
z._kbdSI = function(c) {
    if (c && c != S.b && S.S && c.className != S.S.O) {
        var l = P || X[c.id];
        if (l) {
            S.b = c;
            l.sa(l.Ja());
            kb(l, S.ea)
        } else {
            S.b = o;
            if (W)
                S.v();
            else {
                S.xa();
                S.e()
            }
        }
    }
};
z._kbdIF = function() {
    if (W) {
        S.b = o;
        S.v()
    }
};
z._kbdWB = function() {
    if (W)
        if (!(Na && S.Rb())) {
            S.b = o;
            S.v()
        }
};
z._kbdWF = function() {
    W && document.activeElement && document.activeElement.onfocus && document.activeElement.onfocus()
};
var V = function() {
    var c;
    if (S.b && S.b.id)
        c = X[S.b.id];
    return c ? c : P
};
$("google.elements.keyboard.Keyboard", Z);
$("google.elements.keyboard.Keyboard.prototype.getLayout", Z.prototype.Ja);
$("google.elements.keyboard.Keyboard.prototype.setLayout", Z.prototype.sa);
$("google.elements.keyboard.Keyboard.prototype.isVisible", Z.prototype.R);
$("google.elements.keyboard.Keyboard.prototype.isReady", Z.prototype.Sb);
$("google.elements.keyboard.Keyboard.prototype.setVisible", Z.prototype.jc);
$("google.elements.keyboard.setVisibilityChangeCallback", function(c) {
    S.ga = c
});
$("google.elements.keyboard.setLayoutChangeCallback", function(c) {
    S.Ta = c
});
$("google.elements.keyboard.getLayoutName", function(c) {
    c = Xa(c);
    return Wa[c]
});
$("google.elements.keyboard.setAutoHide", function(c) {
    W = c
});
$("google.elements.keyboard.setSendShiftKeyUpEventUponInput", function(c) {
    S.$a = c
});
$("google.elements.keyboard.enableGoogleLogo", function(c) {
    S.Ha = c
});
$("google.elements.keyboard.helpLink", function(c) {
    S.La = c
});
$("google.elements.keyboard.cfgLink", function(c) {
    S.Ea = c
});
$("google.elements.keyboard.enableKeyCodeScheme", function(c) {
    S.ma = c
});
$("google.elements.keyboard.enableMinMaxMode", function(c) {
    S.ja = c
});
$("google.elements.keyboard.hangulTransform", function(c) {
    c = c.replace("\u001d", "").replace(ga, ma);
    return oa(na(c)).replace(ia, ra).replace(ja, ra).replace(ka, ra).replace(la, ra).replace(ha, pa)
});
$("google.elements.keyboard.loadme", Za);
$("google.elements.keyboard.setHomePositionCallback", function(c) {
    S.C = function() {
        S.j();
        var l = c(S.height, S.width);
        if (typeof l.x != undefined && typeof l.y != undefined) {
            S.I(l.x, l.y);
            S.j()
        }
    }
});
$("google.elements.keyboard.LayoutName", Wa);
$("google.elements.keyboard.LayoutCode", Va);
var Va = {ALBANIAN: "sq",ARABIC: "ar",ARMENIAN_EASTERN: "hy_east",ARMENIAN_WESTERN: "hy_west",BASQUE: "eu",BELARUSIAN: "be",BENGALI_INSCRIPT: "bn_inscript",BENGALI_PHONETIC: "bn_phone",BOSNIAN: "bs",BRAZILIAN_PORTUGUESE: "pt_br",BULGARIAN: "bg",CATALAN: "ca",CHEROKEE: "chr",CROATIAN: "hr",CZECH: "cs",CZECH_QWERTZ: "cs_qwertz",DANISH: "da",DARI: "prs",DUTCH: "nl",DEVANAGARI_PHONETIC: "deva_phone",ENGLISH: "en",ESTONIAN: "et",ETHIOPIC: "ethi",FINNISH: "fi",FRENCH: "fr",GALICIAN: "gl",GEORGIAN_QWERTY: "ka_qwerty",GEORGIAN_TYPEWRITER: "ka_typewriter",
    GERMAN: "de",GREEK: "el",GUJARATI_INSCRIPT: "gu_inscript",GUJARATI_PHONETIC: "gu_phone",GURMUKHI_INSCRIPT: "guru_inscript",GURMUKHI_PHONETIC: "guru_phone",HEBREW: "he",HINDI: "hi",HUNGARIAN_101: "hu_101",ICELANDIC: "is",ITALIAN: "it",KANNADA_INSCRIPT: "kn_inscript",KANNADA_PHONETIC: "kn_phone",KAZAKH: "kk",KHMER: "km",KOREAN: "ko",KYRGYZ: "ky_cyrl",LAO: "lo",LATVIAN: "lv",LITHUANIAN: "lt",MACEDONIAN: "mk",MALAYALAM_INSCRIPT: "ml_inscript",MALAYALAM_PHONETIC: "ml_phone",MALTESE: "mt",MAORI: "mi",MONGOLIAN_CYRILLIC: "mn_cyrl",
    MONTENEGRIN: "srp",NORWEGIAN: "no",ORIYA_INSCRIPT: "or_inscript",ORIYA_PHONETIC: "or_phone",PAN_AFRICA_LATIN: "latn_002",PASHTO: "ps",PERSIAN: "fa",POLISH: "pl",PORTUGUESE: "pt_pt",ROMANI: "rom",ROMANIAN: "ro",ROMANIAN_SR13392_PRIMARY: "ro_sr13392_primary",ROMANIAN_SR13392_SECONDARY: "ro_sr13392_secondary",RUSSIAN: "ru",SANSKRIT_PHONETIC: "sa_phone",SERBIAN_CYRILLIC: "sr_cyrl",SERBIAN_LATIN: "sr_latn",SINHALA: "si",SLOVAK: "sk",SLOVAK_QWERTY: "sk_qwerty",SLOVENIAN: "sl",SOUTHERN_UZBEK: "uzs",SPANISH: "es_es",SWEDISH: "sv",
    SWISS_GERMAN: "de_ch",TAMIL_99: "ta_tamil99",TAMIL_INSCRIPT: "ta_inscript",TAMIL_PHONETIC: "ta_phone",TATAR: "tt",TELUGU_INSCRIPT: "te_inscript",TELUGU_PHONETIC: "te_phone",THAI: "th",TURKISH_F: "tr_f",TURKISH_Q: "tr_q",UIGHUR: "ug",UKRAINIAN_101: "uk_101",URDU: "ur",UZBEK_LATIN: "uz_latn",UZBEK_CYRILLIC_PHONETIC: "uz_cyrl_phone",UZBEK_CYRILLIC_TYPEWRITTER: "uz_cyrl_type",VIETNAMESE_TCVN: "vi_tcvn",VIETNAMESE_TELEX: "vi_telex",VIETNAMESE_VIQR: "vi_viqr"}, Wa = {ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",bn_inscript: "\u09ac\u09be\u0982\u09b2\u09be(INSCRIPT)",bn_phone: "\u09ac\u09be\u0982\u09b2\u09be(\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)",bs: "bosanski",ca: "catal\u00e0",chr: "\u13e3\u13b3\u13a9",cs: "\u010de\u0161tina",cs_qwertz: "\u010de\u0161tina QWERTZ",da: "dansk",de: "Deutsch",de_ch: "Deutschsprachige Schweiz",deva_phone: "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    el: "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en: "English",es_es: "espa\u00f1ol",et: "eesti keel",ethi: "\u130d\u12d5\u12dd",eu: "Euskara",fa: "\u0641\u0627\u0631\u0633\u06cc",fi: "suomi",fr: "fran\u00e7ais",gl: "Galego",gu_inscript: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(INSCRIPT)",gu_phone: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)",guru_inscript: "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40(INSCRIPT)",guru_phone: "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40(\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)",
    he: "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea",hi: "\u0939\u093f\u0902\u0926\u0940",hr: "hrvatski",hu_101: "magyar nyelv(101)",hy_east: "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576",hy_west: "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576",is: "\u00edslenska",it: "italiano",ka_qwerty: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)",ka_typewriter: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)",
    kk: "\u049a\u0430\u0437\u0430\u049b",km: "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA",ko: "\ud55c\uad6d\uc5b4",kn_inscript: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1(INSCRIPT)",kn_phone: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1(\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)",ky_cyrl: "\u041a\u044b\u0440\u0433\u044b\u0437",latn_002: "Africa Latin",lo: "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7",lt: "lietuvi\u0173 kalba",lv: "latvie\u0161u valoda",mi: "M\u0101ori",mk: "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
    ml_inscript: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02(INSCRIPT)",ml_phone: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02(\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)",mn_cyrl: "\u041c\u043e\u043d\u0433\u043e\u043b",mt: "Malti",nl: "Nederlands",no: "norsk",or_inscript: "\u0b13\u0b21\u0b3c\u0b3f\u0b06(INSCRIPT)",or_phone: "\u0b13\u0b21\u0b3c\u0b3f\u0b06(\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)",pl: "polski",prs: "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc",ps: "\u067e\u069a\u062a\u0648",pt_br: "portugu\u00eas brasileiro",
    ro: "rom\u00e2n\u0103",ro_sr13392_primary: "rom\u00e2n\u0103 SR13392 Primary",ro_sr13392_secondary: "rom\u00e2n\u0103 SR13392 Secondary",pt_pt: "portugu\u00eas europeu",rom: "rromani \u0107hib",ru: "Pycc\u0138\u0438\u0439",sa_phone: "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d(\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",si: "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134",sk: "slovensk\u00fd jazyk",sk_qwerty: "sloven\u0161\u010dina QWERTY",sl: "sloven\u0161\u010dina",sq: "shqip",
    srp: "Crnogorski jezik",sr_cyrl: "\u0421\u0440\u043f\u0441\u043a\u0438",sr_latn: "Srpski",sv: "svenska",ta_tamil99: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd(TAMIL99)",ta_phone: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd(INSCRIPT)",ta_phone: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd(\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)",te_inscript: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41(INSCRIPT)",te_phone: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41(\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)",th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    tr_f: "T\u00fcrk\u00e7e - F",tr_q: "T\u00fcrk\u00e7e - Q",tt: "\u0422\u0430\u0442\u0430\u0440",ug: "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5",uk_101: "\u0443\u043a\u0440\u0430\u0457\u0301\u043d\u0441\u044c\u043a\u0430 \u043c\u043e\u0301\u0432\u0430(101)",ur: "\u0627\u0631\u062f\u0648",uz_latn: "O\u2018zbek",uz_cyrl_phone: "\u040e\u0437\u0431\u0435\u043a(\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)",uz_cyrl_type: "\u040e\u0437\u0431\u0435\u043a(\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)",
    uzs: "Southern Uzbek",vi_tcvn: "Ti\u1ebfng Vi\u1ec7t TCVN 6064",vi_telex: "Ti\u1ebfng Vi\u1ec7t Telex",vi_viqr: "Ti\u1ebfng Vi\u1ec7t VIQR"};
$("google.elements.keyboard.LayoutName", Wa);
$("google.elements.keyboard.LayoutCode", Va);
function $(c, l) {
    for (var p = c.split(/\./), e = window, k = 0; k < p.length - 1; k++) {
        e[p[k]] || (e[p[k]] = {});
        e = e[p[k]]
    }
    e[p[p.length - 1]] = l
};