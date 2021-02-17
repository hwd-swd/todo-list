import {format} from 'date-fns'

export default class Task {
    constructor(title,description,date,priority,complete){
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._complete = complete;
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

    get complete(){
        return this._complete;
    }

    set complete(newcomplete){
        this._complete = newcomplete;
    }

    //toggles task completion
    toggleComplete(){
        if (this._complete==true){
            this._complete=false;
        }
        else{
            this._complete=true;
        };
    }

    //toggles task priority
    togglePriority(){
        if (this._priority==true){
            this._priority=false;
        }
        else{
            this._priority=true;
        };
    }

    //removes the leading zeros and returns the formmated date
    getDate(){
        let [month,day,year] = format(this._date, 'MM/dd/yyyy').split('/');
        month = parseInt(month).toString();
        day = parseInt(day).toString();
        year = parseInt(year).toString();
        return `${month}/${day}/${year}`
    }

    getDateNormal(){
        return format(this._date, 'yyyy-MM-dd')
    }
};