import "./index.css"
import Navbar from "../components/navbar";
import MakePoll from "../components/CreatePoll/makePoll";
const MainDashboard = () => {
    return(
        <div className='dashboard-main'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='createPoll'>
                <MakePoll />
            </div>
        </div>
    );
}
export default MainDashboard;