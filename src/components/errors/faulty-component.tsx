import { useState } from 'react';

const FaultyComponent = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error('Something went wrong in FaultyComponent!');
  }

  return (
    <div>
      <h3>This component might break</h3>
      <button onClick={() => setHasError(true)}>Trigger Error</button>
    </div>
  );
};

export default FaultyComponent;
