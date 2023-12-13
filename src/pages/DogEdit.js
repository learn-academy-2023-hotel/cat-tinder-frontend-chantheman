import { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"


const DogEdit = ({ dogs, updateDog }) => {
    const { id } = useParams()
    let currentDog = dogs?.find((dog) => dog.id === +id)

    const [editDog, setEditDog] = useState({
        name: currentDog.name,
        age: currentDog.age,
        enjoys: currentDog.enjoys,
        image: currentDog.image,
    })
    const handleChange = (e) => {
        setEditDog({ ...editDog, [e.target.name]: e.target.value})
    } 
    const navigate = useNavigate()
     
    const handleSubmit = () => {
        updateDog(editDog, currentDog.id)
        navigate("/dogindex")
    }
  
    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input 
                type="text" 
                id="name"
                name="name"
                onChange={handleChange}
                value={editDog.name}
                 />
            </FormGroup>
            <FormGroup>
                <Label for="age">Age</Label>
                <Input 
                type="number"
                id="age" 
                name="age" 
                onChange={handleChange}
                value={editDog.age}
                />
            </FormGroup>
            <FormGroup>
                <Label for="enjoys">Enjoys</Label>
                <Input 
                type="text" 
                id="enjoys"
                name="enjoys" 
                onChange={handleChange}
                value={editDog.enjoys}
                />
            </FormGroup>
            <FormGroup>
               <Label for="image">Image URL</Label>
               <Input 
               type="text" 
               id="image"
               name="image"
               onChange={handleChange}
                value={editDog.image} 
               />
            </FormGroup>
        <Button onClick={handleSubmit} name="Submit">Submit Updated 
        Dog</Button>
        </Form>
    )
}
export default DogEdit