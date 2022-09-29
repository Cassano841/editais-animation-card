import axios from "axios";

function Delete(_id, e) {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/editais/${_id}`)
        .then(res => console.log("Edital deletado", res))
        .catch(err => console.log(err))
    alert("Deletou");
    window.location.href = 'http://localhost:3000/'
}

export default Delete;