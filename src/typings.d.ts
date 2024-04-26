/*
 * @Author: Jovy
 * @Date: 2023-02-09 14:25:37
 * @LastEditTime: 2023-02-18 15:09:38
 * @LastEditors: Jovy
 * @Description: TypeScript全局声明
 * @FilePath: \doba-static-sam\src\typings.d.ts
 * ==雁过留声，码过留名。==
 */

// interface Window {
//   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...any: any) => any
// }

// declare const $: JQuery;
// declare module '@/store';


declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';

// google analytics interface
type GAFieldsObject = {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
};

type Window = {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
  reloadAuthorized: () => void;
};

declare let ga: () => void;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;


declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module 'js-cookie';
declare module '@/store';
declare module "@/locales";
declare const isMOCK: boolean;
declare module 'use-deep-compare-effect';
