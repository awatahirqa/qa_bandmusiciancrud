'use strict';

const _bandName = document.querySelector("#bandName");
const _musicians = document.querySelector("#musicians");
const _id = document.querySelector("#id");

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

const readByIdBand = (id) => {
    fetch(`http://localhost:8901/band/read/${id}`)
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
    const id = _id.vlaue;
    const musicians = _musicians.value;
    const bandName = _bandName.value;

    let data = {
        musicians: musicians,
        bandName: bandName
    }

    fetch(`http://localhost:8901/band/update/${id}`, {
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

const deleteByIdBand = (id) => {
    fetch(`http://localhost:8901/band/delete/${id}`)
        .then(response => response.json())
        .then(info => console.log(info))
        .catch(err => console.error(`error ${err}`));
}
