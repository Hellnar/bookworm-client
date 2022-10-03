import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;

    .review-inputs {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;

        label {
            display: flex;
            justify-content: flex-start;
            font-weight: 700;
            font-size: 1.2rem;
        }

        input, textarea {
            width: 100%;
            margin-bottom: 1rem;
        }

        select {
            margin-bottom: 1rem;
        }
    }
`