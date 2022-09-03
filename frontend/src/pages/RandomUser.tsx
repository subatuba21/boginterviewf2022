import { useEffect } from "react";

export const RandomUser = () => {
    useEffect(() => {
        fetch("/api/randomUser")
            .then((response) => response.text()).then((text) => alert(text));
    }, []);
    return (
        <>Alert gonna be popping up with randomUser!</>
    );
}