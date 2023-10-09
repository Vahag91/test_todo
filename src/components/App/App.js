import { Container } from "react-bootstrap"
import { useState } from "react"
import styles from "./app.module.css"
import Header from "../Header"
import AddItem from "../AddItem/AddItem"
import TodoList from "../TodoList"
import Filters from "../Filters"




export default function App() {


    const [items, setItems] = useState([
        { text: "Buy groceries for next week", Important: true, Done: false, date: new Date(2024, 2, 4), id: 1 },
        { text: "Renew car insurance", Important: true, Done: false, date: new Date(2023, 9, 12), id: 2 },
        { text: "Sign up for new course", Important: false, Done: false, date: new Date(2023, 12, 2), id: 3 },
    ])
    const [filter, setFilter] = useState("All")



    const sortBtn = { title: "Sort", name: ["Newest", "Oldest"], id: 1 }
    const filterBtn = { title: "Filter", name: ["All", "Done", "Important"], id: 2 }


    const onSort = (value, btnName) => {

        if (btnName === "Newest") {
            return value.sort((a, b) => {
                return a.date - b.date
            })
        } else if (btnName === "Oldest") {
            return value.sort((a, b) => {
                return b.date - a.date
            })

        }
    }

    const onFilter = (items, btnName) => {
        switch (btnName) {
            case 'All':
                return items;
            case 'Done':
                return items.filter((el) => el.Done)
            case 'Important':
                return items.filter((el) => el.Important && !el.Done)
            default:
                return items
        }
    }

    const onFilterChange = (value) => {
        setFilter(value)
    }
    const onSortChange = (btnName) => {
        const sortedItems = onSort([...items], btnName);
        setItems(sortedItems);
    };


    const onAdditem = (inputText,date) => {
      if(!inputText && date){
        return
      }


        const id = items.length ? items[items.length - 1].id + 1 : 1
        const newItem = {
            text: inputText,
            Important: false,
            Done: false,
            date,
            id
        }
        setItems((prevState) => [...prevState, newItem])
        console.log(items);
    }

    const actuallItems = onFilter(items, filter)

    return (
        <div className="App">
            <Container className="mt-3 d-flex flex-column">
                <Header />
                <AddItem onAddItem={onAdditem} />

                <Container className={styles.filter_container}>

                    <Filters title={filterBtn.title} name={filterBtn.name} onFilterChange={onFilterChange} />
                    <Filters title={sortBtn.title} name={sortBtn.name} onSortChange={onSortChange} />
                </Container>

                <TodoList items={actuallItems} />


            </Container>

        </div>
    )
}