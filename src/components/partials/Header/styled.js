import styled from "styled-components";

export const HeaderArea = styled.div`
background-color: #FFF;
height: 60px;
border-bottom: 1px solid #CCC;  

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    background-color: #FFF;
}

a {
    text-decoration: none; 
}

.logo {
    flex:1;
    display: flex;
    align-items: center;
    height: 50px; 

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;
    }

    .logo-1 { color: #9027b0; }
    .logo-2 { color: #85d43e; }
    .logo-3 { color: #fd7e14; }
}

nav {
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        height: 55px;
    }

    li {
        margin-left: 20px;
        margin-right: 20px;

        a, button {
            border: 0;
            background-color: transparent;
            color: #000000;
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            outline: 0;
 
            
            &:hover{
                color: #6E0AD6;
            }
       
            &.button{
                background-color: rgb(247, 131, 35);
                border-radius: 15px;
                color: white;
                padding: 10px 15px;
            }
            
            
            &.button:hover{
                background-color: #F99D53;
            }
        }
        
    }
    
}
`;