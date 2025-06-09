import { ReactNode } from "react";

export interface DropdownMenuProps {
  button: ReactNode;
  children?: ReactNode;
}

export default function DropdownMenu(props: DropdownMenuProps) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        {props.button}
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mt-2 shadow-sm"
        onClick={unfocus}
      >
        {props.children}
      </div>
    </div>
  );
}

function unfocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
