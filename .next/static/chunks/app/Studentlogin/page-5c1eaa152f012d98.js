(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1317],{7638:function(e,r,t){Promise.resolve().then(t.bind(t,323))},323:function(e,r,t){"use strict";t.r(r);var a=t(7437),s=t(2265),l=t(7825),n=t(3198),d=t(4033),o=t(1396),i=t.n(o),c=t(65);r.default=()=>{let e=(0,d.useRouter)(),r=(0,n.I0)(),{isAuthenticated:t,student:o,isLoading:u}=(0,n.v9)(e=>e.StudentSlice),[h,x]=(0,s.useState)(""),[g,m]=(0,s.useState)(""),b=async e=>{e.preventDefault();try{await r((0,l.oR)({email:h,password:g}))}catch(e){console.error("Login failed",e)}};return(0,s.useEffect)(()=>{t||r((0,l.L$)()),t&&o&&e.push("/Student/StudentHome")},[t]),(0,a.jsxs)("div",{className:"w-screen h-screen flex flex-col",children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)("div",{className:"flex-grow flex items-center justify-center p-4 md:p-8",children:(0,a.jsxs)("form",{className:"w-full max-w-md bg-white p-8 rounded-lg ",onSubmit:b,children:[(0,a.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold text-slate-800 mb-6 text-center",children:"Job Seekers Login"}),(0,a.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"email",required:!0,placeholder:"Email",value:h,onChange:e=>x(e.target.value)}),(0,a.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"password",required:!0,placeholder:"Password",value:g,onChange:e=>m(e.target.value)}),(0,a.jsx)("div",{className:"flex justify-end mb-4",children:(0,a.jsx)(i(),{className:"text-sm text-blue-600",href:"/Studentforgetpassword",children:"Forgot Password?"})}),(0,a.jsx)("button",{className:"w-full px-5 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",type:"submit",children:u?"Signing in...":"Sign In"}),(0,a.jsxs)("div",{className:"text-sm text-center mt-4",children:["Do not have an account?"," ",(0,a.jsx)(i(),{className:"text-blue-500",href:"/Studentsignup",children:"Sign up"})]})]})})]})}},65:function(e,r,t){"use strict";var a=t(7437),s=t(2265),l=t(1396),n=t.n(l);r.Z=()=>{let[e,r]=(0,s.useState)(!1),[t,l]=(0,s.useState)(!1),[d,o]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1),u=()=>{c(!i)},h=()=>{o(!d)};return(0,a.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",children:(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,a.jsx)(n(),{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,a.jsx)("span",{className:"self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",children:"NaukriAdda"})}),(0,a.jsxs)("button",{type:"button",onClick:()=>{r(!e)},className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-multi-level","aria-expanded":e?"true":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,a.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-multi-level",children:(0,a.jsxs)("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,a.jsxs)("li",{className:"relative",children:[(0,a.jsxs)("button",{onClick:h,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Job Seekers",(0,a.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),d&&(0,a.jsx)("div",{onMouseLeave:h,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,a.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/Studentlogin",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"Studentsignup",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Signup"})})]})})]}),(0,a.jsxs)("li",{className:"relative",children:[(0,a.jsxs)("button",{onClick:u,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Employe",(0,a.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),i&&(0,a.jsx)("div",{onMouseLeave:u,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,a.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/Employesignin",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/EmployeSignup",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Signup"})})]})})]})]})})]})})}},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[3306,9179,2173,1396,7825,2971,596,1744],function(){return e(e.s=7638)}),_N_E=e.O()}]);