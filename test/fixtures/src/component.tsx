import React, {useEffect} from 'react';

export const Comp = ({value}: {value: string}) => {
    useEffect(() => {
        document.title = value;
    }, []);
    return <button disabled>{value}</button>;
};
