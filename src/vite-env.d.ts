/// <reference types="vite/client" />

declare module 'react-dom' {
    interface ReactDOM {
      createRoot(container: Element | Document | DocumentFragment | null, options?: RootOptions): ReactDOMRoot;
    }
  
    const createRoot: ReactDOM['createRoot'];
  }