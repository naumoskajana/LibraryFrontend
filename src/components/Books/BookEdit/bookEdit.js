import React from "react";
import {useNavigate} from "react-router-dom";

const bookEdit = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        name: "",
        bookType: 0,
        author: 0,
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
        const name = formData.name !== "" ? formData.name : props.book.name;
        const bookType = formData.bookType !== "" ? formData.bookType : props.book.bookType;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = parseInt(formData.availableCopies) !== 0 ? parseInt(formData.availableCopies) : props.book.availableCopies;

        props.onEditBook(props.book.id, name, bookType, author, availableCopies);
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
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Type</label>
                        <select name="bookType" className="form-control" onChange={handleChange}>
                            {props.bookTypes.map((term) => {
                                if(props.book.bookType !== undefined &&
                                    props.book.bookType === term.bookType)
                                    return <option selected={props.book.bookType} value={String(term)}>{term}</option>
                                else return <option value={String(term)}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if(props.book.author !== undefined &&
                                    props.book.author.id === term.id)
                                    return <option selected={props.book.author.id} value={term.id}>{term.name} {term.surname}</option>
                                else return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
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

export default bookEdit;