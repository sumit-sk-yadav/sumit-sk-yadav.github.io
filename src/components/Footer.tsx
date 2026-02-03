export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Sumit SurenderKumar Yadav.</p>
            </div>
        </footer>
    );
}
