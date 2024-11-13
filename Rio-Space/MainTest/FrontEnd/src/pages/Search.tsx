import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import InitialTransition from "../utils/InitialTransition";


interface SearchCriteria {
    prefecture: string[];
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
}

const Search: React.FC = () => {
    const [results, setResults] = useState<string[]>([]);

    const dummyData = [
        '東京のホテルA',
        '京都の旅館B',
        '大阪のホテルC',
        '福岡のビジネスホテルD',
    ];

    const handleSearch = (criteria: SearchCriteria) => {
        const filteredResults = dummyData.filter((item) =>
            criteria.prefecture.some((pref) => item.includes(pref))
        );
        setResults(filteredResults);
    };

    return (
        <InitialTransition>
            <div style={{ paddingTop: '90px' }}>
                <h1>旅行先検索</h1>
                <SearchForm onSearch={handleSearch} />
                <SearchResults results={results} />
            </div>
        </InitialTransition>
    );
};

export default Search;
