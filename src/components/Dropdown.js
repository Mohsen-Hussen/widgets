import React  , { useState , useEffect , useRef} from 'react';

const Dropdown = ({options , selected , onSelectChange}) => {
    const [open , setOpen] = useState(false);
    const ref = useRef();
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        };
        return (
            <div key={option.value} className="item" onClick={() => {onSelectChange(option)}}>
                {option.label}
            </div>
        );
    });
    const renderedText = options.map((option) => {
        if (option.value === selected.value) {
            return (
                <p key={option.value} style={{color:`${option.value}`}} onClick={() => {onSelectChange(option)}}>
                    This is {option.value}
                </p>
            );
        } else {return null;}
    });
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={() => {setOpen(!open)}} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div>{renderedText}</div>
            </div>
        </div>
    )
}

export default Dropdown;