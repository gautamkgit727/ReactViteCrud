import { useState, useEffect, useRef } from "react";

const UsefulLinks = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 981) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const feedRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const feedTop = feedRef.current.offsetTop;

            if (window.scrollY > feedTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`widget web-links ${isSticky ? "fixed-links" : ""}`}>
            <h4 className="widget-title">
                Useful Links <a href="#" className="see-all">See All</a>
            </h4>

            <ul>
                {[
                    "about",
                    "career",
                    "advertise",
                    "socimo Apps",
                    "socimo Blog",
                    "Help",
                    "socimo Gifts",
                    "content policy",
                    "User Policy",
                ].map((l) => (
                    <li key={l}>
                        <i className="icofont-dotted-right"></i>
                        <a href="#">{l}</a>
                    </li>
                ))}
            </ul>

            <p>&copy; Socimo 2020. All Rights Reserved.</p>
        </div>
    );
};

export default UsefulLinks;