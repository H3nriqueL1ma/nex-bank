export default function InputCustom({ id, type, placeholder, register }) {
    return (
        <>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required
                {...register}
            />
        </>
    );
}