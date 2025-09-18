
import { Sprout, Building2, Briefcase, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function StakeholderSection() {
  const audiences = [
  {
    title: "Farmers",
    description: "Affordable precision agriculture<br/>Soil health & yield forecasts<br/>Verified data for financial services",
    icon: Sprout
  },
  {
    title: "Governments & NGOs",
    description: "Real-time forest monitoring<br/>Climate action tracking<br/>Immutable conservation records",
    icon: Building2
  },
  {
    title: "Enterprises",
    description: "Next-gen sustainable agriculture<br/>Transparent ESG impact measurement<br/>Supply chain accountability",
    icon: Briefcase
  },
  {
    title: "Blockchain Leaders",
    description: "Global 'satellite oracle'<br/>Verified environmental intelligence<br/>Data for sustainable finance & dApps",
    icon: LinkIcon
  }];


  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="pt-8 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}>

          <h2 className="section-headline text-gray-800 mb-4">
            Actionable Intelligence for Every Stakeholder
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide tailored, verified data easily integrated to an application layer to empower stakeholdersdiverse groups in the mission for resilience and sustainability.

          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>

          {audiences.map((audience) =>
          <motion.div
            key={audience.title}
            variants={itemVariants}
            className="bg-white rounded-lg p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">

              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-5">
                <audience.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {audience.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed"

            dangerouslySetInnerHTML={{ __html: audience.description }} />

            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}