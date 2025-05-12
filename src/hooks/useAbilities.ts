import { useState } from "react";

export const useAbilities = () => {
  const [abilities, setAbilities] = useState([10, 10, 10, 10, 10, 10, 10, 10]);
  const setAbility = (index: number) => (newAbility: number) => {
    setAbilities((prev) =>
      prev.map((ability, i) => (i === index ? newAbility : ability)),
    );
  };
  const level = abilities.reduce((acc, ability) => acc + ability, 0) - 80 + 1;
  return { abilities, setAbility, level };
};
