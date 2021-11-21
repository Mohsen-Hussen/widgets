import React , { useState , useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term , setTerm] = useState('Html');
    const [results , setResults] = useState([]);

    const onSearchTermHandler = (e) => {
        setTerm(e.target.value);
    }

    useEffect(() => {
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php' , {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        // to treat api request delay for 1 sec
        if (term && !results.length) {
            searchWiki();
        } else {
            // to treat requesting api untill finishing my search typing
            const timeoutId = setTimeout(() => {
                if (term) {
                    searchWiki();
                }
            }, 1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    },[term]);

    const renderdResultsList = results.map((result) => {
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ui button">Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={onSearchTermHandler}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderdResultsList}
            </div>
        </div>
    )
}

export default Search;