(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{112:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},236:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var i,a=n(8),s=n.n(a),c=n(94),o=n.n(c),r=n(10),l=n(95),d=n.n(l),j=n(46),u=n(12),h=n(32),b=n.n(h),m=(n(112),n(9)),f=[{title:"Home",pathname:"/"},{title:"Intervals",pathname:"/intervals"},{title:"Modes",pathname:"/modes"},{title:"Intro to Chords",pathname:"/introChords"}],O=function(){var e=Object(u.f)();return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{className:"title",children:"Music Theory Class Experiments"}),Object(m.jsx)("div",{className:"tabs",children:Object(m.jsx)("ul",{children:f.map((function(t,n){return Object(m.jsx)("li",{className:b()({"is-active":t.pathname===e.pathname}),children:Object(m.jsx)(j.b,{to:t.pathname,children:t.title})},n)}))})})]})},v=n(17),x=n(7),p=n(34),g=n(39),N=(new g.b).toDestination(),y=s.a.createContext({}),C=function(e,t){return Object(p.isArray)(e)?e.reduce((function(e,n){return Object(x.a)(Object(x.a)({},e),{},Object(v.a)({},n,t))}),{}):Object(v.a)({},e,t)},w=function(){var e=Object(a.useContext)(y),t=e.notes,n=e.setNotes,i=e.ref;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=g.c()+a;N.triggerAttackRelease(e,t,s),g.a.schedule((function(){n(Object(x.a)(Object(x.a)({},i.current),C(e,!0)))}),s),g.a.schedule((function(){n(Object(x.a)(Object(x.a)({},i.current),C(e,!1)))}),s+t-.05)}return{playNote:s,playNotes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.35;e.forEach((function(e,n){s(e,.25,n*t)}))},notes:t}},F=(n(131),n(96)),D=n(0),A=n(1),M=n(2),E=n(3),G=n(60),P=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],k=["Do","Di","Re","Ri","Mi","Fa","Fi","So","Si","La","Li","Ti"],B=new RegExp(/^([A-G][b#]?)(-?\d+)$/),S=new RegExp(/^([A-G])(-?\d+)$/),L={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},T={Ionian:"CDEFGABC".split(""),Dorian:"DEFGABCD".split(""),Phrygian:"EFGABCDE".split(""),Lydian:"FGABCDEF".split(""),Mixoludian:"GABCDEFG".split(""),Aeolian:"ABCDEFGA".split(""),Locrian:"BCDEFGAB".split("")},I={0:"Perfect unison",1:"Minor second",2:"Major second",3:"Minor third",4:"Major third",5:"Perfect fourth",6:"Tritone",7:"Perfect fifth",8:"Minor sixth",9:"Major sixth",10:"Minor seventh",11:"Major seventh",12:"Perfect octave"},K=function(e){Object(M.a)(n,e);var t=Object(E.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return n}(Object(G.a)(Error)),R=function(e){Object(M.a)(n,e);var t=Object(E.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return n}(Object(G.a)(Error)),H=function(e){return P.indexOf(L[e]||e)},_=function(){function e(t){if(Object(D.a)(this,e),"string"===typeof t){var n=B.exec(t);if(!n)throw new K('"'.concat(t,'" was not in a valid format'));if(this.note=n[1],-1===H(this.note))throw new K('"'.concat(this.note,'" is not a valid note'));this.octave=Number(n[2])}if("number"===typeof t){var i=t%12;this.note=P[i],this.octave=Math.floor(t/12)-1}}return Object(A.a)(e,[{key:"toString",value:function(){return"".concat(this.note).concat(this.octave)}},{key:"valueOf",value:function(){var e=H(this.note);return 12*(this.octave+1)+e}},{key:"solfege",value:function(){return k[H(this.note)]}}]),e}(),q=function(e,t){var n=new _(e),i=new _(t);if(n>i)throw new R("Start note must be lower than end note");for(var a=[n],s=n.valueOf()+1;s<i.valueOf();s++)a.push(new _(s));return a.push(i),a.map((function(e){return e.toString()}))},z=function(e){return new _(e).solfege()},J=function(e){var t=e.note,n=e.onPlay,i=e.highlight,a=e.renderAdditionalKeyLabel,s=e.noDrag,c=w().notes,o=b()("pianoKey",function(e){return S.test(e)}(t)?"whiteKey":"blackKey",{playing:c[t]},{highlight:i}),r={};return n&&(r.onMouseDown=function(e){e.stopPropagation(),n()},s||(r.onMouseOver=function(e){e.stopPropagation(),1===e.buttons&&n()})),Object(m.jsxs)("div",Object(x.a)(Object(x.a)({role:"link",className:o},r),{},{children:[a(t),Object(m.jsx)("div",{className:"solfege",children:z(t)}),Object(m.jsx)("div",{className:"noteName",children:t})]}))},$=n(240),Q=(n(132),function(e){var t=e.startNote,n=void 0===t?"C4":t,i=e.endNote,a=void 0===i?"C5":i,s=e.highlightNotes,c=void 0===s?[]:s,o=e.onPlay,r=void 0===o?$.a:o,l=e.renderAdditionalKeyLabel,d=void 0===l?$.a:l,j=e.noDrag,u=w().playNote,h=q(n,a),b=function(e){return u(e)};return Object(m.jsx)("div",{className:"piano",children:h.map((function(e){return Object(m.jsx)(J,{note:e,onPlay:function(t){return(r||b)(e)},highlight:c.indexOf(e)>-1,renderAdditionalKeyLabel:d,noDrag:j},e)}))})}),U=n(97),V=n.n(U),W=(n(236),function(e){var t=e.children;return Object(m.jsxs)("div",{className:"study-notes",children:[Object(m.jsx)("h2",{className:"subtitle",children:"Study Notes"}),Object(m.jsx)(V.a,{children:t})]})}),X=n(98).a.div(i||(i=Object(F.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  .firstNote, .secondNote {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60px;\n    height: 60px;\n  }\n  >div {\n    padding: 10px;\n    margin-right: 10px;\n    text-align: center;\n  }\n"]))),Y=function(){var e=w().playNote,t=Object(a.useState)(),n=Object(r.a)(t,2),i=n[0],s=n[1],c=Object(a.useState)(),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(a.useState)(),u=Object(r.a)(j,2),h=u[0],b=u[1];Object(a.useEffect)((function(){b(i&&l?function(e,t){var n=q(e,t).length-1;return Object(x.a)({semitones:n},I[n]?{name:I[n]}:{})}(i,l):null)}),[i,l]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"box controls",children:Object(m.jsxs)(X,{children:[i&&Object(m.jsx)("div",{className:"firstNote",children:i}),i&&l&&Object(m.jsx)("div",{children:"to"}),l&&Object(m.jsx)("div",{className:"secondNote",children:l}),h&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:"="}),Object(m.jsxs)("div",{children:[h.semitones," semitones",h.name&&", ".concat(h.name)]})]})]})}),Object(m.jsx)(Q,{startNote:"C4",endNote:"C6",onPlay:function(t){if(l||!i)s(t),d(null);else switch(function(e,t){var n=new _(e),i=new _(t);return n.valueOf()===i.valueOf()?0:n>i?-1:1}(i,t)){case 0:s(null);break;case 1:d(t);break;case-1:s(t),d(i)}e(t)},renderAdditionalKeyLabel:function(e){return e===i?Object(m.jsx)("div",{className:"firstNote",children:"1"}):e===l?Object(m.jsx)("div",{className:"secondNote",children:"2"}):void 0},noDrag:!0}),Object(m.jsx)(W,{children:"\n- **Perfect Fifth**: 7 semitones between notes (C and G)\n- **Diminished Fifth**: 6 semitones between notes (B and F)\n- **Perfect Fourth**: 5 semitones beween notes (C and F)\n- **Major Third**: 4 semitones between notes (C and E)\n- **Minor Third**: 3 semitones between notes (D and F)\n- **Major Second**: 2 semitones between notes (C and D)\n- **Minor Second**: 1 semitone between notes (C and C#)\n  "})]})},Z=n(11),ee=function(){var e=w().playNotes,t=Object(a.useState)("Ionian"),n=Object(r.a)(t,2),i=n[0],s=n[1],c=Object(a.useState)(4),o=Object(r.a)(c,2),l=o[0],d=o[1],j=function(e){var t=Number(arguments.length>1&&void 0!==arguments[1]?arguments[1]:4),n=null;return e.map((function(e,i){var a=H(e);return null!==n&&a<n&&(t+=1),n=a,"".concat(e).concat(t)}))}(T[i],l);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"box controls",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{className:"label",children:"Mode"}),Object(m.jsx)("div",{className:"select",children:Object(m.jsx)("select",{onChange:function(e){return s(e.target.value)},value:i,children:Object.keys(T).map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{className:"label",children:"Octave"}),Object(m.jsx)("div",{className:"select",children:Object(m.jsx)("select",{onChange:function(e){return d(e.target.value)},value:l,children:[0,1,2,3,4,6,7,8].map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})})]}),Object(m.jsx)("button",{className:"button is-primary",onClick:function(){e(j)},children:"Play In Sequence"}),Object(m.jsx)("button",{className:"button is-primary",onClick:function(){e(Object(p.shuffle)([].concat(Object(Z.a)(j),Object(Z.a)(j))))},children:"Play Random"})]}),Object(m.jsx)(Q,{startNote:Object(p.first)(j),endNote:Object(p.last)(j)}),Object(m.jsx)(W,{children:"\n- Modes are diatonic scales, meaning they are made of fives tones and two semitones.\n- **I** **D**on't **P**unch **L**ike **M**uhammed **A**li\n- Assignment was to listen to the various modes and get used to their sounds and qualities.\n  "})]})},te=[{name:"Cmaj",notes:["C4","E4","G4"],className:"is-major"},{name:"Dmin",notes:["D4","F4","A4"],className:"is-minor"},{name:"Emin",notes:["E4","G4","B4"],className:"is-minor"},{name:"Fmaj",notes:["F4","A4","C5"],className:"is-major"},{name:"Gmaj",notes:["G4","B4","D5"],className:"is-major"},{name:"Amin",notes:["A4","C5","E5"],className:"is-minor"},{name:"Bdim",notes:["B4","D5","F5"],className:"is-diminished"}],ne=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=w().playNote,c=function(e){i(e?e.notes:[])};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"box controls",children:te.map((function(e){return Object(m.jsx)("button",{className:b()("button",e.className),onMouseOver:function(){return c(e)},onMouseOut:function(){return c()},onClick:function(){return function(e){s(e.notes)}(e)},children:e.name},e.name)}))}),Object(m.jsx)(Q,{startNote:"C4",endNote:"F5",highlightNotes:n}),Object(m.jsx)(W,{children:"\n- Triads are the simples types of chords\n- These are all the triads that can be derived from C-major scale\n- **Major triads** have a perfect fifth and a major third\n- **Minor triads** have a perfecct fifth and a minor third\n- **Diminished triads** have a diminished fifth and a minor third\n  "})]})};var ie=function(){var e=d()({}),t=Object(r.a)(e,3),n=t[0],i=t[1],a=t[2];return Object(m.jsxs)(y.Provider,{value:{notes:n,setNotes:i,ref:a},children:[Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsxs)(u.a,{exact:!0,path:"/",children:[Object(m.jsxs)("p",{children:["Hello, doing some stuff to follow along with ",Object(m.jsx)("a",{href:"https://www.coursera.org/learn/edinburgh-music-theory",children:"Fundamentals of Music Theory"}),"."]}),Object(m.jsx)("p",{children:"-Pawel"})]}),Object(m.jsx)(u.a,{path:"/intervals",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(u.a,{path:"/modes",children:Object(m.jsx)(ee,{})}),Object(m.jsx)(u.a,{path:"/introChords",children:Object(m.jsx)(ne,{})})]})]})}),Object(m.jsx)("a",{href:"https://github.com/makenai/music",className:"fork-me",children:Object(m.jsx)("img",{loading:"lazy",width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"})})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),ae()}},[[238,1,2]]]);
//# sourceMappingURL=main.ecd33c45.chunk.js.map