import React from "react";
import HeroSection from "../components/home/HiFiHeroSection";
import DemocratizingAccessSection from "../components/home/DemocratizingAccessSection";
import StakeholderSection from "../components/home/StakeholderSection";
import ImageDividerSection from "../components/home/ImageDividerSection";
import TrustLayerSection from "../components/home/TrustLayerSection";
import VisionSection from "../components/home/VisionSection";
import HomepageContactFormSection from "../components/home/HomepageContactFormSection";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <DemocratizingAccessSection />
      <ImageDividerSection />
      <StakeholderSection />
      <TrustLayerSection />
      <VisionSection />
      <HomepageContactFormSection />
    </div>
  );
}