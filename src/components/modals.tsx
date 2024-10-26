"use client";

import { AuthModal } from "@/feature/auth/components/auth-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
        <>
          <AuthModal />
        </>
    )
}