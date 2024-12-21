import {createTheme, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from "./Pages/HomePage/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.tsx";
import FindJobs from "./Pages/HomePage/FindJobs.tsx";
import Footer from "./Components/Footer/Footer.tsx";
const App = () => {

    const theme = createTheme({
        colors: {
            'mineShaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d'],
            'brightSun': ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d','#461902'],
        },
        fontFamily: 'poppins, sans-serif',
    });

    return (
        <MantineProvider defaultColorScheme={"dark"} theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/find-jobs"} element={<FindJobs />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </MantineProvider>
    )
}
export default App
