import React from "react";
import SectionTitle from "../Common/SectionTitle";

const WorksSection = ({ works }) => {
  const { nodes } = works.data.works;

  return (
    <div className="relative bg-neutral py-16 md:py-36 px-2 md:px-4">
      <div className="t md:max-w-6xl md:mx-auto flex flex-col text-neutral-content gap5 md:gap-20 md:mb-10">
        <SectionTitle>Works</SectionTitle>
      </div>
      <section className="w-full  py-12 md:py-32 bg-neutral">
        <div className="md:max-w-7xl grid gap-8 px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {nodes.map((work, index) => {
              const skills = work.skill.nodes.map((s) => s.name);

              return (
                <WorkItem
                  key={index}
                  id={work.workId}
                  name={work.title}
                  img={work.workACF.eyecatch.node.sourceUrl}
                  skills={skills}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const WorkItem = ({ name, id, img, skills = [] }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border transition-all border-neutral-content hover:border-primary">
      <a href={`${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">{name}</span>
      </a>
      <img
        src={img}
        alt={name}
        className="h-60 w-full object-cover transition-all group-hover:scale-105"
        style={{ aspectRatio: "600/400", objectFit: "cover" }}
      />
      <div className="t p-4 bg-background text-neutral-content">
        <div className="flex gap-1">
          {skills.map((skill, index) => (
            <div
              className="badge badge-neutral-content text-primary"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
        <button
          variant="link"
          className="mt-4 text-sm font-medium text-primary hover:underline"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default WorksSection;
