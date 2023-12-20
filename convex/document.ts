import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createDocument = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("document")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("document", {
      title: args.title,
      parenDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false,
    });
    return document;
  },
});
