"use client";
import { useIsClient } from "@/helpers/hooks/isClient";
import {
  useMantineColorScheme,
  ActionIcon,
  useComputedColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const LIGHT = "light";
const DARK = "dark";

export function ThemeButton() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  //NEED TO CHECK OTHER APPROACH
  const isClient = useIsClient();
  if (!isClient) return null;

  return computedColorScheme === LIGHT || !colorScheme ? (
    <ActionIcon
      variant="outline"
      size="lg"
      aria-label="dark mode"
      onClick={() => setColorScheme(DARK)}
    >
      <IconMoon style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  ) : (
    <ActionIcon
      variant="outline"
      size="lg"
      aria-label="dark mode"
      onClick={() => setColorScheme(LIGHT)}
    >
      <IconSun style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  );
}
