export const useHookLocation = () => {

    const handleChangeLocation = (location: string) => {
        window.location.href = location;
    }

    return {
        handleChangeLocation
    }
}