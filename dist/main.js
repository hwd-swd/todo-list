(()=>{"use strict";class e{constructor(e,t,o,r,s){this._title=e,this._description=t,this._date=o,this._priority=r,this._done=s}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get date(){return this._date}set date(e){this._date=e}get priority(){return this._priority}set priority(e){this._priority=e}get done(){return this._done}set done(e){this._done=e}getDate(){let[e,t,o]=this._date.split("-");return t=parseInt(t).toString(),o=parseInt(o).toString(),`${t}/${o}/${e}`}}class t{constructor(e){this._projectName=e,this._tasks=[]}get projectName(){return this._projectName}get tasks(){return this._tasks}addTask(e){this._tasks.push(e)}removeTask(e){this._task=[...this.task.slice(0,e),this.task.slice(e+1)]}displayTasks(){this._tasks.forEach((e=>console.log({task:e})))}}let o=new class{constructor(){this._projects=[];let o=new t("today"),r=new e("t1","d1","2010-02-09","1priority",!1);o.addTask(r),this._projects.push(o),this._projects.push(new t("today2")),this._projects.push(new t("today3")),this._projects.push(new t("today4"))}get projects(){return this._projects}displayProjects(){console.log(this._projects)}displayProject(e){let t=this.projectIndex(e);this._projects[t].displayTasks()}pushTask(e,t){this._projects[this.projectIndex(t)].addTask(e)}projectIndex(e){return this._projects.findIndex((t=>t.projectName==e))}pushProject(e){this._projects.push(new t(e))}},r=function(){document.querySelector("#overlay").style.display="block"},s=function(){document.querySelector("#title").value="",document.querySelector("#date").value="",document.querySelector("#priority").checked=!1,document.querySelector("#description").value=""},c=function(){document.querySelector("#overlay").style.display="none"},n=function(){const t=document.querySelector("#title").value,r=document.querySelector("#date").value,s=document.querySelector("#priority").checked,n=document.querySelector("#description").value;if(""==t)alert("Please fill out a title");else if(""==r)alert("Please fill out a title");else{let d=new e(t,n,r,s,!1);o.pushTask(d,"today"),i("today"),c()}},i=function(e){l();let t=document.querySelector(".todoList"),r=o.projectIndex(e);console.log(o),o.projects[r].tasks.forEach((e=>t.appendChild(d(e))))},d=function(e){let t=document.createElement("div");t.setAttribute("class","taskContainer");let o=document.createElement("div");o.setAttribute("class","taskLeft"),t.appendChild(o);let r=document.createElement("p");r.textContent=`${e.title}`,o.appendChild(r);let s=document.createElement("div");s.setAttribute("class","taskRight"),t.appendChild(s);let c=document.createElement("p");return c.textContent=`${e.getDate()}`,s.appendChild(c),document.createElement("p").textContent=`${e.priority}`,s.appendChild(c),t},l=function(){document.querySelector(".todoList").innerHTML=""},u=function(){const e=document.querySelector("#projectTitle").value;""!=e&&(o.pushProject(e),h(),p())},a=function(){document.querySelector(".addProjectForm").style.display="flex"},p=function(){const e=document.querySelector(".addProjectForm");document.querySelector("#projectTitle").value="",e.style.display="none"},h=function(){m();let e=document.querySelector(".customProjects");o.projects.forEach((t=>e.appendChild(y(t))))},y=function(e){let t=document.createElement("h2");return t.setAttribute("class","project"),t.textContent=e.projectName,t},m=function(){document.querySelector(".customProjects").innerHTML=""};!function(){let t=new e("t2","d1","1997-11-10","1priority",!1);o.pushTask(t,"today"),document.querySelector(".addTask").addEventListener("click",r),document.querySelector("#close").addEventListener("click",c),document.querySelector("#submit").addEventListener("click",n),document.querySelector("#clearForm").addEventListener("click",s),document.querySelector(".addProject").addEventListener("click",a),document.querySelector("#submitProject").addEventListener("click",u),document.querySelector("#cancelProject").addEventListener("click",p),i("today"),h()}()})();