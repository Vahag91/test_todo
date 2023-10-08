import { Form, Button, Row, Col, Container } from "react-bootstrap"


export default function TodoList({ items }) {


    return (
        <Container>
            {items.map((item, index) => {
                return <Row key={index}>
                    <Col sm={1}>
                        <Form.Check type="checkbox" inline />
                    </Col>
                    <Col sm={9}>
                        <span>{item.text}</span>
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