import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageArea, Fake } from './styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

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
                                                <img key={k} src={i} alt=""/>
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
                    {adInfo.priceNegotiable &&
                        <div className="box box--padding">
                            {loading && <Fake height={20} />}
                            "Preço Negociável"
                        </div>
                    }
                    {!adInfo.priceNegotiable && adInfo.price &&
                        <div className="price">
                            <h2>R$: {adInfo.price} </h2>
                        </div>
                    }

                    {loading && <Fake height={60} />}
                    {adInfo.userInfo &&
                        <>
                            <div className="createdBy box box--padding">
                                <div>
                                    <h2>{adInfo.userInfo[0].name}</h2>
                                </div>
                                <a href={`mailto:${adInfo.userInfo[0].mail}`} target="_blank" className="contactSellerLink">Fale com o vendedor!</a>
                                <small>E-mail: {adInfo.userInfo[0].mail}</small>
                                <small>Estado: {adInfo.userInfo[0].stateName}</small>
                            </div>
                        </>
                    }
                </div>
            </PageArea>

            {adInfo.others &&
                <>
                    <h2>Outras ofertas do vendedor</h2>
                    <div className="list">
                        {adInfo.others.map((i, k) => {
                            <AdItem key={k} data={i} />
                        })}
                    </div>
                </>
            }
        </PageContainer>
    );

}

export default Page;