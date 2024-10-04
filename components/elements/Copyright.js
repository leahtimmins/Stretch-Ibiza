'use client';
import { useSettings } from '@/components/context/Settings';

const Copyright = () => {
    const currentYear = new Date().getFullYear();
    const settings = useSettings();

    return (
        <span className="mr-6 font-glacialRegular">&copy; {settings.websiteName} { currentYear }</span>
    )
}

export default Copyright;