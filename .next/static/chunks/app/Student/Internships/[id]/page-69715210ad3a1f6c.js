(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4028],{3321:function(e,s,t){Promise.resolve().then(t.bind(t,92325))},92325:function(e,s,t){"use strict";t.r(s);var l=t(57437),n=t(2265);t(39652);var r=t(62067),i=t.n(r),a=t(57825),d=t(3198),c=t(24033),o=t(36263);s.default=e=>{var s;let{params:t}=e,r=(0,d.I0)(),x=(0,c.useRouter)(),{isAuthenticated:m,student:p,internships:h}=(0,d.v9)(e=>e.StudentSlice),u=h.find(e=>t.id==e._id);console.log(u.usersapplied),console.log(u.usersapplied);let y=u.usersapplied.includes(p._id);console.log(y);let[j,N]=(0,n.useState)(y);return(0,n.useEffect)(()=>{m||x.push("/StudentHome")},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center py-4 md:py-6 font-semibold  ",children:u&&u.profile}),(0,l.jsxs)("div",{className:"w-full max-w-[95%] md:max-w-[600px] lg:max-w-[650px] mx-auto text-start px-4 py-5 md:px-8 rounded-xl border border-gray-150 hover:border-gray-200 hover:shadow-md my-2 shadow-sm transition duration-200 ease-in-out",children:[u&&u.isActice?(0,l.jsx)("button",{className:" border-[1px] border-red-400 p-1 rounded text-sm",children:"Not Active"}):(0,l.jsx)("button",{className:" border-[1px] border-gray-300 p-1 rounded text-sm",children:"Actively Hiring"}),(0,l.jsxs)("div",{className:"flex justify-between border-b-[1px] pb-4 mt-5 mb-1",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:" text-xl text-black py-2",children:u&&u.profile}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:u&&(null===(s=u.employe)||void 0===s?void 0:s.organisationname)})]}),(0,l.jsx)("img",{className:"h-[60px]",src:u.employe.organisationlogo.url})]}),(0,l.jsxs)("h6",{className:"text-gray-600 my-2",children:[(0,l.jsx)(o.Z,{className:" h-4 pb-1 inline-block me-1 "}),u&&u.location?u.location:u.internshiptype]}),(0,l.jsxs)("div",{className:" flex text-sm pb-3 ",children:[(0,l.jsxs)("div",{className:"me-7",children:[(0,l.jsx)("h6",{className:"text-gray-700",children:"Stipend"}),(0,l.jsxs)("h6",{className:"text-gray-600",children:[u&&u.Stipend.amount," rs"]})]}),(0,l.jsxs)("div",{className:"me-7",children:[(0,l.jsx)("h6",{className:"text-gray-700",children:"Duration"}),(0,l.jsx)("h6",{className:"text-gray-600 ",children:null==u?void 0:u.duration})]})]}),(0,l.jsx)("div",{className:"border-b-[1px] pb-2",children:(0,l.jsxs)("p",{className:" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ",children:[i()(u.createdAt).fromNow()," "]})}),(0,l.jsx)("div",{className:"flex justify-end"}),(0,l.jsxs)("div",{className:"my-3",children:[(0,l.jsx)("h2",{className:"text-xl text-gray-700 font-medium py-1 ",children:"Skills Required"}),(0,l.jsx)("h6",{className:"text-gray-600 pt-2",children:u&&u.skills})]}),u&&u.responsibility&&(0,l.jsxs)("div",{className:"my-3",children:[(0,l.jsx)("h2",{className:"text-xl text-gray-700 font-medium py-1 ",children:"Responsibility"}),(0,l.jsx)("h6",{className:"text-gray-600 pt-2",children:null==u?void 0:u.responsibility})]}),u&&u.assesments&&(0,l.jsxs)("div",{className:"my-3",children:[(0,l.jsx)("h2",{className:"text-xl text-gray-700 font-medium py-1 ",children:"Assessments"}),(0,l.jsx)("h6",{className:"text-gray-600 pt-2",children:null==u?void 0:u.assesments})]}),u.opening&&(0,l.jsxs)("div",{className:"my-3",children:[(0,l.jsx)("h2",{className:"text-xl text-gray-700 font-medium py-1 ",children:"Number of Opening"}),(0,l.jsx)("h6",{className:"text-gray-600 pt-2",children:null==u?void 0:u.opening})]}),(0,l.jsx)("div",{className:"w-full flex items-center justify-center",children:j?(0,l.jsx)("button",{className:" px-4 py-2 bg-green-400 text-white",children:"Applied"}):(0,l.jsx)("button",{className:"  px-4 py-2 bg-sky-400 text-white ",onClick:e=>{r((0,a.MH)(u._id)),N(!0)},children:"Apply Now"})})]})]})}},24033:function(e,s,t){e.exports=t(68165)},36263:function(e,s,t){"use strict";var l=t(2265);let n=l.forwardRef(function({title:e,titleId:s,...t},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},t),e?l.createElement("title",{id:s},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))});s.Z=n}},function(e){e.O(0,[6990,3306,4134,2173,7825,2971,596,1744],function(){return e(e.s=3321)}),_N_E=e.O()}]);