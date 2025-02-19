type Callback = (msg: string) => void;

let handler: Callback | null = null;

export function startMockSocket(cb: Callback) {
  handler = cb;
}

export function stopMockSocket() {
  handler = null;
}

export function sendSocketMessage(msg: string) {
  if (handler) {
    handler(msg);
  }
}