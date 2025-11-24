import Logo from "./Logo";
import NavItem from "./NavItem";
import BoardSVG from "./sidebarSVG/BoardSVG";
import Calendar from "./sidebarSVG/Calendar";
import DashboardSVG from "./sidebarSVG/DashboardSVG";
import SettingSVG from "./sidebarSVG/SettingSVG";
import WorkshopSVG from "./sidebarSVG/WorkshopSVG";
import User from "./User";

const Sidebar = () => {
    return (
        <aside
            className="w-full lg:w-64 bg-white border-gray-200 flex flex-col border-b lg:border-b-0 lg:border-r"
        >
            <div className="px-4 py-6 sm:px-6">
                <Logo />

                <nav className="space-y-1">
                    <NavItem isActive={false}>
                        <DashboardSVG />
                        <span>Dashboard</span>
                    </NavItem>
                    <NavItem isActive={false}>
                        <WorkshopSVG />
                        <span>Workspace</span>
                    </NavItem>
                    <NavItem isActive={true}>
                        <BoardSVG />
                        <span>Board</span>
                    </NavItem>
                    <NavItem isActive={false}>
                        <Calendar />
                        <span>Calendar</span>
                    </NavItem>
                    <NavItem isActive={false}>
                        <SettingSVG />
                        <span>Settings</span>
                    </NavItem>
                </nav>
            </div>

            <User />
        </aside>
    );
};

export default Sidebar;