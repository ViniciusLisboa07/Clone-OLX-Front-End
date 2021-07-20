import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #6E0AD6;
    border-bottom: 2px solid #CCC;
    padding: 20px 0;

    .searchBox {
        border-radius: 5px;
        box-shadow: 1px 2px 0.3px rgba(0,0,0,0, 0.2);
        display: flex;

        form{
            flex: 1;
            display: flex;

            input, select {
                height: 60px;
                border: 0;
                outline: 0;
                font-size: 15px;
                color: #000;
                /* margin-right: 20px; */
            }
            
            input{
                flex: 1;
                border-radius: 5px 0px 0px 5px;
                padding: 0 10px;
            }
            
            select {
                border-radius: 0px 5px 5px 0px;
                width: 200px;
            }

            button {
                background-color: #48AEEF;
                font-size: 15px;
                border: 0;
                border-radius:  5px;
                color: white;
                height: 40px;
                padding: 0 20px;
                cursor: pointer;
                transition: all ease 0.3;
            }
            
            button:hover{
                background-color: #2E86C1;
            }
        }
    }

    .categoryList{
        display: flex;
        flex-wrap: wrap;
    
        margin-top:  20px;

        .categoryItem{
            width: 33%;
            display: flex;
            align-items: center;
            color: #555;
            text-decoration: none;
            height: 50px;
            margin-bottom: 20px;
            
            span:hover{
                color: black;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
        }
    }
`;

export const PageArea = styled.div`

`;