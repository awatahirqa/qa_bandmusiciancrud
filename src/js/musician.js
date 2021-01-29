'use strict';

const peeps = document.querySelector("#peeps"); 
const username = document.querySelector("#name"); 
const job = document.querySelector("#job"); 


const createMusician = () => {
    const idValue = id.value;
    const nameValue = name.value; 
    const stringsValue = strings.value;
    const typeValue = type.value;

    let data = {
        id: idValue,
        name: nameValue, 
        strings : 0,
        type : "POP"

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
                    console.log(musicians.id);
                    printNameToScreen(musicians.id);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
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

const musiciansbytypes = () => {
    fetch("http://localhost:8901/musician/read/types")
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
const musicianbyid = (id) => {
    fetch("http://localhost:8901/musician/read/${id}")
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
                    console.log(musicians.id);
                    printNameToScreen(musicians.id);
                }
            })
        }
    }).catch((err) => {
        console.error(err);
    })
}
const musicianbyname = (name) => {
    fetch("http://localhost:8901/musician/readBy/name/${name}")
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
    fetch("http://localhost:8901/musician/readBy/strings/${strings}")
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
    fetch("http://localhost:8901/musician/readBy/type/${type}")
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