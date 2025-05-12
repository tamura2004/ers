import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Classes } from "../assets/Classes.ts";
import type { Clazz } from "../types/Character.ts";

type Props = {
  level: number;
};

export const ClassSelector = ({ level }: Props) => {
  const [className, setClassName] = useState<string>("");
  const classNames = Classes.map((clazz: Clazz) => clazz["素性"]);
  return (
    <Box
      sx={{
        m:2,
        display: "flex",
        maxWidth: "700px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControl>
        <InputLabel id="class-select-label">Class</InputLabel>
        <Select
          variant={"outlined"}
          labelId="class-select-label"
          id="class-select"
          value={className}
          label="Class"
          onChange={(event) => setClassName(event.target.value)}
        >
          {classNames.map((className: string) => (
            <MenuItem key={className} value={className}>
              {className}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box fontSize={24} >{`${level}レベル`}</Box>
    </Box>
  );
};
