import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

const PageViewTracker = React.memo(() => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return null;
});

export default PageViewTracker;
