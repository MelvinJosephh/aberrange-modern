import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { prompt: "consent", access_type: "offline" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect called with:", { url, baseUrl });
      // Check if url is a callback from Google (contains code)
      if (url.includes("callback/google")) {
        const fullUrl = new URL(url, baseUrl); // Use baseUrl to make it absolute
        const code = fullUrl.searchParams.get("code");
        if (code) {
          return `${baseUrl}/login?code=${code}`;
        }
      }
      // Otherwise, return the original url (e.g., /dashboard)
      return url.startsWith("http") ? url : `${baseUrl}${url}`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };