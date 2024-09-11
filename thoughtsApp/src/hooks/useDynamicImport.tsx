import { useEffect, useState } from "react";

const useDynamicImport = (list: string[]) => {
  const [module, setModule] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadModules = async () => {
      try {
        const results = await Promise.all(
          list.map(async (item) => {
            const importedModule = await import(`../assets/${item}.svg`);
            return importedModule.default; 
          })
        );
        setModule(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    };

    loadModules();
  }, [list]);

  return { module, error };
};

export default useDynamicImport;
