import React from "react"
import { useParams } from "react-router-dom"

const DogShow = ({ dogs }) => {
    const { id } = useParams()
    let currentDog = dogs?.find((dog) => dog.id === +id)

    return (
        <main className="dog-show-cards">
    {currentDog && (
      <>
        <img
          alt={`profile of a DOG named ${currentDog.name}`}
          src={currentDog.image}
          className="dog-show-img"
        />
        <h4>more info here</h4>
      </>
    )}
  </main>
    )
}

export default DogShow