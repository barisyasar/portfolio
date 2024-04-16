import Indicator from "./Indicator";
import NavigationList from "./NavigationList";

function Header() {
  return (
    <header className="container max-w-screen-md my-2 md:my-4">
      <nav className="card--glass h-9 relative">
        <NavigationList />
        <Indicator />
      </nav>
    </header>
  );
}

export default Header;
