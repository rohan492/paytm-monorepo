"use client"
// import { RecoilRoot } from "recoil"
import { Provider } from "jotai"

export const Providers = (
    { children }: { children: React.ReactNode }
) => {
    return <Provider>
        {children}
    </Provider>
}

{/* <RecoilRoot>
    {children}
</RecoilRoot> */}