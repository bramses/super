import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "@super/env.mjs";
import { createTRPCContext } from "@super/server/api/trpc";
import { appRouter } from "@super/server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});