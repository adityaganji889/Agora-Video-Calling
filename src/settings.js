import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "f3c323f02c1d45ea8d47e930aa9c6920";
const token = "007eJxTYNDf3nDiZIRl6KmWho0llh/6LG+vSnu5VPHdD5eeOEW/ix8UGNKMk42NjNMMjJINU0xMUxMtUkzMUy2NDRITLZPNLI0MtIIDk5cFMjJcmqLIwAiFID4LQ25iZh4DAwDcGSDu";
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
