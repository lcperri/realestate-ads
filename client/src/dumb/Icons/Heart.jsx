import styled from "styled-components"

const Heart = ({ fill = 'currentColor', width = '40', height = '40', onHover, state }) => (

    // <Svg class="playa" width="18" height="98" viewbox="8.5 -12.2 7 48.49">
    //     <path d="M16.036 11.58l-6-3.82a.5.5 0 0 0-.77.42v7.64a.498.498 0 0 0 .77.419l6-3.817c.145-.092.23-.25.23-.422s-.085-.33-.23-.42z"></path>
    //     <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
    // </Svg>
    
    <Svg fill={fill} height={height} width={width} onHover={onHover} viewBox='8 8 40 40' >
        {/* <rect width="300" height="100" style={{fill:'rgb(110, 50, 25)', strokeWidth:4, stroke:'rgb(43, 222, 221)'}} /> */}
        <path  d='M20.5 11.75C25.5 11.75 28 15.0833 28 15.0833C28 15.0833 30.5 11.75 35.5 11.75C41.3333 11.75 45.5 16.3333 45.5 22.1667C45.5 28.8333 40.0518 34.7762 35.0833 39.25C32.0159 42.012 29.6667 43.8333 28 43.8333C26.3333 43.8333 23.9175 41.9982 20.9167 39.25C16.0325 34.7771 10.5 28.8333 10.5 22.1667C10.5 16.3333 14.6667 11.75 20.5 11.75Z'  />
    </Svg>    
)

{/* <svg width="54" height="54" viewBox="0 0 58 56" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M20.5 11.75C25.5 11.75 28 15.0833 28 15.0833C28 15.0833 30.5 11.75 35.5 11.75C41.3333 11.75 45.5 16.3333 45.5 22.1667C45.5 28.8333 40.0518 34.7762 35.0833 39.25C32.0159 42.012 29.6667 43.8333 28 43.8333C26.3333 43.8333 23.9175 41.9982 20.9167 39.25C16.0325 34.7771 10.5 28.8333 10.5 22.1667C10.5 16.3333 14.6667 11.75 20.5 11.75Z" fill={fill} />
</svg > */}

export { Heart }

const Svg = styled.svg`
    /* bottom: 0; */
    /* left: 0; */
    position: absolute;
    right: 1%;
    top: 62%;
    background-color: black;
    border-radius: 100px;
    border: 2px solid black;
    cursor: pointer;
    fill: ${(props) => props.fill};
    height: ${(props) => props.height};
    padding: 1px 0px 0px 0px;
    width: ${(props) => props.width};
    z-index: 99;
    &:hover {
        fill: ${props => props.onHover};
        background-color: black;

    }
`