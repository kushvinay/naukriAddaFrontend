(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7057],{59249:function(e,t,r){Promise.resolve().then(r.bind(r,42922))},42922:function(e,t,r){"use strict";r.r(t);var l=r(57437),s=r(57825),n=r(16691),a=r.n(n),i=r(2265),o=r(3198),d=r(24033),c=r(30699),x=r(58703);t.default=()=>{var e;let t=(0,o.I0)(),r=(0,d.useRouter)(),{isAuthenticated:n,student:m}=(0,o.v9)(e=>e.StudentSlice);return(0,i.useEffect)(()=>{n||t((0,s.ZH)()).then(()=>{}).catch(e=>{console.error("Authentication error:",e),r.push("/Studentlogin")})},[n]),(0,l.jsx)("div",{className:"py-10 px-4 md:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"w-full max-w-5xl mx-auto bg-slate-200 border border-gray-300 rounded-lg p-4 md:p-8",children:[(0,l.jsx)("h1",{className:"text-2xl md:text-3xl font-medium text-center text-gray-700 mb-6",children:"Profile"}),m&&(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,l.jsx)(a(),{className:"rounded-full cursor-pointer",src:(null==m?void 0:null===(e=m.avatar)||void 0===e?void 0:e.url)||"/default-avatar.png",height:140,width:140,onClick:e=>{e.preventDefault();let t=document.getElementById("avatarinp");t.click()},alt:"Profile Picture"}),(0,l.jsx)("p",{className:"text-xs text-center mt-2",children:"Click on profile to upload"}),(0,l.jsxs)("form",{className:"mt-4",onSubmit:e=>{e.preventDefault();let r=new FormData(e.target);r.set("avatar",e.target.avatar.files[0]),t((0,s.yR)(r))},encType:"multipart/form-data",children:[(0,l.jsx)("input",{className:"hidden",type:"file",name:"avatar",id:"avatarinp"}),(0,l.jsx)("button",{className:"border  bg-blue-500 text-white px-4 py-2 rounded-md mt-2",type:"Submit",children:"Update"})]}),(0,l.jsx)("h1",{className:"text-xl md:text-2xl font-semibold text-center mt-4",children:m.fullname})]}),m&&(0,l.jsxs)("div",{className:"mt-10",children:[(0,l.jsx)("h2",{className:"text-xl md:text-2xl font-semibold text-gray-700 border-t border-gray-300 pt-4 text-center",children:"Applied Jobs"}),0===m.jobs.length?(0,l.jsx)("h3",{className:"text-lg text-gray-500 text-center mt-4",children:"You have not applied for any Jobs yet!"}):(0,l.jsx)("div",{className:"flex overflow-x-auto whitespace-nowrap gap-4 py-4 scrollbar-hide",children:m.jobs.map(e=>(0,l.jsx)("div",{className:"w-[250px]",children:(0,l.jsx)(c.Z,{data:e})},e._id))})]}),m&&(0,l.jsxs)("div",{className:"mt-10",children:[(0,l.jsx)("h2",{className:"text-xl md:text-2xl font-semibold text-gray-700 border-t border-gray-300 pt-4 text-center",children:"Applied Internships"}),0===m.internships.length?(0,l.jsx)("h3",{className:"text-lg text-gray-500 text-center mt-4",children:"You have not applied for any Internships yet!"}):(0,l.jsx)("div",{className:"flex overflow-x-auto whitespace-nowrap gap-4 py-4 scrollbar-hide",children:m.internships.map(e=>(0,l.jsx)("div",{className:"w-[250px]",children:(0,l.jsx)(x.Z,{data:e})},e._id))})]})]})})}},30699:function(e,t,r){"use strict";var l=r(57437);r(2265);var s=r(61396),n=r.n(s),a=r(16691),i=r.n(a),o=r(36263),d=r(56783),c=r(4103),x=r(3198);t.Z=e=>{var t,r,s,a,m;let{key:h,data:u}=e,{student:v}=(0,x.v9)(e=>e.StudentSlice);return(0,l.jsx)(n(),{href:" ".concat(null==v?"/Studentlogin":"/Student/Jobs/".concat(null==u?void 0:u._id)," "),className:" ",children:(0,l.jsxs)("div",{className:" w-[270px] text-start p-4  pb-7 rounded-2xl bg-white  border-gray-50 hover:border-gray-200  hover:shadow-md my-2",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center border-b-[1px]",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:u&&(null==u?void 0:u.isActice)?(0,l.jsx)("button",{className:" border-[1px] border-red-400 p-1 rounded text-xs",children:"Not Active"}):(0,l.jsx)("button",{className:" border-[1px] border-gray-300 p-1 rounded text-xs",children:"Actively Hiring"})}),(0,l.jsx)("div",{className:"flex justify-between my-4",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:" text-sm text-black",children:u&&(null==u?void 0:u.title)}),(0,l.jsx)("p",{className:"text-sm text-gray-600 mt-1",children:(null==u?void 0:null===(t=u.employe)||void 0===t?void 0:t.organisationname)&&(null==u?void 0:null===(r=u.employe)||void 0===r?void 0:r.organisationname)})]})})]}),(0,l.jsx)(i(),{src:(null==u?void 0:null===(s=u.employe)||void 0===s?void 0:s.organisationlogo)&&(null==u?void 0:null===(m=u.employe)||void 0===m?void 0:null===(a=m.organisationlogo)||void 0===a?void 0:a.url),height:50,width:50})]}),(0,l.jsxs)("div",{className:" text-xs pt-4",children:[(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(o.Z,{className:" h-3 inline-block me-1 "})," ",u&&(null==u?void 0:u.location)?null==u?void 0:u.location:null==u?void 0:u.internshiptype]}),(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(d.Z,{className:"h-3 inline-block me-1 "})," ",u&&(null==u?void 0:u.salary)," -LPA"]}),(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(c.Z,{className:"h-3 inline-block me-1 "}),"6 Month"]})]})]})})}},58703:function(e,t,r){"use strict";var l=r(57437);r(2265);var s=r(61396),n=r.n(s),a=r(16691),i=r.n(a),o=r(36263),d=r(56783),c=r(4103),x=r(3198);t.Z=e=>{var t;let{key:r,data:s}=e,{student:a}=(0,x.v9)(e=>e.StudentSlice);return(0,l.jsx)(n(),{href:" ".concat(null==a?"/Studentlogin":"/Student/Internships/".concat(s._id)," "),className:" ",children:(0,l.jsxs)("div",{className:" w-[270px] text-start p-4  pb-7 rounded-2xl bg-white  border-gray-50 hover:border-gray-200  hover:shadow-md my-2",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center border-b-[1px]",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:s&&s.isActice?(0,l.jsx)("button",{className:" border-[1px] border-red-400 p-1 rounded text-xs",children:"Not Active"}):(0,l.jsx)("button",{className:" border-[1px] border-gray-300 p-1 rounded text-xs",children:"Actively Hiring"})}),(0,l.jsx)("div",{className:"flex justify-between  my-4",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:" text-sm text-black",children:s&&s.profile}),(0,l.jsx)("p",{className:"text-sm text-gray-600 mt-1",children:s.employe.organisationname&&(null===(t=s.employe)||void 0===t?void 0:t.organisationname)})]})})]}),(0,l.jsx)(i(),{src:s.employe.organisationlogo&&s.employe.organisationlogo.url,height:50,width:50})]}),(0,l.jsxs)("div",{className:" text-xs mt-4",children:[(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(o.Z,{className:" h-3 inline-block me-1 "}),s&&s.location?s.location:s.internshiptype]}),(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(d.Z,{className:"h-3 inline-block me-1 "}),s&&s.Stipend.amount," Rs"]}),(0,l.jsxs)("h6",{className:"text-gray-600 my-1",children:[(0,l.jsx)(c.Z,{className:"h-3 inline-block me-1 "}),s&&s.duration]})]})]})})}},24033:function(e,t,r){e.exports=r(68165)},4103:function(e,t,r){"use strict";var l=r(2265);let s=l.forwardRef(function({title:e,titleId:t,...r},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))});t.Z=s},56783:function(e,t,r){"use strict";var l=r(2265);let s=l.forwardRef(function({title:e,titleId:t,...r},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});t.Z=s},36263:function(e,t,r){"use strict";var l=r(2265);let s=l.forwardRef(function({title:e,titleId:t,...r},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))});t.Z=s}},function(e){e.O(0,[3306,4134,2173,1396,6691,7825,2971,596,1744],function(){return e(e.s=59249)}),_N_E=e.O()}]);