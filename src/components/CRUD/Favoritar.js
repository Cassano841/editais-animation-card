import axios from "axios";

function Favoritar(_id, e) {
    e.preventDefault();
    axios.patch(`http://localhost:5000/api/editais/${_id}`)
        .then(res => console.log("Edital favoritado", res))
        .catch(err => console.log(err))
    alert("Edital favoritado");
    
}

export default Favoritar;