import React from "react"
import { useParams } from "react-router-dom"

const DogShow = ({ dogs }) => {
    const { id } = useParams()
    let currentDog = dog.find((dog) => dog.id === +id)

    return (
        <>
        <h3>Dog Show Page</h3>
        </>
    )
}

export default DogShow