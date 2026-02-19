import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

export default function ArticlesPage() {
    return (
        <div className="container">
            <section className="section">
                <h1 className="text-center mb-3">Writings & Insights</h1>
                <div className="grid-cards">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} {...article} />
                    ))}
                </div>
            </section>
        </div>
    );
}
