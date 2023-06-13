import { useMode } from '@providers/mode';

export const Test = () => {
  const { mode } = useMode();

  return (
    <div>
      <h1>{mode}</h1>
    </div>
  );
};
