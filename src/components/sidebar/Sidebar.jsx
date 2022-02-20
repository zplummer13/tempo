import { useState } from 'react';
import { FaChartPie, FaCalendarCheck, FaCog } from 'react-icons/fa';

const SideBar = () => {
    const [current, setCurrent] = useState("todo");

    return (
        <div className="fixed top-0 left-0 h-screen w-16 pt-1 bg-slate-500 flex flex-col shadow-lg">
            <div onClick={() => setCurrent("todo")}>
                <SideBarIcon
                    icon={
                        <FaCalendarCheck
                            size="28"
                            color={current === "todo" ? "white" : "black"}
                        />}
                    text="#todo"
                    onClick={() => setCurrent("todo")}
                />
            </div>
            <div onClick={() => setCurrent("progress")}>
                <SideBarIcon
                    icon={
                        <FaChartPie
                            size="28"
                            color={current === "progress" ? "white" : "black"}
                        />}
                    text="#progress"
                />
            </div>

            <div className='flex-grow'>

            </div>

            <div onClick={() => setCurrent("settings")}>
                <SideBarIcon
                    icon={
                        <FaCog
                            size="28"
                            color={current === "settings" ? "white" : "black"}
                        />}
                    text="#settings"
                />
            </div>
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip ♫' }) => {
    return (
        <div className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto group">
            {icon}
            <div className="scale-0 absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold group-hover:scale-100">
                {text}
            </div>
        </div>
    );
};

export default SideBar;