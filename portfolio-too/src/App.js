import React, { useState } from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" }
    ]);

    const [content, setContent] = useState(pages[0]);

    return (
        <div>
            <Header>
                <Navigation
                    pages={pages}
                    setContent={setContent}
                    content={content}
                ></Navigation>
            </Header>
            <div>
                <Page content={content}>
                </Page>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
