import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const List = styled.li`
  list-style-type: none;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <List>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </List>
      <List>
        <Logout />
      </List>
      <List>
        <DarkModeToggle />
      </List>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
