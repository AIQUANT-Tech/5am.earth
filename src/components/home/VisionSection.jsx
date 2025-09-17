import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiteContent } from "@/api/entities";

export default function VisionSection() {
    const [imageUrl, setImageUrl] = useState("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/77434605c_thirdimage.png");

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const content = await SiteContent.list();
                if (content.length > 0 && content[0].visionImageUrl) {
                    setImageUrl(content[0].visionImageUrl);
                }
            } catch(e) {
                console.error("Could not fetch site content", e);
            }
        };
        fetchContent();
    }, []);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    
    const textVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    
    return (
        <section ref={sectionRef} id="vision" className="bg-gray-900 text-white overflow-hidden flex items-center min-h-[42vh] py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-96 lg:h-auto">
                        <motion.img 
                            style={{ y }}
                            src={imageUrl}
                            alt="Illustration of a cross-section of land with diverse agriculture"
                            className="absolute -bottom-16 lg:static w-full max-w-md mx-auto"
                        />
                    </div>
                    <motion.div 
                        className="text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <h2 className="text-4xl lg:text-5xl font-medium mb-6 tracking-tighter">Our Vision to Empower Every Farmer on the Planet</h2>
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                            "A world where every farmer has access to precision agriculture, every conservation effort is verifiably transparent, and climate action is fueled by shared, trusted intelligence."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}