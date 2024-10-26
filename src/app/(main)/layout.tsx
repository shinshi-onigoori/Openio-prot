import { MainNavbar } from "./_components/main-navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <div className="h-full">
            <MainNavbar />
            {children}
        </div>
    )
}

export default MainLayout;