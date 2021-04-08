"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProps = exports.ClassBuilder = void 0;
const noDepth = ['white', 'black', 'transparent'];
function getClass(prop, color, depth, defaultDepth) {
    if (noDepth.includes(color)) {
        return `${prop}-${color}`;
    }
    return `${prop}-${color}-${depth || defaultDepth} `;
}
function utils(color, defaultDepth = 500) {
    return {
        bg: (depth) => getClass('bg', color, depth, defaultDepth),
        border: (depth) => getClass('border', color, depth, defaultDepth),
        txt: (depth) => getClass('text', color, depth, defaultDepth),
        caret: (depth) => getClass('caret', color, depth, defaultDepth),
    };
}
exports.default = utils;
class ClassBuilder {
    constructor(classes, defaultClasses) {
        this.defaults = (typeof classes === 'function' ? classes(defaultClasses) : classes) || defaultClasses;
        this.classes = this.defaults;
    }
    flush() {
        this.classes = this.defaults;
        return this;
    }
    extend(...fns) {
        return this;
    }
    get() {
        return this.classes;
    }
    replace(classes, cond = true) {
        if (cond && classes) {
            this.classes = Object.keys(classes).reduce((acc, from) => acc.replace(new RegExp(from, 'g'), classes[from]), this.classes);
        }
        return this;
    }
    remove(classes, cond = true) {
        if (cond && classes) {
            this.classes = classes.split(' ').reduce((acc, cur) => acc.replace(new RegExp(cur, 'g'), ''), this.classes);
        }
        return this;
    }
    add(className, cond = true, defaultValue) {
        if (!cond || !className)
            return this;
        switch (typeof className) {
            case 'string':
            default:
                this.classes += ` ${className} `;
                return this;
            case 'function':
                this.classes += ` ${className(defaultValue || this.classes)} `;
                return this;
        }
    }
}
exports.ClassBuilder = ClassBuilder;
const defaultReserved = ['class', 'add', 'remove', 'replace', 'value'];
function filterProps(reserved, props) {
    const r = [...reserved, ...defaultReserved];
    return Object.keys(props).reduce((acc, cur) => cur.includes('$$') || cur.includes('Class') || r.includes(cur) ? acc : { ...acc, [cur]: props[cur] }, {});
}
exports.filterProps = filterProps;
//# sourceMappingURL=classes.js.map