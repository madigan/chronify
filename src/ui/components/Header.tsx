import { Settings } from "lucide-react";
import Auth from "./Auth";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Chronify
        </a>
      </div>
      <div className="flex-none p-2">
        <Auth />
      </div>
      <div className="flex-none p-2">
        <Settings />
      </div>
    </header>
  );
}
