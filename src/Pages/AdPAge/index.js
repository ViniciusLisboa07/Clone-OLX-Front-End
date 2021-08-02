import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageArea, Fake } from './styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI'

const Page = () => {
    const api = useApi();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json[0]);
            setLoading(false);
        }

        getAdInfo(id);
    }, [])

    return (
        <PageContainer>
            <PageArea>

                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo &&
                                        adInfo.images.map((i, k) => {
                                            <div className="each-slide ">
                                                <img key={k} src={i} />
                                            </div>
                                        })
                                    }
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }

                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                                {adInfo.description &&
                                    <p>{adInfo.description}</p>
                                }
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                        {adInfo.priceNegotiable &&
                            "Preço Negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">Preço: <span>R$: {adInfo.price} </span></div>
                        }
                    </div>

                    {loading && <Fake height={60} />}
                    {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.mail}`} target="_blank" className="contactSellerLink">Fale com o vendedor!</a>
                            <div className="box box--padding"></div>
                        </>
                    }
                </div>

            </PageArea>
        </PageContainer>
    );

}

export default Page;