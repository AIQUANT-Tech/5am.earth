import React, { useState, useEffect } from "react";
import { Eye, Rocket, Heart } from "lucide-react";
import { TeamMember } from "@/api/entities";

export default function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
        try {
            const members = await TeamMember.list('order');
            setTeam(members);
        } catch (e) {
            console.error("Could not fetch team members", e);
        }
    };
    fetchTeam();
  }, []);

  const coreValues = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where every farmer has access to precision agriculture, every conservation effort is verifiably transparent, and climate action is fueled by shared, trusted intelligence."
    },
    {
      icon: Rocket,
      title: "Our Mission",
      description: "To democratize access to trusted environmental and agricultural data through blockchain-verified satellite intelligence, empowering data-driven decisions for a sustainable planet."
    },
    {
      icon: Heart,
      title: "Our Purpose",
      description: "To build the world's most trusted satellite intelligence platform that creates transparent, actionable insights for a sustainable and equitable future for all."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-medium text-gray-800 mb-6 tracking-tighter">
              About 5AM Earth
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are a team of scientists, engineers, and strategists dedicated to creating a more sustainable and transparent world through technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Vision, Mission, Purpose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-green-600" />
                  </div>
                   <h2 className="text-xl font-semibold text-gray-800 ml-4">{value.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-gray-800 mb-4 tracking-tighter">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Experts in satellite technology, AI, and sustainable agriculture.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member) => (
              <div 
                key={member.id}
                className="text-center"
              >
                <img 
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}