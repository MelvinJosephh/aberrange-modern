'use client';



import React from "react";
import Link from "next/link";

export default function HireTalentHome() {
  return (
    <div>
      <h1>Hire Talent</h1>
      <p>Welcome to the hiring process. Choose a step to get started:</p>
      <Link href="/hire-talent/step1">Go to Step 1</Link>
    </div>
  );
}
