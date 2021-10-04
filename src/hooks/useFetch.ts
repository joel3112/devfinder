import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { UnknownObject } from '../global';

export type UseFetch = {
  data: UnknownObject | null,
  loading: boolean,
  error: string | UnknownObject | null,
};

export type UseFetchHook = (url: string, delay?: number) => UseFetch;

export const useFetch: UseFetchHook = (url: string, delay: number = 500) => {
  const isMounted: MutableRefObject<boolean> = useRef(true);
  const [state, setState] = useState<UseFetch>({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setTimeout(() => {
            setState({
              loading: false,
              error: null,
              data,
            });
          }, delay);
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [url, delay]);

  return state;
};
