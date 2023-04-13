export const status = { wokeUpAt: Date.now() };

let sleepTimeout: NodeJS.Timeout;

export const keepAwake = () => {
  if (sleepTimeout) clearTimeout(sleepTimeout);
  sleepTimeout = setTimeout(() => process.exit(0), 10_000);
};
