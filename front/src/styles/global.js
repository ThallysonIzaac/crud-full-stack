import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        background-color: #f2f2f2;
    }
    .header-title{
        color: black;
        font-size: 1.8rem;
    }
    footer{
        width:100;
        text-align: center;
        font-weight: 200;
        font-style: italic;
        padding: 20px;
    }
`;

export default Global;
