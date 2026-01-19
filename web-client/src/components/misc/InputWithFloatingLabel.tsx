import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const InputWithFloatingLabel = React.forwardRef<HTMLInputElement, Props>(
    ({ className, type = "text", label, error, ...props}, ref) => {
        return (
            <div className="flex-1">
                <div className="relative w-full flex-1">
                    <input
                        data-hasplaceholder={props.placeholder ? true : undefined}
                        type={type}
                        className="h-[54px] block px-2.5 py-3 w-full text-sm bg-transparent border border-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-primary peer disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-disabled-100 peer placeholder:invisible placeholder:text-gray-400 placeholder:invisible data-[hasplaceholder=true]:focus:placeholder:visible"
                        placeholder={props.placeholder ?? label}
                        {...props}
                        ref={ref}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={`${props.id}_error`}
                    />
                    <label
                        htmlFor={props.id}
                        className="pointer-events-none select-none absolute cursor-text text-sm text-gray-400 duration-300
                            px-1.5 -translate-y-5 scale-75 bg-white left-1 top-2 z-[5] origin-[0]
                            peer-focus:px-1.5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-blue-700 peer-focus:bg-white
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    >
                        {label}
                    </label>
                </div>
                {error ? (
                    <em className="not-italic text-red-500 text-xs" id={`${props.id}_error`}>{error}</em>
                ) : null}
            </div>
            
        )
    }
);

InputWithFloatingLabel.displayName = 'InputWithFloatingLabel';
export { InputWithFloatingLabel };