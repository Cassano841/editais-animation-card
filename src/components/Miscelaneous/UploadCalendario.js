import axios from "axios";
import { useRef } from "react";

function UploadCalendario() {

    const fileElement = useRef(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
        for (const file of fileElement.current.files) {
            dataForm.append('file', file);
        }
        if (fileElement === null) {
            alert("Carregar arquivo antes de realizar o upload");
        } else {
            axios.post("http://localhost:2300/uploadCalendario", dataForm)
                .then((res) => {
                    console.log(res.statusText);
                })
            window.location.reload(false);
        }

    }

    return (
        <div>
            <div className="header-titulo">
                <form>
                    <input type={"file"} name="file" ref={fileElement} />
                    <button onClick={handleUpload}>Upload Calendario</button>
                </form>
            </div>
        </div>
    );
}

export default UploadCalendario;