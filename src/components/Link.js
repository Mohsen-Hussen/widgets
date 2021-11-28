import React from 'react';

const Link = ({href , className , children}) => {
    const onClickHelperHandler = (e) => {
        e.preventDefault();
        window.history.pushState({} , '' , href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <div>
            <a onClick={onClickHelperHandler} href={href} className={className}>{children}</a>
        </div>
    )
}

export default Link;