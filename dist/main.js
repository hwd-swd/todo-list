(()=>{"use strict";class e{constructor(e,t,o,r,c){this._title=e,this._description=t,this._date=o,this._priority=r,this._complete=c}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get date(){return this._date}set date(e){this._date=e}get priority(){return this._priority}set priority(e){this._priority=e}get complete(){return this._complete}set complete(e){this._complete=e}toggleComplete(){1==this._complete?this._complete=!1:this._complete=!0}getDate(){let[e,t,o]=this._date.split("-");return t=parseInt(t).toString(),o=parseInt(o).toString(),`${t}/${o}/${e}`}}class t{constructor(e){this._projectName=e,this._tasks=[]}get projectName(){return this._projectName}get tasks(){return this._tasks}addTask(e){this._tasks.push(e)}hasTask(e){return this._tasks.some((t=>t.title==e))}removeTask(e){this._tasks.splice(e,1)}deleteTask(e){if(!this.hasTask(e))return!1;this.removeTask(this.taskIndex(e))}taskIndex(e){return this._tasks.findIndex((t=>t.title==e))}toggleCompleteTask(e){if(!this.hasTask(e))return!1;this._tasks[this.taskIndex(e)].toggleComplete()}}let o=new class{constructor(){this._projects=[];let o=new t("Inbox"),r=new e("t1","d1","2010-02-09","1priority",!1);o.addTask(r),this._projects.push(o),this._projects.push(new t("today2")),this._projects.push(new t("today3")),this._projects.push(new t("today4"))}get projects(){return this._projects}pushTask(e,t){this._projects[this.projectIndex(t)].addTask(e)}projectIndex(e){return this._projects.findIndex((t=>t.projectName==e))}pushProject(e){this._projects.push(new t(e))}hasProject(e){return this._projects.some((t=>t.projectName==e))}deleteTask(e,t){return!!this.hasProject(t)&&this._projects[this.projectIndex(t)].deleteTask(e)}toggleTaskComplete(e,t){return!!this.hasProject(t)&&this._projects[this.projectIndex(t)].toggleCompleteTask(e)}},r=function(){const e=document.querySelector("#overlay");!function(){const e=document.querySelector("#project");e.innerHTML="",o.projects.forEach((t=>{let o=document.createElement("option");o.setAttribute("value",t.projectName),o.textContent=t.projectName,e.appendChild(o)}))}(),e.style.display="block"},c=function(){document.querySelector("#title").value="",document.querySelector("#date").value="",document.querySelector("#priority").checked=!1,document.querySelector("#description").value=""},s=function(){c(),document.querySelector("#overlay").style.display="none"},n=function(){const t=document.querySelector("#project").value,r=document.querySelector("#title").value,c=document.querySelector("#date").value,n=document.querySelector("#priority").checked,l=document.querySelector("#description").value;if(""==r)alert("Please fill out a title");else if(""==c)alert("Please fill out a date");else{let a=new e(r,l,c,n,!1);o.pushTask(a,t),i(t),s()}},i=function(e){if(o.hasProject(e)){d(),document.querySelector(".todoTitle").textContent=e;let t=document.querySelector(".todoList"),r=o.projectIndex(e);o.projects[r].tasks.forEach((e=>t.appendChild(l(e))))}},l=function(e){let t=document.createElement("div");t.setAttribute("class","taskContainer"),e.complete&&(t.className+=" completed");let o=document.createElement("div");o.setAttribute("class","taskLeft"),t.appendChild(o);let r=document.createElement("div");r.setAttribute("class","checkBox"),o.appendChild(r),r.setAttribute("value",e.title);let c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("value",e.title),r.appendChild(c),r.addEventListener("click",u);let s=document.createElement("p");s.textContent=`${e.title}`,o.appendChild(s),e.complete&&(s.className+=" completedText");let n=document.createElement("div");n.setAttribute("class","taskRight"),t.appendChild(n);let i=document.createElement("p");i.textContent=`${e.priority}`,n.appendChild(i);let l=document.createElement("p");l.setAttribute("class","date"),l.textContent=`${e.getDate()}`,n.appendChild(l),e.complete&&(l.className+=" completedText");let d=document.createElement("p");return d.setAttribute("class","taskDelete"),d.textContent="X",d.setAttribute("value",e.title),d.addEventListener("click",a),n.appendChild(d),t},a=function(e){let t=e.target.getAttribute("value"),r=document.querySelector(".todoTitle").textContent;o.deleteTask(t,r),i(r)},u=function(e){let t=e.target.getAttribute("value"),r=document.querySelector(".todoTitle").textContent;o.toggleTaskComplete(t,r),i(r)},d=function(){document.querySelector(".todoList").innerHTML=""},p=function(){document.querySelectorAll(".project").forEach((e=>e.addEventListener("click",(e=>i(e.target.textContent)))))},m=function(){const e=document.querySelector("#projectTitle").value;console.log(o.hasProject(e)),""==e||o.hasProject(e)||(o.pushProject(e),j(),y(),i(e))},h=function(){document.querySelector(".addProject").style.display="none",document.querySelector(".addProjectForm").style.display="flex"},y=function(){document.querySelector(".addProject").style.display="flex";const e=document.querySelector(".addProjectForm");document.querySelector("#projectTitle").value="",e.style.display="none"},j=function(){_();let e=document.querySelector(".customProjects");o.projects.forEach((t=>{"Inbox"!=t.projectName&&e.appendChild(k(t))})),p()},k=function(e){let t=document.createElement("h2");return t.setAttribute("class","project"),t.textContent=e.projectName,t},_=function(){document.querySelector(".customProjects").innerHTML=""};!function(){let t=new e("t2","d1","1997-11-10","1priority",!1);o.pushTask(t,"Inbox"),document.querySelector(".addTask").addEventListener("click",r),document.querySelector("#close").addEventListener("click",s),document.querySelector("#submit").addEventListener("click",n),document.querySelector("#clearForm").addEventListener("click",c),document.querySelector(".addProject").addEventListener("click",h),document.querySelector("#submitProject").addEventListener("click",m),document.querySelector("#cancelProject").addEventListener("click",y),i("Inbox"),j(),p()}()})();