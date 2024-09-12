"use client";
import { AppShell, Container } from "@mantine/core";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <AppShell.Main>
      <Container p="md">{children}</Container>
    </AppShell.Main>
  );
}
