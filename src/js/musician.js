'use strict';

const _musicianName = document.querySelector("#musicianName");
const _strings = document.querySelector("#strings");
const _type = document.querySelector("#type");

const _musicianIdUpdate = document.querySelector("#musicianIdUpdate");
const _musicianNameUpdate = document.querySelector("#musicianNameUpdate");
const _musicianStringsUpdate = document.querySelector("#musicianStringsUpdate");
const _musicianTypeUpdate = document.querySelector("#musicianTypeUpdate");

const _musicianIdDelete = document.querySelector("#musicianIdDelete");

const createMusician = () => {
    const musicianNameValue = _musicianName.value; 
    const stringsValue = _strings.value;
    const typeValue = _type.value;

    let data = {
        // id: idValue,
        "band": null,
        "name": musicianNameValue, 
        "strings" : stringsValue,
        "type" : typeValue
    }

    fetch("http://localhost:8901/musician/create",{
        method: "POST", 
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`Something went wrong! ${err}`));
}

const musiciansread = () => {
    fetch("http://localhost:8901/musician/read")
    .then(response => response.json())
    .then(info => {
        for (let musician of info) {
            console.log(musician);
        }
    })
    .catch(err => console.error(`error ${err}`));
}

const musiciansbynames = () => {
    fetch("http://localhost:8901/musician/read/names")
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians.name);
                    printNameToScreen(musicians.name);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}

const musiciansbystrings = () => {
    fetch("http://localhost:8901/musician/read/strings")
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians.strings);
                    printNameToScreen(musicians.strings);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}

const musicianby_id = (id) => {
    fetch(`http://localhost:8901/musician/read/${id}`)
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians._id);
                    printNameToScreen(musicians._id);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}
const musicianbyname = (name) => {
    fetch(`http://localhost:8901/musician/readBy/name/${name}`)
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians.name);
                    printNameToScreen(musicians.name);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}
const musicianbystring = (strings) => {
    fetch(`http://localhost:8901/musician/readBy/strings/${strings}`)
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians.strings);
                    printNameToScreen(musicians.strings);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}

const musiciansbytypes = (type) => {
    fetch(`http://localhost:8901/musician/readBy/type/${type}`)
    .then((response) => {
        // check that the response is OK (i.e. 200)
        if(response.status !== 200){
            throw new Error("I don't have a status of 200");
        }else{
            console.log(response);
            console.log(`response is OK (200)`);
            //json-ify it (which returns a promise)
            response.json().then((infofromserver) =>{
                console.log(infofromserver);
                console.log(infofromserver.data); // key - return array(6)
                for(let musicians of infofromserver.data){
                    console.log(musicians.type);
                    printNameToScreen(musicians.type);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}

const updateMusician = () => {
    const musicianIdValue = _musicianIdUpdate.value;
    const musicianNameValue = _musicianNameUpdate.value; 
    const musicianStringsValue = _musicianStringsUpdate.value;
    const musicianTypeValue = _musicianTypeUpdate.value;
 
    let data = {
        id: musicianIdValue,
        name: musicianNameValue, 
        strings : musicianStringsValue,
        type : musicianTypeValue
    }
 
    fetch(`http://localhost:8901/musician/update/${musicianIdValue}`, {
        method: "PUT", 
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`Something went wrong! ${err}`));
}

const deleteMusician = () => {
    const musicianIdDelete = _musicianIdDelete.value;
 
    fetch(`http://localhost:8901/musician/delete/${musicianIdDelete}`, {
        method: "DELETE", 
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`Something went wrong! ${err}`));
}