import { useSelector } from "react-redux"

export const getActiveTheme = () => {
  const activeTheme = useSelector((state) => state.theme.activeTheme);

  return activeTheme;
}
