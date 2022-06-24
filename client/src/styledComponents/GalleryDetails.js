import styled from 'styled-components'

const GalleryDetails = styled.span`
    cursor: pointer;
    transition: all 350ms ease;
    img {
        border-radius: 10px;
        /* position: relative; */
        width: 100%;
    }

    /* Responsive: */
    @media (max-width: 768px) {
        img {
            width: 100%;
        }
    }
`
export default GalleryDetails