import './Styles.css'
import { useEffect, useRef, useState } from "react"; 
import typeWriterEffect from '../utils/typeWriterEffect'
import lightningEffect from "../utils/lightningEffect";

const Banner = () => {
    const canvasRef = useRef(null);
    const bannerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        typeWriterEffect("banner_text", "Full Stack Web Developer", 100, 1500);

        const timeout = setTimeout(() => {
            if (canvasRef.current && bannerRef.current) {
                setIsReady(true);
                lightningEffect(canvasRef, bannerRef);
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div ref={bannerRef} id="banner" className="banner_area">
            <canvas ref={canvasRef} className="lightningCanvas"></canvas>
            <ul>
                <li><span id="banner_text" className="banner_text"></span></li>
                <li><a href="mailto:santiagorochav@gmail.com?subject=We%20want%20you%20on%20our%20team!&body=Santiago:%20Thanks%20for%20the%20opportunity.%20Let's%20stay%20in%20touch." className="banner_button">Contact me</a></li>
            </ul>
        </div>
    );
};

export default Banner