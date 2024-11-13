import React, { useEffect, useState } from "react";
import InitialTransition from "../utils/InitialTransition";
import '../style/LoginForm.css';
import { Link } from "react-router-dom";

const RegisterForm = () => {

    const initialValues = { username: "", mailAddress: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isSubmit, setIsSubmit] = useState(false);

    type FormValues = {
        username: string;
        mailAddress: string;
        password: string;
    };

    type FormErrors = {
        username?: string;
        mailAddress?: string;
        password?: string;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //!              バリデーションチェック              !\\

    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};
        //半角英数字のみ(空文字OK)
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        //valueが空ならerrrosの配列に入れる。
        if (!values.username) {
            errors.username = "ユーザー名を入力してください。";
        }
        if (!values.mailAddress) {
            errors.mailAddress = "メールアドレスを入力してください。";
        } else if (!regex.test(values.mailAddress)) {
            errors.mailAddress = "正しいメールアドレスを入力してください";
        }
        if (!values.password) {
            errors.password = "パスワードを入力してください。";
        } else if (values.password.length < 4) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください";
        } else if (values.password.length > 15) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください";
        }
        return errors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        /* 登録情報をここで送信 */

        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    //---------- APIを叩くならここ ----------//
    useEffect(() => {
        console.log(formErrors);
        //エラーなしでかつ送信されているなら。
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        } else {
        }
    }, [formErrors]);

    return (
        <InitialTransition>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>新規登録</h1>
                    <hr />
                    <div className="uiForm">
                        <div className="formField">
                            <label>ユーザー名</label>
                            <input type="text"
                                placeholder="ユーザー名"
                                name="username"
                                value={formValues.username}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <p className="errorMsg">{formErrors.username}</p>
                        <div className="formField">
                            <label>メールアドレス</label>
                            <input type="text"
                                placeholder="メールアドレス"
                                name="mailAddress"
                                value={formValues.mailAddress}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <p className="errorMsg">{formErrors.mailAddress}</p>
                        <div className="formField">
                            <label>パスワード</label>
                            <input type="text"
                                placeholder="パスワード"
                                name="password"
                                value={formValues.password}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <p className="errorMsg">{formErrors.password}</p>
                        <button className="submitButton">新規登録</button>
                        {/* ログイン識別 */}
                        {Object.keys(formErrors).length === 0 && isSubmit && (
                            <div className="msgOk">
                                アカウント登録に成功しました
                            </div>
                        )}
                    </div>
                </form>

            </div>
        </InitialTransition>
    );
};

export default RegisterForm;