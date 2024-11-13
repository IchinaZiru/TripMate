// Recommendations.js
import React, { useState } from 'react';
import '../styles/Recommendations.css';

const Recommendations = ({ recommendations }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const formatDuration = (hours) => {
    if (hours == null) {
      return '情報なし';
    }
    const totalMinutes = Math.round(hours * 60);
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    if (h > 0 && m > 0) {
      return `${h}時間${m}分`;
    } else if (h > 0) {
      return `${h}時間`;
    } else {
      return `${m}分`;
    }
  };

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  return (
    <div className="recommendations-container">
      <h2>おすすめの観光地</h2>
      {recommendations.length > 0 ? (
        <>
          <ul className="recommendations-list">
            {recommendations.slice(0, visibleCount).map((item, index) => (
              <li key={index} className="recommendation-item">
                <div className="recommendation-content">
                  {item.画像_URL && <img src={item.画像_URL} alt={item.名称} className="recommendation-image" />}
                  <h3>{item.名称}</h3>
                  <p><strong>住所:</strong> {item.住所}</p>
                  <p><strong>費用:</strong> {item.費用 ? `${item.費用}円` : '情報なし'}</p>
                  <p><strong>所要時間:</strong> {formatDuration(item.所要時間)}</p>
                  <p><strong>おすすめな人:</strong> {item.おすすめな人 ? item.おすすめな人 : '情報なし'}</p>
                  <p><strong>ジャンル:</strong> {item.ジャンル_表示 ? item.ジャンル_表示 : '情報なし'}</p>
                </div>
                <a href={item.詳細URL} target="_blank" rel="noopener noreferrer" className="detail-button">詳細を見る</a>
              </li>
            ))}
          </ul>
          {visibleCount < recommendations.length && (
            <button className="show-more-button" onClick={handleShowMore}>更に表示</button>
          )}
        </>
      ) : (
        <p>検索結果がありません。</p>
      )}
    </div>
  );
};

export default Recommendations;
