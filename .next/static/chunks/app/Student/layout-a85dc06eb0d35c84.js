(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3580],{6370:function(e,r,t){Promise.resolve().then(t.bind(t,6929))},6688:function(e,r,t){"use strict";t.r(r);var a=t(7437),n=t(3198),s=t(837);r.default=function(e){let{children:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.zt,{store:s.y,children:r})})}},6339:function(e,r,t){"use strict";t.d(r,{AC:function(){return l},e3:function(){return o},m4:function(){return s},oY:function(){return d},tr:function(){return i}});var a=t(64);let n=(0,a.oM)({name:"emploucounter",initialState:{isLoading:!1,isAuthenticated:!1,employe:null,error:null,resumes:null},reducers:{IsLoading:(e,r)=>{e.isLoading=!0},SetEmploye:(e,r)=>{e.isAuthenticated=!0,e.isLoading=!1,e.employe=r.payload,e.error=null,console.log("action ".concat(r.payload))},RemoveEmploye:(e,r)=>{},SetResumes:(e,r)=>{e.resumes=r.payload},RemoveResumes:(e,r)=>{e.resumes=null}}}),{SetEmploye:s,RemoveEmploye:d,SetResumes:l,RemoveResumes:o,IsLoading:i}=n.actions;r.ZP=n.reducer},837:function(e,r,t){"use strict";t.d(r,{y:function(){return d}});var a=t(64),n=t(2771),s=t(6339);let d=(0,a.xC)({reducer:{StudentSlice:n.ZP,EmployeSlice:s.ZP}})},6929:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var a=t(7437),n=t(6400);t(1396);var s=t(6688),d=t(3198),l=t(7825),o=t(2265),i=t(4033);function c(e){let{children:r}=e,t=(0,d.I0)(),c=(0,i.useRouter)(),{isAuthenticated:u,student:h}=(0,d.v9)(e=>e.StudentSlice);return(0,o.useEffect)(()=>{t((0,l.L$)()).then(()=>{h||c.push("/Studentlogin")}).catch(e=>{console.error("Authentication error:",e),c.push("/Studentlogin")})},[]),(0,a.jsxs)("section",{className:" h-screen",children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(s.default,{children:(0,a.jsx)("div",{className:"pt-14",children:r})})]})}},6400:function(e,r,t){"use strict";var a=t(7437),n=t(2265),s=t(1396),d=t.n(s),l=t(3198),o=t(7825),i=t(4033);r.Z=()=>{let[e,r]=(0,n.useState)(!1),[t,s]=(0,n.useState)(!1),c=(0,l.I0)(),{student:u}=(0,l.v9)(e=>e.StudentSlice),h=(0,i.useRouter)(),m=()=>{s(!t)},x=async()=>{let e=await c((0,o.ZS)());console.log(e),e.success&&h.push("/")};return(0,a.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",children:(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,a.jsx)(d(),{href:"/Student/StudentHome",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,a.jsx)("span",{className:"self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",children:"NaukriAdda"})}),(0,a.jsxs)("button",{type:"button",onClick:()=>{r(!e)},className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-multi-level","aria-expanded":e?"true":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,a.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-multi-level",children:(0,a.jsxs)("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/Student/Internships",className:"block py-2 px-3 text-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 dark:bg-blue-500 md:dark:bg-transparent","aria-current":"page",children:"Internship"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/Student/Jobs",className:"text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Job"})}),(0,a.jsxs)("li",{className:"relative",children:[(0,a.jsxs)("button",{onClick:()=>{s(!t)},onMouseEnter:m,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Job Seekers",(0,a.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),t&&(0,a.jsx)("div",{onMouseLeave:m,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,a.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(d(),{href:"/Student/profile",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:[(0,a.jsx)("img",{className:"h-7 w-7 rounded-full mr-2",src:u&&u.avatar.url,alt:"profile"}),(0,a.jsx)("span",{children:u&&u.fullname})]})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/Student/Editresume",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Edit Resume"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/Student/changepassword",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Chang Password"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/Student/updatestudent",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Update Profile"})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,a.jsx)("p",{onClick:x,children:"Logout"})})})]})})]})]})})]})})}},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[3306,9179,2173,1396,7825,2971,596,1744],function(){return e(e.s=6370)}),_N_E=e.O()}]);