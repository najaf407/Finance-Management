import React from "react";
import Logo from "../ui/Logo";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ArrowLeftRight, Tags, UserRound, Settings } from "lucide-react";

// Desktop sidebar items (all 5). "divider" adds a line above that item.
const desktopItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", path: "/transactions", icon: ArrowLeftRight },
  { name: "Categories", path: "/categories", icon: Tags },
  { name: "Profile", path: "/profile", icon: UserRound, divider: true },
  { name: "Settings", path: "/settings", icon: Settings },
];

// Mobile bottom bar items (no Settings)
const mobileItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", path: "/transactions", icon: ArrowLeftRight },
  { name: "Categories", path: "/categories", icon: Tags },
  { name: "Profile", path: "/profile", icon: UserRound },
];

// Link styles
const desktopLinkClass = ({ isActive }) =>
  `flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
    isActive
      ? "bg-primary-soft text-primary"
      : "text-text-muted hover:bg-primary-soft hover:text-primary"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2.5 transition-colors ${
    isActive
      ? "bg-primary-soft text-primary"
      : "text-text-muted hover:bg-primary-soft hover:text-primary"
  }`;

function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-64 flex-col border-r border-border bg-surface p-5">
        <div className="mb-10">
          <Logo />
        </div>

        <nav className="flex flex-col gap-2">
          {desktopItems.map(({ name, path, icon: Icon, divider }) => (
            <React.Fragment key={path}>
              {divider && <div className="my-4 border-t border-border" />}

              <NavLink to={path} className={desktopLinkClass}>
                <Icon size={22} strokeWidth={1.9} />
                {name}
              </NavLink>
            </React.Fragment>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-5 text-sm text-text-muted">
          Personal Finance Manager
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-border bg-surface px-1 pb-safe md:hidden">
        {mobileItems.map(({ name, path, icon: Icon }) => (
          <NavLink key={path} to={path} className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center justify-center rounded-xl p-1.5 transition-colors ${
                    isActive ? " text-primary" : ""
                  }`}
                >
                  <Icon size={21} strokeWidth={2} />
                </span>
                <span
                  className={`whitespace-nowrap text-[10px] ${
                    isActive ? "font-bold" : "font-medium"
                  }`}
                >
                  {name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;