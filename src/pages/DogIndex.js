import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogIndex = ({ dogs }) => {
  return (
    <main className="dog-index-cards">
      {dogs?.map((dog, index) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <img alt={`profile of a dog named ${dog.name}`} src={dog.image} />
            <CardBody>
              <CardTitle tag="h5">{dog.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {dog.age}
              </CardSubtitle>
              <NavLink to={`/dogshow/${dog.id}`} className="nav-link">
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default DogIndex;
