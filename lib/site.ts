export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/phone-gpt-website';
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parth-verma7.github.io/phone-gpt-website').replace(/\/+$/, '');
export const APP_REPOSITORY = 'https://github.com/parth-verma7/phone-gpt';
export const CONTACT_EMAIL = 'tensor0712@gmail.com';
export const APP_VERSION = '0.5.11';
export const ANDROID_RELEASE_URL = `https://github.com/parth-verma7/phone-gpt-website/releases/tag/android-v${APP_VERSION}`;
export const ANDROID_APK_URL = `https://github.com/parth-verma7/phone-gpt-website/releases/download/android-v${APP_VERSION}/PhoneGPT-v${APP_VERSION}-standalone.apk`;
export const asset = (path: string) => `${BASE_PATH}${path}`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/parth-verma-226007228/';

export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/mljjawvn';
