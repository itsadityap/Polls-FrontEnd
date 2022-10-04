import Navbar from "../components/navbar";
import DisplayResult from "../components/Result/displayResult";
const ResultPage = () => {
    return(
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='share'>
                <DisplayResult />
            </div>
        </div>
    );
}
export default ResultPage;