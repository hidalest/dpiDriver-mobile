import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  authToken: string;
  dataUser: {
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: string;
    transporter_id: string;
    date_joined: string;
    driver_license_expiry: string;
  };
  dashboard: {
    report: {
      week_total_score: string;
    };
    driver: {
      id: number;
      is_superuser: boolean;
      first_name: string;
      last_name: string;
      is_staff: boolean;
      date_joined: string;
      personal_email: string;
      email: string;
      role: number;
      role_name: string;
      transporter_id: string;
      mobile_number: string;
      whatsapp_mobile_number: string;
      driver_license: string;
      driver_license_expiry: string;
      date_of_birth: string;
      training_delivered: boolean;
      autocreated: boolean;
    };
    quadrant_name: string;
    text_message: string;
    dcr: number;
    rescue: number | null;
    dsb: number | null;
    ontime_attendance: number | null;
    launchpad_support: number | null;
    morning_checklist: number | null;
    dar: number | null;
    pod: number | null;
    cc: number | null;
    sc: number | null;
    created: Date;
  };
}

interface AuthContextType {
  userData: UserData | null;
  // setUserData: (userData: UserData | null) => void;
  setUserData: (
    userData: UserData | ((prevState: UserData | null) => UserData | null)
  ) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
