import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {AuthOptions} from "next-auth";

const authConfig: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
};

export default authConfig;
