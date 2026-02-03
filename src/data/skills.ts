export const skillGroups = [
    {
        category: "Languages",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "HTML/CSS"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "Express", "Sass"]
    },
    {
        category: "Tools & Databases",
        skills: ["Git", "Docker", "PostgreSQL", "MongoDB", "Redis"]
    }
];

// Keep the flat array for compatibility if needed elsewhere
export const skills = skillGroups.flatMap(group =>
    group.skills.map(skill => ({ name: skill, category: group.category }))
);
