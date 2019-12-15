export const SET_SELECTED_MEDIA = "SET_SELECTED_MEDIA";

export const setSelectedMedia = media  => {
  return { type: SET_SELECTED_MEDIA, payload: media };
};
