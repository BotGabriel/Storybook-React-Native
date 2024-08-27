import React, { ReactNode } from 'react';

// Define the props type
interface AppContainerProps {
  children: ReactNode;
}

// Define the functional component
const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <>{children}</>;
};

// Set displayName for development environment
if (process.env.NODE_ENV !== 'production') {
  AppContainer.displayName = 'AppContainer';
}

// Export the component
export default AppContainer;

