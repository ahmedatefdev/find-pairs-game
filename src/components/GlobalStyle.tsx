import { createGlobalStyle } from 'styled-components';

import { spacing } from '../styles/vars';
import 'antd/dist/antd.css';
import { IAppStyledProps } from '../redux/types/IAppStyledProps';




const GlobalStyle = createGlobalStyle`

    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        /* font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; */
        min-width: 320px;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }
*{
    margin:0em;
}
    body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
        text-rendering: optimizeLegibility;
        /* Theme vars */
        color: ${(props: IAppStyledProps) => {
        return props.theme.text
    }};
        background: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }

   
   
    table {  
        width: 100%; 
        border-collapse: 
        collapse; border-spacing: 0; 
    }
    
    td, th {  
        height: 30px; 
    }
    
    thead {
        text-transform: uppercase;
        font-size: 0.9rem;
        border-radius: 5px;
    }

    th {  
        font-weight: 500;
        text-align: left;
        padding: 5px;
    }
    
    td {
        padding: 5px;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

  

    strong {
        font-weight: 700;
    }

    button,
    select {
        outline: none;
        :focus {
            box-shadow: 0 0 0 2pt #ecefff;
        }
    }

    hr {
        margin: ${spacing.large} 0;
    }

    @media (min-width: 768px) {
        body {
            font-size: 18px;
        }
    }
`;

export default GlobalStyle;
