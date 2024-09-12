"use client";
import { AppShell, Group } from "@mantine/core";
import Link from "next/link";

import { ThemeButton } from "./ThemeButton";

export function Header() {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Link href="/">Home</Link>
        <ThemeButton />
      </Group>
    </AppShell.Header>
  );
}
