"use client"
// import { RecoilRoot } from "recoil"
import { Provider } from "jotai"
import { SessionProvider } from "next-auth/react";

export const Providers = (
    { children }: { children: React.ReactNode }
) => {
    return <Provider>
        <SessionProvider>
            {children}
        </SessionProvider>
    </Provider>
}

{/* <RecoilRoot>
    {children}
</RecoilRoot> */}