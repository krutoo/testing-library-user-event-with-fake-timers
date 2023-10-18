import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="counter" onClick={() => setCount((n) => n + 1)}>
      Count: {count}
    </div>
  );
}
