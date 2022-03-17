import React from 'react';
import Home from '@/components/Home';
import {store} from "@/store";
import { getYjsValue } from "@syncedstore/core";
import * as Y from "yjs";
const App = () => {
    const doc = new Y.Doc()
    return (
        <div className="App">
            <Home />
        </div>
    );
}
export default App;
