"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7825],{9652:function(t,e,n){var o=n(2173);let a=o.Z.create({baseURL:"http://localhost:4040/",withCredentials:!0});e.Z=a},7825:function(t,e,n){n.d(e,{BD:function(){return u},Bo:function(){return A},E4:function(){return S},F5:function(){return k},FD:function(){return v},HF:function(){return q},L$:function(){return c},Ln:function(){return H},MH:function(){return _},PP:function(){return m},Qq:function(){return Z},Ys:function(){return E},ZH:function(){return d},ZS:function(){return g},ZT:function(){return O},a7:function(){return L},aw:function(){return l},cb:function(){return w},e7:function(){return C},fC:function(){return D},hB:function(){return R},kY:function(){return P},kx:function(){return b},nx:function(){return i},oR:function(){return p},p5:function(){return f},pZ:function(){return B},rM:function(){return j},sN:function(){return y},vs:function(){return U},yR:function(){return h}});var o=n(9652),a=n(2771),s=n(171);n(6518);let l=()=>async(t,e)=>{var n;try{let{data:e}=await o.Z.post("/user/student/find-job/pagination?limit=20");t((0,a.gS)(null==e?void 0:e.jobs))}catch(e){console.log(a.Ru),t((0,a.Ru)(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message))}},i=t=>async(e,n)=>{var s;try{let{data:n}=await o.Z.post("/user/student/find-job/pagination?length=".concat(t,"&limit=20"));e((0,a.vo)(null==n?void 0:n.jobs))}catch(t){e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},r=()=>async(t,e)=>{try{let{data:e}=await o.Z.post("/user/student/find-internship/pagination?limt=20");t((0,a.D2)(null==e?void 0:e.internships))}catch(e){t((0,a.Ru)(null==e?void 0:e.data.message))}},u=t=>async(e,n)=>{var s,l;try{console.log(t);let{data:n}=await o.Z.post("/user/student/find-internship/pagination?lenth=".concat(t,"&limit=3"));console.log("addinter ".concat(null==n?void 0:null===(s=n.internships)||void 0===s?void 0:s.length)),e((0,a.vo)(null==n?void 0:n.internships))}catch(t){e((0,a.Ru)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message))}},c=()=>async(t,e)=>{var n,s;try{let e=await o.Z.post("/user/student");console.log(e.data.student.fullname),t((0,a.uq)(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.student)),t(l()),t(r())}catch(e){t((0,a.Ru)(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message)),console.log(e)}},d=()=>async(t,e)=>{var n,s;try{let e=await o.Z.post("/user/student");console.log(e.data.student.fullname),t((0,a.uq)(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.student))}catch(e){t((0,a.Ru)(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message))}},v=t=>async(e,n)=>{try{e((0,a.tr)()),await o.Z.post("/user/student/signup",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},p=t=>async(e,n)=>{try{e((0,a.tr)()),await o.Z.post("/user/student/signin",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},g=()=>async(t,e)=>{var n;try{let e=await o.Z.get("/user/student/signout");return console.log(e),t((0,a.ST)()),null==e?void 0:e.data}catch(e){t((0,a.Ru)(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message))}},h=t=>async(e,n)=>{try{console.log("call"),await o.Z.post("/user/student/avatar",t),e(d()).then(()=>{s.Am.success("Profile Picture Changed",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(t=>{s.Am.error("Update failed")})}catch(t){var l;e((0,a.Ru)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message))}},y=t=>async(e,n)=>{try{await o.Z.post("/user/student/change-password",t),e(d()).then(()=>{s.Am.success("Password changed Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(t=>{s.Am.error("Update failed")})}catch(t){console.log(t)}},m=t=>async(e,n)=>{try{let n=await o.Z.post("/student/forget-password",t);console.log(n),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},f=t=>async(e,n)=>{try{await o.Z.post("/student/forget-link/",t),e(d())}catch(t){console.log(t)}},w=t=>async(e,n)=>{try{await o.Z.post("/user/student/update-user",t),e(d()).then(()=>{s.Am.success("Update Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(t=>{s.Am.error("Update failed")})}catch(t){var l;e((0,a.Ru)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message))}},Z=t=>async(e,n)=>{try{await o.Z.post("/resume/add-education",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},R=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-education/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},b=t=>async(e,n)=>{try{await o.Z.post("/resume/add-jobs",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message))}},A=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-jobs/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},C=t=>async(e,n)=>{try{await o.Z.post("/resume/add-intenships",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},j=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-intenships/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},k=t=>async(e,n)=>{try{await o.Z.post("/resume/add-responsibilities",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},S=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-responsibilities/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},P=t=>async(e,n)=>{try{await o.Z.post("/resume/add-courses",t),e(d())}catch(t){e((0,a.Ru)(t.response.data.message)),console.log(t)}},O=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-courses/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},U=t=>async(e,n)=>{try{await o.Z.post("/resume/add-skills",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},B=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-skills/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},H=t=>async(e,n)=>{try{await o.Z.post("/resume/add-projects",t),e(d())}catch(t){console.log(t)}},L=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-projects/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},q=t=>async(e,n)=>{try{await o.Z.post("/resume/add-accomplishments",t),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},D=t=>async(e,n)=>{try{await o.Z.post("/resume/delete-accomplishments/".concat(t)),e(d())}catch(t){var s;e((0,a.Ru)(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)),console.log(t)}},_=t=>async(e,n)=>{try{await o.Z.post("/user/student/internship-apply/".concat(t)),e(d()).then(()=>{s.Am.success("Applied Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(t=>{s.Am.error("Update failed")})}catch(t){var l;e((0,a.Ru)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message)),console.log(t)}},E=t=>async(e,n)=>{try{await o.Z.post("/user/student/job-apply/".concat(t)),e(d()).then(()=>{s.Am.success("Applied Successfully",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}).catch(t=>{s.Am.error("Update failed")})}catch(t){var l;e((0,a.Ru)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message)),console.log(t)}}},2771:function(t,e,n){n.d(e,{D2:function(){return i},Ru:function(){return d},ST:function(){return l},gS:function(){return r},tr:function(){return v},uq:function(){return s},vo:function(){return u}});var o=n(64);let a=(0,o.oM)({name:"counter",initialState:{isLoading:!1,isAuthenticated:!1,student:null,internships:null,jobs:null,errors:null},reducers:{IsLoading:(t,e)=>{t.isLoading=!0},SetUser:(t,e)=>{t.isAuthenticated=!0,t.isLoading=!1,t.student=e.payload,t.error=null,console.log(1),console.log(e.payload)},RemoveUser:(t,e)=>{},SetInternships:(t,e)=>{t.internships=e.payload},AddInternships:(t,e)=>{t.internships=[...t.internships,...e.payload],console.log("added"),console.log(t.internships)},Setjobs:(t,e)=>{t.jobs=e.payload},iserror:(t,e)=>{t.errors=e.payload},AddJobs:(t,e)=>{let n=e.payload;t.jobs=[...t.jobs,...n]}}}),{SetUser:s,RemoveUser:l,SetInternships:i,Setjobs:r,AddInternships:u,AddJobs:c,iserror:d,IsLoading:v}=a.actions;e.ZP=a.reducer}}]);