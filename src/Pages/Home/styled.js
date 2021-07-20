import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 2px solid #CCC;
    padding: 20px 0;

    .searchBox {
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 2px 0.3px rgba(0,0,0,0, 0.2);
        display: flex;

        form{
            flex: 1;
            display: flex;

            input, select {
                height: 40px;
                border: 0;
                border-radius: 5px;
                outline: 0;
                font-size: 15px;
                color: #000;
                margin-right: 20px;
            }

            input{
                flex: 1;
                padding: 0 10px;
            }

            select {
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
            color: white;
            text-decoration: none;
            height: 50px;
            margin-bottom: 20px;

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