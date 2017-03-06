/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};

        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "/";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {

        __webpack_require__(1)


        var jsCookie = __webpack_require__(21)

        __webpack_require__(22)

        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
        // 统计用，开发者不需要理会
        if (window.BJ_REPORT) {
            BJ_REPORT.init({
                id: 1
            });
            BJ_REPORT.init({
                id: 1,
                uin: window.location.origin,
                combo: 0,
                delay: 1000,
                url: "//litten.me:9005/badjs/",
                ignore: [/Script error/i],
                random: 1,
                repeat: 500000,
                onReport: function (id, errObj) {
                },
                ext: {}
            });
            // iframe不上报
            var host = window.location.host
            var isNotFrame = (top === window)
            var isNotLocal = !((/localhost/i.test(host) || /127.0.0.1/i.test(host) || /0.0.0.0/i.test(host)))
            isNotFrame && isNotLocal && BJ_REPORT.report('yilia-' + window.location.host)

            // 来源上报
            var from = getQueryString('f');
            var fromKey = 'yilia-from';
            if (from) {
                isNotFrame && BJ_REPORT.report('from-' + from);
                // 种cookie
                jsCookie.set(fromKey, from);
            } else {
                if (document.referrer.indexOf(window.location.host) >= 0) {
                    // 取cookie
                    from = jsCookie.get(fromKey);
                    from && isNotFrame && BJ_REPORT.report('from-' + from);
                } else {
                    // 清cookie
                    jsCookie.remove(fromKey);
                }
            }
        }

        __webpack_require__(23)
        // require('particles.js')
        var tags = __webpack_require__(26)
        var archiveInner = __webpack_require__(27)
        var tools = __webpack_require__(29)
        var browser = __webpack_require__(28)
        var fixPage = __webpack_require__(31)
        var mobile = __webpack_require__(32)
        var viewer = __webpack_require__(33)
        __webpack_require__(43)

        $(function () {
            viewer.init()
            archiveInner.init()
            fixPage.init()
            tags.init()
            // loadBg();

            // todo: resize destrop
            if (browser.versions.mobile === true && $(window).width() < 800) {
                mobile.init()
            } else {
                tools.init()
                $('.js-smart-menu').click(function (e) {
                    e.stopPropagation()
                    tools.show($(this).data('idx'))
                })
                $('.left-col,.mid-col').click(function () {
                    tools.hide()
                })
            }
            // if (yiliaConfig && yiliaConfig.open_in_new) {
            //   $('.article-entry a').not('.article-more-a').attr('target', '_blank')
            // }
        })

        // function loadBg() {
        //   new particlesJS('particles',
        //     {
        //       "particles": {
        //         "number": {
        //           "value": 20,
        //           "density": {
        //             "enable": true,
        //             "value_area": 800
        //           }
        //         },
        //         "color": {
        //           "value": "#888888"
        //         },
        //         "shape": {
        //           "type": "circle",
        //           "stroke": {
        //             "width": 0,
        //             "color": "#888888"
        //           },
        //           "polygon": {
        //             "nb_sides": 5
        //           },
        //           "image": {
        //             "src": "img/github.svg",
        //             "width": 100,
        //             "height": 100
        //           }
        //         },
        //         "opacity": {
        //           "value": 0.5,
        //           "random": false,
        //           "anim": {
        //             "enable": false,
        //             "speed": 1,
        //             "opacity_min": 0.1,
        //             "sync": false
        //           }
        //         },
        //         "size": {
        //           "value": 18,
        //           "random": true,
        //           "anim": {
        //             "enable": false,
        //             "speed": 40,
        //             "size_min": 0.1,
        //             "sync": false
        //           }
        //         },
        //         "line_linked": {
        //           "enable": true,
        //           "distance": 500,
        //           "color": "#888888",
        //           "opacity": 0.4,
        //           "width": 1
        //         },
        //         "move": {
        //           "enable": true,
        //           "speed": 2,
        //           "direction": "none",
        //           "random": false,
        //           "straight": false,
        //           "out_mode": "out",
        //           "attract": {
        //             "enable": false,
        //             "rotateX": 600,
        //             "rotateY": 1200
        //           }
        //         }
        //       },
        //       "interactivity": {
        //         "detect_on": "canvas",
        //         "events": {
        //           "onhover": {
        //             "enable": false,
        //             "mode": "repulse"
        //           },
        //           "onclick": {
        //             "enable": false,
        //             "mode": "push"
        //           },
        //           "resize": true
        //         },
        //         "modes": {
        //           "grab": {
        //             "distance": 400,
        //             "line_linked": {
        //               "opacity": 1
        //             }
        //           },
        //           "bubble": {
        //             "distance": 400,
        //             "size": 40,
        //             "duration": 2,
        //             "opacity": 8,
        //             "speed": 3
        //           },
        //           "repulse": {
        //             "distance": 200
        //           },
        //           "push": {
        //             "particles_nb": 4
        //           },
        //           "remove": {
        //             "particles_nb": 2
        //           }
        //         }
        //       },
        //       "retina_detect": true,
        //       "config_demo": {
        //         "hide_card": false,
        //         "background_color": "#b61924",
        //         "background_image": "",
        //         "background_position": "50% 50%",
        //         "background_repeat": "no-repeat",
        //         "background_size": "cover"
        //       }
        //     }
        //   );
        // }


        /***/ },
    /* 1 */
    /***/ function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/ },
    /* 2 */,
    /* 3 */,
    /* 4 */,
    /* 5 */,
    /* 6 */,
    /* 7 */,
    /* 8 */,
    /* 9 */,
    /* 10 */,
    /* 11 */,
    /* 12 */,
    /* 13 */,
    /* 14 */,
    /* 15 */,
    /* 16 */,
    /* 17 */,
    /* 18 */,
    /* 19 */,
    /* 20 */,
    /* 21 */
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
         * JavaScript Cookie v2.1.3
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */
        ;(function (factory) {
            var registeredInModuleLoader = false;
            if (true) {
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                registeredInModuleLoader = true;
            }
            if (true) {
                module.exports = factory();
                registeredInModuleLoader = true;
            }
            if (!registeredInModuleLoader) {
                var OldCookies = window.Cookies;
                var api = window.Cookies = factory();
                api.noConflict = function () {
                    window.Cookies = OldCookies;
                    return api;
                };
            }
        }(function () {
            function extend () {
                var i = 0;
                var result = {};
                for (; i < arguments.length; i++) {
                    var attributes = arguments[ i ];
                    for (var key in attributes) {
                        result[key] = attributes[key];
                    }
                }
                return result;
            }

            function init (converter) {
                function api (key, value, attributes) {
                    var result;
                    if (typeof document === 'undefined') {
                        return;
                    }

                    // Write

                    if (arguments.length > 1) {
                        attributes = extend({
                            path: '/'
                        }, api.defaults, attributes);

                        if (typeof attributes.expires === 'number') {
                            var expires = new Date();
                            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                            attributes.expires = expires;
                        }

                        try {
                            result = JSON.stringify(value);
                            if (/^[\{\[]/.test(result)) {
                                value = result;
                            }
                        } catch (e) {}

                        if (!converter.write) {
                            value = encodeURIComponent(String(value))
                                .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                        } else {
                            value = converter.write(value, key);
                        }

                        key = encodeURIComponent(String(key));
                        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                        key = key.replace(/[\(\)]/g, escape);

                        return (document.cookie = [
                            key, '=', value,
                            attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                            attributes.path ? '; path=' + attributes.path : '',
                            attributes.domain ? '; domain=' + attributes.domain : '',
                            attributes.secure ? '; secure' : ''
                        ].join(''));
                    }

                    // Read

                    if (!key) {
                        result = {};
                    }

                    // To prevent the for loop in the first place assign an empty array
                    // in case there are no cookies at all. Also prevents odd result when
                    // calling "get()"
                    var cookies = document.cookie ? document.cookie.split('; ') : [];
                    var rdecode = /(%[0-9A-Z]{2})+/g;
                    var i = 0;

                    for (; i < cookies.length; i++) {
                        var parts = cookies[i].split('=');
                        var cookie = parts.slice(1).join('=');

                        if (cookie.charAt(0) === '"') {
                            cookie = cookie.slice(1, -1);
                        }

                        try {
                            var name = parts[0].replace(rdecode, decodeURIComponent);
                            cookie = converter.read ?
                                converter.read(cookie, name) : converter(cookie, name) ||
                            cookie.replace(rdecode, decodeURIComponent);

                            if (this.json) {
                                try {
                                    cookie = JSON.parse(cookie);
                                } catch (e) {}
                            }

                            if (key === name) {
                                result = cookie;
                                break;
                            }

                            if (!key) {
                                result[name] = cookie;
                            }
                        } catch (e) {}
                    }

                    return result;
                }

                api.set = api;
                api.get = function (key) {
                    return api.call(api, key);
                };
                api.getJSON = function () {
                    return api.apply({
                        json: true
                    }, [].slice.call(arguments));
                };
                api.defaults = {};

                api.remove = function (key, attributes) {
                    api(key, '', extend(attributes, {
                        expires: -1
                    }));
                };

                api.withConverter = init;

                return api;
            }

            return init(function () {});
        }));


        /***/ },
    /* 22 */
    /***/ function(module, exports, __webpack_require__) {

        /*!
         * @module report
         * @author kael, chriscai
         * @date @DATE
         * Copyright (c) 2014 kael, chriscai
         * Licensed under the MIT license.
         */
        var BJ_REPORT = (function(global) {
            if (global.BJ_REPORT) return global.BJ_REPORT;

            var _error = [];
            var _error_map = {};
            var _config = {
                id: 0, // 上报 id
                uin: 0, // user id
                url: "", // 上报 接口
                combo: 1, // 是否合并 !0-合并 0-不合并
                ext: null, // 扩展参数 用于自定义上报
                level: 4, // 错误级别 1-debug 2-info 4-error
                ignore: [], // 忽略某个错误, 支持 Regexp 和 Function
                random: 1, // 抽样 (0-1] 1-全量
                delay: 1000, // 延迟上报 combo 为 true 时有效
                submit: null, // 自定义上报方式
                repeat: 1 // 重复上报次数(对于同一个错误超过多少次不上报)
            };

            var _isOBJByType = function(o, type) {
                return Object.prototype.toString.call(o) === "[object " + (type || "Object") + "]";
            };

            var _isOBJ = function(obj) {
                var type = typeof obj;
                return type === "object" && !!obj;
            };

            var _isEmpty = function(obj) {
                if (obj === null) return true;
                if (_isOBJByType(obj, "Number")) {
                    return false;
                }
                return !obj;
            };

            var orgError = global.onerror;
            // rewrite window.oerror
            global.onerror = function(msg, url, line, col, error) {
                var newMsg = msg;

                if (error && error.stack) {
                    newMsg = _processStackMsg(error);
                }

                if (_isOBJByType(newMsg, "Event")) {
                    newMsg += newMsg.type ?
                        ("--" + newMsg.type + "--" + (newMsg.target ?
                            (newMsg.target.tagName + "::" + newMsg.target.src) : "")) : "";
                }

                report.push({
                    msg: newMsg,
                    target: url,
                    rowNum: line,
                    colNum: col
                });

                _send();
                orgError && orgError.apply(global, arguments);
            };

            var _processError = function(errObj) {
                try {
                    if (errObj.stack) {
                        var url = errObj.stack.match("https?://[^\n]+");
                        url = url ? url[0] : "";
                        var rowCols = url.match(":(\\d+):(\\d+)");
                        if (!rowCols) {
                            rowCols = [0, 0, 0];
                        }

                        var stack = _processStackMsg(errObj);
                        return {
                            msg: stack,
                            rowNum: rowCols[1],
                            colNum: rowCols[2],
                            target: url.replace(rowCols[0], "")
                        };
                    } else {
                        //ie 独有 error 对象信息，try-catch 捕获到错误信息传过来，造成没有msg
                        if (errObj.name && errObj.message && errObj.description) {
                            return {
                                msg: JSON.stringify(errObj)
                            };
                        }
                        return errObj;
                    }
                } catch (err) {
                    return errObj;
                }
            };

            var _processStackMsg = function(error) {
                var stack = error.stack
                    .replace(/\n/gi, "")
                    .split(/\bat\b/)
                    .slice(0, 9)
                    .join("@")
                    .replace(/\?[^:]+/gi, "");
                var msg = error.toString();
                if (stack.indexOf(msg) < 0) {
                    stack = msg + "@" + stack;
                }
                return stack;
            };

            var _error_tostring = function(error, index) {
                var param = [];
                var params = [];
                var stringify = [];
                if (_isOBJ(error)) {
                    error.level = error.level || _config.level;
                    for (var key in error) {
                        var value = error[key];
                        if (!_isEmpty(value)) {
                            if (_isOBJ(value)) {
                                try {
                                    value = JSON.stringify(value);
                                } catch (err) {
                                    value = "[BJ_REPORT detect value stringify error] " + err.toString();
                                }
                            }
                            stringify.push(key + ":" + value);
                            param.push(key + "=" + encodeURIComponent(value));
                            params.push(key + "[" + index + "]=" + encodeURIComponent(value));
                        }
                    }
                }

                // msg[0]=msg&target[0]=target -- combo report
                // msg:msg,target:target -- ignore
                // msg=msg&target=target -- report with out combo
                return [params.join("&"), stringify.join(","), param.join("&")];
            };

            var _imgs = [];
            var _submit = function(url) {
                if (_config.submit) {
                    _config.submit(url);
                } else {
                    var _img = new Image();
                    _imgs.push(_img);
                    _img.src = url;
                }
            };

            var _is_repert = function(error) {
                if (!_isOBJ(error)) return true;
                var msg = error.msg;
                var times = _error_map[msg] = (parseInt(_error_map[msg], 10) || 0) + 1;
                return times > _config.repeat;
            };

            var error_list = [];
            var comboTimeout = 0;
            var _send = function(isReoprtNow) {
                if (!_config.report) return;

                while (_error.length) {
                    var isIgnore = false;
                    var error = _error.shift();
                    // 重复上报
                    if (_is_repert(error)) continue;
                    var error_str = _error_tostring(error, error_list.length);
                    if (_isOBJByType(_config.ignore, "Array")) {
                        for (var i = 0, l = _config.ignore.length; i < l; i++) {
                            var rule = _config.ignore[i];
                            if ((_isOBJByType(rule, "RegExp") && rule.test(error_str[1])) ||
                                (_isOBJByType(rule, "Function") && rule(error, error_str[1]))) {
                                isIgnore = true;
                                break;
                            }
                        }
                    }
                    if (!isIgnore) {
                        if (_config.combo) {
                            error_list.push(error_str[0]);
                        } else {
                            _submit(_config.report + error_str[2] + "&_t=" + (+new Date));
                        }
                        _config.onReport && (_config.onReport(_config.id, error));
                    }
                }

                // 合并上报
                var count = error_list.length;
                if (count) {
                    var comboReport = function() {
                        clearTimeout(comboTimeout);
                        _submit(_config.report + error_list.join("&") + "&count=" + error_list.length + "&_t=" + (+new Date));
                        comboTimeout = 0;
                        error_list = [];
                    };

                    if (isReoprtNow) {
                        comboReport(); // 立即上报
                    } else if (!comboTimeout) {
                        comboTimeout = setTimeout(comboReport, _config.delay); // 延迟上报
                    }
                }
            };

            var report = global.BJ_REPORT = {
                push: function(msg) { // 将错误推到缓存池
                    // 抽样
                    if (Math.random() >= _config.random) {
                        return report;
                    }

                    var data = _isOBJ(msg) ? _processError(msg) : {
                        msg: msg
                    };

                    // ext 有默认值, 且上报不包含 ext, 使用默认 ext
                    if (_config.ext && !data.ext) {
                        data.ext = _config.ext;
                    }
                    _error.push(data);
                    _send();
                    return report;
                },
                report: function(msg) { // error report
                    msg && report.push(msg);
                    _send(true);
                    return report;
                },
                info: function(msg) { // info report
                    if (!msg) {
                        return report;
                    }
                    if (_isOBJ(msg)) {
                        msg.level = 2;
                    } else {
                        msg = {
                            msg: msg,
                            level: 2
                        };
                    }
                    report.push(msg);
                    return report;
                },
                debug: function(msg) { // debug report
                    if (!msg) {
                        return report;
                    }
                    if (_isOBJ(msg)) {
                        msg.level = 1;
                    } else {
                        msg = {
                            msg: msg,
                            level: 1
                        };
                    }
                    report.push(msg);
                    return report;
                },
                init: function(config) { // 初始化
                    if (_isOBJ(config)) {
                        for (var key in config) {
                            _config[key] = config[key];
                        }
                    }
                    // 没有设置id将不上报
                    var id = parseInt(_config.id, 10);
                    if (id) {
                        // set default report url and uin
                        if (/qq\.com$/gi.test(location.hostname)) {
                            if (!_config.url) {
                                _config.url = "//badjs2.qq.com/badjs";
                            }

                            if (!_config.uin) {
                                _config.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10);
                            }
                        }

                        _config.report = (_config.url || "/badjs") +
                            "?id=" + id +
                            "&uin=" + _config.uin +
                            "&from=" + encodeURIComponent(location.href) +
                            "&";
                    }

                    // if had error in cache , report now
                    if (_error.length) {
                        _send();
                    }
                    return report;
                },

                __onerror__: global.onerror
            };

            typeof console !== "undefined" && console.error && setTimeout(function() {
                var err = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
                err && console.error("BJ_ERROR", decodeURIComponent(err).replace(/(:\d+:\d+)\s*/g, "$1\n"));
            }, 0);

            return report;

        }(window));

        if (true) {
            module.exports = BJ_REPORT;
        };(function(global) {

            if (!global.BJ_REPORT) {
                console.error("please load bg-report first");
                return;
            }

            var _onthrow = function(errObj) {
                global.BJ_REPORT.report(errObj);
            };

            var tryJs = {};
            global.BJ_REPORT.tryJs = function(throwCb) {
                throwCb && (_onthrow = throwCb);
                return tryJs;
            };

            // merge
            var _merge = function(org, obj) {
                for (var key in obj) {
                    org[key] = obj[key];
                }
            };

            // function or not
            var _isFunction = function(foo) {
                return typeof foo === "function";
            };

            var timeoutkey;

            var cat = function(foo, args) {
                return function() {
                    try {
                        return foo.apply(this, args || arguments);
                    } catch (error) {

                        _onthrow(error);

                        //some browser throw error (chrome) , can not find error where it throw,  so print it on console;
                        if (error.stack && console && console.error) {
                            console.error("[BJ-REPORT]", error.stack);
                        }

                        // hang up browser and throw , but it should trigger onerror , so rewrite onerror then recover it
                        if (!timeoutkey) {
                            var orgOnerror = global.onerror;
                            global.onerror = function() {};
                            timeoutkey = setTimeout(function() {
                                global.onerror = orgOnerror;
                                timeoutkey = null;
                            }, 50);
                        }
                        throw error;
                    }
                };
            };

            var catArgs = function(foo) {
                return function() {
                    var arg, args = [];
                    for (var i = 0, l = arguments.length; i < l; i++) {
                        arg = arguments[i];
                        _isFunction(arg) && (arg = cat(arg));
                        args.push(arg);
                    }
                    return foo.apply(this, args);
                };
            };

            var catTimeout = function(foo) {
                return function(cb, timeout) {
                    // for setTimeout(string, delay)
                    if (typeof cb === "string") {
                        try {
                            cb = new Function(cb);
                        } catch (err) {
                            throw err;
                        }
                    }
                    var args = [].slice.call(arguments, 2);
                    // for setTimeout(function, delay, param1, ...)
                    cb = cat(cb, args.length && args);
                    return foo(cb, timeout);
                };
            };

            /**
             * makeArgsTry
             * wrap a function's arguments with try & catch
             * @param {Function} foo
             * @param {Object} self
             * @returns {Function}
             */
            var makeArgsTry = function(foo, self) {
                return function() {
                    var arg, tmp, args = [];
                    for (var i = 0, l = arguments.length; i < l; i++) {
                        arg = arguments[i];
                        _isFunction(arg) && (tmp = cat(arg)) &&
                        (arg.tryWrap = tmp) && (arg = tmp);
                        args.push(arg);
                    }
                    return foo.apply(self || this, args);
                };
            };

            /**
             * makeObjTry
             * wrap a object's all value with try & catch
             * @param {Function} foo
             * @param {Object} self
             * @returns {Function}
             */
            var makeObjTry = function(obj) {
                var key, value;
                for (key in obj) {
                    value = obj[key];
                    if (_isFunction(value)) obj[key] = cat(value);
                }
                return obj;
            };

            /**
             * wrap jquery async function ,exp : event.add , event.remove , ajax
             * @returns {Function}
             */
            tryJs.spyJquery = function() {
                var _$ = global.$;

                if (!_$ || !_$.event) {
                    return tryJs;
                }

                var _add, _remove;
                if (_$.zepto) {
                    _add = _$.fn.on, _remove = _$.fn.off;

                    _$.fn.on = makeArgsTry(_add);
                    _$.fn.off = function() {
                        var arg, args = [];
                        for (var i = 0, l = arguments.length; i < l; i++) {
                            arg = arguments[i];
                            _isFunction(arg) && arg.tryWrap && (arg = arg.tryWrap);
                            args.push(arg);
                        }
                        return _remove.apply(this, args);
                    };

                } else if (window.jQuery) {
                    _add = _$.event.add, _remove = _$.event.remove;

                    _$.event.add = makeArgsTry(_add);
                    _$.event.remove = function() {
                        var arg, args = [];
                        for (var i = 0, l = arguments.length; i < l; i++) {
                            arg = arguments[i];
                            _isFunction(arg) && arg.tryWrap && (arg = arg.tryWrap);
                            args.push(arg);
                        }
                        return _remove.apply(this, args);
                    };
                }

                var _ajax = _$.ajax;

                if (_ajax) {
                    _$.ajax = function(url, setting) {
                        if (!setting) {
                            setting = url;
                            url = undefined;
                        }
                        makeObjTry(setting);
                        if (url) return _ajax.call(_$, url, setting);
                        return _ajax.call(_$, setting);
                    };
                }

                return tryJs;
            };

            /**
             * wrap amd or commonjs of function  ,exp :  define , require ,
             * @returns {Function}
             */
            tryJs.spyModules = function() {
                var _require = global.require,
                    _define = global.define;
                if (_define && _define.amd && _require) {
                    global.require = catArgs(_require);
                    _merge(global.require, _require);
                    global.define = catArgs(_define);
                    _merge(global.define, _define);
                }

                if (global.seajs && _define) {
                    global.define = function() {
                        var arg, args = [];
                        for (var i = 0, l = arguments.length; i < l; i++) {
                            arg = arguments[i];
                            if (_isFunction(arg)) {
                                arg = cat(arg);
                                //seajs should use toString parse dependencies , so rewrite it
                                arg.toString = (function(orgArg) {
                                    return function() {
                                        return orgArg.toString();
                                    };
                                }(arguments[i]));
                            }
                            args.push(arg);
                        }
                        return _define.apply(this, args);
                    };

                    global.seajs.use = catArgs(global.seajs.use);

                    _merge(global.define, _define);
                }

                return tryJs;
            };

            /**
             * wrap async of function in window , exp : setTimeout , setInterval
             * @returns {Function}
             */
            tryJs.spySystem = function() {
                global.setTimeout = catTimeout(global.setTimeout);
                global.setInterval = catTimeout(global.setInterval);
                return tryJs;
            };

            /**
             * wrap custom of function ,
             * @param obj - obj or  function
             * @returns {Function}
             */
            tryJs.spyCustom = function(obj) {
                if (_isFunction(obj)) {
                    return cat(obj);
                } else {
                    return makeObjTry(obj);
                }
            };

            /**
             * run spyJquery() and spyModules() and spySystem()
             * @returns {Function}
             */
            tryJs.spyAll = function() {
                tryJs
                    .spyJquery()
                    .spyModules()
                    .spySystem();
                return tryJs;
            };

        }(window));

        /***/ },
    /* 23 */
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
         * jQuery JavaScript Library v1.9.0
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2013-1-14
         */
        (function( window, undefined ) {
            "use strict";
            var
            // A central reference to the root jQuery(document)
                rootjQuery,

            // The deferred used on DOM ready
                readyList,

            // Use the correct document accordingly with window argument (sandbox)
                document = window.document,
                location = window.location,

            // Map over jQuery in case of overwrite
                _jQuery = window.jQuery,

            // Map over the $ in case of overwrite
                _$ = window.$,

            // [[Class]] -> type pairs
                class2type = {},

            // List of deleted data cache ids, so we can reuse them
                core_deletedIds = [],

                core_version = "1.9.0",

            // Save a reference to some core methods
                core_concat = core_deletedIds.concat,
                core_push = core_deletedIds.push,
                core_slice = core_deletedIds.slice,
                core_indexOf = core_deletedIds.indexOf,
                core_toString = class2type.toString,
                core_hasOwn = class2type.hasOwnProperty,
                core_trim = core_version.trim,

            // Define a local copy of jQuery
                jQuery = function( selector, context ) {
                    // The jQuery object is actually just the init constructor 'enhanced'
                    return new jQuery.fn.init( selector, context, rootjQuery );
                },

            // Used for matching numbers
                core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

            // Used for splitting on whitespace
                core_rnotwhite = /\S+/g,

            // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
                rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

            // A simple way to check for HTML strings
            // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
            // Strict HTML recognition (#11290: must start with <)
                rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

            // Match a standalone tag
                rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

            // JSON RegExp
                rvalidchars = /^[\],:{}\s]*$/,
                rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
                rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

            // Matches dashed string for camelizing
                rmsPrefix = /^-ms-/,
                rdashAlpha = /-([\da-z])/gi,

            // Used by jQuery.camelCase as callback to replace()
                fcamelCase = function( all, letter ) {
                    return letter.toUpperCase();
                },

            // The ready event handler and self cleanup method
                DOMContentLoaded = function() {
                    if ( document.addEventListener ) {
                        document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                        jQuery.ready();
                    } else if ( document.readyState === "complete" ) {
                        // we're here because readyState === "complete" in oldIE
                        // which is good enough for us to call the dom ready!
                        document.detachEvent( "onreadystatechange", DOMContentLoaded );
                        jQuery.ready();
                    }
                };

            jQuery.fn = jQuery.prototype = {
                // The current version of jQuery being used
                jquery: core_version,

                constructor: jQuery,
                init: function( selector, context, rootjQuery ) {
                    var match, elem;

                    // HANDLE: $(""), $(null), $(undefined), $(false)
                    if ( !selector ) {
                        return this;
                    }

                    // Handle HTML strings
                    if ( typeof selector === "string" ) {
                        if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
                            // Assume that strings that start and end with <> are HTML and skip the regex check
                            match = [ null, selector, null ];

                        } else {
                            match = rquickExpr.exec( selector );
                        }

                        // Match html or make sure no context is specified for #id
                        if ( match && (match[1] || !context) ) {

                            // HANDLE: $(html) -> $(array)
                            if ( match[1] ) {
                                context = context instanceof jQuery ? context[0] : context;

                                // scripts is true for back-compat
                                jQuery.merge( this, jQuery.parseHTML(
                                    match[1],
                                    context && context.nodeType ? context.ownerDocument || context : document,
                                    true
                                ) );

                                // HANDLE: $(html, props)
                                if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
                                    for ( match in context ) {
                                        // Properties of context are called as methods if possible
                                        if ( jQuery.isFunction( this[ match ] ) ) {
                                            this[ match ]( context[ match ] );

                                            // ...and otherwise set as attributes
                                        } else {
                                            this.attr( match, context[ match ] );
                                        }
                                    }
                                }

                                return this;

                                // HANDLE: $(#id)
                            } else {
                                elem = document.getElementById( match[2] );

                                // Check parentNode to catch when Blackberry 4.6 returns
                                // nodes that are no longer in the document #6963
                                if ( elem && elem.parentNode ) {
                                    // Handle the case where IE and Opera return items
                                    // by name instead of ID
                                    if ( elem.id !== match[2] ) {
                                        return rootjQuery.find( selector );
                                    }

                                    // Otherwise, we inject the element directly into the jQuery object
                                    this.length = 1;
                                    this[0] = elem;
                                }

                                this.context = document;
                                this.selector = selector;
                                return this;
                            }

                            // HANDLE: $(expr, $(...))
                        } else if ( !context || context.jquery ) {
                            return ( context || rootjQuery ).find( selector );

                            // HANDLE: $(expr, context)
                            // (which is just equivalent to: $(context).find(expr)
                        } else {
                            return this.constructor( context ).find( selector );
                        }

                        // HANDLE: $(DOMElement)
                    } else if ( selector.nodeType ) {
                        this.context = this[0] = selector;
                        this.length = 1;
                        return this;

                        // HANDLE: $(function)
                        // Shortcut for document ready
                    } else if ( jQuery.isFunction( selector ) ) {
                        return rootjQuery.ready( selector );
                    }

                    if ( selector.selector !== undefined ) {
                        this.selector = selector.selector;
                        this.context = selector.context;
                    }

                    return jQuery.makeArray( selector, this );
                },

                // Start with an empty selector
                selector: "",

                // The default length of a jQuery object is 0
                length: 0,

                // The number of elements contained in the matched element set
                size: function() {
                    return this.length;
                },

                toArray: function() {
                    return core_slice.call( this );
                },

                // Get the Nth element in the matched element set OR
                // Get the whole matched element set as a clean array
                get: function( num ) {
                    return num == null ?

                        // Return a 'clean' array
                        this.toArray() :

                        // Return just the object
                        ( num < 0 ? this[ this.length + num ] : this[ num ] );
                },

                // Take an array of elements and push it onto the stack
                // (returning the new matched element set)
                pushStack: function( elems ) {

                    // Build a new jQuery matched element set
                    var ret = jQuery.merge( this.constructor(), elems );

                    // Add the old object onto the stack (as a reference)
                    ret.prevObject = this;
                    ret.context = this.context;

                    // Return the newly-formed element set
                    return ret;
                },

                // Execute a callback for every element in the matched set.
                // (You can seed the arguments with an array of args, but this is
                // only used internally.)
                each: function( callback, args ) {
                    return jQuery.each( this, callback, args );
                },

                ready: function( fn ) {
                    // Add the callback
                    jQuery.ready.promise().done( fn );

                    return this;
                },

                slice: function() {
                    return this.pushStack( core_slice.apply( this, arguments ) );
                },

                first: function() {
                    return this.eq( 0 );
                },

                last: function() {
                    return this.eq( -1 );
                },

                eq: function( i ) {
                    var len = this.length,
                        j = +i + ( i < 0 ? len : 0 );
                    return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
                },

                map: function( callback ) {
                    return this.pushStack( jQuery.map(this, function( elem, i ) {
                        return callback.call( elem, i, elem );
                    }));
                },

                end: function() {
                    return this.prevObject || this.constructor(null);
                },

                // For internal use only.
                // Behaves like an Array's method, not like a jQuery method.
                push: core_push,
                sort: [].sort,
                splice: [].splice
            };

            // Give the init function the jQuery prototype for later instantiation
            jQuery.fn.init.prototype = jQuery.fn;

            jQuery.extend = jQuery.fn.extend = function() {
                var options, name, src, copy, copyIsArray, clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;

                // Handle a deep copy situation
                if ( typeof target === "boolean" ) {
                    deep = target;
                    target = arguments[1] || {};
                    // skip the boolean and the target
                    i = 2;
                }

                // Handle case when target is a string or something (possible in deep copy)
                if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
                    target = {};
                }

                // extend jQuery itself if only one argument is passed
                if ( length === i ) {
                    target = this;
                    --i;
                }

                for ( ; i < length; i++ ) {
                    // Only deal with non-null/undefined values
                    if ( (options = arguments[ i ]) != null ) {
                        // Extend the base object
                        for ( name in options ) {
                            src = target[ name ];
                            copy = options[ name ];

                            // Prevent never-ending loop
                            if ( target === copy ) {
                                continue;
                            }

                            // Recurse if we're merging plain objects or arrays
                            if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                                if ( copyIsArray ) {
                                    copyIsArray = false;
                                    clone = src && jQuery.isArray(src) ? src : [];

                                } else {
                                    clone = src && jQuery.isPlainObject(src) ? src : {};
                                }

                                // Never move original objects, clone them
                                target[ name ] = jQuery.extend( deep, clone, copy );

                                // Don't bring in undefined values
                            } else if ( copy !== undefined ) {
                                target[ name ] = copy;
                            }
                        }
                    }
                }

                // Return the modified object
                return target;
            };

            jQuery.extend({
                noConflict: function( deep ) {
                    if ( window.$ === jQuery ) {
                        window.$ = _$;
                    }

                    if ( deep && window.jQuery === jQuery ) {
                        window.jQuery = _jQuery;
                    }

                    return jQuery;
                },

                // Is the DOM ready to be used? Set to true once it occurs.
                isReady: false,

                // A counter to track how many items to wait for before
                // the ready event fires. See #6781
                readyWait: 1,

                // Hold (or release) the ready event
                holdReady: function( hold ) {
                    if ( hold ) {
                        jQuery.readyWait++;
                    } else {
                        jQuery.ready( true );
                    }
                },

                // Handle when the DOM is ready
                ready: function( wait ) {

                    // Abort if there are pending holds or we're already ready
                    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                        return;
                    }

                    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                    if ( !document.body ) {
                        return setTimeout( jQuery.ready );
                    }

                    // Remember that the DOM is ready
                    jQuery.isReady = true;

                    // If a normal DOM Ready event fired, decrement, and wait if need be
                    if ( wait !== true && --jQuery.readyWait > 0 ) {
                        return;
                    }

                    // If there are functions bound, to execute
                    readyList.resolveWith( document, [ jQuery ] );

                    // Trigger any bound ready events
                    if ( jQuery.fn.trigger ) {
                        jQuery( document ).trigger("ready").off("ready");
                    }
                },

                // See test/unit/core.js for details concerning isFunction.
                // Since version 1.3, DOM methods and functions like alert
                // aren't supported. They return false on IE (#2968).
                isFunction: function( obj ) {
                    return jQuery.type(obj) === "function";
                },

                isArray: Array.isArray || function( obj ) {
                    return jQuery.type(obj) === "array";
                },

                isWindow: function( obj ) {
                    return obj != null && obj == obj.window;
                },

                isNumeric: function( obj ) {
                    return !isNaN( parseFloat(obj) ) && isFinite( obj );
                },

                type: function( obj ) {
                    if ( obj == null ) {
                        return String( obj );
                    }
                    return typeof obj === "object" || typeof obj === "function" ?
                    class2type[ core_toString.call(obj) ] || "object" :
                        typeof obj;
                },

                isPlainObject: function( obj ) {
                    // Must be an Object.
                    // Because of IE, we also have to check the presence of the constructor property.
                    // Make sure that DOM nodes and window objects don't pass through, as well
                    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
                        return false;
                    }

                    try {
                        // Not own constructor property must be Object
                        if ( obj.constructor &&
                            !core_hasOwn.call(obj, "constructor") &&
                            !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                            return false;
                        }
                    } catch ( e ) {
                        // IE8,9 Will throw exceptions on certain host objects #9897
                        return false;
                    }

                    // Own properties are enumerated firstly, so to speed up,
                    // if last one is own, then all properties are own.

                    var key;
                    for ( key in obj ) {}

                    return key === undefined || core_hasOwn.call( obj, key );
                },

                isEmptyObject: function( obj ) {
                    var name;
                    for ( name in obj ) {
                        return false;
                    }
                    return true;
                },

                error: function( msg ) {
                    throw new Error( msg );
                },

                // data: string of html
                // context (optional): If specified, the fragment will be created in this context, defaults to document
                // keepScripts (optional): If true, will include scripts passed in the html string
                parseHTML: function( data, context, keepScripts ) {
                    if ( !data || typeof data !== "string" ) {
                        return null;
                    }
                    if ( typeof context === "boolean" ) {
                        keepScripts = context;
                        context = false;
                    }
                    context = context || document;

                    var parsed = rsingleTag.exec( data ),
                        scripts = !keepScripts && [];

                    // Single tag
                    if ( parsed ) {
                        return [ context.createElement( parsed[1] ) ];
                    }

                    parsed = jQuery.buildFragment( [ data ], context, scripts );
                    if ( scripts ) {
                        jQuery( scripts ).remove();
                    }
                    return jQuery.merge( [], parsed.childNodes );
                },

                parseJSON: function( data ) {
                    // Attempt to parse using the native JSON parser first
                    if ( window.JSON && window.JSON.parse ) {
                        return window.JSON.parse( data );
                    }

                    if ( data === null ) {
                        return data;
                    }

                    if ( typeof data === "string" ) {

                        // Make sure leading/trailing whitespace is removed (IE can't handle it)
                        data = jQuery.trim( data );

                        if ( data ) {
                            // Make sure the incoming data is actual JSON
                            // Logic borrowed from http://json.org/json2.js
                            if ( rvalidchars.test( data.replace( rvalidescape, "@" )
                                    .replace( rvalidtokens, "]" )
                                    .replace( rvalidbraces, "")) ) {

                                return ( new Function( "return " + data ) )();
                            }
                        }
                    }

                    jQuery.error( "Invalid JSON: " + data );
                },

                // Cross-browser xml parsing
                parseXML: function( data ) {
                    var xml, tmp;
                    if ( !data || typeof data !== "string" ) {
                        return null;
                    }
                    try {
                        if ( window.DOMParser ) { // Standard
                            tmp = new DOMParser();
                            xml = tmp.parseFromString( data , "text/xml" );
                        } else { // IE
                            xml = new ActiveXObject( "Microsoft.XMLDOM" );
                            xml.async = "false";
                            xml.loadXML( data );
                        }
                    } catch( e ) {
                        xml = undefined;
                    }
                    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
                        jQuery.error( "Invalid XML: " + data );
                    }
                    return xml;
                },

                noop: function() {},

                // Evaluates a script in a global context
                // Workarounds based on findings by Jim Driscoll
                // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
                globalEval: function( data ) {
                    if ( data && jQuery.trim( data ) ) {
                        // We use execScript on Internet Explorer
                        // We use an anonymous function so that context is window
                        // rather than jQuery in Firefox
                        ( window.execScript || function( data ) {
                            window[ "eval" ].call( window, data );
                        } )( data );
                    }
                },

                // Convert dashed to camelCase; used by the css and data modules
                // Microsoft forgot to hump their vendor prefix (#9572)
                camelCase: function( string ) {
                    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
                },

                nodeName: function( elem, name ) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                },

                // args is for internal usage only
                each: function( obj, callback, args ) {
                    var value,
                        i = 0,
                        length = obj.length,
                        isArray = isArraylike( obj );

                    if ( args ) {
                        if ( isArray ) {
                            for ( ; i < length; i++ ) {
                                value = callback.apply( obj[ i ], args );

                                if ( value === false ) {
                                    break;
                                }
                            }
                        } else {
                            for ( i in obj ) {
                                value = callback.apply( obj[ i ], args );

                                if ( value === false ) {
                                    break;
                                }
                            }
                        }

                        // A special, fast, case for the most common use of each
                    } else {
                        if ( isArray ) {
                            for ( ; i < length; i++ ) {
                                value = callback.call( obj[ i ], i, obj[ i ] );

                                if ( value === false ) {
                                    break;
                                }
                            }
                        } else {
                            for ( i in obj ) {
                                value = callback.call( obj[ i ], i, obj[ i ] );

                                if ( value === false ) {
                                    break;
                                }
                            }
                        }
                    }

                    return obj;
                },

                // Use native String.trim function wherever possible
                trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
                    function( text ) {
                        return text == null ?
                            "" :
                            core_trim.call( text );
                    } :

                    // Otherwise use our own trimming functionality
                    function( text ) {
                        return text == null ?
                            "" :
                            ( text + "" ).replace( rtrim, "" );
                    },

                // results is for internal usage only
                makeArray: function( arr, results ) {
                    var ret = results || [];

                    if ( arr != null ) {
                        if ( isArraylike( Object(arr) ) ) {
                            jQuery.merge( ret,
                                typeof arr === "string" ?
                                    [ arr ] : arr
                            );
                        } else {
                            core_push.call( ret, arr );
                        }
                    }

                    return ret;
                },

                inArray: function( elem, arr, i ) {
                    var len;

                    if ( arr ) {
                        if ( core_indexOf ) {
                            return core_indexOf.call( arr, elem, i );
                        }

                        len = arr.length;
                        i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

                        for ( ; i < len; i++ ) {
                            // Skip accessing in sparse arrays
                            if ( i in arr && arr[ i ] === elem ) {
                                return i;
                            }
                        }
                    }

                    return -1;
                },

                merge: function( first, second ) {
                    var l = second.length,
                        i = first.length,
                        j = 0;

                    if ( typeof l === "number" ) {
                        for ( ; j < l; j++ ) {
                            first[ i++ ] = second[ j ];
                        }
                    } else {
                        while ( second[j] !== undefined ) {
                            first[ i++ ] = second[ j++ ];
                        }
                    }

                    first.length = i;

                    return first;
                },

                grep: function( elems, callback, inv ) {
                    var retVal,
                        ret = [],
                        i = 0,
                        length = elems.length;
                    inv = !!inv;

                    // Go through the array, only saving the items
                    // that pass the validator function
                    for ( ; i < length; i++ ) {
                        retVal = !!callback( elems[ i ], i );
                        if ( inv !== retVal ) {
                            ret.push( elems[ i ] );
                        }
                    }

                    return ret;
                },

                // arg is for internal usage only
                map: function( elems, callback, arg ) {
                    var value,
                        i = 0,
                        length = elems.length,
                        isArray = isArraylike( elems ),
                        ret = [];

                    // Go through the array, translating each of the items to their
                    if ( isArray ) {
                        for ( ; i < length; i++ ) {
                            value = callback( elems[ i ], i, arg );

                            if ( value != null ) {
                                ret[ ret.length ] = value;
                            }
                        }

                        // Go through every key on the object,
                    } else {
                        for ( i in elems ) {
                            value = callback( elems[ i ], i, arg );

                            if ( value != null ) {
                                ret[ ret.length ] = value;
                            }
                        }
                    }

                    // Flatten any nested arrays
                    return core_concat.apply( [], ret );
                },

                // A global GUID counter for objects
                guid: 1,

                // Bind a function to a context, optionally partially applying any
                // arguments.
                proxy: function( fn, context ) {
                    var tmp, args, proxy;

                    if ( typeof context === "string" ) {
                        tmp = fn[ context ];
                        context = fn;
                        fn = tmp;
                    }

                    // Quick check to determine if target is callable, in the spec
                    // this throws a TypeError, but we will just return undefined.
                    if ( !jQuery.isFunction( fn ) ) {
                        return undefined;
                    }

                    // Simulated bind
                    args = core_slice.call( arguments, 2 );
                    proxy = function() {
                        return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
                    };

                    // Set the guid of unique handler to the same of original handler, so it can be removed
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

                    return proxy;
                },

                // Multifunctional method to get and set values of a collection
                // The value/s can optionally be executed if it's a function
                access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
                    var i = 0,
                        length = elems.length,
                        bulk = key == null;

                    // Sets many values
                    if ( jQuery.type( key ) === "object" ) {
                        chainable = true;
                        for ( i in key ) {
                            jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
                        }

                        // Sets one value
                    } else if ( value !== undefined ) {
                        chainable = true;

                        if ( !jQuery.isFunction( value ) ) {
                            raw = true;
                        }

                        if ( bulk ) {
                            // Bulk operations run against the entire set
                            if ( raw ) {
                                fn.call( elems, value );
                                fn = null;

                                // ...except when executing function values
                            } else {
                                bulk = fn;
                                fn = function( elem, key, value ) {
                                    return bulk.call( jQuery( elem ), value );
                                };
                            }
                        }

                        if ( fn ) {
                            for ( ; i < length; i++ ) {
                                fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
                            }
                        }
                    }

                    return chainable ?
                        elems :

                        // Gets
                        bulk ?
                            fn.call( elems ) :
                            length ? fn( elems[0], key ) : emptyGet;
                },

                now: function() {
                    return ( new Date() ).getTime();
                }
            });

            jQuery.ready.promise = function( obj ) {
                if ( !readyList ) {

                    readyList = jQuery.Deferred();

                    // Catch cases where $(document).ready() is called after the browser event has already occurred.
                    // we once tried to use readyState "interactive" here, but it caused issues like the one
                    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
                    if ( document.readyState === "complete" ) {
                        // Handle it asynchronously to allow scripts the opportunity to delay ready
                        setTimeout( jQuery.ready );

                        // Standards-based browsers support DOMContentLoaded
                    } else if ( document.addEventListener ) {
                        // Use the handy event callback
                        document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

                        // A fallback to window.onload, that will always work
                        window.addEventListener( "load", jQuery.ready, false );

                        // If IE event model is used
                    } else {
                        // Ensure firing before onload, maybe late but safe also for iframes
                        document.attachEvent( "onreadystatechange", DOMContentLoaded );

                        // A fallback to window.onload, that will always work
                        window.attachEvent( "onload", jQuery.ready );

                        // If IE and not a frame
                        // continually check to see if the document is ready
                        var top = false;

                        try {
                            top = window.frameElement == null && document.documentElement;
                        } catch(e) {}

                        if ( top && top.doScroll ) {
                            (function doScrollCheck() {
                                if ( !jQuery.isReady ) {

                                    try {
                                        // Use the trick by Diego Perini
                                        // http://javascript.nwbox.com/IEContentLoaded/
                                        top.doScroll("left");
                                    } catch(e) {
                                        return setTimeout( doScrollCheck, 50 );
                                    }

                                    // and execute any waiting functions
                                    jQuery.ready();
                                }
                            })();
                        }
                    }
                }
                return readyList.promise( obj );
            };

            // Populate the class2type map
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
                class2type[ "[object " + name + "]" ] = name.toLowerCase();
            });

            function isArraylike( obj ) {
                var length = obj.length,
                    type = jQuery.type( obj );

                if ( jQuery.isWindow( obj ) ) {
                    return false;
                }

                if ( obj.nodeType === 1 && length ) {
                    return true;
                }

                return type === "array" || type !== "function" &&
                    ( length === 0 ||
                    typeof length === "number" && length > 0 && ( length - 1 ) in obj );
            }

            // All jQuery objects should point back to these
            rootjQuery = jQuery(document);
            // String to Object options format cache
            var optionsCache = {};

            // Convert String-formatted options into Object-formatted ones and store in cache
            function createOptions( options ) {
                var object = optionsCache[ options ] = {};
                jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
                    object[ flag ] = true;
                });
                return object;
            }

            /*
             * Create a callback list using the following parameters:
             *
             *	options: an optional list of space-separated options that will change how
             *			the callback list behaves or a more traditional option object
             *
             * By default a callback list will act like an event callback list and can be
             * "fired" multiple times.
             *
             * Possible options:
             *
             *	once:			will ensure the callback list can only be fired once (like a Deferred)
             *
             *	memory:			will keep track of previous values and will call any callback added
             *					after the list has been fired right away with the latest "memorized"
             *					values (like a Deferred)
             *
             *	unique:			will ensure a callback can only be added once (no duplicate in the list)
             *
             *	stopOnFalse:	interrupt callings when a callback returns false
             *
             */
            jQuery.Callbacks = function( options ) {

                // Convert options from String-formatted to Object-formatted if needed
                // (we check in cache first)
                options = typeof options === "string" ?
                    ( optionsCache[ options ] || createOptions( options ) ) :
                    jQuery.extend( {}, options );

                var // Last fire value (for non-forgettable lists)
                    memory,
                // Flag to know if list was already fired
                    fired,
                // Flag to know if list is currently firing
                    firing,
                // First callback to fire (used internally by add and fireWith)
                    firingStart,
                // End of the loop when firing
                    firingLength,
                // Index of currently firing callback (modified by remove if needed)
                    firingIndex,
                // Actual callback list
                    list = [],
                // Stack of fire calls for repeatable lists
                    stack = !options.once && [],
                // Fire callbacks
                    fire = function( data ) {
                        memory = options.memory && data;
                        fired = true;
                        firingIndex = firingStart || 0;
                        firingStart = 0;
                        firingLength = list.length;
                        firing = true;
                        for ( ; list && firingIndex < firingLength; firingIndex++ ) {
                            if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
                                memory = false; // To prevent further calls using add
                                break;
                            }
                        }
                        firing = false;
                        if ( list ) {
                            if ( stack ) {
                                if ( stack.length ) {
                                    fire( stack.shift() );
                                }
                            } else if ( memory ) {
                                list = [];
                            } else {
                                self.disable();
                            }
                        }
                    },
                // Actual Callbacks object
                    self = {
                        // Add a callback or a collection of callbacks to the list
                        add: function() {
                            if ( list ) {
                                // First, we save the current length
                                var start = list.length;
                                (function add( args ) {
                                    jQuery.each( args, function( _, arg ) {
                                        var type = jQuery.type( arg );
                                        if ( type === "function" ) {
                                            if ( !options.unique || !self.has( arg ) ) {
                                                list.push( arg );
                                            }
                                        } else if ( arg && arg.length && type !== "string" ) {
                                            // Inspect recursively
                                            add( arg );
                                        }
                                    });
                                })( arguments );
                                // Do we need to add the callbacks to the
                                // current firing batch?
                                if ( firing ) {
                                    firingLength = list.length;
                                    // With memory, if we're not firing then
                                    // we should call right away
                                } else if ( memory ) {
                                    firingStart = start;
                                    fire( memory );
                                }
                            }
                            return this;
                        },
                        // Remove a callback from the list
                        remove: function() {
                            if ( list ) {
                                jQuery.each( arguments, function( _, arg ) {
                                    var index;
                                    while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                                        list.splice( index, 1 );
                                        // Handle firing indexes
                                        if ( firing ) {
                                            if ( index <= firingLength ) {
                                                firingLength--;
                                            }
                                            if ( index <= firingIndex ) {
                                                firingIndex--;
                                            }
                                        }
                                    }
                                });
                            }
                            return this;
                        },
                        // Control if a given callback is in the list
                        has: function( fn ) {
                            return jQuery.inArray( fn, list ) > -1;
                        },
                        // Remove all callbacks from the list
                        empty: function() {
                            list = [];
                            return this;
                        },
                        // Have the list do nothing anymore
                        disable: function() {
                            list = stack = memory = undefined;
                            return this;
                        },
                        // Is it disabled?
                        disabled: function() {
                            return !list;
                        },
                        // Lock the list in its current state
                        lock: function() {
                            stack = undefined;
                            if ( !memory ) {
                                self.disable();
                            }
                            return this;
                        },
                        // Is it locked?
                        locked: function() {
                            return !stack;
                        },
                        // Call all callbacks with the given context and arguments
                        fireWith: function( context, args ) {
                            args = args || [];
                            args = [ context, args.slice ? args.slice() : args ];
                            if ( list && ( !fired || stack ) ) {
                                if ( firing ) {
                                    stack.push( args );
                                } else {
                                    fire( args );
                                }
                            }
                            return this;
                        },
                        // Call all the callbacks with the given arguments
                        fire: function() {
                            self.fireWith( this, arguments );
                            return this;
                        },
                        // To know if the callbacks have already been called at least once
                        fired: function() {
                            return !!fired;
                        }
                    };

                return self;
            };
            jQuery.extend({

                Deferred: function( func ) {
                    var tuples = [
                            // action, add listener, listener list, final state
                            [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
                            [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
                            [ "notify", "progress", jQuery.Callbacks("memory") ]
                        ],
                        state = "pending",
                        promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done( arguments ).fail( arguments );
                                return this;
                            },
                            then: function( /* fnDone, fnFail, fnProgress */ ) {
                                var fns = arguments;
                                return jQuery.Deferred(function( newDefer ) {
                                    jQuery.each( tuples, function( i, tuple ) {
                                        var action = tuple[ 0 ],
                                            fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
                                        // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                        deferred[ tuple[1] ](function() {
                                            var returned = fn && fn.apply( this, arguments );
                                            if ( returned && jQuery.isFunction( returned.promise ) ) {
                                                returned.promise()
                                                    .done( newDefer.resolve )
                                                    .fail( newDefer.reject )
                                                    .progress( newDefer.notify );
                                            } else {
                                                newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
                                            }
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            },
                            // Get a promise for this deferred
                            // If obj is provided, the promise aspect is added to the object
                            promise: function( obj ) {
                                return obj != null ? jQuery.extend( obj, promise ) : promise;
                            }
                        },
                        deferred = {};

                    // Keep pipe for back-compat
                    promise.pipe = promise.then;

                    // Add list-specific methods
                    jQuery.each( tuples, function( i, tuple ) {
                        var list = tuple[ 2 ],
                            stateString = tuple[ 3 ];

                        // promise[ done | fail | progress ] = list.add
                        promise[ tuple[1] ] = list.add;

                        // Handle state
                        if ( stateString ) {
                            list.add(function() {
                                // state = [ resolved | rejected ]
                                state = stateString;

                                // [ reject_list | resolve_list ].disable; progress_list.lock
                            }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
                        }

                        // deferred[ resolve | reject | notify ]
                        deferred[ tuple[0] ] = function() {
                            deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
                            return this;
                        };
                        deferred[ tuple[0] + "With" ] = list.fireWith;
                    });

                    // Make the deferred a promise
                    promise.promise( deferred );

                    // Call given func if any
                    if ( func ) {
                        func.call( deferred, deferred );
                    }

                    // All done!
                    return deferred;
                },

                // Deferred helper
                when: function( subordinate /* , ..., subordinateN */ ) {
                    var i = 0,
                        resolveValues = core_slice.call( arguments ),
                        length = resolveValues.length,

                    // the count of uncompleted subordinates
                        remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

                    // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                        deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

                    // Update function for both resolve and progress values
                        updateFunc = function( i, contexts, values ) {
                            return function( value ) {
                                contexts[ i ] = this;
                                values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
                                if( values === progressValues ) {
                                    deferred.notifyWith( contexts, values );
                                } else if ( !( --remaining ) ) {
                                    deferred.resolveWith( contexts, values );
                                }
                            };
                        },

                        progressValues, progressContexts, resolveContexts;

                    // add listeners to Deferred subordinates; treat others as resolved
                    if ( length > 1 ) {
                        progressValues = new Array( length );
                        progressContexts = new Array( length );
                        resolveContexts = new Array( length );
                        for ( ; i < length; i++ ) {
                            if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
                                resolveValues[ i ].promise()
                                    .done( updateFunc( i, resolveContexts, resolveValues ) )
                                    .fail( deferred.reject )
                                    .progress( updateFunc( i, progressContexts, progressValues ) );
                            } else {
                                --remaining;
                            }
                        }
                    }

                    // if we're not waiting on anything, resolve the master
                    if ( !remaining ) {
                        deferred.resolveWith( resolveContexts, resolveValues );
                    }

                    return deferred.promise();
                }
            });
            jQuery.support = (function() {

                var support, all, a, select, opt, input, fragment, eventName, isSupported, i,
                    div = document.createElement("div");

                // Setup
                div.setAttribute( "className", "t" );
                div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

                // Support tests won't run in some limited or non-browser environments
                all = div.getElementsByTagName("*");
                a = div.getElementsByTagName("a")[ 0 ];
                if ( !all || !a || !all.length ) {
                    return {};
                }

                // First batch of tests
                select = document.createElement("select");
                opt = select.appendChild( document.createElement("option") );
                input = div.getElementsByTagName("input")[ 0 ];

                a.style.cssText = "top:1px;float:left;opacity:.5";
                support = {
                    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
                    getSetAttribute: div.className !== "t",

                    // IE strips leading whitespace when .innerHTML is used
                    leadingWhitespace: div.firstChild.nodeType === 3,

                    // Make sure that tbody elements aren't automatically inserted
                    // IE will insert them into empty tables
                    tbody: !div.getElementsByTagName("tbody").length,

                    // Make sure that link elements get serialized correctly by innerHTML
                    // This requires a wrapper element in IE
                    htmlSerialize: !!div.getElementsByTagName("link").length,

                    // Get the style information from getAttribute
                    // (IE uses .cssText instead)
                    style: /top/.test( a.getAttribute("style") ),

                    // Make sure that URLs aren't manipulated
                    // (IE normalizes it by default)
                    hrefNormalized: a.getAttribute("href") === "/a",

                    // Make sure that element opacity exists
                    // (IE uses filter instead)
                    // Use a regex to work around a WebKit issue. See #5145
                    opacity: /^0.5/.test( a.style.opacity ),

                    // Verify style float existence
                    // (IE uses styleFloat instead of cssFloat)
                    cssFloat: !!a.style.cssFloat,

                    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
                    checkOn: !!input.value,

                    // Make sure that a selected-by-default option has a working selected property.
                    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
                    optSelected: opt.selected,

                    // Tests for enctype support on a form (#6743)
                    enctype: !!document.createElement("form").enctype,

                    // Makes sure cloning an html5 element does not cause problems
                    // Where outerHTML is undefined, this still works
                    html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

                    // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
                    boxModel: document.compatMode === "CSS1Compat",

                    // Will be defined later
                    deleteExpando: true,
                    noCloneEvent: true,
                    inlineBlockNeedsLayout: false,
                    shrinkWrapBlocks: false,
                    reliableMarginRight: true,
                    boxSizingReliable: true,
                    pixelPosition: false
                };

                // Make sure checked status is properly cloned
                input.checked = true;
                support.noCloneChecked = input.cloneNode( true ).checked;

                // Make sure that the options inside disabled selects aren't marked as disabled
                // (WebKit marks them as disabled)
                select.disabled = true;
                support.optDisabled = !opt.disabled;

                // Support: IE<9
                try {
                    delete div.test;
                } catch( e ) {
                    support.deleteExpando = false;
                }

                // Check if we can trust getAttribute("value")
                input = document.createElement("input");
                input.setAttribute( "value", "" );
                support.input = input.getAttribute( "value" ) === "";

                // Check if an input maintains its value after becoming a radio
                input.value = "t";
                input.setAttribute( "type", "radio" );
                support.radioValue = input.value === "t";

                // #11217 - WebKit loses check when the name is after the checked attribute
                input.setAttribute( "checked", "t" );
                input.setAttribute( "name", "t" );

                fragment = document.createDocumentFragment();
                fragment.appendChild( input );

                // Check if a disconnected checkbox will retain its checked
                // value of true after appended to the DOM (IE6/7)
                support.appendChecked = input.checked;

                // WebKit doesn't clone checked state correctly in fragments
                support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

                // Support: IE<9
                // Opera does not clone events (and typeof div.attachEvent === undefined).
                // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
                if ( div.attachEvent ) {
                    div.attachEvent( "onclick", function() {
                        support.noCloneEvent = false;
                    });

                    div.cloneNode( true ).click();
                }

                // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
                // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
                for ( i in { submit: true, change: true, focusin: true }) {
                    div.setAttribute( eventName = "on" + i, "t" );

                    support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
                }

                div.style.backgroundClip = "content-box";
                div.cloneNode( true ).style.backgroundClip = "";
                support.clearCloneStyle = div.style.backgroundClip === "content-box";

                // Run tests that need a body at doc ready
                jQuery(function() {
                    var container, marginDiv, tds,
                        divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        body = document.getElementsByTagName("body")[0];

                    if ( !body ) {
                        // Return for frameset docs that don't have a body
                        return;
                    }

                    container = document.createElement("div");
                    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

                    body.appendChild( container ).appendChild( div );

                    // Support: IE8
                    // Check if table cells still have offsetWidth/Height when they are set
                    // to display:none and there are still other visible table cells in a
                    // table row; if so, offsetWidth/Height are not reliable for use when
                    // determining if an element has been hidden directly using
                    // display:none (it is still safe to use offsets if a parent element is
                    // hidden; don safety goggles and see bug #4512 for more information).
                    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                    tds = div.getElementsByTagName("td");
                    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
                    isSupported = ( tds[ 0 ].offsetHeight === 0 );

                    tds[ 0 ].style.display = "";
                    tds[ 1 ].style.display = "none";

                    // Support: IE8
                    // Check if empty table cells still have offsetWidth/Height
                    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

                    // Check box-sizing and margin behavior
                    div.innerHTML = "";
                    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                    support.boxSizing = ( div.offsetWidth === 4 );
                    support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

                    // Use window.getComputedStyle because jsdom on node.js will break without it.
                    if ( window.getComputedStyle ) {
                        support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
                        support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

                        // Check if div with explicit width and no margin-right incorrectly
                        // gets computed margin-right based on width of container. (#3333)
                        // Fails in WebKit before Feb 2011 nightlies
                        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                        marginDiv = div.appendChild( document.createElement("div") );
                        marginDiv.style.cssText = div.style.cssText = divReset;
                        marginDiv.style.marginRight = marginDiv.style.width = "0";
                        div.style.width = "1px";

                        support.reliableMarginRight =
                            !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
                    }

                    if ( typeof div.style.zoom !== "undefined" ) {
                        // Support: IE<8
                        // Check if natively block-level elements act like inline-block
                        // elements when setting their display to 'inline' and giving
                        // them layout
                        div.innerHTML = "";
                        div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                        support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

                        // Support: IE6
                        // Check if elements with layout shrink-wrap their children
                        div.style.display = "block";
                        div.innerHTML = "<div></div>";
                        div.firstChild.style.width = "5px";
                        support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

                        // Prevent IE 6 from affecting layout for positioned elements #11048
                        // Prevent IE from shrinking the body in IE 7 mode #12869
                        body.style.zoom = 1;
                    }

                    body.removeChild( container );

                    // Null elements to avoid leaks in IE
                    container = div = tds = marginDiv = null;
                });

                // Null elements to avoid leaks in IE
                all = select = fragment = opt = a = input = null;

                return support;
            })();

            var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                rmultiDash = /([A-Z])/g;

            function internalData( elem, name, data, pvt /* Internal Use Only */ ){
                if ( !jQuery.acceptData( elem ) ) {
                    return;
                }

                var thisCache, ret,
                    internalKey = jQuery.expando,
                    getByName = typeof name === "string",

                // We have to handle DOM nodes and JS objects differently because IE6-7
                // can't GC object references properly across the DOM-JS boundary
                    isNode = elem.nodeType,

                // Only DOM nodes need the global jQuery cache; JS object data is
                // attached directly to the object so GC can occur automatically
                    cache = isNode ? jQuery.cache : elem,

                // Only defining an ID for JS objects if its cache already exists allows
                // the code to shortcut on the same path as a DOM node with no cache
                    id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

                // Avoid doing any more work than we need to when trying to get data on an
                // object that has no data at all
                if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
                    return;
                }

                if ( !id ) {
                    // Only DOM nodes need a new unique ID for each element since their data
                    // ends up in the global cache
                    if ( isNode ) {
                        elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
                    } else {
                        id = internalKey;
                    }
                }

                if ( !cache[ id ] ) {
                    cache[ id ] = {};

                    // Avoids exposing jQuery metadata on plain JS objects when the object
                    // is serialized using JSON.stringify
                    if ( !isNode ) {
                        cache[ id ].toJSON = jQuery.noop;
                    }
                }

                // An object can be passed to jQuery.data instead of a key/value pair; this gets
                // shallow copied over onto the existing cache
                if ( typeof name === "object" || typeof name === "function" ) {
                    if ( pvt ) {
                        cache[ id ] = jQuery.extend( cache[ id ], name );
                    } else {
                        cache[ id ].data = jQuery.extend( cache[ id ].data, name );
                    }
                }

                thisCache = cache[ id ];

                // jQuery data() is stored in a separate object inside the object's internal data
                // cache in order to avoid key collisions between internal data and user-defined
                // data.
                if ( !pvt ) {
                    if ( !thisCache.data ) {
                        thisCache.data = {};
                    }

                    thisCache = thisCache.data;
                }

                if ( data !== undefined ) {
                    thisCache[ jQuery.camelCase( name ) ] = data;
                }

                // Check for both converted-to-camel and non-converted data property names
                // If a data property was specified
                if ( getByName ) {

                    // First Try to find as-is property data
                    ret = thisCache[ name ];

                    // Test for null|undefined property data
                    if ( ret == null ) {

                        // Try to find the camelCased property
                        ret = thisCache[ jQuery.camelCase( name ) ];
                    }
                } else {
                    ret = thisCache;
                }

                return ret;
            }

            function internalRemoveData( elem, name, pvt /* For internal use only */ ){
                if ( !jQuery.acceptData( elem ) ) {
                    return;
                }

                var thisCache, i, l,

                    isNode = elem.nodeType,

                // See jQuery.data for more information
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

                // If there is already no cache entry for this object, there is no
                // purpose in continuing
                if ( !cache[ id ] ) {
                    return;
                }

                if ( name ) {

                    thisCache = pvt ? cache[ id ] : cache[ id ].data;

                    if ( thisCache ) {

                        // Support array or space separated string names for data keys
                        if ( !jQuery.isArray( name ) ) {

                            // try the string as a key before any manipulation
                            if ( name in thisCache ) {
                                name = [ name ];
                            } else {

                                // split the camel cased version by spaces unless a key with the spaces exists
                                name = jQuery.camelCase( name );
                                if ( name in thisCache ) {
                                    name = [ name ];
                                } else {
                                    name = name.split(" ");
                                }
                            }
                        } else {
                            // If "name" is an array of keys...
                            // When data is initially created, via ("key", "val") signature,
                            // keys will be converted to camelCase.
                            // Since there is no way to tell _how_ a key was added, remove
                            // both plain key and camelCase key. #12786
                            // This will only penalize the array argument path.
                            name = name.concat( jQuery.map( name, jQuery.camelCase ) );
                        }

                        for ( i = 0, l = name.length; i < l; i++ ) {
                            delete thisCache[ name[i] ];
                        }

                        // If there is no data left in the cache, we want to continue
                        // and let the cache object itself get destroyed
                        if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
                            return;
                        }
                    }
                }

                // See jQuery.data for more information
                if ( !pvt ) {
                    delete cache[ id ].data;

                    // Don't destroy the parent cache unless the internal data object
                    // had been the only thing left in it
                    if ( !isEmptyDataObject( cache[ id ] ) ) {
                        return;
                    }
                }

                // Destroy the cache
                if ( isNode ) {
                    jQuery.cleanData( [ elem ], true );

                    // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
                } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
                    delete cache[ id ];

                    // When all else fails, null
                } else {
                    cache[ id ] = null;
                }
            }

            jQuery.extend({
                cache: {},

                // Unique for each copy of jQuery on the page
                // Non-digits removed to match rinlinejQuery
                expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

                // The following elements throw uncatchable exceptions if you
                // attempt to add expando properties to them.
                noData: {
                    "embed": true,
                    // Ban all objects except for Flash (which handle expandos)
                    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    "applet": true
                },

                hasData: function( elem ) {
                    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
                    return !!elem && !isEmptyDataObject( elem );
                },

                data: function( elem, name, data ) {
                    return internalData( elem, name, data, false );
                },

                removeData: function( elem, name ) {
                    return internalRemoveData( elem, name, false );
                },

                // For internal use only.
                _data: function( elem, name, data ) {
                    return internalData( elem, name, data, true );
                },

                _removeData: function( elem, name ) {
                    return internalRemoveData( elem, name, true );
                },

                // A method for determining if a DOM node can handle the data expando
                acceptData: function( elem ) {
                    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

                    // nodes accept data unless otherwise specified; rejection can be conditional
                    return !noData || noData !== true && elem.getAttribute("classid") === noData;
                }
            });

            jQuery.fn.extend({
                data: function( key, value ) {
                    var attrs, name,
                        elem = this[0],
                        i = 0,
                        data = null;

                    // Gets all values
                    if ( key === undefined ) {
                        if ( this.length ) {
                            data = jQuery.data( elem );

                            if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
                                attrs = elem.attributes;
                                for ( ; i < attrs.length; i++ ) {
                                    name = attrs[i].name;

                                    if ( !name.indexOf( "data-" ) ) {
                                        name = jQuery.camelCase( name.substring(5) );

                                        dataAttr( elem, name, data[ name ] );
                                    }
                                }
                                jQuery._data( elem, "parsedAttrs", true );
                            }
                        }

                        return data;
                    }

                    // Sets multiple values
                    if ( typeof key === "object" ) {
                        return this.each(function() {
                            jQuery.data( this, key );
                        });
                    }

                    return jQuery.access( this, function( value ) {

                        if ( value === undefined ) {
                            // Try to fetch any internally stored data first
                            return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
                        }

                        this.each(function() {
                            jQuery.data( this, key, value );
                        });
                    }, null, value, arguments.length > 1, null, true );
                },

                removeData: function( key ) {
                    return this.each(function() {
                        jQuery.removeData( this, key );
                    });
                }
            });

            function dataAttr( elem, key, data ) {
                // If nothing was found internally, try to fetch any
                // data from the HTML5 data-* attribute
                if ( data === undefined && elem.nodeType === 1 ) {

                    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

                    data = elem.getAttribute( name );

                    if ( typeof data === "string" ) {
                        try {
                            data = data === "true" ? true :
                                data === "false" ? false :
                                    data === "null" ? null :
                                        // Only convert to a number if it doesn't change the string
                                        +data + "" === data ? +data :
                                            rbrace.test( data ) ? jQuery.parseJSON( data ) :
                                                data;
                        } catch( e ) {}

                        // Make sure we set the data so it isn't changed later
                        jQuery.data( elem, key, data );

                    } else {
                        data = undefined;
                    }
                }

                return data;
            }

            // checks a cache object for emptiness
            function isEmptyDataObject( obj ) {
                var name;
                for ( name in obj ) {

                    // if the public data object is empty, the private is still empty
                    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
                        continue;
                    }
                    if ( name !== "toJSON" ) {
                        return false;
                    }
                }

                return true;
            }
            jQuery.extend({
                queue: function( elem, type, data ) {
                    var queue;

                    if ( elem ) {
                        type = ( type || "fx" ) + "queue";
                        queue = jQuery._data( elem, type );

                        // Speed up dequeue by getting out quickly if this is just a lookup
                        if ( data ) {
                            if ( !queue || jQuery.isArray(data) ) {
                                queue = jQuery._data( elem, type, jQuery.makeArray(data) );
                            } else {
                                queue.push( data );
                            }
                        }
                        return queue || [];
                    }
                },

                dequeue: function( elem, type ) {
                    type = type || "fx";

                    var queue = jQuery.queue( elem, type ),
                        startLength = queue.length,
                        fn = queue.shift(),
                        hooks = jQuery._queueHooks( elem, type ),
                        next = function() {
                            jQuery.dequeue( elem, type );
                        };

                    // If the fx queue is dequeued, always remove the progress sentinel
                    if ( fn === "inprogress" ) {
                        fn = queue.shift();
                        startLength--;
                    }

                    hooks.cur = fn;
                    if ( fn ) {

                        // Add a progress sentinel to prevent the fx queue from being
                        // automatically dequeued
                        if ( type === "fx" ) {
                            queue.unshift( "inprogress" );
                        }

                        // clear up the last queue stop function
                        delete hooks.stop;
                        fn.call( elem, next, hooks );
                    }

                    if ( !startLength && hooks ) {
                        hooks.empty.fire();
                    }
                },

                // not intended for public consumption - generates a queueHooks object, or returns the current one
                _queueHooks: function( elem, type ) {
                    var key = type + "queueHooks";
                    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
                            empty: jQuery.Callbacks("once memory").add(function() {
                                jQuery._removeData( elem, type + "queue" );
                                jQuery._removeData( elem, key );
                            })
                        });
                }
            });

            jQuery.fn.extend({
                queue: function( type, data ) {
                    var setter = 2;

                    if ( typeof type !== "string" ) {
                        data = type;
                        type = "fx";
                        setter--;
                    }

                    if ( arguments.length < setter ) {
                        return jQuery.queue( this[0], type );
                    }

                    return data === undefined ?
                        this :
                        this.each(function() {
                            var queue = jQuery.queue( this, type, data );

                            // ensure a hooks for this queue
                            jQuery._queueHooks( this, type );

                            if ( type === "fx" && queue[0] !== "inprogress" ) {
                                jQuery.dequeue( this, type );
                            }
                        });
                },
                dequeue: function( type ) {
                    return this.each(function() {
                        jQuery.dequeue( this, type );
                    });
                },
                // Based off of the plugin by Clint Helfers, with permission.
                // http://blindsignals.com/index.php/2009/07/jquery-delay/
                delay: function( time, type ) {
                    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
                    type = type || "fx";

                    return this.queue( type, function( next, hooks ) {
                        var timeout = setTimeout( next, time );
                        hooks.stop = function() {
                            clearTimeout( timeout );
                        };
                    });
                },
                clearQueue: function( type ) {
                    return this.queue( type || "fx", [] );
                },
                // Get a promise resolved when queues of a certain type
                // are emptied (fx is the type by default)
                promise: function( type, obj ) {
                    var tmp,
                        count = 1,
                        defer = jQuery.Deferred(),
                        elements = this,
                        i = this.length,
                        resolve = function() {
                            if ( !( --count ) ) {
                                defer.resolveWith( elements, [ elements ] );
                            }
                        };

                    if ( typeof type !== "string" ) {
                        obj = type;
                        type = undefined;
                    }
                    type = type || "fx";

                    while( i-- ) {
                        tmp = jQuery._data( elements[ i ], type + "queueHooks" );
                        if ( tmp && tmp.empty ) {
                            count++;
                            tmp.empty.add( resolve );
                        }
                    }
                    resolve();
                    return defer.promise( obj );
                }
            });
            var nodeHook, boolHook,
                rclass = /[\t\r\n]/g,
                rreturn = /\r/g,
                rfocusable = /^(?:input|select|textarea|button|object)$/i,
                rclickable = /^(?:a|area)$/i,
                rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
                ruseDefault = /^(?:checked|selected)$/i,
                getSetAttribute = jQuery.support.getSetAttribute,
                getSetInput = jQuery.support.input;

            jQuery.fn.extend({
                attr: function( name, value ) {
                    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
                },

                removeAttr: function( name ) {
                    return this.each(function() {
                        jQuery.removeAttr( this, name );
                    });
                },

                prop: function( name, value ) {
                    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
                },

                removeProp: function( name ) {
                    name = jQuery.propFix[ name ] || name;
                    return this.each(function() {
                        // try/catch handles cases where IE balks (such as removing a property on window)
                        try {
                            this[ name ] = undefined;
                            delete this[ name ];
                        } catch( e ) {}
                    });
                },

                addClass: function( value ) {
                    var classes, elem, cur, clazz, j,
                        i = 0,
                        len = this.length,
                        proceed = typeof value === "string" && value;

                    if ( jQuery.isFunction( value ) ) {
                        return this.each(function( j ) {
                            jQuery( this ).addClass( value.call( this, j, this.className ) );
                        });
                    }

                    if ( proceed ) {
                        // The disjunction here is for better compressibility (see removeClass)
                        classes = ( value || "" ).match( core_rnotwhite ) || [];

                        for ( ; i < len; i++ ) {
                            elem = this[ i ];
                            cur = elem.nodeType === 1 && ( elem.className ?
                                        ( " " + elem.className + " " ).replace( rclass, " " ) :
                                        " "
                                );

                            if ( cur ) {
                                j = 0;
                                while ( (clazz = classes[j++]) ) {
                                    if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                        cur += clazz + " ";
                                    }
                                }
                                elem.className = jQuery.trim( cur );

                            }
                        }
                    }

                    return this;
                },

                removeClass: function( value ) {
                    var classes, elem, cur, clazz, j,
                        i = 0,
                        len = this.length,
                        proceed = arguments.length === 0 || typeof value === "string" && value;

                    if ( jQuery.isFunction( value ) ) {
                        return this.each(function( j ) {
                            jQuery( this ).removeClass( value.call( this, j, this.className ) );
                        });
                    }
                    if ( proceed ) {
                        classes = ( value || "" ).match( core_rnotwhite ) || [];

                        for ( ; i < len; i++ ) {
                            elem = this[ i ];
                            // This expression is here for better compressibility (see addClass)
                            cur = elem.nodeType === 1 && ( elem.className ?
                                        ( " " + elem.className + " " ).replace( rclass, " " ) :
                                        ""
                                );

                            if ( cur ) {
                                j = 0;
                                while ( (clazz = classes[j++]) ) {
                                    // Remove *all* instances
                                    while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
                                        cur = cur.replace( " " + clazz + " ", " " );
                                    }
                                }
                                elem.className = value ? jQuery.trim( cur ) : "";
                            }
                        }
                    }

                    return this;
                },

                toggleClass: function( value, stateVal ) {
                    var type = typeof value,
                        isBool = typeof stateVal === "boolean";

                    if ( jQuery.isFunction( value ) ) {
                        return this.each(function( i ) {
                            jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
                        });
                    }

                    return this.each(function() {
                        if ( type === "string" ) {
                            // toggle individual class names
                            var className,
                                i = 0,
                                self = jQuery( this ),
                                state = stateVal,
                                classNames = value.match( core_rnotwhite ) || [];

                            while ( (className = classNames[ i++ ]) ) {
                                // check each className given, space separated list
                                state = isBool ? state : !self.hasClass( className );
                                self[ state ? "addClass" : "removeClass" ]( className );
                            }

                            // Toggle whole class name
                        } else if ( type === "undefined" || type === "boolean" ) {
                            if ( this.className ) {
                                // store className if set
                                jQuery._data( this, "__className__", this.className );
                            }

                            // If the element has a class name or if we're passed "false",
                            // then remove the whole classname (if there was one, the above saved it).
                            // Otherwise bring back whatever was previously saved (if anything),
                            // falling back to the empty string if nothing was stored.
                            this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
                        }
                    });
                },

                hasClass: function( selector ) {
                    var className = " " + selector + " ",
                        i = 0,
                        l = this.length;
                    for ( ; i < l; i++ ) {
                        if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
                            return true;
                        }
                    }

                    return false;
                },

                val: function( value ) {
                    var hooks, ret, isFunction,
                        elem = this[0];

                    if ( !arguments.length ) {
                        if ( elem ) {
                            hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

                            if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
                                return ret;
                            }

                            ret = elem.value;

                            return typeof ret === "string" ?
                                // handle most common string cases
                                ret.replace(rreturn, "") :
                                // handle cases where value is null/undef or number
                                ret == null ? "" : ret;
                        }

                        return;
                    }

                    isFunction = jQuery.isFunction( value );

                    return this.each(function( i ) {
                        var val,
                            self = jQuery(this);

                        if ( this.nodeType !== 1 ) {
                            return;
                        }

                        if ( isFunction ) {
                            val = value.call( this, i, self.val() );
                        } else {
                            val = value;
                        }

                        // Treat null/undefined as ""; convert numbers to string
                        if ( val == null ) {
                            val = "";
                        } else if ( typeof val === "number" ) {
                            val += "";
                        } else if ( jQuery.isArray( val ) ) {
                            val = jQuery.map(val, function ( value ) {
                                return value == null ? "" : value + "";
                            });
                        }

                        hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

                        // If set returns undefined, fall back to normal setting
                        if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
                            this.value = val;
                        }
                    });
                }
            });

            jQuery.extend({
                valHooks: {
                    option: {
                        get: function( elem ) {
                            // attributes.value is undefined in Blackberry 4.7 but
                            // uses .value. See #6932
                            var val = elem.attributes.value;
                            return !val || val.specified ? elem.value : elem.text;
                        }
                    },
                    select: {
                        get: function( elem ) {
                            var value, option,
                                options = elem.options,
                                index = elem.selectedIndex,
                                one = elem.type === "select-one" || index < 0,
                                values = one ? null : [],
                                max = one ? index + 1 : options.length,
                                i = index < 0 ?
                                    max :
                                    one ? index : 0;

                            // Loop through all the selected options
                            for ( ; i < max; i++ ) {
                                option = options[ i ];

                                // oldIE doesn't update selected after form reset (#2551)
                                if ( ( option.selected || i === index ) &&
                                    // Don't return options that are disabled or in a disabled optgroup
                                    ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
                                    ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

                                    // Get the specific value for the option
                                    value = jQuery( option ).val();

                                    // We don't need an array for one selects
                                    if ( one ) {
                                        return value;
                                    }

                                    // Multi-Selects return an array
                                    values.push( value );
                                }
                            }

                            return values;
                        },

                        set: function( elem, value ) {
                            var values = jQuery.makeArray( value );

                            jQuery(elem).find("option").each(function() {
                                this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
                            });

                            if ( !values.length ) {
                                elem.selectedIndex = -1;
                            }
                            return values;
                        }
                    }
                },

                attr: function( elem, name, value ) {
                    var ret, hooks, notxml,
                        nType = elem.nodeType;

                    // don't get/set attributes on text, comment and attribute nodes
                    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                        return;
                    }

                    // Fallback to prop when attributes are not supported
                    if ( typeof elem.getAttribute === "undefined" ) {
                        return jQuery.prop( elem, name, value );
                    }

                    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

                    // All attributes are lowercase
                    // Grab necessary hook if one is defined
                    if ( notxml ) {
                        name = name.toLowerCase();
                        hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
                    }

                    if ( value !== undefined ) {

                        if ( value === null ) {
                            jQuery.removeAttr( elem, name );

                        } else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                            return ret;

                        } else {
                            elem.setAttribute( name, value + "" );
                            return value;
                        }

                    } else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
                        return ret;

                    } else {

                        // In IE9+, Flash objects don't have .getAttribute (#12945)
                        // Support: IE9+
                        if ( typeof elem.getAttribute !== "undefined" ) {
                            ret =  elem.getAttribute( name );
                        }

                        // Non-existent attributes return null, we normalize to undefined
                        return ret == null ?
                            undefined :
                            ret;
                    }
                },

                removeAttr: function( elem, value ) {
                    var name, propName,
                        i = 0,
                        attrNames = value && value.match( core_rnotwhite );

                    if ( attrNames && elem.nodeType === 1 ) {
                        while ( (name = attrNames[i++]) ) {
                            propName = jQuery.propFix[ name ] || name;

                            // Boolean attributes get special treatment (#10870)
                            if ( rboolean.test( name ) ) {
                                // Set corresponding property to false for boolean attributes
                                // Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
                                if ( !getSetAttribute && ruseDefault.test( name ) ) {
                                    elem[ jQuery.camelCase( "default-" + name ) ] =
                                        elem[ propName ] = false;
                                } else {
                                    elem[ propName ] = false;
                                }

                                // See #9699 for explanation of this approach (setting first, then removal)
                            } else {
                                jQuery.attr( elem, name, "" );
                            }

                            elem.removeAttribute( getSetAttribute ? name : propName );
                        }
                    }
                },

                attrHooks: {
                    type: {
                        set: function( elem, value ) {
                            if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
                                // Setting the type on a radio button after the value resets the value in IE6-9
                                // Reset value to default in case type is set after value during creation
                                var val = elem.value;
                                elem.setAttribute( "type", value );
                                if ( val ) {
                                    elem.value = val;
                                }
                                return value;
                            }
                        }
                    }
                },

                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },

                prop: function( elem, name, value ) {
                    var ret, hooks, notxml,
                        nType = elem.nodeType;

                    // don't get/set properties on text, comment and attribute nodes
                    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                        return;
                    }

                    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

                    if ( notxml ) {
                        // Fix name and attach hooks
                        name = jQuery.propFix[ name ] || name;
                        hooks = jQuery.propHooks[ name ];
                    }

                    if ( value !== undefined ) {
                        if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                            return ret;

                        } else {
                            return ( elem[ name ] = value );
                        }

                    } else {
                        if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
                            return ret;

                        } else {
                            return elem[ name ];
                        }
                    }
                },

                propHooks: {
                    tabIndex: {
                        get: function( elem ) {
                            // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                            // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                            var attributeNode = elem.getAttributeNode("tabindex");

                            return attributeNode && attributeNode.specified ?
                                parseInt( attributeNode.value, 10 ) :
                                rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
                                    0 :
                                    undefined;
                        }
                    }
                }
            });

            // Hook for boolean attributes
            boolHook = {
                get: function( elem, name ) {
                    var
                    // Use .prop to determine if this attribute is understood as boolean
                        prop = jQuery.prop( elem, name ),

                    // Fetch it accordingly
                        attr = typeof prop === "boolean" && elem.getAttribute( name ),
                        detail = typeof prop === "boolean" ?

                            getSetInput && getSetAttribute ?
                            attr != null :
                                // oldIE fabricates an empty string for missing boolean attributes
                                // and conflates checked/selected into attroperties
                                ruseDefault.test( name ) ?
                                    elem[ jQuery.camelCase( "default-" + name ) ] :
                                    !!attr :

                            // fetch an attribute node for properties not recognized as boolean
                            elem.getAttributeNode( name );

                    return detail && detail.value !== false ?
                        name.toLowerCase() :
                        undefined;
                },
                set: function( elem, value, name ) {
                    if ( value === false ) {
                        // Remove boolean attributes when set to false
                        jQuery.removeAttr( elem, name );
                    } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                        // IE<8 needs the *property* name
                        elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

                        // Use defaultChecked and defaultSelected for oldIE
                    } else {
                        elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
                    }

                    return name;
                }
            };

            // fix oldIE value attroperty
            if ( !getSetInput || !getSetAttribute ) {
                jQuery.attrHooks.value = {
                    get: function( elem, name ) {
                        var ret = elem.getAttributeNode( name );
                        return jQuery.nodeName( elem, "input" ) ?

                            // Ignore the value *property* by using defaultValue
                            elem.defaultValue :

                            ret && ret.specified ? ret.value : undefined;
                    },
                    set: function( elem, value, name ) {
                        if ( jQuery.nodeName( elem, "input" ) ) {
                            // Does not return so that setAttribute is also used
                            elem.defaultValue = value;
                        } else {
                            // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                            return nodeHook && nodeHook.set( elem, value, name );
                        }
                    }
                };
            }

            // IE6/7 do not support getting/setting some attributes with get/setAttribute
            if ( !getSetAttribute ) {

                // Use this for any attribute in IE6/7
                // This fixes almost every IE6/7 issue
                nodeHook = jQuery.valHooks.button = {
                    get: function( elem, name ) {
                        var ret = elem.getAttributeNode( name );
                        return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
                            ret.value :
                            undefined;
                    },
                    set: function( elem, value, name ) {
                        // Set the existing or create a new attribute node
                        var ret = elem.getAttributeNode( name );
                        if ( !ret ) {
                            elem.setAttributeNode(
                                (ret = elem.ownerDocument.createAttribute( name ))
                            );
                        }

                        ret.value = value += "";

                        // Break association with cloned elements by also using setAttribute (#9646)
                        return name === "value" || value === elem.getAttribute( name ) ?
                            value :
                            undefined;
                    }
                };

                // Set contenteditable to false on removals(#10429)
                // Setting to empty string throws an error as an invalid value
                jQuery.attrHooks.contenteditable = {
                    get: nodeHook.get,
                    set: function( elem, value, name ) {
                        nodeHook.set( elem, value === "" ? false : value, name );
                    }
                };

                // Set width and height to auto instead of 0 on empty string( Bug #8150 )
                // This is for removals
                jQuery.each([ "width", "height" ], function( i, name ) {
                    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
                        set: function( elem, value ) {
                            if ( value === "" ) {
                                elem.setAttribute( name, "auto" );
                                return value;
                            }
                        }
                    });
                });
            }


            // Some attributes require a special call on IE
            // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if ( !jQuery.support.hrefNormalized ) {
                jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
                    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
                        get: function( elem ) {
                            var ret = elem.getAttribute( name, 2 );
                            return ret == null ? undefined : ret;
                        }
                    });
                });

                // href/src property should get the full normalized URL (#10299/#12915)
                jQuery.each([ "href", "src" ], function( i, name ) {
                    jQuery.propHooks[ name ] = {
                        get: function( elem ) {
                            return elem.getAttribute( name, 4 );
                        }
                    };
                });
            }

            if ( !jQuery.support.style ) {
                jQuery.attrHooks.style = {
                    get: function( elem ) {
                        // Return undefined in the case of empty string
                        // Note: IE uppercases css property names, but if we were to .toLowerCase()
                        // .cssText, that would destroy case senstitivity in URL's, like in "background"
                        return elem.style.cssText || undefined;
                    },
                    set: function( elem, value ) {
                        return ( elem.style.cssText = value + "" );
                    }
                };
            }

            // Safari mis-reports the default selected property of an option
            // Accessing the parent's selectedIndex property fixes it
            if ( !jQuery.support.optSelected ) {
                jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
                    get: function( elem ) {
                        var parent = elem.parentNode;

                        if ( parent ) {
                            parent.selectedIndex;

                            // Make sure that it also works with optgroups, see #5701
                            if ( parent.parentNode ) {
                                parent.parentNode.selectedIndex;
                            }
                        }
                        return null;
                    }
                });
            }

            // IE6/7 call enctype encoding
            if ( !jQuery.support.enctype ) {
                jQuery.propFix.enctype = "encoding";
            }

            // Radios and checkboxes getter/setter
            if ( !jQuery.support.checkOn ) {
                jQuery.each([ "radio", "checkbox" ], function() {
                    jQuery.valHooks[ this ] = {
                        get: function( elem ) {
                            // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
                            return elem.getAttribute("value") === null ? "on" : elem.value;
                        }
                    };
                });
            }
            jQuery.each([ "radio", "checkbox" ], function() {
                jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
                    set: function( elem, value ) {
                        if ( jQuery.isArray( value ) ) {
                            return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
                        }
                    }
                });
            });
            var rformElems = /^(?:input|select|textarea)$/i,
                rkeyEvent = /^key/,
                rmouseEvent = /^(?:mouse|contextmenu)|click/,
                rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

            function returnTrue() {
                return true;
            }

            function returnFalse() {
                return false;
            }

            /*
             * Helper functions for managing events -- not part of the public interface.
             * Props to Dean Edwards' addEvent library for many of the ideas.
             */
            jQuery.event = {

                global: {},

                add: function( elem, types, handler, data, selector ) {

                    var handleObjIn, eventHandle, tmp,
                        events, t, handleObj,
                        special, handlers, type, namespaces, origType,
                    // Don't attach events to noData or text/comment nodes (but allow plain objects)
                        elemData = elem.nodeType !== 3 && elem.nodeType !== 8 && jQuery._data( elem );

                    if ( !elemData ) {
                        return;
                    }

                    // Caller can pass in an object of custom data in lieu of the handler
                    if ( handler.handler ) {
                        handleObjIn = handler;
                        handler = handleObjIn.handler;
                        selector = handleObjIn.selector;
                    }

                    // Make sure that the handler has a unique ID, used to find/remove it later
                    if ( !handler.guid ) {
                        handler.guid = jQuery.guid++;
                    }

                    // Init the element's event structure and main handler, if this is the first
                    if ( !(events = elemData.events) ) {
                        events = elemData.events = {};
                    }
                    if ( !(eventHandle = elemData.handle) ) {
                        eventHandle = elemData.handle = function( e ) {
                            // Discard the second event of a jQuery.event.trigger() and
                            // when an event is called after a page has unloaded
                            return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
                                jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
                                undefined;
                        };
                        // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                        eventHandle.elem = elem;
                    }

                    // Handle multiple events separated by a space
                    // jQuery(...).bind("mouseover mouseout", fn);
                    types = ( types || "" ).match( core_rnotwhite ) || [""];
                    t = types.length;
                    while ( t-- ) {
                        tmp = rtypenamespace.exec( types[t] ) || [];
                        type = origType = tmp[1];
                        namespaces = ( tmp[2] || "" ).split( "." ).sort();

                        // If event changes its type, use the special event handlers for the changed type
                        special = jQuery.event.special[ type ] || {};

                        // If selector defined, determine special event api type, otherwise given type
                        type = ( selector ? special.delegateType : special.bindType ) || type;

                        // Update special based on newly reset type
                        special = jQuery.event.special[ type ] || {};

                        // handleObj is passed to all event handlers
                        handleObj = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                            namespace: namespaces.join(".")
                        }, handleObjIn );

                        // Init the event handler queue if we're the first
                        if ( !(handlers = events[ type ]) ) {
                            handlers = events[ type ] = [];
                            handlers.delegateCount = 0;

                            // Only use addEventListener/attachEvent if the special events handler returns false
                            if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
                                // Bind the global event handler to the element
                                if ( elem.addEventListener ) {
                                    elem.addEventListener( type, eventHandle, false );

                                } else if ( elem.attachEvent ) {
                                    elem.attachEvent( "on" + type, eventHandle );
                                }
                            }
                        }

                        if ( special.add ) {
                            special.add.call( elem, handleObj );

                            if ( !handleObj.handler.guid ) {
                                handleObj.handler.guid = handler.guid;
                            }
                        }

                        // Add to the element's handler list, delegates in front
                        if ( selector ) {
                            handlers.splice( handlers.delegateCount++, 0, handleObj );
                        } else {
                            handlers.push( handleObj );
                        }

                        // Keep track of which events have ever been used, for event optimization
                        jQuery.event.global[ type ] = true;
                    }

                    // Nullify elem to prevent memory leaks in IE
                    elem = null;
                },

                // Detach an event or set of events from an element
                remove: function( elem, types, handler, selector, mappedTypes ) {

                    var j, origCount, tmp,
                        events, t, handleObj,
                        special, handlers, type, namespaces, origType,
                        elemData = jQuery.hasData( elem ) && jQuery._data( elem );

                    if ( !elemData || !(events = elemData.events) ) {
                        return;
                    }

                    // Once for each type.namespace in types; type may be omitted
                    types = ( types || "" ).match( core_rnotwhite ) || [""];
                    t = types.length;
                    while ( t-- ) {
                        tmp = rtypenamespace.exec( types[t] ) || [];
                        type = origType = tmp[1];
                        namespaces = ( tmp[2] || "" ).split( "." ).sort();

                        // Unbind all events (on this namespace, if provided) for the element
                        if ( !type ) {
                            for ( type in events ) {
                                jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                            }
                            continue;
                        }

                        special = jQuery.event.special[ type ] || {};
                        type = ( selector ? special.delegateType : special.bindType ) || type;
                        handlers = events[ type ] || [];
                        tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

                        // Remove matching events
                        origCount = j = handlers.length;
                        while ( j-- ) {
                            handleObj = handlers[ j ];

                            if ( ( mappedTypes || origType === handleObj.origType ) &&
                                ( !handler || handler.guid === handleObj.guid ) &&
                                ( !tmp || tmp.test( handleObj.namespace ) ) &&
                                ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
                                handlers.splice( j, 1 );

                                if ( handleObj.selector ) {
                                    handlers.delegateCount--;
                                }
                                if ( special.remove ) {
                                    special.remove.call( elem, handleObj );
                                }
                            }
                        }

                        // Remove generic event handler if we removed something and no more handlers exist
                        // (avoids potential for endless recursion during removal of special event handlers)
                        if ( origCount && !handlers.length ) {
                            if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
                                jQuery.removeEvent( elem, type, elemData.handle );
                            }

                            delete events[ type ];
                        }
                    }

                    // Remove the expando if it's no longer used
                    if ( jQuery.isEmptyObject( events ) ) {
                        delete elemData.handle;

                        // removeData also checks for emptiness and clears the expando if empty
                        // so use it instead of delete
                        jQuery._removeData( elem, "events" );
                    }
                },

                trigger: function( event, data, elem, onlyHandlers ) {

                    var i, cur, tmp, bubbleType, ontype, handle, special,
                        eventPath = [ elem || document ],
                        type = event.type || event,
                        namespaces = event.namespace ? event.namespace.split(".") : [];

                    cur = tmp = elem = elem || document;

                    // Don't do events on text and comment nodes
                    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                        return;
                    }

                    // focus/blur morphs to focusin/out; ensure we're not firing them right now
                    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                        return;
                    }

                    if ( type.indexOf(".") >= 0 ) {
                        // Namespaced trigger; create a regexp to match event type in handle()
                        namespaces = type.split(".");
                        type = namespaces.shift();
                        namespaces.sort();
                    }
                    ontype = type.indexOf(":") < 0 && "on" + type;

                    // Caller can pass in a jQuery.Event object, Object, or just an event type string
                    event = event[ jQuery.expando ] ?
                        event :
                        new jQuery.Event( type, typeof event === "object" && event );

                    event.isTrigger = true;
                    event.namespace = namespaces.join(".");
                    event.namespace_re = event.namespace ?
                        new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
                        null;

                    // Clean up the event in case it is being reused
                    event.result = undefined;
                    if ( !event.target ) {
                        event.target = elem;
                    }

                    // Clone any incoming data and prepend the event, creating the handler arg list
                    data = data == null ?
                        [ event ] :
                        jQuery.makeArray( data, [ event ] );

                    // Allow special events to draw outside the lines
                    special = jQuery.event.special[ type ] || {};
                    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                        return;
                    }

                    // Determine event propagation path in advance, per W3C events spec (#9951)
                    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

                        bubbleType = special.delegateType || type;
                        if ( !rfocusMorph.test( bubbleType + type ) ) {
                            cur = cur.parentNode;
                        }
                        for ( ; cur; cur = cur.parentNode ) {
                            eventPath.push( cur );
                            tmp = cur;
                        }

                        // Only add window if we got to document (e.g., not plain obj or detached DOM)
                        if ( tmp === (elem.ownerDocument || document) ) {
                            eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                        }
                    }

                    // Fire handlers on the event path
                    i = 0;
                    while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

                        event.type = i > 1 ?
                            bubbleType :
                        special.bindType || type;

                        // jQuery handler
                        handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
                        if ( handle ) {
                            handle.apply( cur, data );
                        }

                        // Native handler
                        handle = ontype && cur[ ontype ];
                        if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
                            event.preventDefault();
                        }
                    }
                    event.type = type;

                    // If nobody prevented the default action, do it now
                    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                        if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
                            !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

                            // Call a native DOM method on the target with the same name name as the event.
                            // Can't use an .isFunction() check here because IE6/7 fails that test.
                            // Don't do default actions on window, that's where global variables be (#6170)
                            if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

                                // Don't re-trigger an onFOO event when we call its FOO() method
                                tmp = elem[ ontype ];

                                if ( tmp ) {
                                    elem[ ontype ] = null;
                                }

                                // Prevent re-triggering of the same event, since we already bubbled it above
                                jQuery.event.triggered = type;
                                try {
                                    elem[ type ]();
                                } catch ( e ) {
                                    // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                                    // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                                }
                                jQuery.event.triggered = undefined;

                                if ( tmp ) {
                                    elem[ ontype ] = tmp;
                                }
                            }
                        }
                    }

                    return event.result;
                },

                dispatch: function( event ) {

                    // Make a writable jQuery.Event from the native event object
                    event = jQuery.event.fix( event );

                    var i, j, ret, matched, handleObj,
                        handlerQueue = [],
                        args = core_slice.call( arguments ),
                        handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
                        special = jQuery.event.special[ event.type ] || {};

                    // Use the fix-ed jQuery.Event rather than the (read-only) native event
                    args[0] = event;
                    event.delegateTarget = this;

                    // Call the preDispatch hook for the mapped type, and let it bail if desired
                    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                        return;
                    }

                    // Determine handlers
                    handlerQueue = jQuery.event.handlers.call( this, event, handlers );

                    // Run delegates first; they may want to stop propagation beneath us
                    i = 0;
                    while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
                        event.currentTarget = matched.elem;

                        j = 0;
                        while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

                            // Triggered event must either 1) have no namespace, or
                            // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                            if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

                                event.handleObj = handleObj;
                                event.data = handleObj.data;

                                ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
                                    .apply( matched.elem, args );

                                if ( ret !== undefined ) {
                                    if ( (event.result = ret) === false ) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                }
                            }
                        }
                    }

                    // Call the postDispatch hook for the mapped type
                    if ( special.postDispatch ) {
                        special.postDispatch.call( this, event );
                    }

                    return event.result;
                },

                handlers: function( event, handlers ) {
                    var i, matches, sel, handleObj,
                        handlerQueue = [],
                        delegateCount = handlers.delegateCount,
                        cur = event.target;

                    // Find delegate handlers
                    // Black-hole SVG <use> instance trees (#13180)
                    // Avoid non-left-click bubbling in Firefox (#3861)
                    if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

                        for ( ; cur != this; cur = cur.parentNode || this ) {

                            // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                            if ( cur.disabled !== true || event.type !== "click" ) {
                                matches = [];
                                for ( i = 0; i < delegateCount; i++ ) {
                                    handleObj = handlers[ i ];

                                    // Don't conflict with Object.prototype properties (#13203)
                                    sel = handleObj.selector + " ";

                                    if ( matches[ sel ] === undefined ) {
                                        matches[ sel ] = handleObj.needsContext ?
                                        jQuery( sel, this ).index( cur ) >= 0 :
                                            jQuery.find( sel, this, null, [ cur ] ).length;
                                    }
                                    if ( matches[ sel ] ) {
                                        matches.push( handleObj );
                                    }
                                }
                                if ( matches.length ) {
                                    handlerQueue.push({ elem: cur, handlers: matches });
                                }
                            }
                        }
                    }

                    // Add the remaining (directly-bound) handlers
                    if ( delegateCount < handlers.length ) {
                        handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
                    }

                    return handlerQueue;
                },

                fix: function( event ) {
                    if ( event[ jQuery.expando ] ) {
                        return event;
                    }

                    // Create a writable copy of the event object and normalize some properties
                    var i, prop,
                        originalEvent = event,
                        fixHook = jQuery.event.fixHooks[ event.type ] || {},
                        copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

                    event = new jQuery.Event( originalEvent );

                    i = copy.length;
                    while ( i-- ) {
                        prop = copy[ i ];
                        event[ prop ] = originalEvent[ prop ];
                    }

                    // Support: IE<9
                    // Fix target property (#1925)
                    if ( !event.target ) {
                        event.target = originalEvent.srcElement || document;
                    }

                    // Support: Chrome 23+, Safari?
                    // Target should not be a text node (#504, #13143)
                    if ( event.target.nodeType === 3 ) {
                        event.target = event.target.parentNode;
                    }

                    // Support: IE<9
                    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
                    event.metaKey = !!event.metaKey;

                    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
                },

                // Includes some event props shared by KeyEvent and MouseEvent
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

                fixHooks: {},

                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function( event, original ) {

                        // Add which for key events
                        if ( event.which == null ) {
                            event.which = original.charCode != null ? original.charCode : original.keyCode;
                        }

                        return event;
                    }
                },

                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function( event, original ) {
                        var eventDoc, doc, body,
                            button = original.button,
                            fromElement = original.fromElement;

                        // Calculate pageX/Y if missing and clientX/Y available
                        if ( event.pageX == null && original.clientX != null ) {
                            eventDoc = event.target.ownerDocument || document;
                            doc = eventDoc.documentElement;
                            body = eventDoc.body;

                            event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                            event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
                        }

                        // Add relatedTarget, if necessary
                        if ( !event.relatedTarget && fromElement ) {
                            event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                        }

                        // Add which for click: 1 === left; 2 === middle; 3 === right
                        // Note: button is not normalized, so don't use it
                        if ( !event.which && button !== undefined ) {
                            event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                        }

                        return event;
                    }
                },

                special: {
                    load: {
                        // Prevent triggered image.load events from bubbling to window.load
                        noBubble: true
                    },
                    click: {
                        // For checkbox, fire native event so checked state will be right
                        trigger: function() {
                            if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
                                this.click();
                                return false;
                            }
                        }
                    },
                    focus: {
                        // Fire native event if possible so blur/focus sequence is correct
                        trigger: function() {
                            if ( this !== document.activeElement && this.focus ) {
                                try {
                                    this.focus();
                                    return false;
                                } catch ( e ) {
                                    // Support: IE<9
                                    // If we error on focus to hidden element (#1486, #12518),
                                    // let .trigger() run the handlers
                                }
                            }
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if ( this === document.activeElement && this.blur ) {
                                this.blur();
                                return false;
                            }
                        },
                        delegateType: "focusout"
                    },

                    beforeunload: {
                        postDispatch: function( event ) {

                            // Even when returnValue equals to undefined Firefox will still show alert
                            if ( event.result !== undefined ) {
                                event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                },

                simulate: function( type, elem, event, bubble ) {
                    // Piggyback on a donor event to simulate a different one.
                    // Fake originalEvent to avoid donor's stopPropagation, but if the
                    // simulated event prevents default then we do the same on the donor.
                    var e = jQuery.extend(
                        new jQuery.Event(),
                        event,
                        { type: type,
                            isSimulated: true,
                            originalEvent: {}
                        }
                    );
                    if ( bubble ) {
                        jQuery.event.trigger( e, null, elem );
                    } else {
                        jQuery.event.dispatch.call( elem, e );
                    }
                    if ( e.isDefaultPrevented() ) {
                        event.preventDefault();
                    }
                }
            };

            jQuery.removeEvent = document.removeEventListener ?
                function( elem, type, handle ) {
                    if ( elem.removeEventListener ) {
                        elem.removeEventListener( type, handle, false );
                    }
                } :
                function( elem, type, handle ) {
                    var name = "on" + type;

                    if ( elem.detachEvent ) {

                        // #8545, #7054, preventing memory leaks for custom events in IE6-8
                        // detachEvent needed property on element, by name of that event, to properly expose it to GC
                        if ( typeof elem[ name ] === "undefined" ) {
                            elem[ name ] = null;
                        }

                        elem.detachEvent( name, handle );
                    }
                };

            jQuery.Event = function( src, props ) {
                // Allow instantiation without the 'new' keyword
                if ( !(this instanceof jQuery.Event) ) {
                    return new jQuery.Event( src, props );
                }

                // Event object
                if ( src && src.type ) {
                    this.originalEvent = src;
                    this.type = src.type;

                    // Events bubbling up the document may have been marked as prevented
                    // by a handler lower down the tree; reflect the correct value.
                    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
                    src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

                    // Event type
                } else {
                    this.type = src;
                }

                // Put explicitly provided properties onto the event object
                if ( props ) {
                    jQuery.extend( this, props );
                }

                // Create a timestamp if incoming event doesn't have one
                this.timeStamp = src && src.timeStamp || jQuery.now();

                // Mark it as fixed
                this[ jQuery.expando ] = true;
            };

            // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
            // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
            jQuery.Event.prototype = {
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,

                preventDefault: function() {
                    var e = this.originalEvent;

                    this.isDefaultPrevented = returnTrue;
                    if ( !e ) {
                        return;
                    }

                    // If preventDefault exists, run it on the original event
                    if ( e.preventDefault ) {
                        e.preventDefault();

                        // Support: IE
                        // Otherwise set the returnValue property of the original event to false
                    } else {
                        e.returnValue = false;
                    }
                },
                stopPropagation: function() {
                    var e = this.originalEvent;

                    this.isPropagationStopped = returnTrue;
                    if ( !e ) {
                        return;
                    }
                    // If stopPropagation exists, run it on the original event
                    if ( e.stopPropagation ) {
                        e.stopPropagation();
                    }

                    // Support: IE
                    // Set the cancelBubble property of the original event to true
                    e.cancelBubble = true;
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = returnTrue;
                    this.stopPropagation();
                }
            };

            // Create mouseenter/leave events using mouseover/out and event-time checks
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function( orig, fix ) {
                jQuery.event.special[ orig ] = {
                    delegateType: fix,
                    bindType: fix,

                    handle: function( event ) {
                        var ret,
                            target = this,
                            related = event.relatedTarget,
                            handleObj = event.handleObj;

                        // For mousenter/leave call the handler if related is outside the target.
                        // NB: No relatedTarget if the mouse left/entered the browser window
                        if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply( this, arguments );
                            event.type = fix;
                        }
                        return ret;
                    }
                };
            });

            // IE submit delegation
            if ( !jQuery.support.submitBubbles ) {

                jQuery.event.special.submit = {
                    setup: function() {
                        // Only need this for delegated form submit events
                        if ( jQuery.nodeName( this, "form" ) ) {
                            return false;
                        }

                        // Lazy-add a submit handler when a descendant form may potentially be submitted
                        jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
                            // Node name check avoids a VML-related crash in IE (#9807)
                            var elem = e.target,
                                form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
                            if ( form && !jQuery._data( form, "submitBubbles" ) ) {
                                jQuery.event.add( form, "submit._submit", function( event ) {
                                    event._submit_bubble = true;
                                });
                                jQuery._data( form, "submitBubbles", true );
                            }
                        });
                        // return undefined since we don't need an event listener
                    },

                    postDispatch: function( event ) {
                        // If form was submitted by the user, bubble the event up the tree
                        if ( event._submit_bubble ) {
                            delete event._submit_bubble;
                            if ( this.parentNode && !event.isTrigger ) {
                                jQuery.event.simulate( "submit", this.parentNode, event, true );
                            }
                        }
                    },

                    teardown: function() {
                        // Only need this for delegated form submit events
                        if ( jQuery.nodeName( this, "form" ) ) {
                            return false;
                        }

                        // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                        jQuery.event.remove( this, "._submit" );
                    }
                };
            }

            // IE change delegation and checkbox/radio fix
            if ( !jQuery.support.changeBubbles ) {

                jQuery.event.special.change = {

                    setup: function() {

                        if ( rformElems.test( this.nodeName ) ) {
                            // IE doesn't fire change on a check/radio until blur; trigger it on click
                            // after a propertychange. Eat the blur-change in special.change.handle.
                            // This still fires onchange a second time for check/radio after blur.
                            if ( this.type === "checkbox" || this.type === "radio" ) {
                                jQuery.event.add( this, "propertychange._change", function( event ) {
                                    if ( event.originalEvent.propertyName === "checked" ) {
                                        this._just_changed = true;
                                    }
                                });
                                jQuery.event.add( this, "click._change", function( event ) {
                                    if ( this._just_changed && !event.isTrigger ) {
                                        this._just_changed = false;
                                    }
                                    // Allow triggered, simulated change events (#11500)
                                    jQuery.event.simulate( "change", this, event, true );
                                });
                            }
                            return false;
                        }
                        // Delegated event; lazy-add a change handler on descendant inputs
                        jQuery.event.add( this, "beforeactivate._change", function( e ) {
                            var elem = e.target;

                            if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
                                jQuery.event.add( elem, "change._change", function( event ) {
                                    if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
                                        jQuery.event.simulate( "change", this.parentNode, event, true );
                                    }
                                });
                                jQuery._data( elem, "changeBubbles", true );
                            }
                        });
                    },

                    handle: function( event ) {
                        var elem = event.target;

                        // Swallow native change events from checkbox/radio, we already triggered them above
                        if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
                            return event.handleObj.handler.apply( this, arguments );
                        }
                    },

                    teardown: function() {
                        jQuery.event.remove( this, "._change" );

                        return !rformElems.test( this.nodeName );
                    }
                };
            }

            // Create "bubbling" focus and blur events
            if ( !jQuery.support.focusinBubbles ) {
                jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

                    // Attach a single capturing handler while someone wants focusin/focusout
                    var attaches = 0,
                        handler = function( event ) {
                            jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
                        };

                    jQuery.event.special[ fix ] = {
                        setup: function() {
                            if ( attaches++ === 0 ) {
                                document.addEventListener( orig, handler, true );
                            }
                        },
                        teardown: function() {
                            if ( --attaches === 0 ) {
                                document.removeEventListener( orig, handler, true );
                            }
                        }
                    };
                });
            }

            jQuery.fn.extend({

                on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
                    var origFn, type;

                    // Types can be a map of types/handlers
                    if ( typeof types === "object" ) {
                        // ( types-Object, selector, data )
                        if ( typeof selector !== "string" ) {
                            // ( types-Object, data )
                            data = data || selector;
                            selector = undefined;
                        }
                        for ( type in types ) {
                            this.on( type, selector, data, types[ type ], one );
                        }
                        return this;
                    }

                    if ( data == null && fn == null ) {
                        // ( types, fn )
                        fn = selector;
                        data = selector = undefined;
                    } else if ( fn == null ) {
                        if ( typeof selector === "string" ) {
                            // ( types, selector, fn )
                            fn = data;
                            data = undefined;
                        } else {
                            // ( types, data, fn )
                            fn = data;
                            data = selector;
                            selector = undefined;
                        }
                    }
                    if ( fn === false ) {
                        fn = returnFalse;
                    } else if ( !fn ) {
                        return this;
                    }

                    if ( one === 1 ) {
                        origFn = fn;
                        fn = function( event ) {
                            // Can use an empty set, since event contains the info
                            jQuery().off( event );
                            return origFn.apply( this, arguments );
                        };
                        // Use same guid so caller can remove using origFn
                        fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
                    }
                    return this.each( function() {
                        jQuery.event.add( this, types, fn, data, selector );
                    });
                },
                one: function( types, selector, data, fn ) {
                    return this.on( types, selector, data, fn, 1 );
                },
                off: function( types, selector, fn ) {
                    var handleObj, type;
                    if ( types && types.preventDefault && types.handleObj ) {
                        // ( event )  dispatched jQuery.Event
                        handleObj = types.handleObj;
                        jQuery( types.delegateTarget ).off(
                            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                            handleObj.selector,
                            handleObj.handler
                        );
                        return this;
                    }
                    if ( typeof types === "object" ) {
                        // ( types-object [, selector] )
                        for ( type in types ) {
                            this.off( type, selector, types[ type ] );
                        }
                        return this;
                    }
                    if ( selector === false || typeof selector === "function" ) {
                        // ( types [, fn] )
                        fn = selector;
                        selector = undefined;
                    }
                    if ( fn === false ) {
                        fn = returnFalse;
                    }
                    return this.each(function() {
                        jQuery.event.remove( this, types, fn, selector );
                    });
                },

                bind: function( types, data, fn ) {
                    return this.on( types, null, data, fn );
                },
                unbind: function( types, fn ) {
                    return this.off( types, null, fn );
                },

                delegate: function( selector, types, data, fn ) {
                    return this.on( types, selector, data, fn );
                },
                undelegate: function( selector, types, fn ) {
                    // ( namespace ) or ( selector, types [, fn] )
                    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
                },

                trigger: function( type, data ) {
                    return this.each(function() {
                        jQuery.event.trigger( type, data, this );
                    });
                },
                triggerHandler: function( type, data ) {
                    var elem = this[0];
                    if ( elem ) {
                        return jQuery.event.trigger( type, data, elem, true );
                    }
                },

                hover: function( fnOver, fnOut ) {
                    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
                }
            });

            jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
            "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
            "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

                // Handle event binding
                jQuery.fn[ name ] = function( data, fn ) {
                    return arguments.length > 0 ?
                        this.on( name, null, data, fn ) :
                        this.trigger( name );
                };

                if ( rkeyEvent.test( name ) ) {
                    jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
                }

                if ( rmouseEvent.test( name ) ) {
                    jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
                }
            });
            /*!
             * Sizzle CSS Selector Engine
             * Copyright 2012 jQuery Foundation and other contributors
             * Released under the MIT license
             * http://sizzlejs.com/
             */
            (function( window, undefined ) {

                var i,
                    cachedruns,
                    Expr,
                    getText,
                    isXML,
                    compile,
                    hasDuplicate,
                    outermostContext,

                // Local document vars
                    setDocument,
                    document,
                    docElem,
                    documentIsXML,
                    rbuggyQSA,
                    rbuggyMatches,
                    matches,
                    contains,
                    sortOrder,

                // Instance-specific data
                    expando = "sizzle" + -(new Date()),
                    preferredDoc = window.document,
                    support = {},
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),

                // General-purpose constants
                    strundefined = typeof undefined,
                    MAX_NEGATIVE = 1 << 31,

                // Array methods
                    arr = [],
                    pop = arr.pop,
                    push = arr.push,
                    slice = arr.slice,
                // Use a stripped-down indexOf if we can't use a native one
                    indexOf = arr.indexOf || function( elem ) {
                            var i = 0,
                                len = this.length;
                            for ( ; i < len; i++ ) {
                                if ( this[i] === elem ) {
                                    return i;
                                }
                            }
                            return -1;
                        },


                // Regular expressions

                // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                // http://www.w3.org/TR/css3-syntax/#characters
                    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

                // Loosely modeled on CSS identifier characters
                // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
                // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                    identifier = characterEncoding.replace( "w", "w#" ),

                // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
                    operators = "([*^$|!~]?=)",
                    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
                        "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

                // Prefer arguments quoted,
                //   then not containing pseudos/brackets,
                //   then attribute selectors/non-parenthetical expressions,
                //   then anything else
                // These preferences are here to reduce the number of selectors
                //   needing tokenize in the PSEUDO preFilter
                    pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                    rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

                    rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
                    rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
                    rpseudo = new RegExp( pseudos ),
                    ridentifier = new RegExp( "^" + identifier + "$" ),

                    matchExpr = {
                        "ID": new RegExp( "^#(" + characterEncoding + ")" ),
                        "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
                        "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
                        "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
                        "ATTR": new RegExp( "^" + attributes ),
                        "PSEUDO": new RegExp( "^" + pseudos ),
                        "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                            "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                            "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
                        // For use in libraries implementing .is()
                        // We use this for POS matching in `select`
                        "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
                    },

                    rsibling = /[\x20\t\r\n\f]*[+~]/,

                    rnative = /\{\s*\[native code\]\s*\}/,

                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,

                    rescape = /'|\\/g,
                    rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

                // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                    runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    funescape = function( _, escaped ) {
                        var high = "0x" + escaped - 0x10000;
                        // NaN means non-codepoint
                        return high !== high ?
                            escaped :
                            // BMP codepoint
                            high < 0 ?
                                String.fromCharCode( high + 0x10000 ) :
                                // Supplemental Plane codepoint (surrogate pair)
                                String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
                    };

                // Use a stripped-down slice if we can't use a native one
                try {
                    slice.call( docElem.childNodes, 0 )[0].nodeType;
                } catch ( e ) {
                    slice = function( i ) {
                        var elem,
                            results = [];
                        for ( ; (elem = this[i]); i++ ) {
                            results.push( elem );
                        }
                        return results;
                    };
                }

                /**
                 * For feature detection
                 * @param {Function} fn The function to test for native support
                 */
                function isNative( fn ) {
                    return rnative.test( fn + "" );
                }

                /**
                 * Create key-value caches of limited size
                 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
                 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
                 *	deleting the oldest entry
                 */
                function createCache() {
                    var cache,
                        keys = [];

                    return (cache = function( key, value ) {
                        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                        if ( keys.push( key += " " ) > Expr.cacheLength ) {
                            // Only keep the most recent entries
                            delete cache[ keys.shift() ];
                        }
                        return (cache[ key ] = value);
                    });
                }

                /**
                 * Mark a function for special use by Sizzle
                 * @param {Function} fn The function to mark
                 */
                function markFunction( fn ) {
                    fn[ expando ] = true;
                    return fn;
                }

                /**
                 * Support testing using an element
                 * @param {Function} fn Passed the created div and expects a boolean result
                 */
                function assert( fn ) {
                    var div = document.createElement("div");

                    try {
                        return fn( div );
                    } catch (e) {
                        return false;
                    } finally {
                        // release memory in IE
                        div = null;
                    }
                }

                function Sizzle( selector, context, results, seed ) {
                    var match, elem, m, nodeType,
                    // QSA vars
                        i, groups, old, nid, newContext, newSelector;

                    if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
                        setDocument( context );
                    }

                    context = context || document;
                    results = results || [];

                    if ( !selector || typeof selector !== "string" ) {
                        return results;
                    }

                    if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
                        return [];
                    }

                    if ( !documentIsXML && !seed ) {

                        // Shortcuts
                        if ( (match = rquickExpr.exec( selector )) ) {
                            // Speed-up: Sizzle("#ID")
                            if ( (m = match[1]) ) {
                                if ( nodeType === 9 ) {
                                    elem = context.getElementById( m );
                                    // Check parentNode to catch when Blackberry 4.6 returns
                                    // nodes that are no longer in the document #6963
                                    if ( elem && elem.parentNode ) {
                                        // Handle the case where IE, Opera, and Webkit return items
                                        // by name instead of ID
                                        if ( elem.id === m ) {
                                            results.push( elem );
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
                                    // Context is not a document
                                    if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
                                        contains( context, elem ) && elem.id === m ) {
                                        results.push( elem );
                                        return results;
                                    }
                                }

                                // Speed-up: Sizzle("TAG")
                            } else if ( match[2] ) {
                                push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
                                return results;

                                // Speed-up: Sizzle(".CLASS")
                            } else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
                                push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
                                return results;
                            }
                        }

                        // QSA path
                        if ( support.qsa && !rbuggyQSA.test(selector) ) {
                            old = true;
                            nid = expando;
                            newContext = context;
                            newSelector = nodeType === 9 && selector;

                            // qSA works strangely on Element-rooted queries
                            // We can work around this by specifying an extra ID on the root
                            // and working up from there (Thanks to Andrew Dupont for the technique)
                            // IE 8 doesn't work on object elements
                            if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
                                groups = tokenize( selector );

                                if ( (old = context.getAttribute("id")) ) {
                                    nid = old.replace( rescape, "\\$&" );
                                } else {
                                    context.setAttribute( "id", nid );
                                }
                                nid = "[id='" + nid + "'] ";

                                i = groups.length;
                                while ( i-- ) {
                                    groups[i] = nid + toSelector( groups[i] );
                                }
                                newContext = rsibling.test( selector ) && context.parentNode || context;
                                newSelector = groups.join(",");
                            }

                            if ( newSelector ) {
                                try {
                                    push.apply( results, slice.call( newContext.querySelectorAll(
                                        newSelector
                                    ), 0 ) );
                                    return results;
                                } catch(qsaError) {
                                } finally {
                                    if ( !old ) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }

                    // All others
                    return select( selector.replace( rtrim, "$1" ), context, results, seed );
                }

                /**
                 * Detect xml
                 * @param {Element|Object} elem An element or a document
                 */
                isXML = Sizzle.isXML = function( elem ) {
                    // documentElement is verified for cases where it doesn't yet exist
                    // (such as loading iframes in IE - #4833)
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return documentElement ? documentElement.nodeName !== "HTML" : false;
                };

                /**
                 * Sets document-related variables once based on the current document
                 * @param {Element|Object} [doc] An element or document object to use to set the document
                 * @returns {Object} Returns the current document
                 */
                setDocument = Sizzle.setDocument = function( node ) {
                    var doc = node ? node.ownerDocument || node : preferredDoc;

                    // If no document and documentElement is available, return
                    if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
                        return document;
                    }

                    // Set our document
                    document = doc;
                    docElem = doc.documentElement;

                    // Support tests
                    documentIsXML = isXML( doc );

                    // Check if getElementsByTagName("*") returns only elements
                    support.tagNameNoComments = assert(function( div ) {
                        div.appendChild( doc.createComment("") );
                        return !div.getElementsByTagName("*").length;
                    });

                    // Check if attributes should be retrieved by attribute nodes
                    support.attributes = assert(function( div ) {
                        div.innerHTML = "<select></select>";
                        var type = typeof div.lastChild.getAttribute("multiple");
                        // IE8 returns a string for some attributes even when not present
                        return type !== "boolean" && type !== "string";
                    });

                    // Check if getElementsByClassName can be trusted
                    support.getByClassName = assert(function( div ) {
                        // Opera can't find a second classname (in 9.6)
                        div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                        if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
                            return false;
                        }

                        // Safari 3.2 caches class attributes and doesn't catch changes
                        div.lastChild.className = "e";
                        return div.getElementsByClassName("e").length === 2;
                    });

                    // Check if getElementById returns elements by name
                    // Check if getElementsByName privileges form controls or returns elements by ID
                    support.getByName = assert(function( div ) {
                        // Inject content
                        div.id = expando + 0;
                        div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
                        docElem.insertBefore( div, docElem.firstChild );

                        // Test
                        var pass = doc.getElementsByName &&
                            // buggy browsers will return fewer than the correct 2
                            doc.getElementsByName( expando ).length === 2 +
                            // buggy browsers will return more than the correct 0
                            doc.getElementsByName( expando + 0 ).length;
                        support.getIdNotName = !doc.getElementById( expando );

                        // Cleanup
                        docElem.removeChild( div );

                        return pass;
                    });

                    // IE6/7 return modified attributes
                    Expr.attrHandle = assert(function( div ) {
                        div.innerHTML = "<a href='#'></a>";
                        return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
                            div.firstChild.getAttribute("href") === "#";
                    }) ?
                    {} :
                    {
                        "href": function( elem ) {
                            return elem.getAttribute( "href", 2 );
                        },
                        "type": function( elem ) {
                            return elem.getAttribute("type");
                        }
                    };

                    // ID find and filter
                    if ( support.getIdNotName ) {
                        Expr.find["ID"] = function( id, context ) {
                            if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
                                var m = context.getElementById( id );
                                // Check parentNode to catch when Blackberry 4.6 returns
                                // nodes that are no longer in the document #6963
                                return m && m.parentNode ? [m] : [];
                            }
                        };
                        Expr.filter["ID"] = function( id ) {
                            var attrId = id.replace( runescape, funescape );
                            return function( elem ) {
                                return elem.getAttribute("id") === attrId;
                            };
                        };
                    } else {
                        Expr.find["ID"] = function( id, context ) {
                            if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
                                var m = context.getElementById( id );

                                return m ?
                                    m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
                                        [m] :
                                        undefined :
                                    [];
                            }
                        };
                        Expr.filter["ID"] =  function( id ) {
                            var attrId = id.replace( runescape, funescape );
                            return function( elem ) {
                                var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                                return node && node.value === attrId;
                            };
                        };
                    }

                    // Tag
                    Expr.find["TAG"] = support.tagNameNoComments ?
                        function( tag, context ) {
                            if ( typeof context.getElementsByTagName !== strundefined ) {
                                return context.getElementsByTagName( tag );
                            }
                        } :
                        function( tag, context ) {
                            var elem,
                                tmp = [],
                                i = 0,
                                results = context.getElementsByTagName( tag );

                            // Filter out possible comments
                            if ( tag === "*" ) {
                                for ( ; (elem = results[i]); i++ ) {
                                    if ( elem.nodeType === 1 ) {
                                        tmp.push( elem );
                                    }
                                }

                                return tmp;
                            }
                            return results;
                        };

                    // Name
                    Expr.find["NAME"] = support.getByName && function( tag, context ) {
                            if ( typeof context.getElementsByName !== strundefined ) {
                                return context.getElementsByName( name );
                            }
                        };

                    // Class
                    Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
                            if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
                                return context.getElementsByClassName( className );
                            }
                        };

                    // QSA and matchesSelector support

                    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                    rbuggyMatches = [];

                    // qSa(:focus) reports false when true (Chrome 21),
                    // no need to also add to buggyMatches since matches checks buggyQSA
                    // A support test would require too much code (would include document ready)
                    rbuggyQSA = [ ":focus" ];

                    if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
                        // Build QSA regex
                        // Regex strategy adopted from Diego Perini
                        assert(function( div ) {
                            // Select is set to empty string on purpose
                            // This is to test IE's treatment of not explictly
                            // setting a boolean content attribute,
                            // since its presence should be enough
                            // http://bugs.jquery.com/ticket/12359
                            div.innerHTML = "<select><option selected=''></option></select>";

                            // IE8 - Some boolean attributes are not treated correctly
                            if ( !div.querySelectorAll("[selected]").length ) {
                                rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
                            }

                            // Webkit/Opera - :checked should return selected option elements
                            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                            // IE8 throws error here and will not see later tests
                            if ( !div.querySelectorAll(":checked").length ) {
                                rbuggyQSA.push(":checked");
                            }
                        });

                        assert(function( div ) {

                            // Opera 10-12/IE8 - ^= $= *= and empty values
                            // Should not select anything
                            div.innerHTML = "<input type='hidden' i=''/>";
                            if ( div.querySelectorAll("[i^='']").length ) {
                                rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
                            }

                            // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                            // IE8 throws error here and will not see later tests
                            if ( !div.querySelectorAll(":enabled").length ) {
                                rbuggyQSA.push( ":enabled", ":disabled" );
                            }

                            // Opera 10-11 does not throw on post-comma invalid pseudos
                            div.querySelectorAll("*,:x");
                            rbuggyQSA.push(",.*:");
                        });
                    }

                    if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
                            docElem.mozMatchesSelector ||
                            docElem.webkitMatchesSelector ||
                            docElem.oMatchesSelector ||
                            docElem.msMatchesSelector) )) ) {

                        assert(function( div ) {
                            // Check to see if it's possible to do matchesSelector
                            // on a disconnected node (IE 9)
                            support.disconnectedMatch = matches.call( div, "div" );

                            // This should fail with an exception
                            // Gecko does not error, returns false instead
                            matches.call( div, "[s!='']:x" );
                            rbuggyMatches.push( "!=", pseudos );
                        });
                    }

                    rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
                    rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

                    // Element contains another
                    // Purposefully does not implement inclusive descendent
                    // As in, an element does not contain itself
                    contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
                        function( a, b ) {
                            var adown = a.nodeType === 9 ? a.documentElement : a,
                                bup = b && b.parentNode;
                            return a === bup || !!( bup && bup.nodeType === 1 && (
                                    adown.contains ?
                                        adown.contains( bup ) :
                                    a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                                ));
                        } :
                        function( a, b ) {
                            if ( b ) {
                                while ( (b = b.parentNode) ) {
                                    if ( b === a ) {
                                        return true;
                                    }
                                }
                            }
                            return false;
                        };

                    // Document order sorting
                    sortOrder = docElem.compareDocumentPosition ?
                        function( a, b ) {
                            var compare;

                            if ( a === b ) {
                                hasDuplicate = true;
                                return 0;
                            }

                            if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
                                if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
                                    if ( a === doc || contains( preferredDoc, a ) ) {
                                        return -1;
                                    }
                                    if ( b === doc || contains( preferredDoc, b ) ) {
                                        return 1;
                                    }
                                    return 0;
                                }
                                return compare & 4 ? -1 : 1;
                            }

                            return a.compareDocumentPosition ? -1 : 1;
                        } :
                        function( a, b ) {
                            var cur,
                                i = 0,
                                aup = a.parentNode,
                                bup = b.parentNode,
                                ap = [ a ],
                                bp = [ b ];

                            // The nodes are identical, we can exit early
                            if ( a === b ) {
                                hasDuplicate = true;
                                return 0;

                                // Fallback to using sourceIndex (in IE) if it's available on both nodes
                            } else if ( a.sourceIndex && b.sourceIndex ) {
                                return ( ~b.sourceIndex || MAX_NEGATIVE ) - ( contains( preferredDoc, a ) && ~a.sourceIndex || MAX_NEGATIVE );

                                // Parentless nodes are either documents or disconnected
                            } else if ( !aup || !bup ) {
                                return a === doc ? -1 :
                                    b === doc ? 1 :
                                        aup ? -1 :
                                            bup ? 1 :
                                                0;

                                // If the nodes are siblings, we can do a quick check
                            } else if ( aup === bup ) {
                                return siblingCheck( a, b );
                            }

                            // Otherwise we need full lists of their ancestors for comparison
                            cur = a;
                            while ( (cur = cur.parentNode) ) {
                                ap.unshift( cur );
                            }
                            cur = b;
                            while ( (cur = cur.parentNode) ) {
                                bp.unshift( cur );
                            }

                            // Walk down the tree looking for a discrepancy
                            while ( ap[i] === bp[i] ) {
                                i++;
                            }

                            return i ?
                                // Do a sibling check if the nodes have a common ancestor
                                siblingCheck( ap[i], bp[i] ) :

                                // Otherwise nodes in our document sort first
                                ap[i] === preferredDoc ? -1 :
                                    bp[i] === preferredDoc ? 1 :
                                        0;
                        };

                    // Always assume the presence of duplicates if sort doesn't
                    // pass them to our comparison function (as in Google Chrome).
                    hasDuplicate = false;
                    [0, 0].sort( sortOrder );
                    support.detectDuplicates = hasDuplicate;

                    return document;
                };

                Sizzle.matches = function( expr, elements ) {
                    return Sizzle( expr, null, null, elements );
                };

                Sizzle.matchesSelector = function( elem, expr ) {
                    // Set document vars if needed
                    if ( ( elem.ownerDocument || elem ) !== document ) {
                        setDocument( elem );
                    }

                    // Make sure that attribute selectors are quoted
                    expr = expr.replace( rattributeQuotes, "='$1']" );

                    // rbuggyQSA always contains :focus, so no need for an existence check
                    if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
                        try {
                            var ret = matches.call( elem, expr );

                            // IE 9's matchesSelector returns false on disconnected nodes
                            if ( ret || support.disconnectedMatch ||
                                // As well, disconnected nodes are said to be in a document
                                // fragment in IE 9
                                elem.document && elem.document.nodeType !== 11 ) {
                                return ret;
                            }
                        } catch(e) {}
                    }

                    return Sizzle( expr, document, null, [elem] ).length > 0;
                };

                Sizzle.contains = function( context, elem ) {
                    // Set document vars if needed
                    if ( ( context.ownerDocument || context ) !== document ) {
                        setDocument( context );
                    }
                    return contains( context, elem );
                };

                Sizzle.attr = function( elem, name ) {
                    var val;

                    // Set document vars if needed
                    if ( ( elem.ownerDocument || elem ) !== document ) {
                        setDocument( elem );
                    }

                    if ( !documentIsXML ) {
                        name = name.toLowerCase();
                    }
                    if ( (val = Expr.attrHandle[ name ]) ) {
                        return val( elem );
                    }
                    if ( documentIsXML || support.attributes ) {
                        return elem.getAttribute( name );
                    }
                    return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
                        name :
                        val && val.specified ? val.value : null;
                };

                Sizzle.error = function( msg ) {
                    throw new Error( "Syntax error, unrecognized expression: " + msg );
                };

                // Document sorting and removing duplicates
                Sizzle.uniqueSort = function( results ) {
                    var elem,
                        duplicates = [],
                        i = 1,
                        j = 0;

                    // Unless we *know* we can detect duplicates, assume their presence
                    hasDuplicate = !support.detectDuplicates;
                    results.sort( sortOrder );

                    if ( hasDuplicate ) {
                        for ( ; (elem = results[i]); i++ ) {
                            if ( elem === results[ i - 1 ] ) {
                                j = duplicates.push( i );
                            }
                        }
                        while ( j-- ) {
                            results.splice( duplicates[ j ], 1 );
                        }
                    }

                    return results;
                };

                function siblingCheck( a, b ) {
                    var cur = a && b && a.nextSibling;

                    for ( ; cur; cur = cur.nextSibling ) {
                        if ( cur === b ) {
                            return -1;
                        }
                    }

                    return a ? 1 : -1;
                }

                // Returns a function to use in pseudos for input types
                function createInputPseudo( type ) {
                    return function( elem ) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === type;
                    };
                }

                // Returns a function to use in pseudos for buttons
                function createButtonPseudo( type ) {
                    return function( elem ) {
                        var name = elem.nodeName.toLowerCase();
                        return (name === "input" || name === "button") && elem.type === type;
                    };
                }

                // Returns a function to use in pseudos for positionals
                function createPositionalPseudo( fn ) {
                    return markFunction(function( argument ) {
                        argument = +argument;
                        return markFunction(function( seed, matches ) {
                            var j,
                                matchIndexes = fn( [], seed.length, argument ),
                                i = matchIndexes.length;

                            // Match elements found at the specified indexes
                            while ( i-- ) {
                                if ( seed[ (j = matchIndexes[i]) ] ) {
                                    seed[j] = !(matches[j] = seed[j]);
                                }
                            }
                        });
                    });
                }

                /**
                 * Utility function for retrieving the text value of an array of DOM nodes
                 * @param {Array|Element} elem
                 */
                getText = Sizzle.getText = function( elem ) {
                    var node,
                        ret = "",
                        i = 0,
                        nodeType = elem.nodeType;

                    if ( !nodeType ) {
                        // If no nodeType, this is expected to be an array
                        for ( ; (node = elem[i]); i++ ) {
                            // Do not traverse comment nodes
                            ret += getText( node );
                        }
                    } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
                        // Use textContent for elements
                        // innerText usage removed for consistency of new lines (see #11153)
                        if ( typeof elem.textContent === "string" ) {
                            return elem.textContent;
                        } else {
                            // Traverse its children
                            for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                                ret += getText( elem );
                            }
                        }
                    } else if ( nodeType === 3 || nodeType === 4 ) {
                        return elem.nodeValue;
                    }
                    // Do not include comment or processing instruction nodes

                    return ret;
                };

                Expr = Sizzle.selectors = {

                    // Can be adjusted by the user
                    cacheLength: 50,

                    createPseudo: markFunction,

                    match: matchExpr,

                    find: {},

                    relative: {
                        ">": { dir: "parentNode", first: true },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: true },
                        "~": { dir: "previousSibling" }
                    },

                    preFilter: {
                        "ATTR": function( match ) {
                            match[1] = match[1].replace( runescape, funescape );

                            // Move the given value to match[3] whether quoted or unquoted
                            match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

                            if ( match[2] === "~=" ) {
                                match[3] = " " + match[3] + " ";
                            }

                            return match.slice( 0, 4 );
                        },

                        "CHILD": function( match ) {
                            /* matches from matchExpr["CHILD"]
                             1 type (only|nth|...)
                             2 what (child|of-type)
                             3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                             4 xn-component of xn+y argument ([+-]?\d*n|)
                             5 sign of xn-component
                             6 x of xn-component
                             7 sign of y-component
                             8 y of y-component
                             */
                            match[1] = match[1].toLowerCase();

                            if ( match[1].slice( 0, 3 ) === "nth" ) {
                                // nth-* requires argument
                                if ( !match[3] ) {
                                    Sizzle.error( match[0] );
                                }

                                // numeric x and y parameters for Expr.filter.CHILD
                                // remember that false/true cast respectively to 0/1
                                match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                                match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

                                // other types prohibit arguments
                            } else if ( match[3] ) {
                                Sizzle.error( match[0] );
                            }

                            return match;
                        },

                        "PSEUDO": function( match ) {
                            var excess,
                                unquoted = !match[5] && match[2];

                            if ( matchExpr["CHILD"].test( match[0] ) ) {
                                return null;
                            }

                            // Accept quoted arguments as-is
                            if ( match[4] ) {
                                match[2] = match[4];

                                // Strip excess characters from unquoted arguments
                            } else if ( unquoted && rpseudo.test( unquoted ) &&
                                // Get excess from tokenize (recursively)
                                (excess = tokenize( unquoted, true )) &&
                                // advance to the next closing parenthesis
                                (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

                                // excess is a negative index
                                match[0] = match[0].slice( 0, excess );
                                match[2] = unquoted.slice( 0, excess );
                            }

                            // Return only captures needed by the pseudo filter method (type and argument)
                            return match.slice( 0, 3 );
                        }
                    },

                    filter: {

                        "TAG": function( nodeName ) {
                            if ( nodeName === "*" ) {
                                return function() { return true; };
                            }

                            nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
                            return function( elem ) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                        },

                        "CLASS": function( className ) {
                            var pattern = classCache[ className + " " ];

                            return pattern ||
                                (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                                classCache( className, function( elem ) {
                                    return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
                                });
                        },

                        "ATTR": function( name, operator, check ) {
                            return function( elem ) {
                                var result = Sizzle.attr( elem, name );

                                if ( result == null ) {
                                    return operator === "!=";
                                }
                                if ( !operator ) {
                                    return true;
                                }

                                result += "";

                                return operator === "=" ? result === check :
                                    operator === "!=" ? result !== check :
                                        operator === "^=" ? check && result.indexOf( check ) === 0 :
                                            operator === "*=" ? check && result.indexOf( check ) > -1 :
                                                operator === "$=" ? check && result.substr( result.length - check.length ) === check :
                                                    operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
                                                        operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
                                                            false;
                            };
                        },

                        "CHILD": function( type, what, argument, first, last ) {
                            var simple = type.slice( 0, 3 ) !== "nth",
                                forward = type.slice( -4 ) !== "last",
                                ofType = what === "of-type";

                            return first === 1 && last === 0 ?

                                // Shortcut for :nth-*(n)
                                function( elem ) {
                                    return !!elem.parentNode;
                                } :

                                function( elem, context, xml ) {
                                    var cache, outerCache, node, diff, nodeIndex, start,
                                        dir = simple !== forward ? "nextSibling" : "previousSibling",
                                        parent = elem.parentNode,
                                        name = ofType && elem.nodeName.toLowerCase(),
                                        useCache = !xml && !ofType;

                                    if ( parent ) {

                                        // :(first|last|only)-(child|of-type)
                                        if ( simple ) {
                                            while ( dir ) {
                                                node = elem;
                                                while ( (node = node[ dir ]) ) {
                                                    if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                                                        return false;
                                                    }
                                                }
                                                // Reverse direction for :only-* (if we haven't yet done so)
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }

                                        start = [ forward ? parent.firstChild : parent.lastChild ];

                                        // non-xml :nth-child(...) stores cache data on `parent`
                                        if ( forward && useCache ) {
                                            // Seek `elem` from a previously-cached index
                                            outerCache = parent[ expando ] || (parent[ expando ] = {});
                                            cache = outerCache[ type ] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = cache[0] === dirruns && cache[2];
                                            node = nodeIndex && parent.childNodes[ nodeIndex ];

                                            while ( (node = ++nodeIndex && node && node[ dir ] ||

                                                // Fallback to seeking `elem` from the start
                                                (diff = nodeIndex = 0) || start.pop()) ) {

                                                // When found, cache indexes on `parent` and break
                                                if ( node.nodeType === 1 && ++diff && node === elem ) {
                                                    outerCache[ type ] = [ dirruns, nodeIndex, diff ];
                                                    break;
                                                }
                                            }

                                            // Use previously-cached element index if available
                                        } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
                                            diff = cache[1];

                                            // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        } else {
                                            // Use the same loop as above to seek `elem` from the start
                                            while ( (node = ++nodeIndex && node && node[ dir ] ||
                                                (diff = nodeIndex = 0) || start.pop()) ) {

                                                if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
                                                    // Cache the index of each encountered element
                                                    if ( useCache ) {
                                                        (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
                                                    }

                                                    if ( node === elem ) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }

                                        // Incorporate the offset, then check against cycle size
                                        diff -= last;
                                        return diff === first || ( diff % first === 0 && diff / first >= 0 );
                                    }
                                };
                        },

                        "PSEUDO": function( pseudo, argument ) {
                            // pseudo-class names are case-insensitive
                            // http://www.w3.org/TR/selectors/#pseudo-classes
                            // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                            // Remember that setFilters inherits from pseudos
                            var args,
                                fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                                    Sizzle.error( "unsupported pseudo: " + pseudo );

                            // The user may use createPseudo to indicate that
                            // arguments are needed to create the filter function
                            // just as Sizzle does
                            if ( fn[ expando ] ) {
                                return fn( argument );
                            }

                            // But maintain support for old signatures
                            if ( fn.length > 1 ) {
                                args = [ pseudo, pseudo, "", argument ];
                                return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                                    markFunction(function( seed, matches ) {
                                        var idx,
                                            matched = fn( seed, argument ),
                                            i = matched.length;
                                        while ( i-- ) {
                                            idx = indexOf.call( seed, matched[i] );
                                            seed[ idx ] = !( matches[ idx ] = matched[i] );
                                        }
                                    }) :
                                    function( elem ) {
                                        return fn( elem, 0, args );
                                    };
                            }

                            return fn;
                        }
                    },

                    pseudos: {
                        // Potentially complex pseudos
                        "not": markFunction(function( selector ) {
                            // Trim the selector passed to compile
                            // to avoid treating leading and trailing
                            // spaces as combinators
                            var input = [],
                                results = [],
                                matcher = compile( selector.replace( rtrim, "$1" ) );

                            return matcher[ expando ] ?
                                markFunction(function( seed, matches, context, xml ) {
                                    var elem,
                                        unmatched = matcher( seed, null, xml, [] ),
                                        i = seed.length;

                                    // Match elements unmatched by `matcher`
                                    while ( i-- ) {
                                        if ( (elem = unmatched[i]) ) {
                                            seed[i] = !(matches[i] = elem);
                                        }
                                    }
                                }) :
                                function( elem, context, xml ) {
                                    input[0] = elem;
                                    matcher( input, null, xml, results );
                                    return !results.pop();
                                };
                        }),

                        "has": markFunction(function( selector ) {
                            return function( elem ) {
                                return Sizzle( selector, elem ).length > 0;
                            };
                        }),

                        "contains": markFunction(function( text ) {
                            return function( elem ) {
                                return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                            };
                        }),

                        // "Whether an element is represented by a :lang() selector
                        // is based solely on the element's language value
                        // being equal to the identifier C,
                        // or beginning with the identifier C immediately followed by "-".
                        // The matching of C against the element's language value is performed case-insensitively.
                        // The identifier C does not have to be a valid language name."
                        // http://www.w3.org/TR/selectors/#lang-pseudo
                        "lang": markFunction( function( lang ) {
                            // lang value must be a valid identifider
                            if ( !ridentifier.test(lang || "") ) {
                                Sizzle.error( "unsupported lang: " + lang );
                            }
                            lang = lang.replace( runescape, funescape ).toLowerCase();
                            return function( elem ) {
                                var elemLang;
                                do {
                                    if ( (elemLang = documentIsXML ?
                                        elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
                                            elem.lang) ) {

                                        elemLang = elemLang.toLowerCase();
                                        return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                                    }
                                } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                                return false;
                            };
                        }),

                        // Miscellaneous
                        "target": function( elem ) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice( 1 ) === elem.id;
                        },

                        "root": function( elem ) {
                            return elem === docElem;
                        },

                        "focus": function( elem ) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                        },

                        // Boolean properties
                        "enabled": function( elem ) {
                            return elem.disabled === false;
                        },

                        "disabled": function( elem ) {
                            return elem.disabled === true;
                        },

                        "checked": function( elem ) {
                            // In CSS3, :checked should return both checked and selected elements
                            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                            var nodeName = elem.nodeName.toLowerCase();
                            return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                        },

                        "selected": function( elem ) {
                            // Accessing this property makes selected-by-default
                            // options in Safari work properly
                            if ( elem.parentNode ) {
                                elem.parentNode.selectedIndex;
                            }

                            return elem.selected === true;
                        },

                        // Contents
                        "empty": function( elem ) {
                            // http://www.w3.org/TR/selectors/#empty-pseudo
                            // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
                            //   not comment, processing instructions, or others
                            // Thanks to Diego Perini for the nodeName shortcut
                            //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
                            for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                                if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
                                    return false;
                                }
                            }
                            return true;
                        },

                        "parent": function( elem ) {
                            return !Expr.pseudos["empty"]( elem );
                        },

                        // Element/input types
                        "header": function( elem ) {
                            return rheader.test( elem.nodeName );
                        },

                        "input": function( elem ) {
                            return rinputs.test( elem.nodeName );
                        },

                        "button": function( elem ) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === "button" || name === "button";
                        },

                        "text": function( elem ) {
                            var attr;
                            // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
                            // use getAttribute instead to test this case
                            return elem.nodeName.toLowerCase() === "input" &&
                                elem.type === "text" &&
                                ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
                        },

                        // Position-in-collection
                        "first": createPositionalPseudo(function() {
                            return [ 0 ];
                        }),

                        "last": createPositionalPseudo(function( matchIndexes, length ) {
                            return [ length - 1 ];
                        }),

                        "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
                            return [ argument < 0 ? argument + length : argument ];
                        }),

                        "even": createPositionalPseudo(function( matchIndexes, length ) {
                            var i = 0;
                            for ( ; i < length; i += 2 ) {
                                matchIndexes.push( i );
                            }
                            return matchIndexes;
                        }),

                        "odd": createPositionalPseudo(function( matchIndexes, length ) {
                            var i = 1;
                            for ( ; i < length; i += 2 ) {
                                matchIndexes.push( i );
                            }
                            return matchIndexes;
                        }),

                        "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                            var i = argument < 0 ? argument + length : argument;
                            for ( ; --i >= 0; ) {
                                matchIndexes.push( i );
                            }
                            return matchIndexes;
                        }),

                        "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                            var i = argument < 0 ? argument + length : argument;
                            for ( ; ++i < length; ) {
                                matchIndexes.push( i );
                            }
                            return matchIndexes;
                        })
                    }
                };

                // Add button/input type pseudos
                for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
                    Expr.pseudos[ i ] = createInputPseudo( i );
                }
                for ( i in { submit: true, reset: true } ) {
                    Expr.pseudos[ i ] = createButtonPseudo( i );
                }

                function tokenize( selector, parseOnly ) {
                    var matched, match, tokens, type,
                        soFar, groups, preFilters,
                        cached = tokenCache[ selector + " " ];

                    if ( cached ) {
                        return parseOnly ? 0 : cached.slice( 0 );
                    }

                    soFar = selector;
                    groups = [];
                    preFilters = Expr.preFilter;

                    while ( soFar ) {

                        // Comma and first run
                        if ( !matched || (match = rcomma.exec( soFar )) ) {
                            if ( match ) {
                                // Don't consume trailing commas as valid
                                soFar = soFar.slice( match[0].length ) || soFar;
                            }
                            groups.push( tokens = [] );
                        }

                        matched = false;

                        // Combinators
                        if ( (match = rcombinators.exec( soFar )) ) {
                            matched = match.shift();
                            tokens.push( {
                                value: matched,
                                // Cast descendant combinators to space
                                type: match[0].replace( rtrim, " " )
                            } );
                            soFar = soFar.slice( matched.length );
                        }

                        // Filters
                        for ( type in Expr.filter ) {
                            if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                                (match = preFilters[ type ]( match ))) ) {
                                matched = match.shift();
                                tokens.push( {
                                    value: matched,
                                    type: type,
                                    matches: match
                                } );
                                soFar = soFar.slice( matched.length );
                            }
                        }

                        if ( !matched ) {
                            break;
                        }
                    }

                    // Return the length of the invalid excess
                    // if we're just parsing
                    // Otherwise, throw an error or return tokens
                    return parseOnly ?
                        soFar.length :
                        soFar ?
                            Sizzle.error( selector ) :
                            // Cache the tokens
                            tokenCache( selector, groups ).slice( 0 );
                }

                function toSelector( tokens ) {
                    var i = 0,
                        len = tokens.length,
                        selector = "";
                    for ( ; i < len; i++ ) {
                        selector += tokens[i].value;
                    }
                    return selector;
                }

                function addCombinator( matcher, combinator, base ) {
                    var dir = combinator.dir,
                        checkNonElements = base && combinator.dir === "parentNode",
                        doneName = done++;

                    return combinator.first ?
                        // Check against closest ancestor/preceding element
                        function( elem, context, xml ) {
                            while ( (elem = elem[ dir ]) ) {
                                if ( elem.nodeType === 1 || checkNonElements ) {
                                    return matcher( elem, context, xml );
                                }
                            }
                        } :

                        // Check against all ancestor/preceding elements
                        function( elem, context, xml ) {
                            var data, cache, outerCache,
                                dirkey = dirruns + " " + doneName;

                            // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                            if ( xml ) {
                                while ( (elem = elem[ dir ]) ) {
                                    if ( elem.nodeType === 1 || checkNonElements ) {
                                        if ( matcher( elem, context, xml ) ) {
                                            return true;
                                        }
                                    }
                                }
                            } else {
                                while ( (elem = elem[ dir ]) ) {
                                    if ( elem.nodeType === 1 || checkNonElements ) {
                                        outerCache = elem[ expando ] || (elem[ expando ] = {});
                                        if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
                                            if ( (data = cache[1]) === true || data === cachedruns ) {
                                                return data === true;
                                            }
                                        } else {
                                            cache = outerCache[ dir ] = [ dirkey ];
                                            cache[1] = matcher( elem, context, xml ) || cachedruns;
                                            if ( cache[1] === true ) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        };
                }

                function elementMatcher( matchers ) {
                    return matchers.length > 1 ?
                        function( elem, context, xml ) {
                            var i = matchers.length;
                            while ( i-- ) {
                                if ( !matchers[i]( elem, context, xml ) ) {
                                    return false;
                                }
                            }
                            return true;
                        } :
                        matchers[0];
                }

                function condense( unmatched, map, filter, context, xml ) {
                    var elem,
                        newUnmatched = [],
                        i = 0,
                        len = unmatched.length,
                        mapped = map != null;

                    for ( ; i < len; i++ ) {
                        if ( (elem = unmatched[i]) ) {
                            if ( !filter || filter( elem, context, xml ) ) {
                                newUnmatched.push( elem );
                                if ( mapped ) {
                                    map.push( i );
                                }
                            }
                        }
                    }

                    return newUnmatched;
                }

                function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
                    if ( postFilter && !postFilter[ expando ] ) {
                        postFilter = setMatcher( postFilter );
                    }
                    if ( postFinder && !postFinder[ expando ] ) {
                        postFinder = setMatcher( postFinder, postSelector );
                    }
                    return markFunction(function( seed, results, context, xml ) {
                        var temp, i, elem,
                            preMap = [],
                            postMap = [],
                            preexisting = results.length,

                        // Get initial elements from seed or context
                            elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

                        // Prefilter to get matcher input, preserving a map for seed-results synchronization
                            matcherIn = preFilter && ( seed || !selector ) ?
                                condense( elems, preMap, preFilter, context, xml ) :
                                elems,

                            matcherOut = matcher ?
                                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                                postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                                    // ...intermediate processing is necessary
                                    [] :

                                    // ...otherwise use results directly
                                    results :
                                matcherIn;

                        // Find primary matches
                        if ( matcher ) {
                            matcher( matcherIn, matcherOut, context, xml );
                        }

                        // Apply postFilter
                        if ( postFilter ) {
                            temp = condense( matcherOut, postMap );
                            postFilter( temp, [], context, xml );

                            // Un-match failing elements by moving them back to matcherIn
                            i = temp.length;
                            while ( i-- ) {
                                if ( (elem = temp[i]) ) {
                                    matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                                }
                            }
                        }

                        if ( seed ) {
                            if ( postFinder || preFilter ) {
                                if ( postFinder ) {
                                    // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                    temp = [];
                                    i = matcherOut.length;
                                    while ( i-- ) {
                                        if ( (elem = matcherOut[i]) ) {
                                            // Restore matcherIn since elem is not yet a final match
                                            temp.push( (matcherIn[i] = elem) );
                                        }
                                    }
                                    postFinder( null, (matcherOut = []), temp, xml );
                                }

                                // Move matched elements from seed to results to keep them synchronized
                                i = matcherOut.length;
                                while ( i-- ) {
                                    if ( (elem = matcherOut[i]) &&
                                        (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

                                        seed[temp] = !(results[temp] = elem);
                                    }
                                }
                            }

                            // Add elements to results, through postFinder if defined
                        } else {
                            matcherOut = condense(
                                matcherOut === results ?
                                    matcherOut.splice( preexisting, matcherOut.length ) :
                                    matcherOut
                            );
                            if ( postFinder ) {
                                postFinder( null, results, matcherOut, xml );
                            } else {
                                push.apply( results, matcherOut );
                            }
                        }
                    });
                }

                function matcherFromTokens( tokens ) {
                    var checkContext, matcher, j,
                        len = tokens.length,
                        leadingRelative = Expr.relative[ tokens[0].type ],
                        implicitRelative = leadingRelative || Expr.relative[" "],
                        i = leadingRelative ? 1 : 0,

                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                        matchContext = addCombinator( function( elem ) {
                            return elem === checkContext;
                        }, implicitRelative, true ),
                        matchAnyContext = addCombinator( function( elem ) {
                            return indexOf.call( checkContext, elem ) > -1;
                        }, implicitRelative, true ),
                        matchers = [ function( elem, context, xml ) {
                            return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                                    (checkContext = context).nodeType ?
                                        matchContext( elem, context, xml ) :
                                        matchAnyContext( elem, context, xml ) );
                        } ];

                    for ( ; i < len; i++ ) {
                        if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                            matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
                        } else {
                            matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

                            // Return special upon seeing a positional matcher
                            if ( matcher[ expando ] ) {
                                // Find the next relative operator (if any) for proper handling
                                j = ++i;
                                for ( ; j < len; j++ ) {
                                    if ( Expr.relative[ tokens[j].type ] ) {
                                        break;
                                    }
                                }
                                return setMatcher(
                                    i > 1 && elementMatcher( matchers ),
                                    i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
                                    matcher,
                                    i < j && matcherFromTokens( tokens.slice( i, j ) ),
                                    j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                                    j < len && toSelector( tokens )
                                );
                            }
                            matchers.push( matcher );
                        }
                    }

                    return elementMatcher( matchers );
                }

                function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
                    // A counter to specify which element is currently being matched
                    var matcherCachedRuns = 0,
                        bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function( seed, context, xml, results, expandContext ) {
                            var elem, j, matcher,
                                setMatched = [],
                                matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                outermost = expandContext != null,
                                contextBackup = outermostContext,
                            // We must always have either seed elements or context
                                elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
                            // Nested matchers should use non-integer dirruns
                                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

                            if ( outermost ) {
                                outermostContext = context !== document && context;
                                cachedruns = matcherCachedRuns;
                            }

                            // Add elements passing elementMatchers directly to results
                            for ( ; (elem = elems[i]) != null; i++ ) {
                                if ( byElement && elem ) {
                                    for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
                                        if ( matcher( elem, context, xml ) ) {
                                            results.push( elem );
                                            break;
                                        }
                                    }
                                    if ( outermost ) {
                                        dirruns = dirrunsUnique;
                                        cachedruns = ++matcherCachedRuns;
                                    }
                                }

                                // Track unmatched elements for set filters
                                if ( bySet ) {
                                    // They will have gone through all possible matchers
                                    if ( (elem = !matcher && elem) ) {
                                        matchedCount--;
                                    }

                                    // Lengthen the array for every element, matched or not
                                    if ( seed ) {
                                        unmatched.push( elem );
                                    }
                                }
                            }

                            // Apply set filters to unmatched elements
                            // `i` starts as a string, so matchedCount would equal "00" if there are no elements
                            matchedCount += i;
                            if ( bySet && i !== matchedCount ) {
                                for ( j = 0; (matcher = setMatchers[j]); j++ ) {
                                    matcher( unmatched, setMatched, context, xml );
                                }

                                if ( seed ) {
                                    // Reintegrate element matches to eliminate the need for sorting
                                    if ( matchedCount > 0 ) {
                                        while ( i-- ) {
                                            if ( !(unmatched[i] || setMatched[i]) ) {
                                                setMatched[i] = pop.call( results );
                                            }
                                        }
                                    }

                                    // Discard index placeholder values to get only actual matches
                                    setMatched = condense( setMatched );
                                }

                                // Add matches to results
                                push.apply( results, setMatched );

                                // Seedless set matches succeeding multiple successful matchers stipulate sorting
                                if ( outermost && !seed && setMatched.length > 0 &&
                                    ( matchedCount + setMatchers.length ) > 1 ) {

                                    Sizzle.uniqueSort( results );
                                }
                            }

                            // Override manipulation of globals by nested matchers
                            if ( outermost ) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }

                            return unmatched;
                        };

                    return bySet ?
                        markFunction( superMatcher ) :
                        superMatcher;
                }

                compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
                    var i,
                        setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[ selector + " " ];

                    if ( !cached ) {
                        // Generate a function of recursive functions that can be used to check each element
                        if ( !group ) {
                            group = tokenize( selector );
                        }
                        i = group.length;
                        while ( i-- ) {
                            cached = matcherFromTokens( group[i] );
                            if ( cached[ expando ] ) {
                                setMatchers.push( cached );
                            } else {
                                elementMatchers.push( cached );
                            }
                        }

                        // Cache the compiled function
                        cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
                    }
                    return cached;
                };

                function multipleContexts( selector, contexts, results ) {
                    var i = 0,
                        len = contexts.length;
                    for ( ; i < len; i++ ) {
                        Sizzle( selector, contexts[i], results );
                    }
                    return results;
                }

                function select( selector, context, results, seed ) {
                    var i, tokens, token, type, find,
                        match = tokenize( selector );

                    if ( !seed ) {
                        // Try to minimize operations if there is only one group
                        if ( match.length === 1 ) {

                            // Take a shortcut and set the context if the root selector is an ID
                            tokens = match[0] = match[0].slice( 0 );
                            if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                                context.nodeType === 9 && !documentIsXML &&
                                Expr.relative[ tokens[1].type ] ) {

                                context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
                                if ( !context ) {
                                    return results;
                                }

                                selector = selector.slice( tokens.shift().value.length );
                            }

                            // Fetch a seed set for right-to-left matching
                            for ( i = matchExpr["needsContext"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
                                token = tokens[i];

                                // Abort if we hit a combinator
                                if ( Expr.relative[ (type = token.type) ] ) {
                                    break;
                                }
                                if ( (find = Expr.find[ type ]) ) {
                                    // Search, expanding context for leading sibling combinators
                                    if ( (seed = find(
                                            token.matches[0].replace( runescape, funescape ),
                                            rsibling.test( tokens[0].type ) && context.parentNode || context
                                        )) ) {

                                        // If seed is empty or no tokens remain, we can return early
                                        tokens.splice( i, 1 );
                                        selector = seed.length && toSelector( tokens );
                                        if ( !selector ) {
                                            push.apply( results, slice.call( seed, 0 ) );
                                            return results;
                                        }

                                        break;
                                    }
                                }
                            }
                        }
                    }

                    // Compile and execute a filtering function
                    // Provide `match` to avoid retokenization if we modified the selector above
                    compile( selector, match )(
                        seed,
                        context,
                        documentIsXML,
                        results,
                        rsibling.test( selector )
                    );
                    return results;
                }

                // Deprecated
                Expr.pseudos["nth"] = Expr.pseudos["eq"];

                // Easy API for creating new setFilters
                function setFilters() {}
                Expr.filters = setFilters.prototype = Expr.pseudos;
                Expr.setFilters = new setFilters();

                // Initialize with the default document
                setDocument();

                // Override sizzle attribute retrieval
                Sizzle.attr = jQuery.attr;
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;


            })( window );
            var runtil = /Until$/,
                rparentsprev = /^(?:parents|prev(?:Until|All))/,
                isSimple = /^.[^:#\[\.,]*$/,
                rneedsContext = jQuery.expr.match.needsContext,
            // methods guaranteed to produce a unique set when starting from a unique set
                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };

            jQuery.fn.extend({
                find: function( selector ) {
                    var i, ret, self;

                    if ( typeof selector !== "string" ) {
                        self = this;
                        return this.pushStack( jQuery( selector ).filter(function() {
                            for ( i = 0; i < self.length; i++ ) {
                                if ( jQuery.contains( self[ i ], this ) ) {
                                    return true;
                                }
                            }
                        }) );
                    }

                    ret = [];
                    for ( i = 0; i < this.length; i++ ) {
                        jQuery.find( selector, this[ i ], ret );
                    }

                    // Needed because $( selector, context ) becomes $( context ).find( selector )
                    ret = this.pushStack( jQuery.unique( ret ) );
                    ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
                    return ret;
                },

                has: function( target ) {
                    var i,
                        targets = jQuery( target, this ),
                        len = targets.length;

                    return this.filter(function() {
                        for ( i = 0; i < len; i++ ) {
                            if ( jQuery.contains( this, targets[i] ) ) {
                                return true;
                            }
                        }
                    });
                },

                not: function( selector ) {
                    return this.pushStack( winnow(this, selector, false) );
                },

                filter: function( selector ) {
                    return this.pushStack( winnow(this, selector, true) );
                },

                is: function( selector ) {
                    return !!selector && (
                            typeof selector === "string" ?
                                // If this is a positional/relative selector, check membership in the returned set
                                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                                rneedsContext.test( selector ) ?
                                jQuery( selector, this.context ).index( this[0] ) >= 0 :
                                jQuery.filter( selector, this ).length > 0 :
                            this.filter( selector ).length > 0 );
                },

                closest: function( selectors, context ) {
                    var cur,
                        i = 0,
                        l = this.length,
                        ret = [],
                        pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
                            jQuery( selectors, context || this.context ) :
                            0;

                    for ( ; i < l; i++ ) {
                        cur = this[i];

                        while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
                            if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
                                ret.push( cur );
                                break;
                            }
                            cur = cur.parentNode;
                        }
                    }

                    return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
                },

                // Determine the position of an element within
                // the matched set of elements
                index: function( elem ) {

                    // No argument, return index in parent
                    if ( !elem ) {
                        return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
                    }

                    // index in selector
                    if ( typeof elem === "string" ) {
                        return jQuery.inArray( this[0], jQuery( elem ) );
                    }

                    // Locate the position of the desired element
                    return jQuery.inArray(
                        // If it receives a jQuery object, the first element is used
                        elem.jquery ? elem[0] : elem, this );
                },

                add: function( selector, context ) {
                    var set = typeof selector === "string" ?
                            jQuery( selector, context ) :
                            jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
                        all = jQuery.merge( this.get(), set );

                    return this.pushStack( jQuery.unique(all) );
                },

                addBack: function( selector ) {
                    return this.add( selector == null ?
                        this.prevObject : this.prevObject.filter(selector)
                    );
                }
            });

            jQuery.fn.andSelf = jQuery.fn.addBack;

            function sibling( cur, dir ) {
                do {
                    cur = cur[ dir ];
                } while ( cur && cur.nodeType !== 1 );

                return cur;
            }

            jQuery.each({
                parent: function( elem ) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function( elem ) {
                    return jQuery.dir( elem, "parentNode" );
                },
                parentsUntil: function( elem, i, until ) {
                    return jQuery.dir( elem, "parentNode", until );
                },
                next: function( elem ) {
                    return sibling( elem, "nextSibling" );
                },
                prev: function( elem ) {
                    return sibling( elem, "previousSibling" );
                },
                nextAll: function( elem ) {
                    return jQuery.dir( elem, "nextSibling" );
                },
                prevAll: function( elem ) {
                    return jQuery.dir( elem, "previousSibling" );
                },
                nextUntil: function( elem, i, until ) {
                    return jQuery.dir( elem, "nextSibling", until );
                },
                prevUntil: function( elem, i, until ) {
                    return jQuery.dir( elem, "previousSibling", until );
                },
                siblings: function( elem ) {
                    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
                },
                children: function( elem ) {
                    return jQuery.sibling( elem.firstChild );
                },
                contents: function( elem ) {
                    return jQuery.nodeName( elem, "iframe" ) ?
                    elem.contentDocument || elem.contentWindow.document :
                        jQuery.merge( [], elem.childNodes );
                }
            }, function( name, fn ) {
                jQuery.fn[ name ] = function( until, selector ) {
                    var ret = jQuery.map( this, fn, until );

                    if ( !runtil.test( name ) ) {
                        selector = until;
                    }

                    if ( selector && typeof selector === "string" ) {
                        ret = jQuery.filter( selector, ret );
                    }

                    ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

                    if ( this.length > 1 && rparentsprev.test( name ) ) {
                        ret = ret.reverse();
                    }

                    return this.pushStack( ret );
                };
            });

            jQuery.extend({
                filter: function( expr, elems, not ) {
                    if ( not ) {
                        expr = ":not(" + expr + ")";
                    }

                    return elems.length === 1 ?
                        jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
                        jQuery.find.matches(expr, elems);
                },

                dir: function( elem, dir, until ) {
                    var matched = [],
                        cur = elem[ dir ];

                    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
                        if ( cur.nodeType === 1 ) {
                            matched.push( cur );
                        }
                        cur = cur[dir];
                    }
                    return matched;
                },

                sibling: function( n, elem ) {
                    var r = [];

                    for ( ; n; n = n.nextSibling ) {
                        if ( n.nodeType === 1 && n !== elem ) {
                            r.push( n );
                        }
                    }

                    return r;
                }
            });

            // Implement the identical functionality for filter and not
            function winnow( elements, qualifier, keep ) {

                // Can't pass null or undefined to indexOf in Firefox 4
                // Set to 0 to skip string check
                qualifier = qualifier || 0;

                if ( jQuery.isFunction( qualifier ) ) {
                    return jQuery.grep(elements, function( elem, i ) {
                        var retVal = !!qualifier.call( elem, i, elem );
                        return retVal === keep;
                    });

                } else if ( qualifier.nodeType ) {
                    return jQuery.grep(elements, function( elem ) {
                        return ( elem === qualifier ) === keep;
                    });

                } else if ( typeof qualifier === "string" ) {
                    var filtered = jQuery.grep(elements, function( elem ) {
                        return elem.nodeType === 1;
                    });

                    if ( isSimple.test( qualifier ) ) {
                        return jQuery.filter(qualifier, filtered, !keep);
                    } else {
                        qualifier = jQuery.filter( qualifier, filtered );
                    }
                }

                return jQuery.grep(elements, function( elem ) {
                    return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
                });
            }
            function createSafeFragment( document ) {
                var list = nodeNames.split( "|" ),
                    safeFrag = document.createDocumentFragment();

                if ( safeFrag.createElement ) {
                    while ( list.length ) {
                        safeFrag.createElement(
                            list.pop()
                        );
                    }
                }
                return safeFrag;
            }

            var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
                    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
                rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
                rleadingWhitespace = /^\s+/,
                rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                rtagName = /<([\w:]+)/,
                rtbody = /<tbody/i,
                rhtml = /<|&#?\w+;/,
                rnoInnerhtml = /<(?:script|style|link)/i,
                manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
            // checked="checked" or checked
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rscriptType = /^$|\/(?:java|ecma)script/i,
                rscriptTypeMasked = /^true\/(.*)/,
                rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

            // We have to close these tags to support XHTML (#13200)
                wrapMap = {
                    option: [ 1, "<select multiple='multiple'>", "</select>" ],
                    legend: [ 1, "<fieldset>", "</fieldset>" ],
                    area: [ 1, "<map>", "</map>" ],
                    param: [ 1, "<object>", "</object>" ],
                    thead: [ 1, "<table>", "</table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

                    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
                    // unless wrapped in a div with non-breaking characters in front of it.
                    _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
                },
                safeFragment = createSafeFragment( document ),
                fragmentDiv = safeFragment.appendChild( document.createElement("div") );

            wrapMap.optgroup = wrapMap.option;
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
            wrapMap.th = wrapMap.td;

            jQuery.fn.extend({
                text: function( value ) {
                    return jQuery.access( this, function( value ) {
                        return value === undefined ?
                            jQuery.text( this ) :
                            this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
                    }, null, value, arguments.length );
                },

                wrapAll: function( html ) {
                    if ( jQuery.isFunction( html ) ) {
                        return this.each(function(i) {
                            jQuery(this).wrapAll( html.call(this, i) );
                        });
                    }

                    if ( this[0] ) {
                        // The elements to wrap the target around
                        var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

                        if ( this[0].parentNode ) {
                            wrap.insertBefore( this[0] );
                        }

                        wrap.map(function() {
                            var elem = this;

                            while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                                elem = elem.firstChild;
                            }

                            return elem;
                        }).append( this );
                    }

                    return this;
                },

                wrapInner: function( html ) {
                    if ( jQuery.isFunction( html ) ) {
                        return this.each(function(i) {
                            jQuery(this).wrapInner( html.call(this, i) );
                        });
                    }

                    return this.each(function() {
                        var self = jQuery( this ),
                            contents = self.contents();

                        if ( contents.length ) {
                            contents.wrapAll( html );

                        } else {
                            self.append( html );
                        }
                    });
                },

                wrap: function( html ) {
                    var isFunction = jQuery.isFunction( html );

                    return this.each(function(i) {
                        jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
                    });
                },

                unwrap: function() {
                    return this.parent().each(function() {
                        if ( !jQuery.nodeName( this, "body" ) ) {
                            jQuery( this ).replaceWith( this.childNodes );
                        }
                    }).end();
                },

                append: function() {
                    return this.domManip(arguments, true, function( elem ) {
                        if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                            this.appendChild( elem );
                        }
                    });
                },

                prepend: function() {
                    return this.domManip(arguments, true, function( elem ) {
                        if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                            this.insertBefore( elem, this.firstChild );
                        }
                    });
                },

                before: function() {
                    return this.domManip( arguments, false, function( elem ) {
                        if ( this.parentNode ) {
                            this.parentNode.insertBefore( elem, this );
                        }
                    });
                },

                after: function() {
                    return this.domManip( arguments, false, function( elem ) {
                        if ( this.parentNode ) {
                            this.parentNode.insertBefore( elem, this.nextSibling );
                        }
                    });
                },

                // keepData is for internal use only--do not document
                remove: function( selector, keepData ) {
                    var elem,
                        i = 0;

                    for ( ; (elem = this[i]) != null; i++ ) {
                        if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
                            if ( !keepData && elem.nodeType === 1 ) {
                                jQuery.cleanData( getAll( elem ) );
                            }

                            if ( elem.parentNode ) {
                                if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
                                    setGlobalEval( getAll( elem, "script" ) );
                                }
                                elem.parentNode.removeChild( elem );
                            }
                        }
                    }

                    return this;
                },

                empty: function() {
                    var elem,
                        i = 0;

                    for ( ; (elem = this[i]) != null; i++ ) {
                        // Remove element nodes and prevent memory leaks
                        if ( elem.nodeType === 1 ) {
                            jQuery.cleanData( getAll( elem, false ) );
                        }

                        // Remove any remaining nodes
                        while ( elem.firstChild ) {
                            elem.removeChild( elem.firstChild );
                        }

                        // If this is a select, ensure that it displays empty (#12336)
                        // Support: IE<9
                        if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
                            elem.options.length = 0;
                        }
                    }

                    return this;
                },

                clone: function( dataAndEvents, deepDataAndEvents ) {
                    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

                    return this.map( function () {
                        return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
                    });
                },

                html: function( value ) {
                    return jQuery.access( this, function( value ) {
                        var elem = this[0] || {},
                            i = 0,
                            l = this.length;

                        if ( value === undefined ) {
                            return elem.nodeType === 1 ?
                                elem.innerHTML.replace( rinlinejQuery, "" ) :
                                undefined;
                        }

                        // See if we can take a shortcut and just use innerHTML
                        if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                            ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
                            ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
                            !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

                            value = value.replace( rxhtmlTag, "<$1></$2>" );

                            try {
                                for (; i < l; i++ ) {
                                    // Remove element nodes and prevent memory leaks
                                    elem = this[i] || {};
                                    if ( elem.nodeType === 1 ) {
                                        jQuery.cleanData( getAll( elem, false ) );
                                        elem.innerHTML = value;
                                    }
                                }

                                elem = 0;

                                // If using innerHTML throws an exception, use the fallback method
                            } catch(e) {}
                        }

                        if ( elem ) {
                            this.empty().append( value );
                        }
                    }, null, value, arguments.length );
                },

                replaceWith: function( value ) {
                    var isFunc = jQuery.isFunction( value );

                    // Make sure that the elements are removed from the DOM before they are inserted
                    // this can help fix replacing a parent with child elements
                    if ( !isFunc && typeof value !== "string" ) {
                        value = jQuery( value ).not( this ).detach();
                    }

                    return this.domManip( [ value ], true, function( elem ) {
                        var next = this.nextSibling,
                            parent = this.parentNode;

                        if ( parent && this.nodeType === 1 || this.nodeType === 11 ) {

                            jQuery( this ).remove();

                            if ( next ) {
                                next.parentNode.insertBefore( elem, next );
                            } else {
                                parent.appendChild( elem );
                            }
                        }
                    });
                },

                detach: function( selector ) {
                    return this.remove( selector, true );
                },

                domManip: function( args, table, callback ) {

                    // Flatten any nested arrays
                    args = core_concat.apply( [], args );

                    var fragment, first, scripts, hasScripts, node, doc,
                        i = 0,
                        l = this.length,
                        set = this,
                        iNoClone = l - 1,
                        value = args[0],
                        isFunction = jQuery.isFunction( value );

                    // We can't cloneNode fragments that contain checked, in WebKit
                    if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
                        return this.each(function( index ) {
                            var self = set.eq( index );
                            if ( isFunction ) {
                                args[0] = value.call( this, index, table ? self.html() : undefined );
                            }
                            self.domManip( args, table, callback );
                        });
                    }

                    if ( l ) {
                        fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
                        first = fragment.firstChild;

                        if ( fragment.childNodes.length === 1 ) {
                            fragment = first;
                        }

                        if ( first ) {
                            table = table && jQuery.nodeName( first, "tr" );
                            scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
                            hasScripts = scripts.length;

                            // Use the original fragment for the last item instead of the first because it can end up
                            // being emptied incorrectly in certain situations (#8070).
                            for ( ; i < l; i++ ) {
                                node = fragment;

                                if ( i !== iNoClone ) {
                                    node = jQuery.clone( node, true, true );

                                    // Keep references to cloned scripts for later restoration
                                    if ( hasScripts ) {
                                        jQuery.merge( scripts, getAll( node, "script" ) );
                                    }
                                }

                                callback.call(
                                    table && jQuery.nodeName( this[i], "table" ) ?
                                        findOrAppend( this[i], "tbody" ) :
                                        this[i],
                                    node,
                                    i
                                );
                            }

                            if ( hasScripts ) {
                                doc = scripts[ scripts.length - 1 ].ownerDocument;

                                // Reenable scripts
                                jQuery.map( scripts, restoreScript );

                                // Evaluate executable scripts on first document insertion
                                for ( i = 0; i < hasScripts; i++ ) {
                                    node = scripts[ i ];
                                    if ( rscriptType.test( node.type || "" ) &&
                                        !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

                                        if ( node.src ) {
                                            // Hope ajax is available...
                                            jQuery.ajax({
                                                url: node.src,
                                                type: "GET",
                                                dataType: "script",
                                                async: false,
                                                global: false,
                                                "throws": true
                                            });
                                        } else {
                                            jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
                                        }
                                    }
                                }
                            }

                            // Fix #11809: Avoid leaking memory
                            fragment = first = null;
                        }
                    }

                    return this;
                }
            });

            function findOrAppend( elem, tag ) {
                return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
            }

            // Replace/restore the type attribute of script elements for safe DOM manipulation
            function disableScript( elem ) {
                var attr = elem.getAttributeNode("type");
                elem.type = ( attr && attr.specified ) + "/" + elem.type;
                return elem;
            }
            function restoreScript( elem ) {
                var match = rscriptTypeMasked.exec( elem.type );
                if ( match ) {
                    elem.type = match[1];
                } else {
                    elem.removeAttribute("type");
                }
                return elem;
            }

            // Mark scripts as having already been evaluated
            function setGlobalEval( elems, refElements ) {
                var elem,
                    i = 0;
                for ( ; (elem = elems[i]) != null; i++ ) {
                    jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
                }
            }

            function cloneCopyEvent( src, dest ) {

                if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
                    return;
                }

                var type, i, l,
                    oldData = jQuery._data( src ),
                    curData = jQuery._data( dest, oldData ),
                    events = oldData.events;

                if ( events ) {
                    delete curData.handle;
                    curData.events = {};

                    for ( type in events ) {
                        for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                            jQuery.event.add( dest, type, events[ type ][ i ] );
                        }
                    }
                }

                // make the cloned public data object a copy from the original
                if ( curData.data ) {
                    curData.data = jQuery.extend( {}, curData.data );
                }
            }

            function fixCloneNodeIssues( src, dest ) {
                var nodeName, data, e;

                // We do not need to do anything for non-Elements
                if ( dest.nodeType !== 1 ) {
                    return;
                }

                nodeName = dest.nodeName.toLowerCase();

                // IE6-8 copies events bound via attachEvent when using cloneNode.
                if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
                    data = jQuery._data( dest );

                    for ( e in data.events ) {
                        jQuery.removeEvent( dest, e, data.handle );
                    }

                    // Event data gets referenced instead of copied if the expando gets copied too
                    dest.removeAttribute( jQuery.expando );
                }

                // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
                if ( nodeName === "script" && dest.text !== src.text ) {
                    disableScript( dest ).text = src.text;
                    restoreScript( dest );

                    // IE6-10 improperly clones children of object elements using classid.
                    // IE10 throws NoModificationAllowedError if parent is null, #12132.
                } else if ( nodeName === "object" ) {
                    if ( dest.parentNode ) {
                        dest.outerHTML = src.outerHTML;
                    }

                    // This path appears unavoidable for IE9. When cloning an object
                    // element in IE9, the outerHTML strategy above is not sufficient.
                    // If the src has innerHTML and the destination does not,
                    // copy the src.innerHTML into the dest.innerHTML. #10324
                    if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
                        dest.innerHTML = src.innerHTML;
                    }

                } else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
                    // IE6-8 fails to persist the checked state of a cloned checkbox
                    // or radio button. Worse, IE6-7 fail to give the cloned element
                    // a checked appearance if the defaultChecked value isn't also set

                    dest.defaultChecked = dest.checked = src.checked;

                    // IE6-7 get confused and end up setting the value of a cloned
                    // checkbox/radio button to an empty string instead of "on"
                    if ( dest.value !== src.value ) {
                        dest.value = src.value;
                    }

                    // IE6-8 fails to return the selected option to the default selected
                    // state when cloning options
                } else if ( nodeName === "option" ) {
                    dest.defaultSelected = dest.selected = src.defaultSelected;

                    // IE6-8 fails to set the defaultValue to the correct value when
                    // cloning other types of input fields
                } else if ( nodeName === "input" || nodeName === "textarea" ) {
                    dest.defaultValue = src.defaultValue;
                }
            }

            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function( name, original ) {
                jQuery.fn[ name ] = function( selector ) {
                    var elems,
                        i = 0,
                        ret = [],
                        insert = jQuery( selector ),
                        last = insert.length - 1;

                    for ( ; i <= last; i++ ) {
                        elems = i === last ? this : this.clone(true);
                        jQuery( insert[i] )[ original ]( elems );

                        // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                        core_push.apply( ret, elems.get() );
                    }

                    return this.pushStack( ret );
                };
            });

            function getAll( context, tag ) {
                var elems, elem,
                    i = 0,
                    found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName( tag || "*" ) :
                        typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll( tag || "*" ) :
                            undefined;

                if ( !found ) {
                    for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
                        if ( !tag || jQuery.nodeName( elem, tag ) ) {
                            found.push( elem );
                        } else {
                            jQuery.merge( found, getAll( elem, tag ) );
                        }
                    }
                }

                return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
                    jQuery.merge( [ context ], found ) :
                    found;
            }

            // Used in buildFragment, fixes the defaultChecked property
            function fixDefaultChecked( elem ) {
                if ( manipulation_rcheckableType.test( elem.type ) ) {
                    elem.defaultChecked = elem.checked;
                }
            }

            jQuery.extend({
                clone: function( elem, dataAndEvents, deepDataAndEvents ) {
                    var destElements, srcElements, node, i, clone,
                        inPage = jQuery.contains( elem.ownerDocument, elem );

                    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
                        clone = elem.cloneNode( true );

                        // IE<=8 does not properly clone detached, unknown element nodes
                    } else {
                        fragmentDiv.innerHTML = elem.outerHTML;
                        fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
                    }

                    if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
                        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

                        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                        destElements = getAll( clone );
                        srcElements = getAll( elem );

                        // Fix all IE cloning issues
                        for ( i = 0; (node = srcElements[i]) != null; ++i ) {
                            // Ensure that the destination node is not null; Fixes #9587
                            if ( destElements[i] ) {
                                fixCloneNodeIssues( node, destElements[i] );
                            }
                        }
                    }

                    // Copy the events from the original to the clone
                    if ( dataAndEvents ) {
                        if ( deepDataAndEvents ) {
                            srcElements = srcElements || getAll( elem );
                            destElements = destElements || getAll( clone );

                            for ( i = 0; (node = srcElements[i]) != null; i++ ) {
                                cloneCopyEvent( node, destElements[i] );
                            }
                        } else {
                            cloneCopyEvent( elem, clone );
                        }
                    }

                    // Preserve script evaluation history
                    destElements = getAll( clone, "script" );
                    if ( destElements.length > 0 ) {
                        setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
                    }

                    destElements = srcElements = node = null;

                    // Return the cloned set
                    return clone;
                },

                buildFragment: function( elems, context, scripts, selection ) {
                    var contains, elem, tag, tmp, wrap, tbody, j,
                        l = elems.length,

                    // Ensure a safe fragment
                        safe = createSafeFragment( context ),

                        nodes = [],
                        i = 0;

                    for ( ; i < l; i++ ) {
                        elem = elems[ i ];

                        if ( elem || elem === 0 ) {

                            // Add nodes directly
                            if ( jQuery.type( elem ) === "object" ) {
                                jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

                                // Convert non-html into a text node
                            } else if ( !rhtml.test( elem ) ) {
                                nodes.push( context.createTextNode( elem ) );

                                // Convert html into DOM nodes
                            } else {
                                tmp = tmp || safe.appendChild( context.createElement("div") );

                                // Deserialize a standard representation
                                tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
                                wrap = wrapMap[ tag ] || wrapMap._default;

                                tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

                                // Descend through wrappers to the right content
                                j = wrap[0];
                                while ( j-- ) {
                                    tmp = tmp.lastChild;
                                }

                                // Manually add leading whitespace removed by IE
                                if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
                                    nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
                                }

                                // Remove IE's autoinserted <tbody> from table fragments
                                if ( !jQuery.support.tbody ) {

                                    // String was a <table>, *may* have spurious <tbody>
                                    elem = tag === "table" && !rtbody.test( elem ) ?
                                        tmp.firstChild :

                                        // String was a bare <thead> or <tfoot>
                                        wrap[1] === "<table>" && !rtbody.test( elem ) ?
                                            tmp :
                                            0;

                                    j = elem && elem.childNodes.length;
                                    while ( j-- ) {
                                        if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
                                            elem.removeChild( tbody );
                                        }
                                    }
                                }

                                jQuery.merge( nodes, tmp.childNodes );

                                // Fix #12392 for WebKit and IE > 9
                                tmp.textContent = "";

                                // Fix #12392 for oldIE
                                while ( tmp.firstChild ) {
                                    tmp.removeChild( tmp.firstChild );
                                }

                                // Remember the top-level container for proper cleanup
                                tmp = safe.lastChild;
                            }
                        }
                    }

                    // Fix #11356: Clear elements from fragment
                    if ( tmp ) {
                        safe.removeChild( tmp );
                    }

                    // Reset defaultChecked for any radios and checkboxes
                    // about to be appended to the DOM in IE 6/7 (#8060)
                    if ( !jQuery.support.appendChecked ) {
                        jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
                    }

                    i = 0;
                    while ( (elem = nodes[ i++ ]) ) {

                        // #4087 - If origin and destination elements are the same, and this is
                        // that element, do not do anything
                        if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
                            continue;
                        }

                        contains = jQuery.contains( elem.ownerDocument, elem );

                        // Append to fragment
                        tmp = getAll( safe.appendChild( elem ), "script" );

                        // Preserve script evaluation history
                        if ( contains ) {
                            setGlobalEval( tmp );
                        }

                        // Capture executables
                        if ( scripts ) {
                            j = 0;
                            while ( (elem = tmp[ j++ ]) ) {
                                if ( rscriptType.test( elem.type || "" ) ) {
                                    scripts.push( elem );
                                }
                            }
                        }
                    }

                    tmp = null;

                    return safe;
                },

                cleanData: function( elems, /* internal */ acceptData ) {
                    var data, id, elem, type,
                        i = 0,
                        internalKey = jQuery.expando,
                        cache = jQuery.cache,
                        deleteExpando = jQuery.support.deleteExpando,
                        special = jQuery.event.special;

                    for ( ; (elem = elems[i]) != null; i++ ) {

                        if ( acceptData || jQuery.acceptData( elem ) ) {

                            id = elem[ internalKey ];
                            data = id && cache[ id ];

                            if ( data ) {
                                if ( data.events ) {
                                    for ( type in data.events ) {
                                        if ( special[ type ] ) {
                                            jQuery.event.remove( elem, type );

                                            // This is a shortcut to avoid jQuery.event.remove's overhead
                                        } else {
                                            jQuery.removeEvent( elem, type, data.handle );
                                        }
                                    }
                                }

                                // Remove cache only if it was not already removed by jQuery.event.remove
                                if ( cache[ id ] ) {

                                    delete cache[ id ];

                                    // IE does not allow us to delete expando properties from nodes,
                                    // nor does it have a removeAttribute function on Document nodes;
                                    // we must handle all of these cases
                                    if ( deleteExpando ) {
                                        delete elem[ internalKey ];

                                    } else if ( typeof elem.removeAttribute !== "undefined" ) {
                                        elem.removeAttribute( internalKey );

                                    } else {
                                        elem[ internalKey ] = null;
                                    }

                                    core_deletedIds.push( id );
                                }
                            }
                        }
                    }
                }
            });
            var curCSS, getStyles, iframe,
                ralpha = /alpha\([^)]*\)/i,
                ropacity = /opacity\s*=\s*([^)]*)/,
                rposition = /^(top|right|bottom|left)$/,
            // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
            // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
                rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                rmargin = /^margin/,
                rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
                rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
                rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
                elemdisplay = { BODY: "block" },

                cssShow = { position: "absolute", visibility: "hidden", display: "block" },
                cssNormalTransform = {
                    letterSpacing: 0,
                    fontWeight: 400
                },

                cssExpand = [ "Top", "Right", "Bottom", "Left" ],
                cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

            // return a css property mapped to a potentially vendor prefixed property
            function vendorPropName( style, name ) {

                // shortcut for names that are not vendor prefixed
                if ( name in style ) {
                    return name;
                }

                // check for vendor prefixed names
                var capName = name.charAt(0).toUpperCase() + name.slice(1),
                    origName = name,
                    i = cssPrefixes.length;

                while ( i-- ) {
                    name = cssPrefixes[ i ] + capName;
                    if ( name in style ) {
                        return name;
                    }
                }

                return origName;
            }

            function isHidden( elem, el ) {
                // isHidden might be called from jQuery#filter function;
                // in that case, element will be second argument
                elem = el || elem;
                return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
            }

            function showHide( elements, show ) {
                var elem,
                    values = [],
                    index = 0,
                    length = elements.length;

                for ( ; index < length; index++ ) {
                    elem = elements[ index ];
                    if ( !elem.style ) {
                        continue;
                    }
                    values[ index ] = jQuery._data( elem, "olddisplay" );
                    if ( show ) {
                        // Reset the inline display of this element to learn if it is
                        // being hidden by cascaded rules or not
                        if ( !values[ index ] && elem.style.display === "none" ) {
                            elem.style.display = "";
                        }

                        // Set elements which have been overridden with display: none
                        // in a stylesheet to whatever the default browser style is
                        // for such an element
                        if ( elem.style.display === "" && isHidden( elem ) ) {
                            values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
                        }
                    } else if ( !values[ index ] && !isHidden( elem ) ) {
                        jQuery._data( elem, "olddisplay", jQuery.css( elem, "display" ) );
                    }
                }

                // Set the display of most of the elements in a second loop
                // to avoid the constant reflow
                for ( index = 0; index < length; index++ ) {
                    elem = elements[ index ];
                    if ( !elem.style ) {
                        continue;
                    }
                    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
                        elem.style.display = show ? values[ index ] || "" : "none";
                    }
                }

                return elements;
            }

            jQuery.fn.extend({
                css: function( name, value ) {
                    return jQuery.access( this, function( elem, name, value ) {
                        var styles, len,
                            map = {},
                            i = 0;

                        if ( jQuery.isArray( name ) ) {
                            styles = getStyles( elem );
                            len = name.length;

                            for ( ; i < len; i++ ) {
                                map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                            }

                            return map;
                        }

                        return value !== undefined ?
                            jQuery.style( elem, name, value ) :
                            jQuery.css( elem, name );
                    }, name, value, arguments.length > 1 );
                },
                show: function() {
                    return showHide( this, true );
                },
                hide: function() {
                    return showHide( this );
                },
                toggle: function( state ) {
                    var bool = typeof state === "boolean";

                    return this.each(function() {
                        if ( bool ? state : isHidden( this ) ) {
                            jQuery( this ).show();
                        } else {
                            jQuery( this ).hide();
                        }
                    });
                }
            });

            jQuery.extend({
                // Add in style property hooks for overriding the default
                // behavior of getting and setting a style property
                cssHooks: {
                    opacity: {
                        get: function( elem, computed ) {
                            if ( computed ) {
                                // We should always get a number back from opacity
                                var ret = curCSS( elem, "opacity" );
                                return ret === "" ? "1" : ret;
                            }
                        }
                    }
                },

                // Exclude the following css properties to add px
                cssNumber: {
                    "columnCount": true,
                    "fillOpacity": true,
                    "fontWeight": true,
                    "lineHeight": true,
                    "opacity": true,
                    "orphans": true,
                    "widows": true,
                    "zIndex": true,
                    "zoom": true
                },

                // Add in properties whose names you wish to fix before
                // setting or getting the value
                cssProps: {
                    // normalize float css property
                    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
                },

                // Get and set the style property on a DOM Node
                style: function( elem, name, value, extra ) {
                    // Don't set styles on text and comment nodes
                    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                        return;
                    }

                    // Make sure that we're working with the right name
                    var ret, type, hooks,
                        origName = jQuery.camelCase( name ),
                        style = elem.style;

                    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

                    // gets hook for the prefixed version
                    // followed by the unprefixed version
                    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

                    // Check if we're setting a value
                    if ( value !== undefined ) {
                        type = typeof value;

                        // convert relative number strings (+= or -=) to relative numbers. #7345
                        if ( type === "string" && (ret = rrelNum.exec( value )) ) {
                            value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
                            // Fixes bug #9237
                            type = "number";
                        }

                        // Make sure that NaN and null values aren't set. See: #7116
                        if ( value == null || type === "number" && isNaN( value ) ) {
                            return;
                        }

                        // If a number was passed in, add 'px' to the (except for certain CSS properties)
                        if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
                            value += "px";
                        }

                        // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                        // but it would mean to define eight (for every problematic property) identical functions
                        if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
                            style[ name ] = "inherit";
                        }

                        // If a hook was provided, use that value, otherwise just set the specified value
                        if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

                            // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                            // Fixes bug #5509
                            try {
                                style[ name ] = value;
                            } catch(e) {}
                        }

                    } else {
                        // If a hook was provided get the non-computed value from there
                        if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
                            return ret;
                        }

                        // Otherwise just get the value from the style object
                        return style[ name ];
                    }
                },

                css: function( elem, name, extra, styles ) {
                    var val, num, hooks,
                        origName = jQuery.camelCase( name );

                    // Make sure that we're working with the right name
                    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

                    // gets hook for the prefixed version
                    // followed by the unprefixed version
                    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

                    // If a hook was provided get the computed value from there
                    if ( hooks && "get" in hooks ) {
                        val = hooks.get( elem, true, extra );
                    }

                    // Otherwise, if a way to get the computed value exists, use that
                    if ( val === undefined ) {
                        val = curCSS( elem, name, styles );
                    }

                    //convert "normal" to computed value
                    if ( val === "normal" && name in cssNormalTransform ) {
                        val = cssNormalTransform[ name ];
                    }

                    // Return, converting to number if forced or a qualifier was provided and val looks numeric
                    if ( extra ) {
                        num = parseFloat( val );
                        return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
                    }
                    return val;
                },

                // A method for quickly swapping in/out CSS properties to get correct calculations
                swap: function( elem, options, callback, args ) {
                    var ret, name,
                        old = {};

                    // Remember the old values, and insert the new ones
                    for ( name in options ) {
                        old[ name ] = elem.style[ name ];
                        elem.style[ name ] = options[ name ];
                    }

                    ret = callback.apply( elem, args || [] );

                    // Revert the old values
                    for ( name in options ) {
                        elem.style[ name ] = old[ name ];
                    }

                    return ret;
                }
            });

            // NOTE: we've included the "window" in window.getComputedStyle
            // because jsdom on node.js will break without it.
            if ( window.getComputedStyle ) {
                getStyles = function( elem ) {
                    return window.getComputedStyle( elem, null );
                };

                curCSS = function( elem, name, _computed ) {
                    var width, minWidth, maxWidth,
                        computed = _computed || getStyles( elem ),

                    // getPropertyValue is only needed for .css('filter') in IE9, see #12537
                        ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
                        style = elem.style;

                    if ( computed ) {

                        if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
                            ret = jQuery.style( elem, name );
                        }

                        // A tribute to the "awesome hack by Dean Edwards"
                        // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                        // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                        // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                        if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

                            // Remember the original values
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;

                            // Put in the new values to get a computed value out
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;

                            // Revert the changed values
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }

                    return ret;
                };
            } else if ( document.documentElement.currentStyle ) {
                getStyles = function( elem ) {
                    return elem.currentStyle;
                };

                curCSS = function( elem, name, _computed ) {
                    var left, rs, rsLeft,
                        computed = _computed || getStyles( elem ),
                        ret = computed ? computed[ name ] : undefined,
                        style = elem.style;

                    // Avoid setting ret to empty string here
                    // so we don't default to auto
                    if ( ret == null && style && style[ name ] ) {
                        ret = style[ name ];
                    }

                    // From the awesome hack by Dean Edwards
                    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

                    // If we're not dealing with a regular pixel number
                    // but a number that has a weird ending, we need to convert it to pixels
                    // but not position css attributes, as those are proportional to the parent element instead
                    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
                    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

                        // Remember the original values
                        left = style.left;
                        rs = elem.runtimeStyle;
                        rsLeft = rs && rs.left;

                        // Put in the new values to get a computed value out
                        if ( rsLeft ) {
                            rs.left = elem.currentStyle.left;
                        }
                        style.left = name === "fontSize" ? "1em" : ret;
                        ret = style.pixelLeft + "px";

                        // Revert the changed values
                        style.left = left;
                        if ( rsLeft ) {
                            rs.left = rsLeft;
                        }
                    }

                    return ret === "" ? "auto" : ret;
                };
            }

            function setPositiveNumber( elem, value, subtract ) {
                var matches = rnumsplit.exec( value );
                return matches ?
                    // Guard against undefined "subtract", e.g., when used as in cssHooks
                Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
                    value;
            }

            function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
                var i = extra === ( isBorderBox ? "border" : "content" ) ?
                        // If we already have the right measurement, avoid augmentation
                        4 :
                        // Otherwise initialize for horizontal or vertical properties
                        name === "width" ? 1 : 0,

                    val = 0;

                for ( ; i < 4; i += 2 ) {
                    // both box models exclude margin, so add it if we want it
                    if ( extra === "margin" ) {
                        val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
                    }

                    if ( isBorderBox ) {
                        // border-box includes padding, so remove it if we want content
                        if ( extra === "content" ) {
                            val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                        }

                        // at this point, extra isn't border nor margin, so remove border
                        if ( extra !== "margin" ) {
                            val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                        }
                    } else {
                        // at this point, extra isn't content, so add padding
                        val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

                        // at this point, extra isn't content nor padding, so add border
                        if ( extra !== "padding" ) {
                            val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                        }
                    }
                }

                return val;
            }

            function getWidthOrHeight( elem, name, extra ) {

                // Start with offset property, which is equivalent to the border-box value
                var valueIsBorderBox = true,
                    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                    styles = getStyles( elem ),
                    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

                // some non-html elements return undefined for offsetWidth, so check for null/undefined
                // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
                // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
                if ( val <= 0 || val == null ) {
                    // Fall back to computed then uncomputed css if necessary
                    val = curCSS( elem, name, styles );
                    if ( val < 0 || val == null ) {
                        val = elem.style[ name ];
                    }

                    // Computed unit is not pixels. Stop here and return.
                    if ( rnumnonpx.test(val) ) {
                        return val;
                    }

                    // we need the check for style in case a browser which returns unreliable values
                    // for getComputedStyle silently falls back to the reliable elem.style
                    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

                    // Normalize "", auto, and prepare for extra
                    val = parseFloat( val ) || 0;
                }

                // use the active box-sizing model to add/subtract irrelevant styles
                return ( val +
                        augmentWidthOrHeight(
                            elem,
                            name,
                            extra || ( isBorderBox ? "border" : "content" ),
                            valueIsBorderBox,
                            styles
                        )
                    ) + "px";
            }

            // Try to determine the default display value of an element
            function css_defaultDisplay( nodeName ) {
                var doc = document,
                    display = elemdisplay[ nodeName ];

                if ( !display ) {
                    display = actualDisplay( nodeName, doc );

                    // If the simple way fails, read from inside an iframe
                    if ( display === "none" || !display ) {
                        // Use the already-created iframe if possible
                        iframe = ( iframe ||
                            jQuery("<iframe frameborder='0' width='0' height='0'/>")
                                .css( "cssText", "display:block !important" )
                        ).appendTo( doc.documentElement );

                        // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                        doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
                        doc.write("<!doctype html><html><body>");
                        doc.close();

                        display = actualDisplay( nodeName, doc );
                        iframe.detach();
                    }

                    // Store the correct default display
                    elemdisplay[ nodeName ] = display;
                }

                return display;
            }

            // Called ONLY from within css_defaultDisplay
            function actualDisplay( name, doc ) {
                var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
                    display = jQuery.css( elem[0], "display" );
                elem.remove();
                return display;
            }

            jQuery.each([ "height", "width" ], function( i, name ) {
                jQuery.cssHooks[ name ] = {
                    get: function( elem, computed, extra ) {
                        if ( computed ) {
                            // certain elements can have dimension info if we invisibly show them
                            // however, it must have a current display style that would benefit from this
                            return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
                                jQuery.swap( elem, cssShow, function() {
                                    return getWidthOrHeight( elem, name, extra );
                                }) :
                                getWidthOrHeight( elem, name, extra );
                        }
                    },

                    set: function( elem, value, extra ) {
                        var styles = extra && getStyles( elem );
                        return setPositiveNumber( elem, value, extra ?
                            augmentWidthOrHeight(
                                elem,
                                name,
                                extra,
                                jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                                styles
                            ) : 0
                        );
                    }
                };
            });

            if ( !jQuery.support.opacity ) {
                jQuery.cssHooks.opacity = {
                    get: function( elem, computed ) {
                        // IE uses filters for opacity
                        return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
                        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
                            computed ? "1" : "";
                    },

                    set: function( elem, value ) {
                        var style = elem.style,
                            currentStyle = elem.currentStyle,
                            opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
                            filter = currentStyle && currentStyle.filter || style.filter || "";

                        // IE has trouble with opacity if it does not have layout
                        // Force it by setting the zoom level
                        style.zoom = 1;

                        // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                        // if value === "", then remove inline opacity #12685
                        if ( ( value >= 1 || value === "" ) &&
                            jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
                            style.removeAttribute ) {

                            // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                            // if "filter:" is present at all, clearType is disabled, we want to avoid this
                            // style.removeAttribute is IE Only, but so apparently is this code path...
                            style.removeAttribute( "filter" );

                            // if there is no filter style applied in a css rule or unset inline opacity, we are done
                            if ( value === "" || currentStyle && !currentStyle.filter ) {
                                return;
                            }
                        }

                        // otherwise, set new filter values
                        style.filter = ralpha.test( filter ) ?
                            filter.replace( ralpha, opacity ) :
                        filter + " " + opacity;
                    }
                };
            }

            // These hooks cannot be added until DOM ready because the support test
            // for it is not run until after DOM ready
            jQuery(function() {
                if ( !jQuery.support.reliableMarginRight ) {
                    jQuery.cssHooks.marginRight = {
                        get: function( elem, computed ) {
                            if ( computed ) {
                                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                                // Work around by temporarily setting element display to inline-block
                                return jQuery.swap( elem, { "display": "inline-block" },
                                    curCSS, [ elem, "marginRight" ] );
                            }
                        }
                    };
                }

                // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
                // getComputedStyle returns percent when specified for top/left/bottom/right
                // rather than make the css module depend on the offset module, we just check for it here
                if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
                    jQuery.each( [ "top", "left" ], function( i, prop ) {
                        jQuery.cssHooks[ prop ] = {
                            get: function( elem, computed ) {
                                if ( computed ) {
                                    computed = curCSS( elem, prop );
                                    // if curCSS returns percentage, fallback to offset
                                    return rnumnonpx.test( computed ) ?
                                    jQuery( elem ).position()[ prop ] + "px" :
                                        computed;
                                }
                            }
                        };
                    });
                }

            });

            if ( jQuery.expr && jQuery.expr.filters ) {
                jQuery.expr.filters.hidden = function( elem ) {
                    return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
                };

                jQuery.expr.filters.visible = function( elem ) {
                    return !jQuery.expr.filters.hidden( elem );
                };
            }

            // These hooks are used by animate to expand properties
            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function( prefix, suffix ) {
                jQuery.cssHooks[ prefix + suffix ] = {
                    expand: function( value ) {
                        var i = 0,
                            expanded = {},

                        // assumes a single number if not a string
                            parts = typeof value === "string" ? value.split(" ") : [ value ];

                        for ( ; i < 4; i++ ) {
                            expanded[ prefix + cssExpand[ i ] + suffix ] =
                                parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                        }

                        return expanded;
                    }
                };

                if ( !rmargin.test( prefix ) ) {
                    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
                }
            });
            var r20 = /%20/g,
                rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rsubmitterTypes = /^(?:submit|button|image|reset)$/i,
                rsubmittable = /^(?:input|select|textarea|keygen)/i;

            jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param( this.serializeArray() );
                },
                serializeArray: function() {
                    return this.map(function(){
                            // Can add propHook for "elements" to filter or add form elements
                            var elements = jQuery.prop( this, "elements" );
                            return elements ? jQuery.makeArray( elements ) : this;
                        })
                        .filter(function(){
                            var type = this.type;
                            // Use .is(":disabled") so that fieldset[disabled] works
                            return this.name && !jQuery( this ).is( ":disabled" ) &&
                                rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                                ( this.checked || !manipulation_rcheckableType.test( type ) );
                        })
                        .map(function( i, elem ){
                            var val = jQuery( this ).val();

                            return val == null ?
                                null :
                                jQuery.isArray( val ) ?
                                    jQuery.map( val, function( val ){
                                        return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                                    }) :
                                { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                        }).get();
                }
            });

            //Serialize an array of form elements or a set of
            //key/values into a query string
            jQuery.param = function( a, traditional ) {
                var prefix,
                    s = [],
                    add = function( key, value ) {
                        // If value is a function, invoke it and return its value
                        value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
                        s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
                    };

                // Set traditional to true for jQuery <= 1.3.2 behavior.
                if ( traditional === undefined ) {
                    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
                }

                // If an array was passed in, assume that it is an array of form elements.
                if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
                    // Serialize the form elements
                    jQuery.each( a, function() {
                        add( this.name, this.value );
                    });

                } else {
                    // If traditional, encode the "old" way (the way 1.3.2 or older
                    // did it), otherwise encode params recursively.
                    for ( prefix in a ) {
                        buildParams( prefix, a[ prefix ], traditional, add );
                    }
                }

                // Return the resulting serialization
                return s.join( "&" ).replace( r20, "+" );
            };

            function buildParams( prefix, obj, traditional, add ) {
                var name;

                if ( jQuery.isArray( obj ) ) {
                    // Serialize array item.
                    jQuery.each( obj, function( i, v ) {
                        if ( traditional || rbracket.test( prefix ) ) {
                            // Treat each array item as a scalar.
                            add( prefix, v );

                        } else {
                            // Item is non-scalar (array or object), encode its numeric index.
                            buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
                        }
                    });

                } else if ( !traditional && jQuery.type( obj ) === "object" ) {
                    // Serialize object item.
                    for ( name in obj ) {
                        buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
                    }

                } else {
                    // Serialize scalar item.
                    add( prefix, obj );
                }
            }
            var
            // Document location
                ajaxLocParts,
                ajaxLocation,

                ajax_nonce = jQuery.now(),

                ajax_rquery = /\?/,
                rhash = /#.*$/,
                rts = /([?&])_=[^&]*/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
            // #7653, #8125, #8152: local protocol detection
                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,
                rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

            // Keep a copy of the old load method
                _load = jQuery.fn.load,

            /* Prefilters
             * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
             * 2) These are called:
             *    - BEFORE asking for a transport
             *    - AFTER param serialization (s.data is a string if s.processData is true)
             * 3) key is the dataType
             * 4) the catchall symbol "*" can be used
             * 5) execution will start with transport dataType and THEN continue down to "*" if needed
             */
                prefilters = {},

            /* Transports bindings
             * 1) key is the dataType
             * 2) the catchall symbol "*" can be used
             * 3) selection will start with transport dataType and THEN go to "*" if needed
             */
                transports = {},

            // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
                allTypes = "*/".concat("*");

            // #8138, IE may throw an exception when accessing
            // a field from window.location if document.domain has been set
            try {
                ajaxLocation = location.href;
            } catch( e ) {
                // Use the href attribute of an A element
                // since IE will modify it given document.location
                ajaxLocation = document.createElement( "a" );
                ajaxLocation.href = "";
                ajaxLocation = ajaxLocation.href;
            }

            // Segment location into parts
            ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

            // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
            function addToPrefiltersOrTransports( structure ) {

                // dataTypeExpression is optional and defaults to "*"
                return function( dataTypeExpression, func ) {

                    if ( typeof dataTypeExpression !== "string" ) {
                        func = dataTypeExpression;
                        dataTypeExpression = "*";
                    }

                    var dataType,
                        i = 0,
                        dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

                    if ( jQuery.isFunction( func ) ) {
                        // For each dataType in the dataTypeExpression
                        while ( (dataType = dataTypes[i++]) ) {
                            // Prepend if requested
                            if ( dataType[0] === "+" ) {
                                dataType = dataType.slice( 1 ) || "*";
                                (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

                                // Otherwise append
                            } else {
                                (structure[ dataType ] = structure[ dataType ] || []).push( func );
                            }
                        }
                    }
                };
            }

            // Base inspection function for prefilters and transports
            function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

                var inspected = {},
                    seekingTransport = ( structure === transports );

                function inspect( dataType ) {
                    var selected;
                    inspected[ dataType ] = true;
                    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
                        var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                        if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
                            options.dataTypes.unshift( dataTypeOrTransport );
                            inspect( dataTypeOrTransport );
                            return false;
                        } else if ( seekingTransport ) {
                            return !( selected = dataTypeOrTransport );
                        }
                    });
                    return selected;
                }

                return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
            }

            // A special extend for ajax options
            // that takes "flat" options (not to be deep extended)
            // Fixes #9887
            function ajaxExtend( target, src ) {
                var key, deep,
                    flatOptions = jQuery.ajaxSettings.flatOptions || {};

                for ( key in src ) {
                    if ( src[ key ] !== undefined ) {
                        ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
                    }
                }
                if ( deep ) {
                    jQuery.extend( true, target, deep );
                }

                return target;
            }

            jQuery.fn.load = function( url, params, callback ) {
                if ( typeof url !== "string" && _load ) {
                    return _load.apply( this, arguments );
                }

                var selector, type, response,
                    self = this,
                    off = url.indexOf(" ");

                if ( off >= 0 ) {
                    selector = url.slice( off, url.length );
                    url = url.slice( 0, off );
                }

                // If it's a function
                if ( jQuery.isFunction( params ) ) {

                    // We assume that it's the callback
                    callback = params;
                    params = undefined;

                    // Otherwise, build a param string
                } else if ( params && typeof params === "object" ) {
                    type = "POST";
                }

                // If we have elements to modify, make the request
                if ( self.length > 0 ) {
                    jQuery.ajax({
                        url: url,

                        // if "type" variable is undefined, then "GET" method will be used
                        type: type,
                        dataType: "html",
                        data: params
                    }).done(function( responseText ) {

                        // Save response for use in complete callback
                        response = arguments;

                        self.html( selector ?

                            // If a selector was specified, locate the right elements in a dummy div
                            // Exclude scripts to avoid IE 'Permission Denied' errors
                            jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

                            // Otherwise use the full result
                            responseText );

                    }).complete( callback && function( jqXHR, status ) {
                            self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
                        });
                }

                return this;
            };

            // Attach a bunch of functions for handling common AJAX events
            jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
                jQuery.fn[ type ] = function( fn ){
                    return this.on( type, fn );
                };
            });

            jQuery.each( [ "get", "post" ], function( i, method ) {
                jQuery[ method ] = function( url, data, callback, type ) {
                    // shift arguments if data argument was omitted
                    if ( jQuery.isFunction( data ) ) {
                        type = type || callback;
                        callback = data;
                        data = undefined;
                    }

                    return jQuery.ajax({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    });
                };
            });

            jQuery.extend({

                // Counter for holding the number of active queries
                active: 0,

                // Last-Modified header cache for next request
                lastModified: {},
                etag: {},

                ajaxSettings: {
                    url: ajaxLocation,
                    type: "GET",
                    isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    /*
                     timeout: 0,
                     data: null,
                     dataType: null,
                     username: null,
                     password: null,
                     cache: null,
                     throws: false,
                     traditional: false,
                     headers: {},
                     */

                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },

                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },

                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },

                    // Data converters
                    // Keys separate source (or catchall "*") and destination types with a single space
                    converters: {

                        // Convert anything to text
                        "* text": window.String,

                        // Text to html (true = no transformation)
                        "text html": true,

                        // Evaluate text as a json expression
                        "text json": jQuery.parseJSON,

                        // Parse text as xml
                        "text xml": jQuery.parseXML
                    },

                    // For options that shouldn't be deep extended:
                    // you can add your own custom options here if
                    // and when you create one that shouldn't be
                    // deep extended (see ajaxExtend)
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },

                // Creates a full fledged settings object into target
                // with both ajaxSettings and settings fields.
                // If target is omitted, writes into ajaxSettings.
                ajaxSetup: function( target, settings ) {
                    return settings ?

                        // Building a settings object
                        ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

                        // Extending ajaxSettings
                        ajaxExtend( jQuery.ajaxSettings, target );
                },

                ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
                ajaxTransport: addToPrefiltersOrTransports( transports ),

                // Main method
                ajax: function( url, options ) {

                    // If url is an object, simulate pre-1.5 signature
                    if ( typeof url === "object" ) {
                        options = url;
                        url = undefined;
                    }

                    // Force options to be an object
                    options = options || {};

                    var transport,
                    // URL without anti-cache param
                        cacheURL,
                    // Response headers
                        responseHeadersString,
                        responseHeaders,
                    // timeout handle
                        timeoutTimer,
                    // Cross-domain detection vars
                        parts,
                    // To know if global events are to be dispatched
                        fireGlobals,
                    // Loop variable
                        i,
                    // Create the final options object
                        s = jQuery.ajaxSetup( {}, options ),
                    // Callbacks context
                        callbackContext = s.context || s,
                    // Context for global events is callbackContext if it is a DOM node or jQuery collection
                        globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
                            jQuery( callbackContext ) :
                            jQuery.event,
                    // Deferreds
                        deferred = jQuery.Deferred(),
                        completeDeferred = jQuery.Callbacks("once memory"),
                    // Status-dependent callbacks
                        statusCode = s.statusCode || {},
                    // Headers (they are sent all at once)
                        requestHeaders = {},
                        requestHeadersNames = {},
                    // The jqXHR state
                        state = 0,
                    // Default abort message
                        strAbort = "canceled",
                    // Fake xhr
                        jqXHR = {
                            readyState: 0,

                            // Builds headers hashtable if needed
                            getResponseHeader: function( key ) {
                                var match;
                                if ( state === 2 ) {
                                    if ( !responseHeaders ) {
                                        responseHeaders = {};
                                        while ( (match = rheaders.exec( responseHeadersString )) ) {
                                            responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
                                        }
                                    }
                                    match = responseHeaders[ key.toLowerCase() ];
                                }
                                return match == null ? null : match;
                            },

                            // Raw string
                            getAllResponseHeaders: function() {
                                return state === 2 ? responseHeadersString : null;
                            },

                            // Caches the header
                            setRequestHeader: function( name, value ) {
                                var lname = name.toLowerCase();
                                if ( !state ) {
                                    name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                                    requestHeaders[ name ] = value;
                                }
                                return this;
                            },

                            // Overrides response content-type header
                            overrideMimeType: function( type ) {
                                if ( !state ) {
                                    s.mimeType = type;
                                }
                                return this;
                            },

                            // Status-dependent callbacks
                            statusCode: function( map ) {
                                var code;
                                if ( map ) {
                                    if ( state < 2 ) {
                                        for ( code in map ) {
                                            // Lazy-add the new callback in a way that preserves old ones
                                            statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                        }
                                    } else {
                                        // Execute the appropriate callbacks
                                        jqXHR.always( map[ jqXHR.status ] );
                                    }
                                }
                                return this;
                            },

                            // Cancel the request
                            abort: function( statusText ) {
                                var finalText = statusText || strAbort;
                                if ( transport ) {
                                    transport.abort( finalText );
                                }
                                done( 0, finalText );
                                return this;
                            }
                        };

                    // Attach deferreds
                    deferred.promise( jqXHR ).complete = completeDeferred.add;
                    jqXHR.success = jqXHR.done;
                    jqXHR.error = jqXHR.fail;

                    // Remove hash character (#7531: and string promotion)
                    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
                    // Handle falsy url in the settings object (#10093: consistency with old signature)
                    // We also use the url parameter if available
                    s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

                    // Alias method option to type as per ticket #12004
                    s.type = options.method || options.type || s.method || s.type;

                    // Extract dataTypes list
                    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

                    // A cross-domain request is in order when we have a protocol:host:port mismatch
                    if ( s.crossDomain == null ) {
                        parts = rurl.exec( s.url.toLowerCase() );
                        s.crossDomain = !!( parts &&
                            ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
                            ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
                            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
                        );
                    }

                    // Convert data if not already a string
                    if ( s.data && s.processData && typeof s.data !== "string" ) {
                        s.data = jQuery.param( s.data, s.traditional );
                    }

                    // Apply prefilters
                    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

                    // If request was aborted inside a prefilter, stop there
                    if ( state === 2 ) {
                        return jqXHR;
                    }

                    // We can fire global events as of now if asked to
                    fireGlobals = s.global;

                    // Watch for a new set of requests
                    if ( fireGlobals && jQuery.active++ === 0 ) {
                        jQuery.event.trigger("ajaxStart");
                    }

                    // Uppercase the type
                    s.type = s.type.toUpperCase();

                    // Determine if request has content
                    s.hasContent = !rnoContent.test( s.type );

                    // Save the URL in case we're toying with the If-Modified-Since
                    // and/or If-None-Match header later on
                    cacheURL = s.url;

                    // More options handling for requests with no content
                    if ( !s.hasContent ) {

                        // If data is available, append data to url
                        if ( s.data ) {
                            cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
                            // #9682: remove data so that it's not used in an eventual retry
                            delete s.data;
                        }

                        // Add anti-cache in url if needed
                        if ( s.cache === false ) {
                            s.url = rts.test( cacheURL ) ?

                                // If there is already a '_' parameter, set its value
                                cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

                                // Otherwise add one to the end
                            cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
                        }
                    }

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {
                        if ( jQuery.lastModified[ cacheURL ] ) {
                            jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                        }
                        if ( jQuery.etag[ cacheURL ] ) {
                            jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                        }
                    }

                    // Set the correct header, if data is being sent
                    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                        jqXHR.setRequestHeader( "Content-Type", s.contentType );
                    }

                    // Set the Accepts header for the server, depending on the dataType
                    jqXHR.setRequestHeader(
                        "Accept",
                        s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
                        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                            s.accepts[ "*" ]
                    );

                    // Check for headers option
                    for ( i in s.headers ) {
                        jqXHR.setRequestHeader( i, s.headers[ i ] );
                    }

                    // Allow custom headers/mimetypes and early abort
                    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
                        // Abort if not done already and return
                        return jqXHR.abort();
                    }

                    // aborting is no longer a cancellation
                    strAbort = "abort";

                    // Install callbacks on deferreds
                    for ( i in { success: 1, error: 1, complete: 1 } ) {
                        jqXHR[ i ]( s[ i ] );
                    }

                    // Get transport
                    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

                    // If no transport, we auto-abort
                    if ( !transport ) {
                        done( -1, "No Transport" );
                    } else {
                        jqXHR.readyState = 1;

                        // Send global event
                        if ( fireGlobals ) {
                            globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                        }
                        // Timeout
                        if ( s.async && s.timeout > 0 ) {
                            timeoutTimer = setTimeout(function() {
                                jqXHR.abort("timeout");
                            }, s.timeout );
                        }

                        try {
                            state = 1;
                            transport.send( requestHeaders, done );
                        } catch ( e ) {
                            // Propagate exception as error if not done
                            if ( state < 2 ) {
                                done( -1, e );
                                // Simply rethrow otherwise
                            } else {
                                throw e;
                            }
                        }
                    }

                    // Callback for when everything is done
                    function done( status, nativeStatusText, responses, headers ) {
                        var isSuccess, success, error, response, modified,
                            statusText = nativeStatusText;

                        // Called once
                        if ( state === 2 ) {
                            return;
                        }

                        // State is "done" now
                        state = 2;

                        // Clear timeout if it exists
                        if ( timeoutTimer ) {
                            clearTimeout( timeoutTimer );
                        }

                        // Dereference transport for early garbage collection
                        // (no matter how long the jqXHR object will be used)
                        transport = undefined;

                        // Cache response headers
                        responseHeadersString = headers || "";

                        // Set readyState
                        jqXHR.readyState = status > 0 ? 4 : 0;

                        // Get response data
                        if ( responses ) {
                            response = ajaxHandleResponses( s, jqXHR, responses );
                        }

                        // If successful, handle type chaining
                        if ( status >= 200 && status < 300 || status === 304 ) {

                            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                            if ( s.ifModified ) {
                                modified = jqXHR.getResponseHeader("Last-Modified");
                                if ( modified ) {
                                    jQuery.lastModified[ cacheURL ] = modified;
                                }
                                modified = jqXHR.getResponseHeader("etag");
                                if ( modified ) {
                                    jQuery.etag[ cacheURL ] = modified;
                                }
                            }

                            // If not modified
                            if ( status === 304 ) {
                                isSuccess = true;
                                statusText = "notmodified";

                                // If we have data
                            } else {
                                isSuccess = ajaxConvert( s, response );
                                statusText = isSuccess.state;
                                success = isSuccess.data;
                                error = isSuccess.error;
                                isSuccess = !error;
                            }
                        } else {
                            // We extract error from statusText
                            // then normalize statusText and status for non-aborts
                            error = statusText;
                            if ( status || !statusText ) {
                                statusText = "error";
                                if ( status < 0 ) {
                                    status = 0;
                                }
                            }
                        }

                        // Set data for the fake xhr object
                        jqXHR.status = status;
                        jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                        // Success/Error
                        if ( isSuccess ) {
                            deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                        } else {
                            deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                        }

                        // Status-dependent callbacks
                        jqXHR.statusCode( statusCode );
                        statusCode = undefined;

                        if ( fireGlobals ) {
                            globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                                [ jqXHR, s, isSuccess ? success : error ] );
                        }

                        // Complete
                        completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                        if ( fireGlobals ) {
                            globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                            // Handle the global AJAX counter
                            if ( !( --jQuery.active ) ) {
                                jQuery.event.trigger("ajaxStop");
                            }
                        }
                    }

                    return jqXHR;
                },

                getScript: function( url, callback ) {
                    return jQuery.get( url, undefined, callback, "script" );
                },

                getJSON: function( url, data, callback ) {
                    return jQuery.get( url, data, callback, "json" );
                }
            });

            /* Handles responses to an ajax request:
             * - sets all responseXXX fields accordingly
             * - finds the right dataType (mediates between content-type and expected dataType)
             * - returns the corresponding response
             */
            function ajaxHandleResponses( s, jqXHR, responses ) {

                var ct, type, finalDataType, firstDataType,
                    contents = s.contents,
                    dataTypes = s.dataTypes,
                    responseFields = s.responseFields;

                // Fill responseXXX fields
                for ( type in responseFields ) {
                    if ( type in responses ) {
                        jqXHR[ responseFields[type] ] = responses[ type ];
                    }
                }

                // Remove auto dataType and get content-type in the process
                while( dataTypes[ 0 ] === "*" ) {
                    dataTypes.shift();
                    if ( ct === undefined ) {
                        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                }

                // Check if we're dealing with a known content-type
                if ( ct ) {
                    for ( type in contents ) {
                        if ( contents[ type ] && contents[ type ].test( ct ) ) {
                            dataTypes.unshift( type );
                            break;
                        }
                    }
                }

                // Check to see if we have a response for the expected dataType
                if ( dataTypes[ 0 ] in responses ) {
                    finalDataType = dataTypes[ 0 ];
                } else {
                    // Try convertible dataTypes
                    for ( type in responses ) {
                        if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
                            finalDataType = type;
                            break;
                        }
                        if ( !firstDataType ) {
                            firstDataType = type;
                        }
                    }
                    // Or just use first one
                    finalDataType = finalDataType || firstDataType;
                }

                // If we found a dataType
                // We add the dataType to the list if needed
                // and return the corresponding response
                if ( finalDataType ) {
                    if ( finalDataType !== dataTypes[ 0 ] ) {
                        dataTypes.unshift( finalDataType );
                    }
                    return responses[ finalDataType ];
                }
            }

            // Chain conversions given the request and the original response
            function ajaxConvert( s, response ) {

                var conv, conv2, current, tmp,
                    converters = {},
                    i = 0,
                // Work with a copy of dataTypes in case we need to modify it for conversion
                    dataTypes = s.dataTypes.slice(),
                    prev = dataTypes[ 0 ];

                // Apply the dataFilter if provided
                if ( s.dataFilter ) {
                    response = s.dataFilter( response, s.dataType );
                }

                // Create converters map with lowercased keys
                if ( dataTypes[ 1 ] ) {
                    for ( conv in s.converters ) {
                        converters[ conv.toLowerCase() ] = s.converters[ conv ];
                    }
                }

                // Convert to each sequential dataType, tolerating list modification
                for ( ; (current = dataTypes[++i]); ) {

                    // There's only work to do if current dataType is non-auto
                    if ( current !== "*" ) {

                        // Convert response if prev dataType is non-auto and differs from current
                        if ( prev !== "*" && prev !== current ) {

                            // Seek a direct converter
                            conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                            // If none found, seek a pair
                            if ( !conv ) {
                                for ( conv2 in converters ) {

                                    // If conv2 outputs current
                                    tmp = conv2.split(" ");
                                    if ( tmp[ 1 ] === current ) {

                                        // If prev can be converted to accepted input
                                        conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                            converters[ "* " + tmp[ 0 ] ];
                                        if ( conv ) {
                                            // Condense equivalence converters
                                            if ( conv === true ) {
                                                conv = converters[ conv2 ];

                                                // Otherwise, insert the intermediate dataType
                                            } else if ( converters[ conv2 ] !== true ) {
                                                current = tmp[ 0 ];
                                                dataTypes.splice( i--, 0, current );
                                            }

                                            break;
                                        }
                                    }
                                }
                            }

                            // Apply converter (if not an equivalence)
                            if ( conv !== true ) {

                                // Unless errors are allowed to bubble, catch and return them
                                if ( conv && s["throws"] ) {
                                    response = conv( response );
                                } else {
                                    try {
                                        response = conv( response );
                                    } catch ( e ) {
                                        return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                                    }
                                }
                            }
                        }

                        // Update prev for next iteration
                        prev = current;
                    }
                }

                return { state: "success", data: response };
            }
            // Install script dataType
            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function( text ) {
                        jQuery.globalEval( text );
                        return text;
                    }
                }
            });

            // Handle cache's special case and global
            jQuery.ajaxPrefilter( "script", function( s ) {
                if ( s.cache === undefined ) {
                    s.cache = false;
                }
                if ( s.crossDomain ) {
                    s.type = "GET";
                    s.global = false;
                }
            });

            // Bind script tag hack transport
            jQuery.ajaxTransport( "script", function(s) {

                // This transport only deals with cross domain requests
                if ( s.crossDomain ) {

                    var script,
                        head = document.head || jQuery("head")[0] || document.documentElement;

                    return {

                        send: function( _, callback ) {

                            script = document.createElement("script");

                            script.async = true;

                            if ( s.scriptCharset ) {
                                script.charset = s.scriptCharset;
                            }

                            script.src = s.url;

                            // Attach handlers for all browsers
                            script.onload = script.onreadystatechange = function( _, isAbort ) {

                                if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

                                    // Handle memory leak in IE
                                    script.onload = script.onreadystatechange = null;

                                    // Remove the script
                                    if ( script.parentNode ) {
                                        script.parentNode.removeChild( script );
                                    }

                                    // Dereference the script
                                    script = null;

                                    // Callback if not abort
                                    if ( !isAbort ) {
                                        callback( 200, "success" );
                                    }
                                }
                            };

                            // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                            // Use native DOM manipulation to avoid our domManip AJAX trickery
                            head.insertBefore( script, head.firstChild );
                        },

                        abort: function() {
                            if ( script ) {
                                script.onload( undefined, true );
                            }
                        }
                    };
                }
            });
            var oldCallbacks = [],
                rjsonp = /(=)\?(?=&|$)|\?\?/;

            // Default jsonp settings
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
                    this[ callback ] = true;
                    return callback;
                }
            });

            // Detect, normalize options and install callbacks for jsonp requests
            jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

                var callbackName, overwritten, responseContainer,
                    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                                "url" :
                            typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
                        );

                // Handle iff the expected data type is "jsonp" or we have a parameter to set
                if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

                    // Get callback name, remembering preexisting value associated with it
                    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
                        s.jsonpCallback() :
                        s.jsonpCallback;

                    // Insert callback into url or form data
                    if ( jsonProp ) {
                        s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
                    } else if ( s.jsonp !== false ) {
                        s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
                    }

                    // Use data converter to retrieve json after script execution
                    s.converters["script json"] = function() {
                        if ( !responseContainer ) {
                            jQuery.error( callbackName + " was not called" );
                        }
                        return responseContainer[ 0 ];
                    };

                    // force json dataType
                    s.dataTypes[ 0 ] = "json";

                    // Install callback
                    overwritten = window[ callbackName ];
                    window[ callbackName ] = function() {
                        responseContainer = arguments;
                    };

                    // Clean-up function (fires after converters)
                    jqXHR.always(function() {
                        // Restore preexisting value
                        window[ callbackName ] = overwritten;

                        // Save back as free
                        if ( s[ callbackName ] ) {
                            // make sure that re-using the options doesn't screw things around
                            s.jsonpCallback = originalSettings.jsonpCallback;

                            // save the callback name for future use
                            oldCallbacks.push( callbackName );
                        }

                        // Call if it was a function and we have a response
                        if ( responseContainer && jQuery.isFunction( overwritten ) ) {
                            overwritten( responseContainer[ 0 ] );
                        }

                        responseContainer = overwritten = undefined;
                    });

                    // Delegate to script
                    return "script";
                }
            });
            var xhrCallbacks, xhrSupported,
                xhrId = 0,
            // #5280: Internet Explorer will keep connections alive if we don't abort on unload
                xhrOnUnloadAbort = window.ActiveXObject && function() {
                        // Abort all pending requests
                        var key;
                        for ( key in xhrCallbacks ) {
                            xhrCallbacks[ key ]( undefined, true );
                        }
                    };

            // Functions to create xhrs
            function createStandardXHR() {
                try {
                    return new window.XMLHttpRequest();
                } catch( e ) {}
            }

            function createActiveXHR() {
                try {
                    return new window.ActiveXObject("Microsoft.XMLHTTP");
                } catch( e ) {}
            }

            // Create the request object
            // (This is still attached to ajaxSettings for backward compatibility)
            jQuery.ajaxSettings.xhr = window.ActiveXObject ?
                /* Microsoft failed to properly
                 * implement the XMLHttpRequest in IE7 (can't request local files),
                 * so we use the ActiveXObject when it is available
                 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
                 * we need a fallback.
                 */
                function() {
                    return !this.isLocal && createStandardXHR() || createActiveXHR();
                } :
                // For all other browsers, use the standard XMLHttpRequest object
                createStandardXHR;

            // Determine support properties
            xhrSupported = jQuery.ajaxSettings.xhr();
            jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
            xhrSupported = jQuery.support.ajax = !!xhrSupported;

            // Create transport if the browser can provide an xhr
            if ( xhrSupported ) {

                jQuery.ajaxTransport(function( s ) {
                    // Cross domain only allowed if supported through XMLHttpRequest
                    if ( !s.crossDomain || jQuery.support.cors ) {

                        var callback;

                        return {
                            send: function( headers, complete ) {

                                // Get a new xhr
                                var handle, i,
                                    xhr = s.xhr();

                                // Open the socket
                                // Passing null username, generates a login popup on Opera (#2865)
                                if ( s.username ) {
                                    xhr.open( s.type, s.url, s.async, s.username, s.password );
                                } else {
                                    xhr.open( s.type, s.url, s.async );
                                }

                                // Apply custom fields if provided
                                if ( s.xhrFields ) {
                                    for ( i in s.xhrFields ) {
                                        xhr[ i ] = s.xhrFields[ i ];
                                    }
                                }

                                // Override mime type if needed
                                if ( s.mimeType && xhr.overrideMimeType ) {
                                    xhr.overrideMimeType( s.mimeType );
                                }

                                // X-Requested-With header
                                // For cross-domain requests, seeing as conditions for a preflight are
                                // akin to a jigsaw puzzle, we simply never set it to be sure.
                                // (it can always be set on a per-request basis or even using ajaxSetup)
                                // For same-domain requests, won't change header if already provided.
                                if ( !s.crossDomain && !headers["X-Requested-With"] ) {
                                    headers["X-Requested-With"] = "XMLHttpRequest";
                                }

                                // Need an extra try/catch for cross domain requests in Firefox 3
                                try {
                                    for ( i in headers ) {
                                        xhr.setRequestHeader( i, headers[ i ] );
                                    }
                                } catch( err ) {}

                                // Do send the request
                                // This may raise an exception which is actually
                                // handled in jQuery.ajax (so no try/catch here)
                                xhr.send( ( s.hasContent && s.data ) || null );

                                // Listener
                                callback = function( _, isAbort ) {

                                    var status,
                                        statusText,
                                        responseHeaders,
                                        responses,
                                        xml;

                                    // Firefox throws exceptions when accessing properties
                                    // of an xhr when a network error occurred
                                    // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                                    try {

                                        // Was never called and is aborted or complete
                                        if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                                            // Only called once
                                            callback = undefined;

                                            // Do not keep as active anymore
                                            if ( handle ) {
                                                xhr.onreadystatechange = jQuery.noop;
                                                if ( xhrOnUnloadAbort ) {
                                                    delete xhrCallbacks[ handle ];
                                                }
                                            }

                                            // If it's an abort
                                            if ( isAbort ) {
                                                // Abort it manually if needed
                                                if ( xhr.readyState !== 4 ) {
                                                    xhr.abort();
                                                }
                                            } else {
                                                responses = {};
                                                status = xhr.status;
                                                xml = xhr.responseXML;
                                                responseHeaders = xhr.getAllResponseHeaders();

                                                // Construct response list
                                                if ( xml && xml.documentElement /* #4958 */ ) {
                                                    responses.xml = xml;
                                                }

                                                // When requesting binary data, IE6-9 will throw an exception
                                                // on any attempt to access responseText (#11426)
                                                if ( typeof xhr.responseText === "string" ) {
                                                    responses.text = xhr.responseText;
                                                }

                                                // Firefox throws an exception when accessing
                                                // statusText for faulty cross-domain requests
                                                try {
                                                    statusText = xhr.statusText;
                                                } catch( e ) {
                                                    // We normalize with Webkit giving an empty statusText
                                                    statusText = "";
                                                }

                                                // Filter status for non standard behaviors

                                                // If the request is local and we have data: assume a success
                                                // (success with no data won't get notified, that's the best we
                                                // can do given current implementations)
                                                if ( !status && s.isLocal && !s.crossDomain ) {
                                                    status = responses.text ? 200 : 404;
                                                    // IE - #1450: sometimes returns 1223 when it should be 204
                                                } else if ( status === 1223 ) {
                                                    status = 204;
                                                }
                                            }
                                        }
                                    } catch( firefoxAccessException ) {
                                        if ( !isAbort ) {
                                            complete( -1, firefoxAccessException );
                                        }
                                    }

                                    // Call complete if needed
                                    if ( responses ) {
                                        complete( status, statusText, responses, responseHeaders );
                                    }
                                };

                                if ( !s.async ) {
                                    // if we're in sync mode we fire the callback
                                    callback();
                                } else if ( xhr.readyState === 4 ) {
                                    // (IE6 & IE7) if it's in cache and has been
                                    // retrieved directly we need to fire the callback
                                    setTimeout( callback );
                                } else {
                                    handle = ++xhrId;
                                    if ( xhrOnUnloadAbort ) {
                                        // Create the active xhrs callbacks list if needed
                                        // and attach the unload handler
                                        if ( !xhrCallbacks ) {
                                            xhrCallbacks = {};
                                            jQuery( window ).unload( xhrOnUnloadAbort );
                                        }
                                        // Add to list of active xhrs callbacks
                                        xhrCallbacks[ handle ] = callback;
                                    }
                                    xhr.onreadystatechange = callback;
                                }
                            },

                            abort: function() {
                                if ( callback ) {
                                    callback( undefined, true );
                                }
                            }
                        };
                    }
                });
            }
            var fxNow, timerId,
                rfxtypes = /^(?:toggle|show|hide)$/,
                rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
                rrun = /queueHooks$/,
                animationPrefilters = [ defaultPrefilter ],
                tweeners = {
                    "*": [function( prop, value ) {
                        var end, unit,
                            tween = this.createTween( prop, value ),
                            parts = rfxnum.exec( value ),
                            target = tween.cur(),
                            start = +target || 0,
                            scale = 1,
                            maxIterations = 20;

                        if ( parts ) {
                            end = +parts[2];
                            unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

                            // We need to compute starting value
                            if ( unit !== "px" && start ) {
                                // Iteratively approximate from a nonzero starting point
                                // Prefer the current property, because this process will be trivial if it uses the same units
                                // Fallback to end or a simple constant
                                start = jQuery.css( tween.elem, prop, true ) || end || 1;

                                do {
                                    // If previous iteration zeroed out, double until we get *something*
                                    // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                                    scale = scale || ".5";

                                    // Adjust and apply
                                    start = start / scale;
                                    jQuery.style( tween.elem, prop, start + unit );

                                    // Update scale, tolerating zero or NaN from tween.cur()
                                    // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
                                } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
                            }

                            tween.unit = unit;
                            tween.start = start;
                            // If a +=/-= token was provided, we're doing a relative animation
                            tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
                        }
                        return tween;
                    }]
                };

            // Animations created synchronously will run synchronously
            function createFxNow() {
                setTimeout(function() {
                    fxNow = undefined;
                });
                return ( fxNow = jQuery.now() );
            }

            function createTweens( animation, props ) {
                jQuery.each( props, function( prop, value ) {
                    var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
                        index = 0,
                        length = collection.length;
                    for ( ; index < length; index++ ) {
                        if ( collection[ index ].call( animation, prop, value ) ) {

                            // we're done with this property
                            return;
                        }
                    }
                });
            }

            function Animation( elem, properties, options ) {
                var result,
                    stopped,
                    index = 0,
                    length = animationPrefilters.length,
                    deferred = jQuery.Deferred().always( function() {
                        // don't match elem in the :animated selector
                        delete tick.elem;
                    }),
                    tick = function() {
                        if ( stopped ) {
                            return false;
                        }
                        var currentTime = fxNow || createFxNow(),
                            remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
                        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
                            temp = remaining / animation.duration || 0,
                            percent = 1 - temp,
                            index = 0,
                            length = animation.tweens.length;

                        for ( ; index < length ; index++ ) {
                            animation.tweens[ index ].run( percent );
                        }

                        deferred.notifyWith( elem, [ animation, percent, remaining ]);

                        if ( percent < 1 && length ) {
                            return remaining;
                        } else {
                            deferred.resolveWith( elem, [ animation ] );
                            return false;
                        }
                    },
                    animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend( {}, properties ),
                        opts: jQuery.extend( true, { specialEasing: {} }, options ),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function( prop, end ) {
                            var tween = jQuery.Tween( elem, animation.opts, prop, end,
                                animation.opts.specialEasing[ prop ] || animation.opts.easing );
                            animation.tweens.push( tween );
                            return tween;
                        },
                        stop: function( gotoEnd ) {
                            var index = 0,
                            // if we are going to the end, we want to run all the tweens
                            // otherwise we skip this part
                                length = gotoEnd ? animation.tweens.length : 0;
                            if ( stopped ) {
                                return this;
                            }
                            stopped = true;
                            for ( ; index < length ; index++ ) {
                                animation.tweens[ index ].run( 1 );
                            }

                            // resolve when we played the last frame
                            // otherwise, reject
                            if ( gotoEnd ) {
                                deferred.resolveWith( elem, [ animation, gotoEnd ] );
                            } else {
                                deferred.rejectWith( elem, [ animation, gotoEnd ] );
                            }
                            return this;
                        }
                    }),
                    props = animation.props;

                propFilter( props, animation.opts.specialEasing );

                for ( ; index < length ; index++ ) {
                    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
                    if ( result ) {
                        return result;
                    }
                }

                createTweens( animation, props );

                if ( jQuery.isFunction( animation.opts.start ) ) {
                    animation.opts.start.call( elem, animation );
                }

                jQuery.fx.timer(
                    jQuery.extend( tick, {
                        elem: elem,
                        anim: animation,
                        queue: animation.opts.queue
                    })
                );

                // attach callbacks from options
                return animation.progress( animation.opts.progress )
                    .done( animation.opts.done, animation.opts.complete )
                    .fail( animation.opts.fail )
                    .always( animation.opts.always );
            }

            function propFilter( props, specialEasing ) {
                var index, name, easing, value, hooks;

                // camelCase, specialEasing and expand cssHook pass
                for ( index in props ) {
                    name = jQuery.camelCase( index );
                    easing = specialEasing[ name ];
                    value = props[ index ];
                    if ( jQuery.isArray( value ) ) {
                        easing = value[ 1 ];
                        value = props[ index ] = value[ 0 ];
                    }

                    if ( index !== name ) {
                        props[ name ] = value;
                        delete props[ index ];
                    }

                    hooks = jQuery.cssHooks[ name ];
                    if ( hooks && "expand" in hooks ) {
                        value = hooks.expand( value );
                        delete props[ name ];

                        // not quite $.extend, this wont overwrite keys already present.
                        // also - reusing 'index' from above because we have the correct "name"
                        for ( index in value ) {
                            if ( !( index in props ) ) {
                                props[ index ] = value[ index ];
                                specialEasing[ index ] = easing;
                            }
                        }
                    } else {
                        specialEasing[ name ] = easing;
                    }
                }
            }

            jQuery.Animation = jQuery.extend( Animation, {

                tweener: function( props, callback ) {
                    if ( jQuery.isFunction( props ) ) {
                        callback = props;
                        props = [ "*" ];
                    } else {
                        props = props.split(" ");
                    }

                    var prop,
                        index = 0,
                        length = props.length;

                    for ( ; index < length ; index++ ) {
                        prop = props[ index ];
                        tweeners[ prop ] = tweeners[ prop ] || [];
                        tweeners[ prop ].unshift( callback );
                    }
                },

                prefilter: function( callback, prepend ) {
                    if ( prepend ) {
                        animationPrefilters.unshift( callback );
                    } else {
                        animationPrefilters.push( callback );
                    }
                }
            });

            function defaultPrefilter( elem, props, opts ) {
                /*jshint validthis:true */
                var index, prop, value, length, dataShow, toggle, tween, hooks, oldfire,
                    anim = this,
                    style = elem.style,
                    orig = {},
                    handled = [],
                    hidden = elem.nodeType && isHidden( elem );

                // handle queue: false promises
                if ( !opts.queue ) {
                    hooks = jQuery._queueHooks( elem, "fx" );
                    if ( hooks.unqueued == null ) {
                        hooks.unqueued = 0;
                        oldfire = hooks.empty.fire;
                        hooks.empty.fire = function() {
                            if ( !hooks.unqueued ) {
                                oldfire();
                            }
                        };
                    }
                    hooks.unqueued++;

                    anim.always(function() {
                        // doing this makes sure that the complete handler will be called
                        // before this completes
                        anim.always(function() {
                            hooks.unqueued--;
                            if ( !jQuery.queue( elem, "fx" ).length ) {
                                hooks.empty.fire();
                            }
                        });
                    });
                }

                // height/width overflow pass
                if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
                    // Make sure that nothing sneaks out
                    // Record all 3 overflow attributes because IE does not
                    // change the overflow attribute when overflowX and
                    // overflowY are set to the same value
                    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

                    // Set display property to inline-block for height/width
                    // animations on inline elements that are having width/height animated
                    if ( jQuery.css( elem, "display" ) === "inline" &&
                        jQuery.css( elem, "float" ) === "none" ) {

                        // inline-level elements accept inline-block;
                        // block-level elements need to be inline with layout
                        if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
                            style.display = "inline-block";

                        } else {
                            style.zoom = 1;
                        }
                    }
                }

                if ( opts.overflow ) {
                    style.overflow = "hidden";
                    if ( !jQuery.support.shrinkWrapBlocks ) {
                        anim.done(function() {
                            style.overflow = opts.overflow[ 0 ];
                            style.overflowX = opts.overflow[ 1 ];
                            style.overflowY = opts.overflow[ 2 ];
                        });
                    }
                }


                // show/hide pass
                for ( index in props ) {
                    value = props[ index ];
                    if ( rfxtypes.exec( value ) ) {
                        delete props[ index ];
                        toggle = toggle || value === "toggle";
                        if ( value === ( hidden ? "hide" : "show" ) ) {
                            continue;
                        }
                        handled.push( index );
                    }
                }

                length = handled.length;
                if ( length ) {
                    dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
                    if ( "hidden" in dataShow ) {
                        hidden = dataShow.hidden;
                    }

                    // store state if its toggle - enables .stop().toggle() to "reverse"
                    if ( toggle ) {
                        dataShow.hidden = !hidden;
                    }
                    if ( hidden ) {
                        jQuery( elem ).show();
                    } else {
                        anim.done(function() {
                            jQuery( elem ).hide();
                        });
                    }
                    anim.done(function() {
                        var prop;
                        jQuery._removeData( elem, "fxshow" );
                        for ( prop in orig ) {
                            jQuery.style( elem, prop, orig[ prop ] );
                        }
                    });
                    for ( index = 0 ; index < length ; index++ ) {
                        prop = handled[ index ];
                        tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
                        orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

                        if ( !( prop in dataShow ) ) {
                            dataShow[ prop ] = tween.start;
                            if ( hidden ) {
                                tween.end = tween.start;
                                tween.start = prop === "width" || prop === "height" ? 1 : 0;
                            }
                        }
                    }
                }
            }

            function Tween( elem, options, prop, end, easing ) {
                return new Tween.prototype.init( elem, options, prop, end, easing );
            }
            jQuery.Tween = Tween;

            Tween.prototype = {
                constructor: Tween,
                init: function( elem, options, prop, end, easing, unit ) {
                    this.elem = elem;
                    this.prop = prop;
                    this.easing = easing || "swing";
                    this.options = options;
                    this.start = this.now = this.cur();
                    this.end = end;
                    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
                },
                cur: function() {
                    var hooks = Tween.propHooks[ this.prop ];

                    return hooks && hooks.get ?
                        hooks.get( this ) :
                        Tween.propHooks._default.get( this );
                },
                run: function( percent ) {
                    var eased,
                        hooks = Tween.propHooks[ this.prop ];

                    if ( this.options.duration ) {
                        this.pos = eased = jQuery.easing[ this.easing ](
                            percent, this.options.duration * percent, 0, 1, this.options.duration
                        );
                    } else {
                        this.pos = eased = percent;
                    }
                    this.now = ( this.end - this.start ) * eased + this.start;

                    if ( this.options.step ) {
                        this.options.step.call( this.elem, this.now, this );
                    }

                    if ( hooks && hooks.set ) {
                        hooks.set( this );
                    } else {
                        Tween.propHooks._default.set( this );
                    }
                    return this;
                }
            };

            Tween.prototype.init.prototype = Tween.prototype;

            Tween.propHooks = {
                _default: {
                    get: function( tween ) {
                        var result;

                        if ( tween.elem[ tween.prop ] != null &&
                            (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
                            return tween.elem[ tween.prop ];
                        }

                        // passing a non empty string as a 3rd parameter to .css will automatically
                        // attempt a parseFloat and fallback to a string if the parse fails
                        // so, simple values such as "10px" are parsed to Float.
                        // complex values such as "rotate(1rad)" are returned as is.
                        result = jQuery.css( tween.elem, tween.prop, "auto" );
                        // Empty strings, null, undefined and "auto" are converted to 0.
                        return !result || result === "auto" ? 0 : result;
                    },
                    set: function( tween ) {
                        // use step hook for back compat - use cssHook if its there - use .style if its
                        // available and use plain properties where available
                        if ( jQuery.fx.step[ tween.prop ] ) {
                            jQuery.fx.step[ tween.prop ]( tween );
                        } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
                            jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                        } else {
                            tween.elem[ tween.prop ] = tween.now;
                        }
                    }
                }
            };

            // Remove in 2.0 - this supports IE8's panic based approach
            // to setting things on disconnected nodes

            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function( tween ) {
                    if ( tween.elem.nodeType && tween.elem.parentNode ) {
                        tween.elem[ tween.prop ] = tween.now;
                    }
                }
            };

            jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
                var cssFn = jQuery.fn[ name ];
                jQuery.fn[ name ] = function( speed, easing, callback ) {
                    return speed == null || typeof speed === "boolean" ?
                        cssFn.apply( this, arguments ) :
                        this.animate( genFx( name, true ), speed, easing, callback );
                };
            });

            jQuery.fn.extend({
                fadeTo: function( speed, to, easing, callback ) {

                    // show any hidden elements after setting opacity to 0
                    return this.filter( isHidden ).css( "opacity", 0 ).show()

                        // animate to the value specified
                        .end().animate({ opacity: to }, speed, easing, callback );
                },
                animate: function( prop, speed, easing, callback ) {
                    var empty = jQuery.isEmptyObject( prop ),
                        optall = jQuery.speed( speed, easing, callback ),
                        doAnimation = function() {
                            // Operate on a copy of prop so per-property easing won't be lost
                            var anim = Animation( this, jQuery.extend( {}, prop ), optall );
                            doAnimation.finish = function() {
                                anim.stop( true );
                            };
                            // Empty animations, or finishing resolves immediately
                            if ( empty || jQuery._data( this, "finish" ) ) {
                                anim.stop( true );
                            }
                        };
                    doAnimation.finish = doAnimation;

                    return empty || optall.queue === false ?
                        this.each( doAnimation ) :
                        this.queue( optall.queue, doAnimation );
                },
                stop: function( type, clearQueue, gotoEnd ) {
                    var stopQueue = function( hooks ) {
                        var stop = hooks.stop;
                        delete hooks.stop;
                        stop( gotoEnd );
                    };

                    if ( typeof type !== "string" ) {
                        gotoEnd = clearQueue;
                        clearQueue = type;
                        type = undefined;
                    }
                    if ( clearQueue && type !== false ) {
                        this.queue( type || "fx", [] );
                    }

                    return this.each(function() {
                        var dequeue = true,
                            index = type != null && type + "queueHooks",
                            timers = jQuery.timers,
                            data = jQuery._data( this );

                        if ( index ) {
                            if ( data[ index ] && data[ index ].stop ) {
                                stopQueue( data[ index ] );
                            }
                        } else {
                            for ( index in data ) {
                                if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                                    stopQueue( data[ index ] );
                                }
                            }
                        }

                        for ( index = timers.length; index--; ) {
                            if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
                                timers[ index ].anim.stop( gotoEnd );
                                dequeue = false;
                                timers.splice( index, 1 );
                            }
                        }

                        // start the next in the queue if the last step wasn't forced
                        // timers currently will call their complete callbacks, which will dequeue
                        // but only if they were gotoEnd
                        if ( dequeue || !gotoEnd ) {
                            jQuery.dequeue( this, type );
                        }
                    });
                },
                finish: function( type ) {
                    if ( type !== false ) {
                        type = type || "fx";
                    }
                    return this.each(function() {
                        var index,
                            data = jQuery._data( this ),
                            queue = data[ type + "queue" ],
                            hooks = data[ type + "queueHooks" ],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0;

                        // enable finishing flag on private data
                        data.finish = true;

                        // empty the queue first
                        jQuery.queue( this, type, [] );

                        if ( hooks && hooks.cur && hooks.cur.finish ) {
                            hooks.cur.finish.call( this );
                        }

                        // look for any active animations, and finish them
                        for ( index = timers.length; index--; ) {
                            if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                                timers[ index ].anim.stop( true );
                                timers.splice( index, 1 );
                            }
                        }

                        // look for any animations in the old queue and finish them
                        for ( index = 0; index < length; index++ ) {
                            if ( queue[ index ] && queue[ index ].finish ) {
                                queue[ index ].finish.call( this );
                            }
                        }

                        // turn off finishing flag
                        delete data.finish;
                    });
                }
            });

            // Generate parameters to create a standard animation
            function genFx( type, includeWidth ) {
                var which,
                    attrs = { height: type },
                    i = 0;

                // if we include width, step value is 1 to do all cssExpand values,
                // if we don't include width, step value is 2 to skip over Left and Right
                includeWidth = includeWidth? 1 : 0;
                for( ; i < 4 ; i += 2 - includeWidth ) {
                    which = cssExpand[ i ];
                    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
                }

                if ( includeWidth ) {
                    attrs.opacity = attrs.width = type;
                }

                return attrs;
            }

            // Generate shortcuts for custom animations
            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
            }, function( name, props ) {
                jQuery.fn[ name ] = function( speed, easing, callback ) {
                    return this.animate( props, speed, easing, callback );
                };
            });

            jQuery.speed = function( speed, easing, fn ) {
                var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
                    complete: fn || !fn && easing ||
                    jQuery.isFunction( speed ) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
                };

                opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
                    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

                // normalize opt.queue - true/undefined/null -> "fx"
                if ( opt.queue == null || opt.queue === true ) {
                    opt.queue = "fx";
                }

                // Queueing
                opt.old = opt.complete;

                opt.complete = function() {
                    if ( jQuery.isFunction( opt.old ) ) {
                        opt.old.call( this );
                    }

                    if ( opt.queue ) {
                        jQuery.dequeue( this, opt.queue );
                    }
                };

                return opt;
            };

            jQuery.easing = {
                linear: function( p ) {
                    return p;
                },
                swing: function( p ) {
                    return 0.5 - Math.cos( p*Math.PI ) / 2;
                }
            };

            jQuery.timers = [];
            jQuery.fx = Tween.prototype.init;
            jQuery.fx.tick = function() {
                var timer,
                    timers = jQuery.timers,
                    i = 0;

                fxNow = jQuery.now();

                for ( ; i < timers.length; i++ ) {
                    timer = timers[ i ];
                    // Checks the timer has not already been removed
                    if ( !timer() && timers[ i ] === timer ) {
                        timers.splice( i--, 1 );
                    }
                }

                if ( !timers.length ) {
                    jQuery.fx.stop();
                }
                fxNow = undefined;
            };

            jQuery.fx.timer = function( timer ) {
                if ( timer() && jQuery.timers.push( timer ) ) {
                    jQuery.fx.start();
                }
            };

            jQuery.fx.interval = 13;

            jQuery.fx.start = function() {
                if ( !timerId ) {
                    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
                }
            };

            jQuery.fx.stop = function() {
                clearInterval( timerId );
                timerId = null;
            };

            jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                // Default speed
                _default: 400
            };

            // Back Compat <1.8 extension point
            jQuery.fx.step = {};

            if ( jQuery.expr && jQuery.expr.filters ) {
                jQuery.expr.filters.animated = function( elem ) {
                    return jQuery.grep(jQuery.timers, function( fn ) {
                        return elem === fn.elem;
                    }).length;
                };
            }
            jQuery.fn.offset = function( options ) {
                if ( arguments.length ) {
                    return options === undefined ?
                        this :
                        this.each(function( i ) {
                            jQuery.offset.setOffset( this, options, i );
                        });
                }

                var docElem, win,
                    box = { top: 0, left: 0 },
                    elem = this[ 0 ],
                    doc = elem && elem.ownerDocument;

                if ( !doc ) {
                    return;
                }

                docElem = doc.documentElement;

                // Make sure it's not a disconnected DOM node
                if ( !jQuery.contains( docElem, elem ) ) {
                    return box;
                }

                // If we don't have gBCR, just use 0,0 rather than error
                // BlackBerry 5, iOS 3 (original iPhone)
                if ( typeof elem.getBoundingClientRect !== "undefined" ) {
                    box = elem.getBoundingClientRect();
                }
                win = getWindow( doc );
                return {
                    top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
                    left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
                };
            };

            jQuery.offset = {

                setOffset: function( elem, options, i ) {
                    var position = jQuery.css( elem, "position" );

                    // set position first, in-case top/left are set even on static elem
                    if ( position === "static" ) {
                        elem.style.position = "relative";
                    }

                    var curElem = jQuery( elem ),
                        curOffset = curElem.offset(),
                        curCSSTop = jQuery.css( elem, "top" ),
                        curCSSLeft = jQuery.css( elem, "left" ),
                        calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
                        props = {}, curPosition = {}, curTop, curLeft;

                    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
                    if ( calculatePosition ) {
                        curPosition = curElem.position();
                        curTop = curPosition.top;
                        curLeft = curPosition.left;
                    } else {
                        curTop = parseFloat( curCSSTop ) || 0;
                        curLeft = parseFloat( curCSSLeft ) || 0;
                    }

                    if ( jQuery.isFunction( options ) ) {
                        options = options.call( elem, i, curOffset );
                    }

                    if ( options.top != null ) {
                        props.top = ( options.top - curOffset.top ) + curTop;
                    }
                    if ( options.left != null ) {
                        props.left = ( options.left - curOffset.left ) + curLeft;
                    }

                    if ( "using" in options ) {
                        options.using.call( elem, props );
                    } else {
                        curElem.css( props );
                    }
                }
            };


            jQuery.fn.extend({

                position: function() {
                    if ( !this[ 0 ] ) {
                        return;
                    }

                    var offsetParent, offset,
                        parentOffset = { top: 0, left: 0 },
                        elem = this[ 0 ];

                    // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
                    if ( jQuery.css( elem, "position" ) === "fixed" ) {
                        // we assume that getBoundingClientRect is available when computed position is fixed
                        offset = elem.getBoundingClientRect();
                    } else {
                        // Get *real* offsetParent
                        offsetParent = this.offsetParent();

                        // Get correct offsets
                        offset = this.offset();
                        if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
                            parentOffset = offsetParent.offset();
                        }

                        // Add offsetParent borders
                        parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
                        parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
                    }

                    // Subtract parent offsets and element margins
                    // note: when an element has margin: auto the offsetLeft and marginLeft
                    // are the same in Safari causing offset.left to incorrectly be 0
                    return {
                        top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                        left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
                    };
                },

                offsetParent: function() {
                    return this.map(function() {
                        var offsetParent = this.offsetParent || document.documentElement;
                        while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
                            offsetParent = offsetParent.offsetParent;
                        }
                        return offsetParent || document.documentElement;
                    });
                }
            });


            // Create scrollLeft and scrollTop methods
            jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
                var top = /Y/.test( prop );

                jQuery.fn[ method ] = function( val ) {
                    return jQuery.access( this, function( elem, method, val ) {
                        var win = getWindow( elem );

                        if ( val === undefined ) {
                            return win ? (prop in win) ? win[ prop ] :
                                win.document.documentElement[ method ] :
                                elem[ method ];
                        }

                        if ( win ) {
                            win.scrollTo(
                                !top ? val : jQuery( win ).scrollLeft(),
                                top ? val : jQuery( win ).scrollTop()
                            );

                        } else {
                            elem[ method ] = val;
                        }
                    }, method, val, arguments.length, null );
                };
            });

            function getWindow( elem ) {
                return jQuery.isWindow( elem ) ?
                    elem :
                    elem.nodeType === 9 ?
                    elem.defaultView || elem.parentWindow :
                        false;
            }
            // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
            jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
                jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
                    // margin is only for outerHeight, outerWidth
                    jQuery.fn[ funcName ] = function( margin, value ) {
                        var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                            extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                        return jQuery.access( this, function( elem, type, value ) {
                            var doc;

                            if ( jQuery.isWindow( elem ) ) {
                                // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                                // isn't a whole lot we can do. See pull request at this URL for discussion:
                                // https://github.com/jquery/jquery/pull/764
                                return elem.document.documentElement[ "client" + name ];
                            }

                            // Get document width or height
                            if ( elem.nodeType === 9 ) {
                                doc = elem.documentElement;

                                // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                                // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                                return Math.max(
                                    elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                                    elem.body[ "offset" + name ], doc[ "offset" + name ],
                                    doc[ "client" + name ]
                                );
                            }

                            return value === undefined ?
                                // Get width or height on the element, requesting but not forcing parseFloat
                                jQuery.css( elem, type, extra ) :

                                // Set width or height on the element
                                jQuery.style( elem, type, value, extra );
                        }, type, chainable ? margin : undefined, chainable, null );
                    };
                });
            });
            // Limit scope pollution from any deprecated API
            // (function() {

            // })();
            // Expose jQuery to the global object
            window.jQuery = window.$ = jQuery;

            // Expose jQuery as an AMD module, but only for AMD loaders that
            // understand the issues with loading multiple versions of jQuery
            // in a page that all might call define(). The loader will indicate
            // they have special allowances for multiple jQuery versions by
            // specifying define.amd.jQuery = true. Register as a named module,
            // since jQuery can be concatenated with other files that may use define,
            // but not use a proper concatenation script that understands anonymous
            // AMD modules. A named AMD is safest and most robust way to register.
            // Lowercase jquery is used because AMD module names are derived from
            // file names, and jQuery is normally delivered in a lowercase file name.
            // Do this after creating the global so that if an AMD module wants to call
            // noConflict to hide this version of jQuery, it will work.
            if ( "function" === "function" && __webpack_require__(24) && __webpack_require__(24).jQuery ) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return jQuery; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }

        })( window );


        /***/ },
    /* 24 */
    /***/ function(module, exports) {

        /* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

            /* WEBPACK VAR INJECTION */}.call(exports, {}))

        /***/ },
    /* 25 */,
    /* 26 */
    /***/ function(module, exports) {

        function init() {
            var tags = $(".tagcloud a");
            tags.css({"font-size": "12px"});
            for(var i=0,len=tags.length; i<len; i++){
                var num = tags.eq(i).html().length % 5 +1;
                tags[i].className = "";
                tags.eq(i).addClass("color"+num);
            }
        }

        module.exports = {
            init: init
        }

        /***/ },
    /* 27 */
    /***/ function(module, exports, __webpack_require__) {

        var browser = __webpack_require__(28)

        var isMobile = browser.versions.mobile === true && $(window).width() < 800

        function init() {
            var frameClass = 'js-archives-frame'

            if (top !== window) {
                // 子级

                // 特殊样式
                $('body').addClass('archive-inner')
                // 父级跳转
                $('.archive-article-title').click(function() {
                    var link = $(this).attr('href')
                    top.location.href = link
                    return false
                })
                // 页码
                $('.page-number').click(function() {
                    $(top.document).find('.' + frameClass).hide()
                })
                // 去掉日期点击
                $('.archive-article-date').attr('href', 'javascript:void(0);')
            } else if (! /\/archives\/(.*)/.test(window.location.pathname) && !isMobile) {
                // 父级
                var $frame = $('<iframe class="' + frameClass + '"></iframe>').attr('src', '/archives/')
                $('.tools-section-all').append($frame)
                // 避免闪动
                $frame[0].onload = function() {
                    var timeout = setInterval(function() {
                        var framebody = $($('.js-archives-frame')[0].contentWindow.document).find('.archive-inner')
                        if (framebody.length) {
                            $frame.show()
                            clearTimeout(timeout)
                        }
                    }, 50)

                }
            }
        }

        module.exports = {
            init : init
        }


        /***/ },
    /* 28 */
    /***/ function(module, exports) {

        var browser = {
            versions:function(){
                var u = window.navigator.userAgent;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
                    iPad: u.indexOf('iPad') > -1, //是否为iPad
                    webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
                    weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
                };
            }()
        }

        module.exports = browser

        /***/ },
    /* 29 */
    /***/ function(module, exports, __webpack_require__) {

        var Util = __webpack_require__(30)
        var $article, $tools
        var localKey = 'yilia-menu'

        function triggerClk(idx) {
            $('.btn-wrap li').eq(idx).trigger('click')
        }
        function init() {
            // 变量初始化
            $article = $('.mid-col')
            $tools = $('.tools-col')

            // 切换
            $('.btn-wrap li').click(function() {
                var idx = $(this).index()
                window.localStorage.setItem(localKey, idx)
                $('.btn-wrap li').removeClass('chose')
                $(this).addClass('chose')
                $('.tools-section').removeClass('chose')
                $('.tools-wrap .tools-section').eq(idx).addClass('chose')
            })

            // 本地缓存
            var initIndex = parseInt(window.localStorage.getItem(localKey) || 0)
            triggerClk(initIndex)

            // about me
            var $about = $('.aboutme-wrap')
            var aboutStr = $about.html()
            $about.html(Util.decode(aboutStr))
        }

        function toggle() {
            $article.toggleClass('show')
            $tools.toggleClass('show')
        }

        function show(idx) {
            triggerClk(idx)
            $article.addClass('show')
            $tools.addClass('show')
        }

        function hide() {
            $article.removeClass('show')
            $tools.removeClass('show')
        }

        module.exports = {
            init : init,
            toggle: toggle,
            show: show,
            hide: hide
        }

        /***/ },
    /* 30 */
    /***/ function(module, exports) {

        var e = function() {
            function r(e, r, n) {
                return r || n ? String.fromCharCode(r || n) : u[e] || e
            }
            function n(e) {
                return p[e]
            }
            var t = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g
                , o = /['<> "&]/g
                , u = {
                "&quot;": '"',
                "&lt;": "<",
                "&gt;": ">",
                "&amp;": "&",
                "&nbsp;": " "
            }
                , c = /\u00a0/g
                , a = /<br\s*\/?>/gi
                , i = /\r?\n/g
                , f = /\s/g
                , p = {};
            for (var s in u)
                p[u[s]] = s;
            return u["&apos;"] = "'",
                p["'"] = "&#39;",
            {
                encode: function(e) {
                    return e ? ("" + e).replace(o, n).replace(i, "<br/>").replace(f, "&nbsp;") : ""
                },
                decode: function(e) {
                    return e ? ("" + e).replace(a, "\n").replace(t, r).replace(c, " ") : ""
                },
                encodeBase16: function(e) {
                    if (!e)
                        return e;
                    e += "";
                    for (var r = [], n = 0, t = e.length; t > n; n++)
                        r.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return r.join("")
                },
                encodeBase16forJSON: function(e) {
                    if (!e)
                        return e;
                    e = e.replace(/[\u4E00-\u9FBF]/gi, function(e) {
                        return escape(e).replace("%u", "\\u")
                    });
                    for (var r = [], n = 0, t = e.length; t > n; n++)
                        r.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return r.join("")
                },
                decodeBase16: function(e) {
                    if (!e)
                        return e;
                    e += "";
                    for (var r = [], n = 0, t = e.length; t > n; n += 2)
                        r.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
                    return r.join("")
                },
                encodeObject: function(r) {
                    if (r instanceof Array)
                        for (var n = 0, t = r.length; t > n; n++)
                            r[n] = e.encodeObject(r[n]);
                    else if ("object" == typeof r)
                        for (var o in r)
                            r[o] = e.encodeObject(r[o]);
                    else if ("string" == typeof r)
                        return e.encode(r);
                    return r
                }
            }
        }();

        module.exports = e

        /***/ },
    /* 31 */
    /***/ function(module, exports) {

        // 由于hexo分页不支持，手工美化

        function init() {
            var $nav = $('#page-nav')
            if (!$nav.find('.extend.prev').length) {
                $nav.prepend('<a class="extend prev disabled" rel="prev">&laquo; Prev</a>')
            }
            if (!$nav.find('.extend.next').length) {
                $nav.append('<a class="extend next disabled" rel="next">Next &raquo;</a>')
            }
        }

        module.exports = {
            init : init
        }

        /***/ },
    /* 32 */
    /***/ function(module, exports, __webpack_require__) {

        var Util = __webpack_require__(30)
        var _isShow = false;
        var $menu, $tag, $aboutme, $friends;
        var hasInnerArchive
        var ctn,radio,scaleW,idx,basicwrap;

        //第一步 -- 初始化
        var reset = function() {
            //设定窗口比率
            radio = document.body.scrollHeight/document.body.scrollWidth;
            //设定一页的宽度
            scaleW = document.body.scrollWidth;
            //设定初始的索引值
            idx = 0;
        };
        //第一步 -- 组合
        var combine = function(){
            if($tag){
                document.getElementById("js-mobile-tagcloud").innerHTML = $tag.innerHTML;
            }
            if($aboutme){
                document.getElementById("js-mobile-aboutme").innerHTML = Util.decode($aboutme.innerHTML);
            }
            if($friends){
                document.getElementById("js-mobile-friends").innerHTML = $friends.innerHTML;
            }
            document.getElementById("js-mobile-menu").innerHTML = $menu.innerHTML;
        }
        //第三步 -- 根据数据渲染DOM
        var renderDOM = function(){
            //生成节点
            var $viewer = document.createElement("div");
            $viewer.id = "viewer";
            $viewer.className = "hide";
            $menu = document.getElementsByClassName("header-menu")[0];
            $tag = document.getElementById("js-tagcloud");
            $aboutme = document.getElementById("js-aboutme");
            $friends = document.getElementById("js-friends");

            // 插入“全部文章”
            if (yiliaConfig && yiliaConfig.innerArchive) {
                var str = $('.js-smart-menu').first().html()
                $('.header-menu ul').append('<li><a href="/archives">' + str +'</a></li>')
            }

            var menuStr = '<span class="viewer-title">菜单</span><div class="viewer-div menu" id="js-mobile-menu"></div>'
            var tagStr = $tag?'<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"";
            var friendsStr = $friends?'<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"";
            var aboutmeStr = $aboutme?'<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";

            $viewer.innerHTML = '<div id="viewer-box">\
		<div class="viewer-box-l">\
			<div class="viewer-box-wrap">'+menuStr+aboutmeStr+friendsStr+tagStr+'</div>\
		</div>\
		<div class="viewer-box-r"></div>\
		</div>';

            //主要图片节点
            document.getElementsByTagName("body")[0].appendChild($viewer);
            var wrap = document.getElementById("viewer-box");
            basicwrap = wrap;
            wrap.style.height = document.body.scrollHeight + 'px';
        };

        var show = function(target, idx){
            document.getElementById("viewer").className = "";
            setTimeout(function(){
                basicwrap.className = "anm-swipe";
            },0);
            _isShow = true;
            document.ontouchstart=function(e){
                if(e.target.tagName != "A"){
                    return false;
                }
            }
        }

        var hide = function(){
            document.getElementById("viewer-box").className = "";
            _isShow = false;
            document.ontouchstart=function(){
                return true;
            }
        }

        //第四步 -- 绑定 DOM 事件
        var bindDOM = function(){
            var scaleW = scaleW;

            //滑动隐藏
            document.getElementById("viewer-box").addEventListener("webkitTransitionEnd", function(){

                if(_isShow == false){
                    document.getElementById("viewer").className = "hide";
                    _isShow = true;
                }else{
                }

            }, false);

            //点击展示和隐藏
            ctn.addEventListener("click", function(){
                show();
            }, false);

            var $right = document.getElementsByClassName("viewer-box-r")[0];
            var touchStartTime;
            var touchEndTime;
            $right.addEventListener("touchstart", function(){
                touchStartTime = + new Date();
            }, false);
            $right.addEventListener("touchend", function(){
                touchEndTime = + new Date();
                if(touchEndTime - touchStartTime < 300){
                    hide();
                }
                touchStartTime = 0;
                touchEndTime = 0;
            }, false);

            //滚动样式
            var $overlay = $("#mobile-nav .overlay");
            var $header = $(".js-mobile-header");
            window.onscroll = function(){
                var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
                if(scrollTop >= 69){
                    $overlay.addClass("fixed");
                }else{
                    $overlay.removeClass("fixed");
                }
                if(scrollTop >= 160){
                    $header.removeClass("hide").addClass("fixed");
                }else{
                    $header.addClass("hide").removeClass("fixed");
                }
            };
            $header[0].addEventListener("touchstart", function(){
                $('html, body').animate({scrollTop:0}, 'slow');
            }, false);
        };

        module.exports = {
            init: function(){
                //构造函数需要的参数
                ctn = document.getElementsByClassName("slider-trigger")[0];
                //构造四步
                reset();
                renderDOM();
                combine();
                bindDOM();
            }
        }

        /***/ },
    /* 33 */
    /***/ function(module, exports, __webpack_require__) {

        /*require('../fancybox/jquery.fancybox')
         require('../fancybox/jquery.fancybox.scss')

         var fancyInit = function(){
         var isFancy = $(".isFancy");
         if(isFancy.length != 0){
         var imgArr = $(".article-inner img");
         for(var i=0,len=imgArr.length;i<len;i++){
         var src = imgArr.eq(i).attr("src");
         var title = imgArr.eq(i).attr("alt");
         imgArr.eq(i).replaceWith("<a href='"+src+"' title='"+title+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+src+"' title='"+title+"'></a>");
         }
         $(".article-inner .fancy-ctn").fancybox();
         }
         }

         module.exports = {
         init: fancyInit
         }*/

        var PhotoSwipe = __webpack_require__(34)
        var PhotoSwipeUI_Default = __webpack_require__(35)
        __webpack_require__(36)
        __webpack_require__(41)

        window.PhotoSwipe = PhotoSwipe
        window.PhotoSwipeUI_Default = PhotoSwipeUI_Default

        module.exports = {
            init: function() {
                var pswpElement = document.querySelectorAll('.pswp')[0];
                var imgArr = $(".article-entry img");

                imgArr.click(function(e) {
                    // 再重置一遍，以防未加载完成
                    // TODO：不太好，后面优化
                    imgArr = $(".article-entry img");
                    var items = []
                    for(var i=0,len=imgArr.length;i<len;i++){
                        var img = imgArr.eq(i).attr('data-idx', i)
                        var src = img.attr("data-target") || img.attr("src");
                        var title = img.attr("alt");
                        items.push({
                            src: src,
                            w: img.width(),
                            h: img.height(),
                            title: title
                        })
                    }

                    var idx = $(this).attr('data-idx')
                    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
                        index: parseInt(idx)
                    });
                    gallery.init()
                })

            }
        }

        /***/ },
    /* 34 */
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.1 - 2015-12-24
         * http://photoswipe.com
         * Copyright (c) 2015 Dmitry Semenov; */
        (function (root, factory) {
            if (true) {
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === 'object') {
                module.exports = factory();
            } else {
                root.PhotoSwipe = factory();
            }
        })(this, function () {

            'use strict';
            var PhotoSwipe = function(template, UiClass, items, options){

                /*>>framework-bridge*/
                /**
                 *
                 * Set of generic functions used by gallery.
                 *
                 * You're free to modify anything here as long as functionality is kept.
                 *
                 */
                var framework = {
                    features: null,
                    bind: function(target, type, listener, unbind) {
                        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
                        type = type.split(' ');
                        for(var i = 0; i < type.length; i++) {
                            if(type[i]) {
                                target[methodName]( type[i], listener, false);
                            }
                        }
                    },
                    isArray: function(obj) {
                        return (obj instanceof Array);
                    },
                    createEl: function(classes, tag) {
                        var el = document.createElement(tag || 'div');
                        if(classes) {
                            el.className = classes;
                        }
                        return el;
                    },
                    getScrollY: function() {
                        var yOffset = window.pageYOffset;
                        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
                    },
                    unbind: function(target, type, listener) {
                        framework.bind(target,type,listener,true);
                    },
                    removeClass: function(el, className) {
                        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                    },
                    addClass: function(el, className) {
                        if( !framework.hasClass(el,className) ) {
                            el.className += (el.className ? ' ' : '') + className;
                        }
                    },
                    hasClass: function(el, className) {
                        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
                    },
                    getChildByClass: function(parentEl, childClassName) {
                        var node = parentEl.firstChild;
                        while(node) {
                            if( framework.hasClass(node, childClassName) ) {
                                return node;
                            }
                            node = node.nextSibling;
                        }
                    },
                    arraySearch: function(array, value, key) {
                        var i = array.length;
                        while(i--) {
                            if(array[i][key] === value) {
                                return i;
                            }
                        }
                        return -1;
                    },
                    extend: function(o1, o2, preventOverwrite) {
                        for (var prop in o2) {
                            if (o2.hasOwnProperty(prop)) {
                                if(preventOverwrite && o1.hasOwnProperty(prop)) {
                                    continue;
                                }
                                o1[prop] = o2[prop];
                            }
                        }
                    },
                    easing: {
                        sine: {
                            out: function(k) {
                                return Math.sin(k * (Math.PI / 2));
                            },
                            inOut: function(k) {
                                return - (Math.cos(Math.PI * k) - 1) / 2;
                            }
                        },
                        cubic: {
                            out: function(k) {
                                return --k * k * k + 1;
                            }
                        }
                        /*
                         elastic: {
                         out: function ( k ) {

                         var s, a = 0.1, p = 0.4;
                         if ( k === 0 ) return 0;
                         if ( k === 1 ) return 1;
                         if ( !a || a < 1 ) { a = 1; s = p / 4; }
                         else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                         return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

                         },
                         },
                         back: {
                         out: function ( k ) {
                         var s = 1.70158;
                         return --k * k * ( ( s + 1 ) * k + s ) + 1;
                         }
                         }
                         */
                    },

                    /**
                     *
                     * @return {object}
                     *
                     * {
		 *  raf : request animation frame function
		 *  caf : cancel animation frame function
		 *  transfrom : transform property key (with vendor), or null if not supported
		 *  oldIE : IE8 or below
		 * }
                     *
                     */
                    detectFeatures: function() {
                        if(framework.features) {
                            return framework.features;
                        }
                        var helperEl = framework.createEl(),
                            helperStyle = helperEl.style,
                            vendor = '',
                            features = {};

                        // IE8 and below
                        features.oldIE = document.all && !document.addEventListener;

                        features.touch = 'ontouchstart' in window;

                        if(window.requestAnimationFrame) {
                            features.raf = window.requestAnimationFrame;
                            features.caf = window.cancelAnimationFrame;
                        }

                        features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

                        // fix false-positive detection of old Android in new IE
                        // (IE11 ua string contains "Android 4.0")

                        if(!features.pointerEvent) {

                            var ua = navigator.userAgent;

                            // Detect if device is iPhone or iPod and if it's older than iOS 8
                            // http://stackoverflow.com/a/14223920
                            //
                            // This detection is made because of buggy top/bottom toolbars
                            // that don't trigger window.resize event.
                            // For more info refer to _isFixedPosition variable in core.js

                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                                if(v && v.length > 0) {
                                    v = parseInt(v[1], 10);
                                    if(v >= 1 && v < 8 ) {
                                        features.isOldIOSPhone = true;
                                    }
                                }
                            }

                            // Detect old Android (before KitKat)
                            // due to bugs related to position:fixed
                            // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

                            var match = ua.match(/Android\s([0-9\.]*)/);
                            var androidversion =  match ? match[1] : 0;
                            androidversion = parseFloat(androidversion);
                            if(androidversion >= 1 ) {
                                if(androidversion < 4.4) {
                                    features.isOldAndroid = true; // for fixed position bug & performance
                                }
                                features.androidVersion = androidversion; // for touchend bug
                            }
                            features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

                            // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
                        }

                        var styleChecks = ['transform', 'perspective', 'animationName'],
                            vendors = ['', 'webkit','Moz','ms','O'],
                            styleCheckItem,
                            styleName;

                        for(var i = 0; i < 4; i++) {
                            vendor = vendors[i];

                            for(var a = 0; a < 3; a++) {
                                styleCheckItem = styleChecks[a];

                                // uppercase first letter of property name, if vendor is present
                                styleName = vendor + (vendor ?
                                    styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                                        styleCheckItem);

                                if(!features[styleCheckItem] && styleName in helperStyle ) {
                                    features[styleCheckItem] = styleName;
                                }
                            }

                            if(vendor && !features.raf) {
                                vendor = vendor.toLowerCase();
                                features.raf = window[vendor+'RequestAnimationFrame'];
                                if(features.raf) {
                                    features.caf = window[vendor+'CancelAnimationFrame'] ||
                                        window[vendor+'CancelRequestAnimationFrame'];
                                }
                            }
                        }

                        if(!features.raf) {
                            var lastTime = 0;
                            features.raf = function(fn) {
                                var currTime = new Date().getTime();
                                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                                var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
                                lastTime = currTime + timeToCall;
                                return id;
                            };
                            features.caf = function(id) { clearTimeout(id); };
                        }

                        // Detect SVG support
                        features.svg = !!document.createElementNS &&
                            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

                        framework.features = features;

                        return features;
                    }
                };

                framework.detectFeatures();

                // Override addEventListener for old versions of IE
                if(framework.features.oldIE) {

                    framework.bind = function(target, type, listener, unbind) {

                        type = type.split(' ');

                        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
                            evName,
                            _handleEv = function() {
                                listener.handleEvent.call(listener);
                            };

                        for(var i = 0; i < type.length; i++) {
                            evName = type[i];
                            if(evName) {

                                if(typeof listener === 'object' && listener.handleEvent) {
                                    if(!unbind) {
                                        listener['oldIE' + evName] = _handleEv;
                                    } else {
                                        if(!listener['oldIE' + evName]) {
                                            return false;
                                        }
                                    }

                                    target[methodName]( 'on' + evName, listener['oldIE' + evName]);
                                } else {
                                    target[methodName]( 'on' + evName, listener);
                                }

                            }
                        }
                    };

                }

                /*>>framework-bridge*/

                /*>>core*/
                //function(template, UiClass, items, options)

                var self = this;

                /**
                 * Static vars, don't change unless you know what you're doing.
                 */
                var DOUBLE_TAP_RADIUS = 25,
                    NUM_HOLDERS = 3;

                /**
                 * Options
                 */
                var _options = {
                    allowPanToNext:true,
                    spacing: 0.12,
                    bgOpacity: 1,
                    mouseUsed: false,
                    loop: true,
                    pinchToClose: true,
                    closeOnScroll: true,
                    closeOnVerticalDrag: true,
                    verticalDragRange: 0.75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: false,
                    focus: true,
                    escKey: true,
                    arrowKeys: true,
                    mainScrollEndFriction: 0.35,
                    panEndFriction: 0.35,
                    isClickableElement: function(el) {
                        return el.tagName === 'A';
                    },
                    getDoubleTapZoom: function(isMouseClick, item) {
                        if(isMouseClick) {
                            return 1;
                        } else {
                            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
                        }
                    },
                    maxSpreadZoom: 1.33,
                    modal: true,

                    // not fully implemented yet
                    scaleMode: 'fit' // TODO
                };
                framework.extend(_options, options);


                /**
                 * Private helper variables & functions
                 */

                var _getEmptyPoint = function() {
                    return {x:0,y:0};
                };

                var _isOpen,
                    _isDestroying,
                    _closedByScroll,
                    _currentItemIndex,
                    _containerStyle,
                    _containerShiftIndex,
                    _currPanDist = _getEmptyPoint(),
                    _startPanOffset = _getEmptyPoint(),
                    _panOffset = _getEmptyPoint(),
                    _upMoveEvents, // drag move, drag end & drag cancel events array
                    _downEvents, // drag start events array
                    _globalEventHandlers,
                    _viewportSize = {},
                    _currZoomLevel,
                    _startZoomLevel,
                    _translatePrefix,
                    _translateSufix,
                    _updateSizeInterval,
                    _itemsNeedUpdate,
                    _currPositionIndex = 0,
                    _offset = {},
                    _slideSize = _getEmptyPoint(), // size of slide area, including spacing
                    _itemHolders,
                    _prevItemIndex,
                    _indexDiff = 0, // difference of indexes since last content update
                    _dragStartEvent,
                    _dragMoveEvent,
                    _dragEndEvent,
                    _dragCancelEvent,
                    _transformKey,
                    _pointerEventEnabled,
                    _isFixedPosition = true,
                    _likelyTouchDevice,
                    _modules = [],
                    _requestAF,
                    _cancelAF,
                    _initalClassName,
                    _initalWindowScrollY,
                    _oldIE,
                    _currentWindowScrollY,
                    _features,
                    _windowVisibleSize = {},
                    _renderMaxResolution = false,

                // Registers PhotoSWipe module (History, Controller ...)
                    _registerModule = function(name, module) {
                        framework.extend(self, module.publicMethods);
                        _modules.push(name);
                    },

                    _getLoopedId = function(index) {
                        var numSlides = _getNumItems();
                        if(index > numSlides - 1) {
                            return index - numSlides;
                        } else  if(index < 0) {
                            return numSlides + index;
                        }
                        return index;
                    },

                // Micro bind/trigger
                    _listeners = {},
                    _listen = function(name, fn) {
                        if(!_listeners[name]) {
                            _listeners[name] = [];
                        }
                        return _listeners[name].push(fn);
                    },
                    _shout = function(name) {
                        var listeners = _listeners[name];

                        if(listeners) {
                            var args = Array.prototype.slice.call(arguments);
                            args.shift();

                            for(var i = 0; i < listeners.length; i++) {
                                listeners[i].apply(self, args);
                            }
                        }
                    },

                    _getCurrentTime = function() {
                        return new Date().getTime();
                    },
                    _applyBgOpacity = function(opacity) {
                        _bgOpacity = opacity;
                        self.bg.style.opacity = opacity * _options.bgOpacity;
                    },

                    _applyZoomTransform = function(styleObj,x,y,zoom,item) {
                        if(!_renderMaxResolution || (item && item !== self.currItem) ) {
                            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
                        }

                        styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
                    },
                    _applyCurrentZoomPan = function( allowRenderResolution ) {
                        if(_currZoomElementStyle) {

                            if(allowRenderResolution) {
                                if(_currZoomLevel > self.currItem.fitRatio) {
                                    if(!_renderMaxResolution) {
                                        _setImageSize(self.currItem, false, true);
                                        _renderMaxResolution = true;
                                    }
                                } else {
                                    if(_renderMaxResolution) {
                                        _setImageSize(self.currItem);
                                        _renderMaxResolution = false;
                                    }
                                }
                            }


                            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
                        }
                    },
                    _applyZoomPanToItem = function(item) {
                        if(item.container) {

                            _applyZoomTransform(item.container.style,
                                item.initialPosition.x,
                                item.initialPosition.y,
                                item.initialZoomLevel,
                                item);
                        }
                    },
                    _setTranslateX = function(x, elStyle) {
                        elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
                    },
                    _moveMainScroll = function(x, dragging) {

                        if(!_options.loop && dragging) {
                            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                                delta = Math.round(x - _mainScrollPos.x);

                            if( (newSlideIndexOffset < 0 && delta > 0) ||
                                (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
                                x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
                            }
                        }

                        _mainScrollPos.x = x;
                        _setTranslateX(x, _containerStyle);
                    },
                    _calculatePanOffset = function(axis, zoomLevel) {
                        var m = _midZoomPoint[axis] - _offset[axis];
                        return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
                    },

                    _equalizePoints = function(p1, p2) {
                        p1.x = p2.x;
                        p1.y = p2.y;
                        if(p2.id) {
                            p1.id = p2.id;
                        }
                    },
                    _roundPoint = function(p) {
                        p.x = Math.round(p.x);
                        p.y = Math.round(p.y);
                    },

                    _mouseMoveTimeout = null,
                    _onFirstMouseMove = function() {
                        // Wait until mouse move event is fired at least twice during 100ms
                        // We do this, because some mobile browsers trigger it on touchstart
                        if(_mouseMoveTimeout ) {
                            framework.unbind(document, 'mousemove', _onFirstMouseMove);
                            framework.addClass(template, 'pswp--has_mouse');
                            _options.mouseUsed = true;
                            _shout('mouseUsed');
                        }
                        _mouseMoveTimeout = setTimeout(function() {
                            _mouseMoveTimeout = null;
                        }, 100);
                    },

                    _bindEvents = function() {
                        framework.bind(document, 'keydown', self);

                        if(_features.transform) {
                            // don't bind click event in browsers that don't support transform (mostly IE8)
                            framework.bind(self.scrollWrap, 'click', self);
                        }


                        if(!_options.mouseUsed) {
                            framework.bind(document, 'mousemove', _onFirstMouseMove);
                        }

                        framework.bind(window, 'resize scroll', self);

                        _shout('bindEvents');
                    },

                    _unbindEvents = function() {
                        framework.unbind(window, 'resize', self);
                        framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
                        framework.unbind(document, 'keydown', self);
                        framework.unbind(document, 'mousemove', _onFirstMouseMove);

                        if(_features.transform) {
                            framework.unbind(self.scrollWrap, 'click', self);
                        }

                        if(_isDragging) {
                            framework.unbind(window, _upMoveEvents, self);
                        }

                        _shout('unbindEvents');
                    },

                    _calculatePanBounds = function(zoomLevel, update) {
                        var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
                        if(update) {
                            _currPanBounds = bounds;
                        }
                        return bounds;
                    },

                    _getMinZoomLevel = function(item) {
                        if(!item) {
                            item = self.currItem;
                        }
                        return item.initialZoomLevel;
                    },
                    _getMaxZoomLevel = function(item) {
                        if(!item) {
                            item = self.currItem;
                        }
                        return item.w > 0 ? _options.maxSpreadZoom : 1;
                    },

                // Return true if offset is out of the bounds
                    _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
                        if(destZoomLevel === self.currItem.initialZoomLevel) {
                            destPanOffset[axis] = self.currItem.initialPosition[axis];
                            return true;
                        } else {
                            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

                            if(destPanOffset[axis] > destPanBounds.min[axis]) {
                                destPanOffset[axis] = destPanBounds.min[axis];
                                return true;
                            } else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
                                destPanOffset[axis] = destPanBounds.max[axis];
                                return true;
                            }
                        }
                        return false;
                    },

                    _setupTransforms = function() {

                        if(_transformKey) {
                            // setup 3d transforms
                            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
                            _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
                            _translateSufix = _features.perspective ? ', 0px)' : ')';
                            return;
                        }

                        // Override zoom/pan/move functions in case old browser is used (most likely IE)
                        // (so they use left/top/width/height, instead of CSS transform)

                        _transformKey = 'left';
                        framework.addClass(template, 'pswp--ie');

                        _setTranslateX = function(x, elStyle) {
                            elStyle.left = x + 'px';
                        };
                        _applyZoomPanToItem = function(item) {

                            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                s = item.container.style,
                                w = zoomRatio * item.w,
                                h = zoomRatio * item.h;

                            s.width = w + 'px';
                            s.height = h + 'px';
                            s.left = item.initialPosition.x + 'px';
                            s.top = item.initialPosition.y + 'px';

                        };
                        _applyCurrentZoomPan = function() {
                            if(_currZoomElementStyle) {

                                var s = _currZoomElementStyle,
                                    item = self.currItem,
                                    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                    w = zoomRatio * item.w,
                                    h = zoomRatio * item.h;

                                s.width = w + 'px';
                                s.height = h + 'px';


                                s.left = _panOffset.x + 'px';
                                s.top = _panOffset.y + 'px';
                            }

                        };
                    },

                    _onKeyDown = function(e) {
                        var keydownAction = '';
                        if(_options.escKey && e.keyCode === 27) {
                            keydownAction = 'close';
                        } else if(_options.arrowKeys) {
                            if(e.keyCode === 37) {
                                keydownAction = 'prev';
                            } else if(e.keyCode === 39) {
                                keydownAction = 'next';
                            }
                        }

                        if(keydownAction) {
                            // don't do anything if special key pressed to prevent from overriding default browser actions
                            // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                            if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
                                if(e.preventDefault) {
                                    e.preventDefault();
                                } else {
                                    e.returnValue = false;
                                }
                                self[keydownAction]();
                            }
                        }
                    },

                    _onGlobalClick = function(e) {
                        if(!e) {
                            return;
                        }

                        // don't allow click event to pass through when triggering after drag or some other gesture
                        if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    },

                    _updatePageScrollOffset = function() {
                        self.setScrollOffset(0, framework.getScrollY());
                    };







                // Micro animation engine
                var _animations = {},
                    _numAnimations = 0,
                    _stopAnimation = function(name) {
                        if(_animations[name]) {
                            if(_animations[name].raf) {
                                _cancelAF( _animations[name].raf );
                            }
                            _numAnimations--;
                            delete _animations[name];
                        }
                    },
                    _registerStartAnimation = function(name) {
                        if(_animations[name]) {
                            _stopAnimation(name);
                        }
                        if(!_animations[name]) {
                            _numAnimations++;
                            _animations[name] = {};
                        }
                    },
                    _stopAllAnimations = function() {
                        for (var prop in _animations) {

                            if( _animations.hasOwnProperty( prop ) ) {
                                _stopAnimation(prop);
                            }

                        }
                    },
                    _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
                        var startAnimTime = _getCurrentTime(), t;
                        _registerStartAnimation(name);

                        var animloop = function(){
                            if ( _animations[name] ) {

                                t = _getCurrentTime() - startAnimTime; // time diff
                                //b - beginning (start prop)
                                //d - anim duration

                                if ( t >= d ) {
                                    _stopAnimation(name);
                                    onUpdate(endProp);
                                    if(onComplete) {
                                        onComplete();
                                    }
                                    return;
                                }
                                onUpdate( (endProp - b) * easingFn(t/d) + b );

                                _animations[name].raf = _requestAF(animloop);
                            }
                        };
                        animloop();
                    };



                var publicMethods = {

                    // make a few local variables and functions public
                    shout: _shout,
                    listen: _listen,
                    viewportSize: _viewportSize,
                    options: _options,

                    isMainScrollAnimating: function() {
                        return _mainScrollAnimating;
                    },
                    getZoomLevel: function() {
                        return _currZoomLevel;
                    },
                    getCurrentIndex: function() {
                        return _currentItemIndex;
                    },
                    isDragging: function() {
                        return _isDragging;
                    },
                    isZooming: function() {
                        return _isZooming;
                    },
                    setScrollOffset: function(x,y) {
                        _offset.x = x;
                        _currentWindowScrollY = _offset.y = y;
                        _shout('updateScrollOffset', _offset);
                    },
                    applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
                        _panOffset.x = panX;
                        _panOffset.y = panY;
                        _currZoomLevel = zoomLevel;
                        _applyCurrentZoomPan( allowRenderResolution );
                    },

                    init: function() {

                        if(_isOpen || _isDestroying) {
                            return;
                        }

                        var i;

                        self.framework = framework; // basic functionality
                        self.template = template; // root DOM element of PhotoSwipe
                        self.bg = framework.getChildByClass(template, 'pswp__bg');

                        _initalClassName = template.className;
                        _isOpen = true;

                        _features = framework.detectFeatures();
                        _requestAF = _features.raf;
                        _cancelAF = _features.caf;
                        _transformKey = _features.transform;
                        _oldIE = _features.oldIE;

                        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
                        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

                        _containerStyle = self.container.style; // for fast access

                        // Objects that hold slides (there are only 3 in DOM)
                        self.itemHolders = _itemHolders = [
                            {el:self.container.children[0] , wrap:0, index: -1},
                            {el:self.container.children[1] , wrap:0, index: -1},
                            {el:self.container.children[2] , wrap:0, index: -1}
                        ];

                        // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
                        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

                        _setupTransforms();

                        // Setup global events
                        _globalEventHandlers = {
                            resize: self.updateSize,
                            scroll: _updatePageScrollOffset,
                            keydown: _onKeyDown,
                            click: _onGlobalClick
                        };

                        // disable show/hide effects on old browsers that don't support CSS animations or transforms,
                        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
                        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
                        if(!_features.animationName || !_features.transform || oldPhone) {
                            _options.showAnimationDuration = _options.hideAnimationDuration = 0;
                        }

                        // init modules
                        for(i = 0; i < _modules.length; i++) {
                            self['init' + _modules[i]]();
                        }

                        // init
                        if(UiClass) {
                            var ui = self.ui = new UiClass(self, framework);
                            ui.init();
                        }

                        _shout('firstUpdate');
                        _currentItemIndex = _currentItemIndex || _options.index || 0;
                        // validate index
                        if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
                            _currentItemIndex = 0;
                        }
                        self.currItem = _getItemAt( _currentItemIndex );


                        if(_features.isOldIOSPhone || _features.isOldAndroid) {
                            _isFixedPosition = false;
                        }

                        template.setAttribute('aria-hidden', 'false');
                        if(_options.modal) {
                            if(!_isFixedPosition) {
                                template.style.position = 'absolute';
                                template.style.top = framework.getScrollY() + 'px';
                            } else {
                                template.style.position = 'fixed';
                            }
                        }

                        if(_currentWindowScrollY === undefined) {
                            _shout('initialLayout');
                            _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
                        }

                        // add classes to root element of PhotoSwipe
                        var rootClasses = 'pswp--open ';
                        if(_options.mainClass) {
                            rootClasses += _options.mainClass + ' ';
                        }
                        if(_options.showHideOpacity) {
                            rootClasses += 'pswp--animate_opacity ';
                        }
                        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
                        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
                        rootClasses += _features.svg ? ' pswp--svg' : '';
                        framework.addClass(template, rootClasses);

                        self.updateSize();

                        // initial update
                        _containerShiftIndex = -1;
                        _indexDiff = null;
                        for(i = 0; i < NUM_HOLDERS; i++) {
                            _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
                        }

                        if(!_oldIE) {
                            framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
                        }

                        _listen('initialZoomInEnd', function() {
                            self.setContent(_itemHolders[0], _currentItemIndex-1);
                            self.setContent(_itemHolders[2], _currentItemIndex+1);

                            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

                            if(_options.focus) {
                                // focus causes layout,
                                // which causes lag during the animation,
                                // that's why we delay it untill the initial zoom transition ends
                                template.focus();
                            }


                            _bindEvents();
                        });

                        // set content for center slide (first time)
                        self.setContent(_itemHolders[1], _currentItemIndex);

                        self.updateCurrItem();

                        _shout('afterInit');

                        if(!_isFixedPosition) {

                            // On all versions of iOS lower than 8.0, we check size of viewport every second.
                            //
                            // This is done to detect when Safari top & bottom bars appear,
                            // as this action doesn't trigger any events (like resize).
                            //
                            // On iOS8 they fixed this.
                            //
                            // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

                            _updateSizeInterval = setInterval(function() {
                                if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
                                    self.updateSize();
                                }
                            }, 1000);
                        }

                        framework.addClass(template, 'pswp--visible');
                    },

                    // Close the gallery, then destroy it
                    close: function() {
                        if(!_isOpen) {
                            return;
                        }

                        _isOpen = false;
                        _isDestroying = true;
                        _shout('close');
                        _unbindEvents();

                        _showOrHide(self.currItem, null, true, self.destroy);
                    },

                    // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
                    destroy: function() {
                        _shout('destroy');

                        if(_showOrHideTimeout) {
                            clearTimeout(_showOrHideTimeout);
                        }

                        template.setAttribute('aria-hidden', 'true');
                        template.className = _initalClassName;

                        if(_updateSizeInterval) {
                            clearInterval(_updateSizeInterval);
                        }

                        framework.unbind(self.scrollWrap, _downEvents, self);

                        // we unbind scroll event at the end, as closing animation may depend on it
                        framework.unbind(window, 'scroll', self);

                        _stopDragUpdateLoop();

                        _stopAllAnimations();

                        _listeners = null;
                    },

                    /**
                     * Pan image to position
                     * @param {Number} x
                     * @param {Number} y
                     * @param {Boolean} force Will ignore bounds if set to true.
                     */
                    panTo: function(x,y,force) {
                        if(!force) {
                            if(x > _currPanBounds.min.x) {
                                x = _currPanBounds.min.x;
                            } else if(x < _currPanBounds.max.x) {
                                x = _currPanBounds.max.x;
                            }

                            if(y > _currPanBounds.min.y) {
                                y = _currPanBounds.min.y;
                            } else if(y < _currPanBounds.max.y) {
                                y = _currPanBounds.max.y;
                            }
                        }

                        _panOffset.x = x;
                        _panOffset.y = y;
                        _applyCurrentZoomPan();
                    },

                    handleEvent: function (e) {
                        e = e || window.event;
                        if(_globalEventHandlers[e.type]) {
                            _globalEventHandlers[e.type](e);
                        }
                    },


                    goTo: function(index) {

                        index = _getLoopedId(index);

                        var diff = index - _currentItemIndex;
                        _indexDiff = diff;

                        _currentItemIndex = index;
                        self.currItem = _getItemAt( _currentItemIndex );
                        _currPositionIndex -= diff;

                        _moveMainScroll(_slideSize.x * _currPositionIndex);


                        _stopAllAnimations();
                        _mainScrollAnimating = false;

                        self.updateCurrItem();
                    },
                    next: function() {
                        self.goTo( _currentItemIndex + 1);
                    },
                    prev: function() {
                        self.goTo( _currentItemIndex - 1);
                    },

                    // update current zoom/pan objects
                    updateCurrZoomItem: function(emulateSetContent) {
                        if(emulateSetContent) {
                            _shout('beforeChange', 0);
                        }

                        // itemHolder[1] is middle (current) item
                        if(_itemHolders[1].el.children.length) {
                            var zoomElement = _itemHolders[1].el.children[0];
                            if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
                                _currZoomElementStyle = zoomElement.style;
                            } else {
                                _currZoomElementStyle = null;
                            }
                        } else {
                            _currZoomElementStyle = null;
                        }

                        _currPanBounds = self.currItem.bounds;
                        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

                        _panOffset.x = _currPanBounds.center.x;
                        _panOffset.y = _currPanBounds.center.y;

                        if(emulateSetContent) {
                            _shout('afterChange');
                        }
                    },


                    invalidateCurrItems: function() {
                        _itemsNeedUpdate = true;
                        for(var i = 0; i < NUM_HOLDERS; i++) {
                            if( _itemHolders[i].item ) {
                                _itemHolders[i].item.needsUpdate = true;
                            }
                        }
                    },

                    updateCurrItem: function(beforeAnimation) {

                        if(_indexDiff === 0) {
                            return;
                        }

                        var diffAbs = Math.abs(_indexDiff),
                            tempHolder;

                        if(beforeAnimation && diffAbs < 2) {
                            return;
                        }


                        self.currItem = _getItemAt( _currentItemIndex );
                        _renderMaxResolution = false;

                        _shout('beforeChange', _indexDiff);

                        if(diffAbs >= NUM_HOLDERS) {
                            _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
                            diffAbs = NUM_HOLDERS;
                        }
                        for(var i = 0; i < diffAbs; i++) {
                            if(_indexDiff > 0) {
                                tempHolder = _itemHolders.shift();
                                _itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

                                _containerShiftIndex++;
                                _setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
                                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
                            } else {
                                tempHolder = _itemHolders.pop();
                                _itemHolders.unshift( tempHolder ); // move last to first

                                _containerShiftIndex--;
                                _setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
                                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
                            }

                        }

                        // reset zoom/pan on previous item
                        if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

                            var prevItem = _getItemAt(_prevItemIndex);
                            if(prevItem.initialZoomLevel !== _currZoomLevel) {
                                _calculateItemSize(prevItem , _viewportSize );
                                _setImageSize(prevItem);
                                _applyZoomPanToItem( prevItem );
                            }

                        }

                        // reset diff after update
                        _indexDiff = 0;

                        self.updateCurrZoomItem();

                        _prevItemIndex = _currentItemIndex;

                        _shout('afterChange');

                    },



                    updateSize: function(force) {

                        if(!_isFixedPosition && _options.modal) {
                            var windowScrollY = framework.getScrollY();
                            if(_currentWindowScrollY !== windowScrollY) {
                                template.style.top = windowScrollY + 'px';
                                _currentWindowScrollY = windowScrollY;
                            }
                            if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                                return;
                            }
                            _windowVisibleSize.x = window.innerWidth;
                            _windowVisibleSize.y = window.innerHeight;

                            //template.style.width = _windowVisibleSize.x + 'px';
                            template.style.height = _windowVisibleSize.y + 'px';
                        }



                        _viewportSize.x = self.scrollWrap.clientWidth;
                        _viewportSize.y = self.scrollWrap.clientHeight;

                        _updatePageScrollOffset();

                        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
                        _slideSize.y = _viewportSize.y;

                        _moveMainScroll(_slideSize.x * _currPositionIndex);

                        _shout('beforeResize'); // even may be used for example to switch image sources


                        // don't re-calculate size on inital size update
                        if(_containerShiftIndex !== undefined) {

                            var holder,
                                item,
                                hIndex;

                            for(var i = 0; i < NUM_HOLDERS; i++) {
                                holder = _itemHolders[i];
                                _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

                                hIndex = _currentItemIndex+i-1;

                                if(_options.loop && _getNumItems() > 2) {
                                    hIndex = _getLoopedId(hIndex);
                                }

                                // update zoom level on items and refresh source (if needsUpdate)
                                item = _getItemAt( hIndex );

                                // re-render gallery item if `needsUpdate`,
                                // or doesn't have `bounds` (entirely new slide object)
                                if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

                                    self.cleanSlide( item );

                                    self.setContent( holder, hIndex );

                                    // if "center" slide
                                    if(i === 1) {
                                        self.currItem = item;
                                        self.updateCurrZoomItem(true);
                                    }

                                    item.needsUpdate = false;

                                } else if(holder.index === -1 && hIndex >= 0) {
                                    // add content first time
                                    self.setContent( holder, hIndex );
                                }
                                if(item && item.container) {
                                    _calculateItemSize(item, _viewportSize);
                                    _setImageSize(item);
                                    _applyZoomPanToItem( item );
                                }

                            }
                            _itemsNeedUpdate = false;
                        }

                        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                        _currPanBounds = self.currItem.bounds;

                        if(_currPanBounds) {
                            _panOffset.x = _currPanBounds.center.x;
                            _panOffset.y = _currPanBounds.center.y;
                            _applyCurrentZoomPan( true );
                        }

                        _shout('resize');
                    },

                    // Zoom current item to
                    zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
                        /*
                         if(destZoomLevel === 'fit') {
                         destZoomLevel = self.currItem.fitRatio;
                         } else if(destZoomLevel === 'fill') {
                         destZoomLevel = self.currItem.fillRatio;
                         }
                         */

                        if(centerPoint) {
                            _startZoomLevel = _currZoomLevel;
                            _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
                            _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
                            _equalizePoints(_startPanOffset, _panOffset);
                        }

                        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
                            destPanOffset = {};

                        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
                        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

                        var initialZoomLevel = _currZoomLevel;
                        var initialPanOffset = {
                            x: _panOffset.x,
                            y: _panOffset.y
                        };

                        _roundPoint(destPanOffset);

                        var onUpdate = function(now) {
                            if(now === 1) {
                                _currZoomLevel = destZoomLevel;
                                _panOffset.x = destPanOffset.x;
                                _panOffset.y = destPanOffset.y;
                            } else {
                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
                            }

                            if(updateFn) {
                                updateFn(now);
                            }

                            _applyCurrentZoomPan( now === 1 );
                        };

                        if(speed) {
                            _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
                        } else {
                            onUpdate(1);
                        }
                    }


                };


                /*>>core*/

                /*>>gestures*/
                /**
                 * Mouse/touch/pointer event handlers.
                 *
                 * separated from @core.js for readability
                 */

                var MIN_SWIPE_DISTANCE = 30,
                    DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

                var _gestureStartTime,
                    _gestureCheckSpeedTime,

                // pool of objects that are used during dragging of zooming
                    p = {}, // first point
                    p2 = {}, // second point (for zoom gesture)
                    delta = {},
                    _currPoint = {},
                    _startPoint = {},
                    _currPointers = [],
                    _startMainScrollPos = {},
                    _releaseAnimData,
                    _posPoints = [], // array of points during dragging, used to determine type of gesture
                    _tempPoint = {},

                    _isZoomingIn,
                    _verticalDragInitiated,
                    _oldAndroidTouchEndTimeout,
                    _currZoomedItemIndex = 0,
                    _centerPoint = _getEmptyPoint(),
                    _lastReleaseTime = 0,
                    _isDragging, // at least one pointer is down
                    _isMultitouch, // at least two _pointers are down
                    _zoomStarted, // zoom level changed during zoom gesture
                    _moved,
                    _dragAnimFrame,
                    _mainScrollShifted,
                    _currentPoints, // array of current touch points
                    _isZooming,
                    _currPointsDistance,
                    _startPointsDistance,
                    _currPanBounds,
                    _mainScrollPos = _getEmptyPoint(),
                    _currZoomElementStyle,
                    _mainScrollAnimating, // true, if animation after swipe gesture is running
                    _midZoomPoint = _getEmptyPoint(),
                    _currCenterPoint = _getEmptyPoint(),
                    _direction,
                    _isFirstMove,
                    _opacityChanged,
                    _bgOpacity,
                    _wasOverInitialZoom,

                    _isEqualPoints = function(p1, p2) {
                        return p1.x === p2.x && p1.y === p2.y;
                    },
                    _isNearbyPoints = function(touch0, touch1) {
                        return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
                    },
                    _calculatePointsDistance = function(p1, p2) {
                        _tempPoint.x = Math.abs( p1.x - p2.x );
                        _tempPoint.y = Math.abs( p1.y - p2.y );
                        return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
                    },
                    _stopDragUpdateLoop = function() {
                        if(_dragAnimFrame) {
                            _cancelAF(_dragAnimFrame);
                            _dragAnimFrame = null;
                        }
                    },
                    _dragUpdateLoop = function() {
                        if(_isDragging) {
                            _dragAnimFrame = _requestAF(_dragUpdateLoop);
                            _renderMovement();
                        }
                    },
                    _canPan = function() {
                        return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
                    },

                // find the closest parent DOM element
                    _closestElement = function(el, fn) {
                        if(!el || el === document) {
                            return false;
                        }

                        // don't search elements above pswp__scroll-wrap
                        if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
                            return false;
                        }

                        if( fn(el) ) {
                            return el;
                        }

                        return _closestElement(el.parentNode, fn);
                    },

                    _preventObj = {},
                    _preventDefaultEventBehaviour = function(e, isDown) {
                        _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

                        _shout('preventDragEvent', e, isDown, _preventObj);
                        return _preventObj.prevent;

                    },
                    _convertTouchToPoint = function(touch, p) {
                        p.x = touch.pageX;
                        p.y = touch.pageY;
                        p.id = touch.identifier;
                        return p;
                    },
                    _findCenterOfPoints = function(p1, p2, pCenter) {
                        pCenter.x = (p1.x + p2.x) * 0.5;
                        pCenter.y = (p1.y + p2.y) * 0.5;
                    },
                    _pushPosPoint = function(time, x, y) {
                        if(time - _gestureCheckSpeedTime > 50) {
                            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
                            o.x = x;
                            o.y = y;
                            _posPoints.push(o);
                            _gestureCheckSpeedTime = time;
                        }
                    },

                    _calculateVerticalDragOpacityRatio = function() {
                        var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
                        return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
                    },


                // points pool, reused during touch events
                    _ePoint1 = {},
                    _ePoint2 = {},
                    _tempPointsArr = [],
                    _tempCounter,
                    _getTouchPoints = function(e) {
                        // clean up previous points, without recreating array
                        while(_tempPointsArr.length > 0) {
                            _tempPointsArr.pop();
                        }

                        if(!_pointerEventEnabled) {
                            if(e.type.indexOf('touch') > -1) {

                                if(e.touches && e.touches.length > 0) {
                                    _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                                    if(e.touches.length > 1) {
                                        _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                                    }
                                }

                            } else {
                                _ePoint1.x = e.pageX;
                                _ePoint1.y = e.pageY;
                                _ePoint1.id = '';
                                _tempPointsArr[0] = _ePoint1;//_ePoint1;
                            }
                        } else {
                            _tempCounter = 0;
                            // we can use forEach, as pointer events are supported only in modern browsers
                            _currPointers.forEach(function(p) {
                                if(_tempCounter === 0) {
                                    _tempPointsArr[0] = p;
                                } else if(_tempCounter === 1) {
                                    _tempPointsArr[1] = p;
                                }
                                _tempCounter++;

                            });
                        }
                        return _tempPointsArr;
                    },

                    _panOrMoveMainScroll = function(axis, delta) {

                        var panFriction,
                            overDiff = 0,
                            newOffset = _panOffset[axis] + delta[axis],
                            startOverDiff,
                            dir = delta[axis] > 0,
                            newMainScrollPosition = _mainScrollPos.x + delta.x,
                            mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
                            newPanPos,
                            newMainScrollPos;

                        // calculate fdistance over the bounds and friction
                        if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
                            panFriction = _options.panEndFriction;
                            // Linear increasing of friction, so at 1/4 of viewport it's at max value.
                            // Looks not as nice as was expected. Left for history.
                            // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
                        } else {
                            panFriction = 1;
                        }

                        newOffset = _panOffset[axis] + delta[axis] * panFriction;

                        // move main scroll or start panning
                        if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


                            if(!_currZoomElementStyle) {

                                newMainScrollPos = newMainScrollPosition;

                            } else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {

                                if(dir) {
                                    if(newOffset > _currPanBounds.min[axis]) {
                                        panFriction = _options.panEndFriction;
                                        overDiff = _currPanBounds.min[axis] - newOffset;
                                        startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                                    }

                                    // drag right
                                    if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
                                        newMainScrollPos = newMainScrollPosition;
                                        if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                                            newMainScrollPos = _startMainScrollPos.x;
                                        }
                                    } else {
                                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                            newPanPos = newOffset;
                                        }

                                    }

                                } else {

                                    if(newOffset < _currPanBounds.max[axis] ) {
                                        panFriction =_options.panEndFriction;
                                        overDiff = newOffset - _currPanBounds.max[axis];
                                        startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                                    }

                                    if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
                                        newMainScrollPos = newMainScrollPosition;

                                        if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                                            newMainScrollPos = _startMainScrollPos.x;
                                        }

                                    } else {
                                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                            newPanPos = newOffset;
                                        }
                                    }

                                }


                                //
                            }

                            if(axis === 'x') {

                                if(newMainScrollPos !== undefined) {
                                    _moveMainScroll(newMainScrollPos, true);
                                    if(newMainScrollPos === _startMainScrollPos.x) {
                                        _mainScrollShifted = false;
                                    } else {
                                        _mainScrollShifted = true;
                                    }
                                }

                                if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                    if(newPanPos !== undefined) {
                                        _panOffset.x = newPanPos;
                                    } else if(!_mainScrollShifted) {
                                        _panOffset.x += delta.x * panFriction;
                                    }
                                }

                                return newMainScrollPos !== undefined;
                            }

                        }

                        if(!_mainScrollAnimating) {

                            if(!_mainScrollShifted) {
                                if(_currZoomLevel > self.currItem.fitRatio) {
                                    _panOffset[axis] += delta[axis] * panFriction;

                                }
                            }


                        }

                    },

                // Pointerdown/touchstart/mousedown handler
                    _onDragStart = function(e) {

                        // Allow dragging only via left mouse button.
                        // As this handler is not added in IE8 - we ignore e.which
                        //
                        // http://www.quirksmode.org/js/events_properties.html
                        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
                        if(e.type === 'mousedown' && e.button > 0  ) {
                            return;
                        }

                        if(_initialZoomRunning) {
                            e.preventDefault();
                            return;
                        }

                        if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
                            return;
                        }

                        if(_preventDefaultEventBehaviour(e, true)) {
                            e.preventDefault();
                        }



                        _shout('pointerDown');

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                            if(pointerIndex < 0) {
                                pointerIndex = _currPointers.length;
                            }
                            _currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
                        }



                        var startPointsList = _getTouchPoints(e),
                            numPoints = startPointsList.length;

                        _currentPoints = null;

                        _stopAllAnimations();

                        // init drag
                        if(!_isDragging || numPoints === 1) {



                            _isDragging = _isFirstMove = true;
                            framework.bind(window, _upMoveEvents, self);

                            _isZoomingIn =
                                _wasOverInitialZoom =
                                    _opacityChanged =
                                        _verticalDragInitiated =
                                            _mainScrollShifted =
                                                _moved =
                                                    _isMultitouch =
                                                        _zoomStarted = false;

                            _direction = null;

                            _shout('firstTouchStart', startPointsList);

                            _equalizePoints(_startPanOffset, _panOffset);

                            _currPanDist.x = _currPanDist.y = 0;
                            _equalizePoints(_currPoint, startPointsList[0]);
                            _equalizePoints(_startPoint, _currPoint);

                            //_equalizePoints(_startMainScrollPos, _mainScrollPos);
                            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;

                            _posPoints = [{
                                x: _currPoint.x,
                                y: _currPoint.y
                            }];

                            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

                            //_mainScrollAnimationEnd(true);
                            _calculatePanBounds( _currZoomLevel, true );

                            // Start rendering
                            _stopDragUpdateLoop();
                            _dragUpdateLoop();

                        }

                        // init zoom
                        if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
                            _startZoomLevel = _currZoomLevel;
                            _zoomStarted = false; // true if zoom changed at least once

                            _isZooming = _isMultitouch = true;
                            _currPanDist.y = _currPanDist.x = 0;

                            _equalizePoints(_startPanOffset, _panOffset);

                            _equalizePoints(p, startPointsList[0]);
                            _equalizePoints(p2, startPointsList[1]);

                            _findCenterOfPoints(p, p2, _currCenterPoint);

                            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
                            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
                            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
                        }


                    },

                // Pointermove/touchmove/mousemove handler
                    _onDragMove = function(e) {

                        e.preventDefault();

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                            if(pointerIndex > -1) {
                                var p = _currPointers[pointerIndex];
                                p.x = e.pageX;
                                p.y = e.pageY;
                            }
                        }

                        if(_isDragging) {
                            var touchesList = _getTouchPoints(e);
                            if(!_direction && !_moved && !_isZooming) {

                                if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                                    // if main scroll position is shifted – direction is always horizontal
                                    _direction = 'h';
                                } else {
                                    var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                                    // check the direction of movement
                                    if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                                        _direction = diff > 0 ? 'h' : 'v';
                                        _currentPoints = touchesList;
                                    }
                                }

                            } else {
                                _currentPoints = touchesList;
                            }
                        }
                    },
                //
                    _renderMovement =  function() {

                        if(!_currentPoints) {
                            return;
                        }

                        var numPoints = _currentPoints.length;

                        if(numPoints === 0) {
                            return;
                        }

                        _equalizePoints(p, _currentPoints[0]);

                        delta.x = p.x - _currPoint.x;
                        delta.y = p.y - _currPoint.y;

                        if(_isZooming && numPoints > 1) {
                            // Handle behaviour for more than 1 point

                            _currPoint.x = p.x;
                            _currPoint.y = p.y;

                            // check if one of two points changed
                            if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
                                return;
                            }

                            _equalizePoints(p2, _currentPoints[1]);


                            if(!_zoomStarted) {
                                _zoomStarted = true;
                                _shout('zoomGestureStarted');
                            }

                            // Distance between two points
                            var pointsDistance = _calculatePointsDistance(p,p2);

                            var zoomLevel = _calculateZoomLevel(pointsDistance);

                            // slightly over the of initial zoom level
                            if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                                _wasOverInitialZoom = true;
                            }

                            // Apply the friction if zoom level is out of the bounds
                            var zoomFriction = 1,
                                minZoomLevel = _getMinZoomLevel(),
                                maxZoomLevel = _getMaxZoomLevel();

                            if ( zoomLevel < minZoomLevel ) {

                                if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                                    // fade out background if zooming out
                                    var minusDiff = minZoomLevel - zoomLevel;
                                    var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                                    _applyBgOpacity(percent);
                                    _shout('onPinchClose', percent);
                                    _opacityChanged = true;
                                } else {
                                    zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                                    if(zoomFriction > 1) {
                                        zoomFriction = 1;
                                    }
                                    zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                                }

                            } else if ( zoomLevel > maxZoomLevel ) {
                                // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                                zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
                                if(zoomFriction > 1) {
                                    zoomFriction = 1;
                                }
                                zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
                            }

                            if(zoomFriction < 0) {
                                zoomFriction = 0;
                            }

                            // distance between touch points after friction is applied
                            _currPointsDistance = pointsDistance;

                            // _centerPoint - The point in the middle of two pointers
                            _findCenterOfPoints(p, p2, _centerPoint);

                            // paning with two pointers pressed
                            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
                            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
                            _equalizePoints(_currCenterPoint, _centerPoint);

                            _panOffset.x = _calculatePanOffset('x', zoomLevel);
                            _panOffset.y = _calculatePanOffset('y', zoomLevel);

                            _isZoomingIn = zoomLevel > _currZoomLevel;
                            _currZoomLevel = zoomLevel;
                            _applyCurrentZoomPan();

                        } else {

                            // handle behaviour for one point (dragging or panning)

                            if(!_direction) {
                                return;
                            }

                            if(_isFirstMove) {
                                _isFirstMove = false;

                                // subtract drag distance that was used during the detection direction

                                if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                                    delta.x -= _currentPoints[0].x - _startPoint.x;
                                }

                                if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                                    delta.y -= _currentPoints[0].y - _startPoint.y;
                                }
                            }

                            _currPoint.x = p.x;
                            _currPoint.y = p.y;

                            // do nothing if pointers position hasn't changed
                            if(delta.x === 0 && delta.y === 0) {
                                return;
                            }

                            if(_direction === 'v' && _options.closeOnVerticalDrag) {
                                if(!_canPan()) {
                                    _currPanDist.y += delta.y;
                                    _panOffset.y += delta.y;

                                    var opacityRatio = _calculateVerticalDragOpacityRatio();

                                    _verticalDragInitiated = true;
                                    _shout('onVerticalDrag', opacityRatio);

                                    _applyBgOpacity(opacityRatio);
                                    _applyCurrentZoomPan();
                                    return ;
                                }
                            }

                            _pushPosPoint(_getCurrentTime(), p.x, p.y);

                            _moved = true;
                            _currPanBounds = self.currItem.bounds;

                            var mainScrollChanged = _panOrMoveMainScroll('x', delta);
                            if(!mainScrollChanged) {
                                _panOrMoveMainScroll('y', delta);

                                _roundPoint(_panOffset);
                                _applyCurrentZoomPan();
                            }

                        }

                    },

                // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
                    _onDragRelease = function(e) {

                        if(_features.isOldAndroid ) {

                            if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                                return;
                            }

                            // on Android (v4.1, 4.2, 4.3 & possibly older)
                            // ghost mousedown/up event isn't preventable via e.preventDefault,
                            // which causes fake mousedown event
                            // so we block mousedown/up for 600ms
                            if( e.type.indexOf('touch') > -1 ) {
                                clearTimeout(_oldAndroidTouchEndTimeout);
                                _oldAndroidTouchEndTimeout = setTimeout(function() {
                                    _oldAndroidTouchEndTimeout = 0;
                                }, 600);
                            }

                        }

                        _shout('pointerUp');

                        if(_preventDefaultEventBehaviour(e, false)) {
                            e.preventDefault();
                        }

                        var releasePoint;

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

                            if(pointerIndex > -1) {
                                releasePoint = _currPointers.splice(pointerIndex, 1)[0];

                                if(navigator.pointerEnabled) {
                                    releasePoint.type = e.pointerType || 'mouse';
                                } else {
                                    var MSPOINTER_TYPES = {
                                        4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                                        2: 'touch', // event.MSPOINTER_TYPE_TOUCH
                                        3: 'pen' // event.MSPOINTER_TYPE_PEN
                                    };
                                    releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                                    if(!releasePoint.type) {
                                        releasePoint.type = e.pointerType || 'mouse';
                                    }
                                }

                            }
                        }

                        var touchList = _getTouchPoints(e),
                            gestureType,
                            numPoints = touchList.length;

                        if(e.type === 'mouseup') {
                            numPoints = 0;
                        }

                        // Do nothing if there were 3 touch points or more
                        if(numPoints === 2) {
                            _currentPoints = null;
                            return true;
                        }

                        // if second pointer released
                        if(numPoints === 1) {
                            _equalizePoints(_startPoint, touchList[0]);
                        }


                        // pointer hasn't moved, send "tap release" point
                        if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
                            if(!releasePoint) {
                                if(e.type === 'mouseup') {
                                    releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
                                } else if(e.changedTouches && e.changedTouches[0]) {
                                    releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
                                }
                            }

                            _shout('touchRelease', e, releasePoint);
                        }

                        // Difference in time between releasing of two last touch points (zoom gesture)
                        var releaseTimeDiff = -1;

                        // Gesture completed, no pointers left
                        if(numPoints === 0) {
                            _isDragging = false;
                            framework.unbind(window, _upMoveEvents, self);

                            _stopDragUpdateLoop();

                            if(_isZooming) {
                                // Two points released at the same time
                                releaseTimeDiff = 0;
                            } else if(_lastReleaseTime !== -1) {
                                releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
                            }
                        }
                        _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

                        if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
                            gestureType = 'zoom';
                        } else {
                            gestureType = 'swipe';
                        }

                        if(_isZooming && numPoints < 2) {
                            _isZooming = false;

                            // Only second point released
                            if(numPoints === 1) {
                                gestureType = 'zoomPointerUp';
                            }
                            _shout('zoomGestureEnded');
                        }

                        _currentPoints = null;
                        if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
                            // nothing to animate
                            return;
                        }

                        _stopAllAnimations();


                        if(!_releaseAnimData) {
                            _releaseAnimData = _initDragReleaseAnimationData();
                        }

                        _releaseAnimData.calculateSwipeSpeed('x');


                        if(_verticalDragInitiated) {

                            var opacityRatio = _calculateVerticalDragOpacityRatio();

                            if(opacityRatio < _options.verticalDragRange) {
                                self.close();
                            } else {
                                var initalPanY = _panOffset.y,
                                    initialBgOpacity = _bgOpacity;

                                _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

                                    _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                                    _applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
                                    _applyCurrentZoomPan();
                                });

                                _shout('onVerticalDrag', 1);
                            }

                            return;
                        }


                        // main scroll
                        if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
                            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
                            if(itemChanged) {
                                return;
                            }
                            gestureType = 'zoomPointerUp';
                        }

                        // prevent zoom/pan animation when main scroll animation runs
                        if(_mainScrollAnimating) {
                            return;
                        }

                        // Complete simple zoom gesture (reset zoom level if it's out of the bounds)
                        if(gestureType !== 'swipe') {
                            _completeZoomGesture();
                            return;
                        }

                        // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
                        if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
                            _completePanGesture(_releaseAnimData);
                        }
                    },


                // Returns object with data about gesture
                // It's created only once and then reused
                    _initDragReleaseAnimationData  = function() {
                        // temp local vars
                        var lastFlickDuration,
                            tempReleasePos;

                        // s = this
                        var s = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio:  {},
                            slowDownRatioReverse:  {},
                            speedDecelerationRatio:  {},
                            speedDecelerationRatioAbs:  {},
                            distanceOffset:  {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function(axis) {


                                if( _posPoints.length > 1) {
                                    lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                                    tempReleasePos = _posPoints[_posPoints.length-2][axis];
                                } else {
                                    lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                                    tempReleasePos = _startPoint[axis];
                                }
                                s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                                s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                                if(s.lastFlickDist[axis] > 20) {
                                    s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                                } else {
                                    s.lastFlickSpeed[axis] = 0;
                                }
                                if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
                                    s.lastFlickSpeed[axis] = 0;
                                }

                                s.slowDownRatio[axis] = 0.95;
                                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                s.speedDecelerationRatio[axis] = 1;
                            },

                            calculateOverBoundsAnimOffset: function(axis, speed) {
                                if(!s.backAnimStarted[axis]) {

                                    if(_panOffset[axis] > _currPanBounds.min[axis]) {
                                        s.backAnimDestination[axis] = _currPanBounds.min[axis];

                                    } else if(_panOffset[axis] < _currPanBounds.max[axis]) {
                                        s.backAnimDestination[axis] = _currPanBounds.max[axis];
                                    }

                                    if(s.backAnimDestination[axis] !== undefined) {
                                        s.slowDownRatio[axis] = 0.7;
                                        s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                        if(s.speedDecelerationRatioAbs[axis] < 0.05) {

                                            s.lastFlickSpeed[axis] = 0;
                                            s.backAnimStarted[axis] = true;

                                            _animateProp('bounceZoomPan'+axis,_panOffset[axis],
                                                s.backAnimDestination[axis],
                                                speed || 300,
                                                framework.easing.sine.out,
                                                function(pos) {
                                                    _panOffset[axis] = pos;
                                                    _applyCurrentZoomPan();
                                                }
                                            );

                                        }
                                    }
                                }
                            },

                            // Reduces the speed by slowDownRatio (per 10ms)
                            calculateAnimOffset: function(axis) {
                                if(!s.backAnimStarted[axis]) {
                                    s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                        s.slowDownRatioReverse[axis] -
                                        s.slowDownRatioReverse[axis] * s.timeDiff / 10);

                                    s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                                    s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                                    _panOffset[axis] += s.distanceOffset[axis];

                                }
                            },

                            panAnimLoop: function() {
                                if ( _animations.zoomPan ) {
                                    _animations.zoomPan.raf = _requestAF(s.panAnimLoop);

                                    s.now = _getCurrentTime();
                                    s.timeDiff = s.now - s.lastNow;
                                    s.lastNow = s.now;

                                    s.calculateAnimOffset('x');
                                    s.calculateAnimOffset('y');

                                    _applyCurrentZoomPan();

                                    s.calculateOverBoundsAnimOffset('x');
                                    s.calculateOverBoundsAnimOffset('y');


                                    if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

                                        // round pan position
                                        _panOffset.x = Math.round(_panOffset.x);
                                        _panOffset.y = Math.round(_panOffset.y);
                                        _applyCurrentZoomPan();

                                        _stopAnimation('zoomPan');
                                        return;
                                    }
                                }

                            }
                        };
                        return s;
                    },

                    _completePanGesture = function(animData) {
                        // calculate swipe speed for Y axis (paanning)
                        animData.calculateSwipeSpeed('y');

                        _currPanBounds = self.currItem.bounds;

                        animData.backAnimDestination = {};
                        animData.backAnimStarted = {};

                        // Avoid acceleration animation if speed is too low
                        if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
                            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

                            // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
                            animData.calculateOverBoundsAnimOffset('x');
                            animData.calculateOverBoundsAnimOffset('y');
                            return true;
                        }

                        // Animation loop that controls the acceleration after pan gesture ends
                        _registerStartAnimation('zoomPan');
                        animData.lastNow = _getCurrentTime();
                        animData.panAnimLoop();
                    },


                    _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
                        var itemChanged;
                        if(!_mainScrollAnimating) {
                            _currZoomedItemIndex = _currentItemIndex;
                        }



                        var itemsDiff;

                        if(gestureType === 'swipe') {
                            var totalShiftDist = _currPoint.x - _startPoint.x,
                                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

                            // if container is shifted for more than MIN_SWIPE_DISTANCE,
                            // and last flick gesture was in right direction
                            if(totalShiftDist > MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
                                // go to prev item
                                itemsDiff = -1;
                            } else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
                                // go to next item
                                itemsDiff = 1;
                            }
                        }

                        var nextCircle;

                        if(itemsDiff) {

                            _currentItemIndex += itemsDiff;

                            if(_currentItemIndex < 0) {
                                _currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
                                nextCircle = true;
                            } else if(_currentItemIndex >= _getNumItems()) {
                                _currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
                                nextCircle = true;
                            }

                            if(!nextCircle || _options.loop) {
                                _indexDiff += itemsDiff;
                                _currPositionIndex -= itemsDiff;
                                itemChanged = true;
                            }



                        }

                        var animateToX = _slideSize.x * _currPositionIndex;
                        var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
                        var finishAnimDuration;


                        if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
                            // "return to current" duration, e.g. when dragging from slide 0 to -1
                            finishAnimDuration = 333;
                        } else {
                            finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                            animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                                333;

                            finishAnimDuration = Math.min(finishAnimDuration, 400);
                            finishAnimDuration = Math.max(finishAnimDuration, 250);
                        }

                        if(_currZoomedItemIndex === _currentItemIndex) {
                            itemChanged = false;
                        }

                        _mainScrollAnimating = true;

                        _shout('mainScrollAnimStart');

                        _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
                            _moveMainScroll,
                            function() {
                                _stopAllAnimations();
                                _mainScrollAnimating = false;
                                _currZoomedItemIndex = -1;

                                if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                                    self.updateCurrItem();
                                }

                                _shout('mainScrollAnimComplete');
                            }
                        );

                        if(itemChanged) {
                            self.updateCurrItem(true);
                        }

                        return itemChanged;
                    },

                    _calculateZoomLevel = function(touchesDistance) {
                        return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
                    },

                // Resets zoom if it's out of bounds
                    _completeZoomGesture = function() {
                        var destZoomLevel = _currZoomLevel,
                            minZoomLevel = _getMinZoomLevel(),
                            maxZoomLevel = _getMaxZoomLevel();

                        if ( _currZoomLevel < minZoomLevel ) {
                            destZoomLevel = minZoomLevel;
                        } else if ( _currZoomLevel > maxZoomLevel ) {
                            destZoomLevel = maxZoomLevel;
                        }

                        var destOpacity = 1,
                            onUpdate,
                            initialOpacity = _bgOpacity;

                        if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
                            //_closedByScroll = true;
                            self.close();
                            return true;
                        }

                        if(_opacityChanged) {
                            onUpdate = function(now) {
                                _applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
                            };
                        }

                        self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
                        return true;
                    };


                _registerModule('Gestures', {
                    publicMethods: {

                        initGestures: function() {

                            // helper function that builds touch/pointer/mouse events
                            var addEventNames = function(pref, down, move, up, cancel) {
                                _dragStartEvent = pref + down;
                                _dragMoveEvent = pref + move;
                                _dragEndEvent = pref + up;
                                if(cancel) {
                                    _dragCancelEvent = pref + cancel;
                                } else {
                                    _dragCancelEvent = '';
                                }
                            };

                            _pointerEventEnabled = _features.pointerEvent;
                            if(_pointerEventEnabled && _features.touch) {
                                // we don't need touch events, if browser supports pointer events
                                _features.touch = false;
                            }

                            if(_pointerEventEnabled) {
                                if(navigator.pointerEnabled) {
                                    addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                                } else {
                                    // IE10 pointer events are case-sensitive
                                    addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                                }
                            } else if(_features.touch) {
                                addEventNames('touch', 'start', 'move', 'end', 'cancel');
                                _likelyTouchDevice = true;
                            } else {
                                addEventNames('mouse', 'down', 'move', 'up');
                            }

                            _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
                            _downEvents = _dragStartEvent;

                            if(_pointerEventEnabled && !_likelyTouchDevice) {
                                _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
                            }
                            // make variable public
                            self.likelyTouchDevice = _likelyTouchDevice;

                            _globalEventHandlers[_dragStartEvent] = _onDragStart;
                            _globalEventHandlers[_dragMoveEvent] = _onDragMove;
                            _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

                            if(_dragCancelEvent) {
                                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
                            }

                            // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
                            if(_features.touch) {
                                _downEvents += ' mousedown';
                                _upMoveEvents += ' mousemove mouseup';
                                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
                            }

                            if(!_likelyTouchDevice) {
                                // don't allow pan to next slide from zoomed state on Desktop
                                _options.allowPanToNext = false;
                            }
                        }

                    }
                });


                /*>>gestures*/

                /*>>show-hide-transition*/
                /**
                 * show-hide-transition.js:
                 *
                 * Manages initial opening or closing transition.
                 *
                 * If you're not planning to use transition for gallery at all,
                 * you may set options hideAnimationDuration and showAnimationDuration to 0,
                 * and just delete startAnimation function.
                 *
                 */


                var _showOrHideTimeout,
                    _showOrHide = function(item, img, out, completeFn) {

                        if(_showOrHideTimeout) {
                            clearTimeout(_showOrHideTimeout);
                        }

                        _initialZoomRunning = true;
                        _initialContentSet = true;

                        // dimensions of small thumbnail {x:,y:,w:}.
                        // Height is optional, as calculated based on large image.
                        var thumbBounds;
                        if(item.initialLayout) {
                            thumbBounds = item.initialLayout;
                            item.initialLayout = null;
                        } else {
                            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                        }

                        var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

                        var onComplete = function() {
                            _stopAnimation('initialZoom');
                            if(!out) {
                                _applyBgOpacity(1);
                                if(img) {
                                    img.style.display = 'block';
                                }
                                framework.addClass(template, 'pswp--animated-in');
                                _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
                            } else {
                                self.template.removeAttribute('style');
                                self.bg.removeAttribute('style');
                            }

                            if(completeFn) {
                                completeFn();
                            }
                            _initialZoomRunning = false;
                        };

                        // if bounds aren't provided, just open gallery without animation
                        if(!duration || !thumbBounds || thumbBounds.x === undefined) {

                            _shout('initialZoom' + (out ? 'Out' : 'In') );

                            _currZoomLevel = item.initialZoomLevel;
                            _equalizePoints(_panOffset,  item.initialPosition );
                            _applyCurrentZoomPan();

                            template.style.opacity = out ? 0 : 1;
                            _applyBgOpacity(1);

                            if(duration) {
                                setTimeout(function() {
                                    onComplete();
                                }, duration);
                            } else {
                                onComplete();
                            }

                            return;
                        }

                        var startAnimation = function() {
                            var closeWithRaf = _closedByScroll,
                                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

                            // apply hw-acceleration to image
                            if(item.miniImg) {
                                item.miniImg.style.webkitBackfaceVisibility = 'hidden';
                            }

                            if(!out) {
                                _currZoomLevel = thumbBounds.w / item.w;
                                _panOffset.x = thumbBounds.x;
                                _panOffset.y = thumbBounds.y - _initalWindowScrollY;

                                self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                                _applyCurrentZoomPan();
                            }

                            _registerStartAnimation('initialZoom');

                            if(out && !closeWithRaf) {
                                framework.removeClass(template, 'pswp--animated-in');
                            }

                            if(fadeEverything) {
                                if(out) {
                                    framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
                                } else {
                                    setTimeout(function() {
                                        framework.addClass(template, 'pswp--animate_opacity');
                                    }, 30);
                                }
                            }

                            _showOrHideTimeout = setTimeout(function() {

                                _shout('initialZoom' + (out ? 'Out' : 'In') );


                                if(!out) {

                                    // "in" animation always uses CSS transitions (instead of rAF).
                                    // CSS transition work faster here,
                                    // as developer may also want to animate other things,
                                    // like ui on top of sliding area, which can be animated just via CSS

                                    _currZoomLevel = item.initialZoomLevel;
                                    _equalizePoints(_panOffset,  item.initialPosition );
                                    _applyCurrentZoomPan();
                                    _applyBgOpacity(1);

                                    if(fadeEverything) {
                                        template.style.opacity = 1;
                                    } else {
                                        _applyBgOpacity(1);
                                    }

                                    _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                                } else {

                                    // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                                    var destZoomLevel = thumbBounds.w / item.w,
                                        initialPanOffset = {
                                            x: _panOffset.x,
                                            y: _panOffset.y
                                        },
                                        initialZoomLevel = _currZoomLevel,
                                        initalBgOpacity = _bgOpacity,
                                        onUpdate = function(now) {

                                            if(now === 1) {
                                                _currZoomLevel = destZoomLevel;
                                                _panOffset.x = thumbBounds.x;
                                                _panOffset.y = thumbBounds.y  - _currentWindowScrollY;
                                            } else {
                                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                                            }

                                            _applyCurrentZoomPan();
                                            if(fadeEverything) {
                                                template.style.opacity = 1 - now;
                                            } else {
                                                _applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
                                            }
                                        };

                                    if(closeWithRaf) {
                                        _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                                    } else {
                                        onUpdate(1);
                                        _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                                    }
                                }

                            }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                            // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                            // Which avoids lag at the beginning of scale transition.
                        };
                        startAnimation();


                    };

                /*>>show-hide-transition*/

                /*>>items-controller*/
                /**
                 *
                 * Controller manages gallery items, their dimensions, and their content.
                 *
                 */

                var _items,
                    _tempPanAreaSize = {},
                    _imagesToAppendPool = [],
                    _initialContentSet,
                    _initialZoomRunning,
                    _controllerDefaultOptions = {
                        index: 0,
                        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                        forceProgressiveLoading: false, // TODO
                        preload: [1,1],
                        getNumItemsFn: function() {
                            return _items.length;
                        }
                    };


                var _getItemAt,
                    _getNumItems,
                    _initialIsLoop,
                    _getZeroBounds = function() {
                        return {
                            center:{x:0,y:0},
                            max:{x:0,y:0},
                            min:{x:0,y:0}
                        };
                    },
                    _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
                        var bounds = item.bounds;

                        // position of element when it's centered
                        bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
                        bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

                        // maximum pan position
                        bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                            Math.round(_tempPanAreaSize.x - realPanElementW) :
                            bounds.center.x;

                        bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                        Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                            bounds.center.y;

                        // minimum pan position
                        bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
                        bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
                    },
                    _calculateItemSize = function(item, viewportSize, zoomLevel) {

                        if (item.src && !item.loadError) {
                            var isInitial = !zoomLevel;

                            if(isInitial) {
                                if(!item.vGap) {
                                    item.vGap = {top:0,bottom:0};
                                }
                                // allows overriding vertical margin for individual items
                                _shout('parseVerticalMargin', item);
                            }


                            _tempPanAreaSize.x = viewportSize.x;
                            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

                            if (isInitial) {
                                var hRatio = _tempPanAreaSize.x / item.w;
                                var vRatio = _tempPanAreaSize.y / item.h;

                                item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                                //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

                                var scaleMode = _options.scaleMode;

                                if (scaleMode === 'orig') {
                                    zoomLevel = 1;
                                } else if (scaleMode === 'fit') {
                                    zoomLevel = item.fitRatio;
                                }

                                if (zoomLevel > 1) {
                                    zoomLevel = 1;
                                }

                                item.initialZoomLevel = zoomLevel;

                                if(!item.bounds) {
                                    // reuse bounds object
                                    item.bounds = _getZeroBounds();
                                }
                            }

                            if(!zoomLevel) {
                                return;
                            }

                            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

                            if (isInitial && zoomLevel === item.initialZoomLevel) {
                                item.initialPosition = item.bounds.center;
                            }

                            return item.bounds;
                        } else {
                            item.w = item.h = 0;
                            item.initialZoomLevel = item.fitRatio = 1;
                            item.bounds = _getZeroBounds();
                            item.initialPosition = item.bounds.center;

                            // if it's not image, we return zero bounds (content is not zoomable)
                            return item.bounds;
                        }

                    },




                    _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


                        if(item.loadError) {
                            return;
                        }

                        if(img) {

                            item.imageAppended = true;
                            _setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );

                            baseDiv.appendChild(img);

                            if(keepPlaceholder) {
                                setTimeout(function() {
                                    if(item && item.loaded && item.placeholder) {
                                        item.placeholder.style.display = 'none';
                                        item.placeholder = null;
                                    }
                                }, 500);
                            }
                        }
                    },



                    _preloadImage = function(item) {
                        item.loading = true;
                        item.loaded = false;
                        var img = item.img = framework.createEl('pswp__img', 'img');
                        var onComplete = function() {
                            item.loading = false;
                            item.loaded = true;

                            if(item.loadComplete) {
                                item.loadComplete(item);
                            } else {
                                item.img = null; // no need to store image object
                            }
                            img.onload = img.onerror = null;
                            img = null;
                        };
                        img.onload = onComplete;
                        img.onerror = function() {
                            item.loadError = true;
                            onComplete();
                        };

                        img.src = item.src;// + '?a=' + Math.random();

                        return img;
                    },
                    _checkForError = function(item, cleanUp) {
                        if(item.src && item.loadError && item.container) {

                            if(cleanUp) {
                                item.container.innerHTML = '';
                            }

                            item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
                            return true;

                        }
                    },
                    _setImageSize = function(item, img, maxRes) {
                        if(!item.src) {
                            return;
                        }

                        if(!img) {
                            img = item.container.lastChild;
                        }

                        var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
                            h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

                        if(item.placeholder && !item.loaded) {
                            item.placeholder.style.width = w + 'px';
                            item.placeholder.style.height = h + 'px';
                        }

                        img.style.width = w + 'px';
                        img.style.height = h + 'px';
                    },
                    _appendImagesPool = function() {

                        if(_imagesToAppendPool.length) {
                            var poolItem;

                            for(var i = 0; i < _imagesToAppendPool.length; i++) {
                                poolItem = _imagesToAppendPool[i];
                                if( poolItem.holder.index === poolItem.index ) {
                                    _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                                }
                            }
                            _imagesToAppendPool = [];
                        }
                    };



                _registerModule('Controller', {

                    publicMethods: {

                        lazyLoadItem: function(index) {
                            index = _getLoopedId(index);
                            var item = _getItemAt(index);

                            if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                                return;
                            }

                            _shout('gettingData', index, item);

                            if (!item.src) {
                                return;
                            }

                            _preloadImage(item);
                        },
                        initController: function() {
                            framework.extend(_options, _controllerDefaultOptions, true);
                            self.items = _items = items;
                            _getItemAt = self.getItemAt;
                            _getNumItems = _options.getNumItemsFn; //self.getNumItems;



                            _initialIsLoop = _options.loop;
                            if(_getNumItems() < 3) {
                                _options.loop = false; // disable loop if less then 3 items
                            }

                            _listen('beforeChange', function(diff) {

                                var p = _options.preload,
                                    isNext = diff === null ? true : (diff >= 0),
                                    preloadBefore = Math.min(p[0], _getNumItems() ),
                                    preloadAfter = Math.min(p[1], _getNumItems() ),
                                    i;


                                for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                                    self.lazyLoadItem(_currentItemIndex+i);
                                }
                                for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                                    self.lazyLoadItem(_currentItemIndex-i);
                                }
                            });

                            _listen('initialLayout', function() {
                                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                            });

                            _listen('mainScrollAnimComplete', _appendImagesPool);
                            _listen('initialZoomInEnd', _appendImagesPool);



                            _listen('destroy', function() {
                                var item;
                                for(var i = 0; i < _items.length; i++) {
                                    item = _items[i];
                                    // remove reference to DOM elements, for GC
                                    if(item.container) {
                                        item.container = null;
                                    }
                                    if(item.placeholder) {
                                        item.placeholder = null;
                                    }
                                    if(item.img) {
                                        item.img = null;
                                    }
                                    if(item.preloader) {
                                        item.preloader = null;
                                    }
                                    if(item.loadError) {
                                        item.loaded = item.loadError = false;
                                    }
                                }
                                _imagesToAppendPool = null;
                            });
                        },


                        getItemAt: function(index) {
                            if (index >= 0) {
                                return _items[index] !== undefined ? _items[index] : false;
                            }
                            return false;
                        },

                        allowProgressiveImg: function() {
                            // 1. Progressive image loading isn't working on webkit/blink
                            //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
                            //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
                            //
                            // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
                            //    That's why it's disabled on touch devices (mainly because of swipe transition)
                            //
                            // 3. Progressive image loading sometimes doesn't work in IE (up to 11).

                            // Don't allow progressive loading on non-large touch devices
                            return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
                            // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
                        },

                        setContent: function(holder, index) {

                            if(_options.loop) {
                                index = _getLoopedId(index);
                            }

                            var prevItem = self.getItemAt(holder.index);
                            if(prevItem) {
                                prevItem.container = null;
                            }

                            var item = self.getItemAt(index),
                                img;

                            if(!item) {
                                holder.el.innerHTML = '';
                                return;
                            }

                            // allow to override data
                            _shout('gettingData', index, item);

                            holder.index = index;
                            holder.item = item;

                            // base container DIV is created only once for each of 3 holders
                            var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



                            if(!item.src && item.html) {
                                if(item.html.tagName) {
                                    baseDiv.appendChild(item.html);
                                } else {
                                    baseDiv.innerHTML = item.html;
                                }
                            }

                            _checkForError(item);

                            _calculateItemSize(item, _viewportSize);

                            if(item.src && !item.loadError && !item.loaded) {

                                item.loadComplete = function(item) {

                                    // gallery closed before image finished loading
                                    if(!_isOpen) {
                                        return;
                                    }

                                    // check if holder hasn't changed while image was loading
                                    if(holder && holder.index === index ) {
                                        if( _checkForError(item, true) ) {
                                            item.loadComplete = item.img = null;
                                            _calculateItemSize(item, _viewportSize);
                                            _applyZoomPanToItem(item);

                                            if(holder.index === _currentItemIndex) {
                                                // recalculate dimensions
                                                self.updateCurrZoomItem();
                                            }
                                            return;
                                        }
                                        if( !item.imageAppended ) {
                                            if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
                                                _imagesToAppendPool.push({
                                                    item:item,
                                                    baseDiv:baseDiv,
                                                    img:item.img,
                                                    index:index,
                                                    holder:holder,
                                                    clearPlaceholder:true
                                                });
                                            } else {
                                                _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                                            }
                                        } else {
                                            // remove preloader & mini-img
                                            if(!_initialZoomRunning && item.placeholder) {
                                                item.placeholder.style.display = 'none';
                                                item.placeholder = null;
                                            }
                                        }
                                    }

                                    item.loadComplete = null;
                                    item.img = null; // no need to store image element after it's added

                                    _shout('imageLoadComplete', index, item);
                                };

                                if(framework.features.transform) {

                                    var placeholderClassName = 'pswp__img pswp__img--placeholder';
                                    placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

                                    var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                                    if(item.msrc) {
                                        placeholder.src = item.msrc;
                                    }

                                    _setImageSize(item, placeholder);

                                    baseDiv.appendChild(placeholder);
                                    item.placeholder = placeholder;

                                }




                                if(!item.loading) {
                                    _preloadImage(item);
                                }


                                if( self.allowProgressiveImg() ) {
                                    // just append image
                                    if(!_initialContentSet && _features.transform) {
                                        _imagesToAppendPool.push({
                                            item:item,
                                            baseDiv:baseDiv,
                                            img:item.img,
                                            index:index,
                                            holder:holder
                                        });
                                    } else {
                                        _appendImage(index, item, baseDiv, item.img, true, true);
                                    }
                                }

                            } else if(item.src && !item.loadError) {
                                // image object is created every time, due to bugs of image loading & delay when switching images
                                img = framework.createEl('pswp__img', 'img');
                                img.style.opacity = 1;
                                img.src = item.src;
                                _setImageSize(item, img);
                                _appendImage(index, item, baseDiv, img, true);
                            }


                            if(!_initialContentSet && index === _currentItemIndex) {
                                _currZoomElementStyle = baseDiv.style;
                                _showOrHide(item, (img ||item.img) );
                            } else {
                                _applyZoomPanToItem(item);
                            }

                            holder.el.innerHTML = '';
                            holder.el.appendChild(baseDiv);
                        },

                        cleanSlide: function( item ) {
                            if(item.img ) {
                                item.img.onload = item.img.onerror = null;
                            }
                            item.loaded = item.loading = item.img = item.imageAppended = false;
                        }

                    }
                });

                /*>>items-controller*/

                /*>>tap*/
                /**
                 * tap.js:
                 *
                 * Displatches tap and double-tap events.
                 *
                 */

                var tapTimer,
                    tapReleasePoint = {},
                    _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
                        var e = document.createEvent( 'CustomEvent' ),
                            eDetail = {
                                origEvent:origEvent,
                                target:origEvent.target,
                                releasePoint: releasePoint,
                                pointerType:pointerType || 'touch'
                            };

                        e.initCustomEvent( 'pswpTap', true, true, eDetail );
                        origEvent.target.dispatchEvent(e);
                    };

                _registerModule('Tap', {
                    publicMethods: {
                        initTap: function() {
                            _listen('firstTouchStart', self.onTapStart);
                            _listen('touchRelease', self.onTapRelease);
                            _listen('destroy', function() {
                                tapReleasePoint = {};
                                tapTimer = null;
                            });
                        },
                        onTapStart: function(touchList) {
                            if(touchList.length > 1) {
                                clearTimeout(tapTimer);
                                tapTimer = null;
                            }
                        },
                        onTapRelease: function(e, releasePoint) {
                            if(!releasePoint) {
                                return;
                            }

                            if(!_moved && !_isMultitouch && !_numAnimations) {
                                var p0 = releasePoint;
                                if(tapTimer) {
                                    clearTimeout(tapTimer);
                                    tapTimer = null;

                                    // Check if taped on the same place
                                    if ( _isNearbyPoints(p0, tapReleasePoint) ) {
                                        _shout('doubleTap', p0);
                                        return;
                                    }
                                }

                                if(releasePoint.type === 'mouse') {
                                    _dispatchTapEvent(e, releasePoint, 'mouse');
                                    return;
                                }

                                var clickedTagName = e.target.tagName.toUpperCase();
                                // avoid double tap delay on buttons and elements that have class pswp__single-tap
                                if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
                                    _dispatchTapEvent(e, releasePoint);
                                    return;
                                }

                                _equalizePoints(tapReleasePoint, p0);

                                tapTimer = setTimeout(function() {
                                    _dispatchTapEvent(e, releasePoint);
                                    tapTimer = null;
                                }, 300);
                            }
                        }
                    }
                });

                /*>>tap*/

                /*>>desktop-zoom*/
                /**
                 *
                 * desktop-zoom.js:
                 *
                 * - Binds mousewheel event for paning zoomed image.
                 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
                 *   (which are used for cursors and zoom icon)
                 * - Adds toggleDesktopZoom function.
                 *
                 */

                var _wheelDelta;

                _registerModule('DesktopZoom', {

                    publicMethods: {

                        initDesktopZoom: function() {

                            if(_oldIE) {
                                // no zoom for old IE (<=8)
                                return;
                            }

                            if(_likelyTouchDevice) {
                                // if detected hardware touch support, we wait until mouse is used,
                                // and only then apply desktop-zoom features
                                _listen('mouseUsed', function() {
                                    self.setupDesktopZoom();
                                });
                            } else {
                                self.setupDesktopZoom(true);
                            }

                        },

                        setupDesktopZoom: function(onInit) {

                            _wheelDelta = {};

                            var events = 'wheel mousewheel DOMMouseScroll';

                            _listen('bindEvents', function() {
                                framework.bind(template, events,  self.handleMouseWheel);
                            });

                            _listen('unbindEvents', function() {
                                if(_wheelDelta) {
                                    framework.unbind(template, events, self.handleMouseWheel);
                                }
                            });

                            self.mouseZoomedIn = false;

                            var hasDraggingClass,
                                updateZoomable = function() {
                                    if(self.mouseZoomedIn) {
                                        framework.removeClass(template, 'pswp--zoomed-in');
                                        self.mouseZoomedIn = false;
                                    }
                                    if(_currZoomLevel < 1) {
                                        framework.addClass(template, 'pswp--zoom-allowed');
                                    } else {
                                        framework.removeClass(template, 'pswp--zoom-allowed');
                                    }
                                    removeDraggingClass();
                                },
                                removeDraggingClass = function() {
                                    if(hasDraggingClass) {
                                        framework.removeClass(template, 'pswp--dragging');
                                        hasDraggingClass = false;
                                    }
                                };

                            _listen('resize' , updateZoomable);
                            _listen('afterChange' , updateZoomable);
                            _listen('pointerDown', function() {
                                if(self.mouseZoomedIn) {
                                    hasDraggingClass = true;
                                    framework.addClass(template, 'pswp--dragging');
                                }
                            });
                            _listen('pointerUp', removeDraggingClass);

                            if(!onInit) {
                                updateZoomable();
                            }

                        },

                        handleMouseWheel: function(e) {

                            if(_currZoomLevel <= self.currItem.fitRatio) {
                                if( _options.modal ) {

                                    if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                                        e.preventDefault();
                                    } else if(_transformKey && Math.abs(e.deltaY) > 2) {
                                        // close PhotoSwipe
                                        // if browser supports transforms & scroll changed enough
                                        _closedByScroll = true;
                                        self.close();
                                    }

                                }
                                return true;
                            }

                            // allow just one event to fire
                            e.stopPropagation();

                            // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
                            _wheelDelta.x = 0;

                            if('deltaX' in e) {
                                if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                                    // 18 - average line height
                                    _wheelDelta.x = e.deltaX * 18;
                                    _wheelDelta.y = e.deltaY * 18;
                                } else {
                                    _wheelDelta.x = e.deltaX;
                                    _wheelDelta.y = e.deltaY;
                                }
                            } else if('wheelDelta' in e) {
                                if(e.wheelDeltaX) {
                                    _wheelDelta.x = -0.16 * e.wheelDeltaX;
                                }
                                if(e.wheelDeltaY) {
                                    _wheelDelta.y = -0.16 * e.wheelDeltaY;
                                } else {
                                    _wheelDelta.y = -0.16 * e.wheelDelta;
                                }
                            } else if('detail' in e) {
                                _wheelDelta.y = e.detail;
                            } else {
                                return;
                            }

                            _calculatePanBounds(_currZoomLevel, true);

                            var newPanX = _panOffset.x - _wheelDelta.x,
                                newPanY = _panOffset.y - _wheelDelta.y;

                            // only prevent scrolling in nonmodal mode when not at edges
                            if (_options.modal ||
                                (
                                    newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                                    newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                                ) ) {
                                e.preventDefault();
                            }

                            // TODO: use rAF instead of mousewheel?
                            self.panTo(newPanX, newPanY);
                        },

                        toggleDesktopZoom: function(centerPoint) {
                            centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

                            var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
                            var zoomOut = _currZoomLevel === doubleTapZoomLevel;

                            self.mouseZoomedIn = !zoomOut;

                            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                            framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                        }

                    }
                });


                /*>>desktop-zoom*/

                /*>>history*/
                /**
                 *
                 * history.js:
                 *
                 * - Back button to close gallery.
                 *
                 * - Unique URL for each slide: example.com/&pid=1&gid=3
                 *   (where PID is picture index, and GID and gallery index)
                 *
                 * - Switch URL when slides change.
                 *
                 */


                var _historyDefaultOptions = {
                    history: true,
                    galleryUID: 1
                };

                var _historyUpdateTimeout,
                    _hashChangeTimeout,
                    _hashAnimCheckTimeout,
                    _hashChangedByScript,
                    _hashChangedByHistory,
                    _hashReseted,
                    _initialHash,
                    _historyChanged,
                    _closedFromURL,
                    _urlChangedOnce,
                    _windowLoc,

                    _supportsPushState,

                    _getHash = function() {
                        return _windowLoc.hash.substring(1);
                    },
                    _cleanHistoryTimeouts = function() {

                        if(_historyUpdateTimeout) {
                            clearTimeout(_historyUpdateTimeout);
                        }

                        if(_hashAnimCheckTimeout) {
                            clearTimeout(_hashAnimCheckTimeout);
                        }
                    },

                // pid - Picture index
                // gid - Gallery index
                    _parseItemIndexFromURL = function() {
                        var hash = _getHash(),
                            params = {};

                        if(hash.length < 5) { // pid=1
                            return params;
                        }

                        var i, vars = hash.split('&');
                        for (i = 0; i < vars.length; i++) {
                            if(!vars[i]) {
                                continue;
                            }
                            var pair = vars[i].split('=');
                            if(pair.length < 2) {
                                continue;
                            }
                            params[pair[0]] = pair[1];
                        }
                        if(_options.galleryPIDs) {
                            // detect custom pid in hash and search for it among the items collection
                            var searchfor = params.pid;
                            params.pid = 0; // if custom pid cannot be found, fallback to the first item
                            for(i = 0; i < _items.length; i++) {
                                if(_items[i].pid === searchfor) {
                                    params.pid = i;
                                    break;
                                }
                            }
                        } else {
                            params.pid = parseInt(params.pid,10)-1;
                        }
                        if( params.pid < 0 ) {
                            params.pid = 0;
                        }
                        return params;
                    },
                    _updateHash = function() {

                        if(_hashAnimCheckTimeout) {
                            clearTimeout(_hashAnimCheckTimeout);
                        }


                        if(_numAnimations || _isDragging) {
                            // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
                            // that's why we update hash only when no animations running
                            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
                            return;
                        }

                        if(_hashChangedByScript) {
                            clearTimeout(_hashChangeTimeout);
                        } else {
                            _hashChangedByScript = true;
                        }


                        var pid = (_currentItemIndex + 1);
                        var item = _getItemAt( _currentItemIndex );
                        if(item.hasOwnProperty('pid')) {
                            // carry forward any custom pid assigned to the item
                            pid = item.pid;
                        }
                        var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

                        if(!_historyChanged) {
                            if(_windowLoc.hash.indexOf(newHash) === -1) {
                                _urlChangedOnce = true;
                            }
                            // first time - add new hisory record, then just replace
                        }

                        var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

                        if( _supportsPushState ) {

                            if('#' + newHash !== window.location.hash) {
                                history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
                            }

                        } else {
                            if(_historyChanged) {
                                _windowLoc.replace( newURL );
                            } else {
                                _windowLoc.hash = newHash;
                            }
                        }



                        _historyChanged = true;
                        _hashChangeTimeout = setTimeout(function() {
                            _hashChangedByScript = false;
                        }, 60);
                    };





                _registerModule('History', {



                    publicMethods: {
                        initHistory: function() {

                            framework.extend(_options, _historyDefaultOptions, true);

                            if( !_options.history ) {
                                return;
                            }


                            _windowLoc = window.location;
                            _urlChangedOnce = false;
                            _closedFromURL = false;
                            _historyChanged = false;
                            _initialHash = _getHash();
                            _supportsPushState = ('pushState' in history);


                            if(_initialHash.indexOf('gid=') > -1) {
                                _initialHash = _initialHash.split('&gid=')[0];
                                _initialHash = _initialHash.split('?gid=')[0];
                            }


                            _listen('afterChange', self.updateURL);
                            _listen('unbindEvents', function() {
                                framework.unbind(window, 'hashchange', self.onHashChange);
                            });


                            var returnToOriginal = function() {
                                _hashReseted = true;
                                if(!_closedFromURL) {

                                    if(_urlChangedOnce) {
                                        history.back();
                                    } else {

                                        if(_initialHash) {
                                            _windowLoc.hash = _initialHash;
                                        } else {
                                            if (_supportsPushState) {

                                                // remove hash from url without refreshing it or scrolling to top
                                                history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
                                            } else {
                                                _windowLoc.hash = '';
                                            }
                                        }
                                    }

                                }

                                _cleanHistoryTimeouts();
                            };


                            _listen('unbindEvents', function() {
                                if(_closedByScroll) {
                                    // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                                    // this is done to keep the scroll position
                                    returnToOriginal();
                                }
                            });
                            _listen('destroy', function() {
                                if(!_hashReseted) {
                                    returnToOriginal();
                                }
                            });
                            _listen('firstUpdate', function() {
                                _currentItemIndex = _parseItemIndexFromURL().pid;
                            });




                            var index = _initialHash.indexOf('pid=');
                            if(index > -1) {
                                _initialHash = _initialHash.substring(0, index);
                                if(_initialHash.slice(-1) === '&') {
                                    _initialHash = _initialHash.slice(0, -1);
                                }
                            }


                            setTimeout(function() {
                                if(_isOpen) { // hasn't destroyed yet
                                    framework.bind(window, 'hashchange', self.onHashChange);
                                }
                            }, 40);

                        },
                        onHashChange: function() {

                            if(_getHash() === _initialHash) {

                                _closedFromURL = true;
                                self.close();
                                return;
                            }
                            if(!_hashChangedByScript) {

                                _hashChangedByHistory = true;
                                self.goTo( _parseItemIndexFromURL().pid );
                                _hashChangedByHistory = false;
                            }

                        },
                        updateURL: function() {

                            // Delay the update of URL, to avoid lag during transition,
                            // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

                            _cleanHistoryTimeouts();


                            if(_hashChangedByHistory) {
                                return;
                            }

                            if(!_historyChanged) {
                                _updateHash(); // first time
                            } else {
                                _historyUpdateTimeout = setTimeout(_updateHash, 800);
                            }
                        }

                    }
                });


                /*>>history*/
                framework.extend(self, publicMethods); };
            return PhotoSwipe;
        });

        /***/ },
    /* 35 */
    /***/ function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
         * http://photoswipe.com
         * Copyright (c) 2015 Dmitry Semenov; */
        /**
         *
         * UI on top of main sliding area (caption, arrows, close button, etc.).
         * Built just using public methods/properties of PhotoSwipe.
         *
         */
        (function (root, factory) {
            if (true) {
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === 'object') {
                module.exports = factory();
            } else {
                root.PhotoSwipeUI_Default = factory();
            }
        })(this, function () {

            'use strict';



            var PhotoSwipeUI_Default =
                function(pswp, framework) {

                    var ui = this;
                    var _overlayUIUpdated = false,
                        _controlsVisible = true,
                        _fullscrenAPI,
                        _controls,
                        _captionContainer,
                        _fakeCaptionContainer,
                        _indexIndicator,
                        _shareButton,
                        _shareModal,
                        _shareModalHidden = true,
                        _initalCloseOnScrollValue,
                        _isIdle,
                        _listen,

                        _loadingIndicator,
                        _loadingIndicatorHidden,
                        _loadingIndicatorTimeout,

                        _galleryHasOneSlide,

                        _options,
                        _defaultUIOptions = {
                            barsSize: {top:44, bottom:'auto'},
                            closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
                            timeToIdle: 4000,
                            timeToIdleOutside: 1000,
                            loadingIndicatorDelay: 1000, // 2s

                            addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
                                if(!item.title) {
                                    captionEl.children[0].innerHTML = '';
                                    return false;
                                }
                                captionEl.children[0].innerHTML = item.title;
                                return true;
                            },

                            closeEl:true,
                            captionEl: true,
                            fullscreenEl: true,
                            zoomEl: true,
                            shareEl: true,
                            counterEl: true,
                            arrowEl: true,
                            preloaderEl: true,

                            tapToClose: false,
                            tapToToggleControls: true,

                            clickToCloseNonZoomable: true,

                            shareButtons: [
                                {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
                                {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                                {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
                                '?url={{url}}&media={{image_url}}&description={{text}}'},
                                {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
                            ],
                            getImageURLForShare: function( /* shareButtonData */ ) {
                                return pswp.currItem.src || '';
                            },
                            getPageURLForShare: function( /* shareButtonData */ ) {
                                return window.location.href;
                            },
                            getTextForShare: function( /* shareButtonData */ ) {
                                return pswp.currItem.title || '';
                            },

                            indexIndicatorSep: ' / ',
                            fitControlsWidth: 1200

                        },
                        _blockControlsTap,
                        _blockControlsTapTimeout;



                    var _onControlsTap = function(e) {
                            if(_blockControlsTap) {
                                return true;
                            }


                            e = e || window.event;

                            if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
                                // reset idle timer
                                _onIdleMouseMove();
                            }


                            var target = e.target || e.srcElement,
                                uiElement,
                                clickedClass = target.getAttribute('class') || '',
                                found;

                            for(var i = 0; i < _uiElements.length; i++) {
                                uiElement = _uiElements[i];
                                if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
                                    uiElement.onTap();
                                    found = true;

                                }
                            }

                            if(found) {
                                if(e.stopPropagation) {
                                    e.stopPropagation();
                                }
                                _blockControlsTap = true;

                                // Some versions of Android don't prevent ghost click event
                                // when preventDefault() was called on touchstart and/or touchend.
                                //
                                // This happens on v4.3, 4.2, 4.1,
                                // older versions strangely work correctly,
                                // but just in case we add delay on all of them)
                                var tapDelay = framework.features.isOldAndroid ? 600 : 30;
                                _blockControlsTapTimeout = setTimeout(function() {
                                    _blockControlsTap = false;
                                }, tapDelay);
                            }

                        },
                        _fitControlsInViewport = function() {
                            return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
                        },
                        _togglePswpClass = function(el, cName, add) {
                            framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
                        },

                    // add class when there is just one item in the gallery
                    // (by default it hides left/right arrows and 1ofX counter)
                        _countNumItems = function() {
                            var hasOneSlide = (_options.getNumItemsFn() === 1);

                            if(hasOneSlide !== _galleryHasOneSlide) {
                                _togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
                                _galleryHasOneSlide = hasOneSlide;
                            }
                        },
                        _toggleShareModalClass = function() {
                            _togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
                        },
                        _toggleShareModal = function() {

                            _shareModalHidden = !_shareModalHidden;


                            if(!_shareModalHidden) {
                                _toggleShareModalClass();
                                setTimeout(function() {
                                    if(!_shareModalHidden) {
                                        framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
                                    }
                                }, 30);
                            } else {
                                framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
                                setTimeout(function() {
                                    if(_shareModalHidden) {
                                        _toggleShareModalClass();
                                    }
                                }, 300);
                            }

                            if(!_shareModalHidden) {
                                _updateShareURLs();
                            }
                            return false;
                        },

                        _openWindowPopup = function(e) {
                            e = e || window.event;
                            var target = e.target || e.srcElement;

                            pswp.shout('shareLinkClick', e, target);

                            if(!target.href) {
                                return false;
                            }

                            if( target.hasAttribute('download') ) {
                                return true;
                            }

                            window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
                                'location=yes,width=550,height=420,top=100,left=' +
                                (window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

                            if(!_shareModalHidden) {
                                _toggleShareModal();
                            }

                            return false;
                        },
                        _updateShareURLs = function() {
                            var shareButtonOut = '',
                                shareButtonData,
                                shareURL,
                                image_url,
                                page_url,
                                share_text;

                            for(var i = 0; i < _options.shareButtons.length; i++) {
                                shareButtonData = _options.shareButtons[i];

                                image_url = _options.getImageURLForShare(shareButtonData);
                                page_url = _options.getPageURLForShare(shareButtonData);
                                share_text = _options.getTextForShare(shareButtonData);

                                shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
                                    .replace('{{image_url}}', encodeURIComponent(image_url) )
                                    .replace('{{raw_image_url}}', image_url )
                                    .replace('{{text}}', encodeURIComponent(share_text) );

                                shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
                                    'class="pswp__share--' + shareButtonData.id + '"' +
                                    (shareButtonData.download ? 'download' : '') + '>' +
                                    shareButtonData.label + '</a>';

                                if(_options.parseShareButtonOut) {
                                    shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
                                }
                            }
                            _shareModal.children[0].innerHTML = shareButtonOut;
                            _shareModal.children[0].onclick = _openWindowPopup;

                        },
                        _hasCloseClass = function(target) {
                            for(var  i = 0; i < _options.closeElClasses.length; i++) {
                                if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
                                    return true;
                                }
                            }
                        },
                        _idleInterval,
                        _idleTimer,
                        _idleIncrement = 0,
                        _onIdleMouseMove = function() {
                            clearTimeout(_idleTimer);
                            _idleIncrement = 0;
                            if(_isIdle) {
                                ui.setIdle(false);
                            }
                        },
                        _onMouseLeaveWindow = function(e) {
                            e = e ? e : window.event;
                            var from = e.relatedTarget || e.toElement;
                            if (!from || from.nodeName === 'HTML') {
                                clearTimeout(_idleTimer);
                                _idleTimer = setTimeout(function() {
                                    ui.setIdle(true);
                                }, _options.timeToIdleOutside);
                            }
                        },
                        _setupFullscreenAPI = function() {
                            if(_options.fullscreenEl && !framework.features.isOldAndroid) {
                                if(!_fullscrenAPI) {
                                    _fullscrenAPI = ui.getFullscreenAPI();
                                }
                                if(_fullscrenAPI) {
                                    framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                                    ui.updateFullscreen();
                                    framework.addClass(pswp.template, 'pswp--supports-fs');
                                } else {
                                    framework.removeClass(pswp.template, 'pswp--supports-fs');
                                }
                            }
                        },
                        _setupLoadingIndicator = function() {
                            // Setup loading indicator
                            if(_options.preloaderEl) {

                                _toggleLoadingIndicator(true);

                                _listen('beforeChange', function() {

                                    clearTimeout(_loadingIndicatorTimeout);

                                    // display loading indicator with delay
                                    _loadingIndicatorTimeout = setTimeout(function() {

                                        if(pswp.currItem && pswp.currItem.loading) {

                                            if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
                                                // show preloader if progressive loading is not enabled,
                                                // or image width is not defined yet (because of slow connection)
                                                _toggleLoadingIndicator(false);
                                                // items-controller.js function allowProgressiveImg
                                            }

                                        } else {
                                            _toggleLoadingIndicator(true); // hide preloader
                                        }

                                    }, _options.loadingIndicatorDelay);

                                });
                                _listen('imageLoadComplete', function(index, item) {
                                    if(pswp.currItem === item) {
                                        _toggleLoadingIndicator(true);
                                    }
                                });

                            }
                        },
                        _toggleLoadingIndicator = function(hide) {
                            if( _loadingIndicatorHidden !== hide ) {
                                _togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
                                _loadingIndicatorHidden = hide;
                            }
                        },
                        _applyNavBarGaps = function(item) {
                            var gap = item.vGap;

                            if( _fitControlsInViewport() ) {

                                var bars = _options.barsSize;
                                if(_options.captionEl && bars.bottom === 'auto') {
                                    if(!_fakeCaptionContainer) {
                                        _fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
                                        _fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
                                        _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
                                        framework.addClass(_controls, 'pswp__ui--fit');
                                    }
                                    if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

                                        var captionSize = _fakeCaptionContainer.clientHeight;
                                        gap.bottom = parseInt(captionSize,10) || 44;
                                    } else {
                                        gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
                                    }
                                } else {
                                    gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
                                }

                                // height of top bar is static, no need to calculate it
                                gap.top = bars.top;
                            } else {
                                gap.top = gap.bottom = 0;
                            }
                        },
                        _setupIdle = function() {
                            // Hide controls when mouse is used
                            if(_options.timeToIdle) {
                                _listen('mouseUsed', function() {

                                    framework.bind(document, 'mousemove', _onIdleMouseMove);
                                    framework.bind(document, 'mouseout', _onMouseLeaveWindow);

                                    _idleInterval = setInterval(function() {
                                        _idleIncrement++;
                                        if(_idleIncrement === 2) {
                                            ui.setIdle(true);
                                        }
                                    }, _options.timeToIdle / 2);
                                });
                            }
                        },
                        _setupHidingControlsDuringGestures = function() {

                            // Hide controls on vertical drag
                            _listen('onVerticalDrag', function(now) {
                                if(_controlsVisible && now < 0.95) {
                                    ui.hideControls();
                                } else if(!_controlsVisible && now >= 0.95) {
                                    ui.showControls();
                                }
                            });

                            // Hide controls when pinching to close
                            var pinchControlsHidden;
                            _listen('onPinchClose' , function(now) {
                                if(_controlsVisible && now < 0.9) {
                                    ui.hideControls();
                                    pinchControlsHidden = true;
                                } else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
                                    ui.showControls();
                                }
                            });

                            _listen('zoomGestureEnded', function() {
                                pinchControlsHidden = false;
                                if(pinchControlsHidden && !_controlsVisible) {
                                    ui.showControls();
                                }
                            });

                        };



                    var _uiElements = [
                        {
                            name: 'caption',
                            option: 'captionEl',
                            onInit: function(el) {
                                _captionContainer = el;
                            }
                        },
                        {
                            name: 'share-modal',
                            option: 'shareEl',
                            onInit: function(el) {
                                _shareModal = el;
                            },
                            onTap: function() {
                                _toggleShareModal();
                            }
                        },
                        {
                            name: 'button--share',
                            option: 'shareEl',
                            onInit: function(el) {
                                _shareButton = el;
                            },
                            onTap: function() {
                                _toggleShareModal();
                            }
                        },
                        {
                            name: 'button--zoom',
                            option: 'zoomEl',
                            onTap: pswp.toggleDesktopZoom
                        },
                        {
                            name: 'counter',
                            option: 'counterEl',
                            onInit: function(el) {
                                _indexIndicator = el;
                            }
                        },
                        {
                            name: 'button--close',
                            option: 'closeEl',
                            onTap: pswp.close
                        },
                        {
                            name: 'button--arrow--left',
                            option: 'arrowEl',
                            onTap: pswp.prev
                        },
                        {
                            name: 'button--arrow--right',
                            option: 'arrowEl',
                            onTap: pswp.next
                        },
                        {
                            name: 'button--fs',
                            option: 'fullscreenEl',
                            onTap: function() {
                                if(_fullscrenAPI.isFullscreen()) {
                                    _fullscrenAPI.exit();
                                } else {
                                    _fullscrenAPI.enter();
                                }
                            }
                        },
                        {
                            name: 'preloader',
                            option: 'preloaderEl',
                            onInit: function(el) {
                                _loadingIndicator = el;
                            }
                        }

                    ];

                    var _setupUIElements = function() {
                        var item,
                            classAttr,
                            uiElement;

                        var loopThroughChildElements = function(sChildren) {
                            if(!sChildren) {
                                return;
                            }

                            var l = sChildren.length;
                            for(var i = 0; i < l; i++) {
                                item = sChildren[i];
                                classAttr = item.className;

                                for(var a = 0; a < _uiElements.length; a++) {
                                    uiElement = _uiElements[a];

                                    if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

                                        if( _options[uiElement.option] ) { // if element is not disabled from options

                                            framework.removeClass(item, 'pswp__element--disabled');
                                            if(uiElement.onInit) {
                                                uiElement.onInit(item);
                                            }

                                            //item.style.display = 'block';
                                        } else {
                                            framework.addClass(item, 'pswp__element--disabled');
                                            //item.style.display = 'none';
                                        }
                                    }
                                }
                            }
                        };
                        loopThroughChildElements(_controls.children);

                        var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
                        if(topBar) {
                            loopThroughChildElements( topBar.children );
                        }
                    };




                    ui.init = function() {

                        // extend options
                        framework.extend(pswp.options, _defaultUIOptions, true);

                        // create local link for fast access
                        _options = pswp.options;

                        // find pswp__ui element
                        _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

                        // create local link
                        _listen = pswp.listen;


                        _setupHidingControlsDuringGestures();

                        // update controls when slides change
                        _listen('beforeChange', ui.update);

                        // toggle zoom on double-tap
                        _listen('doubleTap', function(point) {
                            var initialZoomLevel = pswp.currItem.initialZoomLevel;
                            if(pswp.getZoomLevel() !== initialZoomLevel) {
                                pswp.zoomTo(initialZoomLevel, point, 333);
                            } else {
                                pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
                            }
                        });

                        // Allow text selection in caption
                        _listen('preventDragEvent', function(e, isDown, preventObj) {
                            var t = e.target || e.srcElement;
                            if(
                                t &&
                                t.getAttribute('class') && e.type.indexOf('mouse') > -1 &&
                                ( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) )
                            ) {
                                preventObj.prevent = false;
                            }
                        });

                        // bind events for UI
                        _listen('bindEvents', function() {
                            framework.bind(_controls, 'pswpTap click', _onControlsTap);
                            framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

                            if(!pswp.likelyTouchDevice) {
                                framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
                            }
                        });

                        // unbind events for UI
                        _listen('unbindEvents', function() {
                            if(!_shareModalHidden) {
                                _toggleShareModal();
                            }

                            if(_idleInterval) {
                                clearInterval(_idleInterval);
                            }
                            framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
                            framework.unbind(document, 'mousemove', _onIdleMouseMove);
                            framework.unbind(_controls, 'pswpTap click', _onControlsTap);
                            framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
                            framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

                            if(_fullscrenAPI) {
                                framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                                if(_fullscrenAPI.isFullscreen()) {
                                    _options.hideAnimationDuration = 0;
                                    _fullscrenAPI.exit();
                                }
                                _fullscrenAPI = null;
                            }
                        });


                        // clean up things when gallery is destroyed
                        _listen('destroy', function() {
                            if(_options.captionEl) {
                                if(_fakeCaptionContainer) {
                                    _controls.removeChild(_fakeCaptionContainer);
                                }
                                framework.removeClass(_captionContainer, 'pswp__caption--empty');
                            }

                            if(_shareModal) {
                                _shareModal.children[0].onclick = null;
                            }
                            framework.removeClass(_controls, 'pswp__ui--over-close');
                            framework.addClass( _controls, 'pswp__ui--hidden');
                            ui.setIdle(false);
                        });


                        if(!_options.showAnimationDuration) {
                            framework.removeClass( _controls, 'pswp__ui--hidden');
                        }
                        _listen('initialZoomIn', function() {
                            if(_options.showAnimationDuration) {
                                framework.removeClass( _controls, 'pswp__ui--hidden');
                            }
                        });
                        _listen('initialZoomOut', function() {
                            framework.addClass( _controls, 'pswp__ui--hidden');
                        });

                        _listen('parseVerticalMargin', _applyNavBarGaps);

                        _setupUIElements();

                        if(_options.shareEl && _shareButton && _shareModal) {
                            _shareModalHidden = true;
                        }

                        _countNumItems();

                        _setupIdle();

                        _setupFullscreenAPI();

                        _setupLoadingIndicator();
                    };

                    ui.setIdle = function(isIdle) {
                        _isIdle = isIdle;
                        _togglePswpClass(_controls, 'ui--idle', isIdle);
                    };

                    ui.update = function() {
                        // Don't update UI if it's hidden
                        if(_controlsVisible && pswp.currItem) {

                            ui.updateIndexIndicator();

                            if(_options.captionEl) {
                                _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

                                _togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
                            }

                            _overlayUIUpdated = true;

                        } else {
                            _overlayUIUpdated = false;
                        }

                        if(!_shareModalHidden) {
                            _toggleShareModal();
                        }

                        _countNumItems();
                    };

                    ui.updateFullscreen = function(e) {

                        if(e) {
                            // some browsers change window scroll position during the fullscreen
                            // so PhotoSwipe updates it just in case
                            setTimeout(function() {
                                pswp.setScrollOffset( 0, framework.getScrollY() );
                            }, 50);
                        }

                        // toogle pswp--fs class on root element
                        framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
                    };

                    ui.updateIndexIndicator = function() {
                        if(_options.counterEl) {
                            _indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) +
                                _options.indexIndicatorSep +
                                _options.getNumItemsFn();
                        }
                    };

                    ui.onGlobalTap = function(e) {
                        e = e || window.event;
                        var target = e.target || e.srcElement;

                        if(_blockControlsTap) {
                            return;
                        }

                        if(e.detail && e.detail.pointerType === 'mouse') {

                            // close gallery if clicked outside of the image
                            if(_hasCloseClass(target)) {
                                pswp.close();
                                return;
                            }

                            if(framework.hasClass(target, 'pswp__img')) {
                                if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
                                    if(_options.clickToCloseNonZoomable) {
                                        pswp.close();
                                    }
                                } else {
                                    pswp.toggleDesktopZoom(e.detail.releasePoint);
                                }
                            }

                        } else {

                            // tap anywhere (except buttons) to toggle visibility of controls
                            if(_options.tapToToggleControls) {
                                if(_controlsVisible) {
                                    ui.hideControls();
                                } else {
                                    ui.showControls();
                                }
                            }

                            // tap to close gallery
                            if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
                                pswp.close();
                                return;
                            }

                        }
                    };
                    ui.onMouseOver = function(e) {
                        e = e || window.event;
                        var target = e.target || e.srcElement;

                        // add class when mouse is over an element that should close the gallery
                        _togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
                    };

                    ui.hideControls = function() {
                        framework.addClass(_controls,'pswp__ui--hidden');
                        _controlsVisible = false;
                    };

                    ui.showControls = function() {
                        _controlsVisible = true;
                        if(!_overlayUIUpdated) {
                            ui.update();
                        }
                        framework.removeClass(_controls,'pswp__ui--hidden');
                    };

                    ui.supportsFullscreen = function() {
                        var d = document;
                        return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
                    };

                    ui.getFullscreenAPI = function() {
                        var dE = document.documentElement,
                            api,
                            tF = 'fullscreenchange';

                        if (dE.requestFullscreen) {
                            api = {
                                enterK: 'requestFullscreen',
                                exitK: 'exitFullscreen',
                                elementK: 'fullscreenElement',
                                eventK: tF
                            };

                        } else if(dE.mozRequestFullScreen ) {
                            api = {
                                enterK: 'mozRequestFullScreen',
                                exitK: 'mozCancelFullScreen',
                                elementK: 'mozFullScreenElement',
                                eventK: 'moz' + tF
                            };



                        } else if(dE.webkitRequestFullscreen) {
                            api = {
                                enterK: 'webkitRequestFullscreen',
                                exitK: 'webkitExitFullscreen',
                                elementK: 'webkitFullscreenElement',
                                eventK: 'webkit' + tF
                            };

                        } else if(dE.msRequestFullscreen) {
                            api = {
                                enterK: 'msRequestFullscreen',
                                exitK: 'msExitFullscreen',
                                elementK: 'msFullscreenElement',
                                eventK: 'MSFullscreenChange'
                            };
                        }

                        if(api) {
                            api.enter = function() {
                                // disable close-on-scroll in fullscreen
                                _initalCloseOnScrollValue = _options.closeOnScroll;
                                _options.closeOnScroll = false;

                                if(this.enterK === 'webkitRequestFullscreen') {
                                    pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
                                } else {
                                    return pswp.template[this.enterK]();
                                }
                            };
                            api.exit = function() {
                                _options.closeOnScroll = _initalCloseOnScrollValue;

                                return document[this.exitK]();

                            };
                            api.isFullscreen = function() { return document[this.elementK]; };
                        }

                        return api;
                    };



                };
            return PhotoSwipeUI_Default;


        });


        /***/ },
    /* 36 */
    /***/ function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/ },
    /* 37 */,
    /* 38 */,
    /* 39 */,
    /* 40 */,
    /* 41 */
    /***/ function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/ },
    /* 42 */,
    /* 43 */
    /***/ function(module, exports) {

        $.fn.lazyload = function(options) {
            return this.each(function() {

                options = options || {};
                var defualts = {};

                var opts = $.extend({}, defualts, options);
                var obj = $(this);
                var dom = this;

                var srcSign = options.srcSign || "lazy-src";
                var errCallBack = options.errCallBack || function(){};
                var container = options.container || $(window);

                /**
                 * @description src正常
                 */
                var imgload = function (e, target) {
                    //todo: 上报
                }

                /**
                 * @description src失效
                 */
                var imgerr = function (e, target, fn, src) {
                    if(target[0].src && (target[0].src.indexOf("img-err.png")>0 || target[0].src.indexOf("img-err2.png")>0)){
                        return ;
                    }
                    var w = target.width();
                    var h = target.height();
                    //target[0].src = "/img/img-err.png";

                    fn();
                    //todo: 上报
                };

                var tempImg = function(target){
                    var w = target.width();
                    var h = target.height();
                    var t = target.offset().top;
                    var l = target.offset().left;
                    var tempDom = target.clone().addClass("lazy-loding").insertBefore(target);
                    //tempDom[0].src = "/img/img-loading.png";
                    target.hide();
                }
                /**
                 * @description src替换，loading过程中添加类lazy-loading;
                 */
                var setSrc = function(target, srcSign, errCallBack){

                    if(target.attr("src"))return ;

                    if(options.cache == true){
                        console.log(target);
                        //存进localstorage
                        var canvas1 = document.getElementById('canvas1');
                        var ctx1 = canvas1.getContext('2d');
                        var imageData;

                        image = new Image();
                        image.src = target.attr(srcSign);
                        image.onload=function(){
                            ctx1.drawImage(image,0,0);
                            imageData = ctx1.getImageData(0,0,500,250);
                            console.log(imageData);
                        }

                    }else{
                        tempImg(target);

                        var src = target.attr(srcSign);
                        target[0].onerror = function (e) {
                            imgerr(e, target, errCallBack, src);
                        };
                        target[0].onload = function (e) {
                            target.parent().find(".lazy-loding").remove();
                            target.show();
                            imgload(e, target);
                        }
                        target[0].src = src;
                    }
                }

                /**
                 * @description 重组
                 */
                opts.cache = [];

                if(dom.tagName == "IMG"){
                    var data = {
                        obj: obj,
                        tag: "img",
                        url: obj.attr(srcSign)
                    };
                    opts.cache.push(data);
                }else{
                    var imgArr = obj.find("img");
                    imgArr.each(function(index) {
                        var node = this.nodeName.toLowerCase(), url = $(this).attr(srcSign);
                        //重组
                        var data = {
                            obj: imgArr.eq(index),
                            tag: node,
                            url: url
                        };
                        opts.cache.push(data);
                    });
                }


                //动态显示数据
                var scrollHandle = function() {
                    var contHeight = container.height();
                    var contop;
                    if ($(window).get(0) === window) {
                        contop = $(window).scrollTop();
                    } else {
                        contop = container.offset().top;
                    }
                    $.each(opts.cache, function(i, data) {
                        var o = data.obj, tag = data.tag, url = data.url, post, posb;
                        if (o) {
                            post = o.offset().top - contop, post + o.height();

                            if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                                if (url) {
                                    //在浏览器窗口内
                                    if (tag === "img") {
                                        //改变src
                                        setSrc(o, srcSign, errCallBack);
                                    }
                                }
                                data.obj = null;
                            }
                        }
                    });
                }

                //加载完毕即执行
                scrollHandle();
                //滚动执行
                container.bind("scroll", scrollHandle);
                container.bind("resize", scrollHandle);

            });
        };

        module.exports = {}

        /***/ }
    /******/ ]);