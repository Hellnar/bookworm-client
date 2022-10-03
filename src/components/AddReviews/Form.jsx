import React from 'react'
import { FormStyled } from "./style"
import { useState } from "react"

export default function Inputs() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const reviewData = {
            title,
            author,
            rating,
            review
        }

        await fetch("http://localhost:3000/api/reviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        setTitle("")
        setAuthor("")
        setRating(0)
        setReview("")
    }

    return (
        <FormStyled onSubmit={handleSubmit} className="add-review">
            <div className="review-inputs">
                <label htmlFor="book-name">Book name</label>
                <input type="text" id="book-name" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="book-author">Book author</label>
                <input type="text" id="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <label htmlFor="book-rating">Book rating</label>
                <select id="book-rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="book-review">Book review</label>
                <textarea id="book-review" cols="30" rows="10" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
            </div>
            <button type="submit">Add review</button>
        </FormStyled>
    )
}
