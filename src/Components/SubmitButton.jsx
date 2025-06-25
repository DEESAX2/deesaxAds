import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, className }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`${className} ${pending && "animate-pulse"}`}
        >
            {pending ? "loading..." : title}
        </button>
    );
}