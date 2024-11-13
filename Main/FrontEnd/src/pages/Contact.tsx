import React from "react";
import InitialTransition from "../utils/InitialTransition";

const Contact = () => {
    return (
        <InitialTransition>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label className="form-label">メールアドレス</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">お名前</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">お問い合わせ内容</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </InitialTransition>
    );
};

export default Contact;