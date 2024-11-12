import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TestData {
    id: number;
    name: string;
    address: string;
    spenttime: number;
    cost: number;
    url: string;
    photopass: string;
}

const Testdb: React.FC = () => {
    const [data, setData] = useState<TestData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3100/Test_Data');
                console.log(response.data); // データが取得できているか確認
                setData(response.data.Test_Data || []); // Test_Dataが存在しない場合に空配列を設定
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('データの取得に失敗しました');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>読み込み中...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="test-data-page">
            <h1>観光スポット一覧</h1>
            <ul>
                {data.map((spot) => (
                    <li key={spot.id} className="test-data-item">
                        <h2>{spot.name}</h2>
                        <p>住所: {spot.address}</p>
                        <p>滞在時間: {spot.spenttime}分</p>
                        <p>費用: ¥{spot.cost}</p>
                        <a href={spot.url} target="_blank" rel="noopener noreferrer">
                            詳細ページ
                        </a>
                        <br />
                        <img src={spot.photopass} alt={spot.name} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testdb;
