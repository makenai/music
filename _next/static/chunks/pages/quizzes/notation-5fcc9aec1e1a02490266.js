(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{6610:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},5991:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return o}})},7608:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,{Z:function(){return r}})},69:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(4665);function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&(0,r.Z)(t,n)}},3724:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,{Z:function(){return o}})},4665:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,{Z:function(){return r}})},7329:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(676);var o=e(2961);function i(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5366:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(7608),o=e(4665);function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n,e){return(u=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&(0,o.Z)(i,e.prototype),i}).apply(null,arguments)}function c(t){var n="function"===typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,i)}function i(){return u(t,arguments,(0,r.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(i,t)})(t)}},8286:function(t,n,e){"use strict";e.d(n,{oA:function(){return a},To:function(){return f},QC:function(){return l},eC:function(){return v},Uy:function(){return d},ip:function(){return p},nl:function(){return h},oC:function(){return y},gB:function(){return m},SS:function(){return g},Hj:function(){return b},qw:function(){return w},dK:function(){return j},f5:function(){return x}});var r=e(6610),o=e(69),i=e(3724),u=e(7608),c=e(5366);function s(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)}}var a=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],f=["Do","Di","Re","Ri","Mi","Fa","Fi","So","Si","La","Li","Ti"],l=["C","D","E","F","G","A","B"],v=new RegExp(/^([A-G][b#]?)(-?\d+)$/),d=new RegExp(/^([A-G])(-?\d+)$/),p={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},h={Ionian:"CDEFGABC".split(""),Dorian:"DEFGABCD".split(""),Phrygian:"EFGABCDE".split(""),Lydian:"FGABCDEF".split(""),Mixoludian:"GABCDEFG".split(""),Aeolian:"ABCDEFGA".split(""),Locrian:"BCDEFGAB".split("")},y={0:"Perfect unison",1:"Minor second",2:"Major second",3:"Minor third",4:"Major third",5:"Perfect fourth",6:"Tritone",7:"Perfect fifth",8:"Minor sixth",9:"Major sixth",10:"Minor seventh",11:"Major seventh",12:"Perfect octave"},m={"":"","#":"^",b:"_"},g="TTSTTTS",b="TSTTSTT",w={"4-3":"maj","3-4":"min","3-3":"dim"},j=function(t){(0,o.Z)(e,t);var n=s(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return e}((0,c.Z)(Error)),x=function(t){(0,o.Z)(e,t);var n=s(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return e}((0,c.Z)(Error))},248:function(t,n,e){"use strict";var r=e(5893),o=e(7294),i=e(236),u=e(9914);n.Z=function(t){for(var n=t.notes,e=t.width,c=void 0===e?500:e,s=t.height,a=void 0===s?100:s,f=t.padNotes,l=void 0===f?10:f,v=t.scale,d=void 0===v?1:v,p=t.highlightNotes,h=void 0===p?[]:p,y=(0,o.useRef)(),m=(0,i.Kf)(n);m.length<l;)m.push("x");var g="[L:1] ".concat(m.join(" "),"|");(0,o.useEffect)((function(){var t={add_classes:!0,staffwidth:c-50,responsive:"resize",paddingbottom:0,paddingtop:0,paddingleft:0,paddingright:0,clickListener:b,scale:d};u.renderAbc(y.current,g,t)}),[g,c]);var b=function(t,n,e,r,o){},w={width:"".concat(c,"px"),height:"".concat(a,"px"),overflow:"hidden"};return(0,r.jsxs)("div",{style:w,className:"music-notation",children:[(0,r.jsx)("style",{children:h.map((function(t){return"svg > .abcjs-n".concat(n.indexOf(t)," { fill: #ff00ff !important; }")})).join("\n")}),(0,r.jsx)("div",{ref:y})]})}},8538:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var r=e(5893),o=e(4699),i=e(7294);const u={};var c={get(t,n){var e,r;try{return null!==(e=u[t])&&void 0!==e?e:"undefined"===(r=localStorage.getItem(t))?void 0:JSON.parse(null!==r&&void 0!==r?r:"")}catch(o){return n}},set(t,n){try{return localStorage.setItem(t,JSON.stringify(n)),u[t]=void 0,!0}catch(e){return u[t]=n,!1}},remove(t){u[t]=void 0,localStorage.removeItem(t)}};const s=new Set;var a=function(t,n){const e=function(t,n){const e=(0,i.useMemo)((()=>"function"===typeof n?n():n),[t]),r=(0,i.useMemo)((()=>({value:c.get(t,e),isPersistent:(()=>{if("undefined"===typeof window)return!0;try{return localStorage.setItem("__ulss","#"),localStorage.removeItem("__ulss"),!0}catch(t){return!1}})()})),[t,e]),[o,u]=(0,i.useState)(r),s=(0,i.useMemo)((()=>{const n=n=>{u("function"===typeof n?e=>({value:n(e.value),isPersistent:c.set(t,n(e.value))}):{value:n,isPersistent:c.set(t,n)})};return n.reset=()=>{c.remove(t),u((t=>({value:e,isPersistent:t.isPersistent})))},n}),[t,e]);(0,i.useEffect)((()=>{const n=n=>{n.storageArea===localStorage&&n.key===t&&u({value:c.get(t,e),isPersistent:!0})};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}),[t,e]);const a=(0,i.useRef)(!0);return(0,i.useEffect)((()=>{c.set(t,r.value),a.current?a.current=!1:u(r)}),[t,r]),[o.value,s,o.isPersistent]}(t,n);return(0,i.useEffect)((()=>{if(s.has(t))throw new Error(`When using the same key in multiple places use createLocalStorageStateHook('${t}'): https://github.com/astoilkov/use-local-storage-state#create-local-storage-state-hook`);return s.add(t),()=>{s.delete(t)}}),[t]),e},f=e(5877),l=e(236),v=e(6486),d=function(t){var n="is-danger";return t>60&&(n="is-warning"),t>80&&(n="is-success"),n},p=e(8286),h=e(248),y=e(4184),m=e.n(y),g=function(){var t,n=a("notationQuizScore",{total:0,correct:0,previousRound:null}),e=(0,o.Z)(n,2),u=e[0],c=e[1],s=function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"A0",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"C8",e=(arguments.length>2?arguments[2]:void 0).natural,r=void 0!==e&&e,o=(0,l.kH)(t,n).filter(r?l.ts:function(){return!0});return(0,v.sample)(o)}("A3","C6",{natural:!0})},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=s();if(t)for(;n===t;)n=s();return n},g=function(t,n){return new l.jC(t).naturalNote()===n},b=(0,i.useState)(y(null===u||void 0===u||null===(t=u.previousRound)||void 0===t?void 0:t[0])),w=b[0],j=b[1],x=(0,f.Z)().playNote,_=u.previousRound&&g.apply(null,u.previousRound),O=u.total?Math.round(u.correct/u.total*100):0;return(0,r.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,r.jsxs)("div",{className:"box",children:[(0,r.jsx)("h2",{className:"title",children:"What note is this?"}),(0,r.jsx)("div",{children:w&&(0,r.jsx)(h.Z,{width:200,notes:[w],padNotes:1})}),(0,r.jsx)("div",{className:"controls mt-2",children:p.QC.map((function(t){return(0,r.jsx)("button",{className:m()("button","is-primary"),onClick:function(){return function(t){var n=g(w,t)?1:0;n&&x(w,.5),c({total:u.total+1,correct:u.correct+n,previousRound:[w,t]}),j(y(w))}(t)},children:t},t)}))})]}),(null===u||void 0===u?void 0:u.previousRound)&&(0,r.jsx)("div",{className:"box",children:(0,r.jsxs)("div",{className:"columns",children:[(0,r.jsx)("div",{className:"column is-one-quarter",children:(0,r.jsxs)("article",{className:m()("message",_?"is-success":"is-danger"),children:[(0,r.jsx)("div",{className:"message-header",children:(0,r.jsx)("p",{children:"Previous Question"})}),(0,r.jsxs)("div",{className:"message-body",children:[(0,r.jsxs)("div",{className:"is-flex is-justify-content-space-evenly is-align-content-center",children:[(0,r.jsx)(h.Z,{width:200,notes:[u.previousRound[0]],padNotes:1}),(0,r.jsx)("div",{className:"is-size-2 mt-3 has-text-black",children:u.previousRound[0]})]}),!_&&(0,r.jsxs)("p",{className:"has-text-centered is-size-5",children:["You chose ",(0,r.jsx)("b",{children:u.previousRound[1]}),"."]})]})]})}),(0,r.jsxs)("div",{className:"column is-one-fifth has-text-centered",children:[(0,r.jsx)("div",{className:"is-size-4",children:"Score:"}),(0,r.jsxs)("div",{className:m()("tag is-large is-size-3",d(O)),children:[O,"%"]}),(0,r.jsxs)("div",{className:"is-size-6",children:[u.correct," of ",u.total," correct."]}),(0,r.jsx)("a",{className:"button is-small mt-4",onClick:function(t){t.preventDefault(),c.reset()},children:"Reset Score"})]})]})})]})}},236:function(t,n,e){"use strict";e.d(n,{jC:function(){return l},kH:function(){return v},fB:function(){return d},Bz:function(){return p},ts:function(){return h},B1:function(){return y},Kf:function(){return m},ZS:function(){return g},M8:function(){return b},$2:function(){return w},Pg:function(){return j}});var r=e(7329),o=e(6156),i=e(6610),u=e(5991),c=e(8286),s=e(6486);function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var f=function(t){return c.oA.indexOf(c.ip[t]||t)},l=function(){function t(n){if((0,i.Z)(this,t),"string"===typeof n){var e=c.eC.exec(n);if(!e)throw new c.dK('"'.concat(n,'" was not in a valid format'));if(this._note=e[1],-1===f(this._note))throw new c.dK('"'.concat(this._note,'" is not a valid note'));this._octave=Number(e[2])}if("number"===typeof n){var r=n%12;this._note=c.oA[r],this._octave=Math.floor(n/12)-1}}return(0,u.Z)(t,[{key:"toString",value:function(){return"".concat(this._note).concat(this._octave)}},{key:"valueOf",value:function(){var t=f(this._note);return 12*(this._octave+1)+t}},{key:"naturalNote",value:function(){return this._note.substring(0,1)}},{key:"accidental",value:function(){return this._note.substring(1,2)}},{key:"note",value:function(){return this._note}},{key:"setNote",value:function(t){this._note=t}},{key:"octave",value:function(){return this._octave}},{key:"setOctave",value:function(t){this._octave=t}},{key:"solfege",value:function(){return c.To[f(this._note)]}},{key:"toABCNotation",value:function(){var t="".concat(c.gB[this.accidental()]).concat(this.naturalNote());return this._octave<4?"".concat(t).concat((0,s.repeat)(",",4-this._octave)):4===this._octave?t:5===this._octave?(0,s.toLower)(t):this._octave>5?"".concat((0,s.toLower)(t)).concat((0,s.repeat)("'",this._octave-5)):void 0}}]),t}(),v=function(t,n){var e=new l(t),r=new l(n);if(e>r)throw new c.f5("Start note must be lower than end note");for(var o=[e],i=e.valueOf()+1;i<r.valueOf();i++)o.push(new l(i));return o.push(r),o.map((function(t){return t.toString()}))},d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=Number(n),r=null;return t.map((function(t,n){var o=f(t);return null!==r&&o<r&&(e+=1),r=o,"".concat(t).concat(e)}))},p=function(t){return new l(t).solfege()},h=function(t){return c.Uy.test(t)},y=function(t,n){var e=new l(t),r=new l(n);return e.valueOf()===r.valueOf()?0:e>r?-1:1},m=function(t){return t&&0!==t.length?t.map((function(t){return new l(t).toABCNotation()})):[]},g=function(t,n){var e=v(t,n).length-1;return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({semitones:e},c.oC[e]?{name:c.oC[e]}:{})},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=new l(t).valueOf(),r=[e];return n.split("").forEach((function(t){"T"===t?e+=2:"S"===t&&(e+=1),r.push(e)})),r.map((function(t){return new l(t).toString()}))},w=function(t,n){for(var e=(0,s.max)(t),o=[],i=Math.ceil(e/n.length),u=function(t){var e=n.map((function(n){var e=new l(n);return e.setOctave(e.octave()+t),e.toString()}));o.push.apply(o,(0,r.Z)(e))},c=0;c<i;c++)u(c);var a=(0,s.uniq)(o);return t.map((function(t){return a[t-1]}))},j=function(t){var n,e=t.map((function(t){return new l(t)})),r=e[0].note(),o=[];e.forEach((function(t){n&&o.push(t.valueOf()-n.valueOf()),n=t}));var i=c.qw[o.join("-")]||"???";return"".concat(r).concat(i)}},874:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/notation",function(){return e(8538)}])}},function(t){t.O(0,[914,774,888,179],(function(){return n=874,t(t.s=n);var n}));var n=t.O();_N_E=n}]);