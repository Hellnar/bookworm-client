import React from 'react'
import { useEffect, useState } from 'react'
import Nav from '../../components/Reviews/Nav.jsx'
import { ReviewsStyled } from "./styled.js"

export default function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews()
    }, [])

    async function getReviews() {
        const result = await fetch("http://localhost:3000/api/reviews")
        const resultToJSON = await result.json()
        setReviews(JSON.parse(resultToJSON))
    }

    async function handleDelete(e) {
        await fetch("http://localhost:3000/api/reviews", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: e.target.id})
        })
        getReviews()
    }

    return (
        <ReviewsStyled className="reviews">
            <Nav />
            {reviews.map(item => (
                <div className="review-card" key={item._id}>
                    <div className="review-book">
                        <p>{item.title}</p>
                    </div>
                    <div className="review-author">
                        <p>{item.author}</p>
                    </div>
                    <div className="review-rating">
                        <p className="rating-num">{item.rating}</p>
                        <div className="rating-stars">
                            {[...Array(item.rating)].map(item => {
                                return <p className="star">⭐</p>
                            })}
                        </div>
                    </div>
                    <div className="review-details">
                        <button>View details</button>
                    </div>
                    <div className="review-delete">
                        <button id={item._id} onClick={(e) => handleDelete(e)}>Del</button>
                    </div>
                </div>
            ))}
        </ReviewsStyled>
    )
}
