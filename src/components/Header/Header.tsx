import NavigationList from "./NavigationList";

function Header() {
  return (
    <header className="fixed left-1/2 top-2 md:top-4 container max-w-screen-md transform -translate-x-1/2 z-10">
      <nav className="card--glass h-9">
        <NavigationList />
      </nav>
    </header>
  );
}

export default Header;
