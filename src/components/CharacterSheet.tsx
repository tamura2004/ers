import { useAbilities } from "../hooks/useAbilities.ts";
import { ClassSelector } from "./ClassSelector.tsx";
import { AbilityPanel } from "./AbilityPanel.tsx";

export const CharacterSheet = () => {
  const { abilities, setAbility, level } = useAbilities();

  return (
    <>
      <ClassSelector level={level} />
      <AbilityPanel abilities={abilities} setAbility={setAbility} />
    </>
  );
};
