import React from "react";

const countryTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.continent}</td>
        </tr>
    )
}

export default countryTerm;