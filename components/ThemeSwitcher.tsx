"use client";

import { useTheme } from "next-themes";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
        <TabsList className="border dark:border-neutral-800 ">
            <TabsTrigger value="light" onClick={() => setTheme("light")}>
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            </TabsTrigger>
            <TabsTrigger value="system" onClick={() => setTheme("system")}>
                <MonitorIcon className="h-[1.2rem] w-[1.2rem]" />
            </TabsTrigger>
        </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
