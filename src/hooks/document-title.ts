import { useEffect } from 'react';
import { APP_NAME } from '../constants/constants';


export function useDocumentTitle(title: string) {
  useEffect(() => {
    const initialTitle = document.title;
    return () => {
      document.title = initialTitle;
    };
  }, []);

  useEffect(() => {
    document.title = `${APP_NAME}: ${title}`;
  }, [title]);
}
