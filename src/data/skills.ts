export const skillGroups = [
    {
        category: "Programming Languages",
        skills: ["Python", "R", "SQL"]
    },
    {
        category: "Machine Learning & AI",
        skills: ["Scikit-learn", "TensorFlow", "XGBoost", "Langchain", "CrewAI", "Optuna"]
    },
    {
        category: "Data & Analytics",
        skills: ["Numpy", "Polars", "Matplotlib", "Seaborn", "Hypothesis testing", "Statistical Analysis"]
    },
    {
        category: "Tools Et al.",
        skills: ["Git", "Docker", "PostgreSQL", "MlFlow", "Unsloth", "Hugging Face Transformers", "Procreate"]
    }
];

// Keep the flat array for compatibility if needed elsewhere
export const skills = skillGroups.flatMap(group =>
    group.skills.map(skill => ({ name: skill, category: group.category }))
);
