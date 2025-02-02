"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { Session } from "next-auth";

type ProvidersProps = PropsWithChildren<{
  session: Session | null;
}>;

const Providers = (props: ProvidersProps) => {
  return (
    <NextAuthSessionProvider>
      <ThemeProvider attribute="class">{props.children}</ThemeProvider>
    </NextAuthSessionProvider>
  );
};

export default Providers;
