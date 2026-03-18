import { cn } from "@/lib/utils";

export function PageMain({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <main className={cn("relative flex min-h-screen w-full flex-col", className)}>{children}</main>
  );
}
