import React, { createContext, useContext, useState, ReactNode } from 'react';

type BreadcrumbItem = {
  segment: string;
  title: string;
};

type BreadcrumbContextType = {
  breadcrumbData: BreadcrumbItem[];
  setBreadcrumbData: (data: BreadcrumbItem[]) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbData, setBreadcrumbData] = useState<BreadcrumbItem[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbData, setBreadcrumbData }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = (): BreadcrumbContextType => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

