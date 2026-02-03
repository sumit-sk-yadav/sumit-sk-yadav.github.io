import { experience } from '@/data/experience';

export default function ResumePage() {
    return (
        <div className="container animate-fade">
            <section className="section">
                <h1 style={{ marginBottom: '4rem' }}>Experience & Education</h1>

                <div style={{ position: 'relative', borderLeft: '2px solid var(--border)', marginLeft: '0.5rem', paddingLeft: '2.5rem' }}>
                    {experience.map((exp, index) => (
                        <div key={index} style={{ marginBottom: '4rem', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                left: '-2.5rem',
                                top: '0.5rem',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                transform: 'translateX(-50%)',
                                border: '4px solid var(--bg)'
                            }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span className="text-muted" style={{ fontWeight: 600 }}>{exp.period}</span>
                                <h3 style={{ margin: 0, color: 'var(--text)' }}>{exp.role}</h3>
                                <p style={{ fontWeight: 700, color: 'var(--accent-alt)', fontSize: '0.9rem' }}>{exp.company}</p>
                                <p className="text-muted" style={{ marginTop: '0.5rem', maxWidth: '600px' }}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed var(--border)', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Looking for a more detailed PDF version?</p>
                    <a href="/resume.pdf" download className="text-accent" style={{ fontWeight: 700 }}>Download CV / Resume (PDF)</a>
                </div>
            </section>
        </div>
    );
}
