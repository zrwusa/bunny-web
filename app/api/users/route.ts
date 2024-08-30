import {getServerSession} from "next-auth";
import {NextResponse} from "next/server";
import authConf from "../../../config/auth";

export async function GET() {
    const session = await getServerSession(authConf);

    if (session) {
        return NextResponse.json(session, {status: 200});
    } else {
        return NextResponse.json({error: "xxx"}, {status: 401});
    }
}
