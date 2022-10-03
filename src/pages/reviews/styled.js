import styled from "styled-components"

export const ReviewsStyled = styled.div`
    .review-card {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 1fr 1fr;
        padding: 1rem;
        background-color: #fff;

        .review-book {
            display: flex;
            align-items: center;
        }

        .review-author {
            display: flex;
            align-items: center;
        }

        .review-rating {
            display: flex;
            align-items: center;

            .rating-stars {
                display: flex;
                align-items: center;
            }
        }

        .review-delete {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
`