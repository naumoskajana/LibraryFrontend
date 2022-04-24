import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.bookType}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <a className={"btn btn-dark"} onClick={() => props.onMarkAsTaken(props.term.id)}>MarkAsTaken</a>
                <Link className={"btn btn-secondary ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>Edit</Link>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>Delete</a>
            </td>
        </tr>
    )
}

export default bookTerm;