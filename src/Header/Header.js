import { Col } from "react-bootstrap"
import { FaCheck } from "react-icons/fa6";
import styles from "./header.module.css"

export default function Header(){
    


    return(
       <Col className="text-center mt-5 p-3">
         <span className={styles.header_text}><FaCheck/> My Todo</span>
       </Col>
    )
}

