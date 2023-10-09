import { Form, Button, Row, Col, Container } from "react-bootstrap"
import  styles from "./todo-list.module.css"

export default function TodoList({ items }) {

    const currentDate = new Date();

    const calcDays = (itemDate) => {

      const diff = itemDate - currentDate;
      const daysRemaining = diff / (1000 * 3600 * 24);
      return daysRemaining <= 5;
    };
  
    return (
        <Container>
            {items.map((item, index) => {
                return <Row key={index}>
                    <Col sm={1}>
                        <Form.Check type="checkbox" inline />
                    </Col>
                    <Col sm={7}>
                        <span>{item.text}</span>
                    </Col>
                    <Col sm={2}>
                        <span className={calcDays(item.date)? styles.text_style:null}>{item.date.getDate()}th  {item.date.toLocaleString('default', { month: 'short' })} {item.date.getFullYear()} </span>
                    </Col>
                    <Col sm={2}>
                        <Button>add</Button>
                        <Button>edit</Button>
                    </Col>
                </Row>
            })}
        </Container>

    )
}