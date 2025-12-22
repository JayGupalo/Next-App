"use client";

import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export const URLBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isReloading, setIsReloading] = useState(false);

  const url = new URL(pathname, "http://foo.com");
  url.search = searchParams.toString();

};

export default URLBar;
