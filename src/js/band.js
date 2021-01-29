'use strict';

const _bandName = document.querySelector("#bandName");
const _musicians = document.querySelector("#musicians");

const _bandIdRead = document.querySelector("#bandIdRead");

const _bandIdUpdate = document.querySelector("#bandIdUpdate");
const _bandNameUpdate = document.querySelector("#bandNameUpdate");

const _bandIdDelete = document.querySelector("#bandIdDelete");

const createBand = () => {
    const bandName = _bandName.value;

    let data = {
        "musicians": [null],
        "name": bandName
    }

    fetch("http://localhost:8901/band/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`error ${err}`));
}

const readAllBand = () => {
    fetch("http://localhost:8901/band/read")
        .then(response => response.json())
        .then(info => {
            for (let band of info) {
                console.log(band);
            }
        })
        .catch(err => console.error(`error ${err}`));
}

const readByIdBand = () => {
    const bandIdRead = _bandIdRead.value;

    fetch(`http://localhost:8901/band/read/${bandIdRead}`)
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error ${err}`));
}

const readByNameBand = (name) => {
    fetch(`http://localhost:8901/band/read/${name}`)
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error ${err}`));
}

const readAllOrderByNamesBand = () => {
    fetch("http://localhost:8901/band/read/names")
    .then(response => response.json())
    .then(info => {
        for (let band of info) {
            console.log(band);
        }
    })
    .catch(err => console.error(`error ${err}`));
}

const updateBand = () => {
    const bandIdUpdate = _bandIdUpdate.value;
    // const musicians = _musicians.value;
    const bandNameUpdate = _bandNameUpdate.value;

    let data = {
        // musicians: musicians,
        "musicians": null,
        "name": bandNameUpdate
    }

    fetch(`http://localhost:8901/band/update/${bandIdUpdate}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`error ${err}`));
}

const deleteByIdBand = () => {
    const bandIdDelete = _bandIdDelete.value;

    fetch(`http://localhost:8901/band/delete/${bandIdDelete}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(err => console.error(`error ${err}`));
}
