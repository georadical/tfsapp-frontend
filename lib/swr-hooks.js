/**
 * SWR Hooks for Data Fetching
 *
 * This file provides reusable SWR hooks for fetching data from API endpoints
 * with automatic caching, revalidation, and error handling.
 */

import useSWR from 'swr';
import { API_ENDPOINTS, fetchFromAPI } from './api';

// Default fetcher function for SWR
const defaultFetcher = url => fetchFromAPI(url);

/**
 * Hook for fetching hero section data
 * @param {Object} options - SWR configuration options
 * @returns {Object} - Data, error, and loading state
 */
export function useHeroSection(options = {}) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    API_ENDPOINTS.HERO_SECTION,
    defaultFetcher,
    {
      revalidateOnFocus: false, // Don't revalidate when window regains focus
      ...options,
    }
  );

  return {
    heroData: data,
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Hook for fetching services data
 * @param {Object} options - SWR configuration options
 * @returns {Object} - Data, error, and loading state
 */
export function useServices(options = {}) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    API_ENDPOINTS.SERVICES,
    defaultFetcher,
    {
      revalidateOnFocus: false,
      ...options,
    }
  );

  return {
    services: data,
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Hook for fetching footer CTA data
 * @param {Object} options - SWR configuration options
 * @returns {Object} - Data, error, and loading state
 */
export function useFooterCTA(options = {}) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    API_ENDPOINTS.FOOTER_CTA,
    defaultFetcher,
    {
      revalidateOnFocus: false,
      ...options,
    }
  );

  return {
    ctaData: data,
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Hook for fetching legal section data
 * @param {Object} options - SWR configuration options
 * @returns {Object} - Data, error, and loading state
 */
export function useLegalSection(options = {}) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    API_ENDPOINTS.LEGAL_SECTION,
    defaultFetcher,
    {
      revalidateOnFocus: false,
      ...options,
    }
  );

  return {
    legalData: data,
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}
