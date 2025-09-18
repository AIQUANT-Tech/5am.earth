
import  { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiteContent } from "@/api/entities";

const FirstImageDividerSection = () => {
  const [imageUrl, setImageUrl] = useState("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6eafa01c806bd216dd197/ab6311185_zachid_abstract_pictogram_showing_modular_building_blocks_label_3a3f2a26-7b6a-4dc4-9b08-e9b9f46919e6BackgroundRemoved.png");

  useEffect(() => {
    const fetchContent = async () => {
        try {
            const content = await SiteContent.list();
            if (content.length > 0 && content[0].firstImageDividerUrl) {
                setImageUrl(content[0].firstImageDividerUrl);
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
    <div ref={ref} className="relative z-10 -mt-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className='w-full max-w-lg'>
            <motion.img 
              style={{ y }}
              src={imageUrl} 
              alt="Illustration of satellite data layers" 
              className="w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default FirstImageDividerSection;
