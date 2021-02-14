export default class Task {
    constructor(title,description,date,priority,done){
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._done = done;
    }

    get title(){
        return this._title;
    }

    set title(newTitle){
        this._title = newTitle;
    }

    get description(){
        return this._description;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    get date(){
        return this._date;
    }

    set date(newDate){
        this._date = newDate;
    }

    get priority(){
        return this._priority;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    get done(){
        return this._done;
    }

    set done(newDone){
        this._done = newDone;
    }

    getDate(){
        let [year,month,day] = this._date.split('-');
        return `${month}/${day}/${year}`
    }
};