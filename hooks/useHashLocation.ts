import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Returns the current URL hash ("" for none, otherwise e.g. "#about").
// Nav items compare their link against it, so entries can be added, removed
// or hidden without keeping an index mapping in sync.
const useHashLocation = (): string => {
  const [hash, setHash] = useState("");
  const params = useParams();
  useEffect(() => {
    // window.location.hash is only readable on the client, so sync it after mount.
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [params]);
  return hash;
};

export default useHashLocation;
