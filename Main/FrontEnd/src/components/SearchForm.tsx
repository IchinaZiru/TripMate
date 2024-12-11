import React, { useState, ChangeEvent, FormEvent } from 'react';
import Select, { MultiValue, ActionMeta } from 'react-select';
import axios from 'axios'; // axiosをインポート
// CSS
import '../style/SearchForm.css';  // CSSを読み込み
// MUI
import Button from '@mui/material/Button';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

interface SearchFormProps {
    onSearch: (criteria: SearchCriteria) => void;
}

interface SearchCriteria {
    prefecture: string[];
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
    budget: number;
    purpose: string;
    transportation: string[];
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [criteria, setCriteria] = useState<SearchCriteria>({
        prefecture: [],
        checkIn: '',
        checkOut: '',
        guests: 1,
        rooms: 1,
        budget: 0,
        purpose: '',
        transportation: [],
    });

    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setCriteria({ ...criteria, [name]: value });
    };

    const handleSelectChange = (
        selectedOptions: MultiValue<{ value: string; label: string } | null>,
        actionMeta: ActionMeta<{ value: string; label: string } | null>
    ) => {
        const selectedValues = selectedOptions
            .filter((option): option is { value: string; label: string } => option !== null) // nullを除外
            .map((option) => option.value);
        setCriteria({ ...criteria, prefecture: selectedValues });
    };

    // フォームの送信時にバックエンドにデータを送信
    const handleSubmit = async (e: FormEvent, actionType: 'ai' | 'search') => {
        e.preventDefault();

        try {
            const url = actionType === 'ai' ? 'http://localhost:8000/api/ai' : 'http://localhost:8000/api/search'; // 例: AI用と検索用のエンドポイント
            const response = await axios.post(url, criteria, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('サーバーからの応答:', response.data);
            // 送信後の処理（例えば、親コンポーネントに結果を渡す）
            onSearch(criteria);
        } catch (error) {
            console.error('データ送信中にエラーが発生:', error);
        }
    };

    const toggleAdvancedSettings = () => {
        setShowAdvanced(!showAdvanced);
    };

    const pref = [
        { value: 'Hokkaido', label: '北海道' },
        { value: 'Aomori', label: '青森' },
        { value: 'Iwate', label: '岩手' },
        { value: 'Akita', label: '秋田' },
        { value: 'Miyagi', label: '宮城' },
        { value: 'Yamagata', label: '山形' },J
        { value: 'Fukushima', label: '福島' },
    ];

    const trans = [
        { value: 'car', label: '車' },
        { value: 'airplane', label: '飛行機' },
        { value: 'Shinkansen', label: '新幹線' },
        { value: 'train', label: '電車' },
        { value: 'bus', label: 'バス' },
        { value: 'walking', label: '徒歩' },
        { value: 'ship', label: 'フェリー' },
    ];

    return (
        <form className="search-form" onSubmit={(e) => handleSubmit(e, 'search')}>
            <label>都道府県:</label>
            <Select
                name="prefecture"
                options={pref}
                defaultValue={null}
                placeholder="都道府県を選択したください。(複数可)"
                isMulti
                onChange={handleSelectChange}
                required
            />

            <div>
                <label>チェックイン:</label>
                <input type="date" name="checkIn" onChange={handleChange} required />
            </div>

            <div>
                <label>チェックアウト:</label>
                <input type="date" name="checkOut" onChange={handleChange} required />
            </div>

            <div>
                <label>人数:</label>
                <input
                    type="number"
                    name="guests"
                    min={1}
                    value={criteria.guests}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>部屋数:</label>
                <input
                    type="number"
                    name="rooms"
                    min={1}
                    value={criteria.rooms}
                    onChange={handleChange}
                    required
                />
            </div>

            <Button onClick={toggleAdvancedSettings} variant="outlined" className='advanced-settings-button' endIcon={<ExpandMoreIcon />}>
                詳細設定
            </Button>

            {/* 詳細設定フィールド */}
            {showAdvanced && (
                <div className="advanced-settings">
                    <div>
                        <label>旅の予算:</label>
                        <input
                            type="text"
                            name="budget"
                            placeholder='10,000'
                            value={criteria.budget}
                            onChange={handleChange} />
                    </div>

                    <div>
                        <label>交通手段:</label>
                        <Select
                            name="transportation"
                            options={trans}
                            defaultValue={null}
                            placeholder="使用する交通機関を選択したください。(複数可)"
                            isMulti
                            onChange={handleSelectChange}
                        />
                    </div>
                    <label>旅行の目的など(テキスト):</label>
                    <input
                        type="textarea"
                        name="purpose"
                        onChange={handleChange} />
                </div>
            )}

            <Stack direction="row" spacing={2}>
                <Button 
                    variant="outlined" 
                    type="submit" 
                    startIcon={<PsychologyAltIcon />} 
                    onClick={(e) => handleSubmit(e, 'ai')}>
                    AIにおまかせ
                </Button>
                <Button 
                    variant="contained" 
                    type="submit" 
                    endIcon={<SearchIcon />} 
                    onClick={(e) => handleSubmit(e, 'search')}>
                    プラン検討
                </Button>
            </Stack>
        </form>
    );
};

export default SearchForm;
