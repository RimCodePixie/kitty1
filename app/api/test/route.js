import { NextResponse } from "next/server"

export function POST(req, res){

    console.log('api touch hui')

    return NextResponse.json({a:true});

}