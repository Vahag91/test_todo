import { Container, Row,Col} from "react-bootstrap"
import Header from "../Header"
import Search from "../Search/Search"
import TodoList from "../TodoList"

export default function App(){


    return(
        <div className="App">
            
            <Container>
  <Row className="mt-3 d-flex flex-column">
     <Col> 
     <Header/>
     </Col> 
     <Col>
      <Search/>
      </Col>
      <TodoList/>
</Row>
</Container>

        </div>
    )
}