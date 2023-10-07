import { Button, InputGroup, Form, Dropdown, DropdownButton } from "react-bootstrap"
import Calendar from "react-calendar"




export default function Search() {


    return (

        <InputGroup className="mt-3">
            <Form.Control aria-label="Text input with dropdown button" />
            <Dropdown>
                <DropdownButton>
                    <Calendar />
                </DropdownButton>
            </Dropdown>
            <Button variant="outline-secondary" id="button-addon2">
                Add
            </Button>
        </InputGroup>
    )
}