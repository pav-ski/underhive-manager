"use client";
import { AppShell, Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import Link from "next/link";

//NEXT ADD THEME
export function Header() {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Link href="/">Home</Link>
      </Group>
      <Group h="100%" px="md">
        <ActionIcon variant="outline" size="lg" aria-label="Settings">
          <IconAdjustments
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
}
