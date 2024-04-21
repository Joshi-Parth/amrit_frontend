'use client';
import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import { Select, Option } from "@material-tailwind/react";



// import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Testimonials() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const router = useRouter();


  const handleMenuItemClick = async (problem: any) => {
      setSelectedProblem(problem); // Set selected problem
      router.push(`/task?problem=${encodeURIComponent(problem)}`); 
      // const requestBody = {
      //   message: problem  // Correctly format the body of the POST request
      // };
      // try {
      //     const response = await fetch('http://127.0.0.1:8000/send-prompt-to-gemini', {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify(requestBody)
      //     });
      //     const data = await response.json();
      //     console.log(data);
      //     const taskDetail = encodeURIComponent(JSON.stringify(data));  // Encode task details
      //     router.push(`/task?taskDetail=${taskDetail}`);  // Navigate with the task details as a query
      // } catch (error) {
      //     console.error('Failed to fetch task details:', error);
      // }
  };
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="min-w-18 mx-auto px-4 sm:px-6">
        {/* <div className=""> */}
          <div className="flex flex-col justify-center items-center">
              <Menu placement="bottom">
                  <MenuHandler>
                    <Button size="lg">{"Unlock Wellness Tasks"}</Button>
                  </MenuHandler>
                  <MenuList className="max-h-32">
                    <MenuItem onClick={() => handleMenuItemClick('Alcohol Addiction')}>Alcohol Addiction</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Tobacco Addiction')}>Tobacco Addiction</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Drugs Addiction')}>Drugs Addiction</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Caffeine Addiction')}>Caffeine Addiction</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Sugar and Food Addictions')}>Sugar and Food Addictions</MenuItem>
                    <hr className="my-2" />
                    <MenuItem onClick={() => handleMenuItemClick('Depression')}>Depression</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Stress')}>Stress</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Anxiety')}>Anxiety</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Panic Attack')}>Panic Attack</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('Sleep Disorder')}>Sleep Disorder</MenuItem>
                  </MenuList>
                  {/* <MenuList className="max-h-32">
                    <MenuItem onClick={() => setSelectedProblem('Alcohol Addiction')}>Alcohol Addiction</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Tobacco Addiction')}>Tobacco Addiction</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Drugs Addiction')}>Drugs Addiction</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Caffeine Addiction')}>Caffeine Addiction</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Sugar and Food Addictions')}>Sugar and Food Addictions</MenuItem>
                    <hr className="my-2" />
                    <MenuItem onClick={() => setSelectedProblem('Depression')}>Depression</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Stress')}>Stress</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Anxiety')}>Anxiety</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Panic Attack')}>Panic Attack</MenuItem>
                    <MenuItem onClick={() => setSelectedProblem('Sleep Disorder')}>Sleep Disorder</MenuItem>
                  </MenuList> */}
              </Menu>
              <a href="https://deltav.agentverse.ai/chat?objective=i%20am%20depressed&serviceGroup=c0ad772c-c14b-4279-b9c3-ce568fc60f95&personality=next-gen" className="m-10" >
                <Button size="lg">{"Talk to an expert AI AGENT"}</Button>
              </a>
          </div>
        {/* </div> */}
      </div>
    </section>
  )
}