import { createContext, useContext, useMemo, useState, useRef, useEffect } from "react";

const commonContext = createContext(null);

const CommonContextData = ({ children }) => {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const sidebarRef = useRef(null);

    const sidebarToggle = () => {
        setIsOpenSidebar(prev => !prev);
    };

    const bodySidebarToggle = () => {
        setIsOpenSidebar(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                bodySidebarToggle();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // ==================== CONTEXT VALUE ==================

    const value = useMemo(() => ({
        sidebarToggle, isOpenSidebar, bodySidebarToggle, sidebarRef
    }), [isOpenSidebar]);


    return (
        <commonContext.Provider value={value}>
            {children}
        </commonContext.Provider>
    )
}

// ==================== CUSTOM HOOK ==================

const useCommonData = () => {
    const context = useContext(commonContext)
    if (!context) {
        throw new Error("useProduct must be used within ProductContextData");
    }
    return context;
}

export { CommonContextData, useCommonData }