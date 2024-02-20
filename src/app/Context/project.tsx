'use client'

import { useContext, createContext, useState, Dispatch, SetStateAction } from "react";

type DataType = {
    projectTitle: string;
    banner: any;
    resume: string;
    tecnologies: string;
    url: string;
}

interface ContextProps {
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    data: [],
    setData: (): DataType[] => []
});

export const GlobalContextProvider = ({ children }) => {
    const [data, setData] = useState<DataType[]>([]);
    return (
        <GlobalContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)