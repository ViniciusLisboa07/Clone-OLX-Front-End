import styled from "styled-components";

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`

export const PageArea = styled.div`
display: flex;
margin-top: 20px;

.box{
    background-color: #FFF;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
}

.box--padding{
    padding: 10px;
}

.leftSide{
    flex: 1;
    margin-right: 20px;

    .box{
        display: flex;
    }

    .adImage{
        width: 320px;
        height: 320px;
        margin-right: 20px;

        .each-slide img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height: 320px;
        }
    }

    .adInfo {
        flex: 1;

        .adName{
            margin-bottom: 20px;
            
            h2{
                margin: 0;
                margin-top: 20px;
            }

        }
        .adDescription{
            margin: 0;
            font-size: 15px;
        }
    }
}

.rightSide{
    width: 300px;

    .price {
        border-radius: 20px 5px 5px 20px;
        background-color: #6E0AD6;
    }
    
    .price h2 {
        color: white;
        padding: 5px;
        font-size: 35px;
        font-weight: normal;
    }

    .createdBy {
        border-top: 4px solid #10CE64;
    }
    .createdBy div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .createdBy small{
        display: block;
        color: #999;
        margin-top: 10px;
    }
    
    .contactSellerLink {
        background-color: rgb(247, 131, 35);
        color: white;
        padding: 10px 15px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration:none;
        margin-bottom: 20px;
        transition: all 0.2s;
    }

    .contactSellerLink:hover{
        background-color: #F99D53;
    }

}

`;