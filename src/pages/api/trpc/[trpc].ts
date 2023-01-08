import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const appRouter = t.router({
  greeting: t.procedure
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        text: `hello ${input?.name ?? "world"}`,
      };
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
