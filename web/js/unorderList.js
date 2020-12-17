//export {getcompleteList, createElemetOfList};
class UnorderList {
    constructor (listProfile, listEducation, listContact){
        this._profileList = listProfile;
        this._educationList = listEducation;
        this._contactList = listContact;
    }
    get profileList(){
        return this._profileList;
    }
    get educationList(){
        return this._educationList;
    }
    get contactList(){
        return this._contactList;
    }    
    set profileList(list){
        this._profileList = list;
    }
    set educationList(list){
        this._educationList = list;
    }
    set contactList(list){
        this._contactList = list;
    }

    getcompleteList(){
        return this;
    }
    removePreviousList(){
        let ul = document.getElementById('unorderList');
        if(ul.hasChildNodes()){
            while(ul.firstChild){
                ul.removeChild(ul.firstChild);
            }
        }        
    }
    createElementOfProfile(){
        let ul = document.getElementById('unorderList');
        this.removePreviousList();
        this.profileList.forEach(element => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            li.classList.add('nav-item');
            a.classList.add('nav-link');
            a.href = "?p=profile#"+element;
            li.appendChild(a);
            a.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });	        
    }
    createElementOfEducation(){
        let ul = document.getElementById('unorderList');
        this.removePreviousList();
        this.educationList.forEach(element => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            li.classList.add('nav-item');
            a.classList.add('nav-link');
            a.href = "?p=education#"+element;
            li.appendChild(a);
            a.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });	       
    }
    createElementOfContact(){
        let ul = document.getElementById('unorderList');
        this.removePreviousList();
        this.contactList.forEach(element => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            li.classList.add('nav-item');
            a.classList.add('nav-link');
            a.href = "?p=contact#"+element;
            li.appendChild(a);
            a.appendChild(document.createTextNode(element));
            ul.appendChild(li);                    
        });	       
    }    
}
var profileList = ["Personal","Professional","Hobbies"];
var contactList = ["Phone", "E-Mail", "Others"];
var educationList = ["School", "University", "Technologies"];

var moduleList = new UnorderList(profileList,educationList,contactList);


document.getElementById("linkProfile").addEventListener("click",moduleList.createElementOfProfile.bind(moduleList));
document.getElementById("linkEducation").addEventListener("click",moduleList.createElementOfEducation.bind(moduleList));
document.getElementById("linkContact").addEventListener("click",moduleList.createElementOfContact.bind(moduleList));
document.getElementById("linkWork").addEventListener("click",moduleList.removePreviousList.bind(moduleList));
