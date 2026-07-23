import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        return NextResponse.json({
            message:"This website to show my friend how hackers get credentials.",
            success:true,
            status_code:
            200
        },
    {
        status:200
    })
    } catch (error) {
        return NextResponse.json({
            message:"Internal serveri issue!",
            error:(error as Error).message
        },{
            status:500
        })
    }
}