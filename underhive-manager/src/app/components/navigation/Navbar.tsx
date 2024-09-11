"use client";
import Link from "next/link";
import { AppShell, Skeleton } from "@mantine/core";

export function Navbar() {
  return (
    <AppShell.Navbar p="md">
      <Link href="/gangs">Gang managment</Link>
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
    </AppShell.Navbar>
  );
}
