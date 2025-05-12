import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import { handleClickRectangle } from "../handlers/handleClickRectangle.ts";

type Props = {
  ability: number;
  setAbility: (ability: number) => void;
};

export const AbilityButton = ({ ability, setAbility }: Props) => {
  const onClick = handleClickRectangle({
    TopLeft: () => setAbility(Math.min(99, ability + 10)),
    TopRight: () => setAbility(Math.min(99, ability + 1)),
    BottomLeft: () => setAbility(Math.max(0, ability - 10)),
    BottomRight: () => setAbility(Math.max(0, ability - 1)),
  });
  return (
    <Box
      sx={{
        backgroundColor: blue[500],
        color: "white",
        height: "100%",
        width: "100%",
        fontSize: "96px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        cursor: "pointer",
        userSelect: "none",
        touchAction: "none",
      }}
      onClick={onClick}
    >
      {ability}
    </Box>
  );
};
