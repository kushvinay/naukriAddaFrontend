(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9613],{6963:function(e,t,r){Promise.resolve().then(r.bind(r,7951))},9652:function(e,t,r){"use strict";var o=r(2173);let a=o.Z.create({baseURL:"http://localhost:4040/",withCredentials:!0});t.Z=a},5965:function(e,t,r){"use strict";r.d(t,{Cu:function(){return c},Ew:function(){return w},Fh:function(){return i},Ie:function(){return p},Q2:function(){return m},Yb:function(){return g},_S:function(){return x},eY:function(){return l},hE:function(){return u},jd:function(){return h},jr:function(){return k},oE:function(){return f},oq:function(){return d},qL:function(){return n},tP:function(){return y},xp:function(){return v},yr:function(){return b}});var o=r(9652),a=r(171);r(6518);var s=r(6339);let n=()=>async(e,t)=>{try{let t=await o.Z.get("/employe/signout");return console.log(t),e((0,s.oY)()),t.data}catch(e){console.log(e)}},l=()=>async(e,t)=>{try{let t=await o.Z.post("/employe/employe");console.log("form curr user ".concat(t.data.employe)),e((0,s.m4)(t.data.employe))}catch(e){console.log(e)}},c=e=>async(t,r)=>{try{let r=await o.Z.post("/employe/signup",e);console.log("res ".concat(r)),t(l())}catch(e){console.log(e)}},i=e=>async(t,r)=>{try{t((0,s.tr)()),await o.Z.post("/Employe/signin",e),console.log("login is "),t(l())}catch(e){console.log(e)}},d=e=>async(t,r)=>{try{await o.Z.post("/Employe/job/create",e).then(()=>{a.Am.success("Job Post Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{a.Am.error("Creation failed")}),t(l())}catch(e){console.log(e)}},u=e=>async(t,r)=>{try{await o.Z.post("/Employe/internship/create",e).then(()=>{a.Am.success("Internship Post Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{a.Am.error("Creation failed")}),t(l())}catch(e){console.log(e)}},g=e=>async(t,r)=>{try{await o.Z.post("/Employe/update-employe",e),t(l()).then(()=>{a.Am.success("Update Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{a.Am.error("Update failed")})}catch(e){console.log(e)}},h=e=>async(t,r)=>{try{await o.Z.post("/Employe/change-password",e),t(l()).then(()=>{a.Am.success("Password changed Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{a.Am.error("Update failed")})}catch(e){console.log(e)}},p=e=>async(t,r)=>{try{await o.Z.post("/employe/forget-password",e),t(l())}catch(e){console.log(e)}},m=e=>async(t,r)=>{try{await o.Z.post("employe/forget-link/:id",e),t(l())}catch(e){console.log(e)}},y=e=>async(t,r)=>{try{await o.Z.post("/Employe/organisation-logo",e).then(()=>{a.Am.success("Compony logo update",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{a.Am.error("Update failed")}),t(l())}catch(e){console.log(e)}},x=(e,t)=>async(r,a)=>{try{await o.Z.post("/Employe/Edit-Internship/".concat(e),t),r(l())}catch(e){console.log(e)}},b=e=>async(t,r)=>{try{await o.Z.post("/Employe/Internship-isActive/".concat(e)),t(l())}catch(e){console.log(e)}},f=(e,t)=>async(r,a)=>{try{await o.Z.post("/Employe/Edit-job/".concat(e),t),r(l())}catch(e){console.log(e)}},w=e=>async(t,r)=>{try{await o.Z.post("/Employe/job-isActive/".concat(e)),t(l())}catch(e){console.log(e)}},v=e=>async(t,r)=>{try{let r=await o.Z.post("/Employe/Interns-resume/".concat(e));t((0,s.e3)()),console.log("tung fatch = ".concat(r)),t((0,s.AC)(r.data.Resumes.usersapplied))}catch(e){console.log(e)}},k=e=>async(t,r)=>{try{let r=await o.Z.post("/Employe/Job-resume/".concat(e));t((0,s.e3)()),console.log("tung fatch = ".concat(r)),t((0,s.AC)(r.data.Resumes.usersapplied))}catch(e){console.log(e)}}},6339:function(e,t,r){"use strict";r.d(t,{AC:function(){return l},e3:function(){return c},m4:function(){return s},oY:function(){return n},tr:function(){return i}});var o=r(64);let a=(0,o.oM)({name:"emploucounter",initialState:{isLoading:!1,isAuthenticated:!1,employe:null,error:null,resumes:null},reducers:{IsLoading:(e,t)=>{e.isLoading=!0},SetEmploye:(e,t)=>{e.isAuthenticated=!0,e.isLoading=!1,e.employe=t.payload,e.error=null,console.log("action ".concat(t.payload))},RemoveEmploye:(e,t)=>{},SetResumes:(e,t)=>{e.resumes=t.payload},RemoveResumes:(e,t)=>{e.resumes=null}}}),{SetEmploye:s,RemoveEmploye:n,SetResumes:l,RemoveResumes:c,IsLoading:i}=a.actions;t.ZP=a.reducer},7951:function(e,t,r){"use strict";r.r(t);var o=r(7437),a=r(2265),s=r(5965),n=r(3198),l=r(4033),c=r(65),i=r(1396),d=r.n(i);t.default=()=>{let e=(0,l.useRouter)(),t=(0,n.I0)(),{isAuthenticated:r,employe:i}=(0,n.v9)(e=>e.EmployeSlice);console.log(i);let[u,g]=(0,a.useState)(""),[h,p]=(0,a.useState)(""),[m,y]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[v,k]=(0,a.useState)(!1),j=async e=>{e.preventDefault(),k(!0);try{await t((0,s.Cu)({fullname:u,organisationname:x,email:h,contact:f,password:m}))}catch(e){console.log(e)}finally{k(!1)}};return(0,a.useEffect)(()=>{r||t((0,s.eY)()),console.log(i),r&&i&&e.push("/Employe/EmployeHome")},[r]),(0,o.jsxs)("div",{className:"fixed w-screen h-screen flex flex-col",children:[(0,o.jsx)(c.Z,{}),(0,o.jsx)("div",{className:"flex-grow flex items-center justify-center p-4",children:(0,o.jsxs)("form",{className:"w-full max-w-md mx-auto bg-white p-8 rounded-lg ",onSubmit:j,children:[(0,o.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold mb-6 text-center",children:"Employe Register"}),(0,o.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"text",placeholder:"Your Full Name",value:u,onChange:e=>g(e.target.value)}),(0,o.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"text",placeholder:"Organization Name",value:x,onChange:e=>b(e.target.value)}),(0,o.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"email",placeholder:"Email",value:h,onChange:e=>p(e.target.value)}),(0,o.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"text",placeholder:"Contact",value:f,onChange:e=>w(e.target.value),required:!0}),(0,o.jsx)("input",{className:"w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4",type:"password",placeholder:"Password",value:m,onChange:e=>y(e.target.value)}),(0,o.jsx)("button",{type:"submit",className:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",disabled:v,children:v?"Signing up...":"Sign Up"}),(0,o.jsxs)("p",{className:"mt-4 text-sm text-center",children:["Already have an account? ",(0,o.jsx)(d(),{className:"text-blue-600",href:"/Studentlogin",children:"Sign in"})]})]})})]})}},65:function(e,t,r){"use strict";var o=r(7437),a=r(2265),s=r(1396),n=r.n(s);t.Z=()=>{let[e,t]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!1),[i,d]=(0,a.useState)(!1),u=()=>{d(!i)},g=()=>{c(!l)};return(0,o.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",children:(0,o.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,o.jsx)(n(),{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,o.jsx)("span",{className:"self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",children:"NaukriAdda"})}),(0,o.jsxs)("button",{type:"button",onClick:()=>{t(!e)},className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-multi-level","aria-expanded":e?"true":"false",children:[(0,o.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,o.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,o.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-multi-level",children:(0,o.jsxs)("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,o.jsxs)("li",{className:"relative",children:[(0,o.jsxs)("button",{onClick:g,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Job Seekers",(0,o.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),l&&(0,o.jsx)("div",{onMouseLeave:g,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,o.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,o.jsx)("li",{children:(0,o.jsx)(n(),{href:"/Studentlogin",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Login"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n(),{href:"Studentsignup",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Signup"})})]})})]}),(0,o.jsxs)("li",{className:"relative",children:[(0,o.jsxs)("button",{onClick:u,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Employe",(0,o.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),i&&(0,o.jsx)("div",{onMouseLeave:u,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,o.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,o.jsx)("li",{children:(0,o.jsx)(n(),{href:"/Employesignin",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Login"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n(),{href:"/EmployeSignup",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Signup"})})]})})]})]})})]})})}},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[3306,9179,2173,1396,2971,596,1744],function(){return e(e.s=6963)}),_N_E=e.O()}]);