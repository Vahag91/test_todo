import { Container } from "react-bootstrap"
import { useState } from "react"
import styles from "./app.module.css"
import Header from "../Header"
import AddItem from "../AddItem/AddItem"
import TodoList from "../TodoList"
import Filters from "../Filters"




export default function App() {


    const [items,setItems] = useState([
        { text: "Buy groceries for next week", important: true, done: false, id: 1 },
        { text: "Renew car insurance", important: false, done: false, id: 2 },
        { text: "Sign up for new course", important: false, done: false, id: 3 },
  ])



    const filterBtn =  { title: "Sort", name: ["All", "Done", "Important"],id:1 }
    const sortBtn =  { title: "Filter", name: ["Newest", "Oldest"],id:2 }
       
    


    return (
        <div className="App">
            <Container className="mt-3 d-flex flex-column">
                <Header />
                <AddItem />

                 <Container className={styles.filter_container}>
                  <Filters key={filterBtn.id} title={filterBtn.title} name={filterBtn.name}/>
                  <Filters key={sortBtn.id} title={sortBtn.title} name={sortBtn.name}/>
                  </Container>

                <TodoList items={items}/>


            </Container>

        </div>
    )
}