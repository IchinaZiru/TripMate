interface SearchResultsProps {
    results: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            ) : (
                <p>該当する宿泊施設が見つかりませんでした。</p>
            )}
        </div>
    );
};

export default SearchResults;
