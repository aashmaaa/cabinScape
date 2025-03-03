import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

const StyledHeaderMenu = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const list = styled.li`
  list-style-type: none;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <list>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </list>
      <list>
        <Logout />
      </list>
      <list>
        <Logout />
      </list>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
