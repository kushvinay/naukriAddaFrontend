(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{824:function(e,r,t){Promise.resolve().then(t.bind(t,4013))},9652:function(e,r,t){"use strict";var o=t(2173);let n=o.Z.create({baseURL:"http://localhost:4040/",withCredentials:!0});r.Z=n},5965:function(e,r,t){"use strict";t.d(r,{Cu:function(){return c},Ew:function(){return v},Fh:function(){return i},Ie:function(){return g},Q2:function(){return m},Yb:function(){return h},_S:function(){return f},eY:function(){return l},hE:function(){return u},jd:function(){return p},jr:function(){return k},oE:function(){return b},oq:function(){return d},qL:function(){return a},tP:function(){return y},xp:function(){return w},yr:function(){return x}});var o=t(9652),n=t(171);t(6518);var s=t(6339);let a=()=>async(e,r)=>{try{let r=await o.Z.get("/employe/signout",{withCredentials:!0});return console.log(r),e((0,s.oY)()),r.data}catch(e){console.log(e)}},l=()=>async(e,r)=>{try{let r=await o.Z.post("/employe/employe");console.log("form curr user ".concat(r.data.employe)),e((0,s.m4)(r.data.employe))}catch(e){console.log(e)}},c=e=>async(r,t)=>{try{let t=await o.Z.post("/employe/signup",e);console.log("res ".concat(t)),r(l())}catch(e){console.log(e)}},i=e=>async(r,t)=>{try{r((0,s.tr)()),await o.Z.post("/Employe/signin",e),console.log("login is "),r(l())}catch(e){console.log(e)}},d=e=>async(r,t)=>{try{await o.Z.post("/Employe/job/create",e).then(()=>{n.Am.success("Job Post Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{n.Am.error("Creation failed")}),r(l())}catch(e){console.log(e)}},u=e=>async(r,t)=>{try{await o.Z.post("/Employe/internship/create",e).then(()=>{n.Am.success("Internship Post Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{n.Am.error("Creation failed")}),r(l())}catch(e){console.log(e)}},h=e=>async(r,t)=>{try{await o.Z.post("/Employe/update-employe",e),r(l()).then(()=>{n.Am.success("Update Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{n.Am.error("Update failed")})}catch(e){console.log(e)}},p=e=>async(r,t)=>{try{await o.Z.post("/Employe/change-password",e),r(l()).then(()=>{n.Am.success("Password changed Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{n.Am.error("Update failed")})}catch(e){console.log(e)}},g=e=>async(r,t)=>{try{await o.Z.post("/employe/forget-password",e),r(l())}catch(e){console.log(e)}},m=e=>async(r,t)=>{try{await o.Z.post("employe/forget-link/:id",e),r(l())}catch(e){console.log(e)}},y=e=>async(r,t)=>{try{await o.Z.post("/Employe/organisation-logo",e).then(()=>{n.Am.success("Compony logo update",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(e=>{n.Am.error("Update failed")}),r(l())}catch(e){console.log(e)}},f=(e,r)=>async(t,n)=>{try{await o.Z.post("/Employe/Edit-Internship/".concat(e),r),t(l())}catch(e){console.log(e)}},x=e=>async(r,t)=>{try{await o.Z.post("/Employe/Internship-isActive/".concat(e)),r(l())}catch(e){console.log(e)}},b=(e,r)=>async(t,n)=>{try{await o.Z.post("/Employe/Edit-job/".concat(e),r),t(l())}catch(e){console.log(e)}},v=e=>async(r,t)=>{try{await o.Z.post("/Employe/job-isActive/".concat(e)),r(l())}catch(e){console.log(e)}},w=e=>async(r,t)=>{try{let t=await o.Z.post("/Employe/Interns-resume/".concat(e));r((0,s.e3)()),console.log("tung fatch = ".concat(t)),r((0,s.AC)(t.data.Resumes.usersapplied))}catch(e){console.log(e)}},k=e=>async(r,t)=>{try{let t=await o.Z.post("/Employe/Job-resume/".concat(e));r((0,s.e3)()),console.log("tung fatch = ".concat(t)),r((0,s.AC)(t.data.Resumes.usersapplied))}catch(e){console.log(e)}}},6688:function(e,r,t){"use strict";t.r(r);var o=t(7437),n=t(3198),s=t(837);r.default=function(e){let{children:r}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.zt,{store:s.y,children:r})})}},6339:function(e,r,t){"use strict";t.d(r,{AC:function(){return l},e3:function(){return c},m4:function(){return s},oY:function(){return a},tr:function(){return i}});var o=t(64);let n=(0,o.oM)({name:"emploucounter",initialState:{isLoading:!1,isAuthenticated:!1,employe:null,error:null,resumes:null},reducers:{IsLoading:(e,r)=>{e.isLoading=!0},SetEmploye:(e,r)=>{e.isAuthenticated=!0,e.isLoading=!1,e.employe=r.payload,e.error=null,console.log("action ".concat(r.payload))},RemoveEmploye:(e,r)=>{},SetResumes:(e,r)=>{e.resumes=r.payload},RemoveResumes:(e,r)=>{e.resumes=null}}}),{SetEmploye:s,RemoveEmploye:a,SetResumes:l,RemoveResumes:c,IsLoading:i}=n.actions;r.ZP=n.reducer},2771:function(e,r,t){"use strict";t.d(r,{D2:function(){return l},Ru:function(){return u},ST:function(){return a},gS:function(){return c},tr:function(){return h},uq:function(){return s},vo:function(){return i}});var o=t(64);let n=(0,o.oM)({name:"counter",initialState:{isLoading:!1,isAuthenticated:!1,student:null,internships:null,jobs:null,errors:null},reducers:{IsLoading:(e,r)=>{e.isLoading=!0},SetUser:(e,r)=>{e.isAuthenticated=!0,e.isLoading=!1,e.student=r.payload,e.error=null,console.log(1),console.log(r.payload)},RemoveUser:(e,r)=>{},SetInternships:(e,r)=>{e.internships=r.payload},AddInternships:(e,r)=>{e.internships=[...e.internships,...r.payload],console.log("added"),console.log(e.internships)},Setjobs:(e,r)=>{e.jobs=r.payload},iserror:(e,r)=>{e.errors=r.payload},AddJobs:(e,r)=>{let t=r.payload;e.jobs=[...e.jobs,...t]}}}),{SetUser:s,RemoveUser:a,SetInternships:l,Setjobs:c,AddInternships:i,AddJobs:d,iserror:u,IsLoading:h}=n.actions;r.ZP=n.reducer},837:function(e,r,t){"use strict";t.d(r,{y:function(){return a}});var o=t(64),n=t(2771),s=t(6339);let a=(0,o.xC)({reducer:{StudentSlice:n.ZP,EmployeSlice:s.ZP}})},4013:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var o=t(7437),n=t(2265),s=t(1396),a=t.n(s),l=t(3198),c=t(5965),i=t(4033),d=()=>{let[e,r]=(0,n.useState)(!1),[t,s]=(0,n.useState)(!1),d=(0,l.I0)(),{isAuthenticated:u,employe:h}=(0,l.v9)(e=>e.EmployeSlice),p=(0,i.useRouter)();(0,n.useEffect)(()=>{u||p.push("/Employesignin")},[u]);let g=()=>{s(!t)},m=async()=>{let e=await d((0,c.qL)());console.log(e),e.success&&p.push("/")};return(0,o.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",children:(0,o.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,o.jsx)(a(),{href:"/Employe/EmployeHome",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,o.jsx)("span",{className:"self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",children:"NaukriAdda"})}),(0,o.jsxs)("button",{type:"button",onClick:()=>{r(!e)},className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-multi-level","aria-expanded":e?"true":"false",children:[(0,o.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,o.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,o.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-multi-level",children:(0,o.jsxs)("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/internships",className:"block py-2 px-3 text-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent","aria-current":"page",children:"Internship"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/jobs",className:"text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Job"})}),(0,o.jsxs)("li",{className:"relative",children:[(0,o.jsxs)("button",{onClick:()=>{s(!t)},onMouseEnter:g,id:"dropdownNavbarLink",className:"flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",children:["Employe",(0,o.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})]}),t&&(0,o.jsx)("div",{onMouseLeave:g,id:"dropdownNavbar",className:"z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",children:(0,o.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[(0,o.jsx)("li",{children:(0,o.jsxs)(a(),{href:"/profile",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:[(0,o.jsx)("img",{className:"h-7 w-7 rounded-full mr-2",src:h.organisationlogo.url,alt:""}),(0,o.jsx)("span",{children:h&&h.fullname})]})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/CreateInternship",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Create Internship"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/CreateJob",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Create Job"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/changepassword",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Chang Password"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/Employe/updateemploye",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Update Profile"})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,o.jsx)("p",{onClick:m,children:"Logout"})})})]})})]})]})})]})})},u=t(6688);function h(e){let{children:r}=e,t=(0,l.I0)(),s=(0,i.useRouter)();return(0,n.useEffect)(()=>{t((0,c.eY)()).then(()=>{}).catch(e=>{console.error("Authentication error:",e),s.push("Employesignin")})},[]),(0,o.jsxs)("section",{className:"h-screen",children:[(0,o.jsx)(d,{}),(0,o.jsx)(u.default,{children:r})]})}},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[3306,9179,2173,1396,2971,596,1744],function(){return e(e.s=824)}),_N_E=e.O()}]);