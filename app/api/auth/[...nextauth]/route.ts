import NextAuth from "next-auth";
import authConf from "../../../../config/auth";

const handler = NextAuth({
    ...authConf,
    pages: {
        signIn: '/auth/sign-in',  // Select the account on the supplier login page and click the Cancel button to will navigate to page
        error: '/auth/error',     // Custom auth error page path
    }
});

export {handler as GET, handler as POST};
