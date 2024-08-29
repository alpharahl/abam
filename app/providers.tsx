'use client'
import {StorageProvider} from "@/hooks/Storage";

export const Providers = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StorageProvider>
      {children}
    </StorageProvider>
  )
}