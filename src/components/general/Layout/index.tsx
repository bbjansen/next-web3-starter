import cn from "classnames";

import Footer from "../Footer";
import Header from "../Header";

interface Props {
    mainClassName?: string;
    children: React.ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
  }

  function Layout({ mainClassName, children, showHeader = true, showFooter = true }: Props) {
    return (
      <div className="grid min-h-[100dvh] grid-cols-1 grid-rows-layout">
        {showHeader && <Header />}
        <main className={cn("w-[90rem] max-w-full justify-self-center", mainClassName)}>{children}</main>
        {showFooter && <Footer />}
      </div>
    );
  }
  
  Layout.defaultProps = {
    mainClassName: "",
    showHeader: true,
    showFooter: true,
  };
  
  export default Layout;
  