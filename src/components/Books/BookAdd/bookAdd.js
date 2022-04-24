import React from "react";
import {useNavigate} from "react-router-dom";

const bookAdd = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        name: "",
        bookType: 1,
        author: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const bookType = formData.bookType;
        const author = formData.author;
        const availableCopies = parseInt(formData.availableCopies);

        props.onAddBook(name, bookType, author, availableCopies);
        history("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Type</label>
                        <select name="bookType" className="form-control" onChange={handleChange}>
                            {props.bookTypes.map((term) =>
                                <option value={String(term)}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Enter available copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}



export default bookAdd;