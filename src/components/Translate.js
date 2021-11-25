import React , { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Italian',
        value: 'it'
    }
];
const Translate = () => {
    const [language , setLanguage] = useState(options[0]);
    const [text , setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter Text</label>
                <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown label="Select Language" selected={language} onSelectChange={setLanguage} options={options}/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;