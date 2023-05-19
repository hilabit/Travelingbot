import { useForm } from "react-hook-form";

export const HomeForm = ({ sendFormData }: { sendFormData: (data: { country: string }) => void }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => sendFormData(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("country")}>
                {["Spain", "Italy", "Japan"].map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <input type="submit" />
        </form>
    );
}
