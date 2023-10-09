import { Button, InputGroup, Form, Dropdown} from "react-bootstrap"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import { FaCalendarDays } from "react-icons/fa6"
import styles from "./add-item.module.css"




export default function AddItem() {


    return (

        <InputGroup className="mt-3" style={{height:"80px"}}>
            <Form.Control 
            aria-label="Text input with dropdown button" 
            placeholder="Enter here..."/>
            <Dropdown >
                
                <Dropdown.Toggle className={styles.hide}>
                  <FaCalendarDays className={styles.icon}/>
                   </Dropdown.Toggle>

                <Dropdown.Menu>
                      <Calendar />
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-secondary" id="button-addon2">
                Add
            </Button>
        </InputGroup>
       
    )
}