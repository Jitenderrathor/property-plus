import connectDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoke on successfull sign in
    async signIn({ profile }) {
      if (!profile) return false;
      // 1.Connect to the database
      await connectDB();
      // 2.Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3.if not, create user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(/\s/g, "").toLowerCase(), // Removes spaces
          image: profile.picture,
        });
      }
      // 4.Return true to allow sign in
      return true;
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      //1.Get User from database
      const user = await User.findOne({ email: session.user.email });

      //2.Assign user id from the session
      if (user) {
        session.user.id = user._id.toString();
      }

      // Return session
      return session;
    },
  },
};
