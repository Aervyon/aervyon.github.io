(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(n,e,t){var content=t(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(58).default)("1239d49d",content,!0,{sourceMap:!1})},152:function(n,e,t){"use strict";var o={data:function(){return{urls:[{title:"github",url:"https://github.com/VoidNulll"},{title:"twitter",url:"https://twitter.com/VoidNulll0515"}]}}},r=(t(197),t(41)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"h-screen flex flex-col"},[t("Nuxt",{staticClass:"flex-grow"}),n._v(" "),t("footer",{staticClass:"flex bg-primary-dark p-2 pin-b flex-wrap"},[t("h1",{staticClass:"text-accent text-md lg:text-xl"},[n._v("\n      © "+n._s((new Date).getFullYear())+" VoidNulll\n    ")]),n._v(" "),n._m(0)])],1)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"float-right max-w-sm md:absolute md:right-8",attrs:{"aria-label":"links"}},[t("a",{staticClass:"ml-4 text-url-dark",attrs:{href:"https://github.com/VoidNulll/VoidNulll/issues/new?assignees=VoidNulll&template=bug_report.md"}},[n._v("Submit Bug Report")]),n._v(" "),t("a",{staticClass:"ml-4 text-url-dark",attrs:{href:"https://github.com/VoidNulll/VoidNulll/issues/new?labels=enhancement&template=site-suggestion.md"}},[n._v("Submit Site Suggestion")])])}],!1,null,null,null);e.a=component.exports},153:function(n,e,t){t(154),n.exports=t(155)},195:function(n,e,t){var content=t(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(58).default)("382a115c",content,!0,{sourceMap:!1})},196:function(n,e,t){var o=t(57)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.1.3 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*{--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;}.static{position:static;}.float-right{float:right;}.mx-4{margin-left:1rem;margin-right:1rem;}.mx-16{margin-left:4rem;margin-right:4rem;}.ml-4{margin-left:1rem;}.mt-10{margin-top:2.5rem;}.mb-4{margin-bottom:1rem;}.ml-24{margin-left:6rem;}.mb-5{margin-bottom:1.25rem;}.ml-2{margin-left:0.5rem;}.ml-10{margin-left:2.5rem;}.mb-2{margin-bottom:0.5rem;}.mt-8{margin-top:2rem;}.mb-7{margin-bottom:1.75rem;}.mb-14{margin-bottom:3.5rem;}.mt-7{margin-top:1.75rem;}.mb-6{margin-bottom:1.5rem;}.block{display:block;}.flex{display:flex;}.h-screen{height:100vh;}.w-full{width:100%;}.max-w-sm{max-width:24rem;}.flex-grow{flex-grow:1;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.place-self-center{place-self:center;}.border{border-width:1px;}.border-2{border-width:2px;}.border-highlight-dark{--tw-border-opacity:1;border-color:rgba(86, 138, 151, var(--tw-border-opacity));}.border-accent{--tw-border-opacity:1;border-color:rgba(185, 245, 216, var(--tw-border-opacity));}.bg-dark{--tw-bg-opacity:1;background-color:rgba(32, 33, 36, var(--tw-bg-opacity));}.bg-primary-dark{--tw-bg-opacity:1;background-color:rgba(41, 44, 52, var(--tw-bg-opacity));}.p-2{padding:0.5rem;}.p-1{padding:0.25rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-\\[2\\.85rem\\]{padding-left:2.85rem;padding-right:2.85rem;}.text-center{text-align:center;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.font-bold{font-weight:700;}.text-accent{--tw-text-opacity:1;color:rgba(185, 245, 216, var(--tw-text-opacity));}.text-url-dark{--tw-text-opacity:1;color:rgba(14, 179, 99, var(--tw-text-opacity));}.text-highlight-dark{--tw-text-opacity:1;color:rgba(86, 138, 151, var(--tw-text-opacity));}.text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity));}.underline{text-decoration:underline;}.hover\\:text-accent:hover{--tw-text-opacity:1;color:rgba(185, 245, 216, var(--tw-text-opacity));}@media (min-width: 768px){.md\\:absolute{position:absolute;}.md\\:right-8{right:2rem;}.md\\:mx-0{margin-left:0px;margin-right:0px;}.md\\:ml-14{margin-left:3.5rem;}.md\\:mb-16{margin-bottom:4rem;}.md\\:ml-20{margin-left:5rem;}.md\\:mt-0{margin-top:0px;}.md\\:ml-6{margin-left:1.5rem;}.md\\:block{display:block;}.md\\:flex{display:flex;}.md\\:place-self-center{place-self:center;}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:max-w-screen-md{max-width:768px;}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.lg\\:text-5xl{font-size:3rem;line-height:1;}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem;}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}}@media (min-width: 1280px){.xl\\:mt-28{margin-top:7rem;}.xl\\:max-w-screen-lg{max-width:1024px;}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}}@media (min-width: 1536px){.\\32xl\\:mb-32{margin-bottom:8rem;}.\\32xl\\:ml-\\[calc\\(100vw-68\\.5rem\\)\\]{margin-left:calc(100vw - 68.5rem);}.\\32xl\\:mr-14{margin-right:3.5rem;}.\\32xl\\:w-72{width:18rem;}.\\32xl\\:border-4{border-width:4px;}.\\32xl\\:text-right{text-align:right;}}",""]),n.exports=o},197:function(n,e,t){"use strict";t(146)},198:function(n,e,t){var o=t(57)((function(i){return i[1]}));o.push([n.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),n.exports=o}},[[153,4,1,5]]]);