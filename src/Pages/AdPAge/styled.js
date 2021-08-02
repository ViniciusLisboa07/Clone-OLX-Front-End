import styled from "styled-components";

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props=>props.height || 20}px;
`

export const PageArea = styled.div`
display: flex;
margin-top: 20px;

.box{
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
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
    width: 250px;

    .price span{
        color: blue;
        display: block;
        font-size: 27px;
        font-weight: bolder;
    }

    .contactSellerLink {
        background-color: #0000FF;
        color: white;
        height: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration:none;
        margin-bottom: 20px;
    }
}

`;