'use client';

import React, { useState, useRef } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export default function redeem() {
    
    return (
        <div className="mx-auto max-w-4xl p-8 my-10">
            <div className="m-7">
                <h2 className="h4 my-4">Redeem</h2>
            </div>
            <div className="flex flex-row m-10">
                <div>
                    <Card className="w-96">
                        <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                        </CardHeader>
                        <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">
                            Apple Airpods
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                5000 points
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75"
                        >
                            Supercharge your ability to create advanced applications to deepen the foundations of the AI economy
                        </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Buy Now
                        </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-96">
                        <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                        </CardHeader>
                        <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">
                            Gemini Compute Credits
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                            $95.00
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75"
                        >
                            With plenty of talk and listen time, voice-activated Siri access, and
                            an available wireless charging case.
                        </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Add to Cart
                        </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}