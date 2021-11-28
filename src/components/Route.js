import React , {useEffect , useState} from "react";

const Route = ({path , children}) => {
    const [currentpath , setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = (e) => {
            if (e.metaKey || e.ctrlKey) {
                return;
            }
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate' , onLocationChange);
        return () => {
            window.removeEventListener('popstate' , onLocationChange);
        };
    },[]);
    return currentpath === path ? children : null;
};

export default Route;