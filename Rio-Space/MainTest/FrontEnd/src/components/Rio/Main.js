import React from 'react';

const Main = ({ openModal }) => {
    return (
        <main className="main-container">
            <h2>新AI旅行プラン提案サービス</h2>
            <section className="buttons-container">
                <button id="create-plan-button" className="main-button blue-button" onClick={openModal}>
                    プラン<br />作成
                </button>
                <a href="/review-plan" className="main-button red-button">
                    プラン<br />確認・再検討
                </a>
            </section>
        </main>
    );
};

export default Main;