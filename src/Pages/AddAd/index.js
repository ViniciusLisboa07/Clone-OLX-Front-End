import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';

const Page = () => {
    const api = useApi();

    const fileField = useRef();

    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState('');
    const [desc, setDesc] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const getCategories = async () => {

            const cats = api.getCategories();
            setCategories(cats);

        }

        getCategories();

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        setDisabled(false);
    }


    return (
        <PageContainer>
            <PageTitle>Adicionar novo anúncio</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select
                                disabled={disabled}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                <option></option>
                                {
                                    console.log(categories)
                                    // categories.map((i,k) => {
                                    //     <option key={k} value={i._id} >{i.name}</option>
                                    // })
                                }
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            ...
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                            <input type="checkbox"
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e => setPriceNegotiable(!priceNegotiable)}

                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                disabled={disabled}
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>


                    <label className="area">
                        <div className="area--title">
                        </div>
                        <div className="area--input">
                            <button disabled={disabled}>Adicionar Anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;