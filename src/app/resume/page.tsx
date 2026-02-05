import { experience } from '@/data/experience';

export default function ResumePage() {
    return (
        <div className="container animate-fade">
            <section className="section">
                <h1 style={{ marginBottom: '2.5rem' }}>Experience & Education</h1>

                <div style={{ position: 'relative', borderLeft: '2px solid var(--border)', marginLeft: '0.5rem', paddingLeft: '2.5rem' }}>
                    {experience.map((exp, index) => (
                        <div key={index} style={{ marginBottom: '2.5rem', position: 'relative' }}>
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
                                <p style={{ fontWeight: 700, color: 'var(--accent-alt)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{exp.company}</p>
                                <ul className="text-muted" style={{ marginTop: '0', maxWidth: '600px', listStyleType: 'disc', paddingLeft: '1.2rem' }}>
                                    {exp.description.map((point: string, pIndex: number) => (
                                        <li key={pIndex} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', padding: '2rem', border: '1px dashed var(--border)', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Download (.docx)</p>
                    <a href="/Sumit_Yadav_Data_Scientist.docx" download className="text-accent" style={{ fontWeight: 700 }}>Sumit_Yadav_Data_Scientist.docx</a>
                </div>
            </section>
        </div>
    );
}
