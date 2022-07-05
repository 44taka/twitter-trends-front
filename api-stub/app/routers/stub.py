from fastapi import APIRouter, status, HTTPException, Request

import helper


router = APIRouter(prefix="/stub")


@router.get("/sample")
async def get_sample(request: Request):
    return helper.get_json("sample.json")


@router.post("/sample")
async def post_sample(request: Request):
    return helper.get_json("sample.json")


@router.put("/sample")
async def put_sample(request: Request):
    return helper.get_json("sample.json")


@router.delete("/sample")
async def delete_sample(request: Request):
    return helper.get_json("sample.json")


@router.get("/twitter/trends")
async def get_twitter_trends(request: Request):
    return helper.get_json("twitter_trends_kai.json")

@router.get("/twitter/trends2")
async def get_twitter_trends(request: Request):
    return helper.get_json("twitter_trends_kai2.json")
