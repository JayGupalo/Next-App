"use client";

import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export const URLBar = () => {
  let router = useRouter();
  let pathname = usePathname();
  let searchParams = useSearchParams();
  let [isReloading, setIsReloading] = useState(false);

  let url = new URL(pathname, "http://foo.com");
  url.search = searchParams.toString();

  console.info(url.search);
};

export default URLBar;
