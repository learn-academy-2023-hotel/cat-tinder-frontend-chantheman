import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"



const DogShow = ({ dogs, deleteDog }) => {
    const { id } = useParams()
    let currentDog = dogs?.find((dog) => dog.id === +id)

    return (
        <div className="dog-show-cards">
    {currentDog && (
      <>
        <img
          alt={`profile of a DOG named ${currentDog.name}`}
          src={currentDog.image}
          className="dog-show-img"
        />
        <div className="dog-show-container" >
        <h4>Pawfile Info</h4>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia posuere consequat. Maecenas ac tortor in sem rhoncus lacinia. Praesent gravida velit in fermentum imperdiet. Cras consectetur ex ut lectus vehicula vehicula ut at lacus. Sed a justo magna</h3>
        <div className="dog-show-buttons">
        <NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
            <button className="button-show1">
              Edit Dogs Pawfile
            </button>
          </NavLink>

          {/* Delete Dogs Pawfile Button */}
          <NavLink to={"/dogindex/"} className="nav-link">
            <button onClick={() => deleteDog(currentDog.id)} className="button-show2">
              Delete Dogs Pawfile
            </button>
          </NavLink>
          </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DogShow