import Navbar from './Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative ">
      <Navbar />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
