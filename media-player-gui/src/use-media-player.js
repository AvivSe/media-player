import { useState } from "react";

export const useMediaPlayer = () => {
  const [selected, setSelected] = useState(null);

  const handleSelectedChange = media => setSelected(media);
  return {
    selected,
    onSelectedChange: handleSelectedChange
  }
};

