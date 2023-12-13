import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"


const DogShow = ({ dogs, deleteDog }) => {
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
        <h4>Pawfile info here</h4>
      <NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
        Edit Dogs Pawfile
      </NavLink>

      <NavLink to={"/dogindex/"} className="nav-link">
        <Button onClick={() => deleteDog(currentDog.id)}
                className="button-show">
        Delete Dogs Pawfile
        </Button>
      </NavLink>

      </>
    )}
  </main>
    )
}

export default DogShow