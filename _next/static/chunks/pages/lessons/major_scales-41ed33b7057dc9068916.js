(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{8286:function(t,n,e){"use strict";e.d(n,{oA:function(){return s},To:function(){return f},eC:function(){return l},Uy:function(){return h},ip:function(){return p},nl:function(){return v},oC:function(){return d},gB:function(){return g},SS:function(){return y},dK:function(){return b},f5:function(){return O}});var r=e(6610),o=e(69),i=e(3724),c=e(7608),u=e(5366);function a(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)}}var s=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],f=["Do","Di","Re","Ri","Mi","Fa","Fi","So","Si","La","Li","Ti"],l=new RegExp(/^([A-G][b#]?)(-?\d+)$/),h=new RegExp(/^([A-G])(-?\d+)$/),p={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},v={Ionian:"CDEFGABC".split(""),Dorian:"DEFGABCD".split(""),Phrygian:"EFGABCDE".split(""),Lydian:"FGABCDEF".split(""),Mixoludian:"GABCDEFG".split(""),Aeolian:"ABCDEFGA".split(""),Locrian:"BCDEFGAB".split("")},d={0:"Perfect unison",1:"Minor second",2:"Major second",3:"Minor third",4:"Major third",5:"Perfect fourth",6:"Tritone",7:"Perfect fifth",8:"Minor sixth",9:"Major sixth",10:"Minor seventh",11:"Major seventh",12:"Perfect octave"},g={"":"","#":"^",b:"_"},y="TTSTTTS",b=function(t){(0,o.Z)(e,t);var n=a(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return e}((0,u.Z)(Error)),O=function(t){(0,o.Z)(e,t);var n=a(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return e}((0,u.Z)(Error))},248:function(t,n,e){"use strict";var r=e(5893),o=e(7294),i=e(236),c=e(9914);n.Z=function(t){for(var n=t.notes,e=t.width,u=void 0===e?500:e,a=t.height,s=void 0===a?100:a,f=t.padNotes,l=void 0===f?10:f,h=t.highlightNotes,p=void 0===h?[]:h,v=(0,o.useRef)(),d=(0,i.Kf)(n);d.length<l;)d.push("x");var g="[L:1] ".concat(d.join(" "),"|");(0,o.useEffect)((function(){var t={add_classes:!0,staffwidth:u-50,responsive:"resize",paddingbottom:0,paddingtop:0,paddingleft:0,paddingright:0,clickListener:y};c.renderAbc(v.current,g,t)}),[g,u]);var y=function(t,n,e,r,o){},b={width:"".concat(u,"px"),height:"".concat(s,"px")};return(0,r.jsxs)("div",{style:b,className:"music-notation",children:[(0,r.jsx)("style",{children:p.map((function(t){return"svg > .abcjs-n".concat(n.indexOf(t)," { fill: #ff00ff !important; }")})).join("\n")}),(0,r.jsx)("div",{ref:v})]})}},3551:function(t,n,e){"use strict";e.d(n,{Z:function(){return d}});var r=e(5893),o=(e(7294),e(236)),i=e(6156),c=e(5877),u=e(232),a=e.n(u),s=e(4184),f=e.n(s);function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p=function(t){var n=t.note,e=t.onPlay,u=t.highlight,s=t.renderAdditionalKeyLabel,l=t.noDrag,p=(0,c.Z)().notesPlaying,v=f()(a().pianoKey,(0,o.ts)(n)?a().whiteKey:a().blackKey,(0,i.Z)({},a().playing,p[n]),(0,i.Z)({},a().highlight,u)),d={};return e&&(d.onMouseDown=function(t){t.stopPropagation(),e()},l||(d.onMouseOver=function(t){t.stopPropagation(),1===t.buttons&&e()})),(0,r.jsxs)("div",h(h({role:"link",className:v},d),{},{children:[s(n),(0,r.jsx)("div",{className:a().solfeg,children:(0,o.Bz)(n)}),(0,r.jsx)("div",{className:a().noteName,children:n})]}))},v=e(6486),d=function(t){var n=t.startNote,e=void 0===n?"C4":n,i=t.endNote,u=void 0===i?"C5":i,s=t.highlightNotes,f=void 0===s?[]:s,l=t.onPlay,h=t.renderAdditionalKeyLabel,d=void 0===h?v.noop:h,g=t.noDrag,y=(0,c.Z)().playNote,b=(0,o.kH)(e,u),O=function(t){return y(t)};return(0,r.jsx)("div",{className:a().piano,children:b.map((function(t){return(0,r.jsx)(p,{note:t,onPlay:function(n){return(l||O)(t)},highlight:f.indexOf(t)>-1,renderAdditionalKeyLabel:d,noDrag:g},t)}))})}},5658:function(t,n,e){"use strict";var r=e(5893),o=(e(7294),e(8456)),i=e.n(o);n.Z=function(t){var n=t.children;return(0,r.jsx)("div",{className:"study-notes",children:(0,r.jsx)(i(),{children:n})})}},4036:function(t,n,e){"use strict";e.r(n);var r=e(5893),o=e(7294),i=e(3551),c=e(5658),u=e(5877),a=e(236),s=e(8286),f=e(248),l=e(4184),h=e.n(l);n.default=function(){var t=(0,o.useState)([]),n=t[0],e=t[1],l=(0,o.useState)([]),p=l[0],v=l[1],d=(0,u.Z)(),g=d.playNotes,y=d.notesPlaying,b=p.filter((function(t){return y[t]})),O=function(t){if(t){var n=(0,a.M8)("".concat(t).concat(4),s.SS);e(n)}else e([])};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"box controls",children:s.oA.map((function(t){return(0,r.jsx)("button",{className:h()("button"),onMouseOver:function(){return O(t)},onMouseOut:function(){return O()},onClick:function(){return function(t){var n=(0,a.M8)("".concat(t).concat(4),s.SS);v(n),g(n)}(t)},children:t},t)}))}),(0,r.jsx)(f.Z,{notes:n.length>0?n:p,padNotes:7,highlightNotes:b}),(0,r.jsx)(i.Z,{startNote:"C4",endNote:"B5",highlightNotes:n}),(0,r.jsx)(c.Z,{children:"\nMajor Scales have the pattern TTSTTTS.\nWhere T = Tone (full step) and S = Semiton (half step)\n  "})]})}},236:function(t,n,e){"use strict";e.d(n,{kH:function(){return l},fB:function(){return h},Bz:function(){return p},ts:function(){return v},B1:function(){return d},Kf:function(){return g},ZS:function(){return y},M8:function(){return b}});var r=e(6156),o=e(6610),i=e(5991),c=e(8286),u=e(6486);function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var s=function(t){return c.oA.indexOf(c.ip[t]||t)},f=function(){function t(n){if((0,o.Z)(this,t),"string"===typeof n){var e=c.eC.exec(n);if(!e)throw new c.dK('"'.concat(n,'" was not in a valid format'));if(this.note=e[1],-1===s(this.note))throw new c.dK('"'.concat(this.note,'" is not a valid note'));this.octave=Number(e[2])}if("number"===typeof n){var r=n%12;this.note=c.oA[r],this.octave=Math.floor(n/12)-1}}return(0,i.Z)(t,[{key:"toString",value:function(){return"".concat(this.note).concat(this.octave)}},{key:"valueOf",value:function(){var t=s(this.note);return 12*(this.octave+1)+t}},{key:"baseNote",value:function(){return this.note.substring(0,1)}},{key:"accidental",value:function(){return this.note.substring(1,2)}},{key:"octave",value:function(){return this.octave}},{key:"solfege",value:function(){return c.To[s(this.note)]}},{key:"toABCNotation",value:function(){var t="".concat(c.gB[this.accidental()]).concat(this.baseNote());return this.octave<4?"".concat(t).concat((0,u.repeat)(",",4-this.octave)):4===this.octave?t:5===this.octave?(0,u.toLower)(t):this.octave>5?"".concat((0,u.toLower)(t)).concat((0,u.repeat)("'",this.octave-5)):void 0}}]),t}(),l=function(t,n){var e=new f(t),r=new f(n);if(e>r)throw new c.f5("Start note must be lower than end note");for(var o=[e],i=e.valueOf()+1;i<r.valueOf();i++)o.push(new f(i));return o.push(r),o.map((function(t){return t.toString()}))},h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=Number(n),r=null;return t.map((function(t,n){var o=s(t);return null!==r&&o<r&&(e+=1),r=o,"".concat(t).concat(e)}))},p=function(t){return new f(t).solfege()},v=function(t){return c.Uy.test(t)},d=function(t,n){var e=new f(t),r=new f(n);return e.valueOf()===r.valueOf()?0:e>r?-1:1},g=function(t){return t&&0!==t.length?t.map((function(t){return new f(t).toABCNotation()})):[]},y=function(t,n){var e=l(t,n).length-1;return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({semitones:e},c.oC[e]?{name:c.oC[e]}:{})},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=new f(t).valueOf(),r=[e];return n.split("").forEach((function(t){"T"===t?e+=2:"S"===t&&(e+=1),r.push(e)})),r.map((function(t){return new f(t).toString()}))}},3192:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lessons/major_scales",function(){return e(4036)}])},232:function(t){t.exports={piano:"Piano_piano__3rxJ8",pianoKey:"Piano_pianoKey__1_I-O",playing:"Piano_playing__2-Z-N",whiteKey:"Piano_whiteKey__puwbd",highlight:"Piano_highlight__pJS7b",blackKey:"Piano_blackKey__1Eeqd"}}},function(t){t.O(0,[774,6,914,888,179],(function(){return n=3192,t(t.s=n);var n}));var n=t.O();_N_E=n}]);