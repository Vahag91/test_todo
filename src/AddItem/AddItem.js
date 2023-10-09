import { Button, InputGroup, Form, Dropdown } from "react-bootstrap"
import Calendar from "react-calendar"
import { useState } from "react"
import 'react-calendar/dist/Calendar.css'
import { FaCalendarDays } from "react-icons/fa6"
import styles from "./add-item.module.css"




export default function AddItem({onAddItem}) {

    const [inputText, setInputText] = useState("")
    const [selectedDate, setSelectedDate] = useState(new Date())

    const onInPutChange = (event) => {
        setInputText(event.target.value)
      }

      const onAddBtn = ()=>{
        onAddItem(inputText,selectedDate)
        setInputText("")
       
      }


    return (

        <InputGroup className="mt-3" style={{ height: "80px" }}>
            <Form.Control
                type="text"
                placeholder="Enter here..." 
                defaultValue={inputText}
                onChange={onInPutChange}/>
            <Dropdown >

                <Dropdown.Toggle className={styles.hide}>
                    <FaCalendarDays className={styles.icon} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Calendar
                     value={selectedDate}
                     onChange={setSelectedDate}/>
                </Dropdown.Menu>
            </Dropdown>
            <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={onAddBtn}>
                Add
            </Button>
        </InputGroup>

    )
}