import { toastPosition, ToastType } from "../types/Toast";

export const getSampleCode = (
  type: ToastType
) => `import { toast } from 'sizzler';

const MyComponent = () => {
    const showToast = () => {
        ${getCode(type)}   
        
    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
        </div>
    )
}
`;

const getCode = (type: ToastType) => {
  switch (type) {
    case "success":
      return `// Success toast
        toast.success('Payment successful!');`;
    case "warning":
      return `// warning toast
        toast.warning('Are you sure?');`;
    case "error":
      return `// Error toast
        toast.error('You don't have access');`;
    case "info":
      return `// Info toast
        toast.info('New follower added!');`;
  }
};

export const getToasterCode = () => {
  return `import { toast, toaster } from 'sizzler';

const MyComponent = () => {
    const showToast = () => {
        toast.success('Payment successful!');
    }
    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
            <ToastProvider />
        </div>
    )
}`;
};

export const getBasicUsageCode = () => {
  return `import { toast, toaster } from 'sizzler';

const MyComponent = () => {
    const showToast = () => {
        toast.success('Payment successful!');
    }
        
    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
        </div>
    )
}`;
};

export const getPositionCode = (position: toastPosition) => {
  return `import { toast, Toaster } from 'sizzler';

const MyComponent = () => {
    const showToast = () => {
        toast.success('Payment successful!');
    }
        
    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
            <Toaster position='${position}' /> // pass position to toaster
        </div>
    )
}`;
};

const getIsDismissibleCode = (isDismissible: boolean) => {
  return isDismissible ? "dismissible " : "";
};

export const getDismissibleCode = (isDismissible: boolean) => {
  return `import { toast, Toaster } from 'sizzler';
  
  const MyComponent = () => {
      const showToast = () => {
          toast.success('Payment successful!');
      }
          
      return (
          <div>
              <button onClick={showToast}>Show Toast</button>
              <Toaster ${getIsDismissibleCode(
                isDismissible
              )}/> // pass dismissible to toaster
          </div>
      )
  }`;
};

const getIsRichColorsCode = (isRichColor: boolean) => {
  return isRichColor ? "richColor " : "";
};

export const getRichColorsCode = (isRichColor: boolean) => {
  return `import { toast, Toaster } from 'sizzler';
    
    const MyComponent = () => {
        const showToast = () => {
            toast.success('Payment successful!');
        }
            
        return (
            <div>
                <button onClick={showToast}>Show Toast</button>
                <Toaster ${getIsRichColorsCode(
                  isRichColor
                )}/> // pass richColor to toaster
            </div>
        )
    }`;
};

export const getInstallationCode = () => "npm install sizzler";
