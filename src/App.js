import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { Fragment } from 'react';
import { DefaultLayout } from '~/layouts';
// import { useEffect } from 'react';
// import { getTestService } from '~/services/testService';
function App() {
    // useEffect(() => {
    //     getTest();
    // }, []);
    // const getTest = async () => {
    //     let data = await getTestService();
    //     console.log(data);
    // };
    console.log('test');
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; // nếu mình ko chỉ định gì thì nó là DefaultLayout và route.layout là undifine

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                            // console.log(Layout);
                        } else if (route.layout === null) {
                            Layout = Fragment;
                            // console.log(Layout);
                        }
                        const Page = route.component;
                        // console.log(Page);
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
