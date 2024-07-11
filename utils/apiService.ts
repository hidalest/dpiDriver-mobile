// src/services/apiService.ts

import {
  API_CODE,
  AUTH_TOKEN_URL,
  CURRENT_USER_URL,
  DASHBOARD_URL,
} from '@/config/apiConfig';

export const getAuthToken = async (email: string, password: string) => {
  const response = await fetch(AUTH_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const getCurrentUser = async (token: string) => {
  const response = await fetch(CURRENT_USER_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const getDashboardData = async (
  token: string,
  currentYear: number,
  userTransportId: string,
  weekNumber: number
) => {
  const response = await fetch(
    `${DASHBOARD_URL}?week=${weekNumber}&year=${currentYear}&search=${userTransportId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
