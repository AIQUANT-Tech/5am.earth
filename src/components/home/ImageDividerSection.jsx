import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiteContent } from "@/api/entities";

const ImageDividerSection = () => {
  const [imageUrl, setImageUrl] = useState("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/e70db1214_secondimage.png");

  useEffect(() => {
    const fetchContent = async () => {
        try {
            const content = await SiteContent.list();
            if (content.length > 0 && content[0].imageDividerUrl) {
                setImageUrl(content[0].imageDividerUrl);
            }
        } catch(e) {
            console.error("Could not fetch site content", e);
        }
    };
    fetchContent();
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className="relative z-10 -mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className='w-full max-w-lg'>
            <motion.img 
              style={{ y }}
              src={imageUrl} 
              alt="Illustration of satellite providing intelligence" 
              className="w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default ImageDividerSection;