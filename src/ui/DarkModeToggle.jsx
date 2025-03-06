import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import StyledButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <StyledButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </StyledButtonIcon>
  );
}

export default DarkModeToggle;
