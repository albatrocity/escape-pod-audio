import { AUDIO_PLAY_FILE } from "./actionTypes";

export default function audioPlayFile(payload) {
  return {
    type: AUDIO_PLAY_FILE,
    payload
  };
}
