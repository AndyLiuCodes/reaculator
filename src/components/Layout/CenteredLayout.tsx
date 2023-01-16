import "../../assets/css/gridsize.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return <div className="centered-grid-layout">{children}</div>;
}

export default MainLayout;
