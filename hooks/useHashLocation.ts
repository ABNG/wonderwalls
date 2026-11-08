import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHashLocation = (): number => {
  const [selected, setSelected] = useState(0);
  const params = useParams();
  useEffect(() => {
    // window.location.hash is only readable on the client, so sync it after mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    switch (window.location.hash) {
      case "#about":
        setSelected(1);
        break;
      case "#service":
        setSelected(2);
        break;
      case "#work":
        setSelected(3);
        break;
      case "#client":
        setSelected(4);
        break;
      case "#contact":
        setSelected(5);
        break;
      default:
        setSelected(0);
        break;
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [params]);
  return selected;
};

export default useHashLocation;
