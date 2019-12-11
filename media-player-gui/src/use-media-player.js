import { useState } from "react";

export const useMediaPlayer = () => {
  const [selected, setSelected] = useState(false);

  const handleSelectedChange = media => setSelected(media);
  return {
    selected,
    onSelectedChange: handleSelectedChange
  }
};

