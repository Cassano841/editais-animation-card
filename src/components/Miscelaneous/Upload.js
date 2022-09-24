import axios from "axios";

function Upload() {

    const handleFileChange = (e) => {
        this.setState ({
            selectedFile: e.target.files[0]
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post(data)
            .then((res) => {
                console.log(res.statusText);
            })
    }

    return (
        <div>
            <div className="header-titulo">
                <form>
                    <input type={"file"} name="file" onChange={handleFileChange}/>
                    <button onClick={handleUpload}>Upload</button>
                </form>

            </div>
        </div>
    );
}

export default Upload;