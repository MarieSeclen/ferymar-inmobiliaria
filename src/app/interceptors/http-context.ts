import { HttpContextToken } from '@angular/common/http';

export interface HttpRequestConfig {
  skipErrorAlert?: boolean;
  skipLoading?: boolean;
  responseType?: 'blob' | 'json' | 'text';
}

export const HTTP_CONFIG = new HttpContextToken<HttpRequestConfig>(() => ({
  skipErrorAlert: false,
  skipLoading: false
})); 