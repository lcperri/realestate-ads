import styled from 'styled-components'

const GalleryDetailsContainer = styled.div`
    /* background-color: yellow; */
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    gap: 4px;
    /* width: 80%; */
    overflow: hidden;
    /* margin: 0 auto; */
    /* border-radius: 20px; */

    @media (max-width: 768px) {
        gap: 3.5px;
    }
`

export default GalleryDetailsContainer