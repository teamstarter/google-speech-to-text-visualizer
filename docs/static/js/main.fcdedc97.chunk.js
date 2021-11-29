(this["webpackJsonpgoogle-speech-to-text-visualizer"]=this["webpackJsonpgoogle-speech-to-text-visualizer"]||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),C=s(6),l=s.n(C),c=(s(11),s(2)),r=s(3),i=s(5);s(12);function o(e){var t=parseInt(e,10),s=Math.floor(t/3600),n=Math.floor((t-3600*s)/60),a=t-3600*s-60*n;return s<10&&(s="0"+s),n<10&&(n="0"+n),a<10&&(a="0"+a),0===parseInt(s)?n+":"+a:s+":"+n+":"+a}var d=s(0);function b(e){var t=e.conversation,s=e.colors,n=e.users;return Object(d.jsx)("div",{className:"w-100",children:t&&t.results.map((function(e){var t=e.alternatives.map((function(e){return e.transcript}));if(!t.join("").length)return null;var a=e.alternatives[0].words[0].startTime;return Object(d.jsx)("div",{className:"pb1 flex",children:Object(d.jsxs)("span",{className:"code f7 black-40",children:[o(a)," ",Object(d.jsxs)("span",{className:"f5 fw4 sans-serif dark-gray",children:[Object(d.jsxs)("span",{className:"fw6 ".concat(s[e.channelTag-1]),children:[n[e.channelTag],":"," "]}),t.join(" ")]})]})})}))})}function j(e){return e.includes(".")?parseInt(e.replace(".","").replace("s",""),10)/100:1e3*parseInt(e.replace("s",""),10)/100}function u(e){var t=e.users,s=e.user,n=e.conversation,a=e.colors,C=j(n.results[n.results.length-1].resultEndTime);return Object(d.jsxs)("div",{className:"",style:{width:"".concat(100/Object.keys(t).length,"%")},children:[Object(d.jsxs)("h3",{children:["Timeline of ",t[s]]}),Object(d.jsx)("div",{className:"relative",style:{width:"95%",height:C},children:n&&n.results.filter((function(e){return e.channelTag===parseInt(s,10)})).map((function(e){var s=e.alternatives.map((function(e){return e.transcript}));if(!s.join("").length)return null;var n=e.alternatives[0].words[0].startTime;if(!e.alternatives[0].words[0].startTime)return null;var C=j(e.resultEndTime)-j(e.alternatives[0].words[0].startTime);return Object(d.jsx)("div",{className:"pb1 flex absolute left-0 pa2 showOnHover",style:{top:j(e.alternatives[0].words[0].startTime),minHeight:"".concat(C<30?30:C,"px"),boxShadow:"rgb(85 85 85 / 25%) 3px 4px 6px 1px",borderRadius:"0 15px 15px 15px"},children:Object(d.jsxs)("span",{className:"code f7 black-40",children:[o(n)," ",Object(d.jsxs)("span",{className:"fw4 sans-serif dark-gray",style:{fontSize:18},children:[Object(d.jsxs)("span",{className:"fw6 ".concat(a[e.channelTag-1]),children:[t[e.channelTag],":"," "]}),s.join(" ")]})]})})}))})]})}function h(e){var t=e.users,s=e.conversation,n=e.colors;return Object(d.jsx)("div",{className:"flex w-100",children:Object.keys(t).map((function(e){return Object(d.jsx)(u,{user:e,users:t,conversation:s,colors:n})}))})}function x(e){return e.results.reduce((function(e,t){return Object(i.a)(Object(r.a)({},t.channelTag,null),e)}),{})}var m=["dark-blue","dark-red","dark-green","dark-orange"];var f=function(){var e=Object(n.useState)(window.localStorage.getItem("lastConversation")),t=Object(c.a)(e,2),s=t[0],a=t[1],C=s?JSON.parse(s):null,l=Object(n.useState)(s?C:null),r=Object(c.a)(l,2),o=r[0],j=r[1],u=Object(n.useState)(s?x(C):{}),f=Object(c.a)(u,2),p=f[0],v=f[1],O=Object(n.useState)("timelines"),w=Object(c.a)(O,2),g=w[0],H=w[1],V=function(e){var t=e.target.name,s=Object(i.a)({},p);s[t]=e.target.value,v(s)};return Object(d.jsxs)("div",{className:"App pa4 sans-serif mid-gray flex flex-column justify-center items-center w-100",children:[Object(d.jsx)("h2",{className:"dib mt0 f3 dark-blue mb2",children:"\ud83d\udc40 Google-speech-to-text Visualizer"}),Object(d.jsxs)("div",{className:"",style:{minWidth:800},children:[o?null:Object(d.jsxs)("div",{className:"w-100",children:[Object(d.jsxs)("div",{className:"pt3",children:["\u2b07\ufe0f \xa0 Paste the content from a json transcipt bellow to get a version easily readable and reusable.",Object(d.jsx)("div",{className:"pv3 fw2",children:"\ud83d\udd75\ufe0f This code runs in your browser and do not share your transcript to anyone."})]}),Object(d.jsx)("textarea",{type:"textarea",name:"textValue",value:s,onChange:function(e){var t=JSON.parse(e.target.value),s=x(t);v(s),j(t),window.localStorage.setItem("lastConversation",JSON.stringify(t))},className:"relative dib w-100 b--dark-blue br2 bg-white z-1",style:{minHeight:600,whiteSpace:"pre-wrap"}})]}),Object(d.jsxs)("div",{className:"ml4 w-100",children:[o&&o.results.length>0?Object(d.jsxs)("div",{className:"flex mt4 justify-between",children:[Object(d.jsx)("div",{className:"flex",children:Object.keys(p).map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{children:["\ud83d\udc64 n\xb0",e]}),Object(d.jsx)("input",{type:"text",name:e,onChange:V,className:"mh2 pa2 br2 b--".concat(m[e-1]),placeholder:"Name",style:{width:110}})]})}))}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("button",{onClick:function(){window.localStorage.removeItem("lastConversation",null),a(null),j(null)},className:"bg-white b-blue blue white br2 ba pa2 f5 ph3 fw5 mr3",children:"Reset"}),Object(d.jsx)("button",{onClick:function(){!function(e){var t=document.createRange();t.selectNodeContents(e);var s=window.getSelection();s.removeAllRanges(),s.addRange(t)}(document.getElementById("transformed-text"))},className:"bg-dark-blue white br2 ba pa2 f5 ph3 fw5",children:"Select all the text"})]})]}):null,o?Object(d.jsxs)("div",{id:"transformed-text",className:"relative mt3 w-100 bg-white z-1 pa3",style:{minWidth:800,maxWidth:800},children:[Object(d.jsxs)("div",{className:"flex w-100 bb mb3",style:{borderBottomColor:"lightgray"},children:[Object(d.jsx)("div",{href:"#",className:"link blue pa2 pointer ".concat("timelines"===g?"fw7":""),onClick:function(){return H("timelines")},children:"Timelines"}),Object(d.jsx)("div",{href:"#",className:"link blue pa2 pointer ".concat("textOnly"===g?"fw7":""),onClick:function(){return H("textOnly")},children:"Text only"})]}),"textOnly"===g?Object(d.jsx)(b,{conversation:o,colors:m,users:p}):null,"timelines"===g?Object(d.jsx)(h,{conversation:o,colors:m,users:p}):null]}):null]})]}),Object(d.jsx)("div",{className:"fixed o-10 z-0 pen",style:{bottom:-50,right:-50,width:400},children:Object(d.jsxs)("svg",{className:"w-100",viewBox:"0 0 159 196",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M47.2671 152.631C49.6664 150.014 51.2527 146.754 51.8325 143.249C52.4123 139.744 51.9605 136.146 50.5323 132.894C49.1041 129.642 46.7612 126.877 43.7895 124.935C40.8178 122.993 37.3457 121.959 33.7969 121.959C30.2481 121.959 26.776 122.993 23.8043 124.935C20.8325 126.877 18.4896 129.642 17.0614 132.894C15.6332 136.146 15.1815 139.744 15.7613 143.249C16.3411 146.754 17.9274 150.014 20.3266 152.631C16.5322 152.944 12.9933 154.672 10.4099 157.471C7.82642 160.271 6.38654 163.939 6.375 167.75V173.85C6.375 174.659 6.69601 175.435 7.26741 176.007C7.83881 176.579 8.61379 176.9 9.42188 176.9C10.23 176.9 11.0049 176.579 11.5763 176.007C12.1477 175.435 12.4688 174.659 12.4688 173.85V167.75C12.4688 165.323 13.4318 162.996 15.146 161.28C16.8602 159.564 19.1851 158.6 21.6094 158.6H45.9844C48.4086 158.6 50.7336 159.564 52.4478 161.28C54.162 162.996 55.125 165.323 55.125 167.75V189.1H12.4688V186.05C12.4688 185.241 12.1477 184.465 11.5763 183.893C11.0049 183.321 10.23 183 9.42188 183C8.61379 183 7.83881 183.321 7.26741 183.893C6.69601 184.465 6.375 185.241 6.375 186.05V192.15C6.375 192.959 6.69601 193.735 7.26741 194.307C7.83881 194.879 8.61379 195.2 9.42188 195.2H58.1719C58.98 195.2 59.7549 194.879 60.3263 194.307C60.8977 193.735 61.2188 192.959 61.2188 192.15V167.75C61.2072 163.939 59.7673 160.271 57.1839 157.471C54.6004 154.672 51.0616 152.944 47.2671 152.631ZM33.7969 128.1C36.2073 128.1 38.5637 128.816 40.5679 130.156C42.5721 131.497 44.1342 133.402 45.0567 135.631C45.9791 137.861 46.2205 140.314 45.7502 142.68C45.2799 145.047 44.1192 147.22 42.4147 148.927C40.7103 150.633 38.5387 151.795 36.1745 152.266C33.8104 152.736 31.3599 152.495 29.1329 151.571C26.9059 150.648 25.0025 149.084 23.6633 147.078C22.3242 145.072 21.6094 142.713 21.6094 140.3C21.6094 137.064 22.8934 133.961 25.179 131.673C27.4646 129.385 30.5645 128.1 33.7969 128.1V128.1Z",fill:"black"}),Object(d.jsx)("path",{d:"M138.673 152.631C141.073 150.014 142.659 146.754 143.239 143.249C143.819 139.744 143.367 136.146 141.939 132.894C140.51 129.642 138.167 126.877 135.196 124.935C132.224 122.993 128.752 121.959 125.203 121.959C121.654 121.959 118.182 122.993 115.211 124.935C112.239 126.877 109.896 129.642 108.468 132.894C107.039 136.146 106.588 139.744 107.168 143.249C107.747 146.754 109.334 150.014 111.733 152.631C107.938 152.944 104.4 154.672 101.816 157.471C99.2327 160.271 97.7928 163.939 97.7812 167.75V192.15C97.7812 192.959 98.1023 193.735 98.6737 194.307C99.2451 194.879 100.02 195.2 100.828 195.2H131.297C132.105 195.2 132.88 194.879 133.451 194.307C134.023 193.735 134.344 192.959 134.344 192.15C134.344 191.341 134.023 190.565 133.451 189.993C132.88 189.421 132.105 189.1 131.297 189.1H103.875V167.75C103.875 165.323 104.838 162.996 106.552 161.28C108.266 159.564 110.591 158.6 113.016 158.6H137.391C139.815 158.6 142.14 159.564 143.854 161.28C145.568 162.996 146.531 165.323 146.531 167.75V189.1H143.484C142.676 189.1 141.901 189.421 141.33 189.993C140.759 190.565 140.438 191.341 140.438 192.15C140.438 192.959 140.759 193.735 141.33 194.307C141.901 194.879 142.676 195.2 143.484 195.2H149.578C150.386 195.2 151.161 194.879 151.733 194.307C152.304 193.735 152.625 192.959 152.625 192.15V167.75C152.613 163.939 151.174 160.271 148.59 157.471C146.007 154.672 142.468 152.944 138.673 152.631ZM125.203 128.1C127.614 128.1 129.97 128.816 131.974 130.156C133.978 131.497 135.54 133.402 136.463 135.631C137.385 137.861 137.627 140.314 137.156 142.68C136.686 145.047 135.525 147.22 133.821 148.927C132.117 150.633 129.945 151.795 127.581 152.266C125.217 152.736 122.766 152.495 120.539 151.571C118.312 150.648 116.409 149.084 115.07 147.078C113.73 145.072 113.016 142.713 113.016 140.3C113.016 137.064 114.3 133.961 116.585 131.673C118.871 129.385 121.971 128.1 125.203 128.1V128.1Z",fill:"black"}),Object(d.jsx)("path",{d:"M143.484 0H15.5156C11.4767 0.00484297 7.60459 1.61309 4.74864 4.47197C1.89269 7.33085 0.286088 11.2069 0.28125 15.25V88.45C0.286088 92.4931 1.89269 96.3691 4.74864 99.228C7.60459 102.087 11.4767 103.695 15.5156 103.7H30.75V112.85C30.7499 113.402 30.8996 113.944 31.183 114.418C31.4665 114.891 31.8731 115.279 32.3595 115.54C32.8458 115.8 33.3937 115.924 33.9447 115.897C34.4957 115.87 35.029 115.694 35.4879 115.388L52.9922 103.7H82.5469C83.355 103.7 84.1299 103.379 84.7013 102.807C85.2727 102.235 85.5938 101.459 85.5938 100.65C85.5938 99.8411 85.2727 99.0653 84.7013 98.4933C84.1299 97.9213 83.355 97.6 82.5469 97.6H52.0781C51.4764 97.601 50.8883 97.7792 50.3871 98.1124L36.8438 107.15V100.65C36.8438 99.8411 36.5227 99.0653 35.9513 98.4933C35.3799 97.9213 34.605 97.6 33.7969 97.6H15.5156C13.0914 97.6 10.7664 96.636 9.05223 94.92C7.33803 93.2041 6.375 90.8767 6.375 88.45V15.25C6.375 12.8233 7.33803 10.4959 9.05223 8.77997C10.7664 7.06402 13.0914 6.1 15.5156 6.1H143.484C145.909 6.1 148.234 7.06402 149.948 8.77997C151.662 10.4959 152.625 12.8233 152.625 15.25V88.45C152.625 90.8767 151.662 93.2041 149.948 94.92C148.234 96.636 145.909 97.6 143.484 97.6H125.203C124.395 97.6 123.62 97.9213 123.049 98.4933C122.477 99.0653 122.156 99.8411 122.156 100.65V107.15L108.613 98.1124C108.112 97.7792 107.524 97.601 106.922 97.6H94.7344C93.9263 97.6 93.1513 97.9213 92.5799 98.4933C92.0085 99.0653 91.6875 99.8411 91.6875 100.65C91.6875 101.459 92.0085 102.235 92.5799 102.807C93.1513 103.379 93.9263 103.7 94.7344 103.7H106.008L123.521 115.388C123.98 115.692 124.512 115.866 125.062 115.891C125.612 115.917 126.158 115.793 126.643 115.532C127.128 115.272 127.533 114.885 127.816 114.413C128.099 113.941 128.249 113.401 128.25 112.85V103.7H143.484C147.523 103.695 151.395 102.087 154.251 99.228C157.107 96.3691 158.714 92.4931 158.719 88.45V15.25C158.714 11.2069 157.107 7.33085 154.251 4.47197C151.395 1.61309 147.523 0.00484297 143.484 0V0Z",fill:"black"}),Object(d.jsx)("path",{d:"M116.062 45.75C116.871 45.75 117.646 45.4287 118.217 44.8567C118.788 44.2847 119.109 43.5089 119.109 42.7C119.109 41.8911 118.788 41.1153 118.217 40.5433C117.646 39.9714 116.871 39.65 116.062 39.65H61.2188C60.4107 39.65 59.6357 39.9714 59.0643 40.5433C58.4929 41.1153 58.1719 41.8911 58.1719 42.7C58.1719 43.5089 58.4929 44.2847 59.0643 44.8567C59.6357 45.4287 60.4107 45.75 61.2188 45.75H116.062Z",fill:"black"}),Object(d.jsx)("path",{d:"M55.125 64.0499H103.875C104.683 64.0499 105.458 63.7286 106.029 63.1566C106.601 62.5846 106.922 61.8089 106.922 60.9999C106.922 60.191 106.601 59.4153 106.029 58.8433C105.458 58.2713 104.683 57.95 103.875 57.95H55.125C54.3169 57.95 53.5419 58.2713 52.9705 58.8433C52.3991 59.4153 52.0781 60.191 52.0781 60.9999C52.0781 61.8089 52.3991 62.5846 52.9705 63.1566C53.5419 63.7286 54.3169 64.0499 55.125 64.0499Z",fill:"black"}),Object(d.jsx)("path",{d:"M49.0312 39.65H42.9375C42.1294 39.65 41.3544 39.9714 40.783 40.5433C40.2116 41.1153 39.8906 41.8911 39.8906 42.7C39.8906 43.5089 40.2116 44.2847 40.783 44.8567C41.3544 45.4287 42.1294 45.75 42.9375 45.75H49.0312C49.8393 45.75 50.6143 45.4287 51.1857 44.8567C51.7571 44.2847 52.0781 43.5089 52.0781 42.7C52.0781 41.8911 51.7571 41.1153 51.1857 40.5433C50.6143 39.9714 49.8393 39.65 49.0312 39.65Z",fill:"black"})]})}),Object(d.jsxs)("div",{className:"fixed z-0 pen",style:{bottom:-50,left:-50,width:700,opacity:"3%"},children:[Object(d.jsxs)("svg",{className:"w-100",viewBox:"0 0 159 196",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M47.2671 152.631C49.6664 150.014 51.2527 146.754 51.8325 143.249C52.4123 139.744 51.9605 136.146 50.5323 132.894C49.1041 129.642 46.7612 126.877 43.7895 124.935C40.8178 122.993 37.3457 121.959 33.7969 121.959C30.2481 121.959 26.776 122.993 23.8043 124.935C20.8325 126.877 18.4896 129.642 17.0614 132.894C15.6332 136.146 15.1815 139.744 15.7613 143.249C16.3411 146.754 17.9274 150.014 20.3266 152.631C16.5322 152.944 12.9933 154.672 10.4099 157.471C7.82642 160.271 6.38654 163.939 6.375 167.75V173.85C6.375 174.659 6.69601 175.435 7.26741 176.007C7.83881 176.579 8.61379 176.9 9.42188 176.9C10.23 176.9 11.0049 176.579 11.5763 176.007C12.1477 175.435 12.4688 174.659 12.4688 173.85V167.75C12.4688 165.323 13.4318 162.996 15.146 161.28C16.8602 159.564 19.1851 158.6 21.6094 158.6H45.9844C48.4086 158.6 50.7336 159.564 52.4478 161.28C54.162 162.996 55.125 165.323 55.125 167.75V189.1H12.4688V186.05C12.4688 185.241 12.1477 184.465 11.5763 183.893C11.0049 183.321 10.23 183 9.42188 183C8.61379 183 7.83881 183.321 7.26741 183.893C6.69601 184.465 6.375 185.241 6.375 186.05V192.15C6.375 192.959 6.69601 193.735 7.26741 194.307C7.83881 194.879 8.61379 195.2 9.42188 195.2H58.1719C58.98 195.2 59.7549 194.879 60.3263 194.307C60.8977 193.735 61.2188 192.959 61.2188 192.15V167.75C61.2072 163.939 59.7673 160.271 57.1839 157.471C54.6004 154.672 51.0616 152.944 47.2671 152.631ZM33.7969 128.1C36.2073 128.1 38.5637 128.816 40.5679 130.156C42.5721 131.497 44.1342 133.402 45.0567 135.631C45.9791 137.861 46.2205 140.314 45.7502 142.68C45.2799 145.047 44.1192 147.22 42.4147 148.927C40.7103 150.633 38.5387 151.795 36.1745 152.266C33.8104 152.736 31.3599 152.495 29.1329 151.571C26.9059 150.648 25.0025 149.084 23.6633 147.078C22.3242 145.072 21.6094 142.713 21.6094 140.3C21.6094 137.064 22.8934 133.961 25.179 131.673C27.4646 129.385 30.5645 128.1 33.7969 128.1V128.1Z",fill:"black"}),Object(d.jsx)("path",{d:"M138.673 152.631C141.073 150.014 142.659 146.754 143.239 143.249C143.819 139.744 143.367 136.146 141.939 132.894C140.51 129.642 138.167 126.877 135.196 124.935C132.224 122.993 128.752 121.959 125.203 121.959C121.654 121.959 118.182 122.993 115.211 124.935C112.239 126.877 109.896 129.642 108.468 132.894C107.039 136.146 106.588 139.744 107.168 143.249C107.747 146.754 109.334 150.014 111.733 152.631C107.938 152.944 104.4 154.672 101.816 157.471C99.2327 160.271 97.7928 163.939 97.7812 167.75V192.15C97.7812 192.959 98.1023 193.735 98.6737 194.307C99.2451 194.879 100.02 195.2 100.828 195.2H131.297C132.105 195.2 132.88 194.879 133.451 194.307C134.023 193.735 134.344 192.959 134.344 192.15C134.344 191.341 134.023 190.565 133.451 189.993C132.88 189.421 132.105 189.1 131.297 189.1H103.875V167.75C103.875 165.323 104.838 162.996 106.552 161.28C108.266 159.564 110.591 158.6 113.016 158.6H137.391C139.815 158.6 142.14 159.564 143.854 161.28C145.568 162.996 146.531 165.323 146.531 167.75V189.1H143.484C142.676 189.1 141.901 189.421 141.33 189.993C140.759 190.565 140.438 191.341 140.438 192.15C140.438 192.959 140.759 193.735 141.33 194.307C141.901 194.879 142.676 195.2 143.484 195.2H149.578C150.386 195.2 151.161 194.879 151.733 194.307C152.304 193.735 152.625 192.959 152.625 192.15V167.75C152.613 163.939 151.174 160.271 148.59 157.471C146.007 154.672 142.468 152.944 138.673 152.631ZM125.203 128.1C127.614 128.1 129.97 128.816 131.974 130.156C133.978 131.497 135.54 133.402 136.463 135.631C137.385 137.861 137.627 140.314 137.156 142.68C136.686 145.047 135.525 147.22 133.821 148.927C132.117 150.633 129.945 151.795 127.581 152.266C125.217 152.736 122.766 152.495 120.539 151.571C118.312 150.648 116.409 149.084 115.07 147.078C113.73 145.072 113.016 142.713 113.016 140.3C113.016 137.064 114.3 133.961 116.585 131.673C118.871 129.385 121.971 128.1 125.203 128.1V128.1Z",fill:"black"}),Object(d.jsx)("path",{d:"M143.484 0H15.5156C11.4767 0.00484297 7.60459 1.61309 4.74864 4.47197C1.89269 7.33085 0.286088 11.2069 0.28125 15.25V88.45C0.286088 92.4931 1.89269 96.3691 4.74864 99.228C7.60459 102.087 11.4767 103.695 15.5156 103.7H30.75V112.85C30.7499 113.402 30.8996 113.944 31.183 114.418C31.4665 114.891 31.8731 115.279 32.3595 115.54C32.8458 115.8 33.3937 115.924 33.9447 115.897C34.4957 115.87 35.029 115.694 35.4879 115.388L52.9922 103.7H82.5469C83.355 103.7 84.1299 103.379 84.7013 102.807C85.2727 102.235 85.5938 101.459 85.5938 100.65C85.5938 99.8411 85.2727 99.0653 84.7013 98.4933C84.1299 97.9213 83.355 97.6 82.5469 97.6H52.0781C51.4764 97.601 50.8883 97.7792 50.3871 98.1124L36.8438 107.15V100.65C36.8438 99.8411 36.5227 99.0653 35.9513 98.4933C35.3799 97.9213 34.605 97.6 33.7969 97.6H15.5156C13.0914 97.6 10.7664 96.636 9.05223 94.92C7.33803 93.2041 6.375 90.8767 6.375 88.45V15.25C6.375 12.8233 7.33803 10.4959 9.05223 8.77997C10.7664 7.06402 13.0914 6.1 15.5156 6.1H143.484C145.909 6.1 148.234 7.06402 149.948 8.77997C151.662 10.4959 152.625 12.8233 152.625 15.25V88.45C152.625 90.8767 151.662 93.2041 149.948 94.92C148.234 96.636 145.909 97.6 143.484 97.6H125.203C124.395 97.6 123.62 97.9213 123.049 98.4933C122.477 99.0653 122.156 99.8411 122.156 100.65V107.15L108.613 98.1124C108.112 97.7792 107.524 97.601 106.922 97.6H94.7344C93.9263 97.6 93.1513 97.9213 92.5799 98.4933C92.0085 99.0653 91.6875 99.8411 91.6875 100.65C91.6875 101.459 92.0085 102.235 92.5799 102.807C93.1513 103.379 93.9263 103.7 94.7344 103.7H106.008L123.521 115.388C123.98 115.692 124.512 115.866 125.062 115.891C125.612 115.917 126.158 115.793 126.643 115.532C127.128 115.272 127.533 114.885 127.816 114.413C128.099 113.941 128.249 113.401 128.25 112.85V103.7H143.484C147.523 103.695 151.395 102.087 154.251 99.228C157.107 96.3691 158.714 92.4931 158.719 88.45V15.25C158.714 11.2069 157.107 7.33085 154.251 4.47197C151.395 1.61309 147.523 0.00484297 143.484 0V0Z",fill:"black"}),Object(d.jsx)("path",{d:"M116.062 45.75C116.871 45.75 117.646 45.4287 118.217 44.8567C118.788 44.2847 119.109 43.5089 119.109 42.7C119.109 41.8911 118.788 41.1153 118.217 40.5433C117.646 39.9714 116.871 39.65 116.062 39.65H61.2188C60.4107 39.65 59.6357 39.9714 59.0643 40.5433C58.4929 41.1153 58.1719 41.8911 58.1719 42.7C58.1719 43.5089 58.4929 44.2847 59.0643 44.8567C59.6357 45.4287 60.4107 45.75 61.2188 45.75H116.062Z",fill:"black"}),Object(d.jsx)("path",{d:"M55.125 64.0499H103.875C104.683 64.0499 105.458 63.7286 106.029 63.1566C106.601 62.5846 106.922 61.8089 106.922 60.9999C106.922 60.191 106.601 59.4153 106.029 58.8433C105.458 58.2713 104.683 57.95 103.875 57.95H55.125C54.3169 57.95 53.5419 58.2713 52.9705 58.8433C52.3991 59.4153 52.0781 60.191 52.0781 60.9999C52.0781 61.8089 52.3991 62.5846 52.9705 63.1566C53.5419 63.7286 54.3169 64.0499 55.125 64.0499Z",fill:"black"}),Object(d.jsx)("path",{d:"M49.0312 39.65H42.9375C42.1294 39.65 41.3544 39.9714 40.783 40.5433C40.2116 41.1153 39.8906 41.8911 39.8906 42.7C39.8906 43.5089 40.2116 44.2847 40.783 44.8567C41.3544 45.4287 42.1294 45.75 42.9375 45.75H49.0312C49.8393 45.75 50.6143 45.4287 51.1857 44.8567C51.7571 44.2847 52.0781 43.5089 52.0781 42.7C52.0781 41.8911 51.7571 41.1153 51.1857 40.5433C50.6143 39.9714 49.8393 39.65 49.0312 39.65Z",fill:"black"})]}),Object(d.jsx)("style",{children:".showOnHover:hover {\n  z-index: 2;\n  background-color: white;\n}\n.pen {\n  pointer-events: none;\n}\n"})]})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,C=t.getLCP,l=t.getTTFB;s(e),n(e),a(e),C(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.fcdedc97.chunk.js.map