type LogArgs = unknown[];

export const logger = {
  log: (message: string, ...args: LogArgs): void => {
    console.log(`[LOG] [${new Date().toISOString()}] ${message}`, ...args);
  },
  warn: (message: string, ...args: LogArgs): void => {
    console.warn(`[WARN] [${new Date().toISOString()}] ${message}`, ...args);
  },
  error: (message: string, ...args: LogArgs): void => {
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, ...args);
  },
} as const;

export default logger;
