import { FC, useEffect, useRef, useState } from "react";
import { Toast as IToast, toastPosition, ToastType } from "../../types/Toast";
import { getStyle, getStyles } from "../../utils/helper";
import Close from "../../../public/close.svg";
import Success from "../../icons/Success";
import Warning from "../../icons/Warning";
import Error from "../../icons/Error";
import Info from "../../icons/Info";

const getIcon = (type: ToastType, richColor: boolean = false) => {
  switch (type) {
    case "success":
      return <Success richColor={richColor} />;
    case "warning":
      return <Warning richColor={richColor} />;
    case "error":
      return <Error richColor={richColor} />;
    case "info":
      return <Info richColor={richColor} />;
    default:
      return <Success richColor={richColor} />;
  }
};

type ToastProps = {
  onComplete: (id: number) => void;
  index?: number;
  toast: IToast;
  position: toastPosition;
  dismissible?: boolean;
  duration?: number;
  richColors?: boolean;
};

const Toast: FC<ToastProps> = ({
  onComplete,
  index = 1,
  toast,
  position = "right-bottom",
  duration,
  dismissible = false,
  richColors = false,
}) => {
  console.log("inside toast rich", richColors);

  const stylesRef = useRef<undefined | number>();

  const size = 70;
  const DURATION = duration ?? 1000;

  const typeStyle = getStyle(toast.type, richColors);

  const [style, setStyle] = useState<React.CSSProperties>({
    ...typeStyle,
    ...getStyles("initial", position, size, index),
  });

  useEffect(() => {
    console.log("UF 1");

    setStyle({
      ...typeStyle,
      ...getStyles("before", position, size, index),
    });
  }, [DURATION, index, onComplete, position, toast.id]);

  useEffect(() => {
    console.log("UF 2");

    stylesRef.current = setTimeout(() => {
      setStyle({
        ...typeStyle,
        ...getStyles("after", position, size, index),
      });
    }, DURATION);

    const unmountTimer = setTimeout(() => {
      onComplete(toast.id);
    }, DURATION + 100);

    return () => {
      clearTimeout(stylesRef.current);
      clearTimeout(unmountTimer);
    };
  }, [DURATION, index, onComplete, position, toast.id]);

  return (
    <div
      className={`bg-white shadow-md shadow-gray-300 flex justify-between fixed max-h-20 rounded-md p-2 w-[350px] my-3 border-l-4`}
      style={style}
    >
      <div className="flex gap-2 items-center">
        {getIcon(toast.type, richColors)}
        <div>
          <p className="text-sm">{toast.title}</p>
          <p className="text-gray-500 text-xs">{toast.description}</p>
        </div>
      </div>
      {dismissible && (
        <span role="button" onClick={() => onComplete(toast.id)}>
          <img
            alt="close-icon"
            className="w-3 cursor-pointer h-3"
            src={Close}
          />
        </span>
      )}
    </div>
  );
};

export default Toast;
