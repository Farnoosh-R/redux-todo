"use client"
import Card from "../../components/Card/Card";
import store from '../../store/store'
import { Provider } from "react-redux";

const Home = () => {

   
    

    return(
        <div className="home h-screen w-screen">
        <div className="container flex justify-center  mx-auto flex-items-center justify-center h-screen">
        <Provider store={store}>
        <Card />
        </Provider>
        </div>
        </div>
    )
}
export default Home;