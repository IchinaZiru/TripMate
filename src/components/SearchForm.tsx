import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../style/SearchForm.css';  // CSSを読み込み
import Button from '@mui/material/Button';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';


interface SearchFormProps {
    onSearch: (criteria: SearchCriteria) => void;
}

interface SearchCriteria {
    prefecture: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [criteria, setCriteria] = useState<SearchCriteria>({
        prefecture: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        rooms: 1,
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setCriteria({ ...criteria, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(criteria);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div>
                <label>都道府県:</label>
                <select name="prefecture" onChange={handleChange} required>
                    <option value="">選択してください</option>
                    <option value="東京">東京</option>
                    <option value="京都">京都</option>
                    <option value="大阪">大阪</option>
                </select>
            </div>

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
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<PsychologyAltIcon />}>
                    AIにおまかせ
                </Button>
                <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
                    検索
                </Button>
            </Stack>
        </form>
    );
};

export default SearchForm;
