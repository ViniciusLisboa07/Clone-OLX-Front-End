import styled from "styled-components";

export const HeaderArea = styled.div`
background-color: #FFF;
height: 60px;
border-bottom: 1px solid #CCC;  

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
}

.logo {
    flex:1;
    display: flex;
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;
    }

    .logo-1 { color: #FF0000; }
    .logo-2 { color: #00FF00; }
    .logo-3 { color: #000FF; }
}
`;