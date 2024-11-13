import { useDataStore } from "@/stores";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const user = useDataStore((state) => state.user);

  const navigate = useNavigate();
  const handelLogOut = () => {
    sessionStorage.removeItem("name");

    navigate("/");
  };

  return (
    <Navbar>
      <NavbarContent as="div" justify="start" className="w-full">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex items-center">
              <Avatar src={user.avatar} size="md" name="Jane" />
              <div className="flex flex-col items-start ml-3 default whitespace-nowrap">
                <span className="font-semibold">Hello, {user.name || 'Name'}</span>
                <span className="text-xs">Welcome to togeher travel</span>
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="gap-2 h-14">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handelLogOut}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarBrand className="justify-end">
        <Image
            removeWrapper
            alt="together"
            className="z-0 object-cover w-32 h-full"
            src='../../logo.png'
          />
      </NavbarBrand>
    </Navbar>
  );
}
