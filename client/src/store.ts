import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

// (optional, define types for TypeScript)
type Todo = { completed: boolean, title: string };

// Create your SyncedStore store
export const store = syncedStore({ todos: [] as Todo[], fragment: "xml" });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsValue(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc as any);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();
