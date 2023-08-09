import { useEffect, useState } from "react";

export default function useIntersectionObserver(
    root: HTMLElement | null,
    target: HTMLElement | null,
    options: IntersectionObserverInit = {
        rootMargin: "0px",
        threshold: 1.0,
    }
) {
    const [isIntersecting, setIsIntersect] = useState<boolean>(false);

    const callback = (entries: IntersectionObserverEntry[]) => {
        const isIntersecting = entries.every(entry => entry.isIntersecting);
        setIsIntersect(isIntersecting);
    };

    useEffect(() => {
        if (!target) return;

        const observer = new IntersectionObserver(callback, {
            root,
            ...options,
        });
        observer.observe(target);

        return () => {
            observer.unobserve(target);
            observer.disconnect();
        }
    }, [target, root])

    return isIntersecting;
}