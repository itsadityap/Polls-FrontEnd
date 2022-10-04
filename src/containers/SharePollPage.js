import Navbar from "../components/navbar";
import SharePollMessage from "../components/SharePage/SharePollMessage";
const SharePage = () => {

    return(
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='share'>
                <SharePollMessage />
            </div>
        </div>
    );
}
export default SharePage;