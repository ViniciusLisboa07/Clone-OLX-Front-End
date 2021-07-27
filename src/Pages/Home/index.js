import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import  AdItem  from '../../components/partials/AdItem';
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler';
import { set } from 'js-cookie';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ads, setAds] = useState([]);

    useEffect(() => {

        const getStates = async () => {
            const sList = await api.getStates();

            setStateList(sList);
        }

        getStates();

    }, []);

    useEffect(() => {

        const getCategories = async () => {
            const cats = await api.getCategories();

            setCategories(cats);
        }

        getCategories();

    }, []);

    useEffect(() => {

        const getRecentAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit:8
            }); 
            setAds(json.ads)
        }

        getRecentAds();

    }, []);



    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select>
                                <option></option>
                                {stateList &&
                                    stateList.map((i, k) =>
                                        <option key={k} value={i.name}>{i.name}</option>
                                    )
                                }
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories &&
                            categories.map((i, k) =>

                                <Link key={k} to={`/ads?cat=${i.name}`} className="categoryItem">
                                    <div className="circle">
                                        <img src={i.img} alt="" />
                                    </div>
                                    <span>{i.name}</span>
                                </Link>

                            )
                        }
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                        <h2>Anúncios Recentes</h2>
                        <div className="list">
                            {ads &&
                                ads.map((i,k) => {
                                    <AdItem key={k} data={i} />
                                })
                            }
                        </div>
                
                        <Link to="/ads" className="seeAllLink">Veja todos os links</Link>
                            
                        <hr />
                        
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </PageArea> 
            </PageContainer>
        </>
    );

}

export default Page;