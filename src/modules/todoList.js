import Project from './Project';
import Task from './Task';

export default class TodoList{
    constructor(){
        this._projects=[];
        let today = new Project('today');
        let t1 = new Task('t1','d1','date1','1priority',false);
        today.addTask(t1);
        this._projects.push(today);
        this._projects.push(new Project('today2'));
        this._projects.push(new Project('today3'));
        this._projects.push(new Project('today4'));
    }

    get projects(){
        return this._projects;
    }

    displayProjects(){
        console.log(this._projects)
    }    

    displayProject(project){
        let index = this.projectIndex(project);
        this._projects[index].displayTasks();
    }

    pushTask(task,project){
        this._projects[this.projectIndex(project)].addTask(task);
    }

    projectIndex(project){
        return this._projects.findIndex(ele=> ele.projectName==project);
    }
}