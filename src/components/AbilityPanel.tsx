import { Box } from "@mui/material";
import { AbilityButton } from "./AbilityButton.tsx";

type Props = {
  abilities: number[];
  setAbility: (index: number) => (value: number) => void;
};

export const AbilityPanel = ({ abilities, setAbility }: Props) => {
  return (
    <Box
      sx={{
        m: 2,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "200px",
        maxWidth: "700px",
        columnGap: 2,
        rowGap: 2,
      }}
    >
      {abilities.map((ability, index) => (
        <AbilityButton
          key={index}
          ability={ability}
          setAbility={setAbility(index)}
        />
      ))}
    </Box>
  );
};
