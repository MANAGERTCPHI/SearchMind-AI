"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    secondary:
      "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    success:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    warning:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    destructive:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
