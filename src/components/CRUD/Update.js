import axios from "axios";

function Update(_id, e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/editais/${_id}`)
        .then(res => console.log("Edital atualizado", res))
        .catch(err => console.log(err))
    alert("Atualizado");
}

export default Update;
