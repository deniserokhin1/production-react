import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { App } from "./01_app/App";
import { ThemeProvider } from "01_app/providers/ThemeProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
<BrowserRouter>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
</BrowserRouter>
);
