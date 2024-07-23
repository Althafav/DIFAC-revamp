import Link from 'next/link';
import * as React from 'react';

export interface IBookYourStandComponentProps {
}

export default function BookYourStandComponent(props: IBookYourStandComponentProps) {
    return (
        <div className="register-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <p className="heading">BOOK YOUR STAND TODAY!</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <Link passHref={true} legacyBehavior={true} href={"/book-your-stand"}>
                            <a className="register-btn">Book Your Stand</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
