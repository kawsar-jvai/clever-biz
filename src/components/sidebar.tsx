import { IconHome, IconLogout } from "./icons";

type SidebarProps = {
  onToggleSidebar: () => void;
  isOpen: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({
  onToggleSidebar: toggleSidebar,
  isOpen: isDrawerOpen,
}) => {
  const menuItems = [
    { title: "Dashboard", icon: <IconHome />, path: "/" },
    {
      title: "Reservations",
      icon: <IconHome />,
      path: "/reservations",
    },
    { title: "Order List", icon: <IconHome />, path: "/orders" },
    { title: "Messages", icon: <IconHome />, path: "/messages" },
  ];

  const SidebarContent = () => (
    <div className="bg-sidebar shadow-lg shadow-black/70 flex flex-col h-full justify-between py-6">
      <div>
        <div className="px-6 mb-8">
          <h1 className="text-xl font-bold text-white">
            Cleverbiz<span className="text-primary-text">™</span>
          </h1>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-4 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="px-6">
        <button className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
          <IconLogout className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Hamburger menu button - only visible on smaller screens */}
      {!isDrawerOpen ? (
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-30 bg-gray-800 p-2 rounded-md text-white"
        >
          <IconHome />
        </button>
      ) : null}

      {/* Mobile sidebar with overlay */}
      <div
        className={`fixed inset-0 bg-black/20 bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white z-20 w-64 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:z-10`}
      >
        <SidebarContent />
      </div>
    </div>
  );
};
