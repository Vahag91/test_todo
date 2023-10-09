import { Container, Dropdown} from "react-bootstrap"
import styles from "./filters.module.css"




export default function Filter({ title, name, onFilterChange,onSortChange }) {


  return (

    <Container className="d-flex ms-5">
  <div className="me-4"> {title}</div>
      <Dropdown>
        <Dropdown.Toggle
          className={styles.btn}
          variant="dark"
          id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>

          {name.map((item, index) => {
            return <Dropdown.Item
            onClick={onFilterChange? ()=>onFilterChange(item): ()=>onSortChange(item)}
              key={index}
              href={`#/action-${index + 1}`}>
              {item}
            </Dropdown.Item>
          })
          }

        </Dropdown.Menu>
      </Dropdown>
   
    </Container>
  )
}