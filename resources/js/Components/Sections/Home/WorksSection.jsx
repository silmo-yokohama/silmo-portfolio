import React from "react";
import SectionTitle from "../Common/SectionTitle";

const WorksSection = () => {
  return (
    <div className="relative bg-neutral py-16 md:py-36 px-2 md:px-4">
      <div className="t md:max-w-6xl md:mx-auto flex flex-col text-neutral-content gap5 md:gap-20 md:mb-10">
        <SectionTitle>Works</SectionTitle>
      </div>
      <section className="w-full  py-12 md:py-32 bg-neutral">
        <div className="md:max-w-6xl grid gap-8 px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </div>
        </div>
      </section>
    </div>
  );
};

const WorkItem = () => {
  return (
    <div className="group relative overflow-hidden rounded-lg border transition-all hover:border-primary">
      <a href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </a>
      <img
        src="/placeholder.svg"
        alt="Project 2"
        className="h-60 w-full object-cover transition-all group-hover:scale-105"
        style={{ aspectRatio: "600/400", objectFit: "cover" }}
      />
      <div className="t p-4 bg-background text-neutral-content">
        <h3 className="text-lg font-semibold">Project 2</h3>
        <p className="text-sm text-muted-foreground">Lorem ipsum</p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          A full-stack web application with a modern and intuitive user
          interface.
        </p>
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
