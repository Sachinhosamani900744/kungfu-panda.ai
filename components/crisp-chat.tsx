"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8c3c0c21-6c24-43f1-9a81-f717fef86773");
  }, []);

  return null;
};