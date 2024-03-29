import React, { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) => {
    const [flag, setFlag] = useState(initialValue);

    const toggle = useCallback(() => {
        setFlag(flag => !flag);
    }, [flag]);

    return [flag, toggle];
}