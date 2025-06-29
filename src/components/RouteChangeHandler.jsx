import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const RouteChangeHandler = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to top and start loader
        window.scrollTo(0, 0);
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); // 3 sec max loader

        return () => clearTimeout(timeout);
    }, [location]);

    return loading ? <Loader /> : children;
};

export default RouteChangeHandler;
