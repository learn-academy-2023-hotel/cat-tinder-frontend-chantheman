import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"



const DogIndex = ({ dogs }) => (
    <main className="dog-index-cards">
      {dogs?.map((dog, index) => (
        <Card
          style={{
            width: "14rem"
          }}
          key={index}
        >
          <img alt={`profile of a dog named ${dog.name}`} src={dog.image} />
          <CardBody>
            <CardTitle tag="h5">{dog.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {dog.age}
            </CardSubtitle>
            <Button>See More Details</Button>
          </CardBody>
        </Card>
      ))}
    </main>
  );
  




    

    


export default DogIndex