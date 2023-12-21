import { ConnectButton} from "./components";

function Header() {

    return (
        <header className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Logo</a>                
            </div>
            <div className="navbar-center hidden lg:flex">
               
            </div>
            <div className="navbar-end">
            <ConnectButton theme="gradient-cyan-magenta-bg" />
            </div>
        </header>
    )
}

export default Header