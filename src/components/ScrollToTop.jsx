import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 cursor-pointer">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="text-4xl text-gary-900 hover:text-rose-600">
                    <FaArrowCircleUp />
                </div>
            )}
        </div>
    );
}

export default ScrollToTop;
