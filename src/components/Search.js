import React , { useState , useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term , setTerm] = useState('Html');
    const [debouncedterm , setDebouncedTerm] = useState(term);
    const [results , setResults] = useState([]);

    const onSearchTermHandler = (e) => {
        setTerm(e.target.value);
    }
    // made 2 seperate use effect to treat the warning at the console & to not make double api request
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    },[term]);

    useEffect(() => {
        const searchWiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php' , {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedterm,
                },
            });
            setResults(data.query.search);
        };
        searchWiki();
    },[debouncedterm]);

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