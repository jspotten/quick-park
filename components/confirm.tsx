'use client'

import { v4 as uuidv4 } from 'uuid';
import * as React from "react";
import { Dispatch, useState, SetStateAction } from 'react';
import { Button, CardActionArea, CardActions } from "@mui/material";
import useSWR from 'swr';

export default function Confirm(props: any) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            
            <div className="shrink-0 mr-4 flex-col">
              {/* Logo */}
              <img className="rounded-full mt-8 mx-auto" src="/images/testimonial-02.jpg" alt=""></img>
              <h2 className="h2 mt-2 mb-4 mx-auto">
                Daypass Purchased!
              </h2>
            </div>
            <Button size="large" color="warning" onClick={props.goBack}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </section>

    
  );
}
