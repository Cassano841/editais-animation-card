import { useEffect } from "react";

function FilterCard() {
    useEffect(() => {
        fetch("http://localhost:5000/api/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    
                }
            )
    })
}

export default FilterCard;