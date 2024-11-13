import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchIcon from '@mui/icons-material/Search';

import video_mp4 from "../images/sakura.mp4";
import video2_mp4 from "../images/water_1.mp4";
import video3_mp4 from "../images/water_2.mp4";

export function VideoPlayer() {
    const navigate = useNavigate(); // navigate 関数を初期化

    // 現在再生中の動画インデックスを管理
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFading, setIsFading] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // ロード中のステート
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // 再生する動画のリスト9
    const videoList = [
        { src: video_mp4, type: "video/mp4" },
        { src: video2_mp4, type: "video/mp4" },
        { src: video3_mp4, type: "video/mp4" }
    ];

    // プラン作成ボタンを押した際に Search ページへ遷移
    const handlePlanCreate = () => {
        navigate("/search");
    };

    // 動画の再生が終わったら次の動画に切り替え
    const handleVideoEnded = () => {
        // フェードアウトを開始
        setIsFading(true);
        setTimeout(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
            setIsFading(false);  // フェードインを開始
        }, 1500); // 1500msの遅延
    };

    // 動画がロードされた後に自動再生
    const handleLoadedData = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.play(); // ロード完了後に再生
        }
    };

    // 動画が変更されたときに自動再生
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load(); // 動画をリロードして新しいソースを適用
            setIsLoading(true); // 新しい動画のロードを開始
        }
    }, [currentVideoIndex]); // currentVideoIndexが変わるたびに動作

    // ウィンドウのリサイズイベントをハンドリングして動画のサイズを調整
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: `${windowHeight}px` }}>
            {/* 動画要素 */}
            <video
                muted
                ref={videoRef}
                onEnded={handleVideoEnded} // 動画が終了したら次の動画へ
                onLoadedData={handleLoadedData} // 動画がロードされたら再生
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%', // 動画の高さをウィンドウにフィット
                    objectFit: 'cover', // アスペクト比を保ちながらウィンドウに合わせる
                    opacity: isFading ? 0 : 1,
                    transition: 'opacity 1s ease' // フェードエフェクト
                }} // 動画をボックス内にフィットさせる
            >
                <source src={videoList[currentVideoIndex].src} type={videoList[currentVideoIndex].type} />
                <p>Your browser doesn't support HTML5 video.</p> {/* エラー表示 */}
            </video>

            {/* 動画の上に表示するテキスト */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%', // 縦の中央
                    left: '50%', // 横の中央
                    transform: 'translate(-50%, -50%)', // 完全に中央に配置
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明の背景
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // ボックスの影
                }}
            >

                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    marginBottom: '15px',
                }}>
                    新AI旅行プラン作成サービス
                </p>

                <Button
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    variant="outlined"
                    onClick={handlePlanCreate}
                    startIcon={<SearchIcon />}
                >
                    プラン作成
                </Button>
                <Button
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    variant="outlined"
                    onClick={() => alert('プラン確認がクリックされました')}
                    startIcon={<ManageSearchIcon />}
                >
                    プラン確認・再検討
                </Button>
            </div>
        </div>
    );
}

export default VideoPlayer;
function setIsFading(arg0: boolean) {
    throw new Error('Function not implemented.');
}

