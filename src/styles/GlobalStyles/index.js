import { createGlobalStyle } from "styled-components";
import bannerImage from '../../components/assets/background.jpg'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
    html, body, #root{
        min-height: 100vh;
    }
    body{
        background-image: url(${bannerImage});
    }
    a{
    text-decoration: none;
    color: #ffffff;
    }
    main{
    background: #252B42;
    }
    .gap{
        gap: 10px;
    }
    .gap2{
        gap: 40px;
    }
    .w-md-100 {
        @media(max-width: 768px){
            width: 100%;
        }
    }
    .container{
        padding-right: 0;
    }
    .h3-mb{
        margin-bottom: 0;
    }
`