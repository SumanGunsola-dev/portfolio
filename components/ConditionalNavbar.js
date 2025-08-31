'use client'
import { usePathname } from 'next/navigation'
import Navbar from "@/components/navbar";
import NavButton from "@/components/NavButton";
export default function ConditionalNavbar() {
    const pathname = usePathname();
    const pagesWithoutNavbar = ['/contact'];
    if (pagesWithoutNavbar.includes(pathname)) {
        return null;
    }
    return (
        <>
            <NavButton />
            <Navbar />
        </>
    )
}