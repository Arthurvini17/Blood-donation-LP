import { FaHeartbeat } from "react-icons/fa";
import Loading from "./Loading";
export default function Header() {
    return (
        <header className="flex  justify-between p-5 ">
            <div className="flex flex-row items-center">
                <h1 className="inline-flex  items-center gap-2 text-2xl font-bold"> <FaHeartbeat className="text-red-600" /> BloodConnect</h1>
            </div>

            <nav className=" ">
                <div className=" flex flex-row text-center items-center gap-5 font-medium">
                    <h1>About</h1>
                    <h1>Rewards</h1>
                    <h1>Partners</h1>
                    <button className="text-red-500 border border-red-500 p-2 rounded-md">Sign In</button>
                </div>
            </nav>
        </header>
    )
}