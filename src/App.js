import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { useWindowDimensions } from './hooks/useWindowDimensions';
function App() {
    const { height } = useWindowDimensions();
    return (
        <div className="App" style={{ height: height + 'px' }}>
            <Dashboard />
        </div>
    );
}

export default App;
