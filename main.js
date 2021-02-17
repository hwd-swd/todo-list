(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(r){t(1,arguments);var n=e(r);return!isNaN(n)}var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(e){var r=e||{},n=r.width?String(r.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var i,o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,r){var n,a=r||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;n=t.values[s]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e,r){var n=String(e),a=r||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=n.match(o);if(!u)return null;var s,c=u[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var r=0;r<t.length;r++)if(t[r].test(c))return r}(l):function(t,e){for(var r in t)if(t.hasOwnProperty(r)&&t[r].test(c))return r}(l),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(c.length)}}}const l={code:"en-US",formatDistance:function(t,e,r){var a;return r=r||{},a="string"==typeof n[t]?n[t]:1===e?n[t].one:n[t].other.replace("{{count}}",e),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:function(t,e,r,n){return u[t]},localize:{ordinalNumber:function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var r=String(t),n=e||{},a=r.match(i.matchPattern);if(!a)return null;var o=a[0],u=r.match(i.parsePattern);if(!u)return null;var s=i.valueCallback?i.valueCallback(u[0]):u[0];return{value:s=n.valueCallback?n.valueCallback(s):s,rest:r.slice(o.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function d(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(r,n){t(2,arguments);var a=e(r).getTime(),i=d(n);return new Date(a+i)}function m(e,r){t(2,arguments);var n=d(r);return h(e,-n)}function f(t,e){for(var r=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return r+n}const g=function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return f("yy"===e?n%100:n,e.length)},p=function(t,e){var r=t.getUTCMonth();return"M"===e?String(r+1):f(r+1,2)},y=function(t,e){return f(t.getUTCDate(),e.length)},w=function(t,e){return f(t.getUTCHours()%12||12,e.length)},v=function(t,e){return f(t.getUTCHours(),e.length)},b=function(t,e){return f(t.getUTCMinutes(),e.length)},T=function(t,e){return f(t.getUTCSeconds(),e.length)},C=function(t,e){var r=e.length,n=t.getUTCMilliseconds();return f(Math.floor(n*Math.pow(10,r-3)),e.length)};var k=864e5;function S(r){t(1,arguments);var n=1,a=e(r),i=a.getUTCDay(),o=(i<n?7:0)+i-n;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function x(r){t(1,arguments);var n=e(r),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=S(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=S(u);return n.getTime()>=o.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}function j(e){t(1,arguments);var r=x(e),n=new Date(0);n.setUTCFullYear(r,0,4),n.setUTCHours(0,0,0,0);var a=S(n);return a}var P=6048e5;function D(r,n){t(1,arguments);var a=n||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:d(o),s=null==a.weekStartsOn?u:d(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(r),l=c.getUTCDay(),h=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function M(r,n){t(1,arguments);var a=e(r,n),i=a.getUTCFullYear(),o=n||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:d(s),l=null==o.firstWeekContainsDate?c:d(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,l),h.setUTCHours(0,0,0,0);var m=D(h,n),f=new Date(0);f.setUTCFullYear(i,0,l),f.setUTCHours(0,0,0,0);var g=D(f,n);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function N(e,r){t(1,arguments);var n=r||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:d(i),u=null==n.firstWeekContainsDate?o:d(n.firstWeekContainsDate),s=M(e,r),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var l=D(c,r);return l}var q=6048e5;function E(t,e){var r=t>0?"-":"+",n=Math.abs(t),a=Math.floor(n/60),i=n%60;if(0===i)return r+String(a);var o=e||"";return r+String(a)+o+f(i,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):_(t,e)}function _(t,e){var r=e||"",n=t>0?"-":"+",a=Math.abs(t);return n+f(Math.floor(a/60),2)+r+f(a%60,2)}const L={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if("yo"===e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,r,n){var a=M(t,n),i=a>0?a:1-a;return"YY"===e?f(i%100,2):"Yo"===e?r.ordinalNumber(i,{unit:"year"}):f(i,e.length)},R:function(t,e){return f(x(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return f(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return f(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return p(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return f(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(r,n,a,i){var o=function(r,n){t(1,arguments);var a=e(r),i=D(a,n).getTime()-N(a,n).getTime();return Math.round(i/q)+1}(r,i);return"wo"===n?a.ordinalNumber(o,{unit:"week"}):f(o,n.length)},I:function(r,n,a){var i=function(r){t(1,arguments);var n=e(r),a=S(n).getTime()-j(n).getTime();return Math.round(a/P)+1}(r);return"Io"===n?a.ordinalNumber(i,{unit:"week"}):f(i,n.length)},d:function(t,e,r){return"do"===e?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):y(t,e)},D:function(r,n,a){var i=function(r){t(1,arguments);var n=e(r),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=n.getTime(),o=a-i;return Math.floor(o/k)+1}(r);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):f(i,n.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return f(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return f(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),a=0===n?7:n;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n,a=t.getUTCHours();switch(n=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n,a=t.getUTCHours();switch(n=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return w(t,e)},H:function(t,e,r){return"Ho"===e?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return"Ko"===e?r.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?r.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},m:function(t,e,r){return"mo"===e?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,r){return"so"===e?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return C(t,e)},X:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return U(a);case"XXXX":case"XX":return _(a);case"XXXXX":case"XXX":default:return _(a,":")}},x:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(a);case"xxxx":case"xx":return _(a);case"xxxxx":case"xxx":default:return _(a,":")}},O:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+E(a,":");case"OOOO":default:return"GMT"+_(a,":")}},z:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+E(a,":");case"zzzz":default:return"GMT"+_(a,":")}},t:function(t,e,r,n){var a=n._originalDate||t;return f(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,r,n){return f((n._originalDate||t).getTime(),e.length)}};function W(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const Y={p:A,P:function(t,e){var r,n=t.match(/(P+)(p+)?/),a=n[1],i=n[2];if(!i)return W(t,e);switch(a){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;case"PPPP":default:r=e.dateTime({width:"full"})}return r.replace("{{date}}",W(a,e)).replace("{{time}}",A(i,e))}};var O=6e4;function I(t){return t.getTime()%O}function z(t){var e=new Date(t.getTime()),r=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var n=r>0?(O+I(e))%O:I(e);return r*O+n}var F=["D","DD"],H=["YY","YYYY"];function X(t){return-1!==F.indexOf(t)}function Q(t){return-1!==H.indexOf(t)}function B(t,e,r){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,J=/''/g,Z=/[a-zA-Z]/;function V(n,a,i){t(2,arguments);var o=String(a),u=i||{},s=u.locale||l,c=s.options&&s.options.firstWeekContainsDate,h=null==c?1:d(c),f=null==u.firstWeekContainsDate?h:d(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=s.options&&s.options.weekStartsOn,p=null==g?0:d(g),y=null==u.weekStartsOn?p:d(u.weekStartsOn);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var w=e(n);if(!r(w))throw new RangeError("Invalid time value");var v=z(w),b=m(w,v),T={firstWeekContainsDate:f,weekStartsOn:y,locale:s,_originalDate:w},C=o.match(R).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,s.formatLong,T):t})).join("").match(G).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return K(t);var r=L[e];if(r)return!u.useAdditionalWeekYearTokens&&Q(t)&&B(t,a,n),!u.useAdditionalDayOfYearTokens&&X(t)&&B(t,a,n),r(b,t,s.localize,T);if(e.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return C}function K(t){return t.match($)[1].replace(J,"'")}class tt{constructor(t,e,r,n,a){this._title=t,this._description=e,this._date=r,this._priority=n,this._complete=a}get title(){return this._title}set title(t){this._title=t}get description(){return this._description}set description(t){this._description=t}get date(){return this._date}set date(t){this._date=t}get priority(){return this._priority}set priority(t){this._priority=t}get complete(){return this._complete}set complete(t){this._complete=t}toggleComplete(){1==this._complete?this._complete=!1:this._complete=!0}togglePriority(){1==this._priority?this._priority=!1:this._priority=!0}getDate(){let[t,e,r]=V(this._date,"MM/dd/yyyy").split("/");return t=parseInt(t).toString(),e=parseInt(e).toString(),r=parseInt(r).toString(),`${t}/${e}/${r}`}getDateNormal(){return V(this._date,"yyyy-MM-dd")}}class et{constructor(t){this._projectName=t,this._tasks=[]}get projectName(){return this._projectName}get tasks(){return this._tasks}addTask(t){this._tasks.push(t),this.sortProject()}hasTask(t){return this._tasks.some((e=>e.title==t))}returnTask(t){return this._tasks[t]}removeTask(t){this._tasks.splice(t,1)}deleteTask(t){if(!this.hasTask(t))return!1;this.removeTask(this.taskIndex(t))}taskIndex(t){return this._tasks.findIndex((e=>e.title==t))}toggleCompleteTask(t){this._tasks[t].toggleComplete(),this.sortProject()}togglePriorityTask(t){this._tasks[t].togglePriority(),this.sortProject()}sortProject(){this._tasks.sort(((r,n)=>1==r.complete&&0==n.complete?1:0==r.complete&&1==n.complete||1==r.priority&&0==n.priority?-1:0==r.priority&&1==n.priority?1:function(r,n){t(2,arguments);var a=e(r),i=e(n);return a.getTime()<i.getTime()}(r.date,n.date)?-1:1))}}class rt{constructor(){this._projects=[],this.pushProject("Inbox"),new tt("t1","d1",new Date(2017,1,5),!1,!1)}get projects(){return this._projects}pushTask(t,e){this._projects[this.projectIndex(e)].addTask(t)}projectIndex(t){return this._projects.findIndex((e=>e.projectName==t))}pushProject(t){this.hasProject(t)||this._projects.push(new et(t))}hasProject(t){return this._projects.some((e=>e.projectName==t))}getTask(t,e){return this._projects[this.projectIndex(e)].returnTask(t)}removeTask(t,e){return!!this.hasProject(e)&&this._projects[this.projectIndex(e)].removeTask(t)}deleteTask(t,e){return!!this.hasProject(e)&&this._projects[this.projectIndex(e)].deleteTask(t)}toggleTaskComplete(t,e){return!!this.hasProject(e)&&this._projects[this.projectIndex(e)].toggleCompleteTask(t)}togglePriority(t,e){return!!this.hasProject(e)&&this._projects[this.projectIndex(e)].togglePriorityTask(t)}}var nt=36e5,at={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},it=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ot=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ut=/^([+-])(\d{2})(?::?(\d{2}))?$/;function st(t){var e,r={},n=t.split(at.dateTimeDelimiter);if(n.length>2)return r;if(/:/.test(n[0])?(r.date=null,e=n[0]):(r.date=n[0],e=n[1],at.timeZoneDelimiter.test(r.date)&&(r.date=t.split(at.timeZoneDelimiter)[0],e=t.substr(r.date.length,t.length))),e){var a=at.timezone.exec(e);a?(r.time=e.replace(a[1],""),r.timezone=a[1]):r.time=e}return r}function ct(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(r);if(!n)return{year:null};var a=n[1]&&parseInt(n[1]),i=n[2]&&parseInt(n[2]);return{year:null==i?a:100*i,restDateString:t.slice((n[1]||n[2]).length)}}function lt(t,e){if(null===e)return null;var r=t.match(it);if(!r)return null;var n=!!r[4],a=dt(r[1]),i=dt(r[2])-1,o=dt(r[3]),u=dt(r[4]),s=dt(r[5])-1;if(n)return function(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}(0,u,s)?function(t,e,r){var n=new Date(0);n.setUTCFullYear(t,0,4);var a=7*(e-1)+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+a),n}(e,u,s):new Date(NaN);var c=new Date(0);return function(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(gt[e]||(pt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(pt(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}function dt(t){return t?parseInt(t):1}function ht(t){var e=t.match(ot);if(!e)return null;var r=mt(e[1]),n=mt(e[2]),a=mt(e[3]);return function(t,e,r){return 24===t?0===e&&0===r:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}(r,n,a)?r*nt+6e4*n+1e3*a:NaN}function mt(t){return t&&parseFloat(t.replace(",","."))||0}function ft(t){if("Z"===t)return 0;var e=t.match(ut);if(!e)return 0;var r="+"===e[1]?-1:1,n=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?r*(n*nt+6e4*a):NaN}var gt=[31,null,31,30,31,30,31,31,30,31,30,31];function pt(t){return t%400==0||t%4==0&&t%100}let yt=function(){let e=JSON.parse(localStorage.getItem("todoList")),r=new rt;return e._projects.forEach((e=>{r.pushProject(e._projectName),e._tasks.forEach((n=>{let a=new tt(n._title,n._description,function(e,r){t(1,arguments);var n=r||{},a=null==n.additionalDigits?2:d(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=st(e);if(o.date){var u=ct(o.date,a);i=lt(u.restDateString,u.year)}if(isNaN(i)||!i)return new Date(NaN);var s,c=i.getTime(),l=0;if(o.time&&(l=ht(o.time),isNaN(l)||null===l))return new Date(NaN);if(!o.timezone){var h=new Date(c+l),m=new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds());return m.setFullYear(h.getUTCFullYear()),m}return s=ft(o.timezone),isNaN(s)?new Date(NaN):new Date(c+l+s)}(n._date),n._priority,n._complete);r.pushTask(a,e._projectName)}))})),r},wt=function(t){localStorage.setItem("todoList",JSON.stringify(t))};function vt(r){t(1,arguments);var n=e(r);return n.setHours(0,0,0,0),n}function bt(e,r){t(2,arguments);var n=vt(e),a=vt(r);return n.getTime()===a.getTime()}function Tt(e){return t(1,arguments),bt(e,Date.now())}let Ct=function(){const t=document.querySelector("#project");t.innerHTML="",zt.projects.forEach((e=>{let r=document.createElement("option");r.setAttribute("value",e.projectName),r.textContent=e.projectName,t.appendChild(r)}))},kt=function(){const t=document.querySelector("#overlay");Ct(),t.style.display="block"},St=function(){document.querySelector("#title").value="",document.querySelector("#date").value="",document.querySelector("#priority").checked=!1,document.querySelector("#description").value=""},xt=function(){St(),document.querySelector("#overlay").style.display="none"},jt=function(){const t=document.querySelector("#project").value,e=document.querySelector("#title").value;let r=document.querySelector("#date").value;const n=document.querySelector("#priority").checked,a=document.querySelector("#description").value;if(""==e)alert("Please fill out a title");else if(""==r)alert("Please fill out a date");else{let[i,o,u]=r.split("-"),s=new Date(parseInt(i),parseInt(o)-1,parseInt(u)),c=new tt(e,a,s,n,!1);zt.pushTask(c,t),Pt(t),xt()}},Pt=function(t){if("Today"==t){Ut(),document.querySelector(".todoTitle").textContent="Today";let e=document.querySelector(".todoList");zt.projects.forEach((t=>{for(let r=0;r<t.tasks.length;r++){let n=t.tasks[r];Tt(n.date)&&e.appendChild(Dt(n,t.projectName,r))}})),document.querySelectorAll(".project").forEach((e=>{e.textContent==t?e.classList.add("active"):e.classList.remove("active")})),wt(zt)}else if(zt.hasProject(t)){Ut(),document.querySelector(".todoTitle").textContent=t;let e=document.querySelector(".todoList"),r=zt.projectIndex(t);for(let n=0;n<zt.projects[r].tasks.length;n++){let a=zt.projects[r].tasks[n];e.appendChild(Dt(a,t,n))}document.querySelectorAll(".project").forEach((e=>{e.textContent==t?e.classList.add("active"):e.classList.remove("active")})),wt(zt)}},Dt=function(t,e,r){let n=document.createElement("div");n.setAttribute("class","taskContainer"),t.complete&&(n.className+=" completed");let a=document.createElement("div");a.setAttribute("class","taskLeft"),n.appendChild(a);let i=document.createElement("div");i.setAttribute("class","checkBox"),a.appendChild(i),i.setAttribute("value",r);let o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("value",r),o.setAttribute("project",e),1==t.complete&&o.setAttribute("checked",!0),i.appendChild(o),i.addEventListener("click",qt);let u=document.createElement("p");u.textContent=`${t.title}`,a.appendChild(u),t.complete&&(u.className+=" completedText");let s=document.createElement("div");s.setAttribute("class","taskRight"),n.appendChild(s);let c=document.createElement("button");c.setAttribute("type","button"),c.setAttribute("value",r),c.setAttribute("project",e),c.textContent="EDIT",c.addEventListener("click",Mt),s.appendChild(c);let l=document.createElement("input");l.setAttribute("type","checkbox"),l.setAttribute("value",r),l.setAttribute("project",e),1==t.priority&&l.setAttribute("checked",!0),s.appendChild(l),l.addEventListener("click",Et);let d=document.createElement("p");d.setAttribute("class","date"),d.textContent=`${t.getDate()}`,s.appendChild(d),t.complete&&(d.className+=" completedText");let h=document.createElement("p");return h.setAttribute("class","taskDelete"),h.textContent="X",h.setAttribute("value",r),h.setAttribute("project",e),h.addEventListener("click",Nt),s.appendChild(h),n},Mt=function(t){const e=document.querySelector("#overlay");Ct();let r=t.target.getAttribute("value"),n=t.target.getAttribute("project");const a=zt.getTask(r,n);e.style.display="block",document.querySelector("#project").value=n,document.querySelector("#title").value=a.title,document.querySelector("#date").value=a.getDateNormal(),a.priority&&(document.querySelector("#priority").checked=!0),document.querySelector("#description").value=a.description,zt.removeTask(r,n)},Nt=function(t){let e=t.target.getAttribute("value"),r=t.target.getAttribute("project");zt.removeTask(e,r),Pt(r)},qt=function(t){let e=t.target.getAttribute("value"),r=t.target.getAttribute("project");zt.toggleTaskComplete(e,r),Pt(r)},Et=function(t){let e=t.target.getAttribute("value"),r=t.target.getAttribute("project");zt.togglePriority(e,r),Pt(r)},Ut=function(){document.querySelector(".todoList").innerHTML=""},_t=function(){document.querySelectorAll(".project").forEach((t=>{t.addEventListener("click",(t=>Pt(t.target.textContent)))}))},Lt=function(){const t=document.querySelector("#projectTitle").value;""==t||zt.hasProject(t)||(zt.pushProject(t),Yt(),At(),Pt(t))},Wt=function(){document.querySelector(".addProject").style.display="none",document.querySelector(".addProjectForm").style.display="flex"},At=function(){document.querySelector(".addProject").style.display="flex";const t=document.querySelector(".addProjectForm");document.querySelector("#projectTitle").value="",t.style.display="none"},Yt=function(){It();let t=document.querySelector(".customProjects");zt.projects.forEach((e=>{"Inbox"!=e.projectName&&t.appendChild(Ot(e))})),_t()},Ot=function(t){let e=document.createElement("h2");return e.setAttribute("class","project"),e.textContent=t.projectName,e},It=function(){document.querySelector(".customProjects").innerHTML=""},zt=function(){if(null===localStorage.getItem("todoList")){let t=new rt;return localStorage.setItem("todoList",JSON.stringify(t)),yt()}return yt()}();document.querySelector(".addTask").addEventListener("click",kt),document.querySelector("#close").addEventListener("click",xt),document.querySelector("#submit").addEventListener("click",jt),document.querySelector("#clearForm").addEventListener("click",St),document.querySelector(".addProject").addEventListener("click",Wt),document.querySelector("#submitProject").addEventListener("click",Lt),document.querySelector("#cancelProject").addEventListener("click",At),Pt("Inbox"),Yt(),_t()})();