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
                width: 200px;
            }

            button {
                background-color: white;
                font-size: 15px;
                border: 0;
                border-radius: 0px 5px 5px 0px;
                color: #999;
                height: 60px;
                padding: 0 20px;
                cursor: pointer;
                transition: all ease 0.3;
            }
            
            button:hover{
                background-color: #A14EBC;
                color: white;
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
            flex-direction: column;
            align-items: center;
            color: #fff;
            text-decoration: none;
            height: 100px;
            margin-bottom: 20px;
            
            .circle {
                width: 58px;
                height: 58px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border-radius: 100px;
                background-color: #CCC;
                transition: all 0.5s;
            }

            span:hover{
                color: #CCC;
            }

            img {
                width: 30px;
                height: 30px;
                /* margin-right: 10px; */
            }
        }
    }
`;

export const PageArea = styled.div`
h2{
    padding: 10px 15px;
    font-size: 20px;
    color: rgb(74, 74, 74);
}

.list{
    display: flex;
    flex-wrap: wrap;

    .adItem{
        width: 25%;
    }
}

.seeAllLink{
    color: black;
    text-decoration : none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
}
`;