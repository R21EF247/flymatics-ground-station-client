// NumbersContext.js
import React from 'react';

const NumbersContext = React.createContext({
    receivedNumbers: [],
    setReceivedNumbers: () => { }
});

export default NumbersContext;
