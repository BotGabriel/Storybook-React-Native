// Define the type for the BackHandler object
interface BackHandler {
  exitApp: () => void;
  addEventListener: () => { remove: () => void };
  removeEventListener: () => void;
}

// Implement the BackHandler object
const BackHandler: BackHandler = {
  exitApp: () => {},
  addEventListener: () => ({ remove: () => {} }),
  removeEventListener: () => {},
};

// Export the BackHandler object as default
export default BackHandler;
