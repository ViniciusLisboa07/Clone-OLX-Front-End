import styled from "styled-components";



export const PageArea = styled.div`

form{
    background-color: white;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #CCC;

    .area{
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
    }

    .area--title{
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14;
    }

    .area--input{
        flex: 1;
        input{

            width: auto;
            font-size: 14;
            padding: 5px;
            border: 1px solid #CCC;
            border-radius: 5px;
            outline: 0;
            transition: all ease 0.4s;

            &:focus{
                border: 1px solid #333;
                color: #333;
            }
        }

        button{
            background-color: #0089FF;
            border: 0;
            outline: none;
            padding: 5px 10px;
            border-radius: 5px;
            color:white;
            cursor: pointer;
            
            &:hover{
                background-color: #006FCE;
            }
        }
    }
}

`;